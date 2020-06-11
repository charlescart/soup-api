# Challenge Soup Api
###### Autor: Charles Rodríguez
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Instalación
1. clona el repositorio de Soup Api:
```
git clone git@github.com:charlescart/soup-api.git
```

2. instalar paquetes de npm:
```
npm i
```

3. basado en el archivo `.env.example` ubicado en la raiz del proyecto generar un archivo `.env` y guardar igualmente en la raíz del proyecto.
```
.env.example => .env
```
4. ejecutar a traves de tu consola ubicado en la carpeta del proyecto el comando `npm start` para levantar el api y para confirmar que efectivamente el api fué levantada exitosamente dirigiendote a traves de tu navegador a `http://localhost:8086/api`:
```
npm start
```


5. Para generar la transpilacion de TypeScript a Js a traves de la consola ubicados en la raiz del proyecto lanzar el comando `npm run tsc`. El transpilado se genera en la raiz del proyecto especificamente en la carpeta dist `/dist`.
<br>***Nota: este paso es opcional y solo si quieres ver el codigo compilado.***

> # Como usar
***coleccion de Postman del Api***
<br> [Documentación Detallada](https://documenter.getpostman.com/view/11620246/Szzg8yR1)
>
***Ejemplo #1:*** Matriz irregular, palabras a buscar: **OIE, E4, 5e, hoL y 1**
<br> Metodo ***POST***
```
localhost:8086/api/soup
```
HEADERS     application/json
<br>BODY raw
```
{
    "soup": [
        ["O", "I", "E"],
        ["I", "I", "X", "4"],
        ["E", "X", "E"],
        ["E", "X", "E", "5"],
        ["E"]
    ],
    "searchWords": ["OIE", "E4", "5e", "hoL", "1"]
}
```
Respuesta:
```
{
  "1": 0,
  "OIE": 3,
  "E4": 2,
  "5E": 2,
  "HOL": 0
}
```

>
***Ejemplo #2:*** Matriz cuadrada, palabra a buscar: **OIE**
<br> Metodo ***POST***
```
localhost:8086/api/soup
```
HEADERS     application/json
<br>BODY raw
```
{
    "soup": [
        ["O", "I", "E"],
        ["I", "I", "X"],
        ["E", "X", "E"],
    ],
    "searchWords": ["OIE"]
}
```
Respuesta:
```
{
  "OIE": 3
}
```
> # Ejecución de test unitarios
1. ejecutar los test unitarios desarrollados con Jest, a traves de tu consola ejecuta:
```
npm t
```
salida:
```
 PASS  src/features/soup/__test__/SoupRepository.spec.ts
 PASS  src/features/home/__test__/HomeController.spec.ts
 PASS  src/features/soup/__test__/SoupController.spec.ts

Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
Snapshots:   17 passed, 17 total
Time:        4.362 s
Ran all test suites.
```
2. ejecutar ***coverage*** con Jest:
```
npm run test:coverage
```
salida:
```
 PASS  src/features/soup/__test__/SoupRepository.spec.ts
 PASS  src/features/home/__test__/HomeController.spec.ts
 PASS  src/features/soup/__test__/SoupController.spec.ts
------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------|---------|----------|---------|---------|-------------------
All files                     |     100 |      100 |     100 |     100 |                   
 src                          |     100 |      100 |     100 |     100 |                   
  server.ts                   |     100 |      100 |     100 |     100 |                   
 src/features/home            |     100 |      100 |     100 |     100 |                   
  HomeController.ts           |     100 |      100 |     100 |     100 |                   
 src/features/soup            |     100 |      100 |     100 |     100 |                   
  SoupController.ts           |     100 |      100 |     100 |     100 |                   
  SoupRepository.ts           |     100 |      100 |     100 |     100 |                   
 src/features/soup/validators |     100 |      100 |     100 |     100 |                   
  soupDto.ts                  |     100 |      100 |     100 |     100 |                   
------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
Snapshots:   17 passed, 17 total
Time:        4.797 s, estimated 5 s
Ran all test suites.

```
Nota: una vez generado el coverage con Jest podrá ir a la raiz del proyecto y dirigirse a:  `/coverage/lcov-report/index.html` y abrir el ***index.html*** con su navegador, así podrá tener una mejor detalle del coverage generado por Jest. 
