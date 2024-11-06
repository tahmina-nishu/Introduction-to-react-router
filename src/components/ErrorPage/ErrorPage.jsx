import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
const error = useRouteError();
console.log(error);

    return (
        <div>
            <h2>Ooops</h2>
            <p>{error.error.message || error.statusText}</p>
        </div>
    );
};

export default ErrorPage;