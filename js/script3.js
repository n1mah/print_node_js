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
                  ${printTree(left)}
                </div>
                `
                    : ''
            }
            ${
                right
                    ? `
                <div class="node right">
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



// console.log("A-"+document.querySelector("#A").getBoundingClientRect().left)
// console.log("B-"+document.querySelector("#B").getBoundingClientRect().left)
// console.log("C-"+document.querySelector("#C").getBoundingClientRect().left)
// console.log("D-"+document.querySelector("#D").getBoundingClientRect().left)
// console.log("E-"+document.querySelector("#E").getBoundingClientRect().left)
// console.log("F-"+document.querySelector("#F").getBoundingClientRect().left)
// console.log("G-"+document.querySelector("#G").getBoundingClientRect().left)
// document.querySelectorAll(".canvas-right").forEach(value => {
//     ctx = value.getContext('2d');
//     drawLine(ctx, 0, 0, 30, 30, 'blue', 3);
// })

// document.querySelectorAll(".canvas-left").forEach(value => {
//     ctx = value.getContext('2d');
//     drawLine(ctx, 0, 0, 30, 30, 'red', 3);
// })

let positionMade=[];
const ddd = (node,parent=null,px=null,py=null) => {
    const { left, right, value } = node;
    // if (parent!==null && px!==null && py!==null){
    //
    // }
    positionMade.push([value,document.querySelector("#"+value).getBoundingClientRect().left,document.querySelector("#"+value).getBoundingClientRect().top,parent,px,py]);
    if (left!=null)
        (ddd(left,value,document.querySelector("#"+value).getBoundingClientRect().left,document.querySelector("#"+value).getBoundingClientRect().top))
    if (right!=null)
        (ddd(right,value,document.querySelector("#"+value).getBoundingClientRect().left,document.querySelector("#"+value).getBoundingClientRect().top))
    return positionMade;
}
console.log(ddd(data));

positionMade.forEach((value,index) => {
    let width=25;
    let height=25;
    // console.log(positionMade)
    if (positionMade[index][3]!=null){
        document.querySelector("#canvases").appendChild(createLine(positionMade[index][4]+width, positionMade[index][5]+height, positionMade[index][1]+width, positionMade[index][2]+height))

        // document.querySelector("#canvases").innerHTML+=`
        //         <canvas class="canvas canvas-${positionMade[index][0]}"> </canvas>
        // `;

        // let el=document.querySelector(".canvas-"+positionMade[index][0])
        // console.log(el)
        // let ctx = el.getContext('2d');
        // console.log(positionMade[index][4], positionMade[index][5] , positionMade[index][1], positionMade[index][2])
        // console.log(positionMade[index-1][2])
        // console.log(positionMade[index][1])
        // console.log(positionMade[index][2])
        // drawLine(ctx, positionMade[index][4], positionMade[index][5] , positionMade[index][1], positionMade[index][2], 'blue', 3);
        // console.log(positionMade[index][0])
    }
})

//
// document.querySelector("#canvases").innerHTML+=`<canvas class="canvas1"> </canvas>`;
//
// let canvas = document.querySelector('.canvas1'),
//     ctx = canvas.getContext('2d');
// drawLine(ctx, 300, 0, 600, 900, 'blue', 20);
//
//

function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
        + 'width: ' + length + 'px; '
        + 'height: 0px; '
        + '-moz-transform: rotate(' + angle + 'rad); '
        + '-webkit-transform: rotate(' + angle + 'rad); '
        + '-o-transform: rotate(' + angle + 'rad); '
        + '-ms-transform: rotate(' + angle + 'rad); '
        + 'position: absolute; '
        + 'top: ' + y + 'px; '
        + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
}

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha);
}

// document.body.appendChild(createLine(100, 100, 200, 200));

