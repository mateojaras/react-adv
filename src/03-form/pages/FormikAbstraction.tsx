import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckBox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
	return (
		<div>
			<h1> Formik Abstractation</h1>
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
						<MyTextInput
							label="first Name"
							name="firstName"
							placeholder="Jaras"
						/>

						<MyTextInput
							label="last Name"
							name="lastName"
							placeholder="Apellido"
						/>

						<MyTextInput
							label="Email"
							name="email"
							placeholder="email"
							type="email"
						/>

						<MySelect name="jobType" as="select" label={"Job Type"}>
							<option value={""}>Pick something</option>
							<option value={"developer"}>developer</option>
							<option value={"designer"}>designer</option>
							<option value={"it-senior"}>it-senior</option>
							<option value={"it-jr"}>it-jr</option>
						</MySelect>

						<MyCheckBox label={"terms and conditions"} name={"terms"} />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
