import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

export const Update = () => {
    const { plots, idplot, allOwners, allTypePlots } = useSelector((state) => state.plots);
    const [pru, setpru] = useState()
    const [dataUserValue, setdataUserValue] = useState({ catastral_id: "", plost_type: 0, addres_name: "", realtor_name: "", owner_data: 0 })
    const { catastral_id, addres_name, realtor_name, plost_type, owner_data } = dataUserValue;

    const setDataPlots = ({ target }) => {
        setdataUserValue({
            ...dataUserValue,
            [target.name]: target.value,
        });
    }

    const assingData = () => {
        setpru({
            ...pru,
            [pru]: idplot
        })
    }
    console.log("Aca esta actualizado la prueba: ", pru);
    useEffect(() => {
        assingData();
    }, [idplot])

    const update = () => {
        console.log("idplot: ", idplot);
        console.log("plots: ", plots);
    }


    return (
        <div>
            <h3>Update</h3>
            <form>
                <div className="form-group">
                    <label for="examplecatastralID">Catastral ID</label>
                    <input type="text" className="form-control" name="catastral_id" onChange={setDataPlots} value={catastral_id} />
                    <small id="catastral" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleAddressname">Address name</label>
                    <input type="text" className="form-control" name="addres_name" onChange={setDataPlots} value={addres_name} />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Realtor name</label>
                    <input type="text" className="form-control" name="realtor_name" onChange={setDataPlots} value={realtor_name} />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Plot Type</label>
                    <select className="form-control form-control-lg" name="plost_type" onChange={setDataPlots}>
                        <option value="0">Choose an option</option >
                        {allTypePlots.data === undefined ?
                            <option>Type plots is empty</option>
                            : allTypePlots.data.map((elemnt, index) => {
                                return (
                                    <option key={index} value={elemnt.id} >{elemnt.name}</option>
                                )
                            })}
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Name Owner</label>
                    <select className="form-control form-control-lg" name="owner_data" onChange={setDataPlots}>
                        <option value="0">Choose an option</option >
                        {allOwners.data === undefined ?
                            <option>Name owner list is empty</option>
                            : allOwners.data.map((elemnt, index) => {
                                return (
                                    <option key={index} value={elemnt.id} >{elemnt.name_owner}</option>
                                )
                            })}
                    </select>
                </div>
                <button type="button" className="btn btn-primary mt-2" onClick={update}>Submit</button>
            </form>
        </div>)
}

export default Update;