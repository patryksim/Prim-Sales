import React from 'react';
import MenuStyle1 from "../screens/menu/MenuStyle1";
import MenuStyle2 from "../screens/menu/MenuStyle2";
import MenuStyle3 from "../screens/menu/MenuStyle3";
import MenuStyle4 from "../screens/menu/MenuStyle4";
import MenuStyle5 from "../screens/menu/MenuStyle5";
import MenuStyle6 from "../screens/menu/MenuStyle6";
import MenuStyle7 from "../screens/menu/MenuStyle7";
import MenuStyle8 from "../screens/menu/MenuStyle8";
import MenuStyle9 from "../screens/menu/MenuStyle9";
import MenuStyle10 from "../screens/menu/MenuStyle10";
import MenuStyle11 from "../screens/menu/MenuStyle11";
import MenuStyle12 from "../screens/menu/MenuStyle12";
import MenuStyle13 from "../screens/menu/MenuStyle13";
import MenuStyle14 from "../screens/menu/MenuStyle14";
import MenuStyle15 from "../screens/menu/MenuStyle15";
import MenuStyle16 from "../screens/menu/MenuStyle16";
import MenuStyle17 from "../screens/menu/MenuStyle17";
import MenuStyle18 from "../screens/menu/MenuStyle18";
import MenuStyle19 from "../screens/menu/MenuStyle19";
import MenuStyle20 from "../screens/menu/MenuStyle20";

function NavigationMenu ({pageState}) {

    return (
        <>
            {pageState === 'menu1' && <MenuStyle1/>}
            {pageState === 'menu2' && <MenuStyle2/>}
            {pageState === 'menu3' && <MenuStyle3/>}
            {pageState === 'menu4' && <MenuStyle4/>}
            {pageState === 'menu5' && <MenuStyle5/>}
            {pageState === 'menu6' && <MenuStyle6/>}
            {pageState === 'menu7' && <MenuStyle7/>}
            {pageState === 'menu8' && <MenuStyle8/>}
            {pageState === 'menu9' && <MenuStyle9/>}
            {pageState === 'menu10' && <MenuStyle10/>}
            {pageState === 'menu11' && <MenuStyle11/>}
            {pageState === 'menu12' && <MenuStyle12/>}
            {pageState === 'menu13' && <MenuStyle13/>}
            {pageState === 'menu14' && <MenuStyle14/>}
            {pageState === 'menu15' && <MenuStyle15/>}
            {pageState === 'menu16' && <MenuStyle16/>}
            {pageState === 'menu17' && <MenuStyle17/>}
            {pageState === 'menu18' && <MenuStyle18/>}
            {pageState === 'menu19' && <MenuStyle19/>}
            {pageState === 'menu20' && <MenuStyle20/>}
        </>
    );
}

export default NavigationMenu;