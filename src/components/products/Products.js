import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct ";
import SingleProductsModifiable from "./SingleProductsModifiable";
import ProductForm from "./ProductForm";

const Products = ()=>
{
    const [products,setProducts] = useState([]);
    const [indexToModify,setIndex] = useState(-1);
    const [productsToShow,setProductsToShow] = useState([]);
    const [searchKey,setSearchKey] = useState("");

    useEffect(
        ()=>
        {
            axios.get("http://localhost:8080/products").then(
                response =>
                {
                    setProducts(response.data);
                    setProductsToShow(response.data);
                }
            )
        },
        []
    );

    function notifyFather(prod)
    {
        let clone = [...products];
        clone.push(prod);
        setProducts(clone);
        setProductsToShow(clone);
    }

    function padreHoModificatoQuestoProdotto(prod)
    {
        let clone = [...products];
        let pos = clone.findIndex(p => p.id == prod.id);
        clone[pos] = prod;
        setProducts(clone);
    }

    function diAMioPadreDiCancellarmi(id)
    {
        let clone = [...products];
        let pos = clone.findIndex(p => p.id = id);
        axios.delete(`http://localhost8080/products/${id}`);
        clone.splice(pos,1);
        setProducts(clone);
        setProductsToShow(clone);
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

    function filterproducts(prod)
    {
        let key = prod.target.value;
        setSearchKey(key);
        filterproductsByKey(key);
    }

    function filterproductsByKey(key)
    {
        if(key || key==="")
            setProductsToShow(products.filter(p=> p.name.toLowerCase().includes(key.toLowerCase())));
        else
            setProductsToShow(products.filter(p=> p.name.toLowerCase().includes(key.toLowerCase())));
    }

    function clearFilter()
    {
        setProductsToShow(products);
        setSearchKey("");
    }

    return (

        <>
            <div className="container p-5">
                <div className="row">
                    <div style={{ backgroundColor: "#000040", color: "#FFFFFF" }} className="col-sm-3 p-4">
                        <input onClick={clearFilter} value={searchKey} onChange={filterproducts} type="text" style={{ backgroundColor: "#000040", color: "#FFFFFF" }} className="white-text-input btn " placeholder="Search by name: " aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            {productsToShow.map((prod,i)=>i==indexToModify ?  <SingleProductsModifiable key={prod.id}  padreHoModificatoQuestoProdotto={padreHoModificatoQuestoProdotto} annulla={annullaModifiche} prod={prod} />   : <SingleProduct key={prod.id} prod={prod} index={i} update={rendiFiglioAllaPosizioneModificabile} delete={diAMioPadreDiCancellarmi}/>)}
                        </div>  
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Products;