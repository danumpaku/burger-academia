import React, { Fragment } from 'react';

const Layout = (props: {children: React.ReactNode}) => 
    <Fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Fragment>
;

export default Layout;