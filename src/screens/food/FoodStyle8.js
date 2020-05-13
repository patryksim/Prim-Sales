import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const DATA = [
    {
        id: '1',
        avatar: require('../../assets/icon/ic_profile1.png'),
        user: 'Christina',
        description: 'Part Time Chef',
        image: 'food_8_img_1.jpg'
    },
    {
        id: '2',
        avatar: require('../../assets/icon/ic_profile2.png'),
        user: 'Tony Ramirez',
        description: 'Alluring Cooks',
        image: 'food_8_img_2.jpg'
    },
    {
        id: '3',
        avatar: require('../../assets/icon/ic_profile3.png'),
        user: 'Gabriella Madelaine',
        description: 'Still Learning to Cook',
        image: 'food_8_img_3.jpg'
    },
    {
        id: '4',
        avatar: require('../../assets/icon/ic_profile1.png'),
        user: 'Remi Boucher',
        description: 'Everything is Medium Rare',
        image: 'food_8_img_4.jpg'
    },
    {
        id: '5',
        avatar: require('../../assets/icon/ic_profile1.png'),
        user: 'Christina',
        description: 'Part Time Chef',
        image: 'food_8_img_1.jpg'
    },
    {
        id: '6',
        avatar: require('../../assets/icon/ic_profile2.png'),
        user: 'Tony Ramirez',
        description: 'Alluring Cooks',
        image: 'food_8_img_2.jpg'
    },
];

const screenWidth = Dimensions.get('window').width;

function FoodStyle8 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <HeaderThreeButton
                title='Chef List'
                isHome={false}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff3d00'
            />
            <StaggeredView
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <ImageAutoHeight source={{uri: storageImageUrl('food', data.image)}}
                             imageWidth={screenWidth / numColumns}/>
            <View style={{alignItems: 'center', marginTop: -20, paddingBottom: 20}}>
                <Image source={data.avatar} style={{height: 40, width: 40, marginBottom: 10, resizeMode: 'cover'}}/>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{data.user}</Text>
                <Text style={{fontSize: 12, color: '#757575'}}>{data.description}</Text>
            </View>
        </View>
    );
}

export default FoodStyle8;