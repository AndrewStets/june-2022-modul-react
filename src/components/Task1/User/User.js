export default function User(props) {
    let {item:user, lift} = props;

    return (<div className='user'>
        <h4>{user.id} - {user.name}<br/>{user.username}</h4>

            <button className='button' onClick={ () => {
                lift(user)
            }}> Click me
                </button>
            </div>
    );
};
