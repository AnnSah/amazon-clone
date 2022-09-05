import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import NumberFormat from "react-number-format";

function Checkout() {
    const [{ basket }] = useStateValue();


    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__ad" src="/images/ILB_WordCount_NotApproved._CB1613492740_._TTW_.jpg" alt="ad" />
                {basket?.length === 0 ? (
                    <div>
                        <h2> Your Shopping Basket is empty</h2>
                        <p> You have no items in your basket.To buy one or more items,click "Add to Basket" below the items. </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))}

                    </div>
                )}

            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;