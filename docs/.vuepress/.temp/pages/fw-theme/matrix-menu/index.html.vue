<template><div><h1 id="matrix-menu" tabindex="-1"><a class="header-anchor" href="#matrix-menu" aria-hidden="true">#</a> matrix-menu</h1>
<CodeGroup>
<CodeGroupItem title="HTML">
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>matrix-menu</span> <span class="token punctuation">/></span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="PROPS">
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token string">"Array"</span><span class="token punctuation">,</span> <span class="token comment">// default: []</span>
<span class="token punctuation">}</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> <span class="token punctuation">{</span> useStoreMatrixMenu <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">'@matrixtech/fw-theme/components/store/matrix-menu'</span><span class="token punctuation">;</span>

<span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> pages <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStoreMatrixMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pages<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div></CodeGroupItem>
</CodeGroup>
</div></template>


