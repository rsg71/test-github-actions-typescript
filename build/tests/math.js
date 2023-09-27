"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
describe('Math', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            const result = (0, math_1.add)(1, 3);
            expect(result).toBe(4);
        });
    });
    describe('subtract', () => {
        it('should return the sum of two numbers', () => {
            const result = (0, math_1.subtract)(5, 2);
            expect(result).toBe(3);
        });
    });
});
