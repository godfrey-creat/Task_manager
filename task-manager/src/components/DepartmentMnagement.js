import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:8000/api/departments/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments', error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div>
      <h2>Department Management</h2>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            <h4>{department.name}</h4>
            <p>Managed by: {department.manager.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentManagement;
