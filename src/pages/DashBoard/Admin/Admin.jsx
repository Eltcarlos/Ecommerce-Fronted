import React from "react";
import { Box, useTheme } from "@mui/material";

import { LayoutDashBoard } from "../../../layout/LayoutDashBoard";
import { useGetAdminsQuery } from "../../../store/api/api";
import Header from "../../../components/Header";
import Table1 from "../../../components/Tables/Table";

export const Admin = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading } = useGetAdminsQuery(token);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value && params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <LayoutDashBoard>
      <Box m="1.5rem 2.5rem">
        <Header title="ADMINS" subtitle="Managing admins and list of admins" />
        <Box mt="40px" height="75vh">
          <Table1 rows={data || []} columns={columns} />
        </Box>
      </Box>
    </LayoutDashBoard>
  );
};
