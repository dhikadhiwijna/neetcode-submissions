class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            '}' : '{',
            ']' : '[',
            ')' : '(',
        }

        for (const char of s) {
            const isBracket = char in map;
            if (!isBracket) {
                stack.push(char);
                continue
            }

            const isEqual = stack[stack.length - 1] === map[char];
            if (isEqual) {
                stack.pop();
                continue
            }

            return false;
        }

        return stack.length === 0;

        // for (let i = 0; i < s.length; i++) {
        //     let char = this.getChar(s[i])
        //     if (s.includes("[") || s.includes('(') || s.includes('{')) {
        //         if (s[s.length - 1 - i] === char) {
        //             return true
        //         }
        //         return false
        //     } else {
        //         continue
        //     }
        // }
    }

    // getChar(s) {
    //     if (s === '[') return ']'
    //     if (s === '{') return '}'
    //     if (s === '(') return ')'
    //     return ''
    // }
}
