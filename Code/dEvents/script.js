let draw = document.getElementById('draw');
let ctx = draw.getContext('2d');

// console.log(main)

let isMouseDown = false;

draw.addEventListener('mousedown',(e)=>{

    console.log("mouse down",e);
    isMouseDown = true;
    ctx.beginPath();
})
draw.addEventListener('mouseup',(e)=>{
    console.log("mouse up",e)
    isMouseDown = false;
})

draw.addEventListener('mousemove',(e)=>{

    if(isMouseDown)
    {
        console.log("mouse move",e)
        ctx.lineTo(e.clientX, e.clientY);
        ctx.moveTo(e.clientX, e.clientY);
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'red'
        ctx.stroke();

    }

})




