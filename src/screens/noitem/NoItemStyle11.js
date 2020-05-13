import React, {useRef, useState} from 'react';
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
import RootHeader from './RootHeader';
import {storageImageUrl} from '../../tools/Helpers';

const {width} = Dimensions.get('window');

const dataArr = [
    {
        image: storageImageUrl('no_item', 'no_item_11_img_1.jpg'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',
    },
    {
        image: storageImageUrl('no_item', 'no_item_11_img_1.jpg'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: storageImageUrl('no_item', 'no_item_11_img_1.jpg'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    }
];

const updateArr = [
    {
        image: storageImageUrl('no_item', 'no_item_10_img_2.jpg'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',
    },
    {
        image: storageImageUrl('no_item', 'no_item_10_img_3.jpg'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: storageImageUrl('no_item', 'no_item_10_img_4.png'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
];
export default function () {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        console.log('viewableItems', viewableItems);
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <RootHeader>
            {/*<Text>No Item 11</Text>*/}
            <View style={{height: 300}}>

                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={'start'}
                    // snapToInterval={width}
                    decelerationRate={'fast'}
                    onViewableItemsChanged={onViewRef.current}
                    data={dataArr}
                    renderItem={({item}) =>
                        <View style={{width: width}}>
                            <View style={{height: 300, width: '100%'}}>
                                <Image style={{flex: 1}} source={{uri: item.image}}/>
                                <View style={{position: 'absolute', bottom: 20, left: 20}}>
                                    <Text
                                        style={{color: '#FFF', fontWeight: 'bold', fontSize: 14}}>{item.caption}</Text>
                                    <Text style={{color: '#FFF'}}>{item.date}</Text>
                                </View>
                            </View>
                        </View>
                    }
                    viewabilityConfig={viewConfigRef.current}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{position: 'absolute', flexDirection: 'row', right: 20, bottom: 20}}>
                    {
                        dataArr.map((x, y) => {
                            return (
                                <Text key={y} style={{color: page === y ? '#FFF' : '#404b69', fontSize:8,marginRight:7}}>●</Text>

                            );
                        })
                    }
                </View>
            </View>
            <View style={{padding: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>ALL UPDATES</Text>
                {/*<View style={{paddingLeft:10}}>*/}

            </View>
            <View style={{paddingLeft:20}}>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={updateArr}
                    renderItem={({item}) =>
                        <View style={{height: 180, width: 120, marginRight: 10, borderRadius: 5, overflow: 'hidden'}}>
                            <Image style={{flex: 1, borderRadius: 5}} source={{uri: item.image}}/>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {/*</View>*/}
        </RootHeader>
    );
}
