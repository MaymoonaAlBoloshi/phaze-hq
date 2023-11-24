import { useUsers } from "./dataHooks/users";
import { IUser } from "types/src/user";

function App() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Welcome to the App
      </h1>

      <button className="btn">Hello daisyUI</button>
      <div>
        {users.map((user: IUser) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

export default App;
