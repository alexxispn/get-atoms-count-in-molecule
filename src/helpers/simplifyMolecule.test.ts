import {describe} from "vitest";
import {simplifyMolecule} from "./simplifyMolecule.ts";
import {ERROR_INVALID_MOLECULE} from "./constants.ts";


describe("simplifyMolecule", () => {
    // Hg{ON(SO3)2}2 -> Hg1{O1N1(S1O3)2}2
    it("should return an empty string if the input is an empty string", () => {
        expect(simplifyMolecule("")).toBe("")
    })
    it("should throw an error if the input is not a valid molecule", () => {
        expect(() => simplifyMolecule("Hg{ON(SO3)2}2!)")).toThrow(ERROR_INVALID_MOLECULE)
    })
    it("should return a simplified molecule when the input has no brackets", () => {
        expect(simplifyMolecule("HgONSO3")).toBe("Hg1O1N1S1O3")
    })
    it("should return a simplified molecule when the input has brackets", () => {
        expect(simplifyMolecule("Mg(OH)2")).toBe("Mg1(O1H1)2")
    })
    it("should return a simplified molecule when the input has brackets and numbers", () => {
        expect(simplifyMolecule("Hg{ON(SO3)2}2")).toBe("Hg1{O1N1(S1O3)2}2")
    })
})
