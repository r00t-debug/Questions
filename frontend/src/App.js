import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import Sidebar from "./components/Sidebar"
import Dashboard from './pages/Dashboard'
import Domaine from './pages/Domaine'
import {
  domaine1,
  domaine2,
  domaine3,
  domaine4,
  domaine5,
  domaine6,
  domaine7,
  domaine8,
  domaine9,
  domaine10,
  domaine11,
  domaine12,
  domaine13,
  domaine14,
  domaine15,
  domaine16,
  domaine17,
  domaine18,
  domaine19,
  domaine20,
} from './pages/QuestionsData'

function App() {
  console.log(domaine5)
  return (
    <Router>
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
              <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/domaine1' element={<Domaine key={"domaine1"} arr={domaine1} domaine={"1"} title={"Gestion des Actifs"} />}></Route>
                <Route path='/domaine2' element={<Domaine key={"domaine2"} arr={domaine2} domaine={"2"} title={"Protection des données à caractère personnel"} />}></Route>
                <Route path='/domaine3' element={<Domaine key={"domaine3"} arr={domaine3} domaine={"3"} title={"Gestion des contrôle des accès"} />}></Route>
                <Route path='/domaine4' element={<Domaine key={"domaine4"} arr={domaine4} domaine={"4"} title={"Sécurité des appareils mobiles"} />}></Route>
                <Route path='/domaine5' element={<Domaine key={"domaine5"} arr={domaine5} domaine={"5"} title={"Sécurité des réseaux"} />}></Route>
                <Route path='/domaine6' element={<Domaine key={"domaine6"} arr={domaine6} domaine={"6"} title={"Sécurité des systèmes d'information"} />}></Route>
                <Route path='/domaine7' element={<Domaine key={"domaine7"} arr={domaine7} domaine={"7"} title={"Sécurité liée à l'exploitation"} />}></Route>
                <Route path='/domaine8' element={<Domaine key={"domaine8"} arr={domaine8} domaine={"8"} title={"Sécurité des Systèmes d'Information Critiques"} />}></Route>
                <Route path='/domaine9' element={<Domaine key={"domaine9"} arr={domaine9} domaine={"9"} title={"Sécurité des Services Cloud"} />}></Route>
                <Route path='/domaine10' element={<Domaine key={"domaine10"} arr={domaine10} domaine={"10"} title={"Cryptographie"} />}></Route>
                <Route path='/domaine11' element={<Domaine key={"domaine11"} arr={domaine11} domaine={"11"} title={"Sécurité Physique"} />}></Route>
                <Route path='/domaine12' element={<Domaine key={"domaine12"} arr={domaine12} domaine={"12"} title={"Internet des Objets - Internet Of Things (IoT)"} />}></Route>
                <Route path='/domaine13' element={<Domaine key={"domaine13"} arr={domaine13} domaine={"13"} title={"Surveillance et Journalisation"} />}></Route>
                <Route path='/domaine14' element={<Domaine key={"domaine14"} arr={domaine14} domaine={"14"} title={"Gestion des Incidents de sécurité"} />}></Route>
                <Route path='/domaine15' element={<Domaine key={"domaine15"} arr={domaine15} domaine={"15"} title={"Gestion de la continuité des activités"} />}></Route>
                <Route path='/domaine16' element={<Domaine key={"domaine16"} arr={domaine16} domaine={"16"} title={"Ressources humaines"} />}></Route>
                <Route path='/domaine17' element={<Domaine key={"domaine17"} arr={domaine17} domaine={"17"} title={"Sécurité liée a l'usage des Réseaux Sociaux"} />}></Route>
                <Route path='/domaine18' element={<Domaine key={"domaine18"} arr={domaine18} domaine={"18"} title={"Intégration de la sécurité durant le cycle de vie de développement des logiciels"} />}></Route>
                <Route path='/domaine19' element={<Domaine key={"domaine19"} arr={domaine19} domaine={"19"} title={"Exigences de Sécurité pour les projets de technologie de l'information (TIC)"} />}></Route>
                <Route path='/domaine20' element={<Domaine key={"domaine20"} arr={domaine20} domaine={"20"} title={"Relation avec les tierces parties"} />}></Route>
              </Routes>
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;
