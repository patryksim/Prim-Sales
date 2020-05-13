import React, {useRef, useState, useEffect} from 'react';
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
    Animated,
} from 'react-native';
import RootHeader from './RootHeader';
import Surface from '../../components/Surface';
import {Dot} from './NoItemComponents';
import {Card} from './NoItemStyle14';
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

const itemwidth = width / 2;
const itemwidtextend = 60;
const imagewidth = 220;

function ImagePreview({isActive, item}) {
    const [height] = useState(new Animated.Value(250));
    useEffect(() => {
        let height_ = isActive ? 300 : 250;
        Animated.timing(
            height,
            {
                toValue: height_,
                duration: 200,
            },
        ).start();
    });

    return (
        <View style={{
            width: itemwidth + itemwidtextend,
            alignItems: 'center',
            height: 300,
            justifyContent: 'center',
        }}>
            <Surface style={{marginBottom: 2, borderRadius: 5, overflow: 'hidden'}}>
                <Animated.View
                    style={{minHeight: height, width: imagewidth}}>
                    <Image style={{flex: 1, overflow: 'hidden'}} source={{uri: item.image}}/>
                    <View style={{
                        position: 'absolute',
                        left: 20,
                        bottom: 20,
                    }}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                                fontSize: 14,
                            }}>{item.caption}</Text>
                        <Text style={{color: '#FFF'}}>{item.date}</Text>
                    </View>
                </Animated.View>

            </Surface>
        </View>
    );
}

export default function () {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        console.log('qwe', viewableItems);
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
    const flatlistRef = useRef(null);

    return (
        <RootHeader>
            <ScrollView>
                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <Animated.Text style={{fontWeight: 'bold', fontSize: 14}}>NEW UPDATES</Animated.Text>
                </View>
                <View>
                    <FlatList
                        ref={flatlistRef}
                        pagingEnabled={true}
                        snapToAlignment={'start'}
                        decelerationRate={'fast'}
                        snapToInterval={(itemwidth + itemwidtextend)}
                        ListHeaderComponent={() => <View
                            style={{width: ((itemwidth - itemwidtextend) / 2), height: 210}}/>}
                        ListFooterComponent={() => <View
                            style={{width: ((itemwidth - itemwidtextend) / 2), height: 210}}/>}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dataArr}

                        renderItem={({item, index}) =>
                            <ImagePreview isActive={index === page} item={item}/>
                        }
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{padding: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>ALL UPDATES</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                        data={updateArr}
                        renderItem={({item}) =>
                            <View style={{height: 180, width: 120, borderRadius: 5, overflow: 'hidden'}}>
                                <Image style={{flex: 1, borderRadius: 5}} source={{uri: item.image}}/>
                            </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>

        </RootHeader>
    );
}
