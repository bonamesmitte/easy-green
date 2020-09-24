import React, { useState, useEffect } from 'react';
import '../cssStyle/easyEat.css';
import data from '../data';
import { Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function EasyEat() {
  const [product, setProduct] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/alleat');
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
          {console.log(data)}
          <ul className="products">
            {data.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <Link to={'/alleat/' + product._id}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt="product"
                    />
                  </Link>
                  <div className="product-name">
                    <Link to={'/alleat/' + product._id}>{product.name}</Link>
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

export default EasyEat;

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
