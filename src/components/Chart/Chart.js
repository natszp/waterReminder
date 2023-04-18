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

    let barFillWidth = '0%';
    barFillWidth = Math.round((props.drinksAmount / hydrationRecommended) * 100) + '%';


    return (
        <Card>
            <div className='calculator'>
                <WeightForm onChangeWeight={calculatorHandler} />
                <MonitorWeightIcon color='black' fontSize='large' />
                <div className='info'>{props.drinksAmount} / {hydrationRecommended} ml</div>
            </div>
            <div className='chart'>
                <div className='chart-bar'>
                    <div className='chart-bar__inner'>
                        <div
                            className='chart-bar__fill'
                            style={{ width: barFillWidth }}
                        ></div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Chart;