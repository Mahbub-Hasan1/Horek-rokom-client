import React from 'react';
import './Navbar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar-top navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand">HOREK-ROKOM</h2>

                    <div className="nav-first-icon-div">
                        <AddShoppingCartIcon className="icon-color nav-first-icon" />
                        <FavoriteBorderIcon className="icon-color nav-first-icon" />
                        <PermIdentityIcon className="icon-color nav-first-icon" />
                    </div>


                    <div className="justify-content-end  navbar-collapse" id="navbarNavDropdown">

                        <div className="input-group">
                            <h2 className="sidebar-icon icon-color"><Sidebar /></h2>
                            <input type="text" className="form-control search-input" placeholder="Search for..." aria-label="Search for..." aria-describedby="basic-addon2" />
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

            <nav className="navbar-bottom navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <h2 className="sidebar-icon-bottom icon-color"><Sidebar /></h2>

                    <div className="justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">All Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Gift Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Gift Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Campaigns</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Campaigns</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <h5><MailOutlineIcon className="icon-color" /> support@evaly.com.bd</h5>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;