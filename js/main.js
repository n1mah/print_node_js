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

const outputEr=(data)=>{
    checker(data);
}
const checker = (data)=>{
    if (isObject(data)){
        Paymaesh(data);
    }else {
        if (data!=null) //not
            console.log(data)
    }
}
const Paymaesh = (data)=>{
    // console.log(data)
    // for (const key in data){
    //     console.log(data[key])
    // }
    if (data!=null)
        console.log(Object.keys(data))
    for (const key in data){
        checker(data[key])
    }
};

// const  runner=(data)=>{
//     while ()
// };

// Test 2 Level Show Node Manual
for (const key in node) {
    console.log(key)
    checker(node[key])
    // if (isObject(node[key])){
    //     Paymaesh(node[key]);
    // }else {
    //     console.log(key)
    // }
//     if ()
//     console.log(`${key}: ${node[key]}`);
}