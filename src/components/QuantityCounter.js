import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ({min = 0, max = 10, onChange, multiple = 1, initialValue=1}) {
    let [value, setValue] = useState(initialValue);

    const onIncrease = () => {
        return () => {
            if (value < max) {
                setValue(value += multiple);
            }
            return onChange(value);
        };
    };

    const onDecrease = () => {
        return () => {
            if (value > min) {
                setValue(value -= multiple);
            }
            return onChange(value);
        };
    };
    return (
        <View style={{flexDirection: 'row', height: 40}}>
            <TouchableOpacity onPress={onDecrease()}
                              style={[style.qty_counter_btn, {borderTopLeftRadius: 5, borderBottomLeftRadius: 5}]}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>-</Text>
            </TouchableOpacity>
            <View style={style.qty_value}>
                <Text>{value}</Text>
            </View>
            <TouchableOpacity onPress={onIncrease()}
                              style={[style.qty_counter_btn, {borderTopRightRadius: 5, borderBottomRightRadius: 5}]}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );

}

const style = StyleSheet.create({
    qty_counter_btn: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderColor: '#d9d9d9',
    },
    qty_value: {
        width: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
    },
});
