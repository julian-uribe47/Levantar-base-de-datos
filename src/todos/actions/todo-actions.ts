'use server';

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const todo = await prisma.todo.findFirst({ where: { id } });
    if (!todo) {
        throw `Todo con id ${id} no existe`;
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    });
    revalidatePath('/dashboard/rest-todos');
    return updatedTodo;
}

export const createTodo = async (description: string, userId: string) => {

    try {

        const todo = await prisma.todo.create({ data: { description, userId: '...' } })
        revalidatePath('/dashboard/rest-todos');
        return todo;
    } catch (error) {
        return {
            message: 'Error creando todo'
        }
    }
}

export const deleteCompleted = async (): Promise<void> => {


    await prisma.todo.deleteMany({ where: { complete: true } })
    revalidatePath('/dashboard/rest-todos');

}



