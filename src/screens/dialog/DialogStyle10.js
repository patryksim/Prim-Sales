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
                <Card style={{backgroundColor: '#FFF', minHeight: 300}}>
                    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 75}} resizeMode={'contain'}
                               source={require('../../assets/dialog/chevron_14.png')}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: '#3395ff', fontSize: 16}}>New Achievment</Text>
                        <Text style={{color: '#1e1e1e', paddingTop: 10}}>You reached level 7 badge</Text>
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
