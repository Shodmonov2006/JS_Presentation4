//////////METOD FIND THE LOWEST VALUE AND HIGHEST VALUE:()
//1
function test1(a){
    return a.sort((a,b) => {
        return b-a
    })
}
console.log(test1([1,2,3,4,5]))


//2
function test2(b){
    return b.sort((a,b) => {
        return b-a
    })
}
console.log(test2([2,5,7,2,1,10,11]))


//3
function test3(c){
    return c.sort((a,b) => {
        return b-a
    })
}
console.log(test3([1,2,3,8,5,20,21]))