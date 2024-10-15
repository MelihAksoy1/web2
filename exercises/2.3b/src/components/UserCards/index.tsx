interface userCardsProps{
    users : User[];
}

interface User {
    name: string;
    age: number;
}

const UserCards = (props: userCardsProps) => {
    return (
        <div>
            {props.users.map((user, index) => (
                <div key={index}>
                    <h2>{user.name}</h2>
                    <p>Age : {user.age}</p>
                </div>
            ))}
        </div>
    );
};

export default UserCards;