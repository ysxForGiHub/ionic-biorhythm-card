import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorhythmsSeries } from '../lib/biorhythm'
export default function BiorhythmChart({ birthDate, targetDate }) {
    const seires = calculateBiorhythmsSeries(birthDate, targetDate, 15);

    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={seires} >
                <CartesianGrid vertical={false} strokeDasharray="2 4" />
                <XAxis dataKey="date" ticks={[seires[3].date, seires[15].date, seires[27].date]} />
                <ReferenceLine x={seires[15].date} />
                <Line dataKey="physical" stroke="green" dot={false} type="natural" />
                <Line dataKey="emotional" stroke="red" dot={false} type="natural" />
                <Line dataKey="intellectual" stroke="blue" dot={false} type="natural" />
            </LineChart>
        </ResponsiveContainer>
    )
}
