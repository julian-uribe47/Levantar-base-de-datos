import { TopMenu } from '@/components';
import { Sidebar } from '@/components/sidebar/Sidebar';


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidebar />

            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

                
                <TopMenu />

                {/* TODO: Contenido en el Layout.tsx */}
                <div className="px-6 pt-6 bg-white p-4 m-4 rounded pb-6">
                    { children }

                    
                </div>
            </div>
        </>
    );
}