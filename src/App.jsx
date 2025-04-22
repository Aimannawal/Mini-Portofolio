import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import ProjectCard from "./components/Project";
import SocialButton from "./components/SocialButton";

const projectlist = [
	{
		title: "Project",
		description: "Dekripsi",
		link: "Google.com",
	},
	{
		title: "Project",
		description: "Dekripsi",
		link: "Google.com",
	},
];

function App() {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		let newTheme = "light";
		if (theme === "light") {
			newTheme = "dark";
		}

		setTheme(newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		console.log(savedTheme);

		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute("data-theme", savedTheme);
		}
	}, []);

	return (
		<Router>
			<div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
				<nav className="flex justify-center gap-4 mb-6">
					<Link className="btn btn-sm btn-outline" to="/">
						Home
					</Link>
					<Link className="btn btn-sm btn-outline" to="/project">
						Project
					</Link>
					<Link className="btn btn-sm btn-outline" to="/contact">
						Contact
					</Link>
				</nav>

				<Routes>
					<Route
						path="/"
						element={
							<div className="flex flex-col items-center gap-6">
								<div className="avatar">
									<div className="w-24 rounded-full">
										<img
											src="https://avatars.githubusercontent.com/u/162725086?v=4"
											alt="avatar"
										/>
									</div>
								</div>

								<div className="text-center">
									<h1 className="text-2xl font-bold">Aiman Wafi'i An Nawal</h1>
									<p className="text-sm max-w-xs">
										Fullstack Development | React, Node js, Php, Laravel,
										Express js, MongoDB, MySQL
									</p>
								</div>

								<div className="flex flex-col w-full max-w-xs gap-3">
									<SocialButton
										title="LinkedIn"
										link="https://linkedin.com/in/aiman-wafii-an-nawal/"
										buttonColor="primary"
									/>

									<SocialButton
										title="Github"
										link="https://github.com/AimanWafi"
										buttonColor="secondary"
									/>
								</div>
							</div>
						}
					/>

					<Route
						path="/project"
						element={
							<div className="grid gap-4 w-full max-w-md mx-auto">
                {projectlist.map(item => {
                  return (
                    <ProjectCard 
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    />
                  )
                })}
							</div>
						}
					/>
				</Routes>
				<button onClick={toggleTheme} className="btn btn-outline mt-4">
					Toggle {theme === "light" ? "Dark" : "Light"} Mode
				</button>
			</div>
		</Router>
	);
}

export default App;
