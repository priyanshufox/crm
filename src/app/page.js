'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerList from '../../components/CustomerList';
import FilterForm from '../../components/FilterForm';

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchCustomers();
  }, [filters]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/customers', {
        params: filters
      });
      setCustomers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (filterData) => {
    setFilters(filterData);
    console.log(filterData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">
        <FilterForm onFilter={handleFilter} />
        <CustomerList customers={customers} />
      </div>
    </div>
  );
};

export default Home;
