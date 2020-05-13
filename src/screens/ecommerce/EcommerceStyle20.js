import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";
import SizeSelector from "../../components/SizeSelector";
import RangeSlider from "../../components/RangeSlider";
import MultiColumnView from "../../components/MultiColumnView";
import MaterialButton from "../../components/MaterialButton";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle20() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const [min, setMin] = useState(90);
    const [max, setMax] = useState(490);
    const [colorData, setColorData] = useState([]);
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, color: '#263238'});
        newData.push({id: '2', isSelected: false, color: '#bde2da'});
        newData.push({id: '3', isSelected: false, color: '#ff5252'});
        newData.push({id: '4', isSelected: false, color: '#fbc02d'});
        newData.push({id: '5', isSelected: false, color: '#eeeeee'});
        newData.push({id: '6', isSelected: false, color: 'white'});
        setColorData(newData);
        let brand = [];
        brand.push({id: '1', isSelected: false, title: 'Zara'});
        brand.push({id: '2', isSelected: false, title: 'Armani'});
        brand.push({id: '3', isSelected: false, title: 'Fred Perry'});
        brand.push({id: '4', isSelected: false, title: 'Hugo Boss'});
        brand.push({id: '5', isSelected: false, title: 'Chanel'});
        brand.push({id: '6', isSelected: false, title: 'Burberry'});
        brand.push({id: '7', isSelected: false, title: 'Asos'});
        brand.push({id: '8', isSelected: false, title: 'Armani'});
        brand.push({id: '9', isSelected: false, title: 'Fred Perry'});
        brand.push({id: '10', isSelected: false, title: 'Hugo Boss'});
        brand.push({id: '11', isSelected: false, title: 'Chanel'});
        brand.push({id: '12', isSelected: false, title: 'Burberry'});
        setBrandData(brand);
    }, []);

    const onColorClick = (dt) => {
        let newData = [];
        colorData.map((d) => {
            d.isSelected = dt.id === d.id;
            newData.push(d)
        });
        setColorData(newData);
    };

    const onBrandClick = (dt) => {
        let newData = [];
        brandData.map((d) => {
            if (dt.id === d.id) {
                dt.isSelected = !dt.isSelected;
                newData.push(dt)
            } else {
                newData.push(d)
            }
        });
        setBrandData(newData);
    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <HeaderOneButton title='Filter' bgColor='#ff9800' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <ScrollView>
                <View style={{
                    margin: 10,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    backgroundColor: 'white'
                }}>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eaeef0', paddingBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', padding: 15}}>PRICE RANGE</Text>
                        <RangeSlider style={{marginHorizontal: 15, marginVertical: 20}}
                                     sliderSize={screenWidth - 50}
                                     trackColor='#f1f5f7'
                                     trackActiveColor='#ff9800'
                                     thumbColor='#ff9800'
                                     minValue={10}
                                     maxValue={1000}
                                     initMinValue={min}
                                     initMaxValue={max}
                                     onChange={(minVal, maxVal) => {
                                         setMin(minVal);
                                         setMax(maxVal);
                                     }}/>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 15
                        }}>
                            <Text style={{fontSize: 12, color: '#8c8c8c'}}>$ {min}</Text>
                            <Text style={{fontSize: 12, color: '#8c8c8c'}}>$ {max}</Text>
                        </View>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eaeef0', paddingBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', padding: 15}}>PRODUCT COLOR</Text>
                        <ColorSelector style={{marginHorizontal: 15}} colorData={colorData} onItemClick={onColorClick}/>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eaeef0', paddingBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', padding: 15}}>PRODUCT SIZE</Text>
                        <SizeSelector style={{marginHorizontal: 10}}/>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eaeef0', paddingBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', padding: 15}}>BRAND</Text>
                        <BrandSelector style={{marginHorizontal: 15}} brandData={brandData} onItemClick={onBrandClick}/>
                    </View>
                </View>
            </ScrollView>
            <MaterialButton title='Apply Filter'
                            style={{width: screenWidth - 20, height: 50, marginBottom: 10, backgroundColor: '#ff9800'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Apply filter clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
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

function BrandSelector({style = {}, brandData, onItemClick}) {
    return (
        <View style={style}>
            <MultiColumnView
                containerStyle={{justifyContent: 'flex-start'}}
                data={brandData}
                numColumns={2}
                renderItem={(item) => <ItemBrand data={item} onItemClick={onItemClick}/>}
            />
        </View>
    );
}

function ItemBrand({data, onItemClick}) {
    return (
        <TouchableOpacity onPress={() => onItemClick(data)}
                          style={{flexDirection: 'row', width: 150, padding: 5, justifyContent: 'flex-start'}}>
            <View style={{
                width: 12,
                height: 12,
                borderColor: '#e0e0e0',
                borderWidth: 0.5,
                borderRadius: 3,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.isSelected ? '#ff9800' : '#f1f5f7'
            }}>
                {data.isSelected && (
                    <Image source={require('../../assets/icon/ic_check.png')}
                           style={{
                               height: 8,
                               width: 8,
                               resizeMode: 'contain',
                               tintColor: 'white'
                           }}/>
                )}
            </View>
            <Text style={{fontSize: 14, color: '#263238', marginLeft: 10}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle20;