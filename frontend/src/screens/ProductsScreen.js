import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../cssStyle/signin.css';
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from '../actions/productActions';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductsScreen(props) {
  const productSave = useSelector((state) => state.productDetails);

  // const [modalVisible, setModalVisible] = useState(false);
  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [image, setImage] = useState('');
  // const [description, setDescription] = useState('');
  // const productList = useSelector((state) => state.productList);
  // const { loading, products, error } = productList;
  // const productSave = useSelector((state) => state.productSave);
  // const {
  //   loading: loadingSave,
  //   success: successSave,
  //   error: errorSave,
  // } = productSave;

  // const productDelete = useSelector((state) => state.productDelete);
  // const {
  //   loading: loadingDelete,
  //   success: successDelete,
  //   error: errorDelete,
  // } = productDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteProduct());
    return () => {};
  }, []);

  // useEffect(() => {
  //   if (successSave) {
  //     setModalVisible(false);
  //   }
  //   dispatch(listProducts());
  //   return () => {};
  // }, [successSave, successDelete]);

  // const openModal = (product) => {
  //   setModalVisible(true);
  //   setId(product._id);
  //   setName(product.name);
  //   setPrice(product.price);
  //   setImage(product.image);
  //   setDescription(product.description);
  // };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(saveProduct({ _id: id, name, price, image, description }));
  // };

  // const deleteHandler = (product) => {
  //   dispatch(deleteProduct(product._id));
  // };

  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   console.log(name, image, description, price);
  //   if (name == 'name') {
  //     setName(value);
  //   }
  //   if (name == 'image') {
  //     setImage(value);
  //   }
  //   if (name == 'price') {
  //     setPrice(value);
  //   }
  //   if (name == 'description') {
  //     setDescription(value);
  //   }
  // };

  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Products</h3>
        <button className="button primary" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h1>Create Product</h1>
              </li>
              <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>

              <li>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={name}
                  id="name"
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="name">Image</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="name">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="name">Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={description}
                  onChange={handleChange}
                />
              </li>

              <li>
                <button type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
                </button>
              </li>

              <li>
                <button
                  type="submit"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsScreen;
