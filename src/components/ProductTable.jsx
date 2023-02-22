import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ query, products, check }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((item) =>
              item.name.toLowerCase().startsWith(query.toLowerCase())
            )
            .filter((item) => (check ? item.inStock : item))
            .map((item) => {
              return <ProductRow item={item} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
