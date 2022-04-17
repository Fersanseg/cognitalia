export function randomTimeout(n1:number, n2:number):number {
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

    return (Math.random() * (max-min) + min) * 1000;
}