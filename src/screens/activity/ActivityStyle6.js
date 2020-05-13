import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";
import StaggeredView from "../../components/StaggeredView";

const screenWidth = Dimensions.get('window').width;

const DATA = [
    {id: '1', avatar: require('../../assets/icon/ic_profile1.png'), image: 'activity_6_img_1.jpg'},
    {id: '2', avatar: require('../../assets/icon/ic_profile2.png'), image: 'activity_6_img_2.jpg'},
    {id: '3', avatar: require('../../assets/icon/ic_profile3.png'), image: 'activity_6_img_3.jpg'},
    {id: '4', avatar: require('../../assets/icon/ic_profile1.png'), image: 'activity_6_img_4.jpg'},
    {id: '5', avatar: require('../../assets/icon/ic_profile2.png'), image: 'activity_6_img_5.jpg'},
    {id: '6', avatar: require('../../assets/icon/ic_profile3.png'), image: 'activity_6_img_6.jpg'},
    {id: '7', avatar: require('../../assets/icon/ic_profile1.png'), image: 'activity_6_img_1.jpg'},
];

function ActivityStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <StaggeredView
                containerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns=1}) {
    const wImage = (screenWidth / numColumns) - 15;
    const [hImage, setHImage] = useState(10);
    Image.getSize(storageImageUrl('activity', data.image), (w, h) => {
        setHImage(wImage * h / w);
    });
    return (
        <View>
            <ImageBackground source={{uri: storageImageUrl('activity', data.image)}}
                             style={{
                                 width: wImage,
                                 height: hImage,
                                 justifyContent: 'space-between',
                                 padding: 10,
                                 margin: 5,
                                 borderRadius: 3,
                                 shadowRadius: 3,
                                 elevation: 3,
                                 shadowOffset: {width: 0, height: 2},
                                 shadowOpacity: 0.3,
                             }}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Image source={require('../../assets/icon/ic_love_red.png')}
                           style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                    <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                           style={{width: 14, height: 10, marginLeft: 25, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ActivityStyle6;