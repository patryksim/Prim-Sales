import React, {useRef, useState, useContext} from 'react';
import {View, Text, Image, FlatList, Dimensions, ScrollView} from 'react-native';
import Surface from '../../components/Surface';
import HeaderOneButton from '../../components/HeaderOneButton';
import {PageContext} from '../../../App';

const {width} = Dimensions.get('window');
const newReleaseArr = [
    {
        image: 'https://picsum.photos/seed/girl/600/600',
        title: 'La Vie En Rose',
        sub_title: 'Gaga Lady',
    },
    {
        image: 'https://picsum.photos/seed/69/600/600',
        title: 'Dynamite',
        sub_title: 'Taylor Swift',
    },
];

const recomendedArr = [
    {
        image: 'https://picsum.photos/seed/girl/600/600',
        title: 'La Vie En Rose',
        sub_title: 'Gaga Lady',
    },
    {
        image: 'https://picsum.photos/seed/69/600/600',
        title: 'Dynamite',
        sub_title: 'Taylor Swift',
    },
    {
        image: 'https://picsum.photos/seed/69/600/600',
        title: 'Dynamite',
        sub_title: 'Taylor Swift',
    },
];

export default function ({children, revert = false, bg = '#FFF', card_bg = '#FFF', text_color = '#000', title = 'Settings', leftImage = require('../../assets/icon/ic_search_gray.png'), rightImage = require('../../assets/icon/mic.png'), placeholder = ''}) {
    const renderSeparator = () => {
        return (
            <View
                style={{
                    width: 10,
                }}
            />
        );
    };
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: bg}}>
            {
                revert
                    ?
                    <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})} bgColor={'#0a144e'}
                                     isHome={true} title={title}/>
                    :
                    <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                        <Surface>
                            <View style={{flexDirection: 'row', height: 56, backgroundColor: '#FFF'}}>
                                <View style={{width: 56, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image style={{width: 20, height: 20, tintColor: 'grey'}}
                                           source={leftImage}/>

                                </View>
                                <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 16, color: 'grey'}}>{placeholder}</Text>
                                </View>
                                <View style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image style={{width: 20, height: 20, tintColor: 'grey'}}
                                           source={rightImage}/>
                                </View>
                            </View>
                        </Surface>
                    </View>
            }
            <ScrollView>
                <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold', color: text_color}}>New Release</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={{color: text_color}}>More</Text>
                    </View>

                </View>
                <View style={{paddingHorizontal: 10}}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={newReleaseArr}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) =>

                            <Surface>
                                <View style={{
                                    width: (width / 2) - 18,
                                    height: (width / 2) + 20,
                                    backgroundColor: card_bg,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                }}>
                                    <View style={{height: (width / 2) - 40}}>
                                        <Image style={{flex: 1}} source={{uri: item.image}}/>
                                    </View>
                                    <View style={{flex: 1, backgroundColor: card_bg, flexDirection: 'row'}}>
                                        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 10}}>

                                            <Text style={{fontWeight: 'bold', color: text_color}}>{item.title}</Text>
                                            <Text style={{color: '#E0E0E0', fontSize: 12}}>{item.sub_title}</Text>
                                        </View>
                                        <View style={{
                                            width: 25,
                                            alignItems: 'center',
                                            paddingTop: 15,
                                        }}>
                                            <Image style={{width: 15, height: 15, tintColor: text_color}}
                                                   resizeMode={'cover'}
                                                   source={require('../../assets/icon/menu.png')}/>
                                        </View>
                                    </View>
                                </View>
                            </Surface>
                        }
                    />
                </View>
                <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold', color: text_color}}>Recomended</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={{color: text_color}}>More</Text>
                    </View>

                </View>
                <View style={{paddingHorizontal: 10}}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={recomendedArr}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) =>

                            <Surface>
                                <View style={{
                                    width: (width / 3) - 15,
                                    height: (width / 2) - 15,
                                    backgroundColor: '#FFF',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                }}>
                                    <View style={{height: (width / 2) - 15}}>
                                        <Image style={{flex: 1}} source={{uri: item.image}}/>
                                        <View style={{position: 'absolute', left: 10, bottom: 20}}>
                                            <Text style={{color: '#FFF'}}>Lady gaga</Text>
                                        </View>
                                    </View>
                                </View>
                            </Surface>
                        }
                    />
                </View>
                <View style={{height: 56}}/>
            </ScrollView>
            {
                children
            }
        </View>
    );
}
