//intuition : keep removing valid parenthesis until no more can be removed. If the string is empty at the end, it was valid.
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        while(
        s.includes('()')||
        s.includes('{}')||
        s.includes('[]'))
        {
            s = s.replace('()','');
            s = s.replace('{}','');
            s = s.replace('[]','');
        }
        return s==='';

    }
}

// brute force approach: using stack
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        for (const char of s) {
            if (map[char]) {
                stack.push(map[char]);
            } else {
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

// optimal approach: using stack and a set
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const openSet = new Set(['(', '{', '[']);

        for (const char of s) {
            if (openSet.has(char)) {
                stack.push(char);
            } else {
                const lastOpen = stack.pop();
                if (
                    (char === ')' && lastOpen !== '(') ||
                    (char === '}' && lastOpen !== '{') ||
                    (char === ']' && lastOpen !== '[')
                ) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}