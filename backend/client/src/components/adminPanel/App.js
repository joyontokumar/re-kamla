import React from 'react';
import Aux from '../adminPanel/hoc/_Aux'
// import Menu from '../adminPanel/Menu/Menu'
import Menu from '../adminPanel/dashboard/Menu/Menu'
import "./style.css"
const App = (props) => (
    <Aux>
        <Menu />
        {props.children}
    </Aux>
);

export default App;