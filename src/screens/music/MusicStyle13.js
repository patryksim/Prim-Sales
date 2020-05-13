import React, {useContext, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderTwoButton from "../../components/HeaderTwoButton";

function MusicStyle13 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <VideoLayout/>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'space-between'}}>
                <HeaderTwoButton
                    title='Spirit Musical Behaved on Farther Letters'
                    navPress={() => pageContext.pageDispatch({page: 'pop'})}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    isHome={false}
                />
                <TouchableOpacity style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}  onPress={() => snackbarRef.current.ShowSnackBarFunction('play clicked')}>
                    <Image source={require('../../assets/icon/ic_play2.png')} style={{width: 38, height: 38, tintColor: 'gray'}}/>
                </TouchableOpacity>
                <View style={{height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}}>
                    <Text style={{fontSize: 14, color: 'white'}}>1.23</Text>
                    <AudioProgressBar progress={30} duration={100} style={{marginHorizontal: 12}}/>
                    <Text style={{fontSize: 14, color: 'white'}}>3.03</Text>
                    <TouchableOpacity style={{padding: 10}} onPress={() => snackbarRef.current.ShowSnackBarFunction('full clicked')}>
                        <Image source={require('../../assets/icon/ic_button_fullscreen.png')} style={{width: 24, height: 24}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function VideoLayout() {

    return (
        <Image source={{uri: storageImageUrl('music', 'music_13_bg.jpg')}} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
    )
}

function AudioProgressBar({progress, duration, style={}}) {
    return (
        <View style={[{flex: 1, flexDirection: 'row', alignItems: 'center'}, style]}>
            <View style={{height: 3, flex: 1, backgroundColor: '#ff3d00'}}/>
            <View style={{width: 12, height: 12, borderRadius: 6, backgroundColor: '#ff3d00'}}/>
            <View style={{height: 3, flex: 3, backgroundColor: '#e0e0e0'}}/>
        </View>
    );
}

export default MusicStyle13;