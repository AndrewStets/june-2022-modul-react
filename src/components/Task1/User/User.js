export default function User(props) {
    let {item:user, lift} = props;

    return (<div>
        <h3>{user.id} - {user.name}<br/>{user.username}</h3>

            <button onClick={ () => {
                lift(user)
            }}> Click me
                </button>
            </div>
    );
};
