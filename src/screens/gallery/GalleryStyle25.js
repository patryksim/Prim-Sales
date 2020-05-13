import React, {useContext, useRef} from 'react';
import {Dimensions, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderOneButton from "../../components/HeaderOneButton";
import FloatingButton from "../../components/FloatingButton";
import LoveBar from "../../components/LoveBar";

const DATA = [
    {id: '1', title: 'Workspaces', description: 'Desk, Interior, Workspace', image: 'gallery_23_img_1.jpg'},
    {id: '2', title: 'Funky Bedroom', description: 'Interior, Cabin', image: 'gallery_23_img_2.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle25() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_25_img_1.jpg')}}
                         imageStyle={{height: 550}}
                         style={{flex: 1, backgroundColor: 'gray'}}>
            <MainContent/>
            <View style={{flexDirection: 'row'}}>
                <ItemData data={DATA[0]}/>
                <ItemData data={DATA[1]}/>
            </View>
            <View style={{position: 'absolute', width: '100%'}}>
                <HeaderOneButton isHome={true} title='' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function MainContent() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 25}}>
            <FloatingButton size={45} style={{backgroundColor: '#448aff', position: 'relative'}}
                            image={require('../../assets/icon/ic_share.png')}
                            imageStyle={{tintColor: 'white'}}
                            onPress={() => {
                            }}/>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                color: 'white',
                textAlign: 'center'
            }}>Japanese Cuisine Ingredients Collections</Text>
            <Text style={{fontSize: 14, marginTop: 10, color: 'white'}}>24 photos</Text>
        </View>

    );
}

function ItemData({data}) {
    return (
        <View style={{width: screenWidth / 2, alignItems: 'center', backgroundColor: 'white'}}>
            <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                             style={{width: screenWidth / 2, height: 180, alignItems: 'center', justifyContent: 'center'}}>
                <FloatingButton size={45} style={{backgroundColor: '#448aff', position: 'relative'}}
                                image={require('../../assets/icon/ic_share.png')}
                                imageStyle={{tintColor: 'white'}}
                                onPress={() => {
                                }}/>
            </ImageBackground>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginTop: 15}}>{data.title}</Text>
            <Text style={{fontSize: 12, color: '#9e9e9e', marginTop: 4}}>{data.description}</Text>
            <LoveBar rating={4} containerStyle={{marginTop: 15, marginBottom: 25}}/>
        </View>
    );
}

export default GalleryStyle25;