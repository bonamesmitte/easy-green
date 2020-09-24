import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../cssStyle/signin.css';
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from '../actions/productActions';
import axios from 'axios';

function ProductsScreen(props) {
  // const productSave = useSelector((state) => state.productDetails);

  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);

  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);

  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(deleteProduct());
  //   return () => {};
  // }, []);

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {};
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setDescription(product.description);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({ _id: id, name, price, image, description }));
  };

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, image, description, price);
    if (name == 'name') {
      setName(value);
    }
    if (name == 'image') {
      setImage(value);
    }
    if (name == 'price') {
      setPrice(value);
    }
    if (name == 'description') {
      setDescription(value);
    }
  };

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

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
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>

              <li>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                ></input>
                <input type="file" onChange={uploadFileHandler}></input>
                {uploading && <div>Uploading...</div>}
              </li>

              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>

              <li>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>

              <li>
                <button type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
                </button>
              </li>

              <li>
                <button
                  type="button"
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
                {/* <td>{product.image}</td> */}
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
