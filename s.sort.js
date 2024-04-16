
// let ar=[64, 25, 12, 22, 11];

// let minval;
// for(let i=0;i<ar.length;i++)
// {
//     minval=i

//     for(let j=i+1;j<ar.length;j++)
//     {

//         if(ar[j]<ar[minval])
//         {
//             minval=j
//         }
      
//     }
//     let temp=ar[minval];
//     ar[minval]=ar[i];
//     ar[i]=temp;
// }   

// console.log(ar);



let ar=[10,2,3,45,8,20];

let min;

for(let i=0;i<ar.length;i++)
{
    let min=i;

    for(let j=i+1;j<ar.length;j++)
    {
        if(ar[j]<ar[min])
        {
            min=j
        }
    }

    let temp=ar[min];
    ar[min]=ar[i];
    ar[i]=temp;
}
console.log(ar);