import { sendArticle } from '../src/client/js/sendArticle.js'

test('sendArticle() should return true.', () => {

    let answer = sendArticle('/', 'pippo').then(answer => {
        expect(answer).toEqual(true)
    })
});