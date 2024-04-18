//----------------palidrome string-------------------//

let pString="abcba"

let k=""
for(let i=pString.length-1;i>=0;i--)
{
   k+= pString[i];
}

if(pString===k)
{
    console.log(`${pString} is Palindrome`);
}
else
{
    console.log(`${pString} is not Palindrome`);

}