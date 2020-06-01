import React from 'react';
import CustomersList from "../screens/prim/CustomersList";
import OrdersList from "../screens/prim/OrdersList";


function NavigationPrim ({pageState}) {

    return (
        <>
            {pageState === 'customerslist' && <CustomersList/>}
            {pageState === 'orderslist' && <OrdersList/>}
        </>
    );
}

export default NavigationPrim;