import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from '../containers/ProductComponent'
import { ActionTypes } from '../redux/constants/action-types';
const ProductListing = () => {
  useEffect(() => {
    getAllProducts();
  }, []);
  const products = useSelector((state) => state);
  console.log("Products:",products);
  const dispatch = useDispatch();
  // const { id, title } = products[0];
  const getAllProducts = async () => {
    try {
      const responce = await axios.get("https://fakestoreapi.com/products");
      console.log("All Products : ", responce.data) ;
      // dispatch(setProducts(responce.data));
      dispatch({type:ActionTypes.SET_PRODUCTS,payload:responce.data});
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="ui grid container">
    <ProductComponent />
  </div>
  );
};

export default ProductListing;
