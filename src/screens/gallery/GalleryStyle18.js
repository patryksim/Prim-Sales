import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderFourButton from "../../components/HeaderFourButton";

const screenWidth = Dimensions.get('window').width;

function GalleryStyle18() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [numSelected, setNumSelected] = useState(0);
    const [dataEdit, setDataEdit] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, image: 'gallery_1_img_1.jpg'});
        newData.push({id: '2', isSelected: false, image: 'gallery_1_img_2.jpg'});
        newData.push({id: '3', isSelected: false, image: 'gallery_1_img_3.jpg'});
        newData.push({id: '4', isSelected: false, image: 'gallery_1_img_4.jpg'});
        newData.push({id: '5', isSelected: false, image: 'gallery_1_img_5.jpg'});
        setDataEdit(newData);
    }, []);

    const onItemClick = (dt) => {
        let newData = [];
        dataEdit.map((d) => {
            if (dt.id === d.id) {
                if (d.isSelected) {
                    setNumSelected(numSelected - 1)
                } else {
                    setNumSelected(numSelected + 1)
                }
                dt.isSelected = !dt.isSelected;
                newData.push(dt)
            } else {
                newData.push(d)
            }
        });
        setDataEdit(newData);
    };

    const showSnacbar = (message) => {
        snackbarRef.current.ShowSnackBarFunction(message)
    };

    const screenTitle = numSelected > 0 ? numSelected + ' Selected' : 'Gallery';

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderFourButton
                title={screenTitle}
                isHome={true}
                isEdit={numSelected > 0}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                editPress={() => numSelected > 0 ? showSnacbar('share clicked') : showSnacbar('edit clicked')}
                searchPress={() => numSelected > 0 ? showSnacbar('delete clicked') : showSnacbar('search clicked')}
                morePress={() => showSnacbar('more clicked')}
                bgColor='#8bc34a'
            />
            <FlatList
                contentContainerStyle={{paddingVertical: 5}}
                data={dataEdit}
                renderItem={({item, numColumns}) => <ItemData data={item} onItemClick={onItemClick}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data, onItemClick}) {
    return (
        <TouchableOpacity onPress={() => onItemClick(data)}
                          style={{
                              width: screenWidth,
                              height: 200,
                              padding: data.isSelected ? 15 : 0}}>
            <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                             style={{flex: 1}}>
                {data.isSelected && (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'gray',
                        opacity: 0.7
                    }}>
                        <View style={{
                            width: 44,
                            height: 44,
                            borderRadius: 22,
                            backgroundColor: '#448aff',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image source={require('../../assets/icon/ic_check.png')}
                                   style={{height: 22, width: 22, tintColor: 'white', resizeMode: 'contain'}}/>
                        </View>
                    </View>
                )}
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default GalleryStyle18;