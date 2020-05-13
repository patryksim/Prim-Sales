import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;
const itemSize = (screenWidth - 10) / 3;

function NewsStyle3() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [numSelected, setNumSelected] = useState(0);
    const [dataEdit, setDataEdit] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, image: 'news_3_img_1.jpg', title: 'Lifestyle'});
        newData.push({id: '2', isSelected: false, image: 'news_3_img_2.jpg', title: 'Business'});
        newData.push({id: '3', isSelected: false, image: 'news_3_img_3.jpg', title: 'Politics'});
        newData.push({id: '4', isSelected: false, image: 'news_3_img_4.jpg', title: 'Entertainment'});
        newData.push({id: '5', isSelected: false, image: 'news_3_img_5.jpg', title: 'Culture & Religion'});
        newData.push({id: '6', isSelected: false, image: 'news_3_img_6.jpg', title: 'Technology'});
        newData.push({id: '7', isSelected: false, image: 'news_3_img_7.jpg', title: 'Social'});
        newData.push({id: '8', isSelected: false, image: 'news_3_img_8.jpg', title: 'Sport'});
        newData.push({id: '9', isSelected: false, image: 'news_3_img_9.jpg', title: 'Regional'});
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

    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#cc0001'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 24, color: 'white'}}>Pick your news category</Text>
                <Text style={{fontSize: 14, color: 'white', marginTop: 15}}>You can change this later</Text>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={dataEdit}
                numColumns={3}
                renderItem={({item}) => <ItemData data={item} onItemClick={onItemClick}/>}
                keyExtractor={item => item.id}
            />
            <View style={{flex: 1}}/>
            <View style={{
                height: 60,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#212121'
            }}>
                <Text style={{
                    flex: 1,
                    fontSize: 14,
                    color: 'white',
                    textAlign: 'center',
                    paddingLeft: 80
                }}>{numSelected.toString()} out of {dataEdit.length.toString()} selected</Text>
                <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('next clicked')}
                                  style={{width: 80, padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 14, color: 'white'}}>NEXT</Text>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function ItemData({data, onItemClick}) {
    return (
        <TouchableOpacity onPress={() => onItemClick(data)} style={{
            height: itemSize,
            width: itemSize,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
        }}>
            <ImageBackground source={{uri: storageImageUrl('news', data.image)}}
                             style={{
                                 width: '100%',
                                 height: '100%',
                                 borderRadius: 3,
                                 overflow: 'hidden',
                                 alignItems: 'center',
                                 justifyContent: 'center'
                             }}>
                {data.isSelected && (
                    <Image source={require('../../assets/icon/ic_check.png')}
                           style={{height: 24, width: 24, resizeMode: 'contain', tintColor: 'white'}}/>
                )}
                <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: 'white', marginTop: 5}}>19 Photos</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default NewsStyle3;