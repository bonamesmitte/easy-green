import React from 'react';
import data1 from '../data1';
import { Link } from 'react-router-dom';
import '../cssStyle/productDetail.css';

function AllProductScreen(props) {
  console.log(props.match.params.id);
  const product = data1.products.find((x) => x._id === props.match.params.id);

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
              <select>
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
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AllProductScreen;
