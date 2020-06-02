import {IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import React from 'react';
import {arrowBack} from "ionicons/icons";

const GamesPaywall: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="games">(S)kojiga spel ;)</h1>
                <p>För att få tillgång till (s)kojiga spelsajten måste du bli medlem i Kojan FanClub (K.F.C.).</p>
                <p>För priset av 10 € får du ett exklusivt medlemskap i "klubben"</p>
                <div>
                    <IonButton color="primary" routerLink={'/games'}>Ja, jag vill bli medlem</IonButton>
                    <IonButton color="danger" routerLink={'/games'}>Nej, jag vill inte bli medlem</IonButton>
                </div>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink={'/'}>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default GamesPaywall;
