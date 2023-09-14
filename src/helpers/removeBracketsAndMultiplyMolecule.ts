import {BRACKETS, ERROR_INVALID_MOLECULE, NUMBERS} from "./constants.ts";
import {hasInvalidMolecule} from "./hasInvalidMolecule.ts";

// Hg1{O1N1(S1O3)2}2 -> Hg1O2N2S4O12
export const removeBracketsAndMultiplyMolecule = (molecule: string): string => {
    if (molecule === "") return ""
    if (hasInvalidMolecule(molecule)) throw new Error(ERROR_INVALID_MOLECULE)
    const moleculeCharacters = molecule.split("")
    if (!moleculeCharacters.some(character => BRACKETS.includes(character))) return molecule
    const hasRoundBrackets = moleculeCharacters.some(character => character === "(" || character === ")")
    if (hasRoundBrackets) {
        const indexOfStartRoundBracket = moleculeCharacters.findIndex(character => character === "(")
        const indexOfEndRoundBracket = moleculeCharacters.findIndex(character => character === ")")
        const contentOfRoundBracket = moleculeCharacters.slice(indexOfStartRoundBracket + 1, indexOfEndRoundBracket).join("")
        const multiplier = moleculeCharacters[indexOfEndRoundBracket + 1]
        const moleculesCharacters = contentOfRoundBracket.split("")
        const moleculeMultiplied = moleculesCharacters.map(character => {
            if (NUMBERS.includes(character)) {
                return parseInt(character) * parseInt(multiplier)
            }
            return character
        }).join("")
        const moleculeWithoutRoundBrackets = moleculeCharacters.slice(0, indexOfStartRoundBracket).join("") + moleculeMultiplied + moleculeCharacters.slice(indexOfEndRoundBracket + 2).join("")
        return removeBracketsAndMultiplyMolecule(moleculeWithoutRoundBrackets)
    }
    const hasSquareBrackets = moleculeCharacters.some(character => character === "[" || character === "]")
    if (hasSquareBrackets) {
        const indexOfStartSquareBracket = moleculeCharacters.findIndex(character => character === "[")
        const indexOfEndSquareBracket = moleculeCharacters.findIndex(character => character === "]")
        const contentOfSquareBracket = moleculeCharacters.slice(indexOfStartSquareBracket + 1, indexOfEndSquareBracket).join("")
        const multiplier = moleculeCharacters[indexOfEndSquareBracket + 1]
        const moleculesCharacters = contentOfSquareBracket.split("")
        const moleculeMultiplied = moleculesCharacters.map(character => {
            if (NUMBERS.includes(character)) {
                return parseInt(character) * parseInt(multiplier)
            }
            return character
        }).join("")
        const moleculeWithoutSquareBrackets = moleculeCharacters.slice(0, indexOfStartSquareBracket).join("") + moleculeMultiplied + moleculeCharacters.slice(indexOfEndSquareBracket + 2).join("")
        return removeBracketsAndMultiplyMolecule(moleculeWithoutSquareBrackets)
    }
    const hasCurlyBrackets = moleculeCharacters.some(character => character === "{" || character === "}")
    if (hasCurlyBrackets) {
        const indexOfStartCurlyBracket = moleculeCharacters.findIndex(character => character === "{")
        const indexOfEndCurlyBracket = moleculeCharacters.findIndex(character => character === "}")
        const contentOfCurlyBracket = moleculeCharacters.slice(indexOfStartCurlyBracket + 1, indexOfEndCurlyBracket).join("")
        const multiplier = moleculeCharacters[indexOfEndCurlyBracket + 1]
        const moleculesCharacters = contentOfCurlyBracket.split("")
        const moleculeMultiplied = moleculesCharacters.map(character => {
            if (NUMBERS.includes(character)) {
                return parseInt(character) * parseInt(multiplier)
            }
            return character
        }).join("")
        const moleculeWithoutCurlyBrackets = moleculeCharacters.slice(0, indexOfStartCurlyBracket).join("") + moleculeMultiplied + moleculeCharacters.slice(indexOfEndCurlyBracket + 2).join("")
        return removeBracketsAndMultiplyMolecule(moleculeWithoutCurlyBrackets)
    }
    return molecule
}
