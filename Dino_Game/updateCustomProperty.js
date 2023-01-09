export function getCustomProperty(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0 //default value Zero
}

export function setCustomProperty(elem, prop, value){
    elem.style.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc){
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
}