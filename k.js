
let a=setInterval(() => {
    console.log(Math.floor(Math.random() * 38));
    if(a==37)
    {
        clearInterval(a);
        console.log("lucky number.....");
    }
}, 1000);