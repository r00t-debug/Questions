import  { useState } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
import { SidebarData } from './SidebarData'
import {FcMindMap} from 'react-icons/fc'
import {AiOutlineAudit} from 'react-icons/ai'
import {RiDashboard2Fill} from 'react-icons/ri'

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="sidebar"
      className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-3 pt-8 bg-dark-blue absolute z-10`}
    >
      <img
        src={require("../assets/control.png")}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
        alt=""
      />

      <div className="flex gap-x-4 items-center">
        <Link className="cursor-pointer duration-500 text-4xl" to="/">
          <FcMindMap />
        </Link>
        <h1
          className={`text-white origin-left font-mdium text-xl duration-300 ${!open && "scale-0 text-xs"}`}
        >
          SMSI
        </h1>
      </div>
      <ul className="mt-6 pr-3 overflow-auto h-[calc(100vh-96px)] scrollbar">
      <Link to={"/"}
          className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer my-1 p-2 hover:bg-light-white rounded-md'
        >
          <div className="text-xl">
            <RiDashboard2Fill />
          </div>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>Dashboard</span>
        </Link>

        <div className='border-t border-slate-400'></div>

        {SidebarData.map((val, index) => (
          <Link key={index} to={val.link}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer my-1 p-2 hover:bg-light-white rounded-md`}
          >
            <div className="text-xl">
              {val.icon}
            </div>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{val.title}</span>
          </Link>
        ))}

        <div className='border-t border-slate-400'></div>

        <Link to={"/pdf"}
          className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer my-1 p-2 hover:bg-light-white rounded-md'
        >
          <div className="text-xl">
            <AiOutlineAudit />
          </div>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>Rapport d'Audit</span>
        </Link>
      </ul>
    </div>
  )
}
export default Sidebar