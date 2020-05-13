import React from 'react';
import ChipsStyle1 from '../screens/chips/ChipsStyle1';
import ChipsStyle2 from '../screens/chips/ChipsStyle2';
import ChipsStyle3 from '../screens/chips/ChipsStyle3';
import ChipsStyle4 from '../screens/chips/ChipsStyle4';
import ChipsStyle5 from '../screens/chips/ChipsStyle5';
import ChipsStyle6 from '../screens/chips/ChipsStyle6';
import ChipsStyle7 from '../screens/chips/ChipsStyle7';
import ChipsStyle8 from '../screens/chips/ChipsStyle8';
import ChipsStyle9 from '../screens/chips/ChipsStyle9';
import ChipsStyle10 from '../screens/chips/ChipsStyle10';
import ChipsStyle11 from '../screens/chips/ChipsStyle11';
import ChipsStyle12 from '../screens/chips/ChipsStyle12';
import ChipsStyle13 from '../screens/chips/ChipsStyle13';
import ChipsStyle14 from '../screens/chips/ChipsStyle14';
import ChipsStyle15 from '../screens/chips/ChipsStyle15';

function NavigationChipsNavigation({pageState}) {

    return (
        <>
            {pageState === 'chips1' && <ChipsStyle1/>}
            {pageState === 'chips2' && <ChipsStyle2/>}
            {pageState === 'chips3' && <ChipsStyle3/>}
            {pageState === 'chips4' && <ChipsStyle4/>}
            {pageState === 'chips5' && <ChipsStyle5/>}
            {pageState === 'chips6' && <ChipsStyle6/>}
            {pageState === 'chips7' && <ChipsStyle7/>}
            {pageState === 'chips8' && <ChipsStyle8/>}
            {pageState === 'chips9' && <ChipsStyle9/>}
            {pageState === 'chips10' && <ChipsStyle10/>}
            {pageState === 'chips11' && <ChipsStyle11/>}
            {pageState === 'chips12' && <ChipsStyle12/>}
            {pageState === 'chips13' && <ChipsStyle13/>}
            {pageState === 'chips14' && <ChipsStyle14/>}
            {pageState === 'chips15' && <ChipsStyle15/>}
        </>
    );
}

export default NavigationChipsNavigation;
