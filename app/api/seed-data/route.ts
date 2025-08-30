import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Employee } from '@/lib/types'

const sampleEmployees: Omit<Employee, '_id' | 'createdAt' | 'updatedAt'>[] = [
  {
    employeeId: 'EMP001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1-555-0123',
    department: 'IT',
    position: 'Senior Developer',
    hireDate: new Date('2022-01-15'),
    salary: 85000,
    status: 'active',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1-555-0124'
    }
  },
  {
    employeeId: 'EMP002',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    phone: '+1-555-0125',
    department: 'Marketing',
    position: 'Marketing Manager',
    hireDate: new Date('2021-08-20'),
    salary: 75000,
    status: 'active',
    address: {
      street: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Mike Smith',
      relationship: 'Spouse',
      phone: '+1-555-0126'
    }
  },
  {
    employeeId: 'EMP003',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@company.com',
    phone: '+1-555-0127',
    department: 'Sales',
    position: 'Sales Representative',
    hireDate: new Date('2023-03-10'),
    salary: 55000,
    status: 'active',
    address: {
      street: '789 Pine Street',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Sarah Johnson',
      relationship: 'Spouse',
      phone: '+1-555-0128'
    }
  },
  {
    employeeId: 'EMP004',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@company.com',
    phone: '+1-555-0129',
    department: 'HR',
    position: 'HR Specialist',
    hireDate: new Date('2022-11-05'),
    salary: 65000,
    status: 'active',
    address: {
      street: '321 Elm Street',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      country: 'USA'
    },
    emergencyContact: {
      name: 'David Wilson',
      relationship: 'Spouse',
      phone: '+1-555-0130'
    }
  }
]

export async function POST() {
  try {
    const { db } = await connectToDatabase()
    
    // Check if employees already exist
    const existingCount = await db.collection('employees').countDocuments()
    
    if (existingCount > 0) {
      return NextResponse.json({
        message: 'Sample data already exists',
        existingEmployees: existingCount
      })
    }
    
    // Add sample employees with timestamps
    const employeesWithTimestamps = sampleEmployees.map(emp => ({
      ...emp,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    
    const result = await db.collection('employees').insertMany(employeesWithTimestamps)
    
    return NextResponse.json({
      message: 'Sample data seeded successfully!',
      insertedCount: result.insertedCount,
      insertedIds: result.insertedIds
    })
  } catch (error) {
    console.error('Error seeding data:', error)
    return NextResponse.json(
      { error: 'Failed to seed sample data' },
      { status: 500 }
    )
  }
}
