import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [email, setEmail] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const filteredData = users.filter((user) =>
      (
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.suite.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email === selectedEmail
      ) &&
      (selectedEmail === "" || user.email === selectedEmail)
    );

    const sortedData = [...filteredData].sort((a, b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else if (sort === "email") {
        return a.email.localeCompare(b.email);
      } else if (sort === "phone") {
        return a.phone.localeCompare(b.phone);
      } else if (sort === "website") {
        return a.website.localeCompare(b.website);
      } else if (sort === "company") {
        return a.company.name.localeCompare(b.company.name);
      } else if (sort === "address") {
        return a.address.street.localeCompare(b.address.street);
      }
      return 0;
    });

    const sorted =
      sortDirection === "asc" ? sortedData : sortedData.reverse();

    setFiltered(sorted);
  }, [searchQuery, users, sort, sortDirection, selectedEmail]);

  useEffect(() => {
    setIsLoading(true); 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        const emails = [...new Set(data.map((user) => user.email))];
        setEmail(emails);
        setIsLoading(false); 
      });
  }, []);

  function handlesort(field) {
    if (sort === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSort(field);
      setSortDirection("asc");
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold rounded text-center bg-gray-300 mb-3 text-black">User Table</h2>

      <input
        type="text"
        placeholder="Search here"
        name="user"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 rounded-md border border-black focus:outline-none focus:ring focus:ring-indigo-300"
      />
      &nbsp; &nbsp;

      <label htmlFor="emails">Email : </label>
      &nbsp;
      {isLoading ? (
        <label htmlFor="emails" className="text-red-500">Loading ...</label>
      ) : (
        <select
          name="emails"
          id="emails"
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          <option value="">All</option>
          {email.map((email) => (
            <option key={email}>{email}</option>
          ))}
        </select>
      )}

      {isLoading ? (
        <h3 className="text-red-500">Loading...</h3>
      ) : (
        <table  className="bg-blue-100 mt-6">
          <thead className="bg-black text-white">
            <tr>
              <th
                onClick={() => handlesort("id")}
                className="cursor-pointer hover:underline"
              >
                ID
              </th>
              <th
                onClick={() => handlesort("name")}
                className="cursor-pointer hover:underline"
              >
                Name
              </th>
              <th
                onClick={() => handlesort("email")}
                className="cursor-pointer hover:underline"
              >
                Email
              </th>
              <th
                onClick={() => handlesort("phone")}
                className="cursor-pointer hover:underline"
              >
                Phone
              </th>
              <th
                onClick={() => handlesort("website")}
                className="cursor-pointer hover:underline"
              >
                Website
              </th>
              <th
                onClick={() => handlesort("company")}
                className="cursor-pointer hover:underline"
              >
                Company
              </th>
              <th
                onClick={() => handlesort("address")}
                className="cursor-pointer hover:underline"
              >
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-2">{user.id}</td>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.phone}</td>
                <td className="border border-gray-300 p-2">{user.website}</td>
                <td className="border border-gray-300 p-2">{user.company.name}</td>
                <td className="border border-gray-300 p-2">
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}