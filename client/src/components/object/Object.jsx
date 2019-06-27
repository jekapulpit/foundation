import React from "react"
import {Link} from "react-router-dom";

const Object = props => {
    return (
        <div className="object">
            <Link className='object-link' to={"/scp_objects/" + props.object.number} >
                {`SCP-${props.object.number} - ${props.object.name}`}
            </Link>
        </div>
    )
};

export default Object
