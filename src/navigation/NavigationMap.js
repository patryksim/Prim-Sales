import React from 'react';
import MapStyle1 from "../screens/map/MapStyle1";
import MapStyle2 from "../screens/map/MapStyle2";
import MapStyle3 from "../screens/map/MapStyle3";
import MapStyle4 from "../screens/map/MapStyle4";
import MapStyle5 from "../screens/map/MapStyle5";
import MapStyle6 from "../screens/map/MapStyle6";
import MapStyle7 from "../screens/map/MapStyle7";
import MapStyle8 from "../screens/map/MapStyle8";
import MapStyle9 from "../screens/map/MapStyle9";
import MapStyle10 from "../screens/map/MapStyle10";

function NavigationMap ({pageState}) {

    return (
        <>
            {pageState === 'map1' && <MapStyle1/>}
            {pageState === 'map2' && <MapStyle2/>}
            {pageState === 'map3' && <MapStyle3/>}
            {pageState === 'map4' && <MapStyle4/>}
            {pageState === 'map5' && <MapStyle5/>}
            {pageState === 'map6' && <MapStyle6/>}
            {pageState === 'map7' && <MapStyle7/>}
            {pageState === 'map8' && <MapStyle8/>}
            {pageState === 'map9' && <MapStyle9/>}
            {pageState === 'map10' && <MapStyle10/>}
        </>
    );
}

export default NavigationMap;