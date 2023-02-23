
import { useCustomHook } from "./hooks/useCustomHook"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { InputChange } from "./components/InputChange";
import { formatMoney } from "./helpers/index.js";

function App() {

  const { rangeValue, min, max, step, meses, total, pago, onClikValueMax, onInputChange, onClikValueMin, setMeses } = useCustomHook()

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button operacion='-' fn={onClikValueMin} />
        <Button operacion='+' fn={onClikValueMax} />
      </div>

      <InputChange max={max} min={min} step={step} fn={onInputChange} />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatMoney(rangeValue)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a Pagar
      </h2>

      {/* CODIGO A REFACTORIZAR */}

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        onChange={(e) => setMeses(e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-x-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de Pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(total)} Total a Pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(pago)} Pagos Mensuales</p>
      </div>
    </div>
  )
}

export default App
