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



const isObject = (data) => {
    if (data === null) {
        return false;
    }
    return typeof data === 'object';
};


const checker = (data,key,k)=>{
    if (isObject(data[key])){
        iterate(data,key,k);
    }else {
        if (data[key]==null){
            // console.log(key,k)
            insert1DArray(key,k)
            insert1DArray2(key,k)
            insert1DObject(key,k)
        }
    }
}


const iterate = (data,key,k)=>{
    if (data[key]!=null){
        // console.log(key,k)
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
let obj;
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

const Runner= () => {
    for (const key in node) {
        checker(node,key,"")
    }
    // console.log(arr);
    console.log(obj);
}
Runner();


const groupArrayObject = arr2.reduce((group, arr) => {

        const { parent } = arr;

        group[parent] = group[parent] ?? [];

        group[parent].push(arr);

        return group;

    },

    {});
//----------------------------

// for (const objKey in obj) {
//     // console.log(objKey)
// }
// console.log(groupArrayObject)
const creator=(data,have=null)=>{
    // let root=document.querySelector("#root").innerHTML;

    str=`<span>${data}</span>`;
    have===null?str+="":str+="<br>";
    document.querySelector("#root").innerHTML+=str;
}

for (const objKey in groupArrayObject) {
    console.log(objKey,groupArrayObject[objKey])
    for (let i = 0; i < groupArrayObject[objKey].length; i++) {
        creator(groupArrayObject[objKey][i].value)
    }
    creator("",'')
}