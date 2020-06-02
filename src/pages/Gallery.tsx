import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import React from 'react';
import './Gallery.css';
import {arrowBack} from "ionicons/icons";
const Gallery: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="gallery-title">Bilder</h1>
                <div className="gallery">
                    <img src="assets/gallery/windows.gif" alt=""/>
                    <img src="assets/gallery/vy2.gif" alt="" />
                    <img src="assets/gallery/vaning2.gif" alt="" />
                    <img src="assets/gallery/vy.gif" alt="" />
                    <img src="assets/gallery/vakttornet.gif" alt="" />
                    <img src="assets/gallery/vakttornet2.gif" alt="" />
                    <img src="assets/gallery/uppifran3.gif" alt="" />
                    <img src="assets/gallery/uppifran4.gif" alt="" />
                    <img src="assets/gallery/toppen.gif" alt="" />
                    <img src="assets/gallery/traden.gif" alt="" />
                    <img src="assets/gallery/uppifran.gif" alt="" />
                    <img src="assets/gallery/uppifran2.gif" alt="" />
                    <img src="assets/gallery/spikar.gif" alt="" />
                    <img src="assets/gallery/stabilt.gif" alt="" />
                    <img src="assets/gallery/stallning.gif" alt="" />
                    <img src="assets/gallery/ostvaggen.gif" alt="" />
                    <img src="assets/gallery/sagar.gif" alt="" />
                    <img src="assets/gallery/solen.gif" alt="" />
                    <img src="assets/gallery/jake2.gif" alt="" />
                    <img src="assets/gallery/kallaren.gif" alt="" />
                    <img src="assets/gallery/kbroo.gif" alt="" />
                    <img src="assets/gallery/nerifran.gif" alt="" />
                    <img src="assets/gallery/ingangen2.gif" alt="" />
                    <img src="assets/gallery/jake.gif" alt="" />
                    <img src="assets/gallery/halet.gif" alt="" />
                    <img src="assets/gallery/helbild.gif" alt="" />
                    <img src="assets/gallery/ingangen.gif" alt="" />
                    <img src="assets/gallery/bridges3.gif" alt="" />
                    <img src="assets/gallery/erkki.gif" alt="" />
                    <img src="assets/gallery/erkki2.gif" alt="" />
                    <img src="assets/gallery/bridges2.gif" alt="" />
                    <img src="assets/gallery/bridges.gif" alt="" />
                    <img src="assets/gallery/bridge4.gif" alt="" />
                    <img src="assets/gallery/balkongen.gif" alt="" />
                    <img src="assets/gallery/balkong2.gif" alt="" />
                    <img src="assets/gallery/andrav.gif" alt="" />
                    <img src="assets/gallery/aaaaaaahhh.gif" alt="" />
                    <img src="assets/gallery/aaaaaaaaaahh2.gif" alt="" />
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

export default Gallery;
