import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePlots, detailForOwner, getIdPlot, listPlots } from "../../actions/plots/plots";
import Header from "../header/header";
import Create from "./create";
import Update from "./update";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPenAlt, faPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../plots/css/style.css'
import Details from "./details";

const SelectPlots = () => {
    const dispatch = useDispatch();
    const { plots } = useSelector((state) => state.plots);
    const [butt, setbutt] = useState('block');
    const [createForm, setcreateForm] = useState('none');
    const [updateForm, setupdateForm] = useState('none');
    const [detailsForm, setdetailsForm] = useState('none');

    const listPlot = () => {
        dispatch(listPlots());
    }

    const getId = (e) => {
        editForm();
        dispatch(getIdPlot(e));
    }

    const deletePlot = (e) => {
        let obj = {
            "id": e
        }
        dispatch(deletePlots(obj));
        setTimeout(listPlot(), 5000);
    }

    const detailsPlotForm = (id) => {
        console.log("plots.data[id]: ", plots.data[id])
        dispatch(detailForOwner(plots.data[id]))
        setcreateForm('none')
        setbutt('block')
        setupdateForm('none')
        setdetailsForm('block')
    }

    const insertForm = () => {
        setcreateForm('block')
        setbutt('none')
        setupdateForm('none')
        setdetailsForm('none')
    }

    const editForm = () => {
        setcreateForm('none')
        setbutt('block')
        setupdateForm('block')
        setdetailsForm('none')
    }

    return (
        <div className="container-fluid">
            <Header />
            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="table-responsive">
                        {plots.data === undefined || plots.data.length === 0 ?
                            <div className="messagge">
                                <h1>No hay datos disponibles en el momento</h1>
                                <p>Si desea agregar un nuevo predio, por favor haga click en el boton azul que tiene
                                    al lado derecho de esta pantalla.
                                </p>
                            </div>
                            : <table id="" className="table table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Catastral ID</th>
                                        <th scope="col">Address Name</th>
                                        <th scope="col">Realtor Name</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Name Owner</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plots.data.map((elemnt, index) => {
                                        return (
                                            <tr key={index}>
                                                <td value={elemnt.catastral_id}>
                                                    {elemnt.catastral_id}
                                                </td>
                                                <td value={elemnt.addres_name}>
                                                    {elemnt.addres_name}
                                                </td>
                                                <td value={elemnt.realtor_name}>
                                                    {elemnt.realtor_name}
                                                </td>
                                                <td value={elemnt.name}>
                                                    {elemnt.name}
                                                </td>
                                                <td value={elemnt.name_owner}>
                                                    {elemnt.name_owner}
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => detailsPlotForm(index)}><FontAwesomeIcon icon={faEye} /></button>
                                                    <button className="btn btn-warning" onClick={() => getId(elemnt.id)}><FontAwesomeIcon icon={faPenAlt} /></button>
                                                    <button className="btn btn-danger" onClick={() => deletePlot(elemnt.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
                <div className="col-md-4 mt-1">
                    <div className="col-md-12" style={{ display: butt }}>
                        <button className="btn btn-primary col-md-12" onClick={insertForm}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className="col-md-12" style={{ display: updateForm }}>
                        <Update />
                    </div>
                    <div className="col-md-12" style={{ display: createForm }}>
                        <Create />
                    </div>
                    <div className="col-md-12" style={{ display: detailsForm }}>
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPlots;
