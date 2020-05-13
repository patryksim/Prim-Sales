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
import Root from './Root';
import ModalContent from '../../components/ModalContent';
import {
    Button, ButtonClose,
    Card, Line,
    RoundButton,
} from './DialogComponent';
import MaterialSnackbar from '../../components/MaterialSnackbar';

const stars = [1, 2, 3, 4];
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
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card style={{backgroundColor: '#FFF', minHeight: 290, paddingHorizontal: 20}}>
                    <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 16}}>
                        <View style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>

                            <Image style={{height: 40, width: 40}} source={require('../../assets/dialog/person.png')}/>
                            {/*<View style={{height: 40, width: 40, backgroundColor: '#c5c5c5', borderRadius: 1000}}/>*/}
                        </View>
                        <View style={{flex: 3, justifyContent: 'center', paddingLeft: 10}}>
                            <Text style={{fontWeight: 'bold', color: '#1e1e1e'}}>John Doe</Text>
                            <Text style={{color: '#acacac', fontSize: 12}}>Product Designer</Text>
                        </View>
                    </View>
                    <Line/>
                    <View style={{flex: 1}}>
                        <View style={{marginTop: 14, marginBottom: 15, flexDirection: 'row'}}>
                            {
                                stars.map((y) => {
                                    return (
                                        <Image style={{width: 24, height: 24,marginRight:5}}
                                               source={require('../../assets/bottom/star.png')}/>

                                    );
                                })
                            }
                        </View>
                        <View style={{height: 90, backgroundColor: '#f6f6f6'}}>
                            <TextInput
                                multiline={true}
                                textAlignVertical={'top'}
                                style={{flex: 1}}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingVertical: 12}}>
                        <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('Decline clicked')}
                                style={{backgroundColor: '#FFF'}} textStyle={{color: '#ff7757'}}>Cancel</Button>
                        <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('Join clicked')}
                                style={{backgroundColor: '#FFF'}} textStyle={{color: '#3c95ff'}}>Submit</Button>
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
