import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import './style.css';

const BasketTotal=({totalPrice, basket})=>{
    const cn = bem('BasketTotal');
  
    return(
        <div className={cn()}> 
            {basket.length?
              <>
                <div className={cn('total')}>
                  <strong>Итого</strong>
                </div>
                <div className={cn('price')}>
                  <strong>{totalPrice.toLocaleString('ru')} ₽</strong>
                </div>
              </>
              :
              <strong>В корзине пусто</strong>
            }
        </div>
    )
}

BasketTotal.propTypes = {
  totalPrice: propTypes.number.isRequired
}

BasketTotal.defaultProps = {
  totalPrice: 0
}

export default BasketTotal;
