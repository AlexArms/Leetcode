function binaryGap(n) {
    
    let maxGap = 0;
    let currentGap = 0;
    let start = false;
    
    while (n > 0) {
        const bit = n % 2;
        if (start !== false) {
            if (bit === 1) {
                maxGap = Math.max(maxGap, currentGap + 1);
                currentGap = 0;
            } else {
                currentGap += 1;
            }
        } else if (bit === 1) {
            start = true;
        }
        n = Math.trunc(n / 2);
    }
    
    return maxGap;
};