import "w3-css/w3.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Employee from './components/employee/Employee';
import Products from './components/products/Products';
import 'bootstrap/dist/css/bootstrap.css';
import ProductForm from "./components/products/ProductForm";
import EmployeeForm from "./components/employee/EmployeeForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="employee" element={<Employee />} />
          <Route path="products" element={<Products />} />
          <Route path="createEmployee" element={<EmployeeForm />} />
          <Route path="createProduct" element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
