import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';

const dummyArr = [
    {
        title: 'Lorem Ipsum',
        value: 'lorem_ipsum',
        checked: false,
    },
    {
        title: 'Lorem Ipsumm',
        value: 'lorem_ipsumm',
        checked: false,
    },
    {
        title: 'Lorem Ipsummm',
        value: 'lorem_ipsummm',
        checked: false,
    },
    {
        title: 'Lorem Ipsummmm',
        value: 'lorem_ipsummmm',
        checked: false,
    },
];

export default function ({arr = dummyArr, onPress, round = true, checked_color="#59a7ff", text_color="#FFF"}) {
    const [radio, setRadio] = useState('');
    const [data, setData] = useState(arr);
    const onCheck = (item, idx) => {
        setRadio(item.value);
        return onPress(item);
    };
    return (
        <View style={{alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                data.map((x, y) => {
                    return (
                        <TouchableOpacity
                            onPress={() => onCheck(x, y)}
                            key={y}
                            style={{
                                backgroundColor: radio === x.value ? checked_color : '#f3f3f3',
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                                borderRadius: round ? 100 : 5,
                                margin: 5,

                            }}>
                            <Text style={{color: radio === x.value ? text_color : '#000'}}>{x.title}</Text>
                        </TouchableOpacity>
                    );
                })
            }

        </View>
    );
}



export const RoundButton = ({onPress, title = 'Title'}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#f3f3f3',
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 100,
                margin: 5,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
            <Text style={{color: '#000'}}>{title}</Text>
        </TouchableOpacity>
    );
};
