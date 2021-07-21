(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1008:function(n,s,a){"use strict";a.r(s);var p=a(0),t=a.n(p),o=a(2),e=a.n(o),c=a(62),l=a(909),u=a.n(l),k=e.a.bind(u.a);s.default=function(){var n=t.a.useContext(c.ThemeContext);return t.a.createElement("div",{dir:"ltr",className:k("marked",n.className),dangerouslySetInnerHTML:{__html:'<h1 id="scss"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#scss"><span class="icon icon-link" /></a>scss</h1><pre><code class="codeblock language-scss"><span class="token keyword">@import</span> <span class="token string">"compass/reset"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// variables</span>\n<span class="token property"><span class="token variable">$colorGreen</span></span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$colorGreenDark</span></span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$colorGreen</span><span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token selector">div,\n.navbar,\n#header,\ninput[type="input"] </span><span class="token punctuation">{</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$colorGreenDark</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token selector">.home </span><span class="token punctuation">{</span>\n          <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">\'http://placehold.it/20\'</span><span class="token punctuation">)</span> scroll no-repeat 0 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">padding: </span><span class="token punctuation">{</span>\n        <span class="token property">left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">5 </span><span class="token punctuation">{</span>\n    <span class="token selector">.span<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>\n        <span class="token property">width</span><span class="token punctuation">:</span> 20px*<span class="token variable">$i</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">@mixin</span> <span class="token selector">mobile </span><span class="token punctuation">{</span>\n  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span> <span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">@content</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n'}})}},909:function(n,s,a){n.exports={"clinical-lowlight-theme":"marked-module__clinical-lowlight-theme___1Us2w","orion-fusion-theme":"marked-module__orion-fusion-theme___2St_P",marked:"marked-module__marked___361eJ"}}}]);