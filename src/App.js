import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import BiorhythmCard from './components/BiorhythmCard'
import useStoredState from './lib/useStoredState'

function getToday() {
  return new Date().toISOString().substring(0, 'yyyy-mm-dd'.length);
}

function App() {
  const [birthDate, setBirthDate] = useStoredState('birthDate', '')
  const [targetDate, setTargetDate] = useState(getToday)

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        {Boolean(birthDate) && <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />}
        <IonList>
          <IonItem>
            <IonLabel position="fixed">
              Birth Date:
            </IonLabel>
            <IonInput type="date" value={birthDate} onIonChange={(event) => setBirthDate(event.detail.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">
              Target Date:
            </IonLabel>
            <IonInput type="date" value={targetDate} onIonChange={(event) => setTargetDate(event.detail.value)} />
          </IonItem>
        </IonList>

      </IonContent>
    </IonApp>
  );
}

export default App;
