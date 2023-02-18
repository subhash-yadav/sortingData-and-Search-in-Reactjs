import Products from "./Components/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/product-detail/:id" element={<ProductDetail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
