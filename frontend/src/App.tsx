import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

interface User {
  id: number;
  name: string;
  age: number;
}

const App = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  if (users === null) {
    return <div>No hay usuarios</div>;
  }

  return (
    <div className="app">
      {users.map((user) => {
        return <UserCard key={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default App;
