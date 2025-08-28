
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Login endpoint - please use NextAuth.js signin' 
  })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Login endpoint - please use NextAuth.js signin' 
  })
}
