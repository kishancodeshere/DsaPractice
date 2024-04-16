

let count=0

let a=setInterval(() => {
    count++;
    console.log(count,"min remening");
    if(count>=24)
    {
        clearInterval(a);
    }
},60000);