/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    // 思路：用两个哈希表，一个存储words中的字符串和出现次数
    //      一个存储待匹配字符串中的words中字符串和出现次数
    //      如果两个哈希表的键值对不上则说明不匹配
    let left = 0, right = 0;
    let slen = s.length;
    let wordLen = words[0].length;
    let wordNum = words.length;
    let wlen = wordNum * wordLen;
    let wordMap = new Map();
    for (let word of words) {
        let count = wordMap.has(word) ? wordMap.get(word) : 0;
        wordMap.set(word, count + 1);
    }
    let res = [];
    while (right < slen) {
        right++;
        if (right - left === wlen) {
            if (match(s.substring(left, right), wordMap, wordNum, wordLen)) {
                res.push(left);
            }
            left++;
        }
    }
    return res;
};

function match(str, wordMap, wordNum, wordLen) {
    let map = new Map();
    for (let i = 0; i < wordNum; i++) {
        let word = str.substring(i * wordLen, (i + 1) * wordLen);
        let count = map.has(word) ? map.get(word) : 0;
        map.set(word, count + 1);
    }
    let matchflag = true;
    for (let [key, value] of wordMap) {
        if (!map.has(key) || map.get(key) !== value) {
            matchflag = false;
        }
    }
    return matchflag;
}
// @lc code=end

