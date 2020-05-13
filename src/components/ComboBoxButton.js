import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const dummyArr = [
    {
        title: 'Private',
        value: 'private',
        checked: true,
    },
    {
        title: 'Grocery',
        value: 'grocery',
        checked: false,
    },
    {
        title: 'Commercial',
        value: 'commercial',
        checked: true,
    },
    {
        title: 'Low Budget',
        value: 'low_budget',
        checked: false,
    },
    {
        title: 'Luxury',
        value: 'luxury',
        checked: false,
    },
];

export default function ({data = dummyArr, callback, checked_color="#016ccc"}) {

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
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                dataArr.map((x, y) => {
                    return (
                        <TouchableOpacity onPress={onCheck(x, y)} key={y}
                                          style={{
                                              height: 40,
                                              backgroundColor: x.checked ? checked_color : '#f3f3f3',
                                              paddingHorizontal: 20,
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              borderRadius:5,
                                              marginBottom: 10,
                                              marginRight: 10,
                                          }}>
                            <Text style={{color:x.checked ? '#f3f3f3' : '#000'}}>{x.title}</Text>

                        </TouchableOpacity>
                    );
                })
            }

        </View>
    );
}
