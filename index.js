import alfy from 'alfy';
import { randomInt } from 'crypto';
import lists from './lists.js';
import entropy from './entropy.js';

const os = process.env;

const password = (args) => {
    let length = (args) ? args : os.defaultLength;

    if (isNaN(length)) {
        return output([{
            'title': `${length} is not a number`,
            'subtitle': '',
            'arg': '',
            'icon': alfy.icon.error.path
        }]);
    }

    if (length >= 64) {
        length = 64;
    } else if (length < 1) {
        length = 1;
    }

    let combinations = [
        {
            title: `${length} characters – letters + digits + symbols`,
            dictionary: lists.strings + lists.numbers + lists.punctuation,
            delimiter: '',
            length: length
        },
        {
            title: `${length} characters – letters + digits`,
            dictionary: lists.strings + lists.numbers,
            delimiter: '',
            length: length
        },
        {
            title: `${length} characters – letters`,
            dictionary: lists.strings,
            delimiter: '',
            length: length
        },
        {
            title: `${os.words} words`,
            dictionary: lists.words,
            delimiter: '-',
            length: os.words
        }
    ];

    let items = [];
    combinations.forEach(combo => {
        items.push(item(combo));
    });

    output(items);
}

const item = (combo) => {
    let parts = [];

    for (let index = 0; index < combo.length; index++) {
        let number = random(combo.dictionary.length);
        parts.push(combo.dictionary[number]);
    }

    let password = parts.join(combo.delimiter);

    let strength = entropy.strength(combo.length, combo.dictionary.length);
    let icon = entropy.icon(strength);

    return {
        'title': combo.title,
        'subtitle': `${icon} ${password}`,
        'arg': `${password}`,
    }
}

const random = (length) => {
    return randomInt(1, length);
}

const output = (params) => {
    alfy.output(params);
}

password(alfy.input)
