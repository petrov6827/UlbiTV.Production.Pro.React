import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
	return (
	// eslint-disable-next-line i18next/no-literal-string
		<Suspense fallback={<div>Loading...</div>}>
			<div className="page-wrapper">
				<Routes>
					{Object.values(routeConfig).map(({element, path}) => (
						<Route 
							key={path}
							path={path}
							element={element}
						/>
					))}
				</Routes>
			</div>
		</Suspense>
	)
}

export default AppRouter;
