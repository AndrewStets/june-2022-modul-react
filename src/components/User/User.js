export default function User(props) {
    let {item:user} = props;

    return (<div>
        <h2>{user.id} - {user.name}<br/>{user.username}</h2>
    </div>
    );
};
