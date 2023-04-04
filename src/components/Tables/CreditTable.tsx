import { Box, Text } from '@chakra-ui/react'
import { Link  } from 'react-router-dom'

export default function CreditTable(props: any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = props

  return (
    <>
      <table {...getTableProps()} className="w-[100%]">
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
                  className="text-xs text-left py-[18px] pl-10"
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
                  <td
                    key={index}
                    className="py-[16px]"
                    {...cell.getCellProps()}
                  >
                    <Box
                      {...cell.getCellProps()}
                      className="text-sm rounded-3xl w-fit px-2 py-1 text-almostBlack font-normal"
                    >
                      <Text className="ml-8">{cell.render('Cell')}</Text>
                    </Box>
                  </td>
                ))}
                <td className="text-sm px-10">
                  <Link to={`/credit/${row.values.status}`}>
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
