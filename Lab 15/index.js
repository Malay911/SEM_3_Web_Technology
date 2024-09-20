import React from 'react';
import ReactDOM from 'react-dom/client';
import Displaystudents from './Components/students';
import Displayproducts from './Components/products';
import Displayfaculties from './Components/faculties';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Displaystudents/><br/>
        <Displayproducts/><br/>
        <Displayfaculties/>
    </>
);
