# Markdown Links

## Índice

* [1. Definición](#1-definición)
* [2. Instalación](#2-instalación)
* [3. Uso](#3-uso)


## 1. Definición

Md-links es una librería que lee y analiza archivos en formato **MARKDOWN**.
Verifica los links que contenga el archivo .md, muestra su estado y cuenta tanto el total de los enlaces, 
como los que son válidos y los que no.
Esta librería esta desarrollada en Node.js.

## 2. Instalación

Instalar md-links con el siguiente comando:

```sh
$ npm i md-links-angelicab
```

## 3. Uso

Para ver los links extraidos de los archivos .md hay dos opciones, uno analizara el archivo especifico y el otro algún directorio: Se puede extraer todos los links presentes en el archivo o directorio con alguna de las siguientes líneas:

```sh
$ md-links nombredelarchivo.md
$ md-links ./(Directorio actual)
```

Resultado:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```
El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

