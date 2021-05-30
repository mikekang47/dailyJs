function solution(s)
{
    let st = [];
    for(let i = 0; i < s.length; i++) {
        if(st.length == 0) {
            st.push(s[i]);
            continue;
        } else {
            if(st[st.length-1] == s[i]) {
                st.pop();
            } else {
                st.push(s[i]);
            }
        }    
    }
    if(st.length == 0) {
        return 1;
    } else {
        return 0;
    }
}