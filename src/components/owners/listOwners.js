import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteOwner, detailForOwner, listOwners, listTypeOwner } from "../../actions/owners/owners";
import Header from "../header/header";
import Create from "./create";
import Update from "./update";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPenAlt, faPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from "./details";

const SelectOwners = () => {
  const dispatch = useDispatch();
  const { owners, typeowners, detailsowner } = useSelector((state) => state.owners);
  const [butt, setbutt] = useState('block');
  const [createForm, setcreateForm] = useState('none');
  const [updateForm, setupdateForm] = useState('none');
  const [detailForm, setdetailForm] = useState('none');

  const listOwner = () => {
    dispatch(listOwners());
  }

  const details = (id) => {
    dispatch(detailForOwner(owners.data[id]))
    setcreateForm('none')
    setbutt('block')
    setupdateForm('none')
    setdetailForm('block')
  }

  const deleteOwn = (e) => {
    let obj = {
      "id": e
    }
    dispatch(deleteOwner(obj))
    listOwner()
  }
  const insertForm = () => {
    setcreateForm('block')
    setbutt('none')
    setupdateForm('none')
    setdetailForm('none')
  }

  const editForm = (id) => {
    dispatch(detailForOwner(owners.data[id]))
    setcreateForm('none')
    setbutt('block')
    setupdateForm('block')
    setdetailForm('none')
  }

  useEffect(() => {
    dispatch(listTypeOwner())
  }, [])

  useEffect(() => {
    dispatch(listTypeOwner())
  }, [])

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <div className="table-responsive">
            <table id="" className="table text-center">
              <thead>
                <tr>
                  <th scope="col">Identification</th>
                  <th scope="col">Name Owner</th>
                  <th scope="col">Type Owner</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {owners.data === undefined ?
                  <tr><td>No hay datos disponibles en el momento</td></tr>
                  : owners.data.map((elemnt, index) => {
                    return (
                      <tr key={index}>
                        <td value={owners.data[index].identification}>
                          {owners.data[index].identification}
                        </td>
                        <td value={owners.data[index].name_owner}>
                          {owners.data[index].name_owner}
                        </td>
                        <td value={owners.data[index].name}>
                          {owners.data[index].name}
                        </td>
                        <td>
                          <button className="btn btn-primary" onClick={() => details(index)}><FontAwesomeIcon icon={faEye} /></button>
                          <button className="btn btn-warning" onClick={() => editForm(index)}><FontAwesomeIcon icon={faPenAlt} /></button>
                          <button className="btn btn-danger" onClick={() => deleteOwn(elemnt.identification)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12" style={{ display: butt }}>
            <button className="btn btn-primary col-md-12" onClick={insertForm}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
          <div className="col-md-12" style={{ display: updateForm }}>
            <Update />
          </div>
          <div className="col-md-12" style={{ display: createForm }}>
            <Create />
          </div>
          <div className="col-md-12" style={{ display: detailForm }}>
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectOwners;
