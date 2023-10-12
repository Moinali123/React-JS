import React from 'react';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQI3KZbaArQIp8jmAcHd0kzVPB_dTcGx5jhuHJU8GCN5zYBUYp8m4vA5SxigAsArVnW8&usqp=CAU" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold mb-1">Routes</h1>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <nav style={{ background: 'linear-gradient(to bottom, #000 20%, transparent 20%)', border: '0.5px solid #100', width: '1800px' }}>
          <ul className="flex list-none ">
            <li className="mr-6">
              <Link to="/profile" className="text-black-500 hover:text-red-900">Profile</Link>
            </li>
            <li className="mr-6">
              <Link to="/app" className="text-black-500 hover:text-red-900">App</Link>
            </li>
            <li className="mr-6">
              <Link to="/qa" className="text-black-500 hover:text-red-900">Q.A</Link>
            </li>
            <li className="mr-6">
              <Link to="/quotes" className="text-black-500 hover:text-red-900">Quotes</Link>
            </li>
            <li className="mr-6">
              <Link to="/table" className="text-black-500 hover:text-red-900">Table</Link>
            </li>
            <li className="mr-6">
              <Link to="/users" className="text-black-500 hover:text-yellow-900">Users</Link>
            </li>
            <li className="mr-6">
              <Link to="/video" className="text-black-500 hover:text-yellow-900">Video</Link>
            </li>
            <li className="mr-6">
              <Link to="/github" className="text-black-500 hover:text-yellow-900">Github</Link>
            </li>
             <li className="mr-6">
              <Link to="/weather" className="text-black-500 hover:text-red-900">Weather</Link>
            </li>
            <li className="mr-6">
              <Link to="/sportsnews" className="text-black-500 hover:text-red-900">Sports News</Link>
            </li>
            <li className="mr-6">
              <Link to="/post" className="text-black-500 hover:text-red-900">Post Details</Link>
            </li>
            <li className="ml-80">
              <Link to="/logout" className="text-black">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default List;