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

			<ProductCard
				product={product}
				key={product.id}
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{({ reset, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage />
						<ProductTittle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
};
