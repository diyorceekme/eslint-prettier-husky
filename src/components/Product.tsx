import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  editButton: {
    background: "transparent",
    padding: 0,
    border: "none",
    cursor: "pointer",
  },
  titleRows: {
    color: "#065374 !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    fontSize: "17px !important",
    margin: 0,
    paddingTop: "0 !important",
  },
  forValueCols: {
    color: "#000 !important",
    fontSize: "17px !important",
    fontFamily: "Poppins !important",
    fontWeight: "300 !important",
    margin: 0,
  },
  brandImages: {
    width: "50px !important",
    height: "50px !important",
    borderRadius: "5px !important",
  },
  forCell: {
    display: "block !important",
    margin: "auto !important",
  },
});

const getProduct = () => axios.get("https://api.yengilcredit.uz/product/list");

function Product(): JSX.Element {
  const { data, isLoading, isError } = useQuery("product", getProduct);
  const classes = useStyles();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <Container maxWidth="xl" style={{ marginTop: "100px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </TableCell>
            <TableCell className={classes.titleRows} align="center">
              Rasmi
            </TableCell>
            <TableCell className={classes.titleRows} align="center">
              Nomi
            </TableCell>
            <TableCell className={classes.titleRows} align="center">
              Soni
            </TableCell>
            <TableCell className={classes.titleRows} align="center">
              Amallar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((element: any) => (
            <TableRow style={{ alignItems: "center" }}>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              <TableCell className={classes.forCell}>
                <img
                  // src={`${MINIO_FULL_ENDPOINT_FOR}/brand/${item.photo_name}`}
                  alt="img"
                  className={classes.brandImages}
                />
              </TableCell>
              <TableCell
                className={classes.forValueCols}
                style={{ textAlign: "center" }}
              >
                {" "}
                {element.name}
              </TableCell>
              <TableCell
                className={classes.forValueCols}
                style={{ textAlign: "center" }}
              >
                {" "}
                {element.products_count}
              </TableCell>
              <TableCell>
                {/* <Link to={`/brand/admin/edit-page/${item.id}`}> */}
                {/* <Tooltip title="Edit"> */}
                {/* <button
                      className={classes.editButton}
                      onClick={getBrandToUpdate}
                    >
                      <img src={edit} alt="rasm bor edi" />
                    </button> */}
                {/* </Tooltip> */}
                {/* </Link> */}
                {/* <Modal data={delData} to="brand" /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
export default Product;
