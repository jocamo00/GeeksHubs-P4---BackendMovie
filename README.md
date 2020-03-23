# GeeksHubs-P4---BackendMovie

_El proyecto es un backend, donde se puede realizar la consulta o el filtrado de datos relacionados con el mundo del cine. Se puede filtrar actores por id, nombre y apellido. Filtrar peliculas por su id y titulo y filtrar cines por su id, nombre y provincia. También se pueden generar nuevos actores, peliculas y cines mediante un método post.A sido realizado usando node junto con los modulos express-generator, sequelize, sqlite3. Como herramienta de ayuda al desarrollo y pruebas también se a utilizado los modulos nodemon y faker._

## Comenzando 🚀

_Para obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas, necesitaras descargarlo y descomprimirlo. También te será necesario una herramienta que permita el envio de peticiones HTTP REST, como puede ser Postman._


### Pre-requisitos 📋

_Te será necesario descargar el proyecto y una herramienta que te permita el envio de peticiones HTTP REST, aunque si solo vas a realizar consutas GET podrás utilizar un navegardor web._


### Tecnologías🛠️

Programas utilizados para el desarrollo y pruebas del proyecto:

* [VSCode] - Editor de código usado - (https://code.visualstudio.com/).
* [Sequelize - Es un ORM Node.js.
* [Sqlite3] - Sistema de gestión de bases de datos relacional.
* [node.js] - Entorno multiplataforma para la capa del servidor.
* [Express] - Proporciona herramientas para servidores HTTP.
* [Postman] - Herramienta para el envio de peticiones HTTP REST.
* [Faker] - Generador de datos falsos para la realización de pruebas.
* [Nodemon] - Reinicia automáticamente el servidor.
*[GitHub] - Control de versiones.


### Instalación 🔧

Requiere [Node.js](https://nodejs.org/) v12+ para ejecutarse.

Una vez descargado, descomprimido y ubicado en el directorio del proyecto, instale las dependencias y devDependencies.

```sh
$ npm install -d
```

Inicie el servidor

```sh
$ npm start
```

Las instrucciones sobre cómo usarlas en su propia aplicación están vinculadas a continuación.
GitHub  [plugins/github/README.md][PlGh] 


#### Código

Conector Base de Datos
```sh
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dbPeliculas.sqlite'
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
```


Modelo de la tabla Actor
```sh
class Actor extends Sequelize.Model {}

Actor.init(
    {
        nombre: { type: Sequelize.STRING },
        apellido: { type: Sequelize.STRING }
    },
    {
        sequelize,
        modelName: 'actor'
    });
```


Ruta para listar todos los actores
```sh
router.get('/', (req, res, next) => {
  Actor.findAll()
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
});
```


Filtrar actor por nombre
```sh
// Filtrar actor por nombre
router.get('/:nombre', (req, res) => {
  let _nombre = req.params.nombre
  Actor.findAll({ where: { nombre: _nombre }}).then( actores => {
      res.json(actores);
  });
});
```


Crear actor
```sh
router.post('/', (req, res)=> {
  Actor.create(
    { 
      nombre: req.body.nombre,
      apellido: req.body.apellido
    })
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
  });
```


## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/jocamo00/GeeksHubs-P4---BackendMovie.git)

## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/jocamo00/GeeksHubs-P4---BackendMovie.git).

## Autores ✒️

* **Jose Carreres** - *Todo el trabajo* - [jocamo00](https://github.com/jocamo00)

## Licencia 📄

Este proyecto está bajo la Licencia http://www.apache.org/licenses/LICENSE-2.0









