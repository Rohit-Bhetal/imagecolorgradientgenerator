
import {Image} from "image-js";
import kMeans from "kmeans-js";




export default class ColorPalleteGenerator{
    constructor(imageElement){
        this.imageElement = imageElement 
    }

    async extractImage() {
        const imageData = await Image.load(this.imageElement)
        const resizedData = imageData.resize({width:100})
        const pixelData =  resizedData.getRGBAData();
        const rgbData = [];
        for (let i = 0; i < pixelData.length; i += 4) {
            rgbData.push([pixelData[i], pixelData[i + 1], pixelData[i + 2]]);
        }
        return rgbData;
         
    }
    async kmeanExtraction(){
        const k = 4;
        const pixels = await this.extractImage()
        var km = new kMeans({
            K:k
        });
        km.cluster(pixels)
        while (km.step()){
            km.findClosestCentroids();
            km.moveCentroids();

            if(km.hasConverged()) break;
        }
        console.log(km.currentIteration)
        return km.centroids.map(([r,g,b])=>[Math.trunc(r),Math.trunc(g),Math.trunc(b)])
    }
}

