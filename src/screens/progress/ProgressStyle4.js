import React, {useContext, useEffect, useRef, useState} from 'react';
import {View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import FloatingButton from "../../components/FloatingButton";

function ProgressStyle4 () {
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
                bgColor='#ffaf1d'
            />
            <View style={{width: '100%', height: 52, backgroundColor: '#ffaf1d'}}/>
            <FloatingButton style={{position: 'relative', backgroundColor: '#0dbcff', marginLeft: 20, marginTop: -30}}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <DotProgress/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function DotProgress() {
    const [item, setItem] = useState(1);

    const tick = () => {
        let nextItem = item === 3 ? 1 : (item + 1);
        setItem(nextItem);
    };

    useEffect(() => {
        const interval = setInterval(tick, 500);
        return () => {
            clearInterval(interval)
        }
    }, [item]);

    return (
        <View style={{width: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
            <DotItem isActive={item === 1}/>
            <DotItem isActive={item === 2}/>
            <DotItem isActive={item === 3}/>
        </View>
    );
}

function DotItem({isActive}) {
    return (
        <View style={{width: isActive ? 10 : 6, height: isActive ? 10 : 6, borderRadius: isActive ? 5 : 3, backgroundColor: '#fe4fad'}}/>
    );
}

export default ProgressStyle4;