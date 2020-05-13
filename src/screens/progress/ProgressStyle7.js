import React, {useContext, useRef, useState} from 'react';
import {View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import Slider from "../../components/Slider";

function ProgressStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [myVal, setMyVal] = useState(40);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='LIGHT'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                shadow={false}
                bgColor='#2640e8'
            />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Slider style={{marginHorizontal: 15, marginVertical: 30}}
                        trackColor='#dfe4eb'
                        trackActiveColor='#19bddf'
                        trackSize={3}
                        thumbTintColor='#19bddf'
                        sliderSize={200}
                        initValue={myVal}
                        onChange={(val) => {
                            setMyVal(val);
                        }}/>
                <Slider style={{marginHorizontal: 15, marginVertical: 30}}
                        sliderSize={200}
                        trackColor='#dfe4eb'
                        trackActiveColor='#f646d1'
                        trackSize={3}
                        thumbTintColor='#f646d1'
                        initValue={myVal}
                        onChange={(val) => {
                            setMyVal(val);
                        }}/>
                <Slider style={{marginHorizontal: 15, marginVertical: 30}}
                        sliderSize={200}
                        trackColor='#dfe4eb'
                        trackActiveColor='#19bddf'
                        trackSize={3}
                        thumbTintColor='#f8f9fb'
                        thumbBorderColor='#19bddf'
                        thumbBorderWidth={3}
                        initValue={myVal}
                        onChange={(val) => {
                            setMyVal(val);
                        }}/>
                <Slider style={{marginHorizontal: 15, marginVertical: 30}}
                        sliderSize={200}
                        trackColor='#dfe4eb'
                        trackActiveColor='#f646d1'
                        trackSize={3}
                        thumbTintColor='#f8f9fb'
                        thumbBorderColor='#f646d1'
                        thumbBorderWidth={3}
                        initValue={myVal}
                        onChange={(val) => {
                            setMyVal(val);
                        }}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default ProgressStyle7;