
class List
{
    constructor(data)
    {
      this.head={
        value:data,
        next:null
      }
      this.tail=this.head
    };

    appendNode(nodeData)
    {
      let newNode={
        value:nodeData,
        next:null,
      }
      this.tail.next=newNode;
      this.tail=newNode
    }
}

const list=new List(200);
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)
console.log(list);