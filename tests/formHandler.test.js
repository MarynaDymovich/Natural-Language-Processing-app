import { handleSubmit } from '../src/client/js/formHandler.js'

test('handleSubmit() should be able to get value from Form field.', () => {

let answer = handleSubmit()

expect(answer).toEqual(true)

});