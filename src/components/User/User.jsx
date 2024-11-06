import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'
    }

    // function to handle users details 
    const handleShowDetails = ()=> {
        navigate(`/users/${id}`);
    }


    return (
        <div style={userStyle}>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={handleShowDetails}>See Details</button>
        </div>
    );
};

export default User;