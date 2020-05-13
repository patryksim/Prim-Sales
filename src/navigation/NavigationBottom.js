import React from 'react';
import BottomStyle1 from '../screens/bottomnavigation/BottomStyle1';
import BottomStyle2 from '../screens/bottomnavigation/BottomStyle2';
import BottomStyle3 from '../screens/bottomnavigation/BottomStyle3';
import BottomStyle4 from '../screens/bottomnavigation/BottomStyle4';
import BottomStyle5 from '../screens/bottomnavigation/BottomStyle5';
import BottomStyle11 from '../screens/bottomnavigation/BottomStyle11';
import BottomStyle12 from '../screens/bottomnavigation/BottomStyle12';
import BottomStyle13 from '../screens/bottomnavigation/BottomStyle13';
import BottomStyle6 from '../screens/bottomnavigation/BottomStyle6';
import BottomStyle7 from '../screens/bottomnavigation/BottomStyle7';
import BottomStyle8 from '../screens/bottomnavigation/BottomStyle8';
import BottomStyle9 from '../screens/bottomnavigation/BottomStyle9';
import BottomStyle10 from '../screens/bottomnavigation/BottomStyle10';
import BottomStyle14 from '../screens/bottomnavigation/BottomStyle14';
import BottomStyle15 from '../screens/bottomnavigation/BottomStyle15';

function NavigationBottomNavigation({pageState}) {

    return (
        <>
            {pageState === 'bottom1' && <BottomStyle1/>}
            {pageState === 'bottom2' && <BottomStyle2/>}
            {pageState === 'bottom3' && <BottomStyle3/>}
            {pageState === 'bottom4' && <BottomStyle4/>}
            {pageState === 'bottom5' && <BottomStyle5/>}
            {pageState === 'bottom6' && <BottomStyle6/>}
            {pageState === 'bottom7' && <BottomStyle7/>}
            {pageState === 'bottom8' && <BottomStyle8/>}
            {pageState === 'bottom9' && <BottomStyle9/>}
            {pageState === 'bottom10' && <BottomStyle10/>}
            {pageState === 'bottom11' && <BottomStyle11/>}
            {pageState === 'bottom12' && <BottomStyle12/>}
            {pageState === 'bottom13' && <BottomStyle13/>}
            {pageState === 'bottom14' && <BottomStyle14/>}
            {pageState === 'bottom15' && <BottomStyle15/>}
        </>
    );
}

export default NavigationBottomNavigation;
