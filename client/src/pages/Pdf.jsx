import { useState, useEffect } from "react"
import { saveAs } from "file-saver"
import axios from "axios"
import Domaines from "./Domaines"
import { VscFilePdf, VscAdd, VscTrash } from "react-icons/vsc"

function Pdf() {
  let pdf = {
    domaines: Domaines,
  }

  const [vulnerability, setVulnerability] = useState([{reference: "", target:"", criticity: "", description: "", proof:"", recommendation: ""}])
  const [responsible, setResponsible] = useState([{poste: "", position: ""}])

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

  const inputs = {
    simple: [
      {
        label: "Version",
        type: "text",
        name: "version",
      },
    ],
    responsible: {
      poste: {
        label: "Poste de Résponsabilité",
        type: "text",
        name: "poste",
      },
      position: {
        label: "Position",
        type: "text",
        name: "position",
      }
    },
    vulnerability: {
      reference: {
        label: "Référence",
        type: "text",
        name: "reference"
      },
      target: {
        label: "Machine(s) impactée(s)",
        type: "text",
        name: "target"
      },
      criticity: {
        label: "Criticité",
        type: "text",
        name: "criticity",
      },
      description: {
        label: "Description",
        type: "text",
        name: "description"
      },
      proof: {
        label: "Preuve",
        type: "text",
        name: "proof"
      },
      recommendation: {
        label: "Recommandation",
        type: "text",
        name: "recommendation"
      }
    },
    recommendations: {
      label: "Recommandations",
      name: "recommendations"
    },
    plan: {
      label: "Plan d'action",
      name: "plan" 
    }
  }
  
  const handleChange = ({ target: { value, name } }) => {
    pdf[name] = value
  }

  // Responsible

  const handleResponsibleAdd = () => {
    setResponsible([...responsible, {poste: "", position: ""}])
  }
  
  const handleResponsibleDelete = (index) => {
    const list = [...responsible]
    list.splice(index, 1)
    setResponsible(list)
  }
  
  const handleResponsibleChange = ({ target: { value, name } }, index) => {
    const list = [...responsible]
    list[index][name] = value
    setResponsible(list)
  }

  // Vulnerability
  
  const handleVulnerabilityAdd = () => {
    setVulnerability([...vulnerability, {reference: "", target: "", criticity: "", description: "", proof: "", recommendation: ""}])
  }
  
  const handleVulnerabilityDelete = (index) => {
    const list = [...vulnerability]
    list.splice(index, 1)
    setVulnerability(list)
  }
  
  const handleVulnerabilityChange = ({ target: { value, name } }, index) => {
    const list = [...vulnerability]
    list[index][name] = value
    setVulnerability(list)
  }

  // puppeteer

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
    pdf.vulnerability = vulnerability
    pdf.responsible = responsible
    axios.post('/api/pdf', pdf)
    .then(() => axios.get('/api/pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
      saveAs(pdfBlob, 'audit.pdf')
    })
  }

  // JSPDF
  
  // const createAndDownloadPDF = () => {
  //   const template = <Template pdf={pdf} />
  //   const string = renderToString(template)
  //   const doc = new jsPDF()

  //   doc.fromHTML(string, 0, 0, {'width': 100}, () => {
  //       doc.save('report.pdf')
  //     })
  //   }

  return (
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
      <div id="input-area" className="h-[calc(90vh-135px)] my-4 px-4 overflow-auto scrollbar">

        <h4 className="mb-3 font-semibold text-xl">Informations générales</h4>
        <div id="simple" className="mb-8 grid grid-cols-10 gap-6">
          {inputs.simple.map((input, index) => (
            <div key={index}>
              <label className="block mb-2 text-sm font-medium">{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                onChange={handleChange}
                className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                />
            </div>
          ))}
        </div>

        <h4 className="mb-3 font-semibold text-xl">Diffusion du Document</h4>
        {responsible.map((item, index) => (
          <div key={index} className="mb-5">
            <div>
              <div id="responsible" className="mb-3 grid grid-cols-12 gap-6">
                <div className="col-span-5">
                  <label className="block mb-2 text-sm font-medium">{inputs.responsible.poste.label}</label>
                  <input
                    type={inputs.responsible.poste.type}
                    name={inputs.responsible.poste.name}
                    value={item.poste}
                    onChange={(e) => handleResponsibleChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
                <div className="col-span-5">
                  <label className="block mb-2 text-sm font-medium">{inputs.responsible.position.label}</label>
                  <input
                    type={inputs.responsible.position.type}
                    name={inputs.responsible.position.name}
                    value={responsible.position}
                    onChange={(e) => handleResponsibleChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
                {responsible.length > 1 && <div className="col-span-2 flex flex-col justify-end items-center mr-10">
                  <button
                  className="flex items-center gap-x-2 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-red-600 focus:shadow-[0px_0px_0px_2px_#eb2525]"
                  onClick={() => handleResponsibleDelete(index)}
                >
                    <div className="text-xl">
                      <VscTrash />
                    </div>
                    <span>Supprimer</span>
                  </button>
                </div>}
              </div>
            </div>
            {responsible.length-1 === index && <button
              className="flex items-center gap-x-1 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-green-600 focus:shadow-[0px_0px_0px_2px_#1ea852]"
              onClick={handleResponsibleAdd}
            >
              <div className="text-xl">
                <VscAdd />
              </div>
              <span>Ajouter Responsable</span>
            </button>}
          </div>
        ))}

        <h4 className="mb-3 font-semibold text-xl">Vulnérabilités</h4>
        {vulnerability.map((item, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-center items-end mb-3">
              <div id="vulnerability" className="grid grid-cols-12 gap-2">
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium">{inputs.vulnerability.reference.label}</label>
                  <input
                    type={inputs.vulnerability.reference.type}
                    name={inputs.vulnerability.reference.name}
                    value={item.reference}
                    onChange={(e) => handleVulnerabilityChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium">{inputs.vulnerability.target.label}</label>
                  <input
                    type={inputs.vulnerability.target.type}
                    name={inputs.vulnerability.target.name}
                    value={item.target}
                    onChange={(e) => handleVulnerabilityChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium">{inputs.vulnerability.criticity.label}</label>
                  <select
                    name={inputs.vulnerability.criticity.name}
                    value={item.criticity}
                    onChange={(e) => handleVulnerabilityChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  >
                    <option selected>Choisir</option>
                    <option>Faible</option>
                    <option>Moyenne</option>
                    <option>Forte</option>
                    <option>Critique</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <label className="block mb-2 text-sm font-medium">{inputs.vulnerability.description.label}</label>
                  <input
                    type={inputs.vulnerability.description.type}
                    name={inputs.vulnerability.description.name}
                    value={vulnerability.description}
                    onChange={(e) => handleVulnerabilityChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium">{inputs.vulnerability.proof.label}</label>
                  <input
                    type={inputs.vulnerability.proof.type}
                    name={inputs.vulnerability.proof.name}
                    value={vulnerability.proof}
                    onChange={(e) => handleVulnerabilityChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
                <div className="col-span-3">
                  <label className="block mb-2 text-sm font-medium">{inputs.vulnerability.recommendation.label}</label>
                  <input
                    type={inputs.vulnerability.recommendation.type}
                    name={inputs.vulnerability.recommendation.name}
                    value={vulnerability.recommendation}
                    onChange={(e) => handleVulnerabilityChange(e, index)}
                    className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
                  />
                </div>
              </div>
              {vulnerability.length > 1 && <button
                className="flex items-center gap-x-2 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm ml-2 w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-red-600 focus:shadow-[0px_0px_0px_2px_#eb2525]"
                onClick={() => handleVulnerabilityDelete(index)}
              >
                  <div className="text-xl">
                    <VscTrash />
                  </div>
                  <span>Supprimer</span>
                </button>}
            </div>
            {vulnerability.length-1 === index && <button
              className="flex items-center gap-x-1 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-green-600 focus:shadow-[0px_0px_0px_2px_#1ea852]"
              onClick={handleVulnerabilityAdd}
            >
              <div className="text-xl">
                <VscAdd />
              </div>
              <span>Ajouter vulnérabilité</span>
            </button>}
          </div>
        ))}

        <h4 className="mb-3 font-semibold text-xl">Recommandations</h4>
        <div id="simple" className="mb-8">
          <textarea
            rows={4}
            name={inputs.recommendations.name}
            onChange={handleChange}
            className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
          ></textarea>
        </div>

        <h4 className="mb-3 font-semibold text-xl">Plan d'action</h4>
        <div id="simple" className="mb-8">
          <textarea
            rows={4}
            name={inputs.plan.name}
            onChange={handleChange}
            className="w-full opacity-60 text-base block px-3 py-1.5 leading-6 bg-clip-padding border border-solid border-slate-500 rounded-lg outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
          ></textarea>
        </div>

      </div>
      <button
        className="flex items-center gap-x-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-none transition ease-in-out outline-offset-0 focus:outline-none focus:border-blue-600 focus:shadow-[0px_0px_0px_2px_#2563eb]"
        onClick={createAndDownloadPDF}
      >
        <div className="text-xl">
          <VscFilePdf />
        </div>
        <span>Télécharger PDF</span>
      </button>
    </div>
    </div>
    </div>
  )
}
export default Pdf