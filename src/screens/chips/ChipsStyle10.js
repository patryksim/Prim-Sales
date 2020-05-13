import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Surface from '../../components/Surface';
import {storageImageUrl} from '../../tools/Helpers';
import {PageContext} from '../../../App';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={{height: 300, backgroundColor: '#D3D3D3'}}>
                <Image style={{width: '100%', height: 300, position: 'absolute'}}
                       source={{uri: storageImageUrl('chip', 'chip_10_img_1.jpg')}}/>
                <View style={{height: 56, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => pageContext.pageDispatch({page: 'pop'})} style={style.vw_parent}>
                        <Image style={style.img}
                               source={require('../../assets/chip/ic_menu_button.png')}/>
                    </TouchableOpacity>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                            <Text style={{marginRight: 8, fontSize: 20, color: '#FFF'}}>All</Text>
                            <Image style={[style.img, {width: 10, height: 10}]}
                                   source={require('../../assets/chip/ic_down_arrow.png')}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.vw_parent}>
                        <Image style={style.img} source={require('../../assets/chip/ic_search.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.vw_parent}>
                        <Image style={style.img} source={require('../../assets/chip/ic_more.png')}/>
                    </TouchableOpacity>
                </View>

            </View>
            <Surface style={{
                height: 208,
                marginHorizontal: 20,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 192,
                borderRadius: 4,
            }}>
                <CardText img={require('../../assets/chip/ic_share.png')} title={'Share'}/>
                <CardText img={require('../../assets/chip/ic_cloud_upload.png')} title={'Upload'}/>
                <CardText img={require('../../assets/chip/ic_copy.png')} title={'Copy'}/>
                <CardText img={require('../../assets/chip/ic_print.png')} title={'Print this Page'}/>
            </Surface>
            <Surface style={{
                height: 130,
                position: 'absolute',
                top: 420,
                left: 20,
                right: 20,
                paddingTop: 20,
                paddingLeft: 28,
                borderRadius: 2,
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#7903d1'}}>Address</Text>
                <Text style={{
                    marginTop: 6,
                    color: '#1e1e1e',
                    opacity: .5,
                }}>{`345 Gotham City, Rock street No. 21\nMetropolis`}</Text>
            </Surface>
        </View>
    );
}

function CardText({title = 'Title', img = require('../../assets/chip/ic_down_arrow.png')}) {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 72, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={[style.img, {tintColor: '#000', opacity: .5}]} source={img}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 16, color: '#1e1e1e', opacity: .5}}>{title}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    vw_parent: {width: 50, alignItems: 'center', justifyContent: 'center'},
    img: {width: 20, height: 20, tintColor: '#FFF'},
});
