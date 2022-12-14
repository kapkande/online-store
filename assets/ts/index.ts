type ElemAndNull = Element | null
const mainProduct: ElemAndNull  = document.querySelector('.main__product');

function setBlocks():void {
    let block = document.createElement("div");

    mainProduct?.appendChild(block)
}
setBlocks()
setBlocks()