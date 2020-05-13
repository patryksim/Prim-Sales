import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import MaterialButton from "../../components/MaterialButton";

const DATA = [
    {id: '1', image: 'profile_13_image_1.jpg'},
    {id: '2', image: 'profile_13_image_2.jpg'},
    {id: '3', image: 'profile_13_image_3.jpg'},
    {id: '4', image: 'profile_13_image_4.jpg'},
    {id: '5', image: 'profile_13_image_5.jpg'},
    {id: '6', image: undefined},
];

const DATA2 = [
    {id: '1', image: 'profile_13_image_1.jpg'},
    {id: '2', image: 'profile_13_image_2.jpg'},
    {id: '3', image: 'profile_13_image_3.jpg'},
    {id: '4', image: 'profile_13_image_4.jpg'},
    {id: '5', image: 'profile_13_image_5.jpg'},
    {id: '6', image: 'profile_13_image_6.jpg'},
];

const screenWidth = Dimensions.get('window').width;
const progressBarWidth = screenWidth - 120;

function ProfileStyle23() {
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
                width: '100%',
                paddingVertical: 30,
                flexDirection: 'row',
                paddingHorizontal: 20,
                backgroundColor: 'white',
                marginBottom: 10,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={require('../../assets/icon/ic_profile_square.png')}
                       style={{width: 50, height: 50, resizeMode: 'contain'}}/>
                <View style={{flex: 1, marginLeft: 20}}>
                    <Text style={{fontSize: 14, color: '#616161'}}>Dean Norris</Text>
                    <StatusProgressBar progress={70} total={100} style={{marginTop: 4, marginBottom: 8}}/>
                    <View style={{width: progressBarWidth, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 10, color: '#8c8c8c', marginTop: 4}}>Amateur</Text>
                        <Text style={{fontSize: 10, color: '#8c8c8c', marginTop: 4}}>Expert</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <ListDataImage data={DATA} title='PORTFOLIOS'/>
                <ListDataImage data={DATA2} title='FRIENDS'/>
            </ScrollView>
            <MaterialButton title='Hire'
                            style={{marginHorizontal: 15, marginBottom: 15, marginTop: 15, backgroundColor: '#42bd41'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('hire clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function StatusProgressBar({progress, total, style}) {
    let width = (progress / total) * progressBarWidth;
    return (
        <View style={[{flexDirection: 'row'}, style]}>
            <View style={{height: 4, width: width, backgroundColor: '#42bd41'}}/>
            <View style={{height: 4, width: (progressBarWidth - width), backgroundColor: '#313c44'}}/>
        </View>
    );
}

function ListDataImage({data, title}) {
    return (
        <View style={{
            marginVertical: 5,
            marginHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            shadowRadius: 3,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }}>
            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#263238',
                marginLeft: 10,
                marginTop: 15
            }}>{title}</Text>
            <View
                style={{marginHorizontal: 10, height: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0'}}/>
            <MultiColumnView
                containerStyle={{padding: 5}}
                data={data}
                numColumns={3}
                renderItem={(item, numColumns) => <ItemData data={item}/>}
            />
        </View>
    );
}

function ItemData({data}) {
    if (data.image === undefined) {
        return (
            <View style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <View style={{
                    height: 110,
                    borderRadius: 5,
                    backgroundColor: '#f1f5f7',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>136</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>more</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <Image source={{uri: storageImageUrl('profile', data.image)}}
                       style={{height: 110, justifyContent: 'flex-end', borderRadius: 5}}/>
            </View>
        );
    }
}

export default ProfileStyle23;