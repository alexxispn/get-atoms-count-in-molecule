import {ERROR_INVALID_MOLECULE, LOWERCASE_ABECEDARY, NUMBERS} from "../helpers/constants.ts";
import {AtomCount} from "../helpers/types.ts";
import {simplifyMolecule} from "../helpers/simplifyMolecule.ts";
import {removeBracketsAndMultiplyMolecule} from "../helpers/removeBracketsAndMultiplyMolecule.ts";
import {hasInvalidMolecule} from "../helpers/hasInvalidMolecule.ts";

// Hg1O2N2S4O12 -> {Hg: 1, O: 14, N: 2, S: 4}
export const getAtomsCountInMolecule = (molecule: string): AtomCount => {
    if (!molecule) return {}
    if (hasInvalidMolecule(molecule)) throw new Error(ERROR_INVALID_MOLECULE)
    const moleculeSimplify = simplifyMolecule(molecule)
    const moleculeWithoutBrackets = removeBracketsAndMultiplyMolecule(moleculeSimplify)
    const atomsCount: AtomCount = {}
    const atoms = moleculeWithoutBrackets.split(/(?=[A-Z])/)

    atoms.forEach((atom) => {
        const atomsCharacters = atom.split("")
        const hasLowercase = atomsCharacters.some(character => LOWERCASE_ABECEDARY.includes(character))
        const getAtomCount = (atom: string): number => {
            const atomCharacters = atom.split("")
            const numbers = atomCharacters.filter(character => NUMBERS.includes(character))
            return numbers.length ? parseInt(numbers.join("")) : 1
        }
        const atomName = hasLowercase ? atomsCharacters[0] + atomsCharacters[1] : atomsCharacters[0]
        const atomCount = getAtomCount(atom)
        atomsCount[atomName] = atomsCount[atomName] ? atomsCount[atomName] + atomCount : atomCount
    })

    return atomsCount
}
