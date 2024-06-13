import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from '../lib/biorhythm.js'
import BiorhythmChart from './BiorhythmChart.js'
import './BiorhythmCard.css'

function formatDate(iosString) {
    return dayjs(iosString).format("D MMMM YYYY");
}

function BiorhythmCard({ birthDate, targetDate }) {
    const biorhythms = calculateBiorhythms(birthDate, targetDate)

    return (
        <IonCard className="BiorhythmCard ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
                <p className="physical">Physical: {biorhythms.physical.toFixed(4)}</p>
                <p className="emotional">Emotional: {biorhythms.emotional.toFixed(4)}</p>
                <p className="intellectual">Intellectual: {biorhythms.intellectual.toFixed(4)}</p>
            </IonCardContent>
        </IonCard>
    )
}

export default BiorhythmCard;