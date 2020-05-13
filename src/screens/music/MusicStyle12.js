import React, {useContext, useRef} from 'react';
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const DATA1 = [
    {
        id: '1',
        title: 'Spirits Musical Behaved on Farther Letters',
        category: 'National Georgaphic',
        description: '235 views • 12 hours ago',
        image: 'music_12_img_1.jpg'
    },
    {
        id: '2',
        title: 'Spirits Musical Behaved on Farther Letters',
        category: 'National Georgaphic',
        description: '235 views • 12 hours ago',
        image: 'music_12_img_2.jpg'
    },
    {
        id: '3',
        title: 'Spirits Musical Behaved on Farther Letters',
        category: 'National Georgaphic',
        description: '235 views • 12 hours ago',
        image: 'music_12_img_1.jpg'
    },
];

function MusicStyle12 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Browse Videos'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                isHome={true}
                bgColor='#212121'
                shadow={false}
            />
            <TabHeader titles={['TRENDING', 'SUGGESTION', 'MY VIDEOS']}
                       defaultTitleColor='gray' activeTitleColor='white'
                       bgColor='#212121' onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA1}
                renderItem={({item}) => <VideosItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function VideosItem({data}) {

    return (
        <View style={{
            backgroundColor: 'white',
            margin: 5,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
        }}>
            <View style={{height: 190, overflow: 'hidden',}}>
                <ImageBackground style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
                                 source={{uri: storageImageUrl('music', data.image)}}>
                    <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#ff3d00', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../../assets/icon/ic_play2.png')} style={{width: 38, height: 38}}/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#263238'}}>{data.title}</Text>
                    <Text style={{fontSize: 13, color: 'black'}}>{data.category}</Text>
                    <Text style={{fontSize: 12, color: '#757575', marginTop: 8}}>{data.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default MusicStyle12;