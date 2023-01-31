import { Box, Input } from "@mui/material";
import style from "./style.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Dots = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        height: "33px",
        width: "33px",
        backgroundColor: "#0D0A0B",
        borderRadius: "10px",
        borderRight: "2px solid #72B01D ",
      }}
    >
      <MoreHorizIcon sx={{ color: "#72B01D" }} />
    </Box>
  );
};
const CustomInput = ({ label, value, setValue, hasThreeDots, isSmall }) => {
  return (
    <Box className={style.customInput}>
      <label>{label}</label>
      <Input
        sx={{
          width: !isSmall ? "75%" : "30%",
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
        // endAdornment={}
        startAdornment={hasThreeDots && <Dots />}
        disabled
        disableUnderline
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default CustomInput;
