import React, {useContext, useRef, useState, Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Surface from '../../components/Surface';
import {NoItemHeader} from './NoItemComponents';
import {PageContext} from '../../../App';

export default function ({children,active='chat', title="Chat"}) {
    const [tab, setTab] = useState(active);
    const [value, onChangeText] = useState('music');
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor:'#FFF'}}>

            <Surface>
                <NoItemHeader color={'#FFF'} bg_color={"#7575ff"} withSearch={false} title={title}
                              leftPress={() => pageContext.pageDispatch({page: 'pop'})} value={value}
                              onChange={(e) => onChangeText(e)}/>
                <View style={{flexDirection: 'row', backgroundColor: '#FFF', height: 56}}>
                    <TouchableOpacity onPress={() => setTab('chat')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'chat' ? 2 : 0,
                        borderBottomColor: '#7575ff',
                    }]}>
                        <Text style={tab==='chat'? style.text_menu_active :style.text_menu}>CHAT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('feed')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'feed' ? 2 : 0,
                        borderBottomColor: '#7575ff',
                    }]}>
                        <Text style={tab==='feed'? style.text_menu_active :style.text_menu}>FEED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('friend')} style={[style.tab_menu, {
                        borderBottomWidth: tab === 'friend' ? 2 : 0,
                        borderBottomColor: '#7575ff',
                    }]}>
                        <Text style={tab==='friend'? style.text_menu_active :style.text_menu}>FRIEND</Text>
                    </TouchableOpacity>
                </View>
            </Surface>
            {
                children
            }
        </View>
    );


}

const style = StyleSheet.create({
    tab_menu: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    text_menu: {
        color: '#1e1e1e',
        fontWeight: 'bold',
    },
    text_menu_active: {
        color: '#7575ff',
        fontWeight: 'bold',
    },
});
