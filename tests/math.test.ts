import { add, subtract } from "../math";


describe('Math functions', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            const result = add(1, 3);
            expect(result).toBe(4);
        })
    });

    // describe('subtract', () => {
    //     it('should return the difference between two numbers', () => {
    //         const result = subtract(5, 2);
    //         expect(result).toBe(3);
    //     })
    // });
})