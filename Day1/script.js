//fundamentals of javaScript
//arrays and objects
// functions return
//async js 
// for-each , map , filter ,find , indexOf

var a =[1,2,3,4];


a.forEach(function(val) {
   console.log( val+ " akash");    
});

//              1 akash
// script.js:11 2 akash
// script.js:11 3 akash
// script.js:11 4 akash

var ans =
a.map(function(val){
    return val * 3;
})
console.log(ans);

// (4) [3, 6, 9, 12]

 var ans = a.filter(function(val){
    if(val>=3){
        return true  }
    else {
         return false}
})
console.log(ans);

// [ 3, 4 ]

 var ans = a.find(function(val){
    if(val===2) {
        return true
    } 
    else{
        return false
    }
})
console.log(ans)

// 2

console.log(a.indexOf(3))

// //2

//key-value pair


var obj ={
    name: "Subrata Das",
    age: 21 
}


console.log(obj);

// { name: 'Subrata Das', age: 21 }

console.log(obj.name)
    
// Subrata Das


var obj ={
    name: "Subrata Das",
    age: 21 
}

Object.freeze(obj) //  object.freeze can freeze your entier object and can't update your object 

// hoisting 

obj.age = 25;

console.log(obj);


// number of parameters in function are called length of the function

function abcd(a,b,c){



}

console.log(abcd.length)


function abcd2(){

return 12;

}

console.log(abcd2())



