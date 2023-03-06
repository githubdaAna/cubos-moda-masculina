import './style.css'
import { hadleCalculateInstallments } from '../../utils/function'

const Product = ({ product, handleDetailProduct }) => {


    return (
        <div className='container-products' onClick={() => handleDetailProduct(product)}>
            <img src={product.image} alt='shoe pic' />
            <span className='product-name'>{product.name}</span>
            <div className='container-prices'>
                <span>{product.oldPrice.toFixed(2)}</span>
                <h2>R${product.currentPrice.toFixed(2)}</h2>
            </div>
            <div className='container-installments'>
                <h4>6x R$ {hadleCalculateInstallments(product.currentPrice)}</h4>
                <span>Sem juros</span>
            </div>
        </div>
    )
}

export default Product