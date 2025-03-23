import React from 'react';
import StatCard from '../components/StatCard';
import PropertyList from '../components/PropertyList';
import AppointmentList from '../components/AppointmentList';
import { Property, Appointment } from '../types';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  // Type the sample data
  const stats = [
    { 
      icon: 'fas fa-building', 
      background: 'var(--primary)', 
      value: '248', 
      label: 'Total Properties' 
    }
    // ... rest of stats
  ];
  
  const properties: Property[] = [
    {
      image: '/api/placeholder/100/100',
      address: '123 Riverside Dr, New York',
      price: '$1,250,000',
      type: 'Apartment',
      status: 'Active',
      statusClass: 'active',
      agent: 'Sarah Johnson'
    }
    // ... rest of properties
  ];
  
  const appointments: Appointment[] = [
    {
      property: '123 Riverside Dr',
      client: 'David Clark',
      date: 'March 22, 2025',
      time: '10:00 AM',
      type: 'Viewing',
      agent: 'Sarah Johnson'
    }
    // ... rest of appointments
  ];

  return (
    <>
      <h2 style={{ marginBottom: '20px' }}>Dashboard</h2>
      {/* ... rest of JSX ... */}
    </>
  );
};

export default Dashboard; 