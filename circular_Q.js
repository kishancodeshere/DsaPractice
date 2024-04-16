// class circularQueue {

//     constructor(size) {
//         this.max = size;
//         this.items = new Array(size);
//         this.currentSize = 0;
//         this.front = -1
//         this.rear = -1
//     }

//     enqueue(value) {
//         if (this.currentSize != this.max) {
//             if (this.rear == this.max - 1) {
//                 this.rear = 0;
//             }
//             else {
//                 this.rear++;
//             }

//             this.items[this.rear] = value;
//             this.currentSize++;
//             if (this.front == -1) {
//                 this.front = this.rear
//             }
//         }
//     }
//     dqueue() {
//         if (this.currentSize != 0) {

//             let data=this.items[this.front] = null;
//             if (this.front == this.rear - 1) {
//                 this.front = 0;
//             }
//             else {
//                 this.front++;
//             }
//             this.currentSize--;
//             return data;
//         }
//         else {
//             this.front = -1
//             this.rear = -1
//             return console.log("Queue is empty..!");
//         }
//     }
//     display() {
//         console.log(this.items);
//     }
// }

// queue = new circularQueue(5);

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.dqueue();


// queue.display();
// console.log(queue);



class circularQueue {
    constructor(size) {
        this.max = size
        this.items = new Array(size);
        this.currentSize = 0;
        this.front = -1
        this.rear = -1
    }

    enqueue(val) {
        if (this.currentSize != this.max) {
            if (this.rear == this.max - 1) {
                this.rear = 0;
            }
            else {

                this.rear++;
            }
            this.items[this.rear] = val;
            this.currentSize++;

            if (this.front == -1) {
                this.front = this.rear;
            }
        }
        else {
            return console.log("Queue is Fully");
        }
    }
    dqueue() {
        if (this.currentSize != 0) {
            let a = this.items[this.front];
            this.items[this.front] = null;
            if (this.front == this.max - 1) {
                this.front = 0;
            }
            else {
                this.front++;
            }
            this.currentSize--;

            return console.log("Remove item in queue :: ", a);
        }
        else {
            this.front = -1
            this.rear = -1
            return console.log("Stack is alredy empty");
        }

    }
    display() {
        console.log(this.items);

    }
}
queue = new circularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.dqueue()



// queue.enqueue(60);
queue.display();


console.log(queue);

