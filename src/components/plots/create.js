import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { insertPlot, listAllOwners, listAllTypePlots, listPlots } from "../../actions/plots/plots";

const Create = () => {

    const dispatch = useDispatch();
    const { allTypePlots } = useSelector((state) => state.allTypePlots);
    const { allOwners } = useSelector((state) => state.allOwners);
    const [dataUserValue, setdataUserValue] = useState({ catastral_id: "", plost_type: 0, addres_name: "", realtor_name: "", owner_data: 0 })
    const { catastral_id, addres_name, realtor_name, plost_type, owner_data } = dataUserValue;
    const { plots } = useSelector((state) => state.plots);

    const listOwner = () => {
        dispatch(listAllOwners());
    }
    const listAllPlotsType = () => {
        dispatch(listAllTypePlots());
    }
    const setDataPlots = ({ target }) => {
        setdataUserValue({
            ...dataUserValue,
            [target.name]: target.value,
        });
    }
    const insert = () => {
        dispatch(insertPlot(dataUserValue));
        setTimeout(dispatch(listPlots()), 5000);
        setdataUserValue({ catastral_id: "", plost_type: 0, addres_name: "", realtor_name: "", owner_data: 0 });
    }

    useEffect(() => {
        listOwner();
        listAllPlotsType();
    }, [])

    return (
        <div>
            <h3>Insert</h3>
            <form>
                <div className="form-group">
                    <label for="examplecatastralID">Catastral ID</label>
                    <input type="text" className="form-control" name="catastral_id" onChange={setDataPlots} value={catastral_id} />
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
                <button type="button" className="btn btn-primary mt-2" onClick={insert}>Submit</button>
            </form>
        </div>
    )
}

export default Create;