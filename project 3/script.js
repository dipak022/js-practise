const btn = document.getElementById('btn'); 
console.log(btn);

// step 1
//create on load function  
window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const coppyBtn = document.getElementById('copy');

    btn.addEventListener('click', function(){
        const rgbBackground = genarateRendomHexColor();
        root.style.backgroundColor = rgbBackground;
        output.value = rgbBackground;
    });

    coppyBtn.addEventListener('click', function(){
        window.navigator.clipboard.writeText(output.value);
    })
    

}

function genarateRendomHexColor(){
    // rgb(0,0,0) - rgb(255,255,255)
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


