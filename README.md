# Print Node with Line 
If you Need Draw Trees (Node trees) You can use it

## :zap: Usage 

### HTML 

Add Div To Html Structure
```html
<div class="container">
    <div id="root">

    </div>
</div>
<div id="canvases"></div>
```

Add Script
```html
<script src="js/script.js"></script>
```

### JS 
Add Data
Example :
```js
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
```

## :camera: Screenshot
Screenshot on browser :

![](Screenshot.png)
