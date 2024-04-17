//-------------------Bubble Sort----------------------//

let ar= [5, 6, 7, 8, 20, 11, 4];

for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
       
        if(ar[j]>ar[j+1])
        {
           let temp=ar[j+1];
           ar[j+1]=ar[j]
           ar[j]=temp;
        }
    }
}


console.log(ar);
