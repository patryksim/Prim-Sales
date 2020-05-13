import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const DATA = [
    {id: '1', title: 'Workspace', image: 'gallery_3_img_1.jpg'},
    {id: '2', title: 'Still Objects', image: 'gallery_3_img_2.jpg'},
    {id: '3', title: 'Funny Stuff', image: 'gallery_3_img_3.jpg'},
    {id: '4', title: 'Toys', image: 'gallery_3_img_4.jpg'},
    {id: '5', title: 'Fashion', image: 'gallery_3_img_5.jpg'},
    {id: '6', title: 'Women', image: 'gallery_3_img_6.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle3 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Wallpaper'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
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

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <View style={{
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                    <Text style={{fontSize: 14, marginLeft: 5, color: '#616161'}}>{data.title}</Text>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{width: 15, height: 12, resizeMode: 'contain', tintColor: 'gray'}}/>
                </View>
                <ImageAutoHeight source={{uri: storageImageUrl('gallery', data.image)}} imageWidth={(screenWidth / numColumns) - 15}/>
            </View>
        </View>
    );
}

export default GalleryStyle3;