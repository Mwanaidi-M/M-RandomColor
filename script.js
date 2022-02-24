const changeColor = document.querySelector('body');
const reloadPage = document.querySelector('#homeLink');
const displayHexColor = document.querySelector('#hexColorCode');
const displayRgbColor = document.querySelector('#rgbColorCode');

let hexbgColor;
let rgbColor;

changeColor.addEventListener('keyup', (e) => {
    if(e.code === 'Space')
    {
        getHexColor();
        getRgbColor(hexbgColor);
    }
    else{
        return;
    }
});

reloadPage.addEventListener('click', (e) => {
    location.reload();
})

function getHexColor()
{
    hexbgColor = '#'.concat(Math.floor(Math.random()*16777215).toString(16).toUpperCase());
    changeColor.style.backgroundColor = hexbgColor;
    displayHexColor.innerHTML = hexbgColor;
    // console.log(bgColor);
}

function getRgbColor(colorHex)
{
    let r,g,b;
    r = parseInt(colorHex.slice(1,3), 16);
    g = parseInt(colorHex.slice(3,5), 16);
    b = parseInt(colorHex.slice(5,), 16);

    displayRgbColor.innerHTML = `rgb(${r},${g},${b})`;

    // console.log(`${r},${g},${b}`);
}

