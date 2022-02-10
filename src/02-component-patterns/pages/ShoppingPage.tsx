import React from "react";
import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTittle,
} from "../components";

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
					<ProductImage />
					<ProductTittle />
					<ProductButtons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Tittle />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	);
};
