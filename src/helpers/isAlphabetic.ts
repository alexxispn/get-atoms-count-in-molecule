import {UPPERCASE_ABECEDARY} from "./constants.ts";

export const isAlphabetic = (character: string): boolean => UPPERCASE_ABECEDARY.includes(character.toUpperCase())
