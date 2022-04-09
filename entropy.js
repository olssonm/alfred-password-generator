
const entropy = {
    strength: (passwordLength, dictionaryLength) => {
        return Math.log2(dictionaryLength) * passwordLength;
    },
    icon: (entropy) => {
        if (entropy < 26) {
            return '◻◻◻◻';
        } else if (entropy < 36) {
            return '◼◻◻◻';
        } else if (entropy < 60) {
            return '◼◼◻◻';
        } else if (entropy < 128) {
            return '◼◼◼◻';
        }

        return '◼◼◼◼';
    }
}

export default entropy;
