import { useSelector } from "react-redux";

export default function useCart() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  if (products.status !== "ready") {
    return [];
  }

  const result = cart.list.map((item) => {
    const product = products.list.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  return result;
}
