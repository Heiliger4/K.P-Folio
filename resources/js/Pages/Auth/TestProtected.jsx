import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ component: Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login !== "true") {
            localStorage.setItem("loginStatus", "Please login first");
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return <Component />;
};

export default Protected;
