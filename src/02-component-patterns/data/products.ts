import { Product } from "../interfaces/interfaces";

const product1 = {
	id: "1",
	tittle: "Coffee Mug - card",
	img: "./coffee-mug.png",
};

const product2 = {
	id: "2",
	tittle: "Coffee Mug - Meme",
	img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];
