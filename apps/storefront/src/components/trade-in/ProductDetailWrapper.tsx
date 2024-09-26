import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const TradeInProductDetailWrapper = () => {
  const { productId } = useParams<{ productId: string }>();  
  return <ProductDetail productId={productId || ""} />;
};

export default TradeInProductDetailWrapper;
