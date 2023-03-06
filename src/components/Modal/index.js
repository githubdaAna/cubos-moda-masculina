import './style.css'
import CloseIcon from '../../assets/close-icon.svg'
import { hadleCalculateInstallments } from '../../utils/function'
import { useState, useEffect } from 'react'

const Modal = ({ open, handleCloseModal, product }) => {
    const [modalPosition, setModalPosition] = useState(0);

    useEffect(() => {
        if (open) {
            setModalPosition(document.documentElement.scrollTop + 25)
        }
    }, [open])

    return (
        <>
            {open &&
                <div className='container-modal' >
                    <div
                        className='modal'
                        style={{ top: modalPosition }}
                    >
                        <div className='modal-body'>
                            <img
                                className='product-img'
                                src={product.image}
                                alt='shoe'
                            />
                            <img
                                className='close-icon'
                                src={CloseIcon}
                                alt='close-icon'
                                onClick={() => handleCloseModal()}
                            />
                            <strong>{product.name}</strong>
                            <p>{product.description}</p>
                            <div className='container-buy'>
                                <button className='btn-buy'> COMPRAR </button>

                                <div className='container-prices'>
                                    <div className='content-prices'>
                                        <span>R${product.oldPrice.toFixed(2)}</span>
                                        <h2>R${product.currentPrice.toFixed(2)}</h2>
                                    </div>

                                    <div className='content-installments modal-installments'>
                                        <h4>6x R${hadleCalculateInstallments(product.currentPrice)}</h4>
                                        <span>Sem juros</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal