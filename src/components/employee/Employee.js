import axios from "axios";
import { useEffect, useState } from "react";
import SingleEmployee from "./SingleEmployee";
import EmployeeForm from "./EmployeeForm";
import SingleEmployeeModifiable from "./SingleEmployeeModifiable";

const Employee = ()=>
{
    const [employee,setEmployee] = useState([]);
    const [showForm,setShowForm] = useState(false);
    const [indexToModify,setIndex] = useState(-1);
    const [employeeToShow,setEmployeeToShow] = useState([]);
    const [searchKey,setSearchKey] = useState("");

    useEffect(
        ()=>
        {
            axios.get("http://localhost:8080/personnel").then(
                response =>
                {
                    setEmployee(response.data);
                    setEmployeeToShow(response.data);
                }
            )
        },
        []
    );

    function notifyFather(emp)
    {
        let clone = [...employee];
        clone.push(emp);
        setEmployee(clone);
        setEmployeeToShow(clone);
    }

    function padreHoModificatoQuestoImpiegato(emp)
    {
        let clone = [...employee];
        let pos = clone.findIndex(e => e.id == emp.id);
        clone[pos] = emp;
        setEmployee(clone);
    }

    function diAMioPadreDiCancellarmi(id)
    {
        let clone = [...employee];
        let pos = clone.findIndex(e => e.id = id);
        axios.delete(`http://localhost8080/personnel/${id}`);
        clone.splice(pos,1);
        setEmployee(clone);
        setEmployeeToShow(clone);
        setSearchKey("");
    }

    function rendiFiglioAllaPosizioneModificabile(ind)
    {
        setIndex(ind);
    }
    
    function annullaModifiche()
    {
        setIndex(-1);
    }

    function toggleForm()
    {
        let newShowForm = !showForm;
        setShowForm(newShowForm);
    }

    function filterEmployee(emp)
    {
        let key = emp.target.value;
        setSearchKey(key);
        filterEmployeeByKey(key);
    }

    function filterEmployeeByKey(key)
    {
        if(key || key==="")
            setEmployeeToShow(employee.filter(e=> e.name.toLowerCase().includes(key.toLowerCase()) || e.surname.toLowerCase().includes(key.toLowerCase())));
        else
            setEmployeeToShow(employee.filter(e=> e.name.toLowerCase().includes(key.toLowerCase()) || e.surname.toLowerCase().includes(key.toLowerCase())));
    }

    function clearFilter()
    {
        setEmployeeToShow(employee);
        setSearchKey("");
    }

    return (

        <>
            <div className="container p-5">
                <div className="row">
                    <div style={{ backgroundColor: "#000040", color: "#FFFFFF" }} className="col-sm-3 p-4">
                        <input onClick={clearFilter} value={searchKey} onChange={filterEmployee} type="text" style={{ backgroundColor: "#000040", color: "#FFFFFF" }} className="white-text-input btn " placeholder="Search by name: " aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            {employeeToShow.map((emp,i)=>i==indexToModify ?  <SingleEmployeeModifiable key={emp.id}  padreHoModificatoQuestoImpiegato={padreHoModificatoQuestoImpiegato} annulla={annullaModifiche} emp={emp} />   : <SingleEmployee key={emp.id} emp={emp} index={i} update={rendiFiglioAllaPosizioneModificabile} delete={diAMioPadreDiCancellarmi}/>)}
                        </div>  
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Employee;