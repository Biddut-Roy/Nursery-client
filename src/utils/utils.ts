import { TProductCard } from "../type";

export function aggregateProducts(products: TProductCard[]): TProductCard[] {
  const productMap: { [key: string]: TProductCard } = {};

  products.forEach((product) => {
    if (!productMap[product._id]) {
      productMap[product._id] = { ...product, QAT: 0, price: 0 };
    }

    productMap[product._id].QAT += product.QAT;
    productMap[product._id].price = product.price;
  });

  Object.values(productMap).forEach((product) => {
    product.price = product.QAT * product.price;
  });

  return Object.values(productMap);
}
