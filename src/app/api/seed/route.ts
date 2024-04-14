import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

    await prisma.todo.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            email: 'solomeo@google.com',
            password: bcrypt.hashSync('123456'),
            roles: ['admin', 'client', 'super-user'],
            todos: {
                create: [
                    { description: 'gema del alma', complete: true },
                    { description: 'gema del poder' },
                    { description: 'gema del tiempo' },
                    { description: 'gema del espacio' },
                    { description: 'gema de la realidad' }
                ]
            }
        }
    })

    // await prisma.todo.createMany({
    //     data: [
    // { description: 'gema del alma', complete: true },
    // { description: 'gema del poder' },
    // { description: 'gema del tiempo' },
    // { description: 'gema del espacio' },
    // { description: 'gema de la realidad' },

    //     ]
    // })




    return NextResponse.json({ message: 'Seed executed' })
}