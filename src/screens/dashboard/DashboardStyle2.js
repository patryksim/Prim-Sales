import React, {useContext, useRef} from 'react';
import {ScrollView, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialButton from "../../components/MaterialButton";

function DashboardStyle2() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='CREDIT CARD'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#4456ca'
            />
            <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                <CardItem/>
                <InputItem label='Credit Card Number' style={{marginTop: 30}}/>
                <View style={{flexDirection: 'row'}}>
                    <InputItem label='MM/YY' style={{flex: 1, paddingRight: 10}}/>
                    <InputItem label='CVV/CVC' style={{flex: 1, paddingLeft: 10}}/>
                </View>
                <InputItem label='Name on Card'/>
                <MaterialButton title='Continue' style={{marginHorizontal: 20, backgroundColor: '#4456ca', marginTop: 25}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Continue clicked')}/>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardItem() {
    return (
        <View style={{
            alignItems: 'center',
            marginHorizontal: 20,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: '#e1e2ee',
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
                <Text style={{flex: 2, fontSize: 14, fontWeight: 'bold', color: '#272b43'}}>XXX - XXX - XXX - XXX</Text>
                <Image source={require('../../assets/icon/visa_logo.png')} style={{flex: 1, height: 32}}/>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 30}}>
                <Text style={{width: 70, fontSize: 14, color: '#272b43'}}>EXP</Text>
                <Text style={{fontSize: 14, color: '#272b43'}}>CVV</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 4}}>
                <Text style={{width: 70, fontSize: 12, color: '#a3a4ac'}}>MM/YY</Text>
                <Text style={{fontSize: 12, color: '#a3a4ac'}}>***</Text>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginHorizontal: 20, marginTop: 30, marginBottom: 18}}>
                <Text style={{fontSize: 12, color: '#272b43'}}>Your name</Text>
            </View>
        </View>
    );
}

function InputItem({label, style}) {
    return (
        <View style={[{paddingHorizontal: 20, marginTop: 15}, style]}>
            <Text style={{fontSize: 12, color: '#1e1e1e'}}>{label}</Text>
            <View style={{flexDirection: 'row'}}>
                <MaterialInput placeholder=''
                               style={{
                                   flex: 1,
                                   width: 100,
                                   marginTop: -5,
                                   borderBottomWidth: 1,
                                   borderBottomColor: '#e4e4e4'
                               }}/>
            </View>
        </View>
    );
}

export default DashboardStyle2;