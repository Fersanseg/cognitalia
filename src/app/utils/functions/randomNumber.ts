/**
 * @param n1 The first range limit of the generated number
 * @param n2 The second range limit of the generated number
 * @param length The amount of digits the resulting number will have
 * @returns A random number in the specified range, of the specified length
 */
export function randomNumber(n1:number, n2:number, length:number):number {
    let min:number;
    let max:number;

    if(n1<n2) {
        min = n1;
        max = n2;
    } else if (n1>n2) {
        min = n2;
        max = n1;
    } else {
        return n1;
    }

    let newLength:string = "1";
    for(var i=1; i<length; i++) {
        newLength += "0";
    }

    return (Math.random() * (max-min) + min) * parseInt(newLength);
}