# GetModalities

/chances/get-betting-modalities


- Request

```json:no-line-numbers
{
    "model": {
        "idProduct": "Number" // obligatorio
    }
}
```

- response

::: tip OK
```json:no-line-numbers
{
    "model": [
        { "name": "String", "description": "String", "featuresProduct": "null", "hierarchyChild": "String", "hierarchyClass": "String", "status": "Boolean" }
    ]
}
```
:::
