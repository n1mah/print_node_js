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
            insert1DArray2(key,k)
            insert1DObject(key,k)
        }
    }
}
    const iterate = (data,key,k)=>{
    if (data[key]!=null){
        console.log(key,k)
        insert1DArray(key,k)
        insert1DArray2(key,k)
        insert1DObject(key,k)
    }
    for (const key_sec in data[key]){
        checker(data[key],key_sec,key)
    }
};

let arr=[];
let arr2=[];
let obj=[];
const insert1DArray=(node,parent)=>{
    arr.push([node,parent]);
};
const insert1DArray2=(node,parent)=>{
    let data={
        'parent':parent,
        'value':node
    }
    arr2.push(data);
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

// const result=Array.prototype.group.call(obj,(x)=>{
//     console.log(x)});
// console.log(result);
// const groupBy = (items, key) => items.reduce(
//     (result, item) => ({
//         ...result,
//         [item[key]]: [
//             ...(result[item[key]] || []),
//             item,
//         ],
//     }),
//     {},
// );

// let r=arr.reduce((group, obj) => {
//     console.log("--")
//     console.log(obj)
    // return obj
// });
// console.log(r)
// groupBy(obj,'A')

// const groupByCategory = obj.reduce((group, product) => {
//     const { category } = product;
//     group[category] = group[category] ?? [];
//     group[category].push(product);
//     return group;
// }, {});
//
// console.log(groupByCategory);



const groupArrayObject = arr2.reduce((group, arr) => {

        const { parent } = arr;

        group[parent] = group[parent] ?? [];

        group[parent].push(arr);

        return group;

    },

    {});

console.log(groupArrayObject);


//Log Node child on parent
const logOrderNode=()=>{
    for (const groupArrayObjectKey in groupArrayObject) {
        let str="";
        for (let i = 0; i < groupArrayObject[groupArrayObjectKey].length; i++) {
            str+=(groupArrayObject[groupArrayObjectKey][i].value);
            str+=(i!==groupArrayObject[groupArrayObjectKey].length-1)?"    |    ":" ";
        }
        console.log(str)
        console.log('--')
    }
}
console.log('---------')

const searchNodeWithParent=(parent)=>{
    console.log(groupArrayObject[parent])
}
searchNodeWithParent("A")
searchNodeWithParent("B")


