import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View, Text, TouchableOpacity, Image, TextInput, Dimensions} from 'react-native';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import RadioButton from '../../components/RadioButton';
import RangeSlider from '../../components/RangeSlider';

const {width} = Dimensions.get('window');

const size = [
    {
        check: false,
        title: 'Small',
        value: 'small',
    }, {
        check: false,
        title: 'Medium',
        value: 'medium',
    }, {
        check: false,
        title: 'Large',
        value: 'large',
    }, {
        check: false,
        title: 'Extra Large',
        value: 'extra_large',
    },
];
const age = [
    {
        check: false,
        title: '0-20',
        value: '0-20',
    }, {
        check: false,
        title: '21-40',
        value: '21-40',
    }, {
        check: false,
        title: '41-60',
        value: '41-60',
    }, {
        check: false,
        title: '61-80',
        value: '61-80',
    },
];

export default function () {
    const pageContext = useContext(PageContext);
    const [value, setValue] = useState('');
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(1000);
    const [refresh, setRefresh] = useState('');

    const snackbarRef = useRef(null);

    const onChange = () => {
        return (e) => {
            console.log('====', e);
            snackbarRef.current.ShowSnackBarFunction('value ===> ' + e.value);
        };
    };

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Surface>
                {/*<Text>qwe</Text>*/}
                <Navbar rightImage={require('../../assets/verification/ic_vertical_elipsis.png')}
                        leftImagePress={() => pageContext.pageDispatch({page: 'pop'})}
                        leftImageStyle={{width: 20, height: 20, tintColor: 'grey'}}

                        rightImagePress={() => snackbarRef.current.ShowSnackBarFunction()}
                        title={'FILTER PRODUCT'}/>
            </Surface>
            <View style={{padding: 20}}>
                <Input placeholder={'Search'} value={value} onChangeText={(e) => setValue(e)}
                       rightImage={require('../../assets/icon/ic_search_gray.png')}/>
                <View style={{paddingVertical: 8,marginTop:28}}>
                    <Text style={{fontWeight: 'bold'}}>Price Range</Text>
                    <RangeSlider style={{marginHorizontal: 15, marginVertical: 20}}
                                 sliderSize={width - 70}
                                 trackColor='#f1f5f7'
                                 trackActiveColor='#4d9dff'
                                 thumbColor='#1276f2'
                                 minValue={10}
                                 maxValue={1000}
                                 initMinValue={min}
                                 initMaxValue={max}
                                 onChange={(minVal, maxVal) => {
                                     setMin(minVal);
                                     setMax(maxVal);
                                 }}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 15
                    }}>
                        <Text style={{fontSize: 12, color: '#8c8c8c'}}>$ {min}</Text>
                        <Text style={{fontSize: 12, color: '#8c8c8c'}}>$ {max}</Text>
                    </View>
                </View>
                <View style={{paddingVertical: 8}}>
                    <Text style={{fontWeight: 'bold'}}>Size</Text>
                </View>
                <RadioButton arr={size} onPress={onChange()}/>
                <View style={{paddingVertical: 8}}>
                    <Text style={{fontWeight: 'bold'}}>Age</Text>
                </View>
                <RadioButton arr={age} onPress={onChange()}/>

            </View>
            <MaterialSnackbar ref={snackbarRef}/>

        </View>
    );
}

export const Navbar = ({
                           title = 'Title',
                           leftImage = require('../../assets/verification/ic_arrow_back.png'),
                           leftImageStyle = {width: 20, height: 20},
                           leftImagePress,
                           rightImage = require('../../assets/icon/ic_close.png'),
                           rightImageStyle = {width: 20, height: 20},
                           rightImagePress,
                       }) => {
    return (

        <View style={{flexDirection: 'row', height: 60, backgroundColor: '#FFF'}}>
            <TouchableOpacity onPress={leftImagePress}
                              style={{width: 70, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={leftImage} style={leftImageStyle}/>
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>{title}</Text>
            </View>
            <TouchableOpacity onPress={rightImagePress}
                              style={{width: 70, alignItems: 'center', justifyContent: 'center'}}>

                <Image source={rightImage} style={rightImageStyle}/>
            </TouchableOpacity>
        </View>
    );
};


export const Input = ({leftImage, rightImage, value, onChangeText, placeholder = 'Placeholder', style = {paddingHorizontal: 15}}) => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: '#f3f3f3', borderRadius: 3, height: 50}}>
            {
                leftImage !== undefined
                &&
                <TouchableOpacity style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={leftImage} style={{width: 20, height: 20, tintColor: 'grey'}}/>
                </TouchableOpacity>
            }
            <View style={{flex: 1,justifyContent:'center'}}>
                <TextInput
                    style={style}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
            {
                rightImage !== undefined
                &&
                <TouchableOpacity style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={rightImage} style={{width: 24, height: 24, tintColor: 'grey'}}/>
                </TouchableOpacity>
            }
        </View>
    );
};
