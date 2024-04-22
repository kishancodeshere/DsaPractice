//----------------- map DSA --------------------//

const map=new Map();

map.set("name","Kishan Yadav");
map.set("name1","Dablu Yadav");
console.log(map.get("name"));

console.log(map);
// check keys is exist or not 
console.log(map.has("name"));
// inside set method key we can set all type like boolean string etc

// find key value 
for(let x of map)
{
    console.log(x[1]);
}
// also apply foreach loop

let a=map.forEach((data,index) => {
console.log(index);
   console.log(data);
  

});

// console.log(a);