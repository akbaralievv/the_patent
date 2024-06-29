import React from 'react';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../../redux/services/userApi';

interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
  phone: string;
  roles: { id: number; name: string }[];
}

const TableTwo: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery(null);
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id).unwrap();
      // Дополнительно можно обновить данные, если потребуется
      // Здесь можно вызвать повторный запрос или обновить состояние
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Список пользователей
        </h4>
      </div>

      <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Логин</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Имя</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Удалить пользователя</p>
        </div>
      </div>

      {data?.map((user: User) => (
        <div
          className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5"
          key={user.id}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">{user.email}</p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {user.name} {user.surname}
            </p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p
              className="text-sm text-red-500 border-b cursor-pointer"
              onClick={() => handleDelete(user.id)}
            >
              Удалить пользователя
            </p>
          </div>
        </div>
      ))}
      {data?.length === 0 && (
        <div className="flex justify-center items-center min-h-40">
          <h3 className="font-semibold">Список пуст</h3>
        </div>
      )}
    </div>
  );
};

export default TableTwo;
