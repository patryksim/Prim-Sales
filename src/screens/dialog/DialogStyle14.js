import React, {useContext, useRef, useState} from 'react';
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
import HeaderOneButton from '../../components/HeaderOneButton';
import Root from './Root';
import ModalContent from '../../components/ModalContent';
import {
    Button,
    Card,
    RoundButton,
} from './DialogComponent';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import ComboBox from '../../components/ComboBox';

const dummyArr = [
    {
        title: 'White',
        value: 'white',
        checked: false,
    },
    {
        title: 'Black',
        value: 'black',
        checked: false,
    },
    {
        title: 'Red',
        value: 'red',
        checked: false,
    },
    {
        title: 'Green',
        value: 'green',
        checked: false,
    },
    {
        title: 'Blue',
        value: 'blue',
        checked: false,
    },
];
export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    const onPress = () => {
        return (e) => {
            console.warn(e);
        };
    };
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 40}}>
                <Card style={{backgroundColor: '#FFF', minHeight: 350}}>
                    <View style={{flex: 1, backgroundColor: '#3395ff', alignItems: 'center', paddingTop: 36}}>
                        <Image style={{width: 100, height: 100}} source={require('../../assets/dialog/shield_1.png')}/>
                        <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 20}}>Account Confirmed</Text>
                    </View>
                    <View style={{height: 140, paddingHorizontal: 20, justifyContent: 'center'}}>
                        <View style={{paddingHorizontal: 40, paddingBottom: 20}}>
                            <Text style={{textAlign: 'center',opacity:0.5}}>
                                Duis aute irure dolor in reprehenderit in voluptate velit
                            </Text>
                        </View>
                        <View style={{paddingHorizontal: 50}}>
                            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                                Get Started
                            </RoundButton>
                        </View>
                    </View>
                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
            <MaterialSnackbar ref={snackbarRef}/>
        </Root>
    );
}

const ListWithIcon = ({title = 'Title'}) => {
    return (
        <View style={{flexDirection: 'row', height: 45}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{color: '#1e1e1e'}}>
                    {title}
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text>
                    -
                </Text>
            </View>
        </View>
    );
};
