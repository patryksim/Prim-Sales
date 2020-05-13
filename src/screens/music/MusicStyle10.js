import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";

function MusicStyle10 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [numSelected, setNumSelected] = useState(3);
    const [dataEdit, setDataEdit] = useState([]);

    useEffect(() => {
        let newData = [];
        newData.push({id: '1', isSelected: false, title: 'Rock'});
        newData.push({id: '2', isSelected: false, title: 'Country'});
        newData.push({id: '3', isSelected: false, title: 'Jazz'});
        newData.push({id: '4', isSelected: false, title: 'Hip Hop'});
        newData.push({id: '5', isSelected: true, title: 'Pop'});
        newData.push({id: '6', isSelected: false, title: 'Alternative'});
        newData.push({id: '7', isSelected: true, title: 'Blues'});
        newData.push({id: '8', isSelected: false, title: 'EDM'});
        newData.push({id: '9', isSelected: false, title: 'Garage Blues'});
        newData.push({id: '10', isSelected: false, title: 'Lounge'});
        newData.push({id: '11', isSelected: false, title: 'Folk'});
        newData.push({id: '12', isSelected: false, title: 'Funk'});
        newData.push({id: '13', isSelected: false, title: 'Britpop'});
        newData.push({id: '14', isSelected: true, title: 'Reggae'});
        setDataEdit(newData);
    }, []);

    const onItemClick = (dt) => {
        let newData = [];
        dataEdit.map((d) => {
            if (dt.id === d.id) {
                if (d.isSelected) {
                    setNumSelected(numSelected - 1)
                } else {
                    setNumSelected(numSelected + 1)
                }
                dt.isSelected = !dt.isSelected;
                newData.push(dt)
            } else {
                newData.push(d)
            }
        });
        setDataEdit(newData);
    };

    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#fd0055'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 24, color: 'white'}}>Pick your favorite genres</Text>
                <Text style={{fontSize: 14, color: 'white', marginTop: 15}}>You can change this later</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingHorizontal: 10
            }}>
                {dataEdit.map((dt, i) => <ItemData key={i} data={dt} onItemClick={onItemClick}/>)}
            </View>
            <View style={{flex: 1}}/>
            <View style={{
                height: 60,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#e70052'
            }}>
                <Text style={{
                    flex: 1,
                    fontSize: 14,
                    color: 'white',
                    textAlign: 'center',
                    paddingLeft: 80
                }}>{numSelected.toString()} out of {dataEdit.length.toString()} selected</Text>
                <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('next clicked')}
                                  style={{width: 80, padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 14, color: 'white'}}>NEXT</Text>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function ItemData({data, onItemClick}) {
    return (
        <TouchableOpacity onPress={() => onItemClick(data)} style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
            paddingHorizontal: 15,
            margin: 5,
            borderRadius: 4,
            borderWidth: 1,
            backgroundColor: data.isSelected ? 'black' : 'transparent',
            borderColor: data.isSelected ? 'black' : 'white',
        }}>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

export default MusicStyle10;