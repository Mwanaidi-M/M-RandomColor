// declared all my needed elements.

const changeBgColor = document.querySelector('body');
const reloadPage = document.querySelector('#homeLink');
const getFooter = document.querySelector('footer');
const displayHexColor = document.querySelector('#hexColorCode');
const displayRgbColor = document.querySelector('#rgbColorCode');

// variable to hold the hex color code
let hexbgColor;

// when you keyup the spacebar, it will call the function to generate a random background color
changeBgColor.addEventListener('keyup', (e) => {
    if(e.code === 'Space')
    {
        getRgbColor();
    }
    else{
        // if any other key is pressed, do nothing.
        return;
    }
});

// when the link at the header is clicked, the page will refresh/reload
reloadPage.addEventListener('click', (e) => {
    location.reload();
})

// main function that does the magic ***
function getRgbColor()
{
    let r,g,b; //my rgb color code variables
    let hr,hg,hb; //variables that make up my hex color code
    let yiq; //my contrast variable; got help from https://gomakethings.com/dynamically-changing-the-text-color-based-on-background-color-contrast-with-vanilla-js/

    // generating random values for rgb color variation
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);

    // generating the hex value & checking if the string length is less than 1 then append '0' to that string
    hr = r.toString(16).length === 1 ? '0'+ r.toString(16) : r.toString(16);
    hg = g.toString(16).length === 1 ? '0'+ g.toString(16) : g.toString(16);
    hb = b.toString(16).length === 1 ? '0'+ b.toString(16) : b.toString(16);

    // calculation to check the contrast
    yiq = ((r*299)+(g*587)+(b*114))/1000;
    
    /* if the contast is greater than 125 set the text color to my variation of 'black', else set it to my variation
    of 'white'. */
    if(yiq > 125)
    {
        reloadPage.style.cssText = 'color: #0F0A0A ';
        displayHexColor.style.cssText = 'color: #0F0A0A ';
        displayRgbColor.style.cssText = 'color: #0F0A0A ';
        getFooter.style.cssText = 'color: #0F0A0A ';
    }
    else
    {
        reloadPage.style.cssText = 'color: #F7F4EA';
        displayHexColor.style.cssText = 'color: #F7F4EA';
        displayRgbColor.style.cssText = 'color: #F7F4EA';
        getFooter.style.cssText = 'color: #F7F4EA';
    }

    // display the generated values to the webpage
    displayRgbColor.innerHTML = `rgb(${r},${g},${b})`;

    hexbgColor = '#'+ hr + hg + hb;
    changeBgColor.style.backgroundColor = hexbgColor;
    displayHexColor.innerHTML = hexbgColor;

    // console.log(hexbgColor);
    // console.log(` ${r},${g},${b}`);
    // console.log(` ${hr},${hg},${hb}`);
}

