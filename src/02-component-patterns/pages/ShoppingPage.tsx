import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTittle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import styles from "../styles/styles.module.css";

const product = products[0];

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>

			<ProductCard
				product={product}
				className="bg-dark text-white"
				key={product.id}
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{({ reset, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>
						<ProductTittle className="text-bold" />
						<ProductButtons className="custom-buttons" />
						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						<button
							className={`${isMaxCountReached && styles.disabled}`}
							onClick={() => increaseBy(+2)}
						>
							+2
						</button>
					</>
				)}
			</ProductCard>
		</div>
	);
};
