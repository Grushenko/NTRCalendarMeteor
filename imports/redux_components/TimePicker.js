import React, { Component } from 'react'

import NTimePicker from 'material-ui/TimePicker'

export default class TimePicker extends Component {

    render() {
        let { input, meta, ...props } = this.props
        let { value, onChange, onFocus, onBlur } = input
        let { error, dirty } = meta
        return (
            <NTimePicker
                {...props}
                onChangeText={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
            />
        )
    }
}