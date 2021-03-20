import "./App.css";
function Users(props) {
  return (
    <div>
      <tr>
        <th>{props.id}</th>
        <th>{props.userId}</th>
        <th>{props.title}</th>
      </tr>
    </div>
  );
}

export default Users;
