data={
    name:"Kishan Yadav",
    age:22,
    city:"Surat",
    getData:function(){
     return  this.name 
    }
}
console.log(data.name);
console.log(data);
delete data.getData
console.log(data);
data.number=9898998898;
console.log(data);

// for in always traget key  if access value use data[x]
for(x in data)
{
    console.log(data[x]);
}

// output gives an array formet 
console.log(Object.keys(data));
console.log(Object.values(data));

// seal is not delete any property,that is avilable inside the object.
console.log(Object.seal(data));
delete data.name
console.log(data);

// if use is sealed  that check object is seal or not that is return output either true or false

console.log(Object.isSealed(data));