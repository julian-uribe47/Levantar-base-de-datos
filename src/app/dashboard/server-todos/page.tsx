export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";



export const metadata = {
  title: 'Listado de TODOS',
  description: 'SEO Title',
};


export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });


  return (
    <>
      <span className=" text-3xl mb-10">Server Actions</span>
      <div className=" py-2 m-4 px-6 w-full">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>

  );
}