import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

const screenWidth = Dimensions.get('window').width;

function NewsStyle15() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <HeaderNews
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                sharePress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}
                lovePress={() => snackbarRef.current.ShowSnackBarFunction('love clicked')}
            />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                <Image source={{uri: storageImageUrl('news', 'news_15_img_1.jpg')}}
                       style={{height: 300, width: 300, resizeMode: 'cover'}}/>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Special Report with Bret Bair</Text>
                    <Text style={{fontSize: 14, color: 'white', marginVertical: 8}}>New York, US</Text>
                    <View style={{
                        backgroundColor: '#cc0001',
                        paddingHorizontal: 15,
                        paddingVertical: 2,
                        borderRadius: 5
                    }}>
                        <Text style={{fontSize: 14, color: 'white'}}>LIVE</Text>
                    </View>
                </View>
            </View>
            <AudioProgressBar progress={30} duration={100}/>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingHorizontal: 20,
                paddingVertical: 15
            }}>
                <ControlButton image={require('../../assets/icon/news_15_btn_1.png')}
                               buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button 1 clicked')}/>
                <ControlButton image={require('../../assets/icon/news_15_btn_2.png')}
                               buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button 2 clicked')}/>
                <ControlButton image={require('../../assets/icon/news_15_btn_3.png')}
                               buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button 3 clicked')}/>
                <ControlButton image={require('../../assets/icon/news_15_btn_4.png')}
                               buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button 4 clicked')}/>
                <ControlButton image={require('../../assets/icon/news_15_btn_5.png')}
                               buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button 5 clicked')}/>
            </View>
            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: '#37474f',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 16, color: '#90a4ae'}}>Ads 320 x 50</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function AudioProgressBar({progress, duration}) {
    let width = (progress / duration) * screenWidth;
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{height: 3, width: width, backgroundColor: '#ff9800'}}/>
            <View style={{height: 3, width: (screenWidth - width), backgroundColor: '#616161'}}/>
        </View>
    );
}

function ControlButton({image, buttonPress}) {
    return (
        <TouchableOpacity onPress={buttonPress} style={{padding: 10}}>
            <Image source={image}
                   style={{height: 38, width: 38, resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );
}

function HeaderNews({navPress, sharePress, lovePress}) {
    return (
        <View>
            <View style={{
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                elevation: 3,
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <View style={{flex: 1}}/>
                <TouchableOpacity onPress={sharePress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_share.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={lovePress} style={{padding: 18}}>
                    <Image source={require('../../assets/icon/ic_love_stroke.png')}
                           style={{height: 34, width: 34, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NewsStyle15;