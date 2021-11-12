import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { listOwners } from '../../actions/owners/owners';
import { listPlots } from '../../actions/plots/plots';

const Home = () => {

    const dispatch = useDispatch();
    const History = useHistory();
    const handleRedirect = (route) => { History.push(route) }
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(listPlots());
            handleRedirect("/listPlots")
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center" style={{ marginTop: `20%` }}>
                    <div className="card" style={{ width: `28rem`, textAlign: `center` }}>
                        <div className="card-body">
                            <h1 className="card-title">PLOTS OWNERS</h1>
                            <h2 className="card-subtitle mb-2 text-muted">Card subtitle</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;