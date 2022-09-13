# matrix-menu

:::: code-group
::: code-group-item HTML
```html:no-line-numbers
<matrix-menu />
```
:::
::: code-group-item PROPS
```json:no-line-numbers
{
    "pages": "Array", // default: []
}
```
:::
::: code-group-item JS
```js:no-line-numbers

const { useStoreMatrixMenu } = '@matrixtech/fw-theme/components/store/matrix-menu';

setup () {
    const { pages } = useStoreMatrixMenu();
    pages.value = [
        { page: '', title: '', component: '' }
    ];
} 
```
:::
::::