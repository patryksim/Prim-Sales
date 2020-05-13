import React, {useState} from 'react';
import {Image, View} from "react-native";

function ImageAutoHeight ({source, imageWidth, style={}}) {
    const [hImage, setHImage] = useState(0);
    Image.getSize(source.uri, (w, h) => {
        setHImage(imageWidth * h / w);
    });

    return (
        <Image source={source} style={[{width: imageWidth, height: hImage}, style]}/>
    );
}

export default ImageAutoHeight;