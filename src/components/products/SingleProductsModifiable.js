import axios from "axios";
import { useState } from "react";

const SingleProductsModifiable = (props) =>
{
    const [pMod,setPMod] = useState(props.prod);

    function synchronize(e)
    {
        let clone = [...pMod];
        clone [e.target.name] = e.target.value;
        setPMod(clone);
    }

    function sendForm()
    {
        axios.put("http://localhost:8080/products/"+pMod.id,pMod).then(
            (response) =>
            {
                props.padreHoModificatoQuestoProdotto(response.data);
                props.annulla();   
            }
        )
    }

    return(
        <>
            <form   class="w3-container">

                <label>First Name</label>
                <input name="name" class="w3-input" type="text" value={pMod.name} onChange={synchronize} />

                <label>Description</label>
                <input name="description" class="w3-input" type="text" value={pMod.description} onChange={synchronize} />

                <label>Available</label>
                <input name="available" class="w3-input" type="boolean" value={pMod.available} onChange={synchronize} />

                <label>Price</label>
                <input name="price" class="w3-input" type="number" value={pMod.price} onChange={synchronize} />

                <label>ProducedBy</label>
                <input name="producedBy" class="w3-input" type="text" value={pMod.producedBy} onChange={synchronize} />

                <label>Made in</label>
                <input name="madeIn" class="w3-input" type="text" value={pMod.madeIn} onChange={synchronize} />

                <label>Img</label>
                <input name="imgUrl" class="w3-input" type="text" value={pMod.imgUrl} onChange={synchronize} />

                <input class="w3-button" type="button" value="Salva"  onClick={sendForm}/>
                <input class="w3-button" type="button" value="ANNULLA" onClick={props.annulla} />
            </form>
        </>
    );
}

export default SingleProductsModifiable;