import React from 'react'
import PropTypes from 'prop-types'
const TextInputGroup = ({
    label,
    id,
    name,
    value,
    placeholder,
    type,
    onChange
}) => {
    return (
            <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input name={name} id={id} type={type} className="form-control form-control-lg" placeholder={placeholder}
            value={value}
            onChange = {onChange}
            />
            </div>
    )
}

TextInputGroup.propTypes = {
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
    type:'text'
}
export default TextInputGroup; 
