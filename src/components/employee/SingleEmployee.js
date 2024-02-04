const SingleEmployee = (props) =>
{
    function diAMioPadreDiModificarmi()
    {
        props.update(props.index)
    }

    function diAMioPadreDiEliminarmi()
    {
        props.delete(props.index)
    }

    return (
        <>
            <div  class="col-6 justify-content-end ps-5 pb-5 pe-5">
                <div class="card" style={{width: "18rem;"}}>
                    <img src={props.emp.imgUrl} class="card-img-top" />
                    <div style={{ backgroundColor: "#000040", color: "#FFFFFF" }} class="card-body">
                        <h1 class="fw-bold card-text">{props.emp.name} {props.emp.surname}</h1>
                        <p class="card-text">Address: {props.emp.address}</p>
                        <p class="card-text">Date of birth: {props.emp.dob}</p>
                        <p class="card-text">Role: {props.emp.role}</p>
                        <p class="card-text">Security Level: {props.emp.securityLevel}</p>
                        <p class="card-text">Salary: {props.emp.salary}</p>
                        <p class="card-text">Hired On: {props.emp.hiredOn}</p>
                    </div>
                    <div style={{ backgroundColor: "#000040", color: "#FFFFFF" }}>
                        <input className="text-white btn me-5 ms-3" type="button" value="MODIFICA" onClick={diAMioPadreDiModificarmi}/>
                        <input className="text-white btn ms-5" type="button" value="CANCELLA" onClick={diAMioPadreDiEliminarmi}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleEmployee;