const assert = require("assert");
const bfuck = require("./");

describe("bfuck", () => {
	describe("compiler", () => {
		const source = "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
		let func;

		it("should return a function", () => {
			func = bfuck(source);
			assert(typeof func == "function");
		});

		it("should output 'Hello World!'", () => {
			assert(func() == "Hello World!\n");
		});
	});
});
