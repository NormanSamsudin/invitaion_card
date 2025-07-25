import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

const environment = {
  firebase: {
    apiKey: "AIzaSyDHbn5TSj6Cmpngk-3yScWqRq-tceosZ34",
    authDomain: "invitation-card-640ff.firebaseapp.com",
    projectId: "invitation-card-640ff",
    storageBucket: "invitation-card-640ff.firebasestorage.app",
    messagingSenderId: "711251176783",
    appId: "1:711251176783:web:5834b6ef17510aad2d293a"
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideFirebaseApp(() => {
      console.log('🔥 Initializing Firebase app...');
      const app = initializeApp(environment.firebase);
      console.log('✅ Firebase app initialized:', app.name);
      console.log('📝 Firebase config:', environment.firebase);
      return app;
    }),
    provideFirestore(() => {
      console.log('🔥 Initializing Firestore...');
      const firestore = getFirestore();
      console.log('✅ Firestore initialized for app:', firestore.app.name);
      return firestore;
    }),
    provideStorage(() => {
      console.log('🔥 Initializing Firebase Storage...');
      const storage = getStorage();
      console.log('✅ Firebase Storage initialized for app:', storage.app.name);
      return storage;
    }),
  ]
};