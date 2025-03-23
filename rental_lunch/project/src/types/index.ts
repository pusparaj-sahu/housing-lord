export interface Property {
  image: string;
  address: string;
  price: string;
  type: string;
  status: string;
  statusClass: string;
  agent: string;
}

export interface Appointment {
  property: string;
  client: string;
  date: string;
  time: string;
  type: string;
  agent: string;
}

export interface StatCardProps {
  icon: string;
  background: string;
  value: string;
  label: string;
}

export interface PropertyListProps {
  properties: Property[];
}

export interface AppointmentListProps {
  appointments: Appointment[];
}

export interface Favorite {
  id: string;
  user_id: string;
  property_id: string;
  created_at: string;
}