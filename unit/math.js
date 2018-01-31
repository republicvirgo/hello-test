const expect = require("chai").expect
const assert = require("assert")

const math = require("../app/math")

describe("Math", function() {
  describe("Addition", function() {
    it("x + y = x + y", function() {
      expect(math.add(1, 1)).to.equal(2)
      expect(math.add(2, 2)).to.equal(4)
      expect(math.add(3, 3)).to.equal(6)
    })
    it("x + -y = x - y", function() {
      assert.strictEqual(math.add(1, -1), 0)
      assert.strictEqual(math.add(2, -2), 0)
      assert.strictEqual(math.add(3, -3), 0)
    })
    it("x + 'a' = 'xa'", function() {
      assert.strictEqual(math.add(1, "1"), "11")
      assert.strictEqual(math.add(2, "2"), "22")
      assert.strictEqual(math.add(3, "3"), "33")
    })
  })

  describe("Substraction", function() {
    it("x - y = x - y", function() {
      assert.strictEqual(math.substract(1, 1), 0)
      assert.strictEqual(math.substract(2, 2), 0)
      assert.strictEqual(math.substract(3, 3), 0)
    })
    it("x - -y = x + y", function() {
      assert.strictEqual(math.substract(1, -1), 2)
      assert.strictEqual(math.substract(2, -2), 4)
      assert.strictEqual(math.substract(3, -3), 6)
    })
  })
})
