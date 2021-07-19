import { MenuItem, Select } from "@material-ui/core";

function StyledSelect(props) {
  return (
    <Select
      {...props}
      sx={{
        backgroundColor: "transparent",
        width: props?.size === "small" ? "50px" : "250px",
        height: "40px",
        border: "2px solid #72ACFF",
        borderRadius: "8px",
        "& > div": {
          paddingLeft: "10px",
        },
        "& > div:focus": {
          backgroundColor: "transparent",
        },
      }}
      variant="standard"
      disableUnderline={true}
    >
      {props.data.map((ele, index) => (
        <MenuItem
          key={index}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          }}
          value={ele.toString().toLowerCase()}
        >
          {ele}
        </MenuItem>
      ))}
    </Select>
  );
}

export default StyledSelect;
