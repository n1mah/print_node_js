let node = {
    A: {
       B:{
           D:{
               J:{
                   R:null
               },
               K:null
           },
           E:{
               L:null,
               M:null
           },
           F:{
               N:null,
               O:null
           },
       },
       C:{
           G:{
               P:null,
           },
           H:{
               Q: {
                   S:{
                       T:null
                   }
               },
           },
           I:{
               Z:null
           },
       },
    },
};

// console.log(node)
// node.map()
// node.forEach(()=>{
//     console.log(value);
// });

const getD = (data) =>{
    if (isObject(data)){

    }
}
const isObject = (data) => {
    if (data === null) {
        return false;
    }
    return typeof data === 'object';
};

// const outputEr=(data)=>{
//     checker(data);
// }


const checker = (data,key)=>{
    if (isObject(data[key])){
        Paymaesh(data,key);
    }else {
        if (data[key]==null) //not
            console.log(key)
    }
}
const Paymaesh = (data,key)=>{
    if (data[key]!=null)
        // console.log(Object.keys(data))
        console.log(key)
    for (const key_sec in data[key]){
        checker(data[key],key_sec)
    }
};


// Test 2 Level Show Node Manual
const Runner= () => {
    for (const key in node) {
        checker(node,key)
    }
}
Runner();