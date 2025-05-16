import { findAllUsers } from "@/models/User";
import FormCreateUser from "@/app/components/forms/FormCreateUser";
import { Suspense } from "react";

export const dynamic = "force-dynamic"; // Asegura que la página siempre sea generada dinámicamente

function UserListTable({ users = [] }) {
  return users.length === 0 ? (
    <div className="bg-blue-50 text-blue-600 p-4 rounded-md">
      No hay usuarios registrados aún.
    </div>
  ) : (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Edad
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map(user => (
            <tr key={user._id.toString()} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {user.email || 'N/A'}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {user.age || 'N/A'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

async function UserList() {
  let users = [];
  let error = null;
  
  try {
    users = await findAllUsers(20);
  } catch (err) {
    console.error("Error fetching users:", err);
    error = "No se pudieron cargar los usuarios. Por favor, intenta de nuevo más tarde.";
  }
  
  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        {error}
      </div>
    );
  }
  
  return <UserListTable users={users} />;
}

export default function UserPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Gestión de Usuarios</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Listado de Usuarios</h2>
          <Suspense fallback={<div className="p-4 bg-gray-100 rounded-lg">Cargando usuarios...</div>}>
            <UserList />
          </Suspense>
        </div>
        
        <div>
          <FormCreateUser />
        </div>
      </div>
    </div>
  );
} 