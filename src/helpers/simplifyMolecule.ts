import {isAlphabetic} from "./isAlphabetic.ts";
import {isLowercase} from "./isLowercase.ts";
import {isNumber} from "./isNumber.ts";
import {isBracket} from "./isBracket.ts";
import {ERROR_INVALID_MOLECULE} from "./constants.ts";
import {hasInvalidMolecule} from "./hasInvalidMolecule.ts";

// Hg{ON(SO3)2}2 -> Hg1{O1N1(S1O3)2}2
export const simplifyMolecule = (molecule: string): string => {
    if (!molecule) return ""
    if (hasInvalidMolecule(molecule)) throw new Error(ERROR_INVALID_MOLECULE)
    let moleculeSimplify = ""
    const moleculeCharacters = molecule.split("")
    for (let i = 0; i < moleculeCharacters.length; i++) {
        const character = moleculeCharacters[i]
        const nextCharacter = moleculeCharacters[i + 1]
        const nextNextCharacter = moleculeCharacters[i + 2]
        const isAnAtomWithSingleLetter = isAlphabetic(character) && !isLowercase(nextCharacter)
        const isAnAtomWithTwoLetters = isAlphabetic(character) && isLowercase(nextCharacter)
        const isNextCharacterANumber = isNumber(nextCharacter)

        if (isAnAtomWithSingleLetter) {
            moleculeSimplify += character + (isNextCharacterANumber ? nextCharacter : 1)
            if (isNumber(nextCharacter)) i++
        }
        if (isAnAtomWithTwoLetters && isNumber(nextNextCharacter)) {
            moleculeSimplify += character + nextCharacter + nextNextCharacter
            i += 2
        }
        if (isAnAtomWithTwoLetters && !isNumber(nextNextCharacter)) {
            moleculeSimplify += character + nextCharacter + 1
            i++
        }
        if (isBracket(character) || isNumber(character)) {
            moleculeSimplify += character
        }
    }
    return moleculeSimplify
}
