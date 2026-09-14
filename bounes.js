var romanToInt = function(s) {
    let ans= 0;
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;
    for (let i = 0; i < s.length; i++) {
        let c;
        if (s[i] === 'I') {
            c = I;
        } else if (s[i] === 'V') {
            c = V;
        } else if (s[i] === 'X') {
            c = X;
        } else if (s[i] === 'L') {
            c = L;
        } else if (s[i] === 'C') {
            c = C;
        } else if (s[i] === 'D') {
            c = D;
        } else if (s[i] === 'M') {
            c = M;
        }
        if (i + 1 < s.length) {
            let n;
            if (s[i + 1] === 'M') {
                n = M;
            } else if (s[i + 1] === 'D') {
                n = D;
            } else if (s[i + 1] === 'C') {
                n = C;
            } else if (s[i + 1] === 'L') {
                n = L;
            } else if (s[i + 1] === 'X') {
                n = X;
            } else if (s[i + 1] === 'V') {
                n = V;
            } else {
                n = I;
            }

            if (c < n) {
                ans -= c;
            } else {
                ans += c;
            }
        } else {
            ans += c;
        }
    }
    return ans;
};

console.log(romanToInt('III'));