## Chatbot

### Introducción

Es un componente programado en React.js cuya función es guiar al usuario para facilitar la navegación dentro de la página web. Su funcionamiento ocurre cuando el usuario envía un mensaje, el chatbot responde de acuerdo al texto ingresado y lo primero que hace es verificar si tenemos alguna respuesta dentro de nuestro diccionario estático, si se encuentra la entrada dentro del diccionario se regresará una respuesta de acuerdo a lo que se encontró, en caso de no encontrarla hará una petición a la API, la cual pasará por un filtro de similaridad en la que se validará si esa entrada tiene alguna similitud con las entradas registradas en el diccionario estático. si es que no se encuentra ninguna similitud, ésta utilizará inteligencia artificial para crear una respuesta de acuerdo a la entrada del usuario.

### Librería

Para el desarrollo del chatbot se utilizó la librería “react simple chatbot”, la cual facilitó el área de diseño, así como la creación de trayectorias. Se puede consultarse toda la documentación en el siguiente link: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation 

#### Componentes del archivo “conversation.js” 

Diccionario: Son los valores estáticos con los cuales se realiza la validación de las entradas. Se puede encontrar src/chatbot/componentes/diccionario.js

ChatbotOutput: Este componente se encarga de extraer el input del usuario para realizar la validación y retornar una respuestas. Recibe dos propiedades: el user_message, que es el input ingresado por el usuario; y value, que es el valor de la posición del array del diccionario estático donde va a buscar.

Output: Se encarga de realizar la validación del lenguaje revisando la variable de localStorage, en caso de que el localStorage se encuentre en inglés y el usuario ingrese un texto que se encuentre en el diccionario de español, renderizar un botón que le permita al usuario cambiar de idioma si así lo desea.Recibe dos propiedades: el input del usuario y el valor que determina en qué objeto buscar.

Cambio de idioma: Este componente es el botón que aparece dependiendo del localStorage. 

Translation: Dicho componente se encarga de realizar la traducción de los textos.

windowChat: Componente principal que se encarga de llevar a cabo las trayectorias de los mensajes, cuenta con un array de objetos en el cual cada objeto es un paso de las trayectorias. Este recibe dos propiedades: trajectory, que es la que se encarga de indicarle al chat en qué página se encuentra para poder renderizar la ruta correcta; y value, que es el valor de la posición del array del diccionario estático donde se va a buscar.
Puede encontrarse la documentación completa en el siguiente link: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation 


#### Componente del archivo “chat-bot.jsx” 

foo: Componente principal del chatbot el cuál renderiza el botón con el que se abre y cierra la ventana del chatbot. Recibe tres propiedades las cuales son showing, el cual mantiene el estado del display de la ventana; value y trajectory.

#### Componente del archivo “componente-API.jsx” 

Este archivo contiene el endpoint de la API, que es el que se presenta a continuación: 
mensaje_del_usuario=”hola”
http://fasta-chatb-1asny6sjisxyu-661199564.us-east-1.elb.amazonaws.com/chat/mensaje_del_usuario.
El cual estará retornando una respuesta al mensaje del usuario.

#### Componente del archivo “notificacion.js” 

Notificación: Se encarga de enviar una notificación en caso de que el usuario no haya abierto el chat en más de 13 segundos.

#### Componente del archivo “botones.js”

Este componente se encarga de renderizar un botón en caso de recibir textualmente el nombre de alguna de las páginas, en caso de presionarlo redireccionará a la página escrita.
