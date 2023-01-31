import { Box, Grid } from "@mui/material";
import CustomSelect from "components/cusomSelect";
import CustomInput from "components/customInput";
import style from "./style.module.scss";
import produceImage from "assets/images/produceImage.jpg";
import { useState } from "react";
import RadioDialog from "components/radioDialog";
const Card = () => {
  const [brandDialog, setOpenBrandDialog] = useState(false);
  const [ownerDialog, setOpenOwnerDialog] = useState(false);
  const [brandState, setBrandState] = useState("");
  const [ownersState, setownersState] = useState("");

  return (
    <Box className={style.pagesContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className={style.cardTitle}>بطاقة قطعة</h1>
        </Grid>
        <Grid item xs={12} sx={{ margin: { md: "50px 0" } }}>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item md={6} xs={12}>
              <Box
                className={style.imageContainer}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <p className={style.imageTitle}> صورة القطعة</p>
                <img src={produceImage} alt="" className={style.productImage} />
              </Box>
            </Grid>
            <Grid item md={5} xs={12}>
              <Grid container rowSpacing={1.4} justifyContent="flex-end">
                <Grid item xs={12}>
                  <CustomInput label="رمز البطاقة" value="dfs" isSmall />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="الوصف" />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="الاسم اللاتيني" />
                </Grid>
                <Grid item xs={12} onClick={() => setOpenBrandDialog(true)}>
                  <CustomInput
                    label="الماركة"
                    hasThreeDots
                    value={brandState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="الموديل" hasThreeDots />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="الرقم التسلسلي" hasThreeDots />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="معرف القطعة" hasThreeDots />
                </Grid>
                <Grid item xs={12}>
                  <CustomSelect label="الحالة" />
                </Grid>
                <Grid item xs={12} onClick={() => setOpenOwnerDialog(true)}>
                  <CustomInput
                    label="المالك"
                    hasThreeDots
                    value={ownersState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="اللون" />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="سنة التصنيع" />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="الفرش" />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput label="الوقود" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Grid item md={1.5} xs={6}>
                  <button className={style.closeButton}>اغلاق</button>
                </Grid>
                <Grid item md={1.5} xs={6}>
                  <button className={style.deleteButton}>حذف</button>
                </Grid>
                <Grid item md={1.5} xs={6}>
                  <button className={style.saveButton}>حفظ</button>
                </Grid>
                <Grid item md={1.5} xs={6}>
                  <button className={style.newButton}>جديد</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <RadioDialog
        url="https://easybooks.me/codechallenge/code-challenge.php?get=brands"
        open={brandDialog}
        setOpen={setOpenBrandDialog}
        sendValue={setBrandState}
      />
      <RadioDialog
        url="https://easybooks.me/codechallenge/code-challenge.php?get=owners"
        open={ownerDialog}
        setOpen={setOpenOwnerDialog}
        sendValue={setownersState}
      />
    </Box>
  );
};

export default Card;
