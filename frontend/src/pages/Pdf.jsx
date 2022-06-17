import { useEffect } from "react"
import { saveAs } from "file-saver"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Domaines from "./Domaines"

function Pdf() {
  // const [pdf, setPdf] = useState({
  //   domaines: [],
  //   version: 1,
  // })

  let pdf = {
    domaines: Domaines,
  }

  // get all values from all domaines
  useEffect(() => {
    const fetchQuestions = async (id) => {
      try {
        const res = await axios.get(`/api/questions/${id+1}`)
        const filteredRes = res.data.filter(e => e.score !== -1)
        res.data = filteredRes

        // pdf.domaines[id].data.map((item, index) => {
        //   item.value = res.data[index].score
        // })
        let question = []
        res.data.map((item, index) => {
          question.push(Domaines[id].data[(item.id - 1)])
          question[index].value = item.score         
        })


        // const filteredPdf = pdf.domaines[id].data.filter((e) => e.value !== -1)
        pdf.domaines[id].data = question
      } catch(err) {
        console.log(err)
      }
    }
    
    for (let i=0; i<20; i++) {
      fetchQuestions(i)
    }
  }, [])

  const inputs = [
    {
      label: "Version",
      type: "text",
      name: "version",
    },
    {
      label: "Outil",
      type: "text",
      name: "outil",
    },
  ]

  const handleChange = ({ target: { value, name } }) => {
    pdf[name] = value
  }

  // puppeteer thingy

  // const createAndDownloadPDF = () => {
  //   const template = <Template pdf={pdf} />
  //   const string = renderToString(template)
  //   axios.post('/api/pdf', string)
  //   .then(() => axios.get('/api/pdf', { responseType: 'blob' }))
  //   .then((res) => {
  //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
  //     saveAs(pdfBlob, 'audit.pdf')
  //   })
  // }

  const createAndDownloadPDF = () => {
    axios.post('/api/pdf', pdf)
    .then(() => axios.get('/api/pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
      saveAs(pdfBlob, 'audit.pdf')
    })
  }

  // JSPDF thingy
  
  // const createAndDownloadPDF = () => {
  //   const template = <Template pdf={pdf} />
  //   const string = renderToString(template)
  //   const doc = new jsPDF()

  //   doc.fromHTML(string, 0, 0, {'width': 100}, () => {
  //       doc.save('report.pdf')
  //     })
  //   }

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
    <div className="px-2 text-slate-800">
      <h4 className="mb-3 font-semibold text-2xl">Rapport d'audit</h4>
      <div id="input-area" className="h-[600px] py-4 pl-4 pr-20 overflow-auto scrollbar">
        {inputs.map((input, index) => (
          <div key={index} className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              onChange={handleChange}
              className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
              />
          </div>
        ))}
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]" onClick={createAndDownloadPDF}>Download PDF</button>
        {/* <Link to={"/template"} target="_blank"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
        >
          Download PDF
        </Link> */}
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
export default Pdf