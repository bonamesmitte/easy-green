import React, { useState, useEffect } from 'react';
import '../cssStyle/easyEat.css';
import data1 from '../data1';
import { Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

function EasyGrow() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/allgrow');
      setProduct(data);
    };
    fetchData();

    return () => {};
  }, []);

  return (
    //{' '}
    <div className="main">
      {' '}
      <div className="content">
        <div>
          <ul className="products">
            {data1.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <Link to={'/allgrow/' + product._id}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt="product"
                    />
                  </Link>
                  <div className="product-name">
                    <Link to={'/allgrow/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="price">$ {product.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        //{' '}
      </div>
      //{' '}
    </div>
  );
}

export default EasyGrow;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { listProducts } from '../actions/productActions';
// import '../cssStyle/easyEat.css';

// function EasyEat(props) {
//   const productList = useSelector((state) => state.productList);
//   const { products, loading, error } = productList;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(listProducts());
//     return () => {};
//   }, []);

//   return loading ? (
//     <div>Loading...</div>
//   ) : error ? (
//     <div>{error}</div>
//   ) : (
//     <ul className="products">
//       {products.map((product) => (
//         <li key={product._id}>
//           <div className="product">
//             <Link to={'/product/' + product._id}>
//               <img
//                 className="product-image"
//                 src={product.image}
//                 alt="product"
//               />
//             </Link>

//             <div className="product-name">
//               <Link to={'/product/' + product._id}>{product.name}</Link>
//             </div>

//             <div className="product-price">$ {product.price}</div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default EasyEat;
