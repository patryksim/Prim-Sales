import React, {useContext, useRef} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const DATA = [
    {id: '1', title: 'Dress', image: 'ecommerce_6_img_1.jpg', price: '32'},
    {id: '2', title: 'Shoes', image: 'ecommerce_6_img_2.jpg', price: '250'},
    {id: '3', title: 'Hat', image: 'ecommerce_6_img_3.jpg', price: '32'},
    {id: '4', title: 'Bag & Purse', image: 'ecommerce_6_img_4.jpg', price: '250'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Ecommerce'
                isHome={false}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <View style={{flexDirection: 'row', backgroundColor: '#ff9800'}}>
                <Text style={{color: 'white', paddingVertical: 15, marginLeft: 60}}>New Arrival / Apparel</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 20,
                backgroundColor: 'white',
            }}>
                <Text style={{fontSize: 14, color: '#616161'}}>Women</Text>
                <TouchableOpacity style={{padding: 20}}
                                  onPress={() => snackbarRef.current.ShowSnackBarFunction('all categories clicked')}>
                    <Text style={{fontSize: 12, color: '#bdbdbd'}}>View All Categories</Text>
                </TouchableOpacity>
            </View>
            <StaggeredView
                containerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <View style={{
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <View
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                    <Text style={{fontSize: 14, marginLeft: 5, color: '#616161'}}>{data.title}</Text>
                    <View style={{padding: 3, borderRadius: 3, backgroundColor: '#ff9800'}}>
                        <Text style={{fontSize: 12, color: 'white'}}>{data.price}</Text>
                    </View>
                </View>
                <ImageAutoHeight source={{uri: storageImageUrl('ecommerce', data.image)}}
                                 imageWidth={(screenWidth / numColumns) - 15}/>
            </View>
        </View>
    );
}

export default EcommerceStyle6;