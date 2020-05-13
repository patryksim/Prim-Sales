import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'profile_25_post_1.jpg', title: 'Making Friends is Easy'},
    {id: '2', image: 'profile_25_post_2.jpg', title: 'I’m Born to Run'},
    {id: '3', image: 'profile_25_post_3.jpg', title: 'I Wandered Strange Roads'},
    {id: '4', image: 'profile_25_post_4.jpg', title: 'I Wanna be Careless'},
    {id: '5', image: 'profile_25_post_1.jpg', title: 'Making Friends is Easy'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle25() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <View style={{
                backgroundColor: 'white',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <View style={{
                    width: '100%',
                    paddingVertical: 10,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/icon/ic_profile5.png')}
                           style={{width: 50, height: 50, resizeMode: 'contain'}}/>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 17, color: '#616161'}}>Michael Hendley</Text>
                        <Text style={{fontSize: 12, color: '#616161', marginTop: 4}}>270 Followers • 345 Followings</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{
                        width: '33%',
                        height: '100%',
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderBottomColor: '#8e24aa'
                    }}>
                        <TabTitle title='359' subtitle='Stories'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='346' subtitle='Photos'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='722' subtitle='Videos'/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                contentContainerStyle={{paddingVertical: 5}}
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#616161'}}>{subtitle}</Text>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 0.5
        }}>
            <Image source={{uri: storageImageUrl('profile', data.image)}}
                   style={{
                       width: 80,
                       height: 80,
                       borderRadius: 3,
                       overflow: 'hidden',
                       shadowOffset: {width: 0, height: 2},
                       shadowOpacity: 0.3
                   }}/>
            <View style={{flex: 1, paddingLeft: 15}}>
                <Text style={{fontSize: 16, color: '#616161'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 10}}>Weasel maternal dove far the jeepers
                    goodness inconsiderately spelled so ubiquitous amused knitted</Text>
            </View>
        </View>
    );
}

export default ProfileStyle25;