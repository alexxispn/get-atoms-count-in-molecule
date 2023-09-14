import {hasInvalidMolecule} from "./hasInvalidMolecule.ts"
import {describe} from "vitest"

describe("invalidMolecule", () => {
    it("should return true if the molecule contains invalid characters", () => {
        expect(hasInvalidMolecule("H2O!")).toBe(true)
    })
    it("should return false if the molecule contains only valid characters", () => {
        expect(hasInvalidMolecule("H2O")).toBe(false)
        expect(hasInvalidMolecule("Mg(OH)2")).toBe(false)
    })
})
