import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Surface from '../../components/Surface';
import {Input, Navbar} from './VerificationStyle14';
import QuantityCounter from '../../components/QuantityCounter';
import ComboBox from '../../components/ComboBox';
import RangeSlider from '../../components/RangeSlider';

const {width} = Dimensions.get('window');
const dataArr = [
    {
        title: 'Air Conditioner',
        value: 'air_conditioner',
        checked: false,
    },
    {
        title: 'Breakfast',
        value: 'breafast',
        checked: false,
    },
    {
        title: 'Parking',
        value: 'parking',
        checked: false,
    },
];

export default function () {
    const pageContext = useContext(PageContext);
    const [value, setValue] = useState('');
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(1000);
    const callback = () => {
        return (e) => {
            console.log('---->', e);
        };
    };

    const combobox_callback = () => {
        return (e) => {
            console.log('======> ', e);
        };
    };
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Surface>
                {/*<Text>qwe</Text>*/}
                <Navbar
                    leftImagePress={() => pageContext.pageDispatch({page: 'pop'})}
                    leftImageStyle={{width: 20, height: 20, tintColor: 'grey'}}
                    rightImage={require('../../assets/verification/ic_vertical_elipsis.png')}
                    rightImagePress={() => snackbarRef.current.ShowSnackBarFunction()}
                    title={'FILTER HOTEL'}/>
            </Surface>
            <View style={{paddingHorizontal: 20}}>
                <View style={{ marginTop: 28}}>
                    <Text style={{fontWeight: 'bold'}}>Price Range</Text>
                    <RangeSlider style={{marginHorizontal: 15, marginTop: 24, marginBottom: 16}}
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
                        paddingHorizontal: 15,
                    }}>
                        <Text style={{fontSize: 12, color: '#8c8c8c'}}>$ {min}</Text>
                        <Text style={{fontSize: 12, color: '#8c8c8c'}}>$ {max}</Text>
                    </View>
                </View>
                <Typography title={'Destination'}/>
                <Input value={value} onChangeText={(e) => setValue(e)}
                       placeholder={"Search"}
                       rightImage={require('../../assets/icon/ic_search_gray.png')}/>
                <Typography title={'Guest & Room'}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text>Guest(s)</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <QuantityCounter onChange={callback()} multiple={1} initialValue={1}/>

                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text>Room(s)</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <QuantityCounter onChange={callback()} multiple={1} initialValue={1}/>

                    </View>
                </View>
                <Typography title={'Facilities'}/>
                <ComboBox callback={combobox_callback()} data={dataArr}/>
            </View>
        </View>
    );
}

export const Typography = ({title = 'Title'}) => {
    return (
        <View style={{marginTop: 28, marginBottom: 20}}>
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
        </View>
    );
};





