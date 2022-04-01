import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTittle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
	id: "1",
	tittle: "Coffee Mug - card",
	img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Tittle />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard
					product={product}
					className="bg-dark text-white"
					style={{ backgroundColor: "#70D1F8" }}
				>
					<ProductImage className="custom-image" />
					<ProductTittle className="text-bold" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>
				<ProductCard
					product={product}
					className="bg-dark text-white"
					style={{ backgroundColor: "#70D1F8" }}
				>
					<ProductImage
						style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
					/>
					<ProductTittle style={{ fontWeight: "bold" }} />
					<ProductButtons style={{ display: "flex", justifyContent: "end" }} />
				</ProductCard>
			</div>
		</div>
	);
};
