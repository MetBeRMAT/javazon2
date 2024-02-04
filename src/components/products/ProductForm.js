import axios from "axios";
import { useState } from "react";
const ProductForm = (props) =>
{
    const [prod,setProd] = useState({
        name:"",
        description:"",
        price:"",
        producedBy:"",
        madeIn:"",
        available:"",
        imgUrl:""
    });

    function sendForm()
    {
        axios.post("http://localhost:8080/products",prod).then(
            (response) =>
            {
                props.notifyFather(response.data);
                setProd({
                    name:"",
                    description:"",
                    price:"",
                    producedBy:"",
                    madeIn:"",
                    available:"",
                    imgUrl:""
                });
            }
        )
    }

    function synchronize(e)
    {
        let clone = [...prod];
        clone[e.target.name] = e.target.value;
        setProd(clone);
    }

    return(
        <>
            <form   class="w3-container">

                <label>First Name</label>
                <input name="name" class="w3-input" type="text" value={prod.name} onChange={synchronize} />

                <label>Description</label>
                <input name="description" class="w3-input" type="text" value={prod.description} onChange={synchronize} />

                <label>Available</label>
                <input name="available" class="w3-input" type="boolean" value={prod.available} onChange={synchronize} />

                <label>Price</label>
                <input name="price" class="w3-input" type="number" value={prod.price} onChange={synchronize} />

                <label>ProducedBy</label>
                <input name="producedBy" class="w3-input" type="text" value={prod.producedBy} onChange={synchronize} />

                <label>Made in</label>
                <input name="madeIn" class="w3-input" type="text" value={prod.madeIn} onChange={synchronize} />

                <label>Img</label>
                <input name="imgUrl" class="w3-input" type="text" value={prod.imgUrl} onChange={synchronize} />

                <input class="w3-button" type="button" value="Salva"  onClick={sendForm}/>
                <input class="w3-button" type="button" value="ANNULLA" onClick={props.annulla} />
            </form>
        </>
    );
}

export default ProductForm;