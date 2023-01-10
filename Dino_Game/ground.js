import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const groundElems = document.querySelectorAll("[data-ground]")
const speed = 0.05

export function setupGround() {
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)

}

export function updateGround(delta, scale) {
    groundElems.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * scale * speed * -1)
        if(getCustomProperty(ground, "--left") <= -300) {
            incrementCustomProperty(ground, "--left", 600)
        }
    })
}