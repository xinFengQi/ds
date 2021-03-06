const a = `
 function ee(a){
    console.log(a);
}
return ee;
`
const b = `
    console.log('999');
`

const c = new Function( a)()

c(2)
