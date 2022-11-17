import { Form, Formik, yupToFormErrors } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{ name: "", email: "", password1: "", password2: "" }}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "EL nombre debe ser de 3 caracteres o mas")
						.max(15, "el nombre no puede ser mayor de 15 caracteres")
						.required("requerido"),
					email: Yup.string()
						.email("Revise el formato del correo")
						.required("requerido"),
					password1: Yup.string()
						.min(6, "Minimo 6 letras")
						.required("requerido"),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
						.required("requerido"),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label="Nombre" name="name" placeholder="Fernando" />
						<MyTextInput
							label="Email"
							name="email"
							placeholder="hola@yopmail.com"
							type="email"
						/>
						<MyTextInput
							label="Password"
							name="password1"
							placeholder="*****"
							type="password"
						/>
						<MyTextInput
							label="Password"
							name="password2"
							placeholder="*****"
							type="password"
						/>
						<button type="submit">Create</button>
						<button type="button" onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
