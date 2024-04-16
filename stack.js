
class Stack {
    
    item=[]
    currentSize;
    maxSize;
    constructor(size) {
        
        this.maxSize=size;
        this.currentSize=this.item.length
    }
    push(val) {
        if(this.currentSize>=this.maxSize)
        {
            return console.log("Stack is full");
        }
        else{
           
            this.item[this.currentSize]=val;
            this.currentSize++; 
        }
       
    }
    pop() {
    
        if(this.currentSize<=0)
        {
            return console.log("Stack is alreday empty");
        }
        else
        {  
            let remove=this.item[this.currentSize-1]
            this.currentSize--;
            this.item.length=this.currentSize;
            return remove;
        }
          
    }
    display() {
      console.log(this.item);
      
    }

    rev(item)
    {
       for(let i=0;i<item.length;i++)
       {
          this.push(item[i])
       }
       for(let i=0;i<item.length;i++)
       {
         console.log( this.pop());
       }
    }

}

st = new Stack(10);
// st.push(10);
// st.push(20);
// st.push(30);
// st.push(40);
// st.push(50);
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
str="kishan"
str=str.split("")

st.rev(str);

st.display();
