(this.webpackJsonppokenestmon=this.webpackJsonppokenestmon||[]).push([[0],{109:function(e,n,a){},110:function(e,n,a){},114:function(e,n,a){},115:function(e,n,a){},116:function(e,n,a){},117:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),i=a(7),r=a.n(i),s=a(36),c=a(5),l=a(29),d=(a(45),a(133)),u=a(13),m=a(135),h=a(136),g=a(55),p=a.n(g),y=a(56),f=(a(86),a(57)),E=a(137),v=a(58);var b=function(e){var n=e.region,a=e.index;return o.a.createElement(v.CopyToClipboard,{key:a,text:n},o.a.createElement(E.a,{onClick:function(){return l.b.success("Copiado")}},"Op\xe7\xe3o ",a+1))},k=a(62),S=a.n(k);a(91);var N=function(e){var n=e.id;return o.a.createElement("div",null,o.a.createElement(S.a,{placeholder:"https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png",image:"https://cdn.traction.one/pokedex/pokemon/".concat(n,".png"),renderComponent:function(e){var n=e.src;return o.a.createElement("img",{className:"animated",src:n,alt:"pokebola"})},renderLoading:function(e){var n=e.src;return o.a.createElement("img",{src:n,alt:"pokemon"})}},(function(e){var n=e.src;return o.a.createElement("img",{src:n,alt:"pokemon"})})))},x=a(63),K=a(25);a(92);function w(){var e=Object(f.a)(["\n          margin-top: 4px;\n          height: 22px;\n          width: 100%;\n          position: relative;\n          font: 10px/14px Quicksand-Bold !important;\n          background-color: #ccc !important;\n          color: #000 !important;\n          border: 1px #000 solid !important;\n          border-radius: 10px;\n          box-shadow: 0px 3px 6px #00000029;\n"]);return w=function(){return e},e}var C=Object(x.a)(E.a)(w());function O(e){var n=e.pokedex,a=e.id,t=e.shiny;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:n.name,className:"grid-items"},o.a.createElement("div",{className:"grid-box"},o.a.createElement(N,{id:a}),o.a.createElement("strong",{className:"wrap"},"n\xba",a," ",o.a.createElement("br",null)," ",n.name.toUpperCase(),"true"===t&&"\u2728"),K.pokemon.map((function(e){return e.name.toLowerCase()===n.name&&o.a.createElement(o.a.Fragment,null,e.coordinates.map((function(e,n){return e.includes("nothing")?o.a.createElement(C,{disabled:!0},"Ninho n\xe3o encontrado"):o.a.createElement(b,{key:e,region:e,index:n})})))})))))}var H=a(132),J=a(67),j=a.n(J);var M=function(e){var n=e.hasfilter,a=e.select,i=e.shinies,r=e.disponible,s=Object(t.useState)([]),c=Object(u.a)(s,2),l=c[0],m=c[1],h=Object(t.useState)(!0),g=Object(u.a)(h,2),p=g[0],y=g[1],f=function(){j.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=649").then((function(e){var n=e.data.results;return m(n)})).catch((function(e){m(!1)}))},E=K.pokemon.filter((function(e){return e.region.toLowerCase().indexOf(String(a.toLowerCase()))>-1})).filter((function(e){return e.shiny.toLowerCase().indexOf(String(i.toLowerCase()))>-1})).filter((function(e){return e.coordinates.filter((function(e){return e===r}))>-1}));Object(t.useEffect)((function(){y(!1),f(),l.length>0?y(!0):y(!1)}),[f,l]);var v=l.filter((function(e){return e.name.toLowerCase().indexOf(String(n.toLowerCase()))>-1}));return o.a.createElement("div",{className:"city"},o.a.createElement(H.a,{fluid:!0},p?o.a.createElement(o.a.Fragment,null,v.length>0?o.a.createElement("div",{className:"grid-container"},v.map((function(e,n){return E.map((function(a){return e.name.toLowerCase()===String(a.name).toLowerCase()&&o.a.createElement("div",{key:n},o.a.createElement(O,{pokedex:e,index:n,id:a.id,shiny:a.shiny}))}))}))):o.a.createElement("div",{className:"grid-container"},l.map((function(e,n){return K.pokemon.map((function(a){return e.name.toLowerCase()===String(a.name).toLowerCase()&&o.a.createElement(O,{pokedex:e,index:n,id:a.id,shiny:a.shiny})}))})))):o.a.createElement("div",{className:"justify-content text-center"},o.a.createElement(d.a,{className:"spinner-loading",as:"span",animation:"border",role:"status","aria-hidden":"true"}))))};a(109);var P=function(){return o.a.createElement(H.a,{fluid:!0,className:"footer"},o.a.createElement("div",null,"Desenvolvido por: ",o.a.createElement("a",{href:"http://github.com/engcfraposo"},"@engcfraposo")))},L=a(138),T=a(134);a(110);var B=function(){return o.a.createElement(L.a,{overlay:o.a.createElement(T.a,{id:"tooltip"},"Voltar ao topo")},o.a.createElement("div",{className:"scroll-to-top",id:"scroll-to-top",onClick:function(){var e;return window.scrollTo(0,(null===(e=document.getElementById("search"))||void 0===e?void 0:e.offsetTop)||0)}},o.a.createElement("i",{className:"icon fas fa-chevron-up"})))},D=a(39),U=a(20);var Y=Object(t.memo)((function(){var e=Object(t.useState)(""),n=Object(u.a)(e,2),a=n[0],i=n[1],r=Object(t.useState)(""),s=Object(u.a)(r,2),c=s[0],l=s[1],d=Object(t.useState)(""),g=Object(u.a)(d,2),f=g[0],E=g[1],v=Object(t.useState)("nothing"),b=Object(u.a)(v,2),k=b[0],S=b[1],N=Object(t.useState)(),x=Object(u.a)(N,2),K=x[0],w=x[1],C=Object(t.useState)(0),O=Object(u.a)(C,2),H=O[0],J=O[1];return window.onscroll=function(e){var n=document.getElementById("search");n&&(n.offsetTop+45<window.pageYOffset?(w(!0),H>window.pageYOffset&&w(!1)):(J(window.pageYOffset),w(!1)))},o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"main-first"},o.a.createElement("div",{className:"ajuste".concat(!0===K?" full":"")},o.a.createElement("img",{src:U.pokeball,alt:"Logo",className:"logo-pokemon"}),o.a.createElement("input",{onKeyPress:function(){return function(){var e=document.getElementById("list");e&&window.scroll(0,e.offsetTop)}()},placeholder:"Buscar por pokemon",type:"text",onChange:function(e){return i(e.target.value)},value:a,id:"search"}),K?o.a.createElement("div",null,o.a.createElement("select",{onChange:function(e){return l(e.target.value)}},o.a.createElement("option",{value:""},"Regi\xf5es"),D.local.map((function(e){return o.a.createElement("option",{key:e.region,value:e.region},e.region)}))),o.a.createElement("select",{onChange:function(e){return E(e.target.value)}},o.a.createElement("option",{value:"true"},"S\xf3 Shinies"),o.a.createElement("option",{value:""},"Todos")),o.a.createElement("select",{onChange:function(e){return S(e.target.value)}},o.a.createElement("option",{value:"nothing"},"Disponiveis"),o.a.createElement("option",{value:""},"Todos"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{onChange:function(e){return l(e.target.value)}},o.a.createElement("option",{value:""},"Regi\xf5es"),D.local.map((function(e){return o.a.createElement("option",{key:e.region,value:e.region},e.region)}))),o.a.createElement("select",{onChange:function(e){return E(e.target.value)}},o.a.createElement("option",{value:"true"},"S\xf3 Shinies"),o.a.createElement("option",{value:""},"Todos")),o.a.createElement("select",{onChange:function(e){return S(e.target.value)}},o.a.createElement("option",{value:"nothing"},"Disponiveis"),o.a.createElement("option",{value:""},"Todos"))))),K?o.a.createElement("div",{className:"main-last",id:"main-last"},o.a.createElement(m.a,{className:"text-center"},o.a.createElement(h.a,{className:"default"},U.pokemon.map((function(e,n){return o.a.createElement("img",{key:n,src:e.url,alt:e.url})}))),o.a.createElement(h.a,{className:"default"},o.a.createElement("p",{className:"clean"},"Ninhos de Pokemon GO")),o.a.createElement(h.a,{className:"default"},o.a.createElement("p",null,"Proxima migra\xe7\xe3o de ninho")),o.a.createElement(h.a,{className:"default"},o.a.createElement(y.a,{date:p()("15/10/2020 23:59:59","DD/MM/YYYY hh:mm:ss"),renderer:function(e){var n=e.days,a=e.hours,t=e.minutes,i=e.seconds;return e.completed?o.a.createElement("p",{className:"clean"},"0 dias, 0 Horas, 0 Minutos, 0 Segundos."):o.a.createElement("p",{className:"clean"},n," dias, ",a," Horas, ",t," Minutos, ",i," Segundos.")}})),o.a.createElement(h.a,{className:"default"},U.pokemon.map((function(e,n){return o.a.createElement("img",{key:n,src:e.url,alt:e.url})}))))):o.a.createElement("div",{className:"main-last"},o.a.createElement(m.a,{className:"text-center"},o.a.createElement(h.a,{className:"default"},U.pokemon.map((function(e,n){return o.a.createElement("img",{key:n,src:e.url,alt:e.url})}))),o.a.createElement(h.a,{className:"default"},o.a.createElement("p",{className:"clean"},"Ninhos de Pokemon GO")),o.a.createElement(h.a,{className:"default"},o.a.createElement("p",null,"Veja todos os Pokemons e seus ninhos ")),o.a.createElement(h.a,{className:"default"},o.a.createElement("p",{className:"clean"},"\xc9 muito simples! Basta clicar em um dos bot\xf5es de op\xe7\xe3o que ir\xe1 copiar as coordenadas.")),o.a.createElement(h.a,{className:"default"},U.pokemon.map((function(e,n){return o.a.createElement("img",{key:n,src:e.url,alt:e.url})}))))),o.a.createElement("div",{className:!0===K?" city city-scroll":"city",id:"city"},o.a.createElement(M,{hasfilter:a,select:c,shinies:f,disponible:k}),o.a.createElement(P,null),!!K&&o.a.createElement(B,null)),o.a.createElement("div",{id:"awn-z3764731"})))}));function A(){return o.a.createElement(c.d,null,o.a.createElement(t.Suspense,{fallback:o.a.createElement("div",{className:"justify-content text-center"},o.a.createElement(d.a,{className:"spinner-loading",as:"span",animation:"border",role:"status","aria-hidden":"true"}))},o.a.createElement(c.b,{exact:!0,path:"/",component:Y}),o.a.createElement(c.a,{from:"*",to:"/"})))}var F=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(c.d,null,o.a.createElement(A,null)),o.a.createElement(l.a,null)))};a(114),a(115),a(116);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root"))},20:function(e){e.exports=JSON.parse('{"pokemon":[{"url":"https://cdn.bulbagarden.net/upload/6/66/025MS8.png"},{"url":"https://cdn.bulbagarden.net/upload/2/21/001MS8.png"},{"url":"https://cdn.bulbagarden.net/upload/d/dc/004MS8.png"},{"url":"https://cdn.bulbagarden.net/upload/d/dc/007MS8.png"}],"pokeball":"https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png"}')},25:function(e){e.exports=JSON.parse('{"pokemon":[{"id":63,"region":"Kanto","shiny":"true","name":"Abra","coordinates":["35.3479,136.9880","43.0446,141.4972"]},{"id":190,"region":"Johto","shiny":"true","name":"Aipom","coordinates":["nothing"]},{"id":347,"region":"Hoenn","shiny":"true","name":"Anorith","coordinates":["34.1588,131.4383"]},{"id":343,"region":"Hoenn","shiny":"true","name":"Baltoy","coordinates":["nothing"]},{"id":399,"region":"Sinnoh","shiny":"false","name":"Bidoof","coordinates":["3.1421,101.6867","37.6555,126.7672","41.9138,12.4860"]},{"id":522,"region":"Unova","shiny":"false","name":"Blitzle","coordinates":["-23.587713, -46.658521","39.8903,32.8430"]},{"id":1,"region":"Kanto","shiny":"true","name":"Bulbasaur","coordinates":["33.7053,-118.0051","33.8113,-84.1453","35.6416,139.8548","37.8056,-122.3255"]},{"id":427,"region":"Sinnoh","shiny":"true","name":"Buneary","coordinates":["34.9324,-85.2549","4.5723,-74.1303","51.7755,0.1002"]},{"id":318,"region":"Hoenn","shiny":"true","name":"Carvanha","coordinates":["-6.5982,106.7994","40.6480,-73.5132","40.6552,-73.5122","52.0597,-0.7273"]},{"id":4,"region":"Kanto","shiny":"true","name":"Charmander","coordinates":["42.3383,-82.9854","44.0212,-88.5179","50.6933,4.0473"]},{"id":152,"region":"Johto","shiny":"true","name":"Chikorita","coordinates":["13.7308,100.5406","19.4224,-99.1891","35.7340,139.7463"]},{"id":390,"region":"Sinnoh","shiny":"true","name":"Chimchar","coordinates":["44.9808,-93.1472"]},{"id":170,"region":"Johto","shiny":"true","name":"Chinchou","coordinates":["37.1709,-93.3270"]},{"id":35,"region":"Kanto","shiny":"true","name":"Clefairy","coordinates":["49.4841,8.4939","51.7484,-0.3498"]},{"id":341,"region":"Hoenn","shiny":"false","name":"Corphish","coordinates":["38.8780,-94.7011","43.7204,-79.3581","45.7802,4.8497"]},{"id":453,"region":"Sinnoh","shiny":"true","name":"Croagunk","coordinates":["22.6560,120.2849","36.3727,140.2634","37.8814,139.0614","42.5286,-83.6755","43.7928,87.6006"]},{"id":104,"region":"Kanto","shiny":"true","name":"Cubone","coordinates":["nothing"]},{"id":155,"region":"Johto","shiny":"true","name":"Cyndaquil","coordinates":["35.3705,137.0293","37.8055,-122.2577"]},{"id":84,"region":"Kanto","shiny":"true","name":"Doduo","coordinates":["51.4816,-0.1579"]},{"id":206,"region":"Johto","shiny":"true","name":"Dunsparce","coordinates":["23.0669,120.2977","37.3164,126.8591","37.3419,-121.9039"]},{"id":355,"region":"Hoenn","shiny":"true","name":"Duskull","coordinates":["1.3151,103.8163"]},{"id":133,"region":"Kanto","shiny":"true","name":"Eevee","coordinates":["-41.3045,174.7906","43.2904,-79.8754","44.8612,-93.6175"]},{"id":125,"region":"Kanto","shiny":"false","name":"Electabuzz","coordinates":["39.2417,-76.8582","39.9835,-75.2104","41.8709,-71.3469","47.7103,-122.3671"]},{"id":309,"region":"Hoenn","shiny":"true","name":"Electrike","coordinates":["35.8822,137.9413","43.2399,-79.8316"]},{"id":102,"region":"Kanto","shiny":"true","name":"Exeggcute","coordinates":["34.1467,-118.2902","35.8414,128.5603","44.8592,-92.7744"]},{"id":590,"region":"Unova","shiny":"false","name":"Foongus","coordinates":["33.5193,-79.0994","40.8644,-73.8779"]},{"id":92,"region":"Kanto","shiny":"true","name":"Gastly","coordinates":["-33.8960,151.2349"]},{"id":203,"region":"Johto","shiny":"false","name":"Girafarig","coordinates":["34.6516,135.5094","39.6530,-84.2254","41.7971,140.7568"]},{"id":58,"region":"Kanto","shiny":"true","name":"Growlithe","coordinates":["nothing"]},{"id":449,"region":"Sinnoh","shiny":"true","name":"Hippopotas","coordinates":["-20.4523,-54.5707"]},{"id":116,"region":"Kanto","shiny":"true","name":"Horsea","coordinates":["50.7064,7.1478"]},{"id":124,"region":"Kanto","shiny":"false","name":"Jynx","coordinates":["-36.8979,174.7849","49.9264,4.5214"]},{"id":140,"region":"Kanto","shiny":"true","name":"Kabuto","coordinates":["25.6792,-100.2856","36.8261,-76.1265"]},{"id":401,"region":"Sinnoh","shiny":"true","name":"Kricketot","coordinates":["32.7750,-96.7599","43.6466,-79.4632"]},{"id":345,"region":"Hoenn","shiny":"true","name":"Lileep","coordinates":["1.2741,103.8172","34.0324,-84.6323","49.3841,8.5635"]},{"id":506,"region":"Unova","shiny":"true","name":"Lillipup","coordinates":["40.6535,-74.2461","40.7472,-73.8455","42.1486,-87.7903"]},{"id":370,"region":"Hoenn","shiny":"true","name":"Luvdisc","coordinates":["-37.0090,174.9069","43.6222,-116.3460","44.4695,26.0844"]},{"id":66,"region":"Kanto","shiny":"true","name":"Machop","coordinates":["-26.5072,-49.1277","34.7194,137.4342"]},{"id":129,"region":"Kanto","shiny":"true","name":"Magikarp","coordinates":["-25.7348,28.1888","29.9853,-90.0966","36.2426,139.5435","37.5285,126.9326"]},{"id":126,"region":"Kanto","shiny":"true","name":"Magmar","coordinates":["22.5359,120.5903","51.4155,-0.3368"]},{"id":81,"region":"Kanto","shiny":"true","name":"Magnemite","coordinates":["-6.3028,106.8947","30.6416,-96.2966","37.5792,126.9768"]},{"id":296,"region":"Hoenn","shiny":"true","name":"Makuhita","coordinates":["51.4708,7.4709"]},{"id":226,"region":"Johto","shiny":"false","name":"Mantine","coordinates":["nothing"]},{"id":307,"region":"Hoenn","shiny":"true","name":"Meditite","coordinates":["51.4921,6.8592","52.4852,4.9783"]},{"id":312,"region":"Hoenn","shiny":"true","name":"Minun","coordinates":["1.3786,103.8971","49.3015,-123.1334"]},{"id":200,"region":"Johto","shiny":"true","name":"Misdreavus","coordinates":["37.7201,-122.4131","40.7709,-73.9726","43.6534,-87.7282","45.5154,-122.7169"]},{"id":258,"region":"Hoenn","shiny":"true","name":"Mudkip","coordinates":["33.3234,130.3828","39.7778,-75.5000","47.5273,19.0501"]},{"id":299,"region":"Hoenn","shiny":"false","name":"Nosepass","coordinates":["-22.9674,-43.2290","38.5494,-90.4139","52.1581,-106.5844"]},{"id":322,"region":"Hoenn","shiny":"false","name":"Numel","coordinates":["nothing"]},{"id":43,"region":"Kanto","shiny":"true","name":"Oddish","coordinates":["34.0152,-118.2869","35.6234,139.6629","36.9391,140.9176"]},{"id":138,"region":"Kanto","shiny":"true","name":"Omanyte","coordinates":["nothing"]},{"id":95,"region":"Kanto","shiny":"true","name":"Onix","coordinates":["-7.2517,112.8036","36.0374,-115.0543","48.8772,2.2650"]},{"id":501,"region":"Unova","shiny":"false","name":"Oshawott","coordinates":["36.0688,-115.1137","36.1503,-86.8160","39.8401,-77.2465","39.8723,-75.1894","55.7958,37.6760"]},{"id":504,"region":"Unova","shiny":"true","name":"Patrat","coordinates":["12.9751,77.5923","34.9577,137.1600","35.1731,137.0903","39.8755,-75.6710","45.0218,-93.4335"]},{"id":231,"region":"Johto","shiny":"false","name":"Phanpy","coordinates":["49.2395,-123.1352"]},{"id":25,"region":"Kanto","shiny":"true","name":"Pikachu","coordinates":["34.5393,135.4392","38.6400,-90.2846","41.9377,-87.6366"]},{"id":127,"region":"Kanto","shiny":"true","name":"Pinsir","coordinates":["nothing"]},{"id":393,"region":"Sinnoh","shiny":"true","name":"Piplup","coordinates":["nothing"]},{"id":311,"region":"Hoenn","shiny":"true","name":"Plusle","coordinates":["12.7640,100.9345","29.7172,-95.3944","35.9179,139.6316","37.5499,127.0822","41.9056,-87.7002","48.1508,16.4026","52.4214,16.9359"]},{"id":60,"region":"Kanto","shiny":"true","name":"Poliwag","coordinates":["nothing"]},{"id":77,"region":"Kanto","shiny":"true","name":"Ponyta","coordinates":["17.0180,99.7020","42.3542,-71.0705","54.5141,-1.5579"]},{"id":261,"region":"Hoenn","shiny":"true","name":"Poochyena","coordinates":["32.7311,-117.1505","35.6787,139.7165","37.8855,58.3870"]},{"id":54,"region":"Kanto","shiny":"true","name":"Psyduck","coordinates":["32.4980,-116.9394"]},{"id":509,"region":"Unova","shiny":"false","name":"Purrloin","coordinates":["35.7167,139.7741","38.8897,-77.0488","44.0406,-91.6389","51.5643,-0.1647"]},{"id":211,"region":"Johto","shiny":"true","name":"Qwilfish","coordinates":["34.7148,137.6033","41.5721,-93.6385","42.4187,-82.2084","52.0571,4.2890"]},{"id":111,"region":"Kanto","shiny":"true","name":"Rhyhorn","coordinates":["24.0258,-104.6869","35.7082,139.3946","48.8283,2.4194"]},{"id":302,"region":"Hoenn","shiny":"true","name":"Sableye","coordinates":["42.4282,-83.5293"]},{"id":123,"region":"Kanto","shiny":"true","name":"Scyther","coordinates":["-31.9617,115.8424","-36.8622,174.7735","34.0349,-118.0570","34.9353,134.9404"]},{"id":273,"region":"Hoenn","shiny":"true","name":"Seedot","coordinates":["25.0294,121.5357","38.5147,-90.2776","8.9976,-79.5084"]},{"id":86,"region":"Kanto","shiny":"true","name":"Seel","coordinates":["nothing"]},{"id":90,"region":"Kanto","shiny":"true","name":"Shellder","coordinates":["52.2132,21.0340"]},{"id":285,"region":"Hoenn","shiny":"false","name":"Shroomish","coordinates":["-37.7314,144.8378"]},{"id":213,"region":"Johto","shiny":"true","name":"Shuckle","coordinates":["51.5064,-0.1567"]},{"id":353,"region":"Hoenn","shiny":"true","name":"Shuppet","coordinates":["37.5170,127.1209","40.8041,-73.9997","48.8063,2.1151"]},{"id":227,"region":"Hoenn","shiny":"true","name":"Skarmory","coordinates":["26.6882,127.8753","34.7630,135.7047","34.8091,135.5324","35.4214,137.0997","39.3222,-76.6413"]},{"id":300,"region":"Hoenn","shiny":"true","name":"Skitty","coordinates":["-38.1192,145.3080","41.3595,2.1558","44.9576,-89.6492"]},{"id":215,"region":"Johto","shiny":"true","name":"Sneasel","coordinates":["40.6897,-74.0148","51.1551,6.8704"]},{"id":495,"region":"Unova","shiny":"false","name":"Snivy","coordinates":["-22.9261,-43.1703","45.0146,-74.7273","50.6404,3.0426","51.4805,-0.2942"]},{"id":209,"region":"Johto","shiny":"true","name":"Snubbull","coordinates":["35.6727,139.6950"]},{"id":325,"region":"Hoenn","shiny":"true","name":"Spoink","coordinates":["-33.9901,18.4323","35.7890,139.8704"]},{"id":7,"region":"Kanto","shiny":"true","name":"Squirtle","coordinates":["34.6829,135.8473","37.3257,-121.8612"]},{"id":234,"region":"Johto","shiny":"true","name":"Stantler","coordinates":["43.4954,-87.7941","49.8697,-97.2390"]},{"id":434,"region":"Sinnoh","shiny":"false","name":"Stunky","coordinates":["35.3813,-94.3748","41.8762,-87.6197"]},{"id":185,"region":"Johto","shiny":"true","name":"Sudowoodo","coordinates":["40.4095,-3.6797"]},{"id":283,"region":"Hoenn","shiny":"false","name":"Surskit","coordinates":["10.7878,106.7052","34.6855,135.5279","41.8472,-87.6101","44.4043,26.1099"]},{"id":333,"region":"Hoenn","shiny":"true","name":"Swablu","coordinates":["34.8217,135.6911"]},{"id":220,"region":"Johto","shiny":"true","name":"Swinub","coordinates":["34.2273,135.1711","36.9016,-76.2002","37.7685,-122.4827","51.5325,-0.1505"]},{"id":216,"region":"Johto","shiny":"true","name":"Teddiursa","coordinates":["36.3696,140.4545","53.5959,10.0152"]},{"id":72,"region":"Kanto","shiny":"true","name":"Tentacool","coordinates":["48.1587,11.5975"]},{"id":498,"region":"Unova","shiny":"false","name":"Tepig","coordinates":["nothing"]},{"id":255,"region":"Hoenn","shiny":"true","name":"Torchic","coordinates":["27.2267,-80.2132","35.1669,129.0546","37.5505,-121.9670","40.2111,-74.6750"]},{"id":158,"region":"Johto","shiny":"true","name":"Totodile","coordinates":["-18.9102,-48.2322","-37.7874,144.9508"]},{"id":252,"region":"Hoenn","shiny":"true","name":"Treecko","coordinates":["32.0239,-102.0968","36.4020,140.5968"]},{"id":387,"region":"Sinnoh","shiny":"true","name":"Turtwig","coordinates":["37.8077,-122.4752","47.5157,19.0771"]},{"id":100,"region":"Kanto","shiny":"true","name":"Voltorb","coordinates":["-6.1255,106.8364","37.5504,126.9924","45.5592,-73.5580"]},{"id":37,"region":"Kanto","shiny":"false","name":"Vulpix","coordinates":["-22.9059,-43.2250","27.3812,-82.5606"]},{"id":320,"region":"Hoenn","shiny":"true","name":"Wailmer","coordinates":["39.7898,-89.6844","47.6359,-117.4115"]},{"id":278,"region":"Hoenn","shiny":"true","name":"Wingull","coordinates":["43.8193,125.3302","44.7825,-93.1484"]},{"id":202,"region":"Johto","shiny":"true","name":"Wobbuffet","coordinates":["35.7609,140.0615","36.4901,139.9973","47.6815,-122.2501"]},{"id":193,"region":"Johto","shiny":"true","name":"Yanma","coordinates":["32.0389,-102.0742","35.2702,136.9892","36.2461,-115.1509","37.8056,-122.4279","39.6960,-104.9699","40.7737,-96.7724","51.5060,-0.1794"]}]}')},39:function(e){e.exports=JSON.parse('{"local":[{"region":"Kanto"},{"region":"Johto"},{"region":"Hoenn"},{"region":"Sinnoh"},{"region":"Unova"}]}')},78:function(e,n,a){e.exports=a(117)},86:function(e,n,a){},91:function(e,n,a){},92:function(e,n,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.0d0b5962.chunk.js.map