import React from "react";
import { LayoutDashBoard } from "../../layout/LayoutDashBoard";
import { Box, Divider } from "@mui/material";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { useSelector } from "react-redux";
import { useGetClientIDQuery } from "../../store/api/api";
import { PasswordDetails } from "../../components/PersonalDetails/PasswordDetails";

export const AccountSettings = () => {
  const { uid } = useSelector((state) => state.authState);
  const { data } = useGetClientIDQuery(uid, {
    refetchOnMountOrArgChange: true,
  });
  return (
    <LayoutDashBoard>
      <Box m="1.5rem 2.5rem">
        <Divider />
        <PersonalDetails data={data || {}} />
        <Divider />
        <PasswordDetails data={data || {}} />
      </Box>
    </LayoutDashBoard>
  );
};
