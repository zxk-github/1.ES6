// "use strict"

{
    var a = 1;
    let b = 1;
    {
        let c = 1;
        console.log(b) //1
    }
}
console.log(a)
// console.log(b)  // error b is undefined

for(var i = 0; i < 3; i++){}
console.log(i); //3

for(let j = 0; j < 3; j++){}
// console.log(j) error j is not defined

var c = 0;
function fn() {
    console.log(c);
    // let c;
}
fn()

function boo(){
    console.log(2)
}
function foo() {
    boo();
    if(true) {
        function boo() {
            console.log(1)
        }
    }
}
foo()

