import React from "react"
import { authentificateUser } from "../../services/authentificationService";
import { mapFieldsToValues } from "../../services/mapFieldsToValuesService";

const Login = props => {
    let userCredentials = {};
    return (
         <div className="object-list">
              <input ref={input => userCredentials.email = input} type="text" placeholder="your email" />
              <input ref={input => userCredentials.password = input} type="password" placeholder="your password" />
              <button onClick={() => authentificateUser(mapFieldsToValues(userCredentials))}>log in</button>
         </div>
    );
};

export default Login
