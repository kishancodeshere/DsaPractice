const a=[3,5,9,1,10];
const b=[7,8,2,6,11,12];

let c=[];
let i=0,j=0 ,k=0;
while(i<a.length&&j<b.length)
{

    if(a[i]<b[j])
    {
      c[k]=a[i]
     
      i++;
    }else{
        c[k]=b[j]
    
        j++;
    }
k++;
    
}
while(j<b.length)
    {
        c[k]=b[j]
        k++;
        j++;
    }
    


console.log(c);


// for(i=0;i<a.length;i++)
// {
//     c[i]=a[i]
// }
// for(i=0;i<b.length;i++)
// {
//   c[a.length+i]=b[i]
// }


// console.log(c);
