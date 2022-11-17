import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === "required") {
			schema = schema.required("Este campo es requerido");
		}

		if (rule.type === "minLength") {
			schema = schema.min(
				(rule.value as any) || 2,
				`Minimo de ${(rule as any).value || 2} caracteres`
			);
		}

		if (rule.type === "email") {
			schema = schema.email("Revise el formato del email");
		}
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
	return (
		<div>
			<h1>DynamicForm</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => (
					<Form>
						{formJson.map(({ type, name, placeholder, label, options }) => {
							if (type === "input" || type === "password" || type === "email") {
								return (
									<MyTextInput
										key={name}
										label={label}
										name={name}
										type={type as any}
										placeholder={placeholder}
									/>
								);
							} else if (type === "select") {
								return (
									<MySelect key={name} label={label} name={name}>
										<option value="">Select an option</option>
										{options?.map((option) => (
											<option key={option.id} value={option.id}>
												{option.label}
											</option>
										))}
									</MySelect>
								);
							}
						})}
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
