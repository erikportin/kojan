import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import React from 'react';
import {arrowBack} from "ionicons/icons";

const GameWord: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="games">(S)kojiga spel ;)</h1>
                <h2>Ord-spelet</h2>
                <p>Regler: Skriv upp ordet kojan på ett vitt
                    A4 papper. Försök sedan kasta om bokstäverna så att de
                    blir ett av jakobs dataspelsnamn.</p>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink={'/games'}>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default GameWord;
