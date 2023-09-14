import {describe} from "vitest";
import {removeBracketsAndMultiplyMolecule} from "./removeBracketsAndMultiplyMolecule.ts";
import {ERROR_INVALID_MOLECULE} from "./constants.ts";


describe("removeBracketsAndMultiplyMolecule", () => {
    it("should return empty string if empty string is passed", () => {
        expect(removeBracketsAndMultiplyMolecule("")).toBe("")
    })
    it("should throw an error if invalid molecule is passed", () => {
        expect(() => removeBracketsAndMultiplyMolecule("H2O!")).toThrow(ERROR_INVALID_MOLECULE)
    })
    it("should return the same string if no brackets are present", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1O1")).toBe("Hg1O1")
    })
    it("should return the molecule without round brackets and multiplied by the number after the brackets when there" +
        " is only one round brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1(O1)2")).toBe("Hg1O2")
    })
    it("should return the molecule without round brackets and multiplied by the number after the brackets when there" +
        " are multiple round brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1(O1N1(S1O3)2)2")).toBe("Hg1O2N2S4O12")
    })
    it("should return the molecule without square brackets and multiplied by the number after the brackets when there" +
        " is only one square brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1[O1]2")).toBe("Hg1O2")
    })
    it("should return the molecule without square brackets and multiplied by the number after the brackets when there" +
        " are multiple square brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1[O1N1[S1O3]2]2")).toBe("Hg1O2N2S4O12")
    })
    it("should return the molecule without curly brackets and multiplied by the number after the brackets when there" +
        " is only one curly brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1{O1}2")).toBe("Hg1O2")
    })
    it("should return the molecule without curly brackets and multiplied by the number after the brackets when there" +
        " are multiple curly brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1{O1N1{S1O3}2}2")).toBe("Hg1O2N2S4O12")
    })
    it("should return the molecule without all brackets and multiplied by the number after the brackets when there" +
        " are multiple brackets", () => {
        expect(removeBracketsAndMultiplyMolecule("Hg1{O1N1(S1O3)2}2")).toBe("Hg1O2N2S4O12")
    })
})
