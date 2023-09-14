import {describe} from "vitest";
import {getAtomsCountInMolecule} from "./getAtomsCountInMolecule.ts";
import {ERROR_INVALID_MOLECULE} from "../helpers/constants.ts";


describe("getAtomsCountInMolecule", () => {
    it("should return empty object if molecule is empty", () => {
        expect(getAtomsCountInMolecule("")).toEqual({});
    })
    it("should return an error if the formula contains an invalid character", () => {
        expect(() => getAtomsCountInMolecule("H2O!")).toThrow(ERROR_INVALID_MOLECULE)
    })
    it("should return an simple formula", () => {
        expect(getAtomsCountInMolecule("H2O")).toEqual({H: 2, O: 1});
    })
    it("should return a formula with a round bracket", () => {
        expect(getAtomsCountInMolecule("Mg(OH)2")).toEqual({Mg: 1, O: 2, H: 2});
    })
    it("should return a formula with two round brackets", () => {
        expect(getAtomsCountInMolecule("Mg(OH)2(H2O)2")).toEqual({Mg: 1, O: 4, H: 6});
    })
    it("should return a formula with a square bracket", () => {
        expect(getAtomsCountInMolecule("K4[ON(SO3)2]2")).toEqual({K: 4, O: 14, N: 2, S: 4})
    })
    it("should return a formula with a curly bracket", () => {
        expect(getAtomsCountInMolecule("Hg{ON(SO3)2}2")).toEqual({Hg: 1, O: 14, N: 2, S: 4})
    })
})
