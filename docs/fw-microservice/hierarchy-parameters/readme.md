# Parámetros de jerarquías


- **registrar parámetro de jerarquía**

```js:no-line-numbers
const { createParam } = '@matrixteach/fw-microservice/business/hierarchy-parameters';
await createParam({ ms, nameParameter }, { object, idObject }, parameters, value);
```
- **actualizar parámetro de jerarquía**

```js:no-line-numbers
const { updateParam } = '@matrixteach/fw-microservice/business/hierarchy-parameters';
await updateParam({ ms, nameParameter }, { object, idObject }, parameters, value);
```

- **obetener un parámetro de jerarquía**

```js:no-line-numbers
const { getParameter } = '@matrixteach/fw-microservice/business/hierarchy-parameters';
const parameter = await getParam({ ms, nameParameter }, { object, idObject }, parameters);
```

- **obetener parámetros de jerarquía**

```js:no-line-numbers
const { getParameters } = '@matrixteach/fw-microservice/business/hierarchy-parameters';
const parameters = await getParams({ ms, nameParameter }, parameters);
```
- **obetener parámetro de jerarquía por jerarquía del usuario**

```js:no-line-numbers
const { getParameterWithHierarchy } = '@matrixteach/fw-microservice/business/hierarchy-parameters';
/**
 * @param { String } ms Nombre del microservicio (Mayúscula)
 * @param { String } nameParameter Nombre del parámetro a registrar
 * @param { Object || Array } parameter Parámetros asociados al registro (partitionKey)
 * @param { Array } idsHierarchies Ids de la jearquía por orden de prioridad mayor a menor
*/
const parameterByHierarchy = await getParameterWithHierarchy({ ms, nameParameter }, parameter, idsHierarchies);
```