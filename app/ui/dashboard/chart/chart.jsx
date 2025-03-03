"use client"
import { Legend, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line } from 'recharts'
import styles from './chart.module.css'

const data = [
  {
    name: "Fri",
    visit: 2390,
    click: 4300,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 3800,
  },
]

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data} margin={{top:5, right:30, left:20, bottom:5,}}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background: "#151c2c", border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />

        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart