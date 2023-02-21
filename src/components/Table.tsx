import React from 'react';

const tableData = [
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
    {
        id: 'AC100-FR234536543',
        name: 'Park Avenue Condominius',
        address: '432 Park Ave, New York, NY 10022',
        type: 'Residential Building',
        status: 'Operational'
    },
]


const Table = () => {
    return (
        <div className='py-8 w-full'>
            <table className='w-full'>
                <thead className='bg-gray-100'>
                    <tr className='text-sm font-semibold border-b border-gray-200 text-gray-700'>
                        <th className='w-60 py-4 text-center'>
                            <div className='flex items-center justify-center gap-x-2'>
                                <input type='checkbox' />
                                <span>Place ID</span>
                            </div>
                        </th>
                        <th className='text-center'>
                            <span>Place Name</span>
                        </th>
                        <th className='text-center'>
                            <span>Address</span>
                        </th>
                        <th className='text-center'>
                            <span>Place Type</span>
                        </th>
                        <th className='text-center w-40'>
                            <span>Status</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                {
                    tableData.map((el,index) => <tr key={index} className='text-sm font-medium border-b border-gray-200 text-gray-700'>
                    <td className='py-4 text-center'>
                        <div className='flex items-center justify-center gap-x-2'>
                            <input type='checkbox' />
                            <span>{el.id}</span>
                        </div>
                    </td>
                    <td className='py-4 text-center'>
                        <span>{el.name}</span>
                    </td>
                    <td className='py-4 text-center font-normal'>
                        <span>{el.address}</span>
                    </td>
                    <td className='py-4 text-center'>
                        <span className='bg-slate-50 p-2 border rounded uppercase'>{el.type}</span>
                    </td>
                    <td className='py-4 text-center'>
                        <span className='bg-green-100 text-green-600 p-2 rounded uppercase'>{el.status}</span>
                    </td>
                </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;