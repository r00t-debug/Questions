import { useState, useEffect } from "react"
import axios from "axios"
import Questions from "../components/Questions"
import RadarChart from '../components/RadarChart'

function Dashboard() {
  const[array, setArray] = useState([
    {text: "Gestion des actifs", name: 0, value: 0},
    {text: "Protection des données à caractère personnel", name: 1, value: 0},
    {text: "Gestion des contrôle des accès", name: 2, value: 0},
    {text: "Sécurité des appareils mobiles", name: 3, value: 0},
    {text: "Sécurité des réseaux", name: 4, value: 0},
    {text: "Sécurité des systèmes d'information", name: 5, value: 0},
    {text: "Sécurité liée à l'exploitation", name: 6, value: 0},
    {text: "Sécurité des Systèmes d'Information Critiques", name: 7, value: 0},
    {text: "Sécurité des Services Cloud", name: 8, value: 0},
    {text: "Cryptographie", name: 9, value: 0},
    {text: "Sécurité Physique", name: 10, value: 0},
    {text: "Internet des Objets - Internet Of Things (IoT)", name: 11, value: 0},
    {text: "Surveillance et Journalisation", name: 12, value: 0},
    {text: "Gestion des Incidents de sécurité", name: 13, value: 0},
    {text: "Gestion de la continuité des activités", name: 14, value: 0},
    {text: "Ressources humaines", name: 15, value: 0},
    {text: "Sécurité liée a l'usage des Réseaux Sociaux", name: 16, value: 0},
    {text: "Intégration de la sécurité durant le cycle de vie de développement des logiciels", name: 17, value: 0},
    {text: "Exigences de Sécurité pour les projets de technologie de l'information (TIC)", name: 18, value: 0},
    {text: "Relation avec les tierces parties", name: 19, value: 0},
  ])

  // fetch from database
  useEffect(() => {
    const fetchQuestions = async () => { 
      try {
        const response = await axios.get('/api/questions')
        let temp = array.slice()

        response.data.map((item, index) => {
          temp[index].value = item.score           
        })

        setArray(temp)
      } catch(err) {
        console.log(err)
      }
    }

    fetchQuestions()
  }, [])

  return (
    <>
    <Questions title={"Dashboard"} arr={array} />
    <RadarChart arr={array} />
    </>
  )
}
export default Dashboard