import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";

function SizeSelector ({style}) {
    const [selected, setSelected] = useState('m');

    return (
        <View style={[{flexDirection: 'row', justifyContent: 'space-around'}, style]}>
            <ItemSize title='XS' selected={selected === 'xs'} onPress={() => setSelected('xs')}/>
            <ItemSize title='S' selected={selected === 's'} onPress={() => setSelected('s')}/>
            <ItemSize title='M' selected={selected === 'm'} onPress={() => setSelected('m')}/>
            <ItemSize title='L' selected={selected === 'l'} onPress={() => setSelected('l')}/>
            <ItemSize title='XL' selected={selected === 'xl'} onPress={() => setSelected('xl')}/>
        </View>
    )
}

function ItemSize({title, selected, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selected ? '#ff9800' : undefined,
            shadowOffset: {width: 0, height: selected ? 2 : 0},
            shadowOpacity: selected ? 0.3 : 0,
            shadowRadius: selected ? 3 : 0,
            elevation: selected ? 3 : 0,
        }}>
            <Text style={{fontSize: 18, color: selected ? 'white' : '#bdbdbd'}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default SizeSelector;