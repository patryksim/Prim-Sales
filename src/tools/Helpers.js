import {ACCESS_KEY, STORAGE_URL} from "./Constants";
import {Linking} from "react-native";

export function storageImageUrl (path, filename) {
    return `${STORAGE_URL}/${path}/${filename}?AccessKey=${ACCESS_KEY}`;
}

export const openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            alert('Can not open url ' + url);
            console.log("Don't know how to open URI: " + url);
        }
    });
};
