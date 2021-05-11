# CHALLENGE PARA EL BOOTCAMP II PLATAFORMA 5

- Necesitas tener una instalacion de npm o yarn (versiones estables).

- Clonar el repositorio con `git clone https://github.com/SimonSP/bootcampP5Challenge.git`.

## BACKEND

- Acceder al directorio con `cd backend`

- Instalar las dependencias con `npm install` o `yarn install`

- Crea en el root del directorio `backend` un archivo `.env` con el siguiente contenido de ejemplo y configura tus preferencias:

  ```
  #COMMON
  PORT=4000
  TIMEZONE=America/Argentina/Buenos_Aires

  #LOCAL/DEV ENV
  NODE_ENV=development
  DB=baggageStore
  DB_HOST=localhost
  DB_USER=postgres
  DB_PASSWORD=postgres
  ```

- Para configurar la base de datos, estando en el directorio backend, ejecuta los siguientes comandos en orden:
  `npm run db:create && npm run db:migrate && npm run db:seed`

- Revisa los puertos en las variables de entorno y ejecuta `npm run dev` o `yarn dev` para iniciarlo en modo desarrollo o bien`npm start`

## FRONTEND

- Acceder al directorio con `cd frontend`

- Instalar las dependencias con `npm install` o `yarn install`

- Puedes personalizar el puerto del backend al que se va a llamar creando un archivo `.env` en el root de la carpeta frontend con el siguiente contenido:

  `REACT_APP_API_URL=4000`

- Ejecuta `npm start` o `yarn start` para lanzar el cliente

- La aplicacion en ReactJS deberia inicializarse en el puerto 3000, por el contrario, el servidor deberia correr en el puerto 4000

## Uso y dudas

- Se puede crear usuarios asignandolos a vuelos predefinidos (existen vuelos disponibles y no disponibles)

- Los codigos de vuelo con los que se puede probar la aplicacion son los siguientes:

```
A1D01
A1D02
A1D03
A1D04
A1D05
A1D06
A1D07
A1D08
A1D09
A1D10
```

- Para dudas pueden dejarme un correo
