import React from 'react';
import LoginStyle1 from "../screens/login/LoginStyle1";
import LoginStyle2 from "../screens/login/LoginStyle2";
import LoginStyle3 from "../screens/login/LoginStyle3";
import LoginStyle4 from "../screens/login/LoginStyle4";
import LoginStyle5 from "../screens/login/LoginStyle5";
import LoginStyle6 from "../screens/login/LoginStyle6";
import LoginStyle7 from "../screens/login/LoginStyle7";
import LoginStyle8 from "../screens/login/LoginStyle8";
import LoginStyle9 from "../screens/login/LoginStyle9";
import LoginStyle10 from "../screens/login/LoginStyle10";
import LoginStyle11 from "../screens/login/LoginStyle11";
import LoginStyle12 from "../screens/login/LoginStyle12";
import LoginStyle13 from "../screens/login/LoginStyle13";
import LoginStyle14 from "../screens/login/LoginStyle14";
import LoginStyle15 from "../screens/login/LoginStyle15";
import LoginStyle16 from "../screens/login/LoginStyle16";
import LoginStyle17 from "../screens/login/LoginStyle17";
import LoginStyle18 from "../screens/login/LoginStyle18";
import LoginStyle19 from "../screens/login/LoginStyle19";
import LoginStyle20 from "../screens/login/LoginStyle20";
import LoginStyle21 from "../screens/login/LoginStyle21";
import LoginStyle22 from "../screens/login/LoginStyle22";
import LoginStyle23 from "../screens/login/LoginStyle23";
import LoginStyle24 from "../screens/login/LoginStyle24";
import LoginStyle25 from "../screens/login/LoginStyle25";

function NavigationLogin ({pageState}) {

    return (
        <>
            {pageState === 'login1' && <LoginStyle1/>}
            {pageState === 'login2' && <LoginStyle2/>}
            {pageState === 'login3' && <LoginStyle3/>}
            {pageState === 'login4' && <LoginStyle4/>}
            {pageState === 'login5' && <LoginStyle5/>}
            {pageState === 'login6' && <LoginStyle6/>}
            {pageState === 'login7' && <LoginStyle7/>}
            {pageState === 'login8' && <LoginStyle8/>}
            {pageState === 'login9' && <LoginStyle9/>}
            {pageState === 'login10' && <LoginStyle10/>}
            {pageState === 'login11' && <LoginStyle11/>}
            {pageState === 'login12' && <LoginStyle12/>}
            {pageState === 'login13' && <LoginStyle13/>}
            {pageState === 'login14' && <LoginStyle14/>}
            {pageState === 'login15' && <LoginStyle15/>}
            {pageState === 'login16' && <LoginStyle16/>}
            {pageState === 'login17' && <LoginStyle17/>}
            {pageState === 'login18' && <LoginStyle18/>}
            {pageState === 'login19' && <LoginStyle19/>}
            {pageState === 'login20' && <LoginStyle20/>}
            {pageState === 'login21' && <LoginStyle21/>}
            {pageState === 'login22' && <LoginStyle22/>}
            {pageState === 'login23' && <LoginStyle23/>}
            {pageState === 'login24' && <LoginStyle24/>}
            {pageState === 'login25' && <LoginStyle25/>}
        </>
    );
}

export default NavigationLogin;