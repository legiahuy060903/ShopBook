
import React, { useState } from 'react';

import { Rate } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
const CustomRate = ({ name, placeholder, ...rest }) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <div className='w-100'>
            <Controller
                control={control}
                name={name}
                defaultValue={5}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Rate
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        className='w-100 text-center'
                        defaultValue={5}
                    />
                )}
            />
            {errors && <div className='text-message p-2'>{errors[name]?.message}</div>}
        </div>

    )
}

export default CustomRate