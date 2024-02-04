import axios from "axios";
import { useState } from "react";
const EmployeeForm = (props) =>
{
    const [emp,setEmp] = useState({
        name:"",
        surname:"",
        dob:"",
        address:"",
        securityLevel:"",
        hiredOn:"",
        role:"",
        salary:"",
        imgUrl:"",
    });

    function sendForm()
    {
        axios.post("http://localhost:8080/personnel",emp).then(
            (response) =>
            {
                props.notifyFather(response.data);
                setEmp({
                    name:"",
                    surname:"",
                    dob:"",
                    address:"",
                    securityLevel:"",
                    hiredOn:"",
                    role:"",
                    salary:"",
                    imgUrl:"",
                });
            }
        )
    }

    function synchronize(e)
    {
        let clone = [...emp];
        clone[e.target.name] = e.target.value;
        setEmp(clone);
    }

    return(
        <>
            <form   class="w3-container">

                <label>First Name</label>
                <input name="name" class="w3-input" type="text" value={emp.name} onChange={synchronize} />

                <label>Last Name</label>
                <input name="surname" class="w3-input" type="text" value={emp.surname} onChange={synchronize} />

                <label>Dob</label>
                <input name="dob" class="w3-input" type="date" value={emp.dob} onChange={synchronize} />

                <label>Address</label>
                <input name="address" class="w3-input" type="text" value={emp.address} onChange={synchronize} />

                <label>Security Level</label>
                <input name="securityLevel" class="w3-input" type="number" value={emp.securityLevel} onChange={synchronize} />

                <label>Hired On</label>
                <input name="hiredOn" class="w3-input" type="date" value={emp.hiredOn} onChange={synchronize} />

                <label>Role</label>
                <input name="role" class="w3-input" type="text" value={emp.role} onChange={synchronize} />

                <label>Salary</label>
                <input name="salary" class="w3-input" type="number" value={emp.salary} onChange={synchronize} />

                <label>Img</label>
                <input name="imgUrl" class="w3-input" type="text" value={emp.imgUrl} onChange={synchronize} />

                <input class="w3-button" type="button" value="Salva"  onClick={sendForm}/>
            </form>
        </>
    );
}

export default EmployeeForm;