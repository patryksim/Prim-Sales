import React, {useContext} from 'react';
import {Image, Text, View, TouchableOpacity,ScrollView} from 'react-native';
import {PageContext} from '../../../App';

export default function ({children}) {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
            <View style={{height: 56, backgroundColor: '#7575ff', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => pageContext.pageDispatch({page: 'pop'})} style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20}} source={require('../../assets/icon/ic_home.png')}/>
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 16}}>Top News</Text>
                </View>
                <View style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20}} source={require('../../assets/icon/ic_search.png')}/>

                </View>
            </View>
            {
                children
            }
        </View>
    );
}
