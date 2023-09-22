import { useState } from "react";


const StatefulForm = () => {
     const {email,setEmail} = useState(null);
     const {password,setPassword} = useState(null)
    const handleSubmit = e =>
    { 
        e.preventDefault();
        console.log(email,password);

    }
    const changeEmail = e =>
    {
        console.log(e.target.value);
        setEmail(e.target.value);

    }
    const handleChangePassword = e =>
    {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input 
                onChange={changeEmail}
                 type="email" name="email" />
                <br />
                <input
                onChange={handleChangePassword}
                type="password" name="password" />
                <br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;