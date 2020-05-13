import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialButton from "../../components/MaterialButton";

const DATA = [
    {
        id: '1',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Nice photo!',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        user: 'Ludwig',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'I love how you took it on white!',
        datetime: '2 hour ago'
    },
    {
        id: '3',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'You’re awesome!',
        datetime: '3 hour ago'
    },
    {
        id: '4',
        user: 'Remi Boucher',
        avatar: require('../../assets/icon/ic_profile3.png'),
        text: 'Wow!',
        datetime: '3 hour ago'
    },
    {
        id: '5',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Nice photo!',
        datetime: 'An hour ago'
    },
    {
        id: '6',
        user: 'Ludwig',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'I love how you took it on white!',
        datetime: '2 hour ago'
    },
];

function ActivityStyle20() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    let commentData = [];
    DATA.map((dt) => {
        commentData.push(<ItemActivity key={dt.id} data={dt}/>)
    });
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <ScrollView>
                <MainContent/>
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                    {commentData}
                    <ChatContainer snackbarRef={snackbarRef}/>
                </View>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function MainContent() {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={{uri: storageImageUrl('activity', 'activity_20_img.jpg')}}
                       style={{height: 190, width: '100%', resizeMode: 'cover'}}/>
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_profile1.png')}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 14}}>
                            <Text style={{fontWeight: 'bold', color: '#616161'}}>Gabriella Madelaine</Text>
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#bdbdbd'}}>1 hour</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={{fontSize: 14, color: '#2979ff'}}>Like</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>A wonderful serenity has
                    taken possession
                    of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am
                    alone, and feel the charm of existence in this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                    that I neglect my talents.</Text>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginBottom: 15,
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, tintColor: '#757575', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_menu4_message.png')}
                               style={{
                                   width: 14,
                                   height: 10,
                                   marginLeft: 25,
                                   tintColor: '#757575',
                                   resizeMode: 'contain'
                               }}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function ItemActivity({data}) {
    return (
        <View style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#e0e0e0'
        }}>
            <Image source={data.avatar}
                   style={{height: 40, width: 40, resizeMode: 'cover'}}/>
            <View style={{flex: 1, marginLeft: 10}}>
                <Text style={{fontSize: 14}}>
                    <Text style={{fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                    <Text style={{color: '#616161'}}> {data.text}</Text>
                </Text>
                <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                    <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                </View>
            </View>
        </View>
    );
}

function ChatContainer({snackbarRef}) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
        }}>
            <MaterialInput bgColor='#f1f5f7' margin={0} placeholder='Write comment here..'/>
            <MaterialButton title='Send' style={{width: 73, borderRadius: 3, backgroundColor: '#f44336'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Send clicked')}/>
        </View>
    );
}

export default ActivityStyle20;