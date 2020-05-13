import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import MultiColumnView from "../../components/MultiColumnView";

const menuData = [
    {id: '1', title: 'Salary', amount: 250, color: '#7ed321'},
    {id: '2', title: 'Internet', amount: -250, color: '#76e9ff'},
];

const screenWidth = Dimensions.get('window').width;

function DashboardStyle4() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#f1f5f7'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{height: 180, backgroundColor: '#4456ca'}}>
                <View style={{flexDirection: 'row', paddingVertical: 24, paddingHorizontal: 15, alignItems: 'center'}}>
                    <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: 'white'}}/>
                    <View style={{flex: 1, paddingHorizontal: 10}}>
                        <Text style={{fontSize: 14, color: 'white'}}>Good Afternoon</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 4}}>John
                            Salihamidzic</Text>
                    </View>
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../assets/icon/ic_bell_ringing.png')}
                               style={{height: 14, width: 14, resizeMode: 'contain'}}/>
                        <View style={{
                            width: 14,
                            height: 14,
                            borderRadius: 7,
                            borderWidth: 3,
                            borderColor: 'white',
                            position: 'absolute',
                            top: -2,
                            right: -2,
                            backgroundColor: 'red'
                        }}/>
                    </View>
                </View>
            </View>
            <MainDashboard/>
            <ScrollView>
                <TitleCard text='Today'/>
                <MultiColumnView
                    containerStyle={{padding: 5}}
                    data={menuData}
                    renderItem={(item) => <TransactionItem data={item}/>}
                />
                <TitleCard text='Yesterday'/>
                <MultiColumnView
                    containerStyle={{padding: 5}}
                    data={menuData}
                    renderItem={(item) => <TransactionItem data={item}/>}
                />
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainDashboard() {
    return (
        <View style={{
            height: 200,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: -100,
            marginHorizontal: 15,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 20
        }}>
            <Text style={{fontSize: 14, color: '#5ca30e', marginBottom: 15}}>Total Transaction</Text>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#272b43', marginBottom: 40}}>$ 123,456</Text>
            <View style={{flexDirection: 'row'}}>
                <ResumeDownlink/>
                <View style={{width: 15}}/>
                <ResumeUplink/>
            </View>
        </View>
    );
}

function ResumeDownlink() {
    return (
        <View style={{
            flex: 1,
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            borderColor: '#eaecf3',
            borderWidth: 1,
            borderRadius: 5,
            alignItems: 'center',
        }}>
            <Image style={{width: 25, height: 30, resizeMode: 'contain', marginHorizontal: 5}}
                   source={require('../../assets/icon/ic_down.png')}/>
            <Text style={{fontSize: 14, color: '#272b43'}}>+ 123.456</Text>
        </View>
    );
}

function ResumeUplink() {
    return (
        <View style={{
            flex: 1,
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            borderColor: '#eaecf3',
            borderWidth: 1,
            borderRadius: 5,
            alignItems: 'center',
        }}>
            <Image style={{width: 25, height: 30, resizeMode: 'contain', tintColor: '#6fae2b', marginHorizontal: 5}}
                   source={require('../../assets/icon/ic_send_button.png')}/>
            <Text style={{fontSize: 14, color: '#272b43'}}>- 123.456</Text>
        </View>
    );
}

function TitleCard({text}) {
    return (
        <View style={{marginTop: 30, marginBottom: 10, marginHorizontal: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#272b43'}}>{text}</Text>
        </View>
    );
}

function TransactionItem({data}) {
    return (
        <View style={{
            height: 70,
            width: screenWidth - 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginHorizontal: 10,
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
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.color
            }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{(data.title).substr(0,1)}</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 10}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#272b43'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#a3a4ac', marginTop: 4}}>Description</Text>
            </View>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: data.amount < 0 ? '#dc2929' : '#5ca30e'}}>{data.amount}</Text>
        </View>
    );
}

export default DashboardStyle4;