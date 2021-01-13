import React from 'react';
import './Navbar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand">HOREK-ROKOM</h2>

                    <div className="nav-first-icon-div">
                        <AddShoppingCartIcon className="icon-color nav-first-icon" />
                        <FavoriteBorderIcon className="icon-color nav-first-icon" />
                        <PermIdentityIcon className="icon-color nav-first-icon" />
                    </div>


                    <div className="justify-content-end  navbar-collapse" id="navbarNavDropdown">

                        <div className="input-group">
                            <input type="text" className="form-control search-input" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text search-icon" id="basic-addon2"><SearchIcon /></span>
                        </div>

                        <ul className="navbar-nav nav-second-icon-div">

                            <li className="icon-color nav-item">
                                <AddShoppingCartIcon />
                            </li>
                            <li className="icon-color nav-item">
                                <FavoriteBorderIcon />
                            </li>
                            <li className="icon-color nav-item">
                                <PermIdentityIcon />
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar bottom  */}

            <nav className="navbar-bottom navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand"><Sidebar/></h2>
                    
                    <div className="justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">All Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gift Card</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gift Card</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Campaigns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Campaigns</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        
                        <h5><MailOutlineIcon className="icon-color"/> support@evaly.com.bd</h5>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;