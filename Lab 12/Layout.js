import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout(){
    return (
        <>
            <nav class="navbar bg-primary navbar-expand-lg">
            <div class="container-fluid">
            <Link class="navbar-brand">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/Home'>Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/About'>About</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/Services'>Services</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/Contact'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <br/>
        
        <Outlet/>
        
        </>
    );
}

export default Layout;
