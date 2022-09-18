export default function User(props) {
    let {item:user, lift} = props;

    return (<div>
        <h2>{user.id} - {user.name}<br/>{user.username}</h2>

            <button onClick={ () => {
                lift(user)
            }}> Click me
                </button>
            </div>
    );
};
