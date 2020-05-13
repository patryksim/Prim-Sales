import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderOneButton from "../../components/HeaderOneButton";
import FloatingButton from "../../components/FloatingButton";

const DATA = [
    {id: '1', image: '', title: 'Japanese Cuisine Ingredients Collections'},
    {id: '2', image: 'gallery_24_img_2.jpg', title: 'World Best Dining Style'},
];

function GalleryStyle24() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', 'gallery_24_img_1.jpg')}}
                         style={{flex: 1, backgroundColor: 'gray'}}>
            <MainContent data={DATA[0]}/>
            <MainContent data={DATA[1]}/>
            <View style={{position: 'absolute', width: '100%'}}>
                <HeaderOneButton isHome={true} title='' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function MainContent({data}) {
    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                         style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 25}}>
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
            }}>{data.title}</Text>
            <Text style={{fontSize: 14, marginTop: 10, color: 'white'}}>24 photos</Text>
        </ImageBackground>

    );
}

export default GalleryStyle24;