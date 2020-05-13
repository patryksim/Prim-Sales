import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import StarBar from "../../components/StarBar";
import FloatingButton from "../../components/FloatingButton";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', title: 'Sky Blue Dress', titlePosition: 'right', image: 'ecommerce_9_img_1.jpg'},
    {id: '2', title: 'Velcro Sneaker White', titlePosition: 'right', image: 'ecommerce_9_img_2.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle9() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Browse'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <TabHeader titles={['ALL', 'POPULAR', 'NEW']} bgColor='#ff9800' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                renderItem={({item}) => <CardItem data={item} snackbarRef={snackbarRef}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardItem({data, snackbarRef}) {
    let cardMargin = 5;
    let cardWidth = screenWidth - (cardMargin * 4);

    return (
        <View style={{
            width: cardWidth,
            margin: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <Image style={{height: 200, width: cardWidth}}
                   source={{uri: storageImageUrl('ecommerce', data.image)}}/>
            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{fontSize: 14, color: '#263238', marginBottom: 3}}>{data.title}</Text>
                    <StarBar rating={4}/>
                </View>
                <Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#bdbdbd',
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid'
                    }}>$225</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ff9800'}}> $125</Text>
                </Text>
            </View>
            <FloatingButton style={{backgroundColor: '#ff9800', position: 'absolute', top: 10, right: 10}}
                            image={require('../../assets/icon/ic_shoppig_cart.png')}
                            imageStyle={{width: 36, height: 36}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('button cart clicked')}/>
            <FloatingButton style={{backgroundColor: 'white', position: 'absolute', top: 80, right: 10}}
                            image={require('../../assets/icon/ic_love_white.png')}
                            imageStyle={{tintColor: '#ff9800', width: 20, height: 20}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('button love clicked')}/>
        </View>
    )
}

export default EcommerceStyle9;