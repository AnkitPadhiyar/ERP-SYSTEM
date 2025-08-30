import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    
    // Test the connection by listing collections
    const collections = await db.listCollections().toArray()
    
    return NextResponse.json({
      status: 'Connected to MongoDB successfully!',
      database: 'erp-system',
      collections: collections.map(col => col.name),
      message: 'Database connection is working properly'
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to connect to database',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
