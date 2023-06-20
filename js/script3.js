const data={
        value:"A",
        left:{
            value:"B",
            left:{
                value:"D",
                right:null,
                left:null,
            },
            right:{
                value:"E",
                right:null,
                left:null,
            },
        },
        right:{
            value:"C",
            left:{
                value:"F",
                right:null,
                left:null,
            },
            right:{
                value:"G",
                right:null,
                left:{
                    value:"H",
                    right:{
                        value:"I",
                        right:null,
                        left:null,
                    },
                    left:null,
                },
            },
        },
}
//Data

const drawLine=(ctx, x1, y1, x2,y2, stroke = 'black', width = 3) =>{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.stroke();
}
const printTree = (node) => {
    const { left, right, value } = node;

    return `
    <div class="element" id="${value}">${value}</div>
    
    ${
        left || right
            ? `
          <div class="children">
            ${
                left
                    ? `
                <div class="node left">
<!--                <canvas class="canvas canvas-left"> </canvas>-->
                  ${printTree(left)}
                </div>
                `
                    : ''
            }
            ${
                right
                    ? `
                <div class="node right">
<!--                <canvas class="canvas canvas-right"> </canvas>-->
                  ${printTree(right)}
                </div>
                `
                    : ''
            }
          </div>
        `
            : ''
    }
  `;
};



const main = () => {
    const root = document.querySelector('#root');
    // console.log(printTree(data))
    root.innerHTML = printTree(data);

};

main();



console.log("A-"+document.querySelector("#A").getBoundingClientRect().left)
console.log("B-"+document.querySelector("#B").getBoundingClientRect().left)
console.log("C-"+document.querySelector("#C").getBoundingClientRect().left)
console.log("D-"+document.querySelector("#D").getBoundingClientRect().left)
console.log("E-"+document.querySelector("#E").getBoundingClientRect().left)
console.log("F-"+document.querySelector("#F").getBoundingClientRect().left)
console.log("G-"+document.querySelector("#G").getBoundingClientRect().left)
document.querySelectorAll(".canvas-right").forEach(value => {
    ctx = value.getContext('2d');
    drawLine(ctx, 0, 0, 30, 30, 'blue', 3);
})

document.querySelectorAll(".canvas-left").forEach(value => {
    ctx = value.getContext('2d');
    drawLine(ctx, 0, 0, 30, 30, 'red', 3);
})

// let canvas = document.querySelector('.canvas'),
//     ctx = canvas.getContext('2d');
// drawLine(ctx, 0, 0, 30, 30, 'blue', 3);