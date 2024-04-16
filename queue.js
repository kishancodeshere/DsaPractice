let ar = [];
let currenSize = ar.length;
let maxSize = 5;


function equeue(val) {
    if (currenSize >= maxSize) {
        return console.log("queue is full...!");
    }
    ar[currenSize] = val;
    currenSize++;
}
function dqueue() {
    if (currenSize <= 0) {
        return console.log("queue is empty...!");
    }
    else {
        for (let i = 0; i < ar.length; i++) {
            ar[i] = ar[i + 1];

        }
        currenSize--;
        ar.length = currenSize;

    }

}

equeue(10);
equeue(20);
equeue(30);
equeue(40);
equeue(50);
dqueue();
dqueue()
//dqueue();


console.log(ar);