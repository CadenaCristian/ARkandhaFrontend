import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { listOwners } from '../../actions/owners/owners';

const Header = () => {
    const dispatch = useDispatch();
    const History = useHistory();
    const handleRedirect = (route) => { History.push(route) }

    const showPlots = () => {
        handleRedirect("/listPlots")
    }
    const showOwners = () => {
        dispatch(listOwners());
        handleRedirect("/listOwners")
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Plots owners</a>
                <button className="btn btn-primary col-md-2" onClick={showPlots}>Plots</button>
                <button className="btn btn-primary col-md-2 offset-1" onClick={showOwners}>Owners</button>
            </nav>
        </div>
    );
};

export default Header;