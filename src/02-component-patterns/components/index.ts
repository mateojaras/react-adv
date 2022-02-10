import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTittle } from "./ProductTittle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTittle } from "./ProductTittle";

export const ProductCard = Object.assign(ProductCardHOC, {
	Tittle: ProductTittle,
	Image: ProductImage,
	Buttons: ProductButtons,
});

export default ProductCard;
