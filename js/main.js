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
               Q:null,
           },
           I:null,
       },
    },
};

// console.log(node)
// node.map()
// node.forEach(()=>{
//     console.log(value);
// });


// Test 2 Level Show Node Manual
for (const key in node) {
    console.log(key)
    if (node[key]){
        console.log(node[key])
        for (const key2 in node[key]){
            console.log(node[key][key2])
        }
    }else {
        console.log(key)
    }
//     if ()
//     console.log(`${key}: ${node[key]}`);
}