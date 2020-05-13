import React, {useContext, useRef} from 'react';
import {Image, Text, View, ImageBackground} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";

function ActivityStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('activity', 'activity_7_img.jpg')}} style={{flex: 1, backgroundColor: 'gray'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <View style={{flex: 1, justifyContent: 'flex-end', padding: 25}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/icon/ic_profile2.png')}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{flex: 1, fontSize: 14}}>
                            <Text style={{fontWeight: 'bold', color: '#f44336'}}>Tony Ramirez</Text>
                            <Text style={{color: 'white'}}> Posted a tought </Text>
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                            <Image source={require('../../assets/icon/ic_history.png')}
                                   style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                            <Text style={{fontSize: 12, color: 'white', marginLeft: 5}}>An hour ago</Text>
                        </View>
                    </View>
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
                               style={{width: 10, height: 10, tintColor: '#f44336', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, tintColor: '#f44336', marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                    </View>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default ActivityStyle7;