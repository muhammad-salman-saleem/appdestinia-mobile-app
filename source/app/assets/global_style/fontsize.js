import { Dimensions, PixelRatio } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');
let SCREEN_WIDTH = width; // get current width
let SCALE = fontScale; // constant, 375 is standard width of  iphone 6 / 7 / 8
const widthBaseScale = width / 414;
const heightBaseScale = height / 896;
const widthBase = width / width;
const heightBase = height / height ;
function normalize(size, based = 'width') {
    const newSize =
        based === 'height' ? size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
function returnnormalize(size, based = 'width') {
    const newSize =
        based === 'height' ? size * heightBase : size * widthBase;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
//for width  pixel
const widthPixel = size => {
    return normalize(size, 'width');
    //  return size;
};
//for height  pixel
const heightPixel = size => {
    return normalize(size, 'height');
    // return size;
};
const returnheightPixel = size => {
    return returnnormalize(size, 'height');
    // return size;
};
//for font  pixel
const fontPixel = size => {
    return heightPixel(size);
    //  return size;
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = size => {
    return heightPixel(size);
    // return size;
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = size => {
    return widthPixel(size);
    // return size;
};
export {
    returnheightPixel as rp,
    widthPixel as wp,
    heightPixel as hp,
    fontPixel as fp,
    pixelSizeVertical as vp,
    pixelSizeHorizontal as hzp,
};
