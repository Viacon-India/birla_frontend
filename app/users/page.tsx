import React from 'react'

interface User {
id: number;
name: string;
email: string;
company: {
name: string;
};
website: string;
phone: number;
}

const UsersPage = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const users: User[] = await res.json();

return (
<>
  <h1>User</h1>
  <h3>current Time : {new Date().toLocaleTimeString()}</h3>

  <div className="overflow-x-auto">
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Website</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <th>{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.company.name}</td>
          <td>{user.website}</td>
          <td>{user.phone}</td>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </tr>)}
      </tbody>
    </table>
  </div>

</>
)
}

export default UsersPage