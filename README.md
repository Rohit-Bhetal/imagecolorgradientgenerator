# Image Color Gradient Generator

**Image Color Gradient Generator** is a JavaScript library that generates a CSS gradient from the dominant colors of an image. This package makes use of k-means clustering to extract prominent colors from an image and provides a simple utility to create eye-catching gradients for design purposes.

## Features

- Extracts dominant colors from an image using k-means clustering.
- Converts the extracted RGB colors to hexadecimal format.
- Provides a gradient using two randomly selected dominant colors.
- Lightweight and easy to use.

## Installation

Install the package using npm:

```bash
npm install imagecolorgradientgenerator
```
## Usage
Import the Package

```js
import { imageGradientGenerator } from 'imagecolorgradientgenerator';
```
### Generate a Gradient  
Pass an image path to the imageGradientGenerator function:
    ```bash
    import { imageGradientGenerator } from "imagecolorgradientgenerator";
    async function applyGradient(imageElement) {
        const gradientColors = await imageGradientGenerator(imageElement);
    }
    ```
## How It Works
    -Color Extraction: The package uses a ColorPalleteGenerator class that employs k-means clustering to extract the dominant colors from an image.
    -Hex Conversion: The extracted RGB values are converted into hexadecimal format for CSS compatibility.
    -Random Selection: Two colors are selected randomly from the dominant colors to create a vibrant gradient(Currently Im Using k=4 so four dominant colors are there and 2 are randomly selected)

## API Reference

### imageGradientGenerator(imageElement)

*   **Parameters**:
    
    *   imageElement (HTMLImageElement): The image element from which colors are extracted.
        
*   **Returns**:
    
    *   A Promise that resolves to an array of two hexadecimal color strings.

## Scripts
* **start**
  ```js
  npm start```
* **test**
  ```js
  npm test```
Development
-----------

### Setup

Clone the repository and install dependencies:
```bash
 git clone https://github.com/rohitbhetal/imagecolorgradientgenerator.git
 cd imagecolorgradientgenerator
 npm install
```

## Dependencies
------------

*   [image-js](https://www.npmjs.com/package/image-js): Image manipulation library.
    
*   [kmeans-js](https://www.npmjs.com/package/kmeans-js): K-means clustering implementation.
    

## Author
------

**Rohit Bhetal**

License
-------

This project is licensed under the ISC License.
