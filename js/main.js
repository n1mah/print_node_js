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


const checker = (data,key,k)=>{
    if (isObject(data[key])){
        iterate(data,key,k);
    }else {
        if (data[key]==null){
            console.log(key,k)
            insert1DArray(key,k)
            insert1DObject(key,k)
        }
    }
}
    const iterate = (data,key,k)=>{
    if (data[key]!=null){
        console.log(key,k)
        insert1DArray(key,k)
        insert1DObject(key,k)
    }
    for (const key_sec in data[key]){
        checker(data[key],key_sec,key)
    }
};

let arr=[];
let obj=[];
const insert1DArray=(node,parent)=>{
    arr.push([node,parent]);
};
const insert1DObject=(node,parent)=>{
    let data={
        'parent':parent,
        'value':node
    }
    obj={
        ...obj,
        [node]:data
    }
};


// Test 2 Level Show Node Manual
const Runner= () => {
    for (const key in node) {
        checker(node,key,"")
    }
    console.log(arr);
    console.log(obj);
}
Runner();

// const result=node.group(({ type }) => type);
// console.log(result);

