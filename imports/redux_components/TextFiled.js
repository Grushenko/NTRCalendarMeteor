import React, { Component } from 'react'

import NTextField from 'material-ui/TextField'

export default class TextFiled extends Component {

    render() {
        let { input, meta, ...props } = this.props
        let { value, onChange, onFocus, onBlur } = input
        let { error, dirty, touched } = meta
        return (
            <NTextField
                {...props}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                errorText={touched && error ? error : undefined}
            />
        )
    }
}