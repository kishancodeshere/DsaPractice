// const a= [1,2,5,7,96,90,6];

// let i=0
// let searchEle=7;
// while(i<a.length)
// {
//     if(a[i]==searchEle)
//     {
//         console.log(`${a[i]} data found in ${i} location`);
//         return;
//     } 

//     i++;
// }






//  function k(x)
//  {
//     console.log(x);
//     if(x>0)
//     {
//         k(x-1);
//     }


//  }
//  k(5);

// let data = [1, 2, 3, 4, 5, 6];
// let temp;
// function rev(data, start, end) {
//     if (start <= end) {
//         temp = data[start];
//         data[start] = data[end];
//         data[end] = temp;
//         rev(data, start + 1, end - 1)
//     }
// }


// rev(data, 0, data.length - 1);
// console.log(data);


// let data = [6,5,4,3,2,1];
// let temp;
// function rev(data, start, end) {
//     if (start <= end) {
//         temp = data[end];
//         data[end] = data[start];
//         data[start] = temp;
//         rev(data, start + 1, end - 1)
//     }
// }


// rev(data, 0, data.length - 1);
// console.log(data);




// let ar = [];
// let size = 5;
// let cuurentSize = ar.length;

// const push = (val) => {

//     if (cuurentSize >= size) {
//         console.log(`Stack is full`);
//         return;
//     }

//     ar[cuurentSize]=val
//     cuurentSize += 1;

// }

// pop=()=>{

//  if(cuurentSize > 0)
//     {
//         cuurentSize -= 1;
//         ar.length=cuurentSize
    
//     }else
//     {

//         console.log(`Stack is already empty`);
//     }
// }

// push(10)
// push(20)
// push(30)
// push(10)
// pop()
// pop()
// pop()

// console.log(ar);

// let w=[]
// function k(val)
// {
//     let i=0
//     while(i<val.length)
//     {
//         w.push(val[i]);
//         i++;
//     }
// }


// let data=("kishan").split("")   
// k(data);

// console.log(w);

// let ar=[];
// let currentSize=ar.length
// function push(val)
// {
//    ar[currentSize]=val;
//    currentSize+=1;
// }
// function pop()
// {
//   let remove=ar[currentSize-1];
//   currentSize-=1;
//   ar.length=currentSize
//   return remove

// }

// function rev(item)
// {
//    for(let i=0;i<item.length;i++)
//    {
//      push(item[i])
//    }
//    for(let i=0;i<item.length;i++)
//    {console.log(pop());
  
//     }
// }
// let str="renu";

// str=str.split("");

// rev(str);
// console.log(ar);