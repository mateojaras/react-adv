import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTittle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{products.map((productItem) => (
					<ProductCard
						product={productItem}
						className="bg-dark text-white"
						key={productItem.id}
						onChange={(event) => onProductCountChange(event)}
						value={shoppingCart[productItem.id]?.count}
					>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>
						<ProductTittle className="text-bold" />
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>
			<div className="shopping-cart">
				{Object.values(shoppingCart).map((item) => {
					return (
						<ProductCard
							key={item.id}
							product={item}
							className="bg-dark text-white"
							style={{ width: "100px" }}
							value={item.count}
							onChange={(event) => onProductCountChange(event)}
						>
							<ProductImage
								className="custom-image"
								style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
							/>
							<ProductButtons
								className="custom-buttons"
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							/>
						</ProductCard>
					);
				})}
			</div>
		</div>
	);
};
