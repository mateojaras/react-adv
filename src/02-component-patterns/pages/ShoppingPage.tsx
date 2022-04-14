import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTittle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<ProductCard product={product} className="bg-dark text-white">
				<ProductImage
					className="custom-image"
					style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
				/>
				<ProductTittle className="text-bold" />
				<ProductButtons className="custom-buttons" />
			</ProductCard>
		</div>
	);
};
