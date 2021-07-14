import InputCpn from '../InputCpn/InputCpn'

import './AuthenFormGroup.css';

export default function AuthenFormGroup(props) {
    return (
        <div className="authen-FormGroup">
            <label htmlFor={props.title} className="loginForm-Label">{props.title}</label>
            <InputCpn type="text"
                id={props.title}
                name={props.title}
                value=""
                placeholder={'Please enter ' + props.title}>
            </InputCpn>
            <span className="authen-FormGroupNoti"></span>
        </div>
    )
}