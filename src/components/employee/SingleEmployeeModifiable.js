import axios from "axios";
import { useState } from "react";

const SingleEmployeeModifiable = (props) =>
{
    const [eMod,setEMod] = useState(props.emp);

    function synchronize(e)
    {
        let clone = [...eMod];
        clone [e.target.name] = e.target.value;
        setEMod(clone);
    }

    function sendForm()
    {
        axios.put("http://localhost:8080/personnel"+eMod.id,eMod).then(
            (response) =>
            {
                props.padreHoModificatoQuestoImpiegato(response.data);
                props.annulla();   
            }
        )
    }

    return(
        <>
            <form   class="w3-container">

                <label>First Name</label>
                <input name="name" class="w3-input" type="text" value={eMod.name} onChange={synchronize} />

                <label>Last Name</label>
                <input name="surname" class="w3-input" type="text" value={eMod.surname} onChange={synchronize} />

                <label>Dob</label>
                <input name="dob" class="w3-input" type="date" value={eMod.dob} onChange={synchronize} />

                <label>Address</label>
                <input name="address" class="w3-input" type="text" value={eMod.address} onChange={synchronize} />

                <label>Security Level</label>
                <input name="securityLevel" class="w3-input" type="number" value={eMod.securityLevel} onChange={synchronize} />

                <label>Hired On</label>
                <input name="hiredOn" class="w3-input" type="date" value={eMod.hiredOn} onChange={synchronize} />

                <label>Role</label>
                <input name="role" class="w3-input" type="text" value={eMod.role} onChange={synchronize} />

                <label>Salary</label>
                <input name="salary" class="w3-input" type="number" value={eMod.salary} onChange={synchronize} />

                <label>Img</label>
                <input name="imgUrl" class="w3-input" type="text" value={eMod.imgUrl} onChange={synchronize} />

                <input class="w3-button" type="button" value="Salva"  onClick={sendForm}/>
                <input class="w3-button" type="button" value="ANNULLA" onClick={props.annulla} />
            </form>
        </>
    );
}

export default SingleEmployeeModifiable;