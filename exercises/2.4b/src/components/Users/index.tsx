import "./index.css";

const Users = [
    {
        nom: "John",
        age: 25,
        online: true
    },
    {
        nom: "Jane",
        age: 24,
        online: false
    },
    {
        nom: "Jack",
        age: 26,
        online: true
    }
]

const UsersComponent = () => {
    return (
        <div className="alluser">
            {Users.map((user, index) => (
                <div key={index} className = "user">
                    <h1>{user.nom}</h1>
                    <p>{user.age} ans</p>
                    <p className = {user.online ? "Online" : "Offline"}>{user.online ? "Online" : "Offline"}</p>
                </div>
            ))}
        </div>
    )
}

export default UsersComponent;