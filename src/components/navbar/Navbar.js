import { Link } from "react-router-dom";

const Navbar = (props) =>
{
    return (
        
        <>
            <nav style={{ backgroundColor: "#000040", color: "#FFFFFF" }} className="navbar navbar-expand-lg">
                <div className="w3-padding container-fluid">
                    <Link className="pe-5 ps-3 fw-bold w3-monospace text-white navbar-brand" to="/">JAVAZON</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="ps-5 pe-5 text-white nav-link" to="products">Our Products</Link>
                            <Link className="ps-5 pe-5 text-white nav-link" to="employee">Our staff</Link>
                            <Link className="ps-5 pe-5 text-white nav-link" to="createProduct">New Product</Link>
                            <Link className="ps-5 text-white nav-link " to="createEmployee">New employee</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

}

export default Navbar;