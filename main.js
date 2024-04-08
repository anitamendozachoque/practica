import './style.css'

document.querySelector('#app').innerHTML = `
  <div style="display: flex; flex-direction: column;">
    <h2> HTML CSS & JS </h2>
    <a href="./src/hw01/q01.html"> Go to the first excercise </a>
    <a href="./src/hw02/q02.html"> Go to the second excercise </a>
    <a href="https://keybr.com"> Go to the third excercise </a>
  
    
    </div>
    const buyList = [
      "books",
      "bread",
      "eraser",
      "earphones",
      "collection-cards",
      "hdmi",
      "vga",
      "motherboard",
      "university-books",
    ];
`

setupCounter(document.querySelector('#counter'));
