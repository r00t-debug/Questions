import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'


function RadarChart({arr}) {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  // const text = Object.keys(arr).map(key => {
  //   return arr[key].text
  // })
  const name = Object.keys(arr).map(key => {
    return arr[key].name + 1
  })
  const value = Object.keys(arr).map(key => {
    return arr[key].value
  })

  const data = {
    labels: name,
    datasets: [
      {
        label: 'Score',
        // backgroundColor: 'rgba(255, 99, 132, 0.2)',
        // borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(97, 40, 151, 0.2)',
        borderColor: 'rgb(97, 40, 151)',
        borderWidth: 2,
        data: value,
    }]
  }
  
  const options = {
    scales: {
      r: {
        grid: {
          // color: ['red', 'red', 'green', 'green', 'green'],
          color: 'rgba(0, 0, 0, 0.4)',
          circular: true,
        },
        ticks: {
          color: 'rgb(32, 41, 59)',
          backdropColor: 'rgba(255, 255, 255, 0.6)',
          backdropPadding: 1,
          padding: 13,
          stepSize: 1,
          beginAtZero: true,
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.4)'
        },
        pointLabels: {
          color: 'rgb(32, 41, 59)'
        },
        max: 5,
        min: 0,
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  const scale = [
    {text: "nothing", score: 0, color: "text-red-800"},
    {text: "bad", score: 1, color: "text-rose-600"},
    {text: "not bad", score: 2, color: "text-orange-600"},
    {text: "average", score: 3, color: "text-amber-600"},
    {text: "good", score: 4, color: "text-green-600"},
    {text: "excellent", score: 5, color: "text-emerald-700"},
  ]

  return (
    <div className="font-semibold px-4 border-l-[1px] border-slate-200 flex flex-col justify-center items-center">
      <ul className="w-5/6 flex justify-between mb-2">
        {scale.map((item, index) => (
          <li key={index}>
            <p className={`text-center ${item.color}`}>{item.score} {item.text}</p>
          </li>
        ))}
      </ul>
      <Radar data={data} options={options} />
    </div>
  )
}
export default RadarChart