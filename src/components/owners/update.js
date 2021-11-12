import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOwner } from "../../actions/owners/owners";
import { listAllOwners } from "../../actions/plots/plots";

const Update = () => {
    const dispatch = useDispatch()
    const { typeowners, detailsowner } = useSelector((state) => state.owners);
    const [upddataOwnerValue, setupdDataOwnerValue] = useState({})
    const setDataOwner = ({ target }) => {
        setupdDataOwnerValue({
            ...upddataOwnerValue,
            [target.name]: target.value
        });
    }
    const listOwner = () => {
        dispatch(listAllOwners());
    }

    const update = () => {
        console.log("upddataOwnerValue: ", upddataOwnerValue)
        dispatch(updateOwner(upddataOwnerValue))
        listOwner()
    }
    useEffect(() => {
        setupdDataOwnerValue(detailsowner)
    }, [detailsowner])

    return (
        <div>
            <h3>Update</h3>
            <form>
                <div className="form-group">
                    <label for="examplecatastralID">Identification</label>
                    <input type="text" className="form-control" name="identification" onChange={setDataOwner} value={upddataOwnerValue.identification} />
                </div>
                <div className="form-group">
                    <label for="exampleAddressname">Name owner</label>
                    <input type="text" className="form-control" name="name_owner" onChange={setDataOwner} value={upddataOwnerValue.name_owner} />
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
                <button type="button" className="btn btn-warning mt-2" onClick={update}>Update</button>
            </form>
        </div>
    )
}

export default Update;