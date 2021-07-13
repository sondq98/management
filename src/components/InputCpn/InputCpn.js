import './InputCpn.css'

export default function InputCpn(props) {
    return (
        <input className='inputCpn'
            type={props.type}
            placeholder={props.placeholder}
            id={props.id} 
            name={props.name}
            value={props.value}
            />
    )
}
