import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  Paiement,
  Panier,
  Categories,
  Produits,
  Error,
  Likes,
  SingleProduct,
} from "./Pages/index";
import {Navbar} from "./Composants/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Produits />}></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/likes" element={<Likes />}></Route>
        <Route exact path="/panier" element={<Panier />}></Route>
        <Route exact path="/paiement" element={<Paiement />}></Route>
        <Route exact path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
