import React from 'react';
import DashboardStyle1 from "../screens/dashboard/DashboardStyle1";
import DashboardStyle2 from "../screens/dashboard/DashboardStyle2";
import DashboardStyle3 from "../screens/dashboard/DashboardStyle3";
import DashboardStyle4 from "../screens/dashboard/DashboardStyle4";
import DashboardStyle5 from "../screens/dashboard/DashboardStyle5";

function NavigationDashboard ({pageState}) {

    return (
        <>
            {pageState === 'dashboard1' && <DashboardStyle1/>}
            {pageState === 'dashboard2' && <DashboardStyle2/>}
            {pageState === 'dashboard3' && <DashboardStyle3/>}
            {pageState === 'dashboard4' && <DashboardStyle4/>}
            {pageState === 'dashboard5' && <DashboardStyle5/>}
        </>
    );
}

export default NavigationDashboard;