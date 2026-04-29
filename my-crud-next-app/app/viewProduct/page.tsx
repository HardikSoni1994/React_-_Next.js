"use client";
import { useState, useEffect } from "react";
import { productDataType } from "../utils/type";
import { useRouter } from "next/navigation";

export default function ViewProduct() {

  const router = useRouter();

  const [allProductData, setAllProductData] = useState<productDataType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    setAllProductData(products);
  }, []);

  const categories = [
    "all",
    ...new Set(allProductData.map((p) => p.productCategory)),
  ];

  const filteredProducts = allProductData.filter((product) => {
    const matchesSearch =
      product.productName.toLowerCase().includes(search.toLowerCase()) ||
      product.productId.toString().includes(search) ||
      product.productCategory.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.productCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const deleteProduct = (index: number) => {
    const updatedProducts = allProductData.filter((_, i) => i !== index);
    setAllProductData(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 px-2 sm:px-0 py-4">
          <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg mb-3 sm:mb-5">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent `wrap-break-words` px-3 leading-tight py-2">
            Product Management
          </h1>
          <p className="mt-2 sm:mt-3 text-slate-500 text-sm sm:text-base px-4">
            View and manage all your products
          </p>

          {/* linear Line */}
          <div className="mx-auto h-0.5 w-5/5 sm:w-4/5 md:w-3/5 bg-linear-to-r from-transparent via-indigo-500 to-transparent mt-4 sm:mt-5"></div>
        </div>

        {/* Add Product Button - Right Side */}
        <div className="flex justify-end">
          <button
  onClick={() => router.push('/addProduct')}
  className=" mb-6 md:mb-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Add New Product
</button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Total Products
                </p>
                <p className="text-3xl font-bold text-indigo-600">
                  {allProductData.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">Categories</p>
                <p className="text-3xl font-bold text-purple-600">
                  {categories.length - 1}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">In Stock</p>
                <p className="text-3xl font-bold text-green-600">
                  {
                    allProductData.filter(
                      (p) => p.productStockStatus === "In Stock",
                    ).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Out of Stock
                </p>
                <p className="text-3xl font-bold text-red-600">
                  {
                    allProductData.filter(
                      (p) => p.productStockStatus === "Out of Stock",
                    ).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by product name, ID, or category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-linear-to-r from-slate-800 to-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Stock Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-20 h-20 text-slate-200 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <p className="text-slate-500 font-medium text-lg">
                          No products found
                        </p>
                        <p className="text-slate-400 text-sm mt-2">
                          Try adjusting your search or filter
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product, index) => (
                    <tr
                      key={product.productId}
                      className="hover:bg-slate-50 transition-all duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-indigo-600">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-slate-800">
                          {product.productName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-600">
                          ₹{product.productPrice}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            product.productStockStatus === "In Stock"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {product.productStockStatus === "In Stock"
                            ? "✅ In Stock"
                            : "❌ Out of Stock"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className="text-sm text-slate-600 max-w-xs truncate"
                          title={product.productDescription}
                        >
                          {product.productDescription}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                          📁 {product.productCategory}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => deleteProduct(index)}
                            className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-200"
                            title="Delete Product"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                          <button
  onClick={() => router.push(`/editProduct/${product.productId}`)} // Yahan useRouter ka jadoo hai
  className="p-2 text-yellow-600 hover:text-white hover:bg-yellow-600 rounded-lg transition-all duration-200"
  title="Edit Product"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          {filteredProducts.length > 0 && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-slate-600">
                    Showing{" "}
                    <span className="font-bold text-slate-800">
                      {filteredProducts.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-bold text-slate-800">
                      {allProductData.length}
                    </span>{" "}
                    products
                  </p>
                </div>
                {search && (
                  <p className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    🔍 Filtered by: "{search}"
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
