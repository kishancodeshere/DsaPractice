const data=new Set([1,1,2,2,3,3,4,5,6]);
const data1=new Set([1,2,3,4,5,6,7,8,9,])


//----Add data in set ------//
data.add(7)

//------ Delete only selected one  data---//
data.delete(2)

console.log(data);

//----------give output just like length property----------//
console.log("Size of data",data.size);


//----------we apply loop also ------------//
data.forEach((d,i)=>{
    console.log(d*i);
})


//-----All clear the set data-----//
data.clear()
