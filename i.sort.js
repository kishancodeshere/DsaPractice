
//-------------------Insertion Sort----------------------//

let ar=[11,12,15,8,9,20];

let i,current,j;

for(i=1;i<ar.length;i++)
{ 
  current=ar[i];
  j=i-1;
  while(j>=0 && ar[j]>current)
  {
    ar[j+1]=ar[j];
     j=j-1;
  }
  ar[j+1]=current;
}

console.log(ar);