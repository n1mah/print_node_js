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

const printTree = (node) => {
    const { left, right, value } = node;
    return `
    <div class="element" id="${value}">${value}</div>
    ${left || right ? `
          <div class="children">
            ${left ? `
                <div class="node left">
                  ${printTree(left)}
                </div>
                ` : ''}
            ${right ? `
                <div class="node right">
                  ${printTree(right)}
                </div>
                ` : ''}
          </div>
        ` : ''}
    `;
};

let positionMade=[];
const drawLine = (node,parent=null,px=null,py=null) => {
    const { left, right, value } = node;
    positionMade.push([value,document.querySelector("#"+value).getBoundingClientRect().left,document.querySelector("#"+value).getBoundingClientRect().top,parent,px,py]);
    if (left!=null)
        (drawLine(left,value,document.querySelector("#"+value).getBoundingClientRect().left,document.querySelector("#"+value).getBoundingClientRect().top))
    if (right!=null)
        (drawLine(right,value,document.querySelector("#"+value).getBoundingClientRect().left,document.querySelector("#"+value).getBoundingClientRect().top))
    return positionMade;
}

const createLineElement=(x, y, length, angle) =>{
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

const createLine=(x1, y1, x2, y2) =>{
    let a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);
    let sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;
    let x = sx - c / 2,
        y = sy;
    let alpha = Math.PI - Math.atan2(-b, a);
    return createLineElement(x, y, c, alpha);
}

const run = () => {
    // Draw Node
    const root = document.querySelector('#root');
    root.innerHTML = printTree(data);

    // Draw Line
    drawLine(data);

    // Append Line In Window
    positionMade.forEach((value,index) => {
        let width=25;
        let height=25;
        if (positionMade[index][3]!=null)
            document.querySelector("#canvases").appendChild(createLine(positionMade[index][4]+width, positionMade[index][5]+height, positionMade[index][1]+width, positionMade[index][2]+height))
    })
}
run();
