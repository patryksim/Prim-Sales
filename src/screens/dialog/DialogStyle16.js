import React, {useContext, useRef, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
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
    DatePickerAndroid,
    DatePickerIOS,
} from 'react-native';
import Root from './Root';
import ModalContent from '../../components/ModalContent';
import {
    Button, ButtonClose,
    Card, Line,
    RoundButton,
} from './DialogComponent';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import InputSelect from '../../components/InputSelect';
import ComboBox from '../../components/ComboBox';

const dummyArr = [
    {
        title: 'All Day',
        value: 'all_day',
        checked: false,
    },
];

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const [email, setEmail] = useState('info@gmail.com');
    const [gmt, setGmt] = useState('Bangkok Standard Time');

    const [fromDate, setFromDate] = useState('Mon, 23 Sept 2019');
    const [fromTime, setFromTime] = useState('07.00 AM');

    const [toDate, setToDate] = useState('Mon, 23 Sept 2019');
    const [toTime, setToTime] = useState('09.00 AM');

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    const snackbarRef = useRef(null);
    const onPress = () => {
        return (e) => {
            console.warn(e);
        };
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    return (
        <Root>
            {/*<DatePickerAndroid/>*/}
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card style={{backgroundColor: '#FFF', minHeight: 470}}>
                    <View style={{flexDirection: 'row', height: 60, backgroundColor: '#2dc0b0'}}>
                        <TouchableOpacity onPress={() => setVisible(false)}
                                          style={{width: 33, alignItems: 'center', justifyContent: 'center',marginLeft:30}}>
                            <Image style={{width: 14, height: 14, tintColor: '#FFF'}}
                                   source={require('../../assets/icon/ic_close.png')}/>
                        </TouchableOpacity>
                        <View style={{flex: 1, justifyContent: 'center',marginLeft:10}}>
                            <Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 16}}>New Event</Text>
                        </View>
                        <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('save clicked')}
                                          style={{width: 60, alignItems: 'center', justifyContent: 'center',marginRight:30}}>
                            <Text style={{color: '#FFF'}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <InputSelect onPress={onPress()} initial_value={email}/>
                    <View style={{paddingHorizontal: 10}}>

                        <TextInput
                            style={{height: 50, borderColor: '#E0E0E0', borderBottomWidth: 1}}
                            placeholder={'Event Name'}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                        <TextInput
                            style={{height: 50, borderColor: '#E0E0E0', borderBottomWidth: 1}}
                            placeholder={'Location'}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                        <View style={{marginTop: 15}}>

                            <Text style={{fontSize: 12, color: '#1e1e1e', opacity: 0.4}}>From</Text>
                            <View style={{flexDirection: 'row', height: 50}}>
                                <TouchableOpacity onPress={showDatepicker} style={{
                                    flex: 1,
                                    marginRight: 5,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#E0E0E0',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{flex: 1}}>

                                        <Text style={[style.txt]}>{fromDate}</Text>
                                    </View>
                                    <View>
                                        <Image style={{width: 20, height: 20}}
                                               source={require('../../assets/dialog/chevron_down.png')}/>
                                    </View>
                                    {/*<InputSelect border={false} onPress={onPress()} initial_value={fromDate}/>*/}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={showTimepicker} style={{
                                    flex: 1, marginLeft: 5, borderBottomWidth: 1,
                                    borderBottomColor: '#E0E0E0',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{flex: 1}}>
                                        <Text style={[style.txt]}>{fromTime}</Text>
                                    </View>
                                    <View>
                                        <Image style={{width: 20, height: 20}}
                                               source={require('../../assets/dialog/chevron_down.png')}/>
                                    </View>
                                    {/*<InputSelect border={false} onPress={onPress()} initial_value={fromTime}/>*/}

                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginTop: 15, marginBottom: 15}}>
                            <Text style={{fontSize: 12, color: '#1e1e1e', opacity: 0.4}}>To</Text>
                            <View style={{flexDirection: 'row', height: 50}}>
                                <TouchableOpacity onPress={showDatepicker} style={{
                                    flex: 1,
                                    marginRight: 5,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#E0E0E0',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{flex: 1}}>

                                        <Text style={[style.txt]}>{toDate}</Text>
                                    </View>
                                    <View>
                                        <Image style={{width: 20, height: 20}}
                                               source={require('../../assets/dialog/chevron_down.png')}/>
                                    </View>
                                    {/*<InputSelect border={false} onPress={onPress()} initial_value={fromDate}/>*/}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={showTimepicker} style={{
                                    flex: 1, marginLeft: 5, borderBottomWidth: 1,
                                    borderBottomColor: '#E0E0E0',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{flex: 1}}>

                                        <Text style={[style.txt]}>{toTime}</Text>
                                    </View>
                                    <View>
                                        <Image style={{width: 20, height: 20}}
                                               source={require('../../assets/dialog/chevron_down.png')}/>
                                    </View>
                                    {/*<InputSelect border={false} onPress={onPress()} initial_value={fromTime}/>*/}

                                </TouchableOpacity>
                            </View>
                        </View>
                        <ComboBox callback={onPress()} data={dummyArr}/>
                        <InputSelect border={false} onPress={onPress()} initial_value={gmt}/>
                    </View>

                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
            <MaterialSnackbar ref={snackbarRef}/>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

        </Root>
    );
}
const style = StyleSheet.create({
    txt: {
        color: '#1e1e1e',
        opacity: 0.7,
    },
});
