import { Input } from "@material-ui/core";

function StyledInput(props) {
  return (
    <Input
      color="primary"
      sx={{
        border: "2px solid #72ACFF",
        height: "40px",
        paddingLeft: "8px",
        borderRadius: "8px",
        width:
          props.size === "small"
            ? "110px"
            : props.size === "medium"
            ? "250px"
            : "400px",
        "&:focus": {
          boxShadow: "0 0 3px 2px #72ACFF",
        },
      }}
      disableUnderline={true}
      {...props}
      onChange={props.handleChange}
    />
  );
}

export default StyledInput;
