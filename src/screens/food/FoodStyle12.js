import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialButton from "../../components/MaterialButton";

const screenWidth = Dimensions.get('window').width;

function FoodStyle12() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('food', 'food_12_bg.jpg')}}
                         style={{flex: 1, backgroundColor: '#f1f5f7', justifyContent: 'space-between'}}>
            <HeaderFood
                title='Food App'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                placePress={() => snackbarRef.current.ShowSnackBarFunction('location clicked')}
            />
            <ItemContent snackbarRef={snackbarRef}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function HeaderFood({navPress, title, placePress}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: '#ff3d00',
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_chevron_left.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <View style={{flex: 1, paddingHorizontal: 10, alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white'}}>Fish N Chips .Co</Text>
                <Text style={{fontSize: 12, color: 'white'}}>1.25 KM</Text>
            </View>
            <TouchableOpacity onPress={placePress} style={{padding: 5}}>
                <Image source={require('../../assets/icon/ic_place.png')}
                       style={{height: 36, width: 36, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

function ItemContent({snackbarRef}) {
    const [numItem, setItem] = useState(2);
    return (
        <View style={{
            margin: 15,
            borderRadius: 3,
            shadowRadius: 3,
            alignItems: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: 'white'
        }}>
            <Text style={{fontSize: 21, color: 'black', textAlign: 'center', marginTop: 20, marginHorizontal: 20}}>Pasta Manicotti with Canoli
                and Cheese</Text>
            <Text style={{fontSize: 16, color: '#ff3d00', textAlign: 'center', marginTop: 8}}>$25.03</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', margin: 15}}>
                <TouchableOpacity onPress={() => setItem(numItem - 1)}
                                  style={{
                                      width: 50,
                                      height: 50,
                                      backgroundColor: '#e0e0e0',
                                      borderRadius: 25,
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                  }}>
                    <Image source={require('../../assets/icon/ic_minus.png')}
                           style={{height: 36, width: 36, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 16, color: 'black', textAlign: 'center', marginHorizontal: 30}}>{numItem}</Text>
                <TouchableOpacity onPress={() => setItem(numItem + 1)}
                                  style={{
                                      width: 50,
                                      height: 50,
                                      backgroundColor: '#e0e0e0',
                                      borderRadius: 25,
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                  }}>
                    <Image source={require('../../assets/icon/ic_plus.png')}
                           style={{height: 36, width: 36, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <MaterialButton title='BUY THIS'
                            style={{width: screenWidth - 30, height: 50, marginTop: 10, backgroundColor: '#ff3d00'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Buy this clicked')}/>
        </View>
    );
}

export default FoodStyle12;