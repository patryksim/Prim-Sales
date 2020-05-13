import React, {useContext, useRef, useState} from 'react';
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {storageImageUrl} from "../../tools/Helpers";
import StarBar from "../../components/StarBar";
import MaterialButton from "../../components/MaterialButton";

function MapStyle5() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [visible, setVisible] = useState(false);

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <HeaderThreeButton
                title='Map'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#2979ff'
            />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <MaterialButton title={'Click Me!'} style={{width: 100, backgroundColor: '#2979ff'}}
                                buttonPress={() => setVisible(true)}/>
            </View>
            <MapDialog snackbarRef={snackbarRef} visible={visible} onDissmiss={() => setVisible(false)}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MapDialog({visible, snackbarRef, onDissmiss}) {

    const showSnacbar = (message) => {
        snackbarRef.current.ShowSnackBarFunction(message);
        onDissmiss();
    };

    return (
        <Modal animationType='fade' transparent={true} visible={visible}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={onDissmiss} style={{flex: 1, width: '100%'}}/>
                <View style={{width: 300, backgroundColor: 'white', alignItems: 'center'}}>
                    <Image source={{uri: storageImageUrl('map', 'map_5_bg.jpg')}}
                           style={{width: 300, height: 170, justifyContent: 'flex-end'}}/>
                    <View style={{width: '100%', padding: 15}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#212121'}}>Kennington Lane Cafe</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <StarBar rating={4} containerStyle={{marginTop: 5, marginBottom: 5}}/>
                            <Text style={{marginLeft: 5, fontSize: 14, color: '#757575'}}> Cafe</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Image source={require('../../assets/icon/ic_near_me.png')}
                                   style={{height: 16, width: 16, tintColor: 'gray', resizeMode: 'contain'}}/>
                            <Text style={{marginLeft: 5, fontSize: 12, color: '#757575'}}>383 Kennington Lane Vauxhall,
                                London, England (1.3 Km)</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 4}}>
                            <Image source={require('../../assets/icon/ic_history.png')}
                                   style={{height: 12, width: 12, tintColor: 'gray', resizeMode: 'contain'}}/>
                            <Text style={{marginLeft: 9, fontSize: 12, color: '#757575'}}>Open Until 20.00 PM</Text>
                        </View>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderTopWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderTopColor: '#b0bec5',
                            borderBottomColor: '#b0bec5',
                            paddingVertical: 10,
                            marginTop: 15
                        }}>
                            <ActionButton title='CALL' image={require('../../assets/icon/map5_ic_call.png')}
                                          onPress={() => showSnacbar('call clicked')}/>
                            <ActionButton title='DIRECTION' image={require('../../assets/icon/map5_ic_direction.png')}
                                          onPress={() => showSnacbar('direction clicked')}/>
                            <ActionButton title='WEBSITE' image={require('../../assets/icon/map5_ic_website.png')}
                                          onPress={() => showSnacbar('website clicked')}/>
                        </View>
                    </View>
                    <MaterialButton title='ADD TO A MAP'
                                    style={{
                                        width: 270,
                                        height: 50,
                                        marginBottom: 15,
                                        marginTop: 10,
                                        backgroundColor: '#ff3d00'
                                    }}
                                    buttonPress={() => showSnacbar('add to map clicked')}/>
                </View>
                <TouchableOpacity onPress={onDissmiss} style={{flex: 1, width: '100%'}}/>
            </View>
        </Modal>

    );
}

function ActionButton({image, title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
            <Image source={image}
                   style={{height: 22, width: 22, resizeMode: 'contain'}}/>
            <Text style={{fontSize: 12, color: '#2979ff', marginTop: 10}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default MapStyle5;