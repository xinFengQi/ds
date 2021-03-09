const a = `
 function ee(a){
    console.log(a);
    console.log('123123123')
}
return ee;
`
const b = `
    console.log('999');
`

const c = new Function(a)()(123123)

