// node practice-001.js 3 0 2 0 4
/**
 * Trapping Rain Water :  [ '3', '0', '2', '0', '4' ]
 * [ '3', '0', '2', '0', '4' ]
 * Max 3 now 3 =  0
 * Max 3 now 0 =  3
 * Max 3 now 2 =  1
 * Max 3 now 0 =  3
 * 7
 */
console.log('Trapping Rain Water : ',process.argv.slice(2))
const arr = process.argv.slice(2)
let left=0;
let total=0;
let m = Math.ceil(arr.length/2)
console.log(arr)
for (let i=0;i<m;i++){
 if(left<arr[i]){
   left=arr[i];
 }
  console.log(`Max ${left} now ${arr[i]} = `,Math.abs(left-arr[i]))
 if(left-arr[i] > 0) total += Math.abs(left-arr[i])
}
let right = 0;
for (let i=arr.length-1;i>=m;i--){
 if(right<arr[i]){
   right=arr[i];
 }
 if(right > arr[i]) {
   console.log(`Max ${Math.min(left,right)} now ${arr[i]} = `,Math.abs(Math.min(left,right)-arr[i]))
   total += Math.abs(Math.min(left,right)-arr[i])
 }
}
console.log(total)
