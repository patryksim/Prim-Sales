import React, {useContext, useRef, useState, useEffect} from 'react';
import {ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderOneButton from "../../components/HeaderOneButton";
import FloatingButton from "../../components/FloatingButton";

function GalleryStyle17() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [data, setData] = useState([[]]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let dt = [];
        dt.push({id: '1', image: 'gallery_17_img_1.jpg'});
        dt.push({id: '2', image: 'gallery_12_img_1.jpg'});
        dt.push({id: '3', image: 'gallery_11_img_1.jpg'});
        dt.push({id: '4', image: 'gallery_10_img_1.jpg'});
        setData(dt);
    }, []);

    const setPrev = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    };

    const setNext = () => {
        if (current < (data.length - 1)) {
            setCurrent(current + 1)
        }
    };

    return (
        <ImageBackground source={{uri: storageImageUrl('gallery', data[current].image)}}
                         style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton title='' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20
            }}>
                <View style={{opacity: current === 0 ? 0.5 : 1}}>
                    <FloatingButton style={{backgroundColor: '#448aff', position: 'relative'}}
                                    image={require('../../assets/icon/ic_chevron_left.png')}
                                    disabled={current === 0}
                                    onPress={setPrev}/>
                </View>
                <View style={{opacity: current === (data.length - 1) ? 0.5 : 1}}>
                    <FloatingButton style={{backgroundColor: '#448aff', position: 'relative'}}
                                    image={require('../../assets/icon/ic_chevron_right.png')}
                                    disabled={current === (data.length - 1)}
                                    onPress={setNext}/>
                </View>
            </View>
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 15,
                backgroundColor: '#f1f5f7'
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#616161'}}>Hipster Girl Round Glasses</Text>
                <Text style={{
                    fontSize: 14,
                    color: '#616161',
                    marginTop: 6
                }}>{(current + 1).toString()} of {data.length.toString()}</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default GalleryStyle17;