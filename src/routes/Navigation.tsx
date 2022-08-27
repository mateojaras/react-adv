import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
import {
	FormikAbstractation,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
} from "../03-form/pages";
import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React logo" />

					<ul>
						<li>
							<NavLink
								to="/Register"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Formik-basic"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Formik-yup"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Formik-components"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Formik-abstractation"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Formik Abstractation
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="about" element={<h1>About Page</h1>} />
					<Route path="/Formik-basic" element={<FormikBasicPage />} />
					<Route path="/Formik-yup" element={<FormikYupPage />} />
					<Route path="/Formik-components" element={<FormikComponents />} />
					<Route
						path="/Formik-abstractation"
						element={<FormikAbstractation />}
					/>
					<Route path="register" element={<RegisterPage />} />
					<Route path="/*" element={<Navigate to="/Register" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
