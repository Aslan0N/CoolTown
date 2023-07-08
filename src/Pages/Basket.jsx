import React from "react";
import { FaTrash } from "react-icons/fa";
import ProductData from "../Data/ProductsData.json";
import { useCart } from "react-use-cart";
import CallUs from './About/Components/CallUs'
import Partners from '../Components/Partners'

const Basket = () => {
  const { updateItemQuantity, items, removeItem, totalUniqueItems } = useCart();
  return (
    <>
      <section id="basket">
        <div className="container">
      <h5>Your Cart Products (0{totalUniqueItems})</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="head">
                Item
              </th>
              <th scope="col" className="head">
                Product
              </th>
              <th scope="col" className="head">
                Price
              </th>
              <th scope="col" className="head">
                Quantity
              </th>
              <th scope="col" className="head">
                Total Price
              </th>
              <th scope="col" className="head"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <th scope="row" className="id">
                    {item.id}
                  </th>
                  <td className="img">
                    <img width={80} src={item.image} alt="" />
                    <p>Ice <br /> Cream <br /> <span>Chocobar</span></p>
                  </td>
                  <td className="price-const">${item.price}</td>
                  <td>
                 <div className="quantity">
                 <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                 </div>
                  </td>
                  <td className="price">${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <span className="span" onClick={()=> removeItem(item.id)}>
                      <FaTrash className="i" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </section>
      <CallUs/>
      <Partners/>
    </>
  );
};

export default Basket;
