import WeightForm from './WeightForm';
import Card from '../UI /Card';
import './Chart.css'
import { useEffect, useState } from 'react';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import Button from '@mui/material/Button';
import Modal from './../UI /Modal'


const Chart = (props) => {

    const [hydrationRecommended, setHydration] = useState(2000)
    const [shownModal, setShowModal] = useState(false)

    let weightConverted;

    const calculatorHandler = (weight) => {
        weightConverted = Number(weight)
        let hydrationRecommended = Math.round((weightConverted * 0.35) * 100);
        setHydration(hydrationRecommended)
    }

    let barFillWidth = '0%';
    barFillWidth = Math.round((props.drinksAmount / hydrationRecommended) * 100) + '%';

    let actualVsRecommendedHydration = `${props.drinksAmount} / ${hydrationRecommended} ml`

    const showModalHandler = () => {
        setShowModal(true)
        console.log(shownModal)
    }

    const hideModalHandler = () => {
        setShowModal(false)
    }

    // to be developed 
    let hydrationLevelInfo;
    const hydrationLevel =  `${Math.round((props.drinksAmount / hydrationRecommended * 100))}`


    if (props.drinksAmount >= hydrationRecommended) {
        hydrationLevelInfo = `You achieved your daily hydration goal! You are ${hydrationLevel}% hydrated`
    } else {
        hydrationLevelInfo = `Your hydration level is ${hydrationLevel}%`
    }


    useEffect(() => {
        if (props.drinksAmount >= hydrationRecommended) {
            setShowModal(true)
        }
    }, [props.drinksAmount, hydrationRecommended])


    return (
        <Card>
            <div className='calculator'>
                <WeightForm onChangeWeight={calculatorHandler} />
                <MonitorWeightIcon color='black' fontSize='large' />
                <div className='info' id='hydrationLevelDiv'>{actualVsRecommendedHydration}</div>
            </div>
            <div className='chart'>
                <div className='chart-bar'>
                    <div className='chart-bar__inner'>
                        <div
                            className='chart-bar__fill'
                            style={{ width: barFillWidth }}
                        >
                        </div>

                    </div>
                </div>
            </div>
            <Button onClick={showModalHandler}>Check hydration</Button>
            {shownModal && <Modal onOpen={shownModal} content={hydrationLevelInfo} onConfirm={hideModalHandler} />}
        </Card>
    )

}

export default Chart;