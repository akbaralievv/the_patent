import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  useApprovePatentMutation,
  useGetPatentsQuery,
  useRejectedPatentMutation,
} from '../../redux/services/patentsApi';

// Определите интерфейсы для ваших данных
interface PatentType {
  id: number;
  name: string;
}

interface Applicant {
  id: number;
  applicantType: {
    id: number;
    name: string;
  };
  full_name: string;
  applicant_address: string;
  applicant_code: string;
  applicant_country: {
    id: number;
    name: string;
  };
  applicant_email: string;
  applicant_nationality: string;
  applicant_number: string;
}

interface PatentAttorney {
  id: number;
  attorney_name: string;
  licenseNumber: string;
  attorney_address: string;
  attorney_email: string;
  attorney_phoneNumber: string;
}

interface Patent {
  id: number;
  patentType: PatentType;
  title: string;
  description: string;
  mktuClass: {
    id: number;
    name: string;
  };
  applicant: Applicant;
  patentAttorney: PatentAttorney;
  status: string;
  submissionDate: string;
}

// Обновите колонки для DataGrid
// const columns: GridColDef[] = [
//   { field: 'id', headerName: '№', width: 70 },
//   {
//     field: 'patentType',
//     headerName: 'Тип объекта',
//     width: 200,
//     // valueGetter: (params) =>
//     //   params.row.patentType ? params.row.patentType.name : 'Неизвестно', // Преобразование типа
//   },
//   {
//     field: 'title',
//     headerName: 'Название',
//     width: 300,
//   },
//   {
//     field: 'submissionDate',
//     headerName: 'Дата подачи',
//     width: 190,
//     // valueGetter: (params) =>
//     //   params.row.submissionDate
//     //     ? new Date(params.row.submissionDate).toLocaleDateString()
//     //     : 'Неизвестно', // Преобразование типа
//   },
//   {
//     field: 'status',
//     headerName: 'Статус',
//     width: 190,
//   },
//   {
//     field: 'actions',
//     headerName: 'Действия',
//     width: 200,
//     renderCell: (params) => {
//       const { id } = params.row as Patent;
//       return (
//         <div>
//           <button
//             onClick={() => params.handleReject(id)}
//             className="mr-2 bg-red-500 text-white px-3 py-1 rounded"
//           >
//             Отказать
//           </button>
//           <button
//             onClick={() => params.handleApprove(id)}
//             className="bg-green-500 text-white px-3 py-1 rounded"
//           >
//             Одобрить
//           </button>
//         </div>
//       );
//     },
//   },
// ];

const TableOne: React.FC = () => {
  const { data, error, isLoading } = useGetPatentsQuery(undefined);
  const [rejectedPatent] = useRejectedPatentMutation();
  const [approvePatent] = useApprovePatentMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  const rows =
    data?.map((patent: Patent) => ({
      id: patent.id,
      patentType: patent.patentType.name,
      title: patent.title,
      submissionDate: patent.submissionDate + '',
      status: patent.status,
    })) || [];

  const handleReject = async (id: number) => {
    try {
      await rejectedPatent(id).unwrap();
      // Обновление данных после отклонения патента
    } catch (err) {
      console.error('Failed to reject patent:', err);
    }
  };

  const handleApprove = async (id: number) => {
    try {
      await approvePatent(id).unwrap();
      // Обновление данных после одобрения патента
    } catch (err) {
      console.error('Failed to approve patent:', err);
    }
  };
  const columns: GridColDef[] = [
    { field: 'id', headerName: '№', width: 70 },
    {
      field: 'patentType',
      headerName: 'Тип объекта',
      width: 200,
      // valueGetter: (params) =>
      //   params.row.patentType ? params.row.patentType.name : 'Неизвестно', // Преобразование типа
    },
    {
      field: 'title',
      headerName: 'Название',
      width: 300,
    },
    {
      field: 'submissionDate',
      headerName: 'Дата подачи',
      width: 190,
      // valueGetter: (params) =>
      //   params.row.submissionDate
      //     ? new Date(params.row.submissionDate).toLocaleDateString()
      //     : 'Неизвестно', // Преобразование типа
    },
    {
      field: 'status',
      headerName: 'Статус',
      width: 190,
    },
    {
      field: 'actions',
      headerName: 'Действия',
      width: 200,
      renderCell: (params) => {
        const { id } = params.row as Patent;
        return (
          <div>
            <button
              onClick={() => handleReject(id)}
              className="mr-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Отказать
            </button>
            <button
              onClick={() => handleApprove(id)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Одобрить
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Список патентов
      </h4>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
};

export default TableOne;
