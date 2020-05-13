import React, {useContext, useRef} from 'react';
import {Dimensions, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const DATA = [
    {id: '1', isSelected: false, image: 'news_12_img_1.jpg'},
    {id: '2', isSelected: false, image: 'news_12_img_2.jpg'},
    {id: '3', isSelected: false, image: 'news_12_img_3.jpg'},
    {id: '4', isSelected: false, image: 'news_12_img_4.jpg'},
    {id: '5', isSelected: false, image: 'news_12_img_5.jpg'},
    {id: '6', isSelected: false, image: 'news_12_img_6.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle12() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Tumblr Feeds'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                enableMore={false}
                bgColor='#cc0001'
            />
            <StaggeredView
                contentContainerStyle={{paddingVertical: 5}}
                numColumns={2}
                data={DATA}
                renderItem={(item, numColumns) => <ItemData data={item} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data, numColumns}) {

    return (
        <ImageAutoHeight source={{uri: storageImageUrl('news', data.image)}} imageWidth={screenWidth / numColumns}/>
    );
}

export default NewsStyle12;