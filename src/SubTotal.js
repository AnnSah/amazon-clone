import React from 'react'
import "./SubTotal.css"
import NumberFormat from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">

            <NumberFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{{ value }}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}



                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;