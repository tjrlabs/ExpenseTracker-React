import './css/Chart.css'
import ChartBar from "./ChartBar";

const Chart = props => {
    const valueArr = props.dataPoints.map(item => item.value);
    const totalMax = Math.max(...valueArr);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax}
                                                        label={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;