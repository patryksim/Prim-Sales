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
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 60;
    const imagewidth = 220;
    return (
        <RootHeader>
            {/*<Text>No Item 11</Text>*/}
            <ScrollView>
                <View>
                    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>NEW UPDATES</Text>
                    </View>
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
                            <View style={{
                                width: itemwidth + itemwidtextend,
                                alignItems: 'center',
                            }}>
                                <Surface style={{marginBottom: 5, borderRadius: 5}}>
                                    <View style={{borderRadius: 5, overflow: 'hidden'}}>

                                        <View style={{minHeight: 300, width: imagewidth, backgroundColor: '#FFF'}}>
                                            <Image style={{flex: 1, overflow: 'hidden'}} source={{uri: item.image}}/>
                                            <View style={{
                                                height: 70,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                // backgroundColor:'red'
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
                                    </View>

                                </Surface>
                            </View>
                        }
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                        keyExtractor={(item, index) => index.toString()}
                    />


                </View>
                <View style={{marginTop: 20}}>

                    <Dot dataArr={dataArr} page={page}/>
                </View>
                <View style={{paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>RELATED NEWS</Text>
                    </View>
                    <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14, color: '#7575ff'}}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 20}}>

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
