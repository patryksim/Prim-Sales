import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import LoveBar from "../../components/LoveBar";

const screenWidth = Dimensions.get('window').width;

function GalleryStyle23() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [dataEdit, setDataEdit] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', title: 'Workspaces', description: 'Desk, Interior, Workspace', image: 'gallery_23_img_1.jpg'});
        newData.push({id: '2', title: 'Funky Bedroom', description: 'Interior, Cabin', image: 'gallery_23_img_2.jpg'});
        newData.push({id: '3', title: 'White Stripes Girl', description: 'Fashion. Instagram', image: 'gallery_23_img_3.jpg'});
        newData.push({id: '4', title: 'Coffee, Bread & Pecans', description: 'Food', image: 'gallery_23_img_4.jpg'});
        newData.push({id: '5', title: 'Workspaces', description: 'Desk, Interior, Workspace', image: 'gallery_23_img_1.jpg'});
        newData.push({id: '56', title: 'Funky Bedroom', description: 'Interior, Cabin', image: 'gallery_23_img_2.jpg'});
        setDataEdit(newData);
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Portfolio'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
                shadow={false}
            />
            <FlatList
                data={dataEdit}
                numColumns={2}
                renderItem={({item, numColumns}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data}) {
    return (
        <TouchableOpacity onPress={() => onItemClick(data)} style={{ width: screenWidth / 2, alignItems: 'center' }}>
            <Image source={{uri: storageImageUrl('gallery', data.image)}} style={{width: screenWidth / 2, height: 180}}/>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginTop: 15}}>{data.title}</Text>
            <Text style={{fontSize: 12, color: '#9e9e9e', marginTop: 4}}>{data.description}</Text>
            <LoveBar rating={4} containerStyle={{marginTop: 15, marginBottom: 25}}/>
        </TouchableOpacity>
    );
}

export default GalleryStyle23;