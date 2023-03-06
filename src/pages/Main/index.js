import './style.css';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import shoes from '../../data'
import { useState } from 'react';

function Main() {
  const [products, setProducts] = useState([...shoes]);
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})

  function handleDetailProduct(product) {
    setOpenModal(true)
    setCurrentProduct(product)
  }

  return (
    <div className="container">
      <Header></Header>

      <div className='container-shoes'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleDetailProduct={handleDetailProduct}
          />
        ))}
      </div>

      <Footer></Footer>

      <Modal
        open={openModal}
        handleCloseModal={() => setOpenModal(false)}
        product={currentProduct}>

      </Modal>
    </div >
  );
}

export default Main;
