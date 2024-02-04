function fib(num) {
    let seq = [0, 1];
    if (num <= 1) return 0;
    if (num === 2) return seq;

    let a = 0,
        b = 1;
    for (let i = 0; i < num - 2; i++) {
        seq.push(seq[a] + seq[b]);
        a = b;
        b++;
    }
    return seq;
}

function fibRec(num) {
    if (num <= 1) return [0];
    if (num === 2) return [0, 1];
    const seq = fibRec(num - 1)
    return [...seq, seq[num - 2] + seq[num - 3]]
};