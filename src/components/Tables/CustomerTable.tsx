import { Box, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { usePagination, useTable } from 'react-table';
import { toggleTransactionDetail } from '../../services/modals'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


export default function CustomerTable(props: any) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, columns, fetchData, pageCount, tableData } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      data,
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount,
    },
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);


  const dispatch = useDispatch()

  return (
    <>
      <table {...getTableProps()} className="w-[100%] bg-white rounded-[10px]">
        <thead className="">
          {headerGroups.map((headerGroup: any, index: any) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-almostWhite text-lightAsh font-semibold"
              key={index}
            >
              {headerGroup.headers.map((column: any) => (
                <th
                  key={index}
                  {...column.getHeaderProps()}
                  className='text-xs text-left px-2 py-[18px] pl-16'
                >
                  {column.render('Header')}
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, index: any) => {
            prepareRow(row)
            return (
              <tr
                key={index}
                {...row.getRowProps()}
                className="border-b-[1px] border-almostWhite hover:bg-lightGray"
              >
                {row.cells.map((cell: any, index: any) => (
                  <td key={index} className="py-[18px]">
                    <Box
                      className="text-sm rounded-3xl w-fit px-2 py-1 text-almostBlack font-normal"
                    >
                      <Text
                        className= 'pl-14'
                      >
                        {cell.render('Cell')}
                      </Text>
                    </Box>
                  </td>
                ))}
                <td className="text-sm pr-10" onClick={() => console.log(row.values)}>
                  <Link to={`/customers/${row.values.status}`}>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
