function hammingWeight(n: number): number {
    let oneCount: number = 0;
    while (n > 0) {
        let bit: number = n % 2;
        if (bit == 1) oneCount++;
        n = Math.trunc(n / 2);
    }
    return oneCount;
};