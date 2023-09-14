import {BRACKETS, NUMBERS, UPPERCASE_ABECEDARY} from "./constants.ts";

export const hasInvalidMolecule = (molecule: string): boolean => {
    return molecule.split("").some(character => !UPPERCASE_ABECEDARY.includes(character.toUpperCase()) && !NUMBERS.includes(character) && !BRACKETS.includes(character))
}
