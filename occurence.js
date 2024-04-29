
let data = "KISHANYADAV";

let k = {};
// let maxkey = ""
for (let i = 0; i < data.length; i++) {
    let key = data[i]

    if (!k[key]) {
        k[key] = 0;
    }
    k[key]++

    // if (maxkey == "" || k[key] > k[maxkey]) {
    //     maxkey = key;
    // }
}

console.log(k);
