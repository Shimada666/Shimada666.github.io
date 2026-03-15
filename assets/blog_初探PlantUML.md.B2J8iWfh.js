import{_ as a,o as s,c as p,ae as e}from"./chunks/framework.EHGTsUvI.js";const d=JSON.parse('{"title":"初探 PlantUML","description":"","frontmatter":{"title":"初探 PlantUML"},"headers":[],"relativePath":"blog/初探PlantUML.md","filePath":"blog/初探PlantUML.md","lastUpdated":1773597883000}'),l={name:"blog/初探PlantUML.md"};function t(i,n,o,c,u,r){return s(),p("div",null,[...n[0]||(n[0]=[e(`<p>在工作编写文档的时候，我们不可避免地需要画各种图来更好的解释文档，帮助读者理解意图。 常见的图有思维导图、活动图(流程图)、时序图、用例图等等。</p><p>描述业务流程，一般使用流程图（即活动图）和时序图来表示，参考 <a href="https://plantuml.com/zh/%EF%BC%9B" target="_blank" rel="noreferrer">https://plantuml.com/zh/；</a><br> 模块关系、服务关系等架构图推荐使用 c4 模型，参考 <a href="https://c4model.com/%E3%80%82" target="_blank" rel="noreferrer">https://c4model.com/。</a><br> 可应对大多数场景</p><h2 id="常见图示例" tabindex="-1">常见图示例 <a class="header-anchor" href="#常见图示例" aria-label="Permalink to &quot;常见图示例&quot;">​</a></h2><h3 id="思维导图" tabindex="-1">思维导图 <a class="header-anchor" href="#思维导图" aria-label="Permalink to &quot;思维导图&quot;">​</a></h3><div class="language-puml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">puml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>@startmindmap</span></span>
<span class="line"><span>* 软件</span></span>
<span class="line"><span>  **_ 新增</span></span>
<span class="line"><span>  **_ 修改</span></span>
<span class="line"><span>  **_ 删除</span></span>
<span class="line"><span>  ** 软件实现</span></span>
<span class="line"><span>    ***_ 新增</span></span>
<span class="line"><span>    ***_ 克隆</span></span>
<span class="line"><span>    ***_ 删除</span></span>
<span class="line"><span>@endmindmap </span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuj1HUx5t_PFSsBWK5BQruXMVJDZnTD0_AUR9_tRCfEw6SfnqBNivS0kP0jJnTD-zvtmQW24WCMI-K_xIr--MiDYG-n0I7LA3D4DiLm1oWem00" alt="uml diagram"><h3 id="时序图" tabindex="-1">时序图 <a class="header-anchor" href="#时序图" aria-label="Permalink to &quot;时序图&quot;">​</a></h3><div class="language-puml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">puml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>Client -&gt; Server: SYN,J</span></span>
<span class="line"><span>Server -&gt; Client: SYN,X;ACK,J+1</span></span>
<span class="line"><span>Client -&gt; Server: ACK,X+1</span></span>
<span class="line"><span>|||</span></span>
<span class="line"><span>... 一些数据交换 ...</span></span>
<span class="line"><span>|||</span></span>
<span class="line"><span>Client -&gt; Server: FIN</span></span>
<span class="line"><span>Server -&gt; Client: ACK</span></span>
<span class="line"><span>Server -&gt; Client: FIN</span></span>
<span class="line"><span>Client -&gt; Server: ACK</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEoKpDAr7GjLC8JYqgIosoKWYEzDFnueBmGE8G5H3n26j7PsyTBsr3BFf0CX50cPgQ6YuzFJs59piQdkoQ_MpgXcUzwvxiMlAiTv42K1WiZQdPpTCFYvL08x68WjHYjPxB8JKl1UWf0000" alt="uml diagram"><h3 id="活动图" tabindex="-1">活动图 <a class="header-anchor" href="#活动图" aria-label="Permalink to &quot;活动图&quot;">​</a></h3><div class="language-puml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">puml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>|h| 构建系统</span></span>
<span class="line"><span>start</span></span>
<span class="line"><span>:使用客户端查询预装配置;</span></span>
<span class="line"><span>|#AntiqueWhite|r| 配置分发系统</span></span>
<span class="line"><span>:拉取所有配置列表;</span></span>
<span class="line"><span>if (存在当前构建产物版本?) then (yes)</span></span>
<span class="line"><span>:拉取构建产物已存在的配置列表;</span></span>
<span class="line"><span>:剔除已生效的配置;</span></span>
<span class="line"><span>endif</span></span>
<span class="line"><span>:下发最终配置列表;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>|h|</span></span>
<span class="line"><span>:安装配置;</span></span>
<span class="line"><span>if (安装成功?) then (yes)</span></span>
<span class="line"><span>:上报记录;</span></span>
<span class="line"><span>else (no)</span></span>
<span class="line"><span>:提示失败原因;</span></span>
<span class="line"><span>stop</span></span>
<span class="line"><span>endif</span></span>
<span class="line"><span>|r|</span></span>
<span class="line"><span>:存储执行结果;</span></span>
<span class="line"><span>stop</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/NP7DJi9G48NtVOecRiehq8Nu5AvDB6aJB4hBmgGBOehfBI8OmD-62j9GenR_4WXDuyimSzkty48h0RVtd3dppRa5JJ-ewDMZ4cV81ezz4y8v_Gffw78hXSileX_QzI4OeZMbBnDqlNWoJ8Pc_5HFwaqQ1I9dxEofkd9IbVPbHPUCYi6d2bZdqBhAulBO8D2wHb93X_pfD_705pcbo0lmTWkE3r47I3F5MCp7b3nJOg7pkflZTLbIUU5KqdBhg0qRJ3_J17flReVdWNIJkn4pqAwBFMjj43b9FLIAxC9PWs6YKwEXjJsxB8K516JZs1NiwWMjDjZkFxJ5p4RRYuDtY7fiGqcJU44jBvbRRJgQm-WZ_lRWqeM7Hv5LN3xEA5XhR1CxuSn7Ceu75pJiOD_9F0LcOf_q2m00" alt="uml diagram"><h3 id="用例图" tabindex="-1">用例图 <a class="header-anchor" href="#用例图" aria-label="Permalink to &quot;用例图&quot;">​</a></h3><div class="language-puml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">puml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>left to right direction</span></span>
<span class="line"><span></span></span>
<span class="line"><span>actor &quot;管理员&quot; as admin</span></span>
<span class="line"><span>actor &quot;礼物管理员&quot; as g_admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package 礼物 as gift {</span></span>
<span class="line"><span>usecase &quot;新增礼物&quot; as add_gift</span></span>
<span class="line"><span>usecase &quot;修改/删除礼物&quot; as update_delete_gift</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package 礼物购买记录 as gift_revision {</span></span>
<span class="line"><span>usecase &quot;新增记录&quot; as add_gift_revision</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>admin --&gt; add_gift</span></span>
<span class="line"><span>update_delete_gift &lt;-- g_admin</span></span>
<span class="line"><span>g_admin --&gt; add_gift_revision</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gift ..&gt; gift_revision : include</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/PP71hi5058RtynGdtTVTYuWtQIOpHqrKApFJkn5ROKU2i174naBJXOt4pNqPLTv2jPIoEel_E___dvcQqbHgl-KG1-iQj0TIs0qDN4XaMdWk8PHfJu8H1wjus8j6CmEe0ifRmisbpJ4UR8k0RMK8QLFMf3P21gMII98wn5V8g48mpjCmMYyo_M7EhJlqGax_mNby-8dwo-jyyqRwRKurMXmTJ4Qwq_sClEntfqDu2SBeR_ACjoJ-2fMSzzqZ0mizSlfkdfu5fbbzg_dL0YgccJ_1OnPsNfOavKkbwaUnCWYNEJv7GcheykIBRW00" alt="uml diagram"><h2 id="c4模型" tabindex="-1">C4模型 <a class="header-anchor" href="#c4模型" aria-label="Permalink to &quot;C4模型&quot;">​</a></h2><div class="language-puml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">puml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>!include &lt;C4/C4_Context&gt;</span></span>
<span class="line"><span>!include &lt;C4/C4_Container&gt;</span></span>
<span class="line"><span>Person(user, &quot;用户&quot;)</span></span>
<span class="line"><span>System_Boundary(c1, &quot;业务系统&quot;) {</span></span>
<span class="line"><span>  Container(web,&quot;业务服务&quot;,&quot;web&quot;,&quot;提供对外的业务服务&quot;)</span></span>
<span class="line"><span>  Container(redis,&quot;缓存&quot;,,&quot;缓存数据&quot;)</span></span>
<span class="line"><span>  ContainerDb_Ext(mysql,&quot;数据库&quot;,,&quot;提供数据持久化&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>System_Ext(exchange, &quot;交易系统&quot;, &quot;提供交易能力&quot;)</span></span>
<span class="line"><span>System_Ext(supplyChain, &quot;供应链&quot;, &quot;供应链&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Rel(web, redis, &quot;调用&quot;)</span></span>
<span class="line"><span>Rel(web, mysql, &quot;调用&quot;)</span></span>
<span class="line"><span>Rel(user, exchange, &quot;调用&quot;)</span></span>
<span class="line"><span>Rel(user, web, &quot;调用&quot;)</span></span>
<span class="line"><span>Rel_R(web, exchange, &quot;调用&quot;)</span></span>
<span class="line"><span>Rel(web, supplyChain, &quot;调用&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHOW_FLOATING_LEGEND()</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuLBCp4lEAKr9LR1nDj5tDebtpiyhIQqeiSCgaPYPbrfannMGMbISdwTHMfnQfAEWz7pAYcSTsvKqkO8hYqjIS-ETyalpKXABAZMI3O6oJtRCUjgryFdctSztprVILAZcKb20cwHHdfga0rNnR4ula5JIKGAA0Sbd_HEUx9lzTFtEfqkcFP_LWg964yMCejIKp68TfUTx9ZzTEqD91yPwDdN3izvrg6fTak9TAqeqSYkB2tE0Le1LFDqr6QG9OXz4w5bFuvEThKzxfW5rry9y1TAOMf6SaPYNdWhorgubpsPCXdeBo8VeXuY-QDxxj6is8a10MejB2mfoAfqpWEu0wGPwRTUKbvFtAQ5mDBcuWb9pmA6Y0F6MWjAB3St000PAmMKWpaUJWSG5aWEno89reqZ41q6CnAKFB8dgTBWyLx27VtYycu-_OuYddtkyZwkxgv-BXYQNGsfU2Z1X0G00" alt="uml diagram"><div class="language-puml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">puml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>!include &lt;C4/C4_Context&gt;</span></span>
<span class="line"><span>!include &lt;C4/C4_Container&gt;</span></span>
<span class="line"><span>Person(user, &quot;用户&quot;, &quot;小程序电商系统的潜在用户&quot;)</span></span>
<span class="line"><span>System_Boundary(c1, &quot;小程序电商系统&quot;) {</span></span>
<span class="line"><span>  Container(miniApp, &quot;微信小程序&quot;, &quot;mini&quot;, &quot;用户交互的小程序前端&quot;, $sprite=&quot;weixin&quot;)</span></span>
<span class="line"><span>  Container(mallService, &quot;商城微服务&quot;, &quot;Java, Spring Cloud, Tomcat&quot;, &quot;商品浏览、详情的业务逻辑&quot;, $sprite=&quot;java&quot;)</span></span>
<span class="line"><span>  Container(orderService, &quot;订单微服务&quot;, &quot;Java, Spring Cloud, Tomcat&quot;, &quot;下单、订单的业务逻辑&quot;, $sprite=&quot;java&quot;)</span></span>
<span class="line"><span>  Container(miniService, &quot;小程序微服务&quot;, &quot;Java, Spring Cloud, Tomcat&quot;, &quot;微信授权、推送等业务逻辑&quot;, $sprite=&quot;java&quot;)</span></span>
<span class="line"><span>  ContainerDb(database, &quot;Database&quot;, &quot;MySQL&quot;, &quot;RDBMS数据库&quot;, $sprite=&quot;mysql&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>System_Ext(ecomMiddlePlatform, &quot;电商中台&quot;, &quot;提供 商品中台 库存中台 物流中台 订单中台 等中台能力&quot;)</span></span>
<span class="line"><span>System_Ext(weixinPlatform, &quot;微信公众平台&quot;, &quot;提供 用户授权、支付、推送 等功能&quot;)</span></span>
<span class="line"><span>Rel_R(user, miniApp, &quot;使用&quot;)</span></span>
<span class="line"><span>Rel(miniApp, mallService, &quot;调用&quot;, &quot;https&quot;)</span></span>
<span class="line"><span>Rel(miniApp, orderService, &quot;调用&quot;, &quot;https&quot;)</span></span>
<span class="line"><span>Rel(miniApp, miniService, &quot;调用&quot;, &quot;https&quot;)</span></span>
<span class="line"><span>Rel(orderService, miniService, &quot;调用&quot;, &quot;rpc&quot;)</span></span>
<span class="line"><span>Rel(mallService, miniService, &quot;调用&quot;, &quot;rpc&quot;)</span></span>
<span class="line"><span>Rel_L(miniService, weixinPlatform, &quot;交互&quot;, &quot;https&quot;)</span></span>
<span class="line"><span>Rel_U(weixinPlatform, user, &quot;交互&quot;)</span></span>
<span class="line"><span>Rel_R(orderService, ecomMiddlePlatform, &quot;调用&quot;, &quot;rpc&quot;)</span></span>
<span class="line"><span>Rel_R(mallService, ecomMiddlePlatform, &quot;调用&quot;, &quot;rpc&quot;)</span></span>
<span class="line"><span>Rel(mallService, database, &quot;读/写&quot;)</span></span>
<span class="line"><span>Rel(orderService, database, &quot;读/写&quot;)</span></span>
<span class="line"><span>Rel(miniService, database, &quot;读/写&quot;)</span></span>
<span class="line"><span>SHOW_FLOATING_LEGEND()</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/bLLTRz9G6BxdLrJY1IGaYyakTTa6E3MmJPZnikdeKMlwWMsP46C2OIF00gY3E3SCcJ6AKJwIXOWWxCVOqtR_mdDe-IW37NUdVP_tUPxpdkUqgv9CYNA4Osqt63x4HcX0t7OlBxcNIRV0oo0ghymiK0mFn1NRDX0bWNT4922w2BjMhAhfdtQqWis2LZs4dO9MRC5IIZllQjsAThAlzigmN3LnJbim9ic08zU524zJOimHkZMlr-uaNja8OYJju1YUMGk7CRvVLoxEHbrO7XVj8qDAvxFIUOVKHnYOoMdV6mXnKmgBZ0pks5y29ihmo995WsBP813tc130EgKKhEIHcbhEmUmPvdz0xL4k8eWu-AU4cnKYj8lO4RWG9TlDXgE4sYheNzD_uWczyKLD7Y0RIli4zL_6kth_xQI7vuXjoe4Wqa0SMz3hds2kj805fNs86h3ue7CnSJp5YUsFXhV010P7e-RJwiSaCg7cgvVnX5RBND-4PzT1KpArIqdOWyTSOcv_BFZGXnS1pxe_g9QQQguEEqUJT5nCUi4YljV3e7cZiWE41CxFq3GBjbbAVYA8t20eE6fAkmOBJSof5jue_LF2E47ZDO78OUtOVD0otzJMi68CTrZ1syChFTc3sTDnoh6u4RC9OJEy1p-Kt-_XhtEhl17VyVYA3QLxF9eZLeBP2f916W70aW7p7ewlXjAxG1n6UNnZhB7McqcCGQjdiXoMfi7J2VmtsXgPsM0huxmECHmQaa_Q_I-Sz5bpUsNYnjTWoXJvwChHcDyq4pwSiDNyp2pDCXMmxkAwVTQkYOkWDxfBCFLXvaJdmYnpcOaAtjjwJDxrRQtjtD_S87tU3U-cn-6qhGAUHd-8lm00" alt="uml diagram"><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://cloud.tencent.com/developer/article/1876902" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1876902</a></li><li><a href="https://blog.csdn.net/zhetmdoubeizhanyong/article/details/109501697" target="_blank" rel="noreferrer">https://blog.csdn.net/zhetmdoubeizhanyong/article/details/109501697</a></li></ul>`,22)])])}const m=a(l,[["render",t]]);export{d as __pageData,m as default};
