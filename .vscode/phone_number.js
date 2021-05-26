function solution(phone_number) {
    var answer = phone_number.split("");
    
    for(let i = 0; i < phone_number.length-4; ++i) {
        answer.splice(i,1,"*");
    }
    return answer.join("");
}