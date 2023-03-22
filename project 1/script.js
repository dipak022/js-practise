// step 1
//create on load function  
window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    btn.addEventListener('click', function(){
        const rgbBackground = genarateRendomRGBColor();
        root.style.backgroundColor = rgbBackground;
    });
}



function genarateRendomRGBColor(){
    // rgb(0,0,0) - rgb(255,255,255)
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
