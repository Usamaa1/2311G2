$(document).ready(()=>{

    $('#btn').click(()=>{
        $('#abc').hide(1000)
    })

    $('#btn1').click(()=>{
        $('#abc').show(1000);
    })



    $('#btn2').click(()=>{
        $('#abc').fadeOut(1000)
       
    })

    $('#btn3').click(()=>{
        $('#abc').fadeIn(1000)
       
    })


    $('#btn4').click(()=>{
        $('#abc').fadeTo(1000,0.2)
       
    })

    $('#btn5').click(()=>{
        $('#abc').toggle(1000)
       
    })

    $('#btn6').click(()=>{
        $('#abc').fadeToggle(1000)
       
    })

    $('#btn7').click(()=>{
        $('#abc').slideUp(1000)
       
    })
 
    $('#btn8').click(()=>{
        $('#abc').slideDown(1000)
       
    })
 
    $('#btn9').click(()=>{
        $('#abc').slideToggle(1000)
       
    })


    
})