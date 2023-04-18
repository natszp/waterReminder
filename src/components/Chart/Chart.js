import WeightForm from './WeightForm';
import Card from '../UI /Card';
import './Chart.css'
import { useState } from 'react';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';


const Chart = (props) => {

    const [hydrationRecommended, setHydration] = useState(2000)

    let weightConverted;

    const calculatorHandler = (weight) => {
        weightConverted = Number(weight)
        let hydrationRecommended = Math.round((weightConverted * 0.35) * 100);
        setHydration(hydrationRecommended)
    }

    let barFillHeight = '0%';
    barFillHeight = Math.round((props.drinksAmount / hydrationRecommended) * 100) + '%';


    return (
        <div>
            <div className='calculator'>
                <WeightForm onChangeWeight={calculatorHandler} />
                <MonitorWeightIcon color='black' fontSize='large' />
                <div className='info'>{props.drinksAmount} / {hydrationRecommended} ml</div>
            </div>
            <div className='chart-bar'>
                <div className='chart-bar__inner'>
                    <div
                        className='chart-bar__fill'
                        style={{ height: barFillHeight }}
                    ></div>
                </div>
            </div>
        </div>

    )
}

export default Chart;