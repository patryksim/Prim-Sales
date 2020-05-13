import React from 'react';
import ProgressStyle1 from "../screens/progress/ProgressStyle1";
import ProgressStyle2 from "../screens/progress/ProgressStyle2";
import ProgressStyle3 from "../screens/progress/ProgressStyle3";
import ProgressStyle4 from "../screens/progress/ProgressStyle4";
import ProgressStyle5 from "../screens/progress/ProgressStyle5";
import ProgressStyle6 from "../screens/progress/ProgressStyle6";
import ProgressStyle7 from "../screens/progress/ProgressStyle7";
import ProgressStyle8 from "../screens/progress/ProgressStyle8";
import ProgressStyle9 from "../screens/progress/ProgressStyle9";
import ProgressStyle10 from "../screens/progress/ProgressStyle10";
import ProgressStyle11 from "../screens/progress/ProgressStyle11";
import ProgressStyle12 from "../screens/progress/ProgressStyle12";
import ProgressStyle13 from "../screens/progress/ProgressStyle13";
import ProgressStyle14 from "../screens/progress/ProgressStyle14";
import ProgressStyle15 from "../screens/progress/ProgressStyle15";

function NavigationProgress ({pageState}) {

    return (
        <>
            {pageState === 'progress1' && <ProgressStyle1/>}
            {pageState === 'progress2' && <ProgressStyle2/>}
            {pageState === 'progress3' && <ProgressStyle3/>}
            {pageState === 'progress4' && <ProgressStyle4/>}
            {pageState === 'progress5' && <ProgressStyle5/>}
            {pageState === 'progress6' && <ProgressStyle6/>}
            {pageState === 'progress7' && <ProgressStyle7/>}
            {pageState === 'progress8' && <ProgressStyle8/>}
            {pageState === 'progress9' && <ProgressStyle9/>}
            {pageState === 'progress10' && <ProgressStyle10/>}
            {pageState === 'progress11' && <ProgressStyle11/>}
            {pageState === 'progress12' && <ProgressStyle12/>}
            {pageState === 'progress13' && <ProgressStyle13/>}
            {pageState === 'progress14' && <ProgressStyle14/>}
            {pageState === 'progress15' && <ProgressStyle15/>}
        </>
    );
}

export default NavigationProgress;