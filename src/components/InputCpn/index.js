import "./style.css";

export default function InputCpn(props) {
  return (
    <input
      className={`inputCpn ${props?.className}`}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      value={props.value}
      style={{
        ...props.style,
        width:
          props.size === "small" ? "110px"
          : props.size === "medium" ? "250px"  
          : props.size === "large" ? "330px"
          : "100%",  
        }}
    />
  );
}
