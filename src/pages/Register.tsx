import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { text } from 'ionicons/icons';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Register.css';

const Register: React.FC = () => {

  const [nombre, setNombre] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleRegister = () => {
    console.log(nombre, email, password)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Registro  </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Registro</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>

          <IonList>
            <IonItem>
              <IonLabel position="floating">Nombre completo</IonLabel>
              <IonInput value={nombre} onIonChange={(e) => setNombre(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Correo electrónico</IonLabel>
              <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
          </IonList>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol size="8" offset="2">
              <IonButton expand="block" onClick={handleRegister}>Registrarse</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
