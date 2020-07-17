#### 1. Explica la diferencia entre == y ====
  R= == valida la igualdad de un dato sin importar el tipo.
    === validad la igualda del dato y el tipo
    ==== lo desconozco
#### 2. ¿Cuál sería el resultado de 19+1+''75''? y explica por que
 R= Se concatena ya que el numero lo convierte a string.
#### 3. ¿Cuáles son los diferentes tipos de errores en JavaScript?
#### 4. Que son los arrow functions e impleméntalo con el siguiente código:
```js
  var saludo = function (nombre) {
    return 'Hola ' + nombre;
  };
  console.log( saludo('Jonathan') );

  // Respuesta
  const saludo = nombre => `hola ${nombre}`;
  console.log( saludo('Ramsses') );

```

#### 5. Explica para que se utiliza this , let , const
  R= this -> hace referencia al contexto en este mismo scope
  let -> define una variable con nombre unico pero que su valor puede ser reasignado
  const -> define una variable con nombre unico y su valor no puede ser reasignado

#### 6. Desarrollar con HTML , js , ES6 una aplicacion que le pida al usuario:
  * Nombre, Apellido Paterno , Apellido Materno, Edad , Fecha de nacimiento y un 
  campo validar (Generar las validaciones que consideres apropiadas para los
  campos anteriores)
  * Si pasa las validaciones le mostraras un campo extra para que pueda acceder su
  RFC sin homoclave y un botón confirmar.
  * Al darle click en confirmar tendrá que evaluar que sea un RFC y segundo que el
  RFC sea correcto conforme a los datos que accedió.

  Adjuntar evidencia (Código fuente, y pantallas que comprueben que se llegó al resultado solo
  si es exitoso el ejercicio.

#### 7. Describe cual es el ambiente mínimo de desarrollo que necesitas para desarrollar una aplicación en react y los factores a considerar para llevar una aplicación a producción.
  R= Tener node instalado y utilizar create-react-app
     Para llevar a producción una aplicación "react" hay que contemplar si solo sera con carga en el cliente o tendra SSR.

#### 8. Describe que son y un ejemplo práctico donde podríamos utilizarlo.
  * Redux: Una libreria que nos permite centralizar el estado de una aplicacion. Se puede utilizar en proyectos donde se requiera acceder a las misma informacion en muchos       componentes diferentes
  * Redux Sagas: Un middleware que te permite manejar los action creators de forma asincrona (la diferencia contra redux thunk es que es mas facil realizar pruebas unitarias)
  * Redux thunk: Al igual que Sagas, es un middlelware. Sirve para retrasar el dispatch envolviendolo en una funcion. Sagas y Thunk podemos utilizarlos cuando necesitemos realizar operaciones asincronas antes de ejecutar el dispatch.
  * Jest: Una libreria que nos permite realizar pruebas unitarias. Debe ser utilizado en proyectos que seran manipulados por distintos equipos y de igual forma para asegurar el funcionamiento en aplicaciones complejas.
  * SASS y LEES: Son preprocesadores de texto para escribir estilos de una forma mas natural. A cualquier proyecto que requiera de una cantidad considerable de estilos.

#### 9. Genera el siguiente ejemplo utilizando SASS
  * Considerar que el tamaño del cuadro de 400 px
  * Tamaño de texto , tipo de letra , texto justificado
  ![](boton.png)