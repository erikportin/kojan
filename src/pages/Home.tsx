import {IonContent, IonPage, IonList, IonItem, IonToast} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import './Home.css';

export interface POSITION {
    lat: number,
    lng: number
}

function toPositionFromGeoposition(location: Geoposition): POSITION{
    return {lat: location.coords.latitude, lng: location.coords.longitude}
}

function getDistance(loc1: POSITION, loc2: POSITION): number {
    if ((loc1.lat === loc2.lat) && (loc1.lng === loc2.lng)) {
        return 0;
    }
    else {
        const radlat1 = Math.PI * loc1.lat/180;
        const radlat2 = Math.PI * loc2.lat/180;
        const theta = loc1.lng - loc2.lng;
        const radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;

        return parseFloat(dist.toFixed(3))
    }
}
const Home: React.FC = () => {
    const [distance, setDistance] = useState<number | undefined>(undefined)
    const [noPos, setNoPos] = useState<boolean>(false)
    useEffect(() => {
        async function fetch(){
            const position = {
                lat: 63.499624,
                lng: 22.546097
            }
            try{
                const currentPosition = toPositionFromGeoposition(await Geolocation.getCurrentPosition());
                setDistance(getDistance(currentPosition, position))

            } catch(error){
                setNoPos(true)
                console.log("Geolocation error", error.message)
            }
        }

        fetch()
    }, [])
  return (
    <IonPage>
      <IonContent>
          <IonToast
              isOpen={!!distance && !noPos}
              position={'top'}
              message={distance && distance < 1 ? 'Du är mindre än en kilometer från platsen där Kojan en gång stod. Sök så skall du finna.' : `Du är är ${distance} kilometer från platsen där Kojan en gång stod.`}
              duration={10000}
          />
          <IonToast
              isOpen={!distance && !noPos}
              position={'top'}
              message={'Söker din position'}
          />
          <h1 className="title">Kojan</h1>
          <IonList>
              <IonItem className="link" routerLink={'/history'}>
                  <img src="/assets/nav/historia.jpeg" alt="Historia"/>
              </IonItem>
              <IonItem className="link" routerLink={'/games-paywall'}>
                  <img src="/assets/nav/skojiga-spel.jpeg" alt="S)kojiga spel ;)"/>
              </IonItem>
              <IonItem className="link" routerLink={'/gallery'}>
                  <img src="/assets/nav/pikks.jpeg" alt="Bilder"/>
              </IonItem>
              <IonItem className="link" routerLink={'/links'}>
                  <img src="/assets/nav/linkks.jpeg" alt="Länkar"/>
              </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
