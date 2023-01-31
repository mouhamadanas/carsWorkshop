import { Box, CircularProgress, Dialog, Divider } from "@mui/material";
import useGetData from "hooks/useGetData";
import { useState } from "react";
import style from "./style.module.scss";

const modalStyles = {
  width: { xs: "90%", md: "700px" },
  height: "300px",
  padding: { md: "20px 40px", xs: "10px 20px" },
  minWidth: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "& h2": {
    textAlign: "center",
    margin: "5px 0",
    color: "#F3EFF5",
  },
};
const RadioDialog = ({ open, setOpen, sendValue, url }) => {
  const [value, setValue] = useState("");
  const { data, loading } = useGetData(url);
  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "none",
          borderRadius: " 40px",
          backgroundColor: "#0D0A0B",
          border: "2px solid #F3EFF5",
        },
        "& h2": {
          fontSize: "0.9em",
        },
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={modalStyles}>
        <h2>يرجى اختيار المالك</h2>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#F3EFF5",
            height: "500px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: loading && "center",
            flexDirection: "column",
            alignItems: "center",

            p: 2,
          }}
        >
          {loading ? (
            <CircularProgress sx={{ color: "#0D0A0B " }} />
          ) : (
            data?.map((d, i) => (
              <Box
                onClick={() => setValue(d.name)}
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    color: value === d?.name ? "#0D0A0B" : "#3F7D20",
                    margin: "3px 0",
                    cursor: "pointer",
                    textAlign: "end",
                  }}
                >
                  {d?.name}
                </Box>
                <Divider variant="fullWidth" sx={{ color: "#0D0A0B " }} />
              </Box>
            ))
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "row-reverse",
            margin: "5px 0 0 auto",
            width: { md: "30%", xs: "100%" },
          }}
        >
          <button
            className={style.saveButton}
            onClick={() => {
              value !== "" && sendValue(value);
              setOpen(false);
            }}
            variant="contained"
          >
            موافق
          </button>
          <button className={style.cancelButton} onClick={() => setOpen(false)}>
            الغاء الامر
          </button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default RadioDialog;
