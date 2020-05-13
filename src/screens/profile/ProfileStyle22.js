import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import StaggeredView from "../../components/StaggeredView";
import MaterialButton from "../../components/MaterialButton";
import ImageAutoHeight from "../../components/ImageAutoHeight";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', title: 'Workspace', image: 'profile_18_post_1.jpg'},
    {id: '2', title: 'Still Objects', image: 'profile_18_post_2.jpg'},
    {id: '3', title: 'Funny Stuff', image: 'profile_18_post_3.jpg'},
    {id: '4', title: 'Toys', image: 'profile_18_post_4.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle22() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
                shadow={false}
            />
            <TabHeader
                bgColor='#8e24aa'
                stripColor='white'
                activeIndex={0}
                icons={[
                    require('../../assets/icon/ic_profile19_camera.png'),
                    require('../../assets/icon/ic_profile19_group.png'),
                    require('../../assets/icon/ic_profile19_notif.png'),
                    require('../../assets/icon/ic_profile19_setting.png')]}
                onActiveChanged={(i) => onTabChanged(i)}/>
            <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
                <Image source={require('../../assets/icon/ic_profile4.png')}
                       style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c', marginTop: 4}}>UI Designer</Text>
                </View>
            </View>
            <StaggeredView
                containerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
            />
            <MaterialButton title='Hire'
                            style={{
                                width: screenWidth - 20,
                                backgroundColor: '#42bd41',
                                position: 'absolute',
                                bottom: 15,
                                left: 10,
                            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Hire clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({image}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Image source={image}
                   style={{width: 24, height: 24, resizeMode: 'contain'}}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <View style={{
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <View
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                    <Text style={{fontSize: 14, marginLeft: 5, color: '#616161'}}>{data.title}</Text>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{width: 15, height: 12, resizeMode: 'contain', tintColor: 'gray'}}/>
                </View>
                <ImageAutoHeight source={{uri: storageImageUrl('profile', data.image)}} imageWidth={(screenWidth / numColumns) - 15}/>
            </View>
        </View>
    );
}

export default ProfileStyle22;