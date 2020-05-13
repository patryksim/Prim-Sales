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
    const onPress = ()=>{
        return(e)=>{
            console.warn(e)
        }
    }
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 35}}>
                <Card style={{backgroundColor: '#FFF', minHeight: 332}}>
                    <View style={{paddingHorizontal: 30,paddingTop:28}}>
                        <Text style={{fontWeight: 'bold', fontSize:16, paddingBottom:20}}>Your Preferred Colors</Text>
                        <ComboBox callback={onPress()} style={{marginBottom:20}} data={dummyArr} checked_color={"#2dc0b0"}/>
                    </View>
                    <View style={{paddingBottom: 10, paddingHorizontal: 20, flexDirection: 'row',alignSelf:'flex-end'}}>
                        <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('Decline clicked')} style={{backgroundColor:'#FFF'}} textStyle={{color:"#3c95ff"}}>Cancel</Button>
                        <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('Join clicked')} style={{backgroundColor:'#FFF'}} textStyle={{color:'#3c95ff'}}>Ok</Button>
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
