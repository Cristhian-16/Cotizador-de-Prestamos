import React from 'react'

export const InputChange = ({ fn, max, min, step, value }) => {
    return (
        <>
            <input
                onChange={fn}
                type="range"
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                min={min}
                max={max}
                step={step}
                value={value}
            />
        </>
    )
}
