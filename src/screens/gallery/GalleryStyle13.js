import React, {useContext, useRef} from 'react';
import {Image, TouchableOpacity, View, ImageBackground, Text} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import {storageImageUrl} from "../../tools/Helpers";

function GalleryStyle13() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_12_img_1.jpg')}} style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Mountain Haze'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
            />
            <View style={{flex: 1}}/>
            <View style={{
                justifyContent: 'space-between',
                backgroundColor: 'white',
                paddingVertical: 15,
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#263238', marginLeft: 20}}>White Stripes Hipster Girl</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 6}}>
                    <Text style={{fontSize: 14, color: '#263238'}}>Added yesterday 19.30</Text>
                    <Text style={{fontSize: 14, color: '#616161'}}>2 of 24</Text>
                </View>
                <View style={{
                    width: '100%',
                    marginTop: 15,
                    paddingTop: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopWidth: 0.5,
                    borderTopColor: '#eaeef0',
                }}>
                    <TouchableOpacity style={{padding: 10, marginRight: 30}}>
                        <Image source={require('../../assets/icon/ic_share.png')}
                               style={{height: 18, width: 18, tintColor: '#757575', resizeMode: 'contain'}}/>
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
                               style={{height: 18, width: 18, tintColor: '#757575', resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default GalleryStyle13;