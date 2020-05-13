import React, {useContext, useRef, useState, Component} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import {PageContext} from '../../../App';
import PinCode from '../../components/PinCode';
import MaterialSnackbar from '../../components/MaterialSnackbar';


const orange = '#F6723F';

function VerificationStyle1() {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const snackbarRef = useRef(null);
    // const [username, userInput] = InputRound();
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header leftPress={() => pageContext.pageDispatch({page: 'pop'})} title={'VERIFICATION'}/>
            <SubHeader text={'You will get SMS with a confirmation\ncode to this number'}/>
            <View style={{marginTop: 30, marginBottom: 44}}>
                <InputRound withIcon={true} style={{
                    height: 50,
                    // width: '100%',
                    borderColor: '#efefef',
                    borderWidth: 1,
                    borderRadius: 50,
                    paddingHorizontal: 20,
                    marginHorizontal: 70,
                }}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{marginBottom: 31}}>Please input code below</Text>
                <PinCode onChange={(e) => setPinCode(e)} length={4}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 58, marginBottom: 53}}>
                <Text>Resend Code</Text>
            </View>
            <View style={{paddingHorizontal: 70}}>

                <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('login clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export const Button = ({onPress, backgroundColor = '#64c0ff', color = '#FFF', box = false, title = 'Continue'}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: backgroundColor,
            borderRadius: box ? 5 : 100,
        }}>
            <Text style={{color: color, fontWeight: 'bold'}}>{title}</Text>
        </TouchableOpacity>
    );
};

export const Header = ({img = require('../../assets/verification/ic_arrow_back.png'), leftPress, title, backgroundColor = '#f6723f', titleColor = '#FFF', tintColor = '#FFF'}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={leftPress}
                              style={{
                                  flex: 1,
                                  backgroundColor: backgroundColor,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                              }}>
                <Image source={img} style={{width: 18, height: 12, tintColor: tintColor}}/>
            </TouchableOpacity>
            <View style={{
                flex: 4,
                backgroundColor: backgroundColor,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{color: titleColor, fontWeight: 'bold'}}>{title}</Text>
            </View>
            <View style={{flex: 1, backgroundColor: backgroundColor}}>

            </View>

        </View>
    );
};

const SubHeader = ({text}) => {
    return (
        <View style={{
            height: 140,
            backgroundColor: orange,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{textAlign: 'center', color: '#FFF'}}>{text}</Text>
        </View>
    );
};

function InputRound({style = {}, withIcon = false}) {
    const [value, setValue] = useState('');
    console.log('value', value);
    return (
        <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
            {/*<View style={style}>*/}
            <View style={{flex: 1}}>

                <TextInput
                    keyboardType={'phone-pad'}

                    // style={style}
                    value={phone_number(value)}
                    onChangeText={text => setValue(text)}
                />
            </View>
            {/*</View>*/}
            {
                withIcon
                &&
                <Image style={{width: 24, height: 25}}
                       source={require('../../assets/verification/ic_grreen_check.png')}/>
            }

        </View>
    );
};

export function phone_number(val) {
    if (val === null) {
        val = undefined;
    }
    return val === undefined ? '0' : val.replace(/\D/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, ' ');

}

export function phone_number_(val) {
    if (val === null) {
        val = undefined;
    }
    return val === undefined ? '0' : val.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

}

export default VerificationStyle1;
