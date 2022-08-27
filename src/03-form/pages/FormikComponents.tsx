import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
	return (
		<div>
			<h1> Formik Components</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe tener 15 caracteres o menos")
						.required("Requerido"),
					lastName: Yup.string().required("Requerido"),
					email: Yup.string().email("no es un email").required("requerido"),
					terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
					jobType: Yup.string()
						.notOneOf(["it-jr"], "Esta opcion no es permitida")
						.required("Requerido"),
				})}
			>
				{(formik) => (
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" component={"span"} />

						<label htmlFor="lastName">last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" component={"span"} />

						<label htmlFor="email">Email Address</label>
						<Field name="email" type="text" />
						<ErrorMessage name="email" />

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value={""}>Pick something</option>
							<option value={"developer"}>developer</option>
							<option value={"designer"}>designer</option>
							<option value={"it-senior"}>it-senior</option>
							<option value={"it-jr"}>it-jr</option>
						</Field>
						<ErrorMessage name="jobType" component={"span"} />

						<label>
							<Field name="terms" type="checkbox" />
							Terms and conditions
						</label>
						<ErrorMessage name="terms" component={"span"} />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
