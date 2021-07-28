function plusOne(digits: number[]): number[] {
    const arrayCopy: any = digits.slice();
    let arrOfStrings: string[] = String(BigInt(arrayCopy.join('')) + BigInt(1)).split('');
    let resultArray: number[] = arrOfStrings.map(num => Number(num));
    return resultArray;
};