import React, {useContext, useRef} from 'react';
import {FlatList, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";
import StarBar from "../../components/StarBar";

const DATA = [
    {
        id: '1',
        user: 'Madelaine Arno',
        comment: 'Dummy gets a first hand experience of Cape Town\'s booming house scene.Read Sean Stanley\'s review of Pitchfork Paris'
    },
    {
        id: '2',
        user: 'Michael Angelo',
        comment: 'Dummy gets a first hand experience of Cape Town\'s booming house scene.Read Sean Stanley\'s review of Pitchfork Paris'
    },
    {
        id: '3',
        user: 'Anna Hudgens',
        comment: 'Dummy gets a first hand experience of Cape Town\'s booming house scene.Read Sean Stanley\'s review of Pitchfork Paris'
    },
    {
        id: '4',
        user: 'Terry Truckers',
        comment: 'Dummy gets a first hand experience of Cape Town\'s booming house scene.Read Sean Stanley\'s review of Pitchfork Paris'
    },
];

function EcommerceStyle29() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderOneButton title='User Review (4)' bgColor='#ff9800'
                             navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <FlatList
                data={DATA}
                renderItem={({item}) => <CardItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardItem({data}) {
    return (
        <View style={{
            backgroundColor: 'white',
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderBottomWidth: 0.5,
            borderBottomColor: '#eaeef0'
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{data.user}</Text>
                <StarBar rating={4}/>
            </View>
            <Text style={{fontSize: 14, color: '#9e9e9e', marginVertical: 10, lineHeight: 20}}>{data.comment}</Text>
            <Text style={{fontSize: 12, color: '#bdbdbd'}}>2 hour ago</Text>
        </View>
    )
}

export default EcommerceStyle29;