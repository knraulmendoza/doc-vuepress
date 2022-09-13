<template><div><h1 id="getmodalities" tabindex="-1"><a class="header-anchor" href="#getmodalities" aria-hidden="true">#</a> GetModalities</h1>
<p>/chances/get-betting-modalities</p>
<ul>
<li>Request</li>
</ul>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"model"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"idProduct"</span><span class="token operator">:</span> <span class="token string">"Number"</span> <span class="token comment">// obligatorio</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul>
<li>response</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">OK</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"model"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span> <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span> <span class="token property">"featuresProduct"</span><span class="token operator">:</span> <span class="token string">"null"</span><span class="token punctuation">,</span> <span class="token property">"hierarchyChild"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span> <span class="token property">"hierarchyClass"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span> <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Boolean"</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></div>
</div></template>


