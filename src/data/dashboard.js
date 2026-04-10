import revenueIcon from '../assets/icon-revenue.svg'
import usersIcon from '../assets/icon-users.svg'
import conversionIcon from '../assets/icon-conversion.svg'

export const stats = [
  { 
    id: 1, 
    label: 'Total Revenue', 
    value: '$45,231.00', 
    change: '+12.5%', 
    positive: true, 
    icon: revenueIcon    // ← actual SVG path now
  },
  { 
    id: 2, 
    label: 'Active Users', 
    value: '12,842', 
    change: '+8.2%', 
    positive: true, 
    icon: usersIcon 
  },
  { 
    id: 3, 
    label: 'Conversion Rate', 
    value: '3.4%', 
    change: '-1.4%', 
    positive: false, 
    icon: conversionIcon 
  },
]

export const chartData = [
  { day: 'MON', current: 20, previous: 40 },
  { day: 'TUE', current: 40, previous: 65 },
  { day: 'WED', current: 30, previous: 45 },
  { day: 'THU', current: 60, previous: 50 },
  { day: 'FRI', current: 70, previous: 75 },
  { day: 'SAT', current: 90, previous: 65 },
  { day: 'SUN', current: 80, previous: 75 },
]

export const transactions = [
  { id: 1, name: 'Alexandre Paiva', email: 'alex@design.co', status: 'Active', lastActive: '2 mins ago', revenue: '$1,450.00', avatar: '1' },
  { id: 2, name: 'Sarah Jenkins', email: 'sarah@fintech.io', status: 'Inactive', lastActive: '4 hours ago', revenue: '$2,890.00', avatar: '2' },
  { id: 3, name: 'David Miller', email: 'd.miller@techhub.com', status: 'Active', lastActive: '12 mins ago', revenue: '$840.50', avatar: '3' },
  { id: 4, name: 'Elena Rodriguez', email: 'elena.r@agency.com', status: 'Suspended', lastActive: '1 day ago', revenue: '$5,200.00', avatar: '4' },
]

export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'analytics', label: 'Analytics', icon: 'analytics' },
  { id: 'reports', label: 'Reports', icon: 'reports' },
  { id: 'users', label: 'Users', icon: 'users' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]