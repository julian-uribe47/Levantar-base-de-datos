export const dynamic = 'force-dynamic'
export const revalidate = 0


import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";



export const metadata = {
  title: 'Listado de TODOS',
  description: 'SEO Title',
};


export default async function RestTodosPage() {

  const user = await getUserSessionServer();

  if( !user ) redirect('/api/auth/signin');

  const todos = await prisma.todo.findMany({ 
    where: { userId: user.id },
    orderBy: { description: 'asc' } });

  return (
    <div>
      <div className=" py-2 m-4 px-6 w-full">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}