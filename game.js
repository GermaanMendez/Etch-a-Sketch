let currentColor = '#A9D39E';
let currentRows = 0;
let currentColumns=0;
let isMouseDown = false;
let isRainwobMode = false;

const DIVgridContainer = document.getElementById('gridContainerr');
                         DIVgridContainer.addEventListener('mousedown',()=>{isMouseDown=true } )
                         DIVgridContainer.addEventListener('mouseup',()=>{isMouseDown=false})

const colorSelector = document.getElementById('colorPicker');
                      colorSelector.addEventListener('input',(event)=>{
                        isRainwobMode=false;
                        currentColor=event.target.value;
                        console.log(currentColor)
                      });
const rainwobModeButton = document.getElementById('rainwobMode');
                          rainwobModeButton.addEventListener('click',()=>{isRainwobMode=true 
                            console.log(isRainwobMode)})
const playButton16x16 = document.getElementById('playButton16x16');
                        playButton16x16.addEventListener('click',()=>{
                            gridCreator(16,16)
                        })
const playButton32x32 = document.getElementById('playButton32x32');
                        playButton32x32.addEventListener('click',()=>{
                            gridCreator(32,32)
                        })    
const playButton64x64 = document.getElementById('playButton64x64');
            	        playButton64x64.addEventListener('click',()=>{
                            gridCreator(64,64)
                        })                    
const clearButton = document.getElementById('clearButton');
                    clearButton.addEventListener('click',gridWhite)



gridCreator(16,16)

function gridCreator(rows, columns){
if(rows!=currentRows && columns!=currentColumns){
 if(currentRows !=0 && currentColumns!=0) gridCleaner();
 currentRows=rows;
 currentColumns=columns;
 let size = (rows * columns);
 let squareRoot = Math.sqrt(size).toFixed(0);

 DIVgridContainer.style.gridTemplateColumns = `repeat(${squareRoot}, 1fr)`;
 DIVgridContainer.style.gridTemplateRows = `repeat(${squareRoot}, 1fr)`;

    for(let i=0;i<size;i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.addEventListener('mouseover',()=>{
            if(isMouseDown==true){
                if(isRainwobMode){newDiv.style.backgroundColor=getRainwobColor()}
                if(!isRainwobMode){newDiv.style.backgroundColor=currentColor}
            }    
        })
        newDiv.addEventListener('click',()=>{
            if(isRainwobMode){newDiv.style.backgroundColor=getRainwobColor()}
            if(!isRainwobMode){newDiv.style.backgroundColor=currentColor}
        })
        DIVgridContainer.appendChild(newDiv);
    }   
}
}

function gridCleaner (){
    const items = document.getElementsByClassName('item');

    const itemsArray = Array.from(items);

    itemsArray.forEach((element) => {
        element.parentElement.removeChild(element);
    });
    currentColumns=0;
    currentRows=0;
}

function gridWhite(){
    const items = document.getElementsByClassName('item');

    const itemsArray = Array.from(items);

    itemsArray.forEach((element) => {
        element.style.backgroundColor='white';
    });
}

function getRainwobColor(){
    let letters, GeneratedColor;
    letters = "0123456789ABCDEF";
    GeneratedColor = "#";

    for(var i = 0; i < 6; i++){
        GeneratedColor = GeneratedColor + letters[Math.floor(Math.random() * 16)];
    }
    return GeneratedColor;
}
