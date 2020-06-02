import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import React from 'react';
import {arrowBack} from "ionicons/icons";

const History: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="history">Historian</h1>
                <h2>Gamla tiden</h2>
                <p>En vanliga sommardag i Byn bestämde sig några helt vanliga gossar
                    att de skulle bygga en koja. Detta beslut grundade sig på att den förra befästningen
                    i Klingenbergs skogar hade demolerats av ivriga dikande bönder. Kojans grundmaterial
                    härstammade från ruinerna av den gamla kojan men största delen av byggmaterialet
                    kom från överloppsbräder från Klingenbergs husbygge. Kojans grundare var Jonas
                    "Hammaren" Klingenberg, Martin "Planeraren" Portin, Erik "Sågen" Portin, Andreas
                    Furu och Jakob "Bäraren" Klingenberg. Med och hjälpte med bygget var också
                    en del gästarbetare. För att bli en äkta medlem av sällskapet måste man klättra
                    upp i en viss tall och röra i toppen. Denna topp sågades sedan ner och slängdes
                    bort för att aldrig mera bli funnen. Kojan byggdes i rask takt och bestod
                    snart av bottenvåningens kammare, nedre södra kammaren (skyddad med Kenneth
                    Broo fällan), nedre västra kammaren, fängelset, centralplanet, terrassen,
                    fångvaktarrummet, övre södra kammaren, övre västra kammaren och utkiksplatsen.
                    Dessutom fanns det en utpost mot östra ängen för att vaka mot "Röllis".</p>
                <h3>Historier från gamla tiden</h3>
                <p> - En gång fångade vi Sofia Blomqvist och Marika Renvall och slängde
                    ner dem i fängelset.Där höll vi dem under sträng övervakning av två vakter
                    som ibland "gollade" ner i fängelset för att hålla ställningarna. </p>
                <p> - En gång kämpades hårda strider mot inkräktare från öst. Kojans
                    armé utgick dock med segern</p>
                <h3>Gamla tidens fall</h3>
                <p>Efter några år av blomstrande tider och en total makt över byn
                    så inträffade ett oförlåtligt förräderi i de högsta skiktet i "grundar-pakten".
                    Förrädarna beslöt sig för att bygga en ny fästning västerut. För att bygga
                    den nya fästningen tog man bräder från kojans västra del. Dessutom rev Jakob
                    hela fängelsetornet i vredesmod. Återstoden av kojan (nedersta våningen) blev
                    lämnad i glömska och saker som man inte fick glömma föll i glömska. Historien
                    om kojan blev till en legend, legenden till en myt och myten till stoft...</p>
                <h3>Nya tiden</h3>
                <p>...och i tre år var kojan utom all kännedom. Mörkret kröp tillbaka
                    till byn, man vågade inte mera gå ut om kvällarna. När till och med Sten "Stone"
                    Björkman höll sig inne om kvällarna så kom Jakob och Erik till sans. Någonting
                    måste göras och det kvickt. Man gav sig ut för att söka efter nya bundsförvanter
                    i byns alla hörn. Man fann en, Niklas Kronqvist som senare kom att kallas
                    "Bossen". Man gav sej ut i skogarna för att leta efter en byggplats för ett
                    nytt fäste. Man fann då grunden av den gamla kojan och beslöt sig för att
                    återuppbygga den för att få tillbaka det gamla herraväldet över Byn. Trion
                    S.B.B. (Sågen, Bäraren och Bossen) kämpade en hård kamp mot mörkrets krafter
                    och utgick igen med seger. Kampen bestod i huvudsak av att hitta bräder Den
                    nya kojan som nu uppstod bestod av bottenvåningens kammare, andravåningens
                    kammare, terrassen, tredjevåningen (centralplanet, norra balkongen, södra
                    balkongen och broarna), fjärdevåningens centralplan, femte våningen (centralplanets
                    balkong, södra vakttornet, broarna och västra vakttornet), sjätte våningen
                    (södra balkongen och norra vakttornet). Kojan var nu åtta meter och trettio
                    centimeter hög. Denna fästning stod i all sin prakt till sommaren 2002 då
                    Jakob och Erik bestämde att den var en fara för folket och att den måste därmed
                    rivas. Detta superba byggnadsverk som hade tagit cirka tio år att fullborda
                    revs på två timmar. Därmed var kojans imperium över*snyft* (som man säger
                    på lounarstårm).</p>
                <h3>Cyberspace tiden</h3>
                <p>Härförarna Jakob och Erik bestämde sig helt enkelt att laga
                    en sida om kojan i cyberspace för att hedra minnet av kojans imperium.</p>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton routerLink={'/'}>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default History;
