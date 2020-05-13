import React, {useContext, useState} from 'react';
import {Animated, View, Text, ScrollView, TouchableOpacity, Image} from "react-native";
import {PageContext} from "../../App";

const headerHeight = 56;

const initialState = {data: []};

function ExpandableScrollView({data}) {
    const [dist, setDist] = useState(0);
    const [active, setActive] = useState(initialState);

    const onCategoryPress = (dt) => {
        if (dt.category === active.category) {
            setActive(initialState)
        } else {
            setActive(dt)
        }
    };

    return (
        <View style={{flex: 1}}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={(event) => setDist(event.nativeEvent.contentOffset.y)}>
                <Splitter/>
                {data.map((dt) => {
                    return (
                        <ItemMenu key={dt.category} data={dt} active={active} onCategoryPress={onCategoryPress}/>
                    );
                })}
            </ScrollView>
            <Animated.View style={{position: 'absolute', top: 0, left: 0, right: 0}}>
                {(dist > (data.indexOf(active) * headerHeight)
                    && (dist < ((data.indexOf(active) * headerHeight) + (headerHeight * (active.data.length))))
                        && JSON.stringify(active) !== JSON.stringify(initialState)) && (
                    <View>
                        <Splitter/>
                        <HeaderMenu data={active} isActive={true} onPress={() => onCategoryPress(active)}/>
                    </View>
                )}
            </Animated.View>
        </View>
    );
}

function ItemMenu({data, active, onCategoryPress}) {
    const pageContext = useContext(PageContext);

    let isActive = active.category === data.category;
    return (
        <View>
            <HeaderMenu data={data} isActive={isActive} onPress={() => onCategoryPress(data)}/>
            {isActive && (
                <View>
                    {data.data.map((dt) => {
                        return (
                            <TouchableOpacity key={dt.action} style={{height: headerHeight, justifyContent: 'center', paddingLeft: 55, paddingRight: 20}}
                                              onPress={() => pageContext.pageDispatch({page: dt.action})}>
                                <Text style={{fontSize: 16, color: 'white'}}>{dt.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                    <Splitter/>
                </View>
            )}
        </View>
    );
}

function HeaderMenu({data, isActive, onPress}) {
    return (
        <TouchableOpacity style={{
            paddingHorizontal: 15,
            height: headerHeight,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: 'white',
            borderBottomWidth: 0.5,
            backgroundColor: '#3023ae'
        }} onPress={onPress}>
            <Image style={{width: 24, height: 24, alignSelf: 'center'}}
                   source={data.icon}/>
            <Text style={{flex: 1, fontSize: 16, color: 'white', marginLeft: 15}}>{data.title}</Text>
            <Text style={{fontSize: 16, color: 'white', marginRight: 5}}>{data.data.length}</Text>
            <Image style={{width: 24, height: 24, alignSelf: 'center', transform: [{rotate: isActive ? '180deg' : '0deg'}]}}
                   source={require('../assets/icon/ic_homedropdown.png')}/>
        </TouchableOpacity>
    );
}

function Splitter() {
    return (
        <View style={{height: 0.5, backgroundColor: 'white'}}/>
    );
}

export default ExpandableScrollView;