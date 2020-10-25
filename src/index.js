module.exports = function check(str, bracketsConfig) {
   let strSequence = str.split('');

    if (strSequence.length % 2 !== 0) return false;

    for (let i = 0; i < strSequence.length; i++) {
        bracketsConfig.forEach(item => {
            if (strSequence[i] === item[0] && strSequence[i + 1] === item[1]) {
                strSequence.splice(i, 2);
                i = -1;
            }
        })
    }

    return strSequence.length === 0;
}
