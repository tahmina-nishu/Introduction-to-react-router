
const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default User;