import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderTwoRows from "../../components/HeaderTwoRows";
import LoveBar from "../../components/LoveBar";

function GalleryStyle22() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_22_img_1.jpg')}}
                         imageStyle={{marginTop: 72}}
                         style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoRows
                title='My Photo Portfolio'
                subTitle='1 of 24 Photos'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
            />
            <View style={{flex: 1}}/>
            <View style={{
                backgroundColor: 'white',
                margin: 10,
                padding: 15,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#263238'}}>Hot Coffee, Bread & Pecans</Text>
                <Text style={{fontSize: 12, color: '#9e9e9e', marginTop: 4}}>Foods, Breakfast, Coffee</Text>
                <LoveBar rating={4} containerStyle={{marginTop: 15, marginBottom: 25}}/>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 25}}>Weasel maternal dove far the jeepers goodness
                    inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default GalleryStyle22;