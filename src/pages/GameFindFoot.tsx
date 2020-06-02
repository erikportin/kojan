import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import React from 'react';
import {arrowBack} from "ionicons/icons";
import './GameFindFoot.css';
const GameFindFoot: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="games">(S)kojiga spel ;)</h1>
                <h2>Hitta-foten-spelet</h2>
                <p>Regler: Titta på bilderna och försök att hitta foten.</p>
                <div className="images">
                    <img alt="" src="/assets/images/erkki2.jpg" />
                    <img alt="" src="/assets/images/stallning.jpg" />
                    <img alt="" src="/assets/images/uppifran.jpg" />
                    <img alt="" src="/assets/images/halet.jpg" />
                    <img alt="" src="/assets/images/sagar.jpg" />
                </div>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink={'/games'}>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default GameFindFoot;
