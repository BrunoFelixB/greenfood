
let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');


bt2.addEventListener('click', function verificiar () {

    if (bt1.style.backgroundColor == "red" ) {

        bt1.style.backgroundColor = 'black'
        bt1.style.fontSize = "15px"
        bt2.style.backgroundColor = "red";
        bt2.style.fontSize = "14px"

    } else {
        bt2.style.backgroundColor = "red";
        bt2.style.fontSize = "14px"
    }
    
})

bt1.addEventListener('click', function verificiar1 () {

    if (bt2.style.backgroundColor == "red" ) {

        bt2.style.backgroundColor = 'black'
        bt2.style.fontSize = "15px"

        bt1.style.backgroundColor = "red";
        bt1.style.fontSize = "14px"
        
    } else {
        bt1.style.backgroundColor = "red";
        bt1.style.fontSize = "14px"
    }
    
})


