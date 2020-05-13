import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import StaggeredView from "../../components/StaggeredView";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const screenWidth = Dimensions.get('window').width;

function GalleryStyle21() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [dataEdit, setDataEdit] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, image: 'gallery_21_img_1.jpg'});
        newData.push({id: '2', isSelected: false, image: 'gallery_21_img_2.jpg'});
        newData.push({id: '3', isSelected: false, image: 'gallery_21_img_3.jpg'});
        setDataEdit(newData);
    }, []);

    const onItemClick = (dt) => {
        showSnacbar('Image ' + dt.id + ' clicked');
    };

    const showSnacbar = (message) => {
        snackbarRef.current.ShowSnackBarFunction(message)
    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Cinnamons'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
            />
            <StaggeredView
                contentContainerStyle={{paddingVertical: 5}}
                data={dataEdit}
                renderItem={(item, numColumns) => <ItemData data={item} onItemClick={onItemClick} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data, onItemClick, numColumns}) {

    return (
        <TouchableOpacity onPress={() => onItemClick(data)}>
            <ImageAutoHeight source={{uri: storageImageUrl('gallery', data.image)}} imageWidth={screenWidth / numColumns}/>
        </TouchableOpacity>
    );
}

export default GalleryStyle21;