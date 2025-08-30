import { ObjectId } from 'mongodb'

// Employee Types
export interface Employee {
  _id?: ObjectId
  employeeId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  department: string
  position: string
  hireDate: Date
  salary: number
  status: 'active' | 'inactive' | 'terminated'
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  emergencyContact: {
    name: string
    relationship: string
    phone: string
  }
  createdAt: Date
  updatedAt: Date
}

// Department Types
export interface Department {
  _id?: ObjectId
  name: string
  description: string
  managerId?: string
  budget: number
  createdAt: Date
  updatedAt: Date
}

// Attendance Types
export interface Attendance {
  _id?: ObjectId
  employeeId: string
  date: Date
  checkIn: Date
  checkOut?: Date
  status: 'present' | 'absent' | 'late' | 'half-day'
  notes?: string
  createdAt: Date
}

// Leave Types
export interface Leave {
  _id?: ObjectId
  employeeId: string
  type: 'sick' | 'vacation' | 'personal' | 'maternity' | 'paternity'
  startDate: Date
  endDate: Date
  status: 'pending' | 'approved' | 'rejected'
  reason: string
  approvedBy?: string
  createdAt: Date
  updatedAt: Date
}

// Payroll Types
export interface Payroll {
  _id?: ObjectId
  employeeId: string
  month: number
  year: number
  basicSalary: number
  allowances: number
  deductions: number
  netSalary: number
  status: 'pending' | 'paid'
  paidDate?: Date
  createdAt: Date
  updatedAt: Date
}

// Inventory Types
export interface InventoryItem {
  _id?: ObjectId
  itemCode: string
  name: string
  description: string
  category: string
  quantity: number
  unitPrice: number
  supplier: string
  location: string
  minStockLevel: number
  maxStockLevel: number
  status: 'active' | 'inactive' | 'discontinued'
  createdAt: Date
  updatedAt: Date
}

// Sales Types
export interface Sale {
  _id?: ObjectId
  orderId: string
  customerId: string
  customerName: string
  items: Array<{
    itemId: string
    name: string
    quantity: number
    unitPrice: number
    total: number
  }>
  totalAmount: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  orderDate: Date
  deliveryDate?: Date
  createdAt: Date
  updatedAt: Date
}

// Finance Types
export interface Transaction {
  _id?: ObjectId
  transactionId: string
  type: 'income' | 'expense'
  category: string
  amount: number
  description: string
  date: Date
  status: 'pending' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}
