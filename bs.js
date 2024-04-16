// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let start = 0;
// let end = arr.length - 1;
// let find = 7
// let pos = undefined;



// while(start<=end)
// {
//     let mid=Math.floor((start+end)/2);
//     if(arr[mid]== find)
//     {
//         pos=mid;
//         break;
//     }
//     else if(arr[mid]<find)
//     {
//         start=mid+1;
//     }
//     else
//     {
//         end=mid-1
//     }
// }


//---------------------recursive approch--------------------------//


// function rbs(arr, start, end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] == find) {
//         pos = mid;
//         return;
//     }
//     else if (arr[mid] < find) {
//         rbs(arr, mid + 1, end);

//     }
//     else {
//         rbs(arr, start, mid - 1);
//     }
// }

// rbs(arr, start, end);


// console.log(`Your element found on ${pos} loction `);




let ar=[1,2,3,4,8,10,12,15,20,22,25,29,30];
let start=0;
let end=ar.length-1;
let find=29;
let pos=undefined;

function rbs(ar,start,end)
{
   mid=Math.floor((start+end)/2);
  if(ar[mid]==find)
  {
      pos=mid;
      return
  }

  else if(ar[mid]<find)
  {
    rbs(ar,mid+1,end)
      
  }
  else
  {
    rbs(ar,start,mid-1)
    
  }
}

rbs(ar,start,end);
console.log(`Your find Element ${ar[pos]} is found on ${pos} this loctaion`);



