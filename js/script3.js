const data={
    "root":{
        "value":"1",
        "left":{
            "value":"2",
            "left":{
                "value":"4",
                "right":null,
                "left":null,
            },
            "right":{
                "value":"5",
                "right":null,
                "left":null,
            },
        },
        "right":{
            "value":"3",
            "left":{
                "value":"6",
                "right":null,
                "left":null,
            },
            "right":{
                "value":"7",
                "right":null,
                "left":{
                    "value":"8",
                    "right":{
                        "value":"9",
                        "right":null,
                        "left":null,
                    },
                    "left":null,
                },
            },
        },
    }
}
//Data


for (const dataKey in data) {
    console.log(data[dataKey].value)
    console.log(data[dataKey].left.value,data[dataKey].right.value);
    // console.log(data[dataKey].right);
    console.log(data[dataKey].left.left.value,data[dataKey].left.right.value,data[dataKey].right.left.value,data[dataKey].right.right.value);
    // console.log(data[dataKey].left.left.left.value,data[dataKey].left.left.right.value,data[dataKey].left.right.left.value,data[dataKey].left.right.right.value);

}
const getter=()=>{
    let d;
}