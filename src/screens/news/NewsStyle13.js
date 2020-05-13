import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, View, ScrollView} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA1 = [
    {id: '1', image: 'news_13_img_1.jpg', title: 'Sub Pop Radio', description: 'Bonus Episode: Aftermath in Ocilla'},
    {id: '2', image: 'news_13_img_2.jpg', title: 'Playing with Science', description: 'Baseball: Physics at the Plate'},
    {id: '3', image: 'news_13_img_1.jpg', title: 'Sub Pop Radio', description: 'Bonus Episode: Aftermath in Ocilla'},
];

const DATA2 = [
    {id: '1', image: 'news_13_img_3.jpg', title: 'Fox News Talk', description: 'Fox News Sunday with Chris Wallace'},
    {id: '2', image: 'news_13_img_4.jpg', title: 'BBC World Service News', description: 'The Compass'},
    {id: '3', image: 'news_13_img_3.jpg', title: 'Fox News Talk', description: 'Fox News Sunday with Chris Wallace'},
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle13() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Radio Online'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                enableMore={false}
                bgColor='#cc0001'
            />
            <ScrollView>
                <ItemData title='Recent Played' data={DATA1}/>
                <ItemData title='Featured News' data={DATA2}/>
            </ScrollView>
            <View style={{width: '100%', height: 60, backgroundColor: '#37474f', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, color: 'white'}}>Ads 320 x 50</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({title, data}) {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: 'white',
            }}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{title}</Text>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({item}) => <ItemImage data={item}/>}
                keyExtractor={item => item.id}
            />
        </>
    );
}

function ItemImage({data}) {
    return (
        <View style={{padding: 5}}>
            <View style={{
                width: 160,
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={{uri: storageImageUrl('news', data.image)}}
                       style={{
                           height: 100,
                           justifyContent: 'flex-end',
                           padding: 10,
                           borderRadius: 3,
                           shadowRadius: 3,
                           shadowOffset: {width: 0, height: 2},
                           shadowOpacity: 0.3,
                           overflow: 'hidden'
                       }}/>
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 14, color: '#263238'}}>{data.title}</Text>
                    <Text style={{fontSize: 14, color: '#757575'}}>{data.description}</Text>
                </View>
            </View>
        </View>
    );
}

export default NewsStyle13;