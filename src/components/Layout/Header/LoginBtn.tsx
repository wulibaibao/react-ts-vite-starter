import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBtn: React.FC = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("login");
	};

	return (
		<a className="btn btn-sm" onClick={handleLogin}>
			Login
		</a>
	);
};

export default LoginBtn;
