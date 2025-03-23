// App.jsx - Main component
import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

// App.css - Main stylesheet
:root {
  --primary: #2c3e50;
  --secondary: #3498db;
  --success: #27ae60;
  --danger: #e74c3c;
  --warning: #f39c12;
  --light: #ecf0f1;
  --dark: #2c3e50;
  --gray: #95a5a6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f5f7fa;
  color: #333;
}

.container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  padding: 20px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.card-header {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-body {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  font-weight: 600;
  color: var(--gray);
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.status.active {
  background-color: rgba(39, 174, 96, 0.1);
  color: var(--success);
}

.status.pending {
  background-color: rgba(243, 156, 18, 0.1);
  color: var(--warning);
}

.status.inactive {
  background-color: rgba(231, 76, 60, 0.1);
  color: var(--danger);
}

.action-btn {
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 5px;
  border: none;
}

.view-btn {
  background-color: var(--light);
  color: var(--dark);
}

.edit-btn {
  background-color: var(--secondary);
  color: white;
}

.delete-btn {
  background-color: var(--danger);
  color: white;
}

.property-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 70px;
  }
}

// components/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { id: 'properties', icon: 'fas fa-building', label: 'Properties' },
    { id: 'clients', icon: 'fas fa-users', label: 'Clients' },
    { id: 'agents', icon: 'fas fa-user-tie', label: 'Agents' },
    { id: 'transactions', icon: 'fas fa-handshake', label: 'Transactions' },
    { id: 'appointments', icon: 'fas fa-calendar-check', label: 'Appointments' },
    { id: 'reports', icon: 'fas fa-chart-bar', label: 'Reports' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' }
  ];
  
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-home"></i>
        <span>Estate Admin</span>
      </div>
      
      {menuItems.map(item => (
        <div 
          key={item.id}
          className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
          onClick={() => setActiveItem(item.id)}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

// components/Sidebar.css
.sidebar {
  width: 250px;
  background-color: var(--primary);
  color: white;
  padding: 20px 0;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.logo {
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo i {
  margin-right: 10px;
}

.menu-item {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
}

.menu-item:hover, .menu-item.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-item i {
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    overflow: visible;
  }
  
  .logo span, .menu-item span {
    display: none;
  }
}

// components/TopBar.jsx
import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="user-profile">
        <img src="/api/placeholder/50/50" alt="Admin" />
        <div className="user-info">
          <div className="user-name">John Doe</div>
          <div className="user-role">Administrator</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

// components/TopBar.css
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.search-box {
  display: flex;
  align-items: center;
  background-color: var(--light);
  border-radius: 4px;
  padding: 8px 15px;
  width: 300px;
}

.search-box input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  margin-left: 10px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.user-profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info {
  line-height: 1.2;
}

.user-name {
  font-weight: bold;
}

.user-role {
  font-size: 12px;
  color: var(--gray);
}

// components/StatCard.jsx
import React from 'react';
import './StatCard.css';

const StatCard = ({ icon, background, value, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ backgroundColor: background }}>
        <i className={icon}></i>
      </div>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default StatCard;

// components/StatCard.css
.stat-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 20px;
}

.stat-info h3 {
  font-size: 22px;
  margin-bottom: 5px;
}

.stat-info p {
  color: var(--gray);
  font-size: 14px;
}

// components/PropertyList.jsx
import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Recent Properties</div>
        <button className="action-btn edit-btn">View All</button>
      </div>
      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Address</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
              <th>Agent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={index}>
                <td>
                  <img className="property-img" src={property.image} alt="Property" />
                </td>
                <td>{property.address}</td>
                <td>{property.price}</td>
                <td>{property.type}</td>
                <td>
                  <span className={`status ${property.statusClass}`}>
                    {property.status}
                  </span>
                </td>
                <td>{property.agent}</td>
                <td>
                  <button className="action-btn view-btn">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="action-btn edit-btn">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="action-btn delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyList;

// components/AppointmentList.jsx
import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Upcoming Appointments</div>
        <button className="action-btn edit-btn">View All</button>
      </div>
      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Client</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Agent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.property}</td>
                <td>{appointment.client}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.type}</td>
                <td>{appointment.agent}</td>
                <td>
                  <button className="action-btn view-btn">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="action-btn edit-btn">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="action-btn delete-btn">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;

// pages/Dashboard.jsx
import React from 'react';
import StatCard from '../components/StatCard';
import PropertyList from '../components/PropertyList';
import AppointmentList from '../components/AppointmentList';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data for stats
  const stats = [
    { 
      icon: 'fas fa-building', 
      background: 'var(--primary)', 
      value: '248', 
      label: 'Total Properties' 
    },
    { 
      icon: 'fas fa-dollar-sign', 
      background: 'var(--success)', 
      value: '$1.2M', 
      label: 'Monthly Revenue' 
    },
    { 
      icon: 'fas fa-users', 
      background: 'var(--warning)', 
      value: '1,824', 
      label: 'Active Clients' 
    },
    { 
      icon: 'fas fa-handshake', 
      background: 'var(--secondary)', 
      value: '32', 
      label: 'Pending Deals' 
    }
  ];
  
  // Sample data for properties
  const properties = [
    {
      image: '/api/placeholder/100/100',
      address: '123 Riverside Dr, New York',
      price: '$1,250,000',
      type: 'Apartment',
      status: 'Active',
      statusClass: 'active',
      agent: 'Sarah Johnson'
    },
    {
      image: '/api/placeholder/100/100',
      address: '456 Oak Street, Los Angeles',
      price: '$850,000',
      type: 'House',
      status: 'Pending',
      statusClass: 'pending',
      agent: 'Michael Brown'
    },
    {
      image: '/api/placeholder/100/100',
      address: '789 Pine Ave, Chicago',
      price: '$530,000',
      type: 'Condo',
      status: 'Active',
      statusClass: 'active',
      agent: 'Jessica Lewis'
    },
    {
      image: '/api/placeholder/100/100',
      address: '101 Main St, Boston',
      price: '$690,000',
      type: 'House',
      status: 'Sold',
      statusClass: 'inactive',
      agent: 'Robert Miller'
    },
    {
      image: '/api/placeholder/100/100',
      address: '555 Maple Lane, Denver',
      price: '$420,000',
      type: 'Townhouse',
      status: 'Active',
      statusClass: 'active',
      agent: 'Laura Wilson'
    }
  ];
  
  // Sample data for appointments
  const appointments = [
    {
      property: '123 Riverside Dr',
      client: 'David Clark',
      date: 'March 22, 2025',
      time: '10:00 AM',
      type: 'Viewing',
      agent: 'Sarah Johnson'
    },
    {
      property: '456 Oak Street',
      client: 'Amanda White',
      date: 'March 22, 2025',
      time: '2:30 PM',
      type: 'Consultation',
      agent: 'Michael Brown'
    },
    {
      property: '789 Pine Ave',
      client: 'Thomas Green',
      date: 'March 23, 2025',
      time: '11:15 AM',
      type: 'Viewing',
      agent: 'Jessica Lewis'
    }
  ];

  return (
    <>
      <h2 style={{ marginBottom: '20px' }}>Dashboard</h2>
      
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            icon={stat.icon}
            background={stat.background}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
      
      <PropertyList properties={properties} />
      <AppointmentList appointments={appointments} />
    </>
  );
};

export default Dashboard;

// pages/Dashboard.css
.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
}

// index.jsx - Entry point
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);