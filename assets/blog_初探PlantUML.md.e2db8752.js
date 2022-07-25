import{_ as t,c as e,o as n,d as o}from"./app.35f5d916.js";const h='{"title":"\u521D\u63A2 PlantUML","description":"","frontmatter":{"title":"\u521D\u63A2 PlantUML"},"headers":[{"level":2,"title":"\u5E38\u89C1\u56FE\u793A\u4F8B","slug":"\u5E38\u89C1\u56FE\u793A\u4F8B"},{"level":3,"title":"\u601D\u7EF4\u5BFC\u56FE","slug":"\u601D\u7EF4\u5BFC\u56FE"},{"level":3,"title":"\u65F6\u5E8F\u56FE","slug":"\u65F6\u5E8F\u56FE"},{"level":3,"title":"\u6D3B\u52A8\u56FE","slug":"\u6D3B\u52A8\u56FE"},{"level":3,"title":"\u7528\u4F8B\u56FE","slug":"\u7528\u4F8B\u56FE"},{"level":2,"title":"C4\u6A21\u578B","slug":"c4\u6A21\u578B"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"blog/\u521D\u63A2PlantUML.md","lastUpdated":1658737092000}',a={},u=o(`<p>\u5728\u5DE5\u4F5C\u7F16\u5199\u6587\u6863\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u53EF\u907F\u514D\u5730\u9700\u8981\u753B\u5404\u79CD\u56FE\u6765\u66F4\u597D\u7684\u89E3\u91CA\u6587\u6863\uFF0C\u5E2E\u52A9\u8BFB\u8005\u7406\u89E3\u610F\u56FE\u3002 \u5E38\u89C1\u7684\u56FE\u6709\u601D\u7EF4\u5BFC\u56FE\u3001\u6D3B\u52A8\u56FE(\u6D41\u7A0B\u56FE)\u3001\u65F6\u5E8F\u56FE\u3001\u7528\u4F8B\u56FE\u7B49\u7B49\u3002</p><p>\u63CF\u8FF0\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u4E00\u822C\u4F7F\u7528\u6D41\u7A0B\u56FE\uFF08\u5373\u6D3B\u52A8\u56FE\uFF09\u548C\u65F6\u5E8F\u56FE\u6765\u8868\u793A\uFF0C\u53C2\u8003 <a href="https://plantuml.com/zh/%EF%BC%9B" target="_blank" rel="noopener noreferrer">https://plantuml.com/zh/\uFF1B</a><br> \u6A21\u5757\u5173\u7CFB\u3001\u670D\u52A1\u5173\u7CFB\u7B49\u67B6\u6784\u56FE\u63A8\u8350\u4F7F\u7528 c4 \u6A21\u578B\uFF0C\u53C2\u8003 <a href="https://c4model.com/%E3%80%82" target="_blank" rel="noopener noreferrer">https://c4model.com/\u3002</a><br> \u53EF\u5E94\u5BF9\u5927\u591A\u6570\u573A\u666F</p><h2 id="\u5E38\u89C1\u56FE\u793A\u4F8B" tabindex="-1">\u5E38\u89C1\u56FE\u793A\u4F8B <a class="header-anchor" href="#\u5E38\u89C1\u56FE\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u601D\u7EF4\u5BFC\u56FE" tabindex="-1">\u601D\u7EF4\u5BFC\u56FE <a class="header-anchor" href="#\u601D\u7EF4\u5BFC\u56FE" aria-hidden="true">#</a></h3><div class="language-puml"><pre><code>@startuml
@startmindmap
* \u8F6F\u4EF6
  **_ \u65B0\u589E
  **_ \u4FEE\u6539
  **_ \u5220\u9664
  ** \u8F6F\u4EF6\u5B9E\u73B0
    ***_ \u65B0\u589E
    ***_ \u514B\u9686
    ***_ \u5220\u9664
@endmindmap 
@enduml
</code></pre></div><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN80it8pyr9o4mkuj1HUx5t_PFSsBWK5BQruXMVJDZnTD0_AUR9_tRCfEw6SfnqBNivS0kP0jJnTD-zvtmQW24WCMI-K_xIr--MiDYG-n0I7LA3D4DiLm1oWem00" alt="uml diagram"><h3 id="\u65F6\u5E8F\u56FE" tabindex="-1">\u65F6\u5E8F\u56FE <a class="header-anchor" href="#\u65F6\u5E8F\u56FE" aria-hidden="true">#</a></h3><div class="language-puml"><pre><code>@startuml
Client -&gt; Server: SYN,J
Server -&gt; Client: SYN,X;ACK,J+1
Client -&gt; Server: ACK,X+1
|||
... \u4E00\u4E9B\u6570\u636E\u4EA4\u6362 ...
|||
Client -&gt; Server: FIN
Server -&gt; Client: ACK
Server -&gt; Client: FIN
Client -&gt; Server: ACK
@enduml
</code></pre></div><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEoKpDAr7GjLC8JYqgIosoKWYEzDFnueBmGE8G5H3n26j7PsyTBsr3BFf0CX50cPgQ6YuzFJs59piQdkoQ_MpgXcUzwvxiMlAiTv42K1WiZQdPpTCFYvL08x68WjHYjPxB8JKl1UWf0000" alt="uml diagram"><h3 id="\u6D3B\u52A8\u56FE" tabindex="-1">\u6D3B\u52A8\u56FE <a class="header-anchor" href="#\u6D3B\u52A8\u56FE" aria-hidden="true">#</a></h3><div class="language-puml"><pre><code>@startuml
|h| \u6784\u5EFA\u7CFB\u7EDF
start
:\u4F7F\u7528\u5BA2\u6237\u7AEF\u67E5\u8BE2\u9884\u88C5\u914D\u7F6E;
|#AntiqueWhite|r| \u914D\u7F6E\u5206\u53D1\u7CFB\u7EDF
:\u62C9\u53D6\u6240\u6709\u914D\u7F6E\u5217\u8868;
if (\u5B58\u5728\u5F53\u524D\u6784\u5EFA\u4EA7\u7269\u7248\u672C?) then (yes)
:\u62C9\u53D6\u6784\u5EFA\u4EA7\u7269\u5DF2\u5B58\u5728\u7684\u914D\u7F6E\u5217\u8868;
:\u5254\u9664\u5DF2\u751F\u6548\u7684\u914D\u7F6E;
endif
:\u4E0B\u53D1\u6700\u7EC8\u914D\u7F6E\u5217\u8868;

|h|
:\u5B89\u88C5\u914D\u7F6E;
if (\u5B89\u88C5\u6210\u529F?) then (yes)
:\u4E0A\u62A5\u8BB0\u5F55;
else (no)
:\u63D0\u793A\u5931\u8D25\u539F\u56E0;
stop
endif
|r|
:\u5B58\u50A8\u6267\u884C\u7ED3\u679C;
stop
@enduml
</code></pre></div><img src="https://www.plantuml.com/plantuml/svg/NP7DJi9G48NtVOecRiehq8Nu5AvDB6aJB4hBmgGBOehfBI8OmD-62j9GenR_4WXDuyimSzkty48h0RVtd3dppRa5JJ-ewDMZ4cV81ezz4y8v_Gffw78hXSileX_QzI4OeZMbBnDqlNWoJ8Pc_5HFwaqQ1I9dxEofkd9IbVPbHPUCYi6d2bZdqBhAulBO8D2wHb93X_pfD_705pcbo0lmTWkE3r47I3F5MCp7b3nJOg7pkflZTLbIUU5KqdBhg0qRJ3_J17flReVdWNIJkn4pqAwBFMjj43b9FLIAxC9PWs6YKwEXjJsxB8K516JZs1NiwWMjDjZkFxJ5p4RRYuDtY7fiGqcJU44jBvbRRJgQm-WZ_lRWqeM7Hv5LN3xEA5XhR1CxuSn7Ceu75pJiOD_9F0LcOf_q2m00" alt="uml diagram"><h3 id="\u7528\u4F8B\u56FE" tabindex="-1">\u7528\u4F8B\u56FE <a class="header-anchor" href="#\u7528\u4F8B\u56FE" aria-hidden="true">#</a></h3><div class="language-puml"><pre><code>@startuml
left to right direction

actor &quot;\u7BA1\u7406\u5458&quot; as admin
actor &quot;\u793C\u7269\u7BA1\u7406\u5458&quot; as g_admin

package \u793C\u7269 as gift {
usecase &quot;\u65B0\u589E\u793C\u7269&quot; as add_gift
usecase &quot;\u4FEE\u6539/\u5220\u9664\u793C\u7269&quot; as update_delete_gift
}

package \u793C\u7269\u8D2D\u4E70\u8BB0\u5F55 as gift_revision {
usecase &quot;\u65B0\u589E\u8BB0\u5F55&quot; as add_gift_revision
}

admin --&gt; add_gift
update_delete_gift &lt;-- g_admin
g_admin --&gt; add_gift_revision

gift ..&gt; gift_revision : include

@enduml
</code></pre></div><img src="https://www.plantuml.com/plantuml/svg/PP71hi5058RtynGdtTVTYuWtQIOpHqrKApFJkn5ROKU2i174naBJXOt4pNqPLTv2jPIoEel_E___dvcQqbHgl-KG1-iQj0TIs0qDN4XaMdWk8PHfJu8H1wjus8j6CmEe0ifRmisbpJ4UR8k0RMK8QLFMf3P21gMII98wn5V8g48mpjCmMYyo_M7EhJlqGax_mNby-8dwo-jyyqRwRKurMXmTJ4Qwq_sClEntfqDu2SBeR_ACjoJ-2fMSzzqZ0mizSlfkdfu5fbbzg_dL0YgccJ_1OnPsNfOavKkbwaUnCWYNEJv7GcheykIBRW00" alt="uml diagram"><h2 id="c4\u6A21\u578B" tabindex="-1">C4\u6A21\u578B <a class="header-anchor" href="#c4\u6A21\u578B" aria-hidden="true">#</a></h2><div class="language-puml"><pre><code>@startuml
!include &lt;C4/C4_Context&gt;
!include &lt;C4/C4_Container&gt;
Person(user, &quot;\u7528\u6237&quot;)
System_Boundary(c1, &quot;\u4E1A\u52A1\u7CFB\u7EDF&quot;) {
  Container(web,&quot;\u4E1A\u52A1\u670D\u52A1&quot;,&quot;web&quot;,&quot;\u63D0\u4F9B\u5BF9\u5916\u7684\u4E1A\u52A1\u670D\u52A1&quot;)
  Container(redis,&quot;\u7F13\u5B58&quot;,,&quot;\u7F13\u5B58\u6570\u636E&quot;)
  ContainerDb_Ext(mysql,&quot;\u6570\u636E\u5E93&quot;,,&quot;\u63D0\u4F9B\u6570\u636E\u6301\u4E45\u5316&quot;)
}
System_Ext(exchange, &quot;\u4EA4\u6613\u7CFB\u7EDF&quot;, &quot;\u63D0\u4F9B\u4EA4\u6613\u80FD\u529B&quot;)
System_Ext(supplyChain, &quot;\u4F9B\u5E94\u94FE&quot;, &quot;\u4F9B\u5E94\u94FE&quot;)

Rel(web, redis, &quot;\u8C03\u7528&quot;)
Rel(web, mysql, &quot;\u8C03\u7528&quot;)
Rel(user, exchange, &quot;\u8C03\u7528&quot;)
Rel(user, web, &quot;\u8C03\u7528&quot;)
Rel_R(web, exchange, &quot;\u8C03\u7528&quot;)
Rel(web, supplyChain, &quot;\u8C03\u7528&quot;)

SHOW_FLOATING_LEGEND()
@enduml
</code></pre></div><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuLBCp4lEAKr9LR1nDj5tDebtpiyhIQqeiSCgaPYPbrfannMGMbISdwTHMfnQfAEWz7pAYcSTsvKqkO8hYqjIS-ETyalpKXABAZMI3O6oJtRCUjgryFdctSztprVILAZcKb20cwHHdfga0rNnR4ula5JIKGAA0Sbd_HEUx9lzTFtEfqkcFP_LWg964yMCejIKp68TfUTx9ZzTEqD91yPwDdN3izvrg6fTak9TAqeqSYkB2tE0Le1LFDqr6QG9OXz4w5bFuvEThKzxfW5rry9y1TAOMf6SaPYNdWhorgubpsPCXdeBo8VeXuY-QDxxj6is8a10MejB2mfoAfqpWEu0wGPwRTUKbvFtAQ5mDBcuWb9pmA6Y0F6MWjAB3St000PAmMKWpaUJWSG5aWEno89reqZ41q6CnAKFB8dgTBWyLx27VtYycu-_OuYddtkyZwkxgv-BXYQNGsfU2Z1X0G00" alt="uml diagram"><div class="language-puml"><pre><code>@startuml
!include &lt;C4/C4_Context&gt;
!include &lt;C4/C4_Container&gt;
Person(user, &quot;\u7528\u6237&quot;, &quot;\u5C0F\u7A0B\u5E8F\u7535\u5546\u7CFB\u7EDF\u7684\u6F5C\u5728\u7528\u6237&quot;)
System_Boundary(c1, &quot;\u5C0F\u7A0B\u5E8F\u7535\u5546\u7CFB\u7EDF&quot;) {
  Container(miniApp, &quot;\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F&quot;, &quot;mini&quot;, &quot;\u7528\u6237\u4EA4\u4E92\u7684\u5C0F\u7A0B\u5E8F\u524D\u7AEF&quot;, $sprite=&quot;weixin&quot;)
  Container(mallService, &quot;\u5546\u57CE\u5FAE\u670D\u52A1&quot;, &quot;Java, Spring Cloud, Tomcat&quot;, &quot;\u5546\u54C1\u6D4F\u89C8\u3001\u8BE6\u60C5\u7684\u4E1A\u52A1\u903B\u8F91&quot;, $sprite=&quot;java&quot;)
  Container(orderService, &quot;\u8BA2\u5355\u5FAE\u670D\u52A1&quot;, &quot;Java, Spring Cloud, Tomcat&quot;, &quot;\u4E0B\u5355\u3001\u8BA2\u5355\u7684\u4E1A\u52A1\u903B\u8F91&quot;, $sprite=&quot;java&quot;)
  Container(miniService, &quot;\u5C0F\u7A0B\u5E8F\u5FAE\u670D\u52A1&quot;, &quot;Java, Spring Cloud, Tomcat&quot;, &quot;\u5FAE\u4FE1\u6388\u6743\u3001\u63A8\u9001\u7B49\u4E1A\u52A1\u903B\u8F91&quot;, $sprite=&quot;java&quot;)
  ContainerDb(database, &quot;Database&quot;, &quot;MySQL&quot;, &quot;RDBMS\u6570\u636E\u5E93&quot;, $sprite=&quot;mysql&quot;)
}
System_Ext(ecomMiddlePlatform, &quot;\u7535\u5546\u4E2D\u53F0&quot;, &quot;\u63D0\u4F9B \u5546\u54C1\u4E2D\u53F0 \u5E93\u5B58\u4E2D\u53F0 \u7269\u6D41\u4E2D\u53F0 \u8BA2\u5355\u4E2D\u53F0 \u7B49\u4E2D\u53F0\u80FD\u529B&quot;)
System_Ext(weixinPlatform, &quot;\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0&quot;, &quot;\u63D0\u4F9B \u7528\u6237\u6388\u6743\u3001\u652F\u4ED8\u3001\u63A8\u9001 \u7B49\u529F\u80FD&quot;)
Rel_R(user, miniApp, &quot;\u4F7F\u7528&quot;)
Rel(miniApp, mallService, &quot;\u8C03\u7528&quot;, &quot;https&quot;)
Rel(miniApp, orderService, &quot;\u8C03\u7528&quot;, &quot;https&quot;)
Rel(miniApp, miniService, &quot;\u8C03\u7528&quot;, &quot;https&quot;)
Rel(orderService, miniService, &quot;\u8C03\u7528&quot;, &quot;rpc&quot;)
Rel(mallService, miniService, &quot;\u8C03\u7528&quot;, &quot;rpc&quot;)
Rel_L(miniService, weixinPlatform, &quot;\u4EA4\u4E92&quot;, &quot;https&quot;)
Rel_U(weixinPlatform, user, &quot;\u4EA4\u4E92&quot;)
Rel_R(orderService, ecomMiddlePlatform, &quot;\u8C03\u7528&quot;, &quot;rpc&quot;)
Rel_R(mallService, ecomMiddlePlatform, &quot;\u8C03\u7528&quot;, &quot;rpc&quot;)
Rel(mallService, database, &quot;\u8BFB/\u5199&quot;)
Rel(orderService, database, &quot;\u8BFB/\u5199&quot;)
Rel(miniService, database, &quot;\u8BFB/\u5199&quot;)
SHOW_FLOATING_LEGEND()
@enduml
</code></pre></div><img src="https://www.plantuml.com/plantuml/svg/bLLTRz9G6BxdLrJY1IGaYyakTTa6E3MmJPZnikdeKMlwWMsP46C2OIF00gY3E3SCcJ6AKJwIXOWWxCVOqtR_mdDe-IW37NUdVP_tUPxpdkUqgv9CYNA4Osqt63x4HcX0t7OlBxcNIRV0oo0ghymiK0mFn1NRDX0bWNT4922w2BjMhAhfdtQqWis2LZs4dO9MRC5IIZllQjsAThAlzigmN3LnJbim9ic08zU524zJOimHkZMlr-uaNja8OYJju1YUMGk7CRvVLoxEHbrO7XVj8qDAvxFIUOVKHnYOoMdV6mXnKmgBZ0pks5y29ihmo995WsBP813tc130EgKKhEIHcbhEmUmPvdz0xL4k8eWu-AU4cnKYj8lO4RWG9TlDXgE4sYheNzD_uWczyKLD7Y0RIli4zL_6kth_xQI7vuXjoe4Wqa0SMz3hds2kj805fNs86h3ue7CnSJp5YUsFXhV010P7e-RJwiSaCg7cgvVnX5RBND-4PzT1KpArIqdOWyTSOcv_BFZGXnS1pxe_g9QQQguEEqUJT5nCUi4YljV3e7cZiWE41CxFq3GBjbbAVYA8t20eE6fAkmOBJSof5jue_LF2E47ZDO78OUtOVD0otzJMi68CTrZ1syChFTc3sTDnoh6u4RC9OJEy1p-Kt-_XhtEhl17VyVYA3QLxF9eZLeBP2f916W70aW7p7ewlXjAxG1n6UNnZhB7McqcCGQjdiXoMfi7J2VmtsXgPsM0huxmECHmQaa_Q_I-Sz5bpUsNYnjTWoXJvwChHcDyq4pwSiDNyp2pDCXMmxkAwVTQkYOkWDxfBCFLXvaJdmYnpcOaAtjjwJDxrRQtjtD_S87tU3U-cn-6qhGAUHd-8lm00" alt="uml diagram"><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://cloud.tencent.com/developer/article/1876902" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1876902</a></li><li><a href="https://blog.csdn.net/zhetmdoubeizhanyong/article/details/109501697" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/zhetmdoubeizhanyong/article/details/109501697</a></li></ul>`,22),l=[u];function i(r,q,d,s,c,m){return n(),e("div",null,l)}var g=t(a,[["render",i]]);export{h as __pageData,g as default};
