import React, {useRef, useState, useEffect, useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Surface from '../../components/Surface';
import RootBottomNav1 from './RootBottomNav1';
import HeaderOneButton from '../../components/HeaderOneButton';
import {PageContext} from '../../../App';
import {BottomModal} from './BottomComponents';

const contactArr = [
    {
        name: 'Michelle Hendley',
        loc: 'San Fransisco, CA',
    },
    {
        name: 'Kimberly White',
        loc: 'Manhattan, NY',
    },
];

export default function () {
    const [visible, setVisible] = useState(false);
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
        <View style={{flex: 1, backgroundColor: '#E0E0E0'}}>
            <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})} bgColor={'#0a144e'} isHome={true}
                             title={'Settings'}/>
            {
                contactArr.map((x, y) => {
                    return (
                        <ListUser onPress={() => setVisible(!visible)} data={x}/>
                    );
                })
            }
            <BottomModal visible={visible} style={{padding: 20}} backDropPress={() => setVisible(false)}>
                <List icon={require('../../assets/bottom/share.png')} title={'Share'}/>
                <List icon={require('../../assets/bottom/eye.png')} title={'Preview'}/>
                <List icon={require('../../assets/bottom/copy.png')} title={'Make a Copy'}/>
                <List icon={require('../../assets/bottom/chain.png')} title={'Get Link'}/>
            </BottomModal>
        </View>
    );
}

const ListUser = ({data, onPress}) => {
    return (
        <View style={{flexDirection: 'row', height: 80, borderBottomWidth: 0.5, borderColor: 'grey'}}>
            <View style={{width: 80, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'grey', borderRadius: 50}}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>{data.name}</Text>
                <Text style={{fontSize: 12, color: 'grey'}}>{data.loc}</Text>

            </View>
            <View style={{width: 80, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={onPress} style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'green',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{width: 25, height: 25}} source={require('../../assets/bottom/plus.png')}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};
const List = ({title, icon, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', height: 56}}>
            <View style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 25, height: 25}} source={icon}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>

                <Text style={{color: 'grey'}}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
