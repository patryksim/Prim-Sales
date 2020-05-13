import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";

const DATA = [
    {id: '1', title: 'Primary Card', image: require('../../assets/icon/visa_logo.png'), detail: '1923 - 6789 - XXXX'},
    {id: '2', title: 'Secondary Card', image: require('../../assets/icon/gogole_wallet_logo.png')},
];

function DashboardStyle1() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <View style={{height: 116, backgroundColor: '#4456ca'}}>
                <HeaderTwoButton
                    title='PAYMENT'
                    navPress={() => pageContext.pageDispatch({page: 'pop'})}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                />
            </View>
            <UserProfile/>
            <TitleCard/>
            <FlatList
                contentContainerStyle={{marginTop: 10}}
                data={DATA}
                renderItem={({item}) => <CardItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function UserProfile() {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -45,
            marginHorizontal: 20,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 15
        }}>
            <Image style={{width: 60, height: 60}}
                   source={require('../../assets/dialog/person.png')}/>
            <View style={{paddingHorizontal: 10}}>
                <Text style={{fontSize: 16, color: '#272b43'}}>John Salihamidzic</Text>
                <Text style={{fontSize: 12, color: '#a3a4ac', marginTop: 4}}>Tokyo, Japan</Text>
            </View>
        </View>
    );
}

function TitleCard() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 10, marginHorizontal: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#272b43'}}>Linked Card</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#4456ca'}}>2 Card</Text>
        </View>
    );
}

function CardItem({data}) {
    return (
        <View style={{
            alignItems: 'center',
            marginBottom: 20,
            marginHorizontal: 20,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 15
        }}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                marginHorizontal: 20
            }}>
                <Text style={{flex: 2, fontSize: 14, fontWeight: 'bold', color: '#4456ca'}}>{data.title}</Text>
                <Image source={data.image} style={{flex: 1, height: 32}}/>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 30}}>
                <Text style={{flex: 2, fontSize: 12, color: '#a3a4ac'}}>Card Number</Text>
                <Text style={{flex: 1, fontSize: 12, color: '#a3a4ac'}}>Exp</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 4}}>
                <Text style={{flex: 2, fontSize: 14, color: '#272b43'}}>XXX - XXX - XXX - 345</Text>
                <Text style={{flex: 1, fontSize: 14, color: '#272b43'}}>03/27</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
                <Text style={{flex: 2, fontSize: 12, color: '#a3a4ac'}}>Card Holder Name</Text>
                <Text style={{flex: 1, fontSize: 12, color: '#a3a4ac'}}>CVV/CVC</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 4, marginBottom: 18}}>
                <Text style={{flex: 2, fontSize: 14, color: '#272b43'}}>John Salihamidzic</Text>
                <Text style={{flex: 1, fontSize: 14, color: '#272b43'}}>763</Text>
            </View>
        </View>
    );
}

export default DashboardStyle1;