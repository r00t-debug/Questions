const Questions = ({ domaine, title, arr, onChange }) => {
  return (
    <div id="questions" className="px-2 text-slate-800">
      <h4 className="mb-3 font-semibold text-2xl">{domaine && domaine+". "}{title}</h4>
      <div id="input-area" className="h-[calc(90vh-80px)] py-4 pr-4 overflow-auto scrollbar">
        {arr.map((item, index) => (
          <div key={index} className="flex items-center p-2 h-28 border-b-[1px] border-slate-200">
            <div className="w-1/12 text-xl text-slate-800">{item.name + 1}</div>
            <div className="w-9/12 pr-4">
            <label htmlFor="value">{item.text}</label>
            </div>
            <div className="w-2/12 text-slate-900 font-normal opacity-60 mt-4">
              <select
                name={item.name}
                value={item.value}
                onChange={onChange}
                disabled={onChange==null}
                className={`
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-slate-500
                rounded-lg
                transition
                ease-in-out
                outline-offset-0
                focus:outline-none
                ${onChange==null && "appearance-none"}
                ${item.value < 3 ? "bg-red-200 focus:border-red-600 focus:shadow-[0px_0px_0px_2px_#eb2525]" : "focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"}
                ${item.value === -1 && "bg-amber-200 focus:border-amber-600 focus:shadow-[0px_0px_0px_2px_#e39c22]"}
                `}>
                  <option value="-1">NA</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
              <p className="text-xs pl-1 pt-1">Score</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Questions