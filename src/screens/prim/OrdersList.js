import React, {useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA_TYPE = {
    ACTION_LIKE: 'ActionLike',
    ACTION_LIKE2: 'ActionLike2',
    ACTION_COMMENT: 'ActionComment',
    ACTION_FOLLOW: 'ActionFollow',
    ACTION_ADD_FRIEND: 'ActionAddFriend',
};

function OrdersList() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const dias = [
        { text: 'Domingo', value: 'lunes' },
        { text: 'Lunes', value: 'lunes' },
        { text: 'Martes', value: 'martes' },
        { text: 'Miercoles', value: 'miercoles' },
        { text: 'Jueves', value: 'jueves' },
        { text: 'Viernes', value: 'viernes' },
        { text: 'Sabado', value: 'viernes' },
    ];
    const [clientes, setClientes] = useState ([
        { id: '1', dia: 'Lunes', latitud:9.349614, longitud:-79.87962, type: DATA_TYPE.ACTION_LIKE, user: 'SM Multifortuna', avatar: require('../../assets/icon/ic_profile1.png'), actionType: 'liked', actionLabel: 'How to be A Hipster', datetime: 'An hour ago' },
        { id: '2', dia: 'Lunes', latitud:37.78825, longitud:-122.4324, type: DATA_TYPE.ACTION_LIKE, user: 'Ms zafiro', avatar: require('../../assets/icon/ic_profile2.png'), actionType: 'commented on', actionLabel: 'How to be A Hipster', datetime: '3 days ago' },
        { id: '3', dia: 'Martes', latitud:9.100712, longitud:-79.28867, type: DATA_TYPE.ACTION_LIKE, user: 'Ms cabuya', avatar: require('../../assets/icon/ic_profile1.png'), actionType: 'is now following you', actionLabel: '', datetime: '3 days ago' },
        { id: '4', dia: 'Miercoles', latitud:37.64258, longitud:-110.4324, type: DATA_TYPE.ACTION_LIKE, user: 'Ms koko', avatar: require('../../assets/icon/ic_profile2.png'), actionType: 'added 3 new friends', actionLabel: '', datetime: '3 days ago' },
        { id: '5', dia: 'Jueves', latitud:9.097167, longitud:-79.37196, type: DATA_TYPE.ACTION_LIKE, user: 'Sm 288', avatar: require('../../assets/icon/ic_profile1.png'), actionType: 'liked', actionLabel: 'Introduction to UX design', datetime: '3 days ago' },
        { id: '6', dia: 'Viernes', latitud:9.345515, longitud:-79.80551, type: DATA_TYPE.ACTION_LIKE, user: 'Ms nueva era', avatar: require('../../assets/icon/ic_profile1.png'), actionType: 'commented on', actionLabel: 'Making your firs Android App', datetime: '3 days ago' },
        { id: '7', dia: 'Sabado', latitud:9.345515, longitud:-79.80551, type: DATA_TYPE.ACTION_LIKE, user: 'Prueba Sabado', avatar: require('../../assets/icon/ic_profile1.png'), actionType: 'commented on', actionLabel: 'Making your firs Android App', datetime: '3 days ago' },
    ]);
    const diaNum = new Date().getDay(); 

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Clientes'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#0092fe'
            />
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={clientes.filter(cliente => cliente.dia === dias[diaNum].text)}
                renderItem={({item}) => <ItemActivity data={item}/>}
                ListHeaderComponent={() =>
                    <View style={{
                        width: '100%',
                        height: 57,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        paddingLeft: 10
                    }}>
                        <Text style={{alignSelf: 'center', fontSize: 14, color: '#616161'}}>16 June 2020</Text>
                    </View>
                }
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data}) {
    const pageContext = useContext(PageContext);
    const valores = {valor: 'un valorx'};
    return (
        <View style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
            borderBottomWidth: 0.5,
            borderBottomColor: '#e0e0e0'
        }}>
            
            <View style={{flex: 1, marginLeft: 10}} >
                <Text style={{flex: 1, fontSize: 14, color: '#616161'}} 
                    onPress={() => pageContext.pageDispatch({page : 'ecommerce21'} )}>
                    <Text style={{fontWeight: 'bold', color: '#616161'}}>{data.user} </Text>
                </Text>
                {data.type === DATA_TYPE.ACTION_ADD_FRIEND && (
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Image source={require('../../assets/icon/ic_profile1.png')}
                               style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                        <Image source={require('../../assets/icon/ic_profile2.png')}
                               style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                        <Image source={require('../../assets/icon/ic_profile3.png')}
                               style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                    </View>

                )}
                <Text style={{fontSize: 12, color: '#bdbdbd', marginTop: 5}}>{data.datetime}</Text>
            </View>
        </View>
    );
}

export default OrdersList;