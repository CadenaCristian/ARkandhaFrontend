import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { listAllOwners } from "../../actions/plots/plots";
import { insertOwner } from "../../actions/owners/owners";

const Create = () => {
    const dispatch = useDispatch();
    const { typeowners, insertowner } = useSelector((state) => state.typeowners);
    const [dataOwnerValue, setdataOwnerValue] = useState({ type_owner: 0, identification: "", name_owner: "" })
    const { type_owner, identification, name_owner } = dataOwnerValue;

    const listOwner = () => {
        dispatch(listAllOwners());
    }

    const setDataOwner = ({ target }) => {
        setdataOwnerValue({
            ...dataOwnerValue,
            [target.name]: target.value,
        });
    }
    const insert = () => {
        dispatch(insertOwner(dataOwnerValue));
        setTimeout(listOwner(), 5000);
        setdataOwnerValue({ type_owner: 0, identification: "", name_owner: "" });
    }

    return (
        <div>
            <h3>Insert</h3>
            <form>
                <div className="form-group">
                    <label for="examplecatastralID">Identification</label>
                    <input type="text" className="form-control" name="identification" onChange={setDataOwner} value={identification} />
                </div>
                <div className="form-group">
                    <label for="exampleAddressname">Name owner</label>
                    <input type="text" className="form-control" name="name_owner" onChange={setDataOwner} value={name_owner} />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Owner Type</label>
                    <select className="form-control form-control-lg" name="type_owner" onChange={setDataOwner}>
                        <option>Choose an option</option >
                        {typeowners.data === undefined ?
                            (<option>Owner is empty</option>)
                            : typeowners.data.map((elemnt, index) => {
                                return (
                                    <option key={index} value={typeowners.data[index].id} >{elemnt.name}</option>
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