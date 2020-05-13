import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderFiveButton from "../../components/HeaderFiveButton";

function GalleryStyle12() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_12_img_1.jpg')}}
                         style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderFiveButton
                title=''
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                sharePress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}
                editPress={() => snackbarRef.current.ShowSnackBarFunction('edit clicked')}
                deletePress={() => snackbarRef.current.ShowSnackBarFunction('delete clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{flex: 1}}/>
            <View style={{
                marginLeft: 20,
                justifyContent: 'space-between',
                paddingVertical: 15,
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>White Stripes Hipster Girl</Text>
                <Text style={{fontSize: 14, color: 'white', marginTop: 6}}>Added yesterday 19.30</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default GalleryStyle12;