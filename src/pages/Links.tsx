import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import React from 'react';
import {arrowBack} from "ionicons/icons";

const Links: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="links">Länkar</h1>
                <p><a href="http://www.jeppisfbc.fi" target="_blank"  rel="noopener noreferrer" >Blue foxs hemsida</a></p>
                <p>kommer mera senare...</p>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink={'/'}>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Links;
