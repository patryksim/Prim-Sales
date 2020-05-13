import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";
import SizeSelector from "../../components/SizeSelector";
import MaterialButton from "../../components/MaterialButton";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle23() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const [colorData, setColorData] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, color: '#263238'});
        newData.push({id: '2', isSelected: true, color: '#bde2da'});
        newData.push({id: '3', isSelected: false, color: '#ff5252'});
        newData.push({id: '4', isSelected: false, color: '#fbc02d'});
        newData.push({id: '5', isSelected: false, color: '#eeeeee'});
        newData.push({id: '6', isSelected: false, color: 'white'});
        setColorData(newData);
    }, []);

    const onColorClick = (dt) => {
        let newData = [];
        colorData.map((d) => {
            d.isSelected = dt.id === d.id;
            newData.push(d)
        });
        setColorData(newData);
    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <HeaderOneButton title='Edit' bgColor='#ff9800' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <ScrollView>
                <View style={{
                    margin: 10,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    backgroundColor: 'white'
                }}>
                    <ItemData data={{id: '1', image: 'ecommerce_10_img_1.jpg', title: 'Zara Jumpsuit Dress'}}/>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eaeef0', paddingBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', padding: 15}}>SELECT A COLOR</Text>
                        <ColorSelector style={{marginHorizontal: 15}} colorData={colorData} onItemClick={onColorClick}/>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eaeef0', paddingBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', padding: 15}}>SELECT YOUR SIZE</Text>
                        <SizeSelector style={{marginHorizontal: 10}}/>
                    </View>
                </View>
            </ScrollView>
            <MaterialButton title='Apply Changes'
                            style={{width: screenWidth - 20, height: 50, marginBottom: 10, backgroundColor: '#ff9800'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Apply changes clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data}) {
    const [item, setItem] = useState(2);

    return (
        <View style={{width: screenWidth - 20, flexDirection: 'row', backgroundColor: 'white', borderTopWidth: 0.5, borderTopColor: '#e0e0e0'}}>
            <View style={{height: 120, width: 120, overflow: 'hidden',}}>
                <Image style={{height: '100%', width: '100%'}}
                       source={{uri: storageImageUrl('ecommerce', data.image)}}/>
            </View>
            <View style={{flex: 1, padding: 15}}>
                <Text style={{fontSize: 17, color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#616161'}}>Size M</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FloatingButton size={34} style={{backgroundColor: '#ff9800', position: 'relative'}}
                                    image={require('../../assets/icon/ic_minus.png')}
                                    imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                    onPress={() => setItem(item - 1)}/>
                    <Text style={{width: 50, textAlign: 'center', fontSize: 14, color: '#bdbdbd'}}>{item}</Text>
                    <FloatingButton size={34} style={{backgroundColor: '#ff9800', position: 'relative'}}
                                    image={require('../../assets/icon/ic_plus.png')}
                                    imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                    onPress={() => setItem(item + 1)}/>

                </View>
                <Text style={{fontSize: 17, color: '#ff9800', position: 'absolute', bottom: 20, right: 15}}>$
                    125</Text>
            </View>
        </View>
    );
}

function ColorSelector({style = {}, colorData, onItemClick}) {
    return (
        <View style={style}>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={colorData}
                horizontal
                renderItem={({item}) => <ItemColor data={item} onItemClick={onItemClick}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

function ItemColor({data, onItemClick}) {
    return (
        <TouchableOpacity onPress={() => onItemClick(data)}
                          style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
            <View style={{
                width: 36,
                height: 36,
                borderColor: '#bdbdbd',
                borderWidth: 1,
                borderRadius: 3,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.color
            }}>
                {data.isSelected && (
                    <Image source={require('../../assets/icon/ic_check.png')}
                           style={{
                               height: 24,
                               width: 24,
                               resizeMode: 'contain',
                               tintColor: data.color === 'white' ? 'gray' : 'white'
                           }}/>
                )}
            </View>
        </TouchableOpacity>
    );
}

export default EcommerceStyle23;