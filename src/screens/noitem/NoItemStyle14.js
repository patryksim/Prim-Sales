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

function separator() {
    return (
        <View stlye={{borderWidth: 1, width: 200, height: 200, backgroundColor: 'red'}}/>
    );
}

export default function () {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        console.log('viewableItems', viewableItems);
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: 20,
                }}
            />
        );
    };
    return (
        <RootHeader>
            {/*<Text>No Item 11</Text>*/}
            <ScrollView>
                <View style={{paddingVertical: 20}}>
                    <View style={{paddingHorizontal: 20, paddingBottom: 20}}>

                        <Text style={{fontWeight: 'bold', fontSize: 14}}>NEW UPDATES</Text>
                    </View>
                    <FlatList
                        pagingEnabled={true}
                        snapToAlignment={'start'}
                        snapToInterval={width}
                        decelerationRate={'fast'}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                        data={dataArr}
                        renderItem={({item, index}) =>
                            <TouchableOpacity style={{
                                width: width - 100,
                                height: 210,
                                overflow: 'hidden',
                                borderRadius: 5,
                                marginLeft: index === 0 ? 20 : 0,
                                marginRight: index === dataArr.length - 1 ? 20 : 0,
                            }}>
                                <Image style={{flex: 1, overflow: 'hidden'}} source={{uri: item.image}}/>

                                <View style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    height: 70,
                                    justifyContent: 'center',
                                    paddingLeft: 20,
                                    width: width,
                                }}>
                                    <Text
                                        style={{
                                            color: '#FFF',
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                        }}>{item.caption}</Text>
                                    <Text style={{color: '#FFF'}}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        viewabilityConfig={viewConfigRef.current}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>

                    <Text style={{fontWeight: 'bold', fontSize: 14}}>RELATED NEWS</Text>
                    {
                        updateArr.map((x, y) => {
                            return (
                                <Card data={x}/>

                            );
                        })
                    }

                </View>
            </ScrollView>

        </RootHeader>
    );
}

export const Card = ({data}) => {
    return (
        <View style={{marginTop: 20}}>
            <Surface style={{borderRadius: 5}}>
                <View style={{borderRadius: 5, overflow: 'hidden'}}>

                    <View style={{flexDirection: 'row', height: 100}}>
                        <View style={{width: 100, borderRadius: 5}}>
                            <Image style={{flex: 1}} source={{uri: data.image}}/>
                        </View>
                        <View style={{
                            flex: 1,
                            backgroundColor: '#FFF',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{fontWeight: 'bold'}}>{data.caption}</Text>
                            <Text style={{fontSize: 12, marginBottom: 5}}>{data.date}</Text>
                            <Text style={{fontSize: 12}}>In purus erat, blandit at neque in, mollis
                                malesuada arcu. Proin</Text>
                        </View>
                    </View>
                </View>
            </Surface>
        </View>
    );
};
