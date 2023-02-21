import React from 'react';
import { BsCheckCircleFill, BsFilterLeft } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { FiFilter } from 'react-icons/fi';
import { BiFilter } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';

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


const tableN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];


const Table = () => {
    return (
        <div className='py-4 w-full'>
            <div className='flex items-center justify-between p-4'>
                <h1 className='font-medium text-xl'>Places</h1>
                <div className='flex gap-2 items-center justify-start'>
                    <div className='flex gap-2 items-center justify-start py-6 pl-20 relative'>
                        <CiSearch className='text-2xl absolute text-gray-400 pl-1'/>
                        <input type='text' placeholder='Search' className='w-40 border px-6 text-sm font-medium h-8 rounded'/>
                    </div>
                    <button className='border p-2 rounded'>
                        <FiFilter className='text-md' />
                    </button>
                    <div className='flex'>
                        <button className='bg-gray-200 p-2 rounded-l'>
                            <BiFilter className='text-md'/>
                        </button>
                        <button className='border border-l-0 p-2 rounded-r'>
                            <BsFilterLeft className='text-md'/>
                        </button>
                    </div>
                    <button className='bg-rose-500 w-24 h-10 text-white text-sm font-medium rounded-md'>Add Places</button>
                </div>
            </div>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-100 text-sm font-semibold border-b border-gray-200 text-gray-700'>
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
                    tableData.map((el,index) => <tr key={index} className='text-sm font-medium border-b border-gray-200 text-gray-700 bg-transparent hover:bg-gray-50'>
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
            {/* className='bg-green-200 py-0 px-2 text-sm font-medium' */}
            <div className='flex items-center justify-between py-8 px-4'>
                <div className='shadow-md px-12 py-4 relative'>
                <RxCross2  className='text-slate-500 absolute top-0 right-0'/>
                    <div className='flex gap-2 items-center justify-start'>
                            <BsCheckCircleFill className='text-green-500' />
                            <p className='text-sm font-semibold'>New property has been created</p>
                    </div>
                    <div className='flex items-center gap-2 justify-start pl-6'>
                        <button className='text-rose-600 text-sm font-medium'>Open</button>
                        <button className='text-slate-600 text-sm font-medium'>Dismiss</button>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='py-0 px-2 text-sm font-normal'>Showing <span className='font-medium'>1 of 10</span></p>
                    <div className='flex gap-2 border-b'>
                        <button className='py-0 px-2 text-sm font-medium bg-transparent'>Prev</button>
                        {
                            tableN.slice(0,4).map((i,index) => <button 
                            className={`py-0 px-2 text-sm font-medium ${index === 0 ? 'bg-red-100 text-red-500' : 'bg-transparent'}`} 
                            key={index}>{i}</button>)
                        }
                        <button>...</button>
                        <button className='py-0 px-2 text-sm font-medium bg-transparent'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;