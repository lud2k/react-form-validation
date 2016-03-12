
import 'should';
import { Rules } from '../src/rules.js';

describe('Rules', () => {
    describe('required()', () => {
        const context = {},
            error = {
                error: false,
                message: 'This field is required.'
            };

        it('should return true when the values is not empty', () => {
            let result = Rules.required().validate('value', context);
            result.should.equal(true);
        });

        it('should return an error when the values is empty', () => {
            let result = Rules.required().validate('', context);
            result.should.deepEqual(error);
        });

        it('should return an error when the values is null', () => {
            let result = Rules.required().validate(null, context);
            result.should.deepEqual(error);
        });
    });
});
