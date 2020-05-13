import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

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

export default function ({data = dummyArr, callback, style, checked_color = '#4d9dff'}) {

    const [dataArr, setDataArr] = useState(data);

    const onCheck = (item, idx) => {
        return () => {
            const arr = [...dataArr];
            arr[idx].checked = !arr[idx].checked;
            setDataArr(arr);
            const result = arr.filter(arr => arr.checked === true);
            // console.log('result----->', result);
            return callback(result);
        };
    };
    return (
        <View>
            {
                dataArr.map((x, y) => {
                    return (
                        <TouchableOpacity onPress={onCheck(x, y)} key={y}
                                          style={[{flexDirection: 'row', marginBottom: 10}, style]}>
                            <View style={{
                                height: 25,
                                width: 25,
                                borderColor: '#d9d9d9',
                                backgroundColor: x.checked ? checked_color : '#FFF',
                                borderRadius: 5,
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {
                                    x.checked
                                    &&
                                    <Image style={{width: 15, height: 15, tintColor: '#FFF'}}
                                           source={require('../assets/icon/ic_check.png')}/>
                                }
                            </View>
                            <View style={{height: 25, justifyContent: 'center', paddingLeft: 10}}>
                                <Text>{x.title}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })
            }

        </View>
    );
}
