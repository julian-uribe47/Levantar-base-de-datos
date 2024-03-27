import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: 'gema del alma', complete: true },
            { description: 'gema del poder' },
            { description: 'gema del tiempo' },
            { description: 'gema del espacio' },
            { description: 'gema de la realidad' },
            
        ]
    })




  return NextResponse.json({ message: 'Seed executed' })
}