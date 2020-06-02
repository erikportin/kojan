import {IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonList, IonPage, IonToast} from '@ionic/react';
import React, {useState} from 'react';
import {arrowBack} from "ionicons/icons";

const Games: React.FC = () => {
    const [showToast, setShowToast] = useState(true);
    return (
        <IonPage>
            <IonContent>
                <h1 className="games">(S)kojiga spel ;)</h1>
                <IonToast
                    isOpen={showToast}
                    color={'success'}
                    onDidDismiss={() => setShowToast(false)}
                    message="Gratulerar, du är nu medlem i Kojan FanClub (K.F.C.)."
                    duration={2000}
                    position={'top'}
                />
                <IonList>
                    <IonItem href={'/games-find-foot'}>Hitta-fotenspelet</IonItem>
                    <IonItem href={'/games-word'}>Ordspelet</IonItem>
                </IonList>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink={'/'}>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Games;
