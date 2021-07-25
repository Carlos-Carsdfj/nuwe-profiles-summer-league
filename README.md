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

  Tecnología usada
  ---------------
 
 * ### Lenguaje
    * Javascript
 * #### Herramientas 
    * **Create React App**: Ambiente de desarrollo que pre-configura un proyecto base
      para usar con las dependencias React y ReactDom.
      
    * **Firebase**: ramework serveless.
    
    * **Unsplash**: Es una api que nos permite consumir y acceder remotamente a toda la galería de fotografías de Unsplash.com. Con este puedes brindarles a tus usarios todo el repertorio de fotos para que agreguen sus covers de perfiles que tienen en tu aplicación web.

* #### Dependencias 
    * **Material-ui/core**: Proporciona una serie de componentes para React js, agilizando el desarrollo 
del diseño de interfaz de usuario así como algunos otros componentes que facilitan algunos comportamientos extensos o repetitivo en material de código.

   * **Material-ui/icons**: Nos provee de todos los iconos que ofrece  **Material**.

   * **Material-ui/lab**: Este paquete aloja componentes en incubación que todavía no están listos para estar en core, pero que esto no te asuste lo que significa es que sigue un movimiento de cambio mas repentino que los paquetes de core pude contener herramientas muy interesante como el Auto completado de campo de texto.  
   * **Material-ui/styles**: Solución de estilos de Material-ui puede ser usado con cualquier
          componente de React aún si no se esta utilizando material-ui/core en el 
          proyecto.  
   
   * **Firebase**: Es nuestro SDK para comunicarnos con nuestro proyecto creado en firebase, poder usar la autentificación y la base de datos que dicho servelessnos provee. 
   
   *  **React-firebaseui**: Proporciona componentes que maneja un flujo de UI para iniciar sesión , nos ayuda a no tener que construir desde cero dicho sistema de interfaz de usuario , esta construida sobre firebase-auth.

   * **Redux**:Contenedor predecible del estado de aplicaciones JavaScript.corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a 
          edición en vivo combinado con un depurador sobre una línea de tiempo.  

   * **React-redux**:Este paquete contiene una serie de hooks y funciones que nos facilita la 
          integración  mantenimiento de Redux para proyecto realizados con React.
          
   * **Redux-thunk**: Permite escribir creadores de acciones que retornan una función en vez de un objeto de acción típico.  Puede ser usado para retrasar el envío de una acción hasta que se cumpla una línea de código asíncrona.
   
   * **React-router-dom**: Colección de componentes de navegación para usar en Reac, con esta librería
          podemos obtener un enrutamiento dinámico es la magia por así decirlo que nos permite también renderizar componentes mediante rutas        
 

    
 

## Directorio en arbol  del proyecto
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



 <img src="https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/readmeImagenes%2Fbuscar.svg?alt=media&token=9129a939-ecd5-4e3a-bfa7-ec8d028598dd" width="200" height="200" />
 
 ## Calidad del codigo
