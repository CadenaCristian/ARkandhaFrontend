import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
    const { plots, detailsplot } = useSelector((state) => state.plots);
    return (
        <div>
            <h3>Details</h3>
            <form>
                <div className="form-group">
                    <label for="examplecatastralID">Catastral ID</label>
                    <input type="text" className="form-control" name="catastral_id" value={detailsplot.catastral_id} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleAddressname">Address name</label>
                    <input type="text" className="form-control" name="addres_name" value={detailsplot.addres_name} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Realtor name</label>
                    <input type="text" className="form-control" name="realtor_name" value={detailsplot.realtor_name} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Plots type</label>
                    <input type="text" className="form-control" name="plost_type" value={detailsplot.name} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Owner Name</label>
                    <input type="text" className="form-control" name="name_owner" value={detailsplot.name_owner} disabled />
                </div>
                <div className="form-group">
                    <label for="exampleRealtorname">Owner Identification</label>
                    <input type="text" className="form-control" name="name_owner" value={detailsplot.identification} disabled />
                </div>
            </form>
        </div>)
}

export default Details;