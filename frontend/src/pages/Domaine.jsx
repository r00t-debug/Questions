import { useState, useEffect } from "react"
import axios from "axios"
import Questions from "../components/Questions"
import RadarChart from "../components/RadarChart"
import Sidebar from "../components/Sidebar"


function Domaine({ arr, domaine, title }) {
  const[array, setArray] = useState(arr)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/questions/${domaine}`)
        let temp = array.slice()

        temp.map((item, index) => {
          item.value = response.data[index].score          
        })

        setArray(temp)
      } catch(err) {
        console.log(err)
      }
    }

    fetchPosts()
  }, [])

  // Check for min and max on input
  // function minmax(value, min, max)
  // {
  //   if (parseInt(value) < min || isNaN(parseInt(value)))
  //     return min
  //   else if (parseInt(value) > max)
  //     return max
  //   else return value
  // }
  

  const updateItem = (id, whichvalue, newvalue) => {
    if (id !== -1) {
      let temporaryarray = array.slice();
      temporaryarray[id][whichvalue] = parseInt(newvalue);
      setArray(temporaryarray);
    } else {
      console.log('no match');
    }
  }
  
  const handleChange = (e) => {
    let name = e.target.name;
    const value = e.target.value

    e.target.value = value
    updateItem(name,'value', value)

    name++
    const payload = { question: name, score: value }
    axios.put(`/api/questions/${domaine}`, payload)
  }

  return (
    <>
    <Sidebar />
    <div
      id="content"
      className="bg-[#ebe9f8] h-screen ml-20 bg-waves bg-cover flex justify-center items-center"
    >
      <div
        id="main"
        className='shadow-box p-4 rounded-lg w-[90%] h-[90%] bg-light-slate backdrop-blur-xl'
      >
    <div className="grid grid-cols-2 h-full">
      <Questions domaine={domaine} title={title} arr={array} onChange={handleChange} />
      <RadarChart arr={array} />
    </div>
    </div>
    </div>
    </>
  )
}
export default Domaine