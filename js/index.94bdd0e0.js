(function(){var e={5190:function(e,n,t){"use strict";var s=t(20144),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("vue-amis-sdk",{attrs:{id:"editorName",theme:"cxd",className:"is-fixed",preview:e.isPreview,isMobile:e.isMobile,value:e.schema},on:{onChange:e.onChange}})],1)},a=[],o={name:"App",data(){return{isPreview:!1,isMobile:!1,schema:{}}},methods:{onChange(e){console.log(e)}}},i=o,c=t(43736),u=(0,c.Z)(i,r,a,!1,null,null,null),d=u.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("amis-editor",{attrs:{id:"editorName",theme:e.theme,className:e.className,preview:e.isPreview,isMobile:e.isMobile,value:e.schema,plugins:e.plugins,showCustomRenderersPanel:e.showCustomRenderersPanel},on:{onChange:e.onChange,onPreview:e.onPreview,onSave:e.onSave}})],1)},l=[],j=t(73064),m=t(11933),b={name:"VueAmisSdk",components:{AmisEditor:(0,m.D0)(j.Editor)},props:{isPreview:{type:Boolean,default:!1},isMobile:{type:Boolean,default:!1},showCustomRenderersPanel:{type:Boolean,default:!1},theme:{type:String,default:"ang"},className:{type:String,default:"ang"},value:{type:Object,default:()=>{}},plugins:{type:Object,default:()=>{}}},data(){return{schema:{}}},mounted(){this.schema=this.value},methods:{setSchema(e){this.schema=e},getSchema(){return this.schema},onChange(e){this.schema=e,this.$emit("change",e)},onSave(e){console.log(e),this.$emit("onSave",e)},onPreview(e){console.log(e),this.$emit("onPreview",e)}}},h=b,p=(0,c.Z)(h,f,l,!1,null,null,null),v=p.exports;v.install=function(e){e.component(amisEditor.name,amisEditor)};var g=v;const y=[g],k=function(e){k.installed||y.map((n=>e.component(n.name,n)))};"undefined"!==typeof window&&window.Vue&&k(window.Vue);var w={install:k};s["default"].use(w),console.log(w),s["default"].use(m.Z0),s["default"].config.productionTip=!1,new s["default"]({render:e=>e(d)}).$mount("#app")},46700:function(e,n,t){var s={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=46700}},n={};function t(s){var r=n[s];if(void 0!==r)return r.exports;var a=n[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,s,r,a){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],a=e[d][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](s[c])}))?s.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,s){return t.f[s](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{180:"50b46ad1",249:"5ce7ccc7",276:"aeb5c362",525:"5d891178",790:"3c91a5d8",848:"f581f783",854:"a1e02a01",911:"44a3b67a",996:"d1fe2450",1065:"8c615bdd",1134:"ac0777f2",1147:"68b33223",1156:"52b99827",1259:"e7152b56",1350:"f3f0589f",1448:"a93b8736",1471:"d690c0e2",1597:"7e86ad6d",1813:"72b11631",1886:"add92761",1960:"95a5451f",1961:"a9f15b5c",2016:"26d25735",2060:"c48bbe26",2075:"ce896ead",2140:"32d868f9",2240:"63f1e11c",2527:"e74fe7b4",2571:"fe3b0d4a",2798:"fed85fcb",2814:"6b44cb50",2892:"67d28312",2911:"833f6464",2954:"ec6513b1",3036:"60b911bc",3585:"f92d96aa",3632:"9c2c517c",3682:"6b1592fc",3760:"246c26af",3919:"59b45bd2",4028:"cd0e2fda",4129:"9030487a",4188:"fcb528e9",4295:"5f4bffaa",4368:"4a7d3a28",4386:"29b7e6e6",4407:"f232cf42",4631:"02a13464",4902:"9fadbe4d",4912:"49ceef02",4946:"3bd8513a",4990:"9782fe20",5062:"d16ade4a",5294:"8cac7483",5568:"92af1b0b",5593:"e1e6ac61",5703:"d4b3fb36",5849:"827c6ba2",5962:"c4ac6881",6082:"3e596e82",6241:"d81d7795",6300:"9ec09bfc",6424:"6937fd08",6449:"abfb799e",6489:"e44e8e19",6531:"13e17401",6558:"9d821f2d",6587:"59e19aa7",6603:"4e4d90ad",6717:"d1c61c0e",6758:"6e76045d",6876:"7d04efef",7043:"bc7bf2fe",7093:"b7675ee3",7131:"4b124c09",7287:"ba18f23f",7460:"898ea9a0",7562:"4202b7d5",7570:"35c988df",7631:"0505932f",7637:"70ea7aa9",7778:"ac88bf6a",7835:"ed08070d",7889:"71e3600b",8070:"034ebebd",8084:"59fc4140",8180:"cd302b7d",8424:"559817c9",8448:"f71fdd73",8670:"44229c31",8715:"9908a903",8719:"0f67d903",8906:"d9393bf3",8946:"85246ab0",9182:"36ab27d9",9343:"ba90b6ec",9398:"b87ab24e",9400:"b5ac6c5d",9537:"284a8c14",9684:"eee9bf51",9907:"356a0356"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".b376fe5d.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-amis-sdk:";t.l=function(s,r,a,o){if(e[s])e[s].push(r);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==s||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=s),e[s]=[r];var l=function(n,t){i.onerror=i.onload=null,clearTimeout(j);var r=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),n)return n(t)},j=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,r.parentNode.removeChild(r),s(c)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var r=t[s],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){r=o[s],a=r.getAttribute("data-href");if(a===e||a===n)return r}},s=function(s){return new Promise((function(r,a){var o=t.miniCssF(s),i=t.p+o;if(n(o,i))return r();e(s,i,r,a)}))},r={4826:0};t.f.miniCss=function(e,n){var t={1813:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=s(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={4826:0};t.f.j=function(n,s){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)s.push(r[2]);else{var a=new Promise((function(t,s){r=e[n]=[t,s]}));s.push(r[2]=a);var o=t.p+t.u(n),i=new Error,c=function(s){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,r[1](i)}};t.l(o,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,s){var r,a,o=s[0],i=s[1],c=s[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var d=c(t)}for(n&&n(s);u<o.length;u++)a=o[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},s=self["webpackChunkvue_amis_sdk"]=self["webpackChunkvue_amis_sdk"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[4998],(function(){return t(5190)}));s=t.O(s)})();