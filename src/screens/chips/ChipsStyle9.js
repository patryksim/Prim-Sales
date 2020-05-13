import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import {storageImageUrl} from '../../tools/Helpers';
import Surface from '../../components/Surface';
// import {Dot} from '../noitem/NoItemComponents';

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

const {width} = Dimensions.get('window');
export default function () {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        console.log('viewableItems ----> ', viewableItems);
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    const imagewidth = 220;
    return (
        <View style={{flex: 1}}>
            <Image style={{width: '100%', height: '100%', position: 'absolute'}}
                   source={{uri: storageImageUrl('chip', 'chip_9_img_2.jpg')}}/>
            <FlatList
                initialScrollIndex={page}
                scrollToIndex={page}
                ref={flatlistRef}
                pagingEnabled={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={(itemwidth + itemwidtextend)}
                ListHeaderComponent={() => <View
                    style={{width: ((itemwidth - itemwidtextend) / 2), height: 100}}/>}
                ListFooterComponent={() => <View
                    style={{width: ((itemwidth - itemwidtextend) / 2), height: 100}}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataArr}
                extraData={dataArr}
                renderItem={({item, index}) =>
                    <View style={{
                        width: itemwidth + itemwidtextend,
                        alignItems: 'center',
                        // backgroundColor: '#000',
                        marginTop: 96,
                    }}>
                        <Surface style={{
                            backgroundColor: '#FFF',
                            height: 400,
                            width: (itemwidth + itemwidtextend) - 25,
                        }}>
                            <View style={{flex: 1}}>
                                <View style={{
                                    height: 225,
                                    backgroundColor: '#FFF',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Image style={{width: 88, height: 88}}
                                           source={{uri:storageImageUrl('chip', 'chip_9_img_1.png')}}/>
                                </View>
                                <View style={{alignItems: 'center', flex: 1}}>
                                    <Text style={{fontSize: 20, color: '#7903d1', fontWeight: 'bold'}}>Step 1st</Text>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            opacity: .5,
                                            textAlign: 'center',
                                        }}>{`Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,`}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (page + 1 < dataArr.length) {
                                        flatlistRef.current.scrollToIndex({index: page + 1, animated: true});

                                    }
                                }
                                }
                                style={{
                                    height: 50,
                                    backgroundColor: '#74d103',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text style={{color: '#FFF', fontWeight: 'bold'}}>NEXT</Text>
                            </TouchableOpacity>
                        </Surface>
                    </View>
                }
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={{position: 'absolute', height: 120, left: 20, right: 20, bottom: 0, paddingTop: 50}}>
                <Dot dataArr={dataArr} page={page}/>
            </View>
        </View>
    );
}

function Dot({dataArr, page}) {
    // console.warn(page)
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {
                dataArr.map((x, y) => {
                    return (
                        <View key={y} style={{
                            height: 10,
                            width: 10,
                            marginRight: 10,
                            backgroundColor: page === y ? '#74d103' : '#FFF',
                            // borderWidth: 1,
                            // borderColor: '#d3d3d3',
                            borderRadius: 20,
                        }}/>

                    );
                })
            }
        </View>
    );
}
