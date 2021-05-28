function solution(progresses, speeds) {
    var answer = [];
    let q = [];
    let speed = [];
    let day = 1;
    let num = 0;
    for(let i = 0; i < progresses.length; i++) {
        q.push(progresses[i]);
        speed.push(speeds[i]);
    }
    while(q.length!= 0) {
        while((100-q[0]) <= speed[0] * day) {
            q.shift();
            speed.shift();
            num++;
        }
        if(num != 0) {
            answer.push(num);
        }
        num = 0;
        day++;
    }
    return answer;
}