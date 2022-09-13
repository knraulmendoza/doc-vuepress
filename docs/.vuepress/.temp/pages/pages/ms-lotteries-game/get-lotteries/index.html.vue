<template><div><h1 id="getlottery" tabindex="-1"><a class="header-anchor" href="#getlottery" aria-hidden="true">#</a> GetLottery</h1>
<p>/chance/get-lotteries</p>
<ul>
<li>Request</li>
</ul>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"model"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"idLottery"</span><span class="token operator">:</span> <span class="token string">"Number"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul>
<li>response</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">OK</p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"model"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token property">"posCode"</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></div>
<div class="custom-container danger"><p class="custom-container-title">Error</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Esta lotería no existe'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div>
</div></template>


