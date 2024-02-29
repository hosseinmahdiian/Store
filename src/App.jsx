import { Navigate, Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Detailspage from "./pages/Detailspage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFind from "./pages/NotFind";
import ProductsProvider from "./context/productsProvider";
import CartProvider from "./context/CartProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <CartProvider>
        {/* Cart Context  */}
        <ProductsProvider>
          {/* Products Context   */}
          <Layout>
            <Routes>
              <Route index element={<Navigate to=" /Products" replace />} />
              <Route path="/Products" element={<Products />} />
              <Route path="Products/:id" element={<Detailspage />} />
              <Route path="CheckoutPage" element={<CheckoutPage />} />
              <Route path="*" element={<NotFind />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default App;
