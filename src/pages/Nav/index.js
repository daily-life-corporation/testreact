import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import "./index.css"
export default function Nav() {
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem("sessionLogin")){
            history.push("/login");
        }
    },[]);
    return  <nav class="navbar navbar-inverse navbar-expand-lg bg-dark" role="navigation-demo">
    <div class="container">
        <div class="navbar-translate">
            <a class="navbar-brand">Navbar with notification</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                   
                        <Link to="/home"class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/users" class="nav-link">Users</Link>
                </li>
                <li class="nav-item">
                    <Link to="/login" class="nav-link">logout</Link>
                </li>
                
                <li class="nav-item">
                    <a href="#pablo" class="btn btn-rose btn-raised btn-fab btn-round" data-toggle="dropdown">
                        <i class="material-icons">email</i>
                    <div class="ripple-container"></div></a>
                </li>
                
                <li class="nav-item">
                    <a href="#pablo" class="profile-photo nav-link">
                        <div class="profile-photo-small">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75LwIaPGKtOYPH16Ny7TzCDQPgMmUQOuMZMSIGrLmuFd9_Xho" alt="Circle Image" class="rounded-circle img-fluid"/>
                        </div>
                    <div class="ripple-container"></div></a>
                   
                </li>
            </ul>
        </div>
    </div>
</nav>

}

