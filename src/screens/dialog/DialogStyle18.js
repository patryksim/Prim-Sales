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
    Card,
    RoundButton,
} from './DialogComponent';
import MaterialSnackbar from '../../components/MaterialSnackbar';

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
                <Card style={{backgroundColor: '#FFF', minHeight: 470}}>
                    <View style={{paddingHorizontal: 20, flexDirection: 'row', paddingTop: 20}}>
                        <View style={{width: 50, justifyContent: 'center'}}>
                            <Image style={{height: 40, width: 40}} source={require('../../assets/dialog/person.png')}/>
                            {/*<View style={{height: 50, width: 50, backgroundColor: '#c5c5c5',borderRadius:1000}}/>*/}
                        </View>
                        <View style={{flex: 3, justifyContent: 'center', paddingLeft: 10}}>
                            <Text style={{fontWeight: 'bold', color: '#1e1e1e'}}>John Doe</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={{width: 20, height: 20}}
                                       source={require('../../assets/dialog/globe.png')}/>
                                <Text style={{color: '#0f497e', fontSize: 12, paddingHorizontal: 2}}>Public</Text>
                                <Image style={{width: 20, height: 20}}
                                       source={require('../../assets/dialog/chevron_down.png')}/>
                            </View>
                        </View>
                        <ButtonClose onClose={()=>setVisible(false)} tintColor={'#000'}/>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 20}}>
                        <TextInput
                            placeholder={'Write something...'}
                            multiline={true}
                            textAlignVertical={'top'}
                            style={{flex: 1}}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                    </View>
                    <View style={{height: 50, backgroundColor: '#f6f6f6', flexDirection: 'row'}}>
                        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 24, height: 24}}
                                   source={require('../../assets/dialog/ic_camera.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 24, height: 24}} source={require('../../assets/dialog/ic_clip.png')}/>
                        </TouchableOpacity>
                        <View style={{flex: 2}}>
                        </View>
                        <View
                            style={{
                                flex: 1.5,
                                backgroundColor: '#F6F6F6',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                justifyContent: 'center',
                            }}>
                            <Button onPress={() => setVisible(!visible)} style={{backgroundColor: '#c5c5c5'}}
                                    textStyle={{color: '#FFF'}}>
                                Post
                            </Button>
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
