import React from 'react';
import MusicStyle1 from "../screens/music/MusicStyle1";
import MusicStyle2 from "../screens/music/MusicStyle2";
import MusicStyle3 from "../screens/music/MusicStyle3";
import MusicStyle4 from "../screens/music/MusicStyle4";
import MusicStyle5 from "../screens/music/MusicStyle5";
import MusicStyle6 from "../screens/music/MusicStyle6";
import MusicStyle7 from "../screens/music/MusicStyle7";
import MusicStyle8 from "../screens/music/MusicStyle8";
import MusicStyle9 from "../screens/music/MusicStyle9";
import MusicStyle10 from "../screens/music/MusicStyle10";
import MusicStyle11 from "../screens/music/MusicStyle11";
import MusicStyle12 from "../screens/music/MusicStyle12";
import MusicStyle13 from "../screens/music/MusicStyle13";
import MusicStyle14 from "../screens/music/MusicStyle14";

function NavigationMusic ({pageState}) {

    return (
        <>
            {pageState === 'music1' && <MusicStyle1/>}
            {pageState === 'music2' && <MusicStyle2/>}
            {pageState === 'music3' && <MusicStyle3/>}
            {pageState === 'music4' && <MusicStyle4/>}
            {pageState === 'music5' && <MusicStyle5/>}
            {pageState === 'music6' && <MusicStyle6/>}
            {pageState === 'music7' && <MusicStyle7/>}
            {pageState === 'music8' && <MusicStyle8/>}
            {pageState === 'music9' && <MusicStyle9/>}
            {pageState === 'music10' && <MusicStyle10/>}
            {pageState === 'music11' && <MusicStyle11/>}
            {pageState === 'music12' && <MusicStyle12/>}
            {pageState === 'music13' && <MusicStyle13/>}
            {pageState === 'music14' && <MusicStyle14/>}
        </>
    );
}

export default NavigationMusic;