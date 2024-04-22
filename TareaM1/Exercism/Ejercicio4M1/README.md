# Descripción del Proyecto de Decodificación de Resistencias

## Importación de Módulos y Definición de Constantes y Tipos

- El proyecto utiliza `React`, un framework de JavaScript para construir interfaces de usuario, y la función useState de `React` para gestionar el estado de los componentes.
Se define la constante `COLORS`  que almacena los colores utilizados en las bandas de las resistencias.
Se crea un tipo Color que representa los nombres de los colores disponibles para las bandas de las resistencias.

## Función decodedValue

- La función decodedValue toma como entrada un array con dos colores de resistencia y devuelve el valor numérico de la resistencia codificada. Utiliza el método indexOf para encontrar la posición de cada color en el array `COLORS`. El valor de la resistencia se calcula multiplicando el índice del primer color por 10 y sumándole el índice del segundo color.

## Componente ResistorComponent

-ResistorComponent es el componente principal de la aplicación.

## Estados

- Se utilizan los hooks `useState` para crear dos estados, `colorName` y `colorValue`, que representan el color ingresado por el usuario y su valor numérico, respectivamente.

## Funciones de Manejo de Eventos

- `handleInputChange` se ejecuta cuando cambia el valor del `input` y actualiza el estado colorName.

- `handleButtonClick`  se ejecuta al hacer clic en el botón "Submit". Obtiene el valor numérico del color ingresado y muestra un mensaje de alerta con el nombre y el valor del color.

## Renderizado

-En el retorno del componente, se renderiza un input donde el usuario puede ingresar el nombre del color y un botón "Submit" que al hacer clic llama a la función `handleButtonClick.`


*https://youtu.be/u-tezBNSMnE*
