const SingleProduct = (props) =>
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
                    <img src={props.prod.imgUrl} class="card-img-top" />
                    <div style={{ backgroundColor: "#000040", color: "#FFFFFF" }} class="card-body">
                        <h1 class="fw-bold card-text">{props.prod.name}</h1>
                        <p class="card-text">Description: {props.prod.description}</p>
                        <p class="card-text">Price: {props.prod.price}</p>
                        <p class="card-text">Produced by: {props.prod.producedBy}</p>
                        <p class="card-text">Made in: {props.prod.madeIn}</p>
                        <p class="card-text">Available: {props.prod.available}</p>
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

export default SingleProduct;