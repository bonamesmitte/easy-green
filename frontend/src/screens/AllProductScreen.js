import React, { useEffect, useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import '../cssStyle/productDetail.css';
import { useSelector, useDispatch } from 'react-redux';

function AllProductScreen(props) {
  // const productDetails = useSelector((state) => state.productDetails);
  // const dispatch = useDispatch;

  // useEffect(() => {
  //   return () => {};
  // }, []);

  const [qty, setQty] = useState(1);

  console.log(props.match.params.id);
  const product = data.products.find((x) => x._id === props.match.params.id);

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  return (
    <div>
      <div>
        <div className="back-to-result">
          <Link to="/">Back</Link>
        </div>
      </div>

      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="easyeat"></img>
        </div>

        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>{product.price}</li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>

        <div className="details-action">
          <ul>
            <li>
              Price: <b>$ {product.price}</b>
            </li>
            <li>
              Qty:
              <select
                value={qty}
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </li>
            {/* Option:
            <select>
              <option>Ready To Eat</option>
              <option>In Pot</option>
            </select> */}
            <li>
              <button onClick={handleAddToCart} className="button">
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AllProductScreen;
