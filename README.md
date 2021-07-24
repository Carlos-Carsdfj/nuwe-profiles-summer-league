# Perfil de usuario y administración de datos
## Reto individual semana 1 del Summer Coding League de Nuwe

### User stories 📝
```
Desde NUWE la idea que teníamos al diseñar el perfil era poder mostrar rápidamente lo siguiente:
    • Información general 
    • Información profesional 
    • Hard & Soft skills realizadas en NUWE 
Por eso proponemos las siquientes User stories a completar:
    • Task-1: Maquetar el header con la información general del usuario (PC y mobile) --> Primera Card 
    • Task-2: Maquetar la segunda card con la información profesional (PC y mobile) 
    • Task-3: Maquetar la card con las gráficas de skills validadas (PC y mobile) 
    • Task-4: Agregar gestión del estado utilizando Redux (Recomendado) o 
      en su defecto hooks o cualquier otra librera para hacerlo. 
    • Task-5: Agregar la funcionalidad de edición para al Task-1 y Task-2 a través 
      o de un Dialog como hacemos en NUWE o crendo una zona de edición en la própia card 
    • Task-6: Permitir al usuario escoger una imagen de de cabecera utilizando la API de Unsplash API 
```



## Solución  al desafío 

*Tecnología usada*

```
├── jsconfig.json
├── package.json
├── package-lock.json 
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── constSetting.js
│   ├── firebase
│   │   └── firebaseConfig.js
│   ├── hooks
│   │   ├── useAuth.js
│   │   └── useDB.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── pages
│   │   ├── login
│   │   │   └── index.js
│   │   ├── profile
│   │   │   └── index.js
│   │   └── userList
│   │       └── index.js
│   ├── reducer
│   │   ├── actions.js
│   │   ├── store.js
│   │   ├── types.js
│   │   └── userReducer.js
│   ├── reportWebVitals.js
│   ├── routes
│   │   └── PrivateRoutes.js
│   └── setupTests.js
└── yarn.lock
```
