"use client";

import { useEffect, useState } from "react";
import { productDataType } from "../utils/type";
import Link from "next/link";

export default function AddProduct() {
  const productCategory = [ "Fashion", "Electronics", "Home", "Books", "Sports", "Beauty", "Automotive" ];
  const productStockStatus = [ "In Stock", "Low Stock", "Out of Stock", "Pre-order", "Coming Soon"];

  

  const [productData, setProductData] = useState<productDataType>({
    productId: Math.floor(Math.random() * 10000),
    productName: "",
    productPrice: 0,
    productStockStatus: "",
    productDescription: "",
    productImage: "",
    productCategory: ""
  });

  const [errorForm, setErrorForm] = useState<any>({});

const [allProductData, setAllProductData] = useState<productDataType[]>([]);

const [isEdit, setIsEdit] = useState(false);

useEffect(() => {
  const storedProducts = localStorage.getItem('products');
  
  if (storedProducts && storedProducts !== "undefined") {
    try {
      const parsedProducts = JSON.parse(storedProducts);
      setAllProductData(parsedProducts);

      const urlParams = new URLSearchParams(window.location.search);
      const editId = urlParams.get('id');

      if (editId) {
        const productToEdit = parsedProducts.find((p: any) => p.productId.toString() === editId);
        if (productToEdit) {
          setProductData(productToEdit);
          setIsEdit(true);
        }
      }
    } catch (error) {
      console.error("Local Storage data parse karne mein error:", error);
      localStorage.removeItem('products');
    }
  }
}, []);

  useEffect(() => {
  if (allProductData.length > 0) {
    localStorage.setItem("products", JSON.stringify(allProductData));
  }
}, [allProductData]);

const onSubmit = (event: any) => {
  if(!validation()) {
    event.preventDefault();
    return;
  }

  let updatedProducts;
  if (isEdit) {
    updatedProducts = allProductData.map((p) => p.productId === productData.productId ? productData : p);
  } else {
    updatedProducts = [...allProductData, productData];
  }

  setAllProductData(updatedProducts);

  // Form Reset
  setProductData({
    productId: Math.floor(Math.random() * 10000),
    productName: "",
    productPrice: 0,
    productStockStatus: "",
    productDescription: "",
    productImage: "",
    productCategory: ""
  });
  setErrorForm({});
}

  const onHandleChange = (event: any) => {

    console.log(event.target.value);
    console.log(event.target.name);

    const {name, value} = event.target;
    setProductData(productData => ({...productData, [name]: (name === 'productPrice') ? Number(value) : value}));
  }

  const validation = () => {
    const error: any = {};

    if(!productData.productName.trim()) {
      error.productName = "Product Name is Required..";
    }

    if(!productData.productPrice) {
      error.productPrice = "Product Price is Required..";
    }else if (productData.productPrice <= 0) {
      error.productPrice = "Invalid Product Price"
    }
    if(!productData.productStockStatus.trim()) {
      error.productStockStatus = "Product Stock Status is Required..";
    }
    if(!productData.productDescription.trim()) {
      error.productDescription = "Product Description is Required..";
    }
    if(!productData.productImage) {
      error.productImage = "Product Image is Required..";
    }

    if(!productData.productCategory.trim()) {
      error.productCategory = "Product Category is Required..";
    }

    setErrorForm(error);

    return Object.keys(error).length === 0;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isEdit ? "Edit Product" : "Add New Product"}
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Fill out the form below to add a new product to your catalog
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full">
                    1
                  </span>
                  <span>Product Info</span>
                  <span className="text-gray-300 dark:text-gray-600">→</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 rounded-full">
                    2
                  </span>
                  <span>Review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Form Fields - Left Side */}
              <div className="lg:col-span-2 p-6 md:p-8 border-r border-gray-200 dark:border-gray-700">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="productName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={productData.productName}
                      onChange={onHandleChange}
                      placeholder="e.g., Wireless Headphones"
                      className={`w-full px-4 py-2.5 border ${errorForm.productName ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition outline-none`}
                    />
                    {errorForm.productName && <p className="text-red-500 text-sm mt-1">{errorForm.productName}</p>}
                  </div>

                  {/* Product Price */}
                  <div>
                    <label
                      htmlFor="productPrice"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Product Price <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                        $
                      </span>
                      <input
                        type="number"
                        name="productPrice"
                        value={productData.productPrice}
                        onChange={onHandleChange}
                        placeholder="0.00"
                        step="0.01"
                        className={`w-full px-4 py-2.5 border ${errorForm.productPrice ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition outline-none`}
                      />
                      {errorForm.productPrice && <p className="text-red-500 text-sm mt-1">{errorForm.productPrice}</p>}
                    </div>
                  </div>

                  {/* product Stock Status */}
                  <div>
                    <label
                      htmlFor="productStockStatus" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" >
                      Product Stock Status<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="productStockStatus"
                      value={productData.productStockStatus}
                      onChange={onHandleChange}
                      className={`w-full px-4 py-2.5 border ${errorForm.productStockStatus ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition outline-none`} >
                      <option value="" >Select stock status</option>
                      {productStockStatus.map((stock, index) => (
                        <option key={index} value={stock}>
                          {stock}
                        </option>
                      ))}
                    </select>
                    {errorForm.productStockStatus && <p className="text-red-500 text-sm mt-1">{errorForm.productStockStatus}</p>}
                  </div>

                  {/* Product Description */}
                  <div>
                    <label
                      htmlFor="productDescription"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Product Description
                    </label>
                    <textarea
                      name="productDescription"
                      value={productData.productDescription}
                      onChange={onHandleChange}
                      rows={4}
                      placeholder="Describe your product features, specifications, and benefits..."
                      className={`w-full px-4 py-2.5 border ${errorForm.productDescription ? "border-red-500" : "border-gray-300"}  rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition outline-none resize-y`}
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Maximum 500 characters
                    </p>
                    {errorForm.productDescription && <p className="text-red-500 text-sm mt-1">{errorForm.productDescription}</p>}
                  </div>

                  {/* Product Image */}
                  <div>
                    <label
                      htmlFor="productImage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Product Image URL
                    </label>
                    <input
                      type="url"
                      name="productImage"
                      value={productData.productImage}
                      onChange={onHandleChange}
                      placeholder="https://example.com/product-image.jpg"
                      className={`w-full px-4 py-2.5 border ${errorForm.productImage ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition outline-none`}
                    />
                    {errorForm.productImage && <p className="text-red-500 text-sm mt-1">{errorForm.productImage}</p>}
                  </div>
                  
                  {/* Radio Buttons for Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Select Category <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {productCategory.map((category, index) => {
                        return (
                          <label
                            key={index}
                            className="flex items-center space-x-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition group"
                          >
                            <input
                              type="radio"
                              name="productCategory"
                              value={category}
                              checked={productData.productCategory === category}
                              onChange={onHandleChange}
                              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                              {category}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                    {errorForm.productCategory && <p className="text-red-500 text-sm mt-1">{errorForm.productCategory}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                   <Link href="/viewProduct" onClick={onSubmit}>
                   <button
                      type="button"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md" >
                      {isEdit ? "Update Product" : "Add Product"}
                    </button>
                   </Link> 
                  </div>
                </form>
              </div>

              {/* Right Sidebar - Info */}
              <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900">
                <div className="sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Product Guidelines
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Clear Images
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Use high-quality product images
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Competitive Pricing
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Research market prices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Detailed Description
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Include key features and specs
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                    <p className="text-xs text-indigo-700 dark:text-indigo-300">
                      <span className="font-semibold">Pro Tip:</span> Add
                      multiple high-quality images to increase conversion rates
                      by up to 40%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
