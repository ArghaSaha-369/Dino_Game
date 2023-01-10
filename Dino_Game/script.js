import { updateGround } from "./ground.js"

const Container_Width = 100;
const Container_Height = 30;
const containerElem = document.querySelector('[data-container]');

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

let lastTime
function update(time) {
    if(lastTime == null){
    lastTime = time
    window.requestAnimationFrame(update)
    return
    }
    const delta = time - lastTime
    updateGround(delta)
    lastTime = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

function setPixelToWorldScale() {
    let worldToPixel
    if(window.innerWidth / window.innerHeight < Container_Width / Container_Height){
        worldToPixel = window.innerWidth / Container_Width
    }
    else{
        worldToPixel = window.innerHeight / Container_Height
    }
}

containerElem.style.width = `${Container_Width * worldToPixel}px`
containerElem.style.height = `${Container_Height * worldToPixel}px`