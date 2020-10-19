const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let digitsBlocks = expr.match(/.{1,10}/g);
    let dotsAndDashes = [];
    let resultArray = [];
    let result = '';
    for (let digitBlock of digitsBlocks) {
        if (digitBlock == "**********") {
            resultArray.push(' ');
        } else {
            let digitPairsBlock = digitBlock.match(/.{1,2}/g);
            for (let digitPair of digitPairsBlock) {
                if (digitPair == '10') {
                    dotsAndDashes.push('.');
                } else if (digitPair == '11') {
                    dotsAndDashes.push('-');
                }
            }
            resultArray.push(MORSE_TABLE[dotsAndDashes.join('')]);
            dotsAndDashes = [];
        }    
    }
    result = resultArray.join('');
    return result;
}

module.exports = {
    decode
}