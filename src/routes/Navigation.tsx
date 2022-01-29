import { Suspense } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React logo" />

						<ul>
							{routes.map((item) => {
								return (
									<li key={item.to}>
										<NavLink
											to={item.to}
											className={({ isActive }) =>
												isActive ? "nav-active" : ""
											}
										>
											{item.name}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</nav>

					<Routes>
						{routes.map((item) => {
							return (
								<Route
									key={item.to}
									path={item.path}
									element={<item.Component />}
								/>
							);
						})}
						<Route path="/*" element={<Navigate to="/lazy1" replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
