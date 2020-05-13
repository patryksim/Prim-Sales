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
    Body,
    Button,
    ButtonBack,
    ButtonClose,
    Caption,
    CaptionLocation,
    Card,
    Footer,
    Line,
    RoundButton,
} from './DialogComponent';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card style={{backgroundColor: '#FFF', minHeight: 250}}>
                    <View style={{
                        height: 190,
                        backgroundColor: '#B1491E',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image style={{flex:1}} source={require("../../assets/dialog/dialog_9.png")}/>
                        <Text style={{fontWeight: 'bold', color: '#FFF',position:'absolute'}}>Well Done!</Text>
                    </View>
                    <View style={{paddingHorizontal: 20,height:200,justifyContent:'center'}}>
                        <ListWithIcon title={'Cycling 12 Km'}/>
                        <ListWithIcon title={'Drink Water 1.5 liter'}/>
                        <ListWithIcon title={'Meditation 30 minutes'}/>
                    </View>
                    <View style={{paddingHorizontal: 20,paddingBottom:20}}>

                        <Button onPress={() => setVisible(!visible)} style={{backgroundColor:'#db3236'}} textStyle={{color:'#FFF'}}>
                            Join
                        </Button>
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
                <Text style={{color:'#1e1e1e'}}>
                    {title}
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Image style={{width:20}} resizeMode={"contain"} source={require("../../assets/dialog/check.png")}/>
            </View>
        </View>
    );
};
