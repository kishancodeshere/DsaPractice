class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;


    }
    appendNode(nodedata) {
        const newNode = {
            value: nodedata,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }
    
    // traversing of linked list element

    travesing() {
        let counter = 0;
        let currenctNode = this.head;
        while (counter < this.size) {
            console.log(currenctNode);
            currenctNode = currenctNode.next;

            counter++
        }
    }
  

}

let list = new List(10);

list.appendNode(20);
list.appendNode(30);
list.appendNode(40);
list.appendNode(50);


list.travesing();


console.log(list);