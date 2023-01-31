import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import style from "./style.module.scss";
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#0D0A0B",
      textAlign: "end",
    },
  },
};
const CustomSelect = ({ label, value, setValue, hasThreeDots, isSmall }) => {
  return (
    <Box className={style.customInput}>
      <label>{label}</label>
      <Box dir="rtl" width="75%">
        <Select
          fullWidth
          sx={{
            width: "100%",
            "& .MuiSelect-select": {
              padding: "4.5px 14px",
            },
            background: "#3F7D20",
            border: "2px solid #72B01D",
            borderRadius: "10px",
            "& .MuiInputBase-input,& .Mui-disabled": {
              textAlign: "center",
              color: "white",
              fontWeight: "600",
              "-webkit-text-fill-color": "white",
            },
          }}
          MenuProps={MenuProps}
          IconComponent={() => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "35px",
                width: "40px",
                backgroundColor: "#0D0A0B",
                borderRadius: "10px",
                borderRight: "2px solid #72B01D ",
              }}
            >
              <ExpandMoreIcon
                sx={{
                  position: "relative",
                  tight: "-10px",
                  color: "#72B01D",
                }}
              />
            </Box>
          )}
        >
          <MenuItem
            value="ب"
            sx={{
              color: "#F3EFF5",
              textAlign: "center",
              "&.MuiMenuItem-root": {
                justifyContent: "flex-end",
              },
            }}
          >
            تعمل
          </MenuItem>
          <MenuItem
            value="بس"
            sx={{
              color: "#F3EFF5",
              textAlign: "center",
              "&.MuiMenuItem-root": {
                justifyContent: "flex-end",
              },
            }}
          >
            لا تعمل
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default CustomSelect;
