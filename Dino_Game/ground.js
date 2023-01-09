import { incrementCustomProperty } from "./updateCustomProperty.js"

const groundElems = document.querySelectorAll("[data-ground]")
const speed = 0.05;

export function updateGround(delta){
    groundElems.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speed * -1)
    })
}