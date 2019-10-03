module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) {
        return false;
    }
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].includes(str[i])) {
                stack.push(str[i]);
                if (
                    stack[stack.length - 1] == bracketsConfig[j][1] &&
                    stack[stack.length - 2] == bracketsConfig[j][0]
                ) {
                    stack.pop();
                    stack.pop();
                }
            }
        }
    }
    if (!stack.length) {
        return true;
    }
    return false;
};
