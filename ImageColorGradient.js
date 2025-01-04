import ColorPalleteGenerator from "./src/ColorPalleteGenerator/col-pic.js";


class ImageColorGradient{
    constructor(imageElement){
        this.imageElement = imageElement;

    }
    componentToHex = (c) =>{
        const hex = c.toString(16);
        return hex.length == 1 ?"0"+hex :hex;
    }
    async getDominantColor(){
        const res = []
        const colorMaxRange = new ColorPalleteGenerator(this.imageElement);
        const colArr = await colorMaxRange.kmeanExtraction();
        const getRandomData = colArr.sort(()=>0.5-Math.random()).slice(0,2)
        getRandomData.forEach(element => {
             res.push('#' + element.map(color => this.componentToHex(color)).join(''))
        });
        return res

    }
}
async function imageGradientGenerator(image){
    const imageGradient = new ImageColorGradient(image)
    const data = await imageGradient.getDominantColor();
    return data;
}

export  {imageGradientGenerator};