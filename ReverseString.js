const reverseString = function(s) {
    // return s.reverse() // one liner but uses native JS function

    let left = 0
    let right = s.length - 1

    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        --right
        ++left
    }

}
