import React, {useContext, useRef, useState, Component} from 'react';
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
    ScrollView,
} from 'react-native';
import {InputWithIcon} from './VerificationStyle13';
import {PageContext} from '../../../App';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {storageImageUrl} from '../../tools/Helpers';

export const dummyArr = [
    {
        title: 'Viva La Vida',
        sub_title: 'Coldplay',
        img: storageImageUrl('search', 'search_5_img_upd_1.png'),
    },
    {
        title: 'Drones',
        sub_title: 'Muse',
        img: storageImageUrl('search', 'search_5_img_upd_1.png'),
    },

];

export const recomendArr = [
    {
        img: storageImageUrl('search', 'search_5_img_rec_1.png'),
    },
    {
        img: storageImageUrl('search', 'search_5_img_rec_2.png'),
    },
    {
        img: storageImageUrl('search', 'search_5_img_rec_1.png'),
    },
];
export default function () {
    const [value, setValue] = useState('');
    const [tab, setTab] = useState('music');
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={{padding: 8, backgroundColor: '#79bf10'}}>
                <Surface style={{marginBottom: 0}}>
                    <InputWithIcon bg_color={'#FFF'} onPress={() => pageContext.pageDispatch({page: 'pop'})}
                                   icon={require('../../assets/icon/ic_search_gray.png')} value={value}
                                   placeholderTextColor={'#000'}
                                   placeholder={''}
                                   onChange={text => setValue(text)}/>
                </Surface>
            </View>
            <Surface style={{marginTop: 0, margin: 0}}>
                <View style={{flexDirection: 'row', backgroundColor: '#79bf10', height: 50}}>
                    <TouchableOpacity onPress={() => setTab('music')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'music' ? 2 : 0,
                        borderBottomColor: '#FFF',
                    }]}>
                        <Text style={style.text_menu}>MUSIC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('movie')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'movie' ? 2 : 0,
                        borderBottomColor: '#FFF',
                    }]}>
                        <Text style={style.text_menu}>MOVIE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('books')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'books' ? 2 : 0,
                        borderBottomColor: '#FFF',
                    }]}>
                        <Text style={style.text_menu}>BOOKS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('games')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'games' ? 2 : 0,
                        borderBottomColor: '#FFF',
                    }]}>
                        <Text style={style.text_menu}>GAMES</Text>
                    </TouchableOpacity>
                </View>
            </Surface>
            <View style={{padding: 20}}>
                <Separator title={'NEW UPDATES'} onPress={() => snackbarRef.current.ShowSnackBarFunction()}/>
                <FlatList
                    data={dummyArr}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <Box data={item}/>
                        );
                    }}
                />
                <View style={{height: 20}}/>
                <Separator title={'RECOMENDED'} onPress={() => snackbarRef.current.ShowSnackBarFunction()}/>
                <FlatList
                    data={recomendArr}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <Rectangle data={item}/>
                        );
                    }}
                />

                {/*<Box/>*/}
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ScrollView>
    );
}

export function Rectangle({data}) {
    return (
        <View style={{
            height: 170,
            width: 115,
            backgroundColor: '#E0E0E0',
            borderRadius: 5,
            marginRight: 20,
            overflow: 'hidden',
        }}>
            <Image style={{flex: 1, width: undefined, height: undefined}} source={{uri: data.img}}/>
        </View>
    );
}

export function Separator({title = 'Title', subTitle = 'See All', onPress}) {
    return (
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={{flex: 1}}>
                <Text style={{alignSelf: 'flex-end', fontWeight: 'bold', color: '#72b50f'}}>{subTitle}</Text>

            </TouchableOpacity>
        </View>
    );
}

export function Box({data, footer = false, footer_text_color = '#FFF'}) {
    return (
        <Surface style={{
            borderWidth: 0,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
            marginRight: 20,
            marginBottom: 2,
            marginLeft: 2,
            borderRadius: 5,

        }}>
            <View style={{
                backgroundColor: '#FFF',
                width: 250,
                height: 200,
                borderRadius: 5,
                overflow: 'hidden',
            }}>
                <View style={{flex: 1}}>
                    <Image style={{flex: 1, width: undefined, height: undefined}} source={{uri: data.img}}/>
                    <View

                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0, right: 0,
                            height: 70,
                            paddingHorizontal: 20,
                            justifyContent: 'center',
                            backgroundColor: footer ? '#FFF' : null,
                        }}>
                        <Text style={{fontWeight: 'bold', color: footer_text_color}}>{data.title}</Text>
                        <Text style={{color: footer_text_color}}>{data.sub_title}</Text>
                    </View>
                </View>
            </View>
        </Surface>
    );
}

const style = StyleSheet.create({
    tab_menu: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    text_menu: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});
