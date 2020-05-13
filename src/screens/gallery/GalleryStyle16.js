import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import {storageImageUrl} from "../../tools/Helpers";

function GalleryStyle16() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_16_img_1.jpg')}} style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Fullscreen'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{flex: 1}}/>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                padding: 25
            }}>
                <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_history.png')}
                           style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, color: 'white', marginLeft: 5}}>An hour ago</Text>
                </View>
                <Text style={{fontSize: 24, marginTop: 15, color: 'white'}}>Weasel the jeeper goodness inconsiderately
                    spelled so ubiquitous amused knitted and altruistic.</Text>
                <View style={{
                    marginVertical: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, tintColor: 'white', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, tintColor: 'white', marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                    </View>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default GalleryStyle16;