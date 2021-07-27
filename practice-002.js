/**
 * Most frequent word in an array of strings
 * node test2.js kshsqa kshsqa cbwg kshsqa kshsqa opvmc kshsqa cbwg kshsqa cbwg opvmc kshsqa kshsqa
 * Key kshsqa = 8
 * Key cbwg = 3
 * Key opvmc = 2
 * kshsqa
 */
let arr = process.argv.slice(2)
let map = {}
for (let i = 0; i < arr.length; i++) {
  if(!map[arr[i]]) map[arr[i]] = 0;
  map[arr[i]]++;
}
let max = 0;
let op = '';
for (const [k,v] of Object.entries(map)) {
  console.log(`Key ${k} = ${v}`)
  if (max <= v) {
    max = v;
    op = k;
  }
}
console.log(op)
