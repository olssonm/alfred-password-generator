import alfy from 'alfy';
import * as fs from 'fs';

let rows = fs.readFileSync('/usr/share/dict/words', 'utf-8')

let words = alfy.cache.get('words');

if (words === undefined) {
    words = [];
    rows.split(/[\r\n]+/).forEach(word => {
        if (word.length >= 3 && word.length <= 6) {
            words.push(word.toLowerCase());
        }
    });
    alfy.cache.set('words', words);
}

const lists = {
    strings: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    punctuation: '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~',
    words: words
}

export default lists;
