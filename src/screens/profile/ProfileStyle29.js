import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'profile_15_image_1.jpg', title: 'Book Shelf', datetime: 'An hour ago'},
    {id: '2', image: 'profile_15_image_2.jpg', title: 'Bedroom', datetime: 'An hour ago'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle29() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <View style={{width: '100%', backgroundColor: '#f1f5f7'}}>
                <View style={{flexDirection: 'row', paddingTop: 15, paddingLeft: 60}}>
                    <Image source={require('../../assets/icon/ic_profile4.png')}
                           style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                    <View style={{paddingVertical: 20, marginLeft: 10}}>
                        <Text style={{fontSize: 17, color: '#616161'}}>Michael Angelo</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            <Image source={require('../../assets/icon/ic_activity29_location.png')}
                                   style={{width: 15, height: 15, tintColor: '#616161', resizeMode: 'contain'}}/>
                            <Text style={{fontSize: 12, color: '#8c8c8c'}}>San Fransisco, CA</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 70,
                    paddingTop: 10,
                    paddingBottom: 20
                }}>
                    <ItemCount title='56' subtitle='Photos'/>
                    <ItemCount title='14' subtitle='Stories'/>
                    <ItemCount title='136' subtitle='Friends'/>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: 'white',
            }}>
                <Text style={{fontSize: 14, color: '#616161'}}>Landscapes</Text>
                <Text style={{fontSize: 12, color: '#bdbdbd'}}>24 Photos</Text>
            </View>
            <FlatList
                contentContainerStyle={{paddingVertical: 5}}
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemCount({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 27, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#8c8c8c'}}>{subtitle}</Text>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{width: screenWidth}}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={{uri: storageImageUrl('profile', data.image)}}
                       style={{width: '100%', height: 220, resizeMode: 'cover', backgroundColor: 'gray'}}/>
                <View style={{
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19546</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ProfileStyle29;