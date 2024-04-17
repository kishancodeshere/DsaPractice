
let ar=[10,4,7,9,13,20];
let data=[]
let count=0;
for(i=0;i<ar.length;i++)
{
    if(ar[i]%2===0)
    {
        data.push(ar[i]*2);
        count++;
    }
}

console.log(data);
console.log(count);