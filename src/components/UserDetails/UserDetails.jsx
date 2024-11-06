import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const userDetailsStyle = {
        border: '2px solid steelblue',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'
    }

const user = useLoaderData();
console.log(user);
const {name} = user;

    return (
        <div style={userDetailsStyle}>
            <h3>Details about user</h3>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserDetails;