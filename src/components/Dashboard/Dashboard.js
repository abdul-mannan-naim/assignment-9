import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <div>
                <LineChart width={600} height={300} data={data}>
                    <Line type='monotone' dataKey="revenue" stroke='#8884'></Line>
                    <CartesianGrid stroke='#ccc'></CartesianGrid>
                    <XAxis dataKey='month' ></XAxis>
                    <YAxis dataKey='sell'></YAxis>
                </LineChart>
            </div>
            <br /><br />
            <div>
                <BarChart width={600} height={300} data={data} >
                    <XAxis dataKey='month' stroke='#8884d8'></XAxis>
                    <YAxis dataKey='revenue'></YAxis>
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}></Tooltip>
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5', border: "1px solid #d5d5", borderRadius: 3, lineHeight: '40px' }}></Legend>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="month" fill="#8884d8" barSize={30} />
                </BarChart>

            </div>
        </div>
    );
};

export default Dashboard;