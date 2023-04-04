import { Box, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { usePagination, useTable } from "react-table";
import { useState, useEffect } from "react";
import { toggleTransactionDetail } from "../../services/modals";

export default function SubAccountTable(props: any) {
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

  const dispatch = useDispatch();

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
              <th className="">
                <input type="checkbox" className="flex mx-6" />
              </th>
              {headerGroup.headers.map((column: any) => (
                <th
                  key={index}
                  {...column.getHeaderProps()}
                  className="text-xs text-left px-2 py-[18px]"
                >
                  {column.render("Header")}
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, index: any) => {
            prepareRow(row);
            return (
              <tr
                key={index}
                {...row.getRowProps()}
                className="border-b-[1px] border-almostWhite hover:bg-lightGray"
              >
                <td className="pl-6">
                  <input type="checkbox" />
                </td>
                {row.cells.map((cell: any, index: any) => (
                  <td key={index} className="py-[18px]">
                    <Box
                      {...cell.getCellProps()}
                      style={
                        cell.value === "Collections"
                          ? {
                              background: "#EFF8FF",
                              color: "#175CD3",
                              fontWeight: 500,
                            }
                          : cell.value === "Cashout" || cell.value === "Error"
                          ? {
                              background: "#FFF1F3",
                              color: "#C01048",
                              fontWeight: 500,
                            }
                          : cell.value === "Transfer"
                          ? {
                              background: "#F2F4F7",
                              color: "#344054",
                              fontWeight: 500,
                            }
                          : cell.value === "Done" || cell.value === "Successful"
                          ? {
                              background: "#ECFDF3",
                              color: "#027A48",
                              fontWeight: 500,
                            }
                          : {
                              background: "none",
                            }
                      }
                      className="text-sm rounded-3xl w-fit px-2 py-1 text-[#667085] font-normal"
                    >
                      <Text>{cell.render("Cell")}</Text>
                    </Box>
                  </td>
                ))}
                <td
                  className="text-sm pr-10 "
                  // onClick={() => dispatch(toggleTransactionDetail())}
                  onClick={() => console.log(row.values)}
                >
                 <td
                  className="text-sm pr-10"
                  onClick={() => dispatch(toggleTransactionDetail())}
                >
                  <button className="text-[#80B539] font-medium text-base">View</button>
                </td>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
