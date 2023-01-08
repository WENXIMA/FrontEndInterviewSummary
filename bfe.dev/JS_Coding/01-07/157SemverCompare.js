function compare(v1, v2) {
    // your code here
    const a = v1.split('.').map(Number);
    const b = v2.split('.').map(Number);
    let i = 0;
    while (i < a.length && i < b.length) {
        if (a[i] > b[i]) {
            return 1;
        }
        if (a[i] < b[i]) {
            return -1;
        }
        i++;

    }
    return 0;

}
const v1 = '12.1.0';
const v2 = '12.0.9';
console.log(compare(v1, v2));