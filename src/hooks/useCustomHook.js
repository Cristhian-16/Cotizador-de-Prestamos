import { useState, useEffect } from "react"
import { calcTotalPago } from "../helpers"

export const useCustomHook = () => {
    const [rangeValue, setRangeValue] = useState(10000)
    const [meses, setMeses] = useState(6)
    const [total, setTotal] = useState(0)
    const [pago, setPago] = useState(0)



    const min = 0
    const max = 20000
    const step = 100


    useEffect(() => {
        const result = calcTotalPago(rangeValue, meses)
        setTotal(result)


        const pagoMensual = Math.floor(total / meses)
        setPago(pagoMensual)
    }, [rangeValue, meses, total])


    const onInputChange = (e) => {
        setRangeValue(+e.target.value);
    }

    const onClikValueMin = () => {
        const valor = rangeValue - step

        if (valor < min) return

        setRangeValue(valor)
    }

    const onClikValueMax = () => {
        const valor = rangeValue + step

        if (valor > max) return

        setRangeValue(valor)
    }

    return {
        rangeValue,
        onInputChange,
        onClikValueMax,
        onClikValueMin,
        min,
        max,
        step,
        pago,
        meses,
        total,
        setMeses,
    }
}