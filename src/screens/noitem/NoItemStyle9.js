import React, {useContext, useRef, useState} from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import {storageImageUrl} from '../../tools/Helpers';
import SwipeBackView from '../../components/SwipeBack';
import {PageContext} from '../../../App';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#FFF'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 153.1, height: 128}}
                       source={{uri: storageImageUrl('no_item', 'no_item_9_satellite.png')}}/>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#1a1ad5',
                    marginTop: 54,
                    marginBottom: 19,
                }}>Whoops!</Text>
                <Text style={{
                    color: '#1e1e1e',
                    marginTop: 10,
                    textAlign: 'center',
                }}>{`Maecenas at tortor quam.\nMaecenas ac dictum mi, vitae\ndictum sapien. `}</Text>
            </View>
        </SwipeBackView>
    );
}
