<template><div><h1 id="parametros-de-jerarquias" tabindex="-1"><a class="header-anchor" href="#parametros-de-jerarquias" aria-hidden="true">#</a> Parámetros de jerarquías</h1>
<ul>
<li><strong>registrar parámetro de jerarquía</strong></li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createParam <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'@matrixteach/fw-microservice/business/hierarchy-parameters'</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> <span class="token function">createParam</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ms<span class="token punctuation">,</span> nameParameter <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> object<span class="token punctuation">,</span> idObject <span class="token punctuation">}</span><span class="token punctuation">,</span> parameters<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li><strong>actualizar parámetro de jerarquía</strong></li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> updateParam <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'@matrixteach/fw-microservice/business/hierarchy-parameters'</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> <span class="token function">updateParam</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ms<span class="token punctuation">,</span> nameParameter <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> object<span class="token punctuation">,</span> idObject <span class="token punctuation">}</span><span class="token punctuation">,</span> parameters<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li><strong>obetener un parámetro de jerarquía</strong></li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getParameter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'@matrixteach/fw-microservice/business/hierarchy-parameters'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> parameter <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getParam</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ms<span class="token punctuation">,</span> nameParameter <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> object<span class="token punctuation">,</span> idObject <span class="token punctuation">}</span><span class="token punctuation">,</span> parameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li><strong>obetener parámetros de jerarquía</strong></li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getParameters <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'@matrixteach/fw-microservice/business/hierarchy-parameters'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> parameters <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ms<span class="token punctuation">,</span> nameParameter <span class="token punctuation">}</span><span class="token punctuation">,</span> parameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li><strong>obetener parámetro de jerarquía por jerarquía del usuario</strong></li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getParameterWithHierarchy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'@matrixteach/fw-microservice/business/hierarchy-parameters'</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> String <span class="token punctuation">}</span></span> <span class="token parameter">ms</span> Nombre del microservicio (Mayúscula)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> String <span class="token punctuation">}</span></span> <span class="token parameter">nameParameter</span> Nombre del parámetro a registrar
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Object <span class="token operator">|</span><span class="token operator">|</span> Array <span class="token punctuation">}</span></span> <span class="token parameter">parameter</span> Parámetros asociados al registro (partitionKey)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Array <span class="token punctuation">}</span></span> <span class="token parameter">idsHierarchies</span> Ids de la jearquía por orden de prioridad mayor a menor
*/</span>
<span class="token keyword">const</span> parameterByHierarchy <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getParameterWithHierarchy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ms<span class="token punctuation">,</span> nameParameter <span class="token punctuation">}</span><span class="token punctuation">,</span> parameter<span class="token punctuation">,</span> idsHierarchies<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


