
//-------------------Selection Sort----------------------//


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