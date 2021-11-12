import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
    const { owners, detailsowner } = useSelector((state) => state.owners);

    return (
        <div>
            <h3>Details</h3>
            <form>
                <div className="form-group">
                    <label for="examplecatastralID">Identification</label>
                    <input type="text" className="form-control" name="identification" value={detailsowner.identification} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleAddressname">Name owner</label>
                    <input type="text" className="form-control" name="name_owner" value={detailsowner.name_owner} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleAddressname">Type owner</label>
                    <input type="text" className="form-control" name="name_owner" value={detailsowner.name} disabled />
                </div>
            </form>
        </div>
    )
}

export default Details;