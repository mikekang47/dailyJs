function counter(digit) {
    let num = [];
    let count = 0;
    for(let i = 1; i <= digit; i++) {
        if(digit % i == 0) {
            num.push(1);
        }
        else {
            num.push(0);
        }
    }
    for(let i = 0; i < num.length; i++) {
        if(num[i] != 0) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    var answer = 0;
    console.log(counter(left));
    for(let i = left; i <= right; i++) {
        if(counter(i) % 2 == 0) {
            answer +=  i;
        } else {
            answer -= i;
        }
    }
    return answer;
}