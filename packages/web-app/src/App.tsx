import { useUsers } from "./dataHooks/users";
import { IUser } from "types/src/user";
import { DataTable } from "./components";
import { ColumnDef } from "@tanstack/react-table";

function App() {
  const { data: users, isLoading, error } = useUsers();

  const userTableColumns: ColumnDef<IUser>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (info) => info.getValue(), // Define cell to determine how the content will be rendered
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "departmentId",
      header: "Department ID",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "profileImage",
      header: "Profile Image",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "birthdate",
      header: "Birthdate",
      cell: (info) => info.getValue(),
    },
  ];
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Welcome to the App
      </h1>

      <button className="btn">Add new User</button>
      
      <DataTable
        data={users}
        columns={userTableColumns}
      />
    </div>
  );
}

// TODO add a form to add a new user
// add layout components
// have one of the basic themes connected to daisyUI
export default App;
