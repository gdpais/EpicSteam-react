import { Routes, Route } from 'react-router-dom';
import RequireAuth from '../../components/authentication/RequireAuth';
import Home from '../../views/Home';
import Browse from '../../views/Browse';
import Game from '../../views/Game';
import Users from '../../views/Users/Users';
import Profile from '../../views/Users/Profile';
import NotFound from '../../views/NotFound';
import App from '../../App';

/**
 * Application routing handling
 * @returns Routes
 */
export default function Routing() {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				{/* Public routes */}
				<Route index element={<Home />} />
				<Route path="/browse" element={<Browse />} />
				<Route path="/game/:id" element={<Game />} />

				{/* Protected routes */}
				<Route element={<RequireAuth />}>
					<Route path="/users">
						{/* add element to be rendered into children */}
						<Route index element={<Users />} />
						<Route path=":id" element={<Profile />}></Route>
					</Route>
				</Route>
			</Route>
			{/* Catch errors*/}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
