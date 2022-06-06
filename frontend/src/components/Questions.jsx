const Questions = ({ title, arr, onInput }) => {
  return (
    <div id="questions" className="px-2 text-slate-800">
      <h4 className="mb-3 font-semibold text-2xl">{title}</h4>
      <div id="input-area" className="h-[600px] py-4 pr-4 overflow-auto scrollbar">
        {arr.map((item, index) => (
          <div key={index} className="flex items-center p-2 h-28 border-b-[1px] border-slate-200">
            <div className="w-1/12 text-xl text-slate-800">{item.name + 1}</div>
            <div className="w-9/12 pr-4">
            <label htmlFor="value">{item.text}</label>
            </div>
            <div className="w-2/12 text-slate-900 font-normal opacity-60 mt-4">
              <input
                type="number"
                name={item.name}
                className={`w-full text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded outline-none transition ease-in-out outline-offset-0 ${onInput!=null && "focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"} ${item.value < 3 && "outline-red-600"}`}
                value={item.value}
                onInput={onInput}
                disabled={onInput==null}
              />
              <p className="text-xs pl-1 pt-1">Score</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Questions