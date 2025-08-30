import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Employee } from '@/lib/types'
import { ObjectId } from 'mongodb'

// GET all employees
export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const employees = await db.collection('employees').find({}).toArray()
    
    return NextResponse.json(employees)
  } catch (error) {
    console.error('Error fetching employees:', error)
    return NextResponse.json(
      { error: 'Failed to fetch employees' },
      { status: 500 }
    )
  }
}

// POST create new employee
export async function POST(request: NextRequest) {
  try {
    const { db } = await connectToDatabase()
    const body = await request.json()
    
    const newEmployee: Employee = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const result = await db.collection('employees').insertOne(newEmployee)
    
    return NextResponse.json(
      { message: 'Employee created successfully', id: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating employee:', error)
    return NextResponse.json(
      { error: 'Failed to create employee' },
      { status: 500 }
    )
  }
}
