import React, {useContext, useRef} from 'react';
import {Image, TouchableOpacity, View, ImageBackground} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import {storageImageUrl} from "../../tools/Helpers";

function GalleryStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Mountain Haze'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
            />
            <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_11_img_1.jpg')}} style={{flex: 1}}/>
            <View style={{
                width: '100%',
                height: 70,
                flexDirection: 'row',
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity style={{padding: 10, marginRight: 30}}>
                    <Image source={require('../../assets/icon/ic_share.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: '#448aff',
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../../assets/icon/ic_edit2.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10, marginLeft: 30}}>
                    <Image source={require('../../assets/icon/ic_close.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default GalleryStyle11;