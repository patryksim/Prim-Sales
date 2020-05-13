import React, {useContext, useRef} from 'react';
import {Platform, ProgressBarAndroid, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import CircularProgress from "../../components/CircularProgress";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import FloatingButton from "../../components/FloatingButton";

function ProgressStyle3 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='MY FILES'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                shadow={false}
                bgColor='#2640e8'
            />
            <View style={{width: '100%', height: 52, backgroundColor: '#2640e8'}}/>
            <FloatingButton style={{position: 'relative', backgroundColor: '#ffaf1d', marginLeft: 20, marginTop: -30}}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: 'white',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    elevation: 3,
                }}>
                    <CircularProgress size={28} thickness={4} bgColor='#f1f1f1' progressColor='gray'/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default ProgressStyle3;