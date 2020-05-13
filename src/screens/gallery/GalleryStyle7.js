import React, {useContext, useRef, useState, useEffect} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View, ImageBackground} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import HeaderFourButton from "../../components/HeaderFourButton";
import TabHeader from "../../components/TabHeader";

const DATA2 = [
    {id: '1', image: 'gallery_1_img_6.jpg'},
    {id: '2', image: 'gallery_1_img_7.jpg'},
    {id: '3', image: 'gallery_1_img_8.jpg'},
    {id: '4', image: 'gallery_1_img_9.jpg'},
    {id: '5', image: 'gallery_1_img_10.jpg'},
    {id: '6', image: undefined},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [numSelected, setNumSelected] = useState(0);
    const [dataEdit, setDataEdit] = useState([]);

    const onTabChanged = (index) => {

    };

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, image: 'gallery_1_img_1.jpg'});
        newData.push({id: '2', isSelected: false, image: 'gallery_1_img_2.jpg'});
        newData.push({id: '3', isSelected: false, image: 'gallery_1_img_3.jpg'});
        newData.push({id: '4', isSelected: false, image: 'gallery_1_img_4.jpg'});
        newData.push({id: '5', isSelected: false, image: 'gallery_1_img_5.jpg'});
        newData.push({id: '6', isSelected: false, image: 'gallery_1_img_1.jpg'});
        setDataEdit(newData);
    }, []);

    const onItemClick = (dt) => {
        let newData = [];
        dataEdit.map((d) => {
            if (dt.id === d.id){
                if (d.isSelected){
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
                shadow={false}
            />
            <TabHeader titles={['PHOTO', 'VIDEO', 'DOCUMENTS']} bgColor='#8bc34a' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView contentContainerStyle={{paddingVertical: 5}}>
                <ListDataImage data={dataEdit} title='RECENT PHOTOS' onItemClick={onItemClick}/>
                <ListDataImage data={DATA2} title='LAST WEEK' onItemClick={() => {
                }}/>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ListDataImage({data, title, onItemClick}) {
    return (
        <View style={{
            marginVertical: 5,
            marginHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            shadowRadius: 3,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }}>
            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#263238',
                marginLeft: 10,
                marginTop: 15
            }}>{title}</Text>
            <View
                style={{marginHorizontal: 10, height: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0'}}/>
            <MultiColumnView
                containerStyle={{padding: 5}}
                data={data}
                numColumns={3}
                renderItem={(item, numColumns) => <ItemData data={item} onItemClick={onItemClick}/>}
            />
        </View>
    );
}

function ItemData({data, onItemClick}) {
    if (data.image === undefined) {
        return (
            <View style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <View style={{
                    height: 110,
                    borderRadius: 5,
                    backgroundColor: '#f1f5f7',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>136</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>more</Text>
                </View>
            </View>
        );
    } else {
        return (
            <TouchableOpacity onPress={() => onItemClick(data)}
                              style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                                 style={{height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                    {data.isSelected && (
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#448aff',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image source={require('../../assets/icon/ic_check.png')}
                                   style={{height: 24, width: 24, tintColor: 'white', resizeMode: 'contain'}}/>
                        </View>
                    )}
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

export default GalleryStyle7;