import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";



export const metadata = {
  title: 'Listado de TODOS',
  description: 'SEO Title',
};


export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });


  return (
    <div>
      <div className=" py-2 m-4 px-6 w-full">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}