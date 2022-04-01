import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface PropsTittle {
	tittle?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductTittle = ({ tittle, className, style }: PropsTittle) => {
	const { product } = useContext(ProductContext);
	return (
		<span className={`${styles.productDescription} ${className}`} style={style}>
			{tittle ? tittle : product.tittle}
		</span>
	);
};
