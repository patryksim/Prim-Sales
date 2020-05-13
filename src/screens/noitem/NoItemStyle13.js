import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import RootHeader from './RootHeader';
import Surface from '../../components/Surface';
import {Dot} from './NoItemComponents';
import {storageImageUrl} from '../../tools/Helpers';

const {width} = Dimensions.get('window');

const dataArr = [
    {
        image: storageImageUrl('no_item', 'no_item_10_img_6.png'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',
    },
    {
        image: storageImageUrl('no_item', 'no_item_10_img_1.jpg'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: storageImageUrl('no_item', 'no_item_10_img_5.png'),
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },

];

const updateArr = [
    {
        image: 'https://picsum.photos/seed/girl/600/600',
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',
    },
    {
        image: 'https://picsum.photos/seed/a/600/600',
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: 'https://picsum.photos/seed/b/600/600',
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: 'https://picsum.photos/seed/c/600/600',
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: 'https://picsum.photos/seed/d/600/600',
        caption: 'Nulla Rhoncus Odio Sed',
        date: '20 Sept 2019',

    },
    {
        image: 'https://picsum.photos/seed/e/600/600',
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
            <ScrollView>
                <View style={{height: 340}}>

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
                            <View style={{margin: 20, borderRadius: 5}}>
                                <Surface style={{borderRadius: 5}}>
                                    <View style={{width: width - 40, height: 300, overflow: 'hidden', borderRadius: 5}}>
                                        <Image style={{flex: 1, overflow: 'hidden'}} source={{uri: item.image}}/>

                                        <View style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            height: 70,
                                            justifyContent: 'center',
                                            paddingLeft: 20,
                                            backgroundColor: '#FFF',
                                            width: width - 40,
                                        }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                    fontSize: 14,
                                                }}>{item.caption}</Text>
                                            <Text style={{color: '#000'}}>{item.date}</Text>
                                        </View>
                                    </View>
                                </Surface>
                            </View>
                        }
                        viewabilityConfig={viewConfigRef.current}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
                <Dot page={page} dataArr={dataArr}/>
                <View style={{padding: 20}}>
                    <Surface>
                        <View style={{backgroundColor: '#FFF', padding: 20}}>
                            <Text style={{fontWeight: 'bold', marginBottom: 20}}>Descriptions</Text>
                            <Text>In purus erat, blandit at neque in, mollis malesuada arcu. Proin placerat lacinia
                                leo, vel convallis mauris eleifend nec. Nulla vitae nisl eu augue volutpat molestie
                                eget sed sapien. Donec mollis dignissim lorem vitae dictum. Sed in justo id leo
                                malesuada vulputate vehicula in purus. Pellentesque elit mauris, euismod ut neque
                                in, hendrerit commodo massa. Praesent rutrum arcu non magna blandit, non viverra mi
                                consequat. Aenean nulla ante, sagittis at leo vitae, maximus vehicula arcu.</Text>
                        </View>
                    </Surface>
                </View>
            </ScrollView>

        </RootHeader>
    );
}

// export const Dot = ({data}) => {
//     return (
//         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
//             {
//                 dataArr.map((x, y) => {
//                     return (
//                         <Text key={y}
//                               style={{color: page === y ? '#7ed321' : '#eaeaea', fontSize: 18}}>●</Text>
//
//                     );
//                 })
//             }
//         </View>
//     );
// };
