import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {
	const {
		handleSubmit,

		getFieldProps,

		errors,
		touched,
	} = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Debe tener 15 caracteres o menos")
				.required("Requerido"),
			lastName: Yup.string().required("Requerido"),
			email: Yup.string().email("no es un email").required("requerido"),
		}),
	});
	return (
		<div>
			<h1> Formik Basic Tutorial</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor="firstName">First Name</label>
				<input type="text" {...getFieldProps("firstName")} />

				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor="firstName">last Name</label>
				<input type="text" {...getFieldProps("lastName")} />

				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="firstName">Email Address</label>
				<input type="email" {...getFieldProps("email")} />

				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
