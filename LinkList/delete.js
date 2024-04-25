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
    deleteNode(ind)
    {
        let counter=1;
        let lead=this.head
        if(ind==1)
        {
          this.head=this.head.next
        }
        else
        {
          while(counter<ind-1)
          {
            lead=lead.next;
            counter++
          }
          let nextNode=lead.next.next;
          lead.next=nextNode;
          console.log("leadnode",lead);
        }
    }
  
  }
  
  let list = new List(10);
  
  list.appendNode(20);
  list.appendNode(30);
  list.appendNode(40);
  list.appendNode(50);
  list.travesing(); 
  
  list.deleteNode(5);
  
  // console.log(list);