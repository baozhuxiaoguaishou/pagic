import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "_layout.tsx",
        "link": "docs/layout.html"
    },
    'next': {
        "text": "插件",
        "link": "docs/plugins.html"
    },
    'sidebar': [
        {
            "text": "介绍",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "text": "基本用法",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "text": "配置文件",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "text": "页面内容",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "text": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "text": "主题",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "text": "插件",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "text": "部署",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "text": "示例网站",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "text": "局限性",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ],
    config: { "root": "/", ...projectConfig },
    'pagePath': "docs/themes.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/themes.html",
    'title': "主题",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>主题</h1>\n<p>本章会介绍如何使用 Pagic 主题，以及如何开发主题。</p>\n<p>如果你想查看所有主题的列表及其支持的特性，请访问<a href="/themes/">主题列表</a>。</p>\n<h2 id="%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F">使用方式<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F">§</a></h2>\n<h3 id="%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98">官方主题<a class="anchor" href="#%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98">§</a></h3>\n<p>Pagic 拥有官方的 default, docs, blog 等主题，在 <code>pagic.config.ts</code> 中配置 <code>theme</code> 即可使用。默认会使用 <code>default</code> 主题：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> <span class="token string">\'default\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%BB%E9%A2%98">第三方主题<a class="anchor" href="#%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%BB%E9%A2%98">§</a></h3>\n<p>当使用第三方主题时，<code>theme</code> 的取值应为一个完整的入口文件链接：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master/mod.ts">https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master/mod.ts</a>\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E4%B8%BB%E9%A2%98%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">主题支持的插件<a class="anchor" href="#%E4%B8%BB%E9%A2%98%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">§</a></h3>\n<p>主题决定了页面如何展示，插件决定了页面支持的特性。</p>\n<p>选择了主题后，我们可以添加插件来扩展网页的特性，但前提是主题支持此插件。</p>\n<p>以 <code>sidebar</code> 插件为例，<code>sidebar</code> 插件会在页面左侧展示一个配置好的侧边栏，但是并不是所有主题都支持此插件，比如说 <code>default</code> 主题是一个非常基础的主题，只支持最基本的功能，所以不支持 <code>sidebar</code> 插件。不过 <code>docs</code> 主题和 <code>blog</code> 主题均支持 <code>sidebar</code> 插件。</p>\n<p>一般可以在主题的文档中查看其支持的插件列表。</p>\n<h3 id="%E4%B8%BB%E9%A2%98%E7%9A%84%E9%85%8D%E7%BD%AE">主题的配置<a class="anchor" href="#%E4%B8%BB%E9%A2%98%E7%9A%84%E9%85%8D%E7%BD%AE">§</a></h3>\n<p>在 <code>pagic.config.ts</code> 中可以配置主题相关的选项，常见的选项包括 <code>title</code>, <code>description</code>, <code>head</code> 等。它们的含义和用法可以参考<a href="./config.html#%E9%A1%B5%E9%9D%A2%E5%86%85%E5%AE%B9">配置文件</a>。</p>\n<h4 id="%E7%BD%91%E7%AB%99%E7%9A%84%E9%85%8D%E7%BD%AE%EF%BC%9F%E4%B8%BB%E9%A2%98%E7%9A%84%E9%85%8D%E7%BD%AE%EF%BC%9F%E6%8F%92%E4%BB%B6%E7%9A%84%E9%85%8D%E7%BD%AE%EF%BC%9F">网站的配置？主题的配置？插件的配置？<a class="anchor" href="#%E7%BD%91%E7%AB%99%E7%9A%84%E9%85%8D%E7%BD%AE%EF%BC%9F%E4%B8%BB%E9%A2%98%E7%9A%84%E9%85%8D%E7%BD%AE%EF%BC%9F%E6%8F%92%E4%BB%B6%E7%9A%84%E9%85%8D%E7%BD%AE%EF%BC%9F">§</a></h4>\n<p>你可能已经发现了，不像一些其他的静态网站生成器对于网站、主题和插件拥有不同的配置文件（或配置项），Pagic 只拥有一个配置文件 <code>pagic.config.ts</code>。</p>\n<p>你也许会有一些疑惑：这不会很混乱吗？主题和插件之间的配置不会冲突吗？</p>\n<p>但其实 Pagic 这么设计是有其道理的：</p>\n<h5 id="1.-%E4%B8%80%E4%B8%AA%E9%85%8D%E7%BD%AE%E9%A1%B9%E5%8F%AF%E8%83%BD%E9%9C%80%E8%A6%81%E5%90%8C%E6%97%B6%E8%A2%AB%E4%B8%BB%E9%A2%98%E5%92%8C%E6%8F%92%E4%BB%B6%E8%AF%BB%E5%8F%96">1. 一个配置项可能需要同时被主题和插件读取<a class="anchor" href="#1.-%E4%B8%80%E4%B8%AA%E9%85%8D%E7%BD%AE%E9%A1%B9%E5%8F%AF%E8%83%BD%E9%9C%80%E8%A6%81%E5%90%8C%E6%97%B6%E8%A2%AB%E4%B8%BB%E9%A2%98%E5%92%8C%E6%8F%92%E4%BB%B6%E8%AF%BB%E5%8F%96">§</a></h5>\n<p>以 <code>sidebar</code> 为例，我们在 <code>pagic.config.ts</code> 中配置了这样的 <code>sidebar</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'/docs/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">\'docs/introduction.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/usage.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/config.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/content.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/layout.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/themes.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/plugins.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/deployment.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/demos.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/limitations.md\'</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>那么：</p>\n<ul>\n<li><code>sidebar</code> 插件需要解析它，并将其转化为 <code>React.ReactElement</code></li>\n<li><code>docs</code> 主题需要支持渲染 <code>sidebar</code>，并提供折叠、SPA 跳转等功能</li>\n</ul>\n<p>可见将 <code>sidebar</code> 的配置归属于主题的配置是不合适的，归属于插件的配置也是不合适的。</p>\n<h5 id="2.-%E6%8F%92%E4%BB%B6%E5%92%8C%E6%8F%92%E4%BB%B6%E4%B9%8B%E9%97%B4%E5%8F%AF%E8%83%BD%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB">2. 插件和插件之间可能有依赖关系<a class="anchor" href="#2.-%E6%8F%92%E4%BB%B6%E5%92%8C%E6%8F%92%E4%BB%B6%E4%B9%8B%E9%97%B4%E5%8F%AF%E8%83%BD%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB">§</a></h5>\n<p>以 <code>prev_next</code> 插件为例，它支持在页面底部自动插入上一页下一页的链接。但是它需要依赖 <code>sidebar</code> 的配置才能知道上一页下一页的链接是什么。</p>\n<p>所以 <code>prev_next</code> 插件需要能够读取到 <code>sidebar</code> 的配置，故将配置统一放到 <code>pagic.config.ts</code> 中更合适。</p>\n<h5 id="3.-%E8%BF%99%E6%A0%B7%E5%8F%AF%E4%BB%A5%E9%99%8D%E4%BD%8E%E7%94%A8%E6%88%B7%E7%9A%84%E7%90%86%E8%A7%A3%E6%88%90%E6%9C%AC">3. 这样可以降低用户的理解成本<a class="anchor" href="#3.-%E8%BF%99%E6%A0%B7%E5%8F%AF%E4%BB%A5%E9%99%8D%E4%BD%8E%E7%94%A8%E6%88%B7%E7%9A%84%E7%90%86%E8%A7%A3%E6%88%90%E6%9C%AC">§</a></h5>\n<p>用户不用再思考一个配置到底是属于主题还是插件了，统一在 <code>pagic.config.ts</code> 中配置即可。</p>\n<h5 id="%E5%8F%AF%E6%98%AF%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E5%90%84%E7%A7%8D%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%BB%E9%A2%98%E5%92%8C%E6%8F%92%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%8D%E4%BC%9A%E6%9C%89%E5%86%B2%E7%AA%81%E5%91%A2%EF%BC%9F">可是如何保证各种第三方主题和插件之间的配置不会有冲突呢？<a class="anchor" href="#%E5%8F%AF%E6%98%AF%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E5%90%84%E7%A7%8D%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%BB%E9%A2%98%E5%92%8C%E6%8F%92%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%8D%E4%BC%9A%E6%9C%89%E5%86%B2%E7%AA%81%E5%91%A2%EF%BC%9F">§</a></h5>\n<p>首先，插件的配置项一般与插件名一致（比如 <code>sidebar</code> 插件就提供了 <code>sidebar</code> 配置项），这保证了不同插件之间一般不会冲突。</p>\n<p>其次，我们将一些通用的配置项整理成文档，第三方主题和插件的开发者应尽可能参考<a href="./config.html">此文档</a>，避免产生冲突。</p>\n<p>最后，这种设计其实约束了第三方主题和插件的开发者，使得大家需要按照同样的标准来设计配置项，意味着 Pagic 的第三方主题和插件拥有了更高的质量。</p>\n<h2 id="%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E4%B8%BB%E9%A2%98">如何开发主题<a class="anchor" href="#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E4%B8%BB%E9%A2%98">§</a></h2>\n<p>恭喜你即将成为 Pagic 主题的开发者！</p>\n<p>只要理解了 Pagic 主题的运行机制，就可以轻松的开发出一个 Pagic 主题了。</p>\n<h3 id="%E4%B8%BB%E9%A2%98%E7%9A%84%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6">主题的运行机制<a class="anchor" href="#%E4%B8%BB%E9%A2%98%E7%9A%84%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6">§</a></h3>\n<p>Pagic 主题的运行机制很容易理解，甚至用一句话就可以解释清楚：</p>\n<blockquote>\n<p>Pagic 构建时会先把主题中的文件全部「复制」到用户的项目目录下，然后再运行 <code>pagic build</code> 脚本。</p>\n</blockquote>\n<p>比如一个主题若包含以下文件：</p>\n<pre class="language-autoit"><code class="language-autoit">pagic_theme_custom<span class="token operator">/</span>\n|── assets\n|   └── index<span class="token punctuation">.</span>css\n└── _layout<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>用户的项目的目录结构如下：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>那么当用户使用此主题后，用户的项目的目录结构就会「变成这样」：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── assets\n|   └── index<span class="token punctuation">.</span>css\n|── _layout<span class="token punctuation">.</span>tsx\n|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>此时执行 <code>pagic build</code> 时，<code>assets/index.css</code> 会被复制到 <code>dist/assets/index.css</code> 中，<code>README.md</code> 会以 <code>_layout.tsx</code> 为模版来渲染，生成 <code>dist/index.html</code>：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   |── assets\n|   |   └── index<span class="token punctuation">.</span>css\n|   └── index<span class="token punctuation">.</span>html\n|── assets\n|   └── index<span class="token punctuation">.</span>css\n|── _layout<span class="token punctuation">.</span>tsx\n|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>Pagic 构建时每个页面文件（<code>md/tsx</code>）均会遵循 <a href="./layout.html">_layout.tsx 章节</a>中描述的规则来查找它对应的模版文件。</p>\n<p>一个典型的应用是在主题中编写一个子模版，然后要求使用此主题的项目的目录结构符合此约定。</p>\n<p>比如主题可以创建一个 <code>posts/_layout.tsx</code> 文件：</p>\n<pre class="language-autoit"><code class="language-autoit">pagic_theme_custom<span class="token operator">/</span>\n|── assets\n|   └── index<span class="token punctuation">.</span>css\n|── posts\n|   └── _layout<span class="token punctuation">.</span>tsx\n└── _layout<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>这样用户的 <code>posts</code> 目录下的页面就会以 <code>posts/_layout.tsx</code> 作为模版来渲染了：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── posts\n|   └── hello<span class="token punctuation">.</span>md    # 此页面会以主题中的 posts<span class="token operator">/</span>_layout<span class="token punctuation">.</span>tsx 作为模版来渲染\n|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>需要注意的是，主题中的文件并不会真的「复制」到用户的项目目录中，我们把这个「复制」看作是一种虚拟的执行即可。</p>\n<h3 id="%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6">入口文件<a class="anchor" href="#%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6">§</a></h3>\n<h3 id="props"><code>props</code><a class="anchor" href="#props">§</a></h3>\n<h3 id="%E5%8F%82%E8%80%83%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98">参考官方主题<a class="anchor" href="#%E5%8F%82%E8%80%83%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98">§</a></h3>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F">使用方式</a><ol><li><a href="#%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98">官方主题</a></li><li><a href="#%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%BB%E9%A2%98">第三方主题</a></li><li><a href="#%E4%B8%BB%E9%A2%98%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6">主题支持的插件</a></li><li><a href="#%E4%B8%BB%E9%A2%98%E7%9A%84%E9%85%8D%E7%BD%AE">主题的配置</a><ol></ol></li></ol></li><li><a href="#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E4%B8%BB%E9%A2%98">如何开发主题</a><ol><li><a href="#%E4%B8%BB%E9%A2%98%E7%9A%84%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6">主题的运行机制</a></li><li><a href="#%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6">入口文件</a></li><li><a href="#props">props</a></li><li><a href="#%E5%8F%82%E8%80%83%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98">参考官方主题</a></li></ol></li></ol></nav>'
        } })
};
