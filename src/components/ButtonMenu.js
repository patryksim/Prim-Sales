import React, {useContext} from 'react';
import {Text, TouchableOpacity} from "react-native";
import {PageContext} from "../../App";

function ButtonMenu ({data}) {
    const pageContext = useContext(PageContext);
    return (
        <TouchableOpacity style={{
            width: '100%',
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
        }} onPress={() => pageContext.pageDispatch({page: data.action, category: data.category})}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonMenu;