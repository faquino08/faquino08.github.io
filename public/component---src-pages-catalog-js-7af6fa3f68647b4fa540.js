(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/9aa":function(e,a,t){var l=t("NykK"),n=t("ExA7");e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==l(e)}},"7vrA":function(e,a,t){"use strict";var l=t("k1TG"),n=t("8o2o"),i=t("TSYQ"),o=t.n(i),r=t("q1tI"),s=t.n(r),c=t("vUet"),d=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,r=e.as,d=void 0===r?"div":r,g=e.className,m=Object(n.a)(e,["bsPrefix","fluid","as","className"]),u=Object(c.b)(t,"container");return s.a.createElement(d,Object(l.a)({ref:a},m,{className:o()(g,i?u+"-fluid":u)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},AP2z:function(e,a,t){var l=t("nmnc"),n=Object.prototype,i=n.hasOwnProperty,o=n.toString,r=l?l.toStringTag:void 0;e.exports=function(e){var a=i.call(e,r),t=e[r];try{e[r]=void 0;var l=!0}catch(s){}var n=o.call(e);return l&&(a?e[r]=t:delete e[r]),n}},DRkp:function(e,a,t){"use strict";t.r(a);var l=t("kcif"),n=t.n(l),i=t("q1tI"),o=t.n(i),r=t("Wbzz"),s=t("Bl7J"),c=t("vrFN"),d=(t("9eSz"),t("6xyR")),g=t("n/d1"),m=t("gLgv"),u=t.n(m),f=t("7vrA"),p=t("3Z9Z"),v=t("JI6e"),h=t("cWnB"),b=t("Vuqv");function z(e){var a=Object(b.a)()[""+e].nodes,t=[];return a.forEach((function(e){var a=e.id,l=e.label_color,n=e.name;console.log(e),e.sizes.forEach((function(e){console.log("Images"),console.log(e.images),t.push(o.a.createElement(r.Link,{to:"/"+e.slug},o.a.createElement(d.a,{className:u.a.card,key:a},o.a.createElement(d.a.Body,null,o.a.createElement(d.a.Img,{className:u.a.cardImg,variant:"top",src:e.images[0].childImageSharp.fluid.src,style:{borderColor:""+l}}),o.a.createElement(d.a.Img,{className:u.a.cardImg2,variant:"top",src:e.images[2].childImageSharp.fluid.src})),o.a.createElement(h.a,{variant:"dark",className:u.a.cardBtn},"Customize")),o.a.createElement("div",{className:u.a.cardTitle},o.a.createElement("h4",null,n),o.a.createElement("h6",null,e.size)),o.a.createElement("div",{className:u.a.cardPrice},o.a.createElement("h6",null,"$",e.price))))}))})),t}function _(e,a){var t=Object(b.a)()[""+e].nodes,l=[];return t.forEach((function(e){var t=e.id,n=e.label_color,i=e.name,s=e.category;e.sizes.forEach((function(e){a===s&&l.push(o.a.createElement(r.Link,{to:"/"+e.slug},o.a.createElement(d.a,{className:u.a.card,key:t},o.a.createElement(d.a.Body,null,o.a.createElement(d.a.Img,{className:u.a.cardImg,variant:"top",src:e.images[0].childImageSharp.fluid.src,style:{borderColor:""+n}}),o.a.createElement(d.a.Img,{className:u.a.cardImg2,variant:"top",src:e.images[2].childImageSharp.fluid.src})),o.a.createElement(h.a,{variant:"dark",className:u.a.cardBtn},"Customize")),o.a.createElement("div",{className:u.a.cardTitle},o.a.createElement("h4",null,i),o.a.createElement("h6",null,e.size)),o.a.createElement("div",{className:u.a.cardPrice},o.a.createElement("h6",null,"$",e.price))))}))})),l}a.default=function(){var e=Object(i.useState)(2),a=e[0],t=e[1];Object(i.useLayoutEffect)((function(){return void 0!==typeof window?(window.addEventListener("resize",(function(){window.innerWidth>=992?t(4):t(2)})),window.innerWidth>=992?t(4):t(2)):t(2),function(){void 0!==typeof window&&window.addEventListener("resize",(function(){window.innerWidth>=992?t(4):t(2)}))}}));var l=Object(r.useStaticQuery)("733221596"),d=n()(z("Outdoor Living"),a),m=n()(z("Mood"),a),h=n()(z("Discovery Set"),a),C=n()(_("Home Living","A Nightcap"),a),y=n()(_("Home Living","Our Travels"),a),I=n()(_("Home Living","Unwind Or"),a),E=n()(_("Home Living","At Our Core"),a),P=n()(_("Home Living","Keep Inspiring"),a),k=Object(i.useState)(Object(b.a)());return k[0],k[1],o.a.createElement(s.a,null,o.a.createElement(c.a,{title:"The Catalog",author:"tillallhours Candle Co."}),o.a.createElement(g.a,{title:"The Catalog",imageData:l.allCatalogPage.nodes[8].image_1.childImageSharp.fluid,pct:85,back:"gray",height:37.5}),o.a.createElement(f.a,{className:u.a.cont},o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[0].location,imageData:l.allCatalogPage.nodes[0].image_1.childImageSharp.fluid,pct:75,back:"black",height:30}),o.a.createElement(f.a,{className:u.a.cont2},o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[1].location,imageData:l.allCatalogPage.nodes[1].image_1.childImageSharp.fluid,pct:75,back:"black",height:20}),C.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))})),o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[2].location,imageData:l.allCatalogPage.nodes[2].image_1.childImageSharp.fluid,pct:75,back:"black",height:20}),y.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))})),o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[3].location,imageData:l.allCatalogPage.nodes[3].image_1.childImageSharp.fluid,pct:75,back:"black",height:20}),I.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))})),o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[4].location,imageData:l.allCatalogPage.nodes[4].image_1.childImageSharp.fluid,pct:75,back:"black",height:20}),E.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))})),o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[5].location,imageData:l.allCatalogPage.nodes[5].image_1.childImageSharp.fluid,pct:75,back:"black",height:20}),P.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))})),o.a.createElement("h1",null,"Discovery Set:"),h.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))}))),o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[6].location,imageData:l.allCatalogPage.nodes[6].image_1.childImageSharp.fluid,pct:75,back:"black",height:25}),d.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))})),o.a.createElement(g.a,{title:""+l.allCatalogPage.nodes[7].location,imageData:l.allCatalogPage.nodes[7].image_1.childImageSharp.fluid,pct:75,back:"black",height:25}),m.map((function(e){return o.a.createElement(p.a,null,e.map((function(e){return o.a.createElement(v.a,{sm:12,md:6,lg:3,className:u.a.cardCol},e)})))}))),o.a.createElement("footer",null,o.a.createElement("div",{className:"footing"},o.a.createElement(p.a,null,o.a.createElement("div",{style:{width:"100%",justifyContent:"center",display:"grid"}},o.a.createElement("p",{style:{marginBottom:"0.75rem",marginTop:"0.75rem",fontSize:"1.25em"}},"Connect With Us:"),o.a.createElement("div",null,o.a.createElement("a",{href:"http://instagram.com/tillallhours",style:{color:"white",marginLeft:"0.3em",marginRight:"0.3em"}},o.a.createElement("i",{className:"fab fa-instagram fa-lg"})),o.a.createElement("a",{href:"https://www.pinterest.com/tillallhours",style:{color:"white",marginLeft:"0.3em",marginRight:"0.3em"}},o.a.createElement("i",{className:"fab fa-pinterest fa-lg"})),o.a.createElement("a",{href:"mailto: info@tillallhours.com",style:{color:"white",marginLeft:"0.3em",marginRight:"0.3em"}},o.a.createElement("i",{className:"fas fa-envelope fa-lg"})))),o.a.createElement("div",{style:{width:"100%",justifyContent:"center",display:"flex",marginTop:"0.75rem"}},"© ",(new Date).getFullYear(),", tillallhours Candle Co.")))))}},ExA7:function(e,a){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,a){e.exports=function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)}},KfNM:function(e,a){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},KxBF:function(e,a){e.exports=function(e,a,t){var l=-1,n=e.length;a<0&&(a=-a>n?0:n+a),(t=t>n?n:t)<0&&(t+=n),n=a>t?0:t-a>>>0,a>>>=0;for(var i=Array(n);++l<n;)i[l]=e[l+a];return i}},Kz5y:function(e,a,t){var l=t("WFqU"),n="object"==typeof self&&self&&self.Object===Object&&self,i=l||n||Function("return this")();e.exports=i},MMmD:function(e,a,t){var l=t("lSCD"),n=t("shjB");e.exports=function(e){return null!=e&&n(e.length)&&!l(e)}},NykK:function(e,a,t){var l=t("nmnc"),n=t("AP2z"),i=t("KfNM"),o=l?l.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?n(e):i(e)}},Sxd8:function(e,a,t){var l=t("ZCgT");e.exports=function(e){var a=l(e),t=a%1;return a==a?t?a-t:a:0}},Vuqv:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));t("q1tI");var l=t("Wbzz");t("1M3H")();function n(e){var a=Object(l.useStaticQuery)("1173685090");function t(e,t){for(var l=[],n=[],i=0;i<a.allGenericProductImages.edges.length;i++)for(var o=0;o<a.allGenericProductImages.edges[i].node.collections.length;o++)a.allGenericProductImages.edges[i].node.collections[o].collections_id===t&&a.allGenericProductImages.edges[i].node.size.id===e&&l.push({position:a.allGenericProductImages.edges[i].node.position,image:a.allGenericProductImages.edges[i].node.image_1,color:a.allGenericProductImages.edges[i].node.vessel_color});l.sort((function(e,a){return e.position>a.position?1:-1}));for(i=0;i<l.length;i++)n.push({image:l[i].image,color:l[i].color});return n}var n={};return a.allProduct.nodes.map((function(e){if(0===Object.keys(n).length){for(var l=0;l<Object.keys(a.allCollections.edges).length;l++)if(e.collection===a.allCollections.edges[l].node.id){var s=a.allCollections.edges[l].node.sizes[0].sizes_id.id,c=a.allCollections.edges[l].node.sizes[0].sizes_id.weight;n[""+a.allCollections.edges[l].node.name]={nodes:[{id:e.id,name:e.name,collection:e.collection,description_heading:e.description_heading,description:e.description,featured:e.featured,tax_exempt:e.tax_exempt,recommended_scent:e.recommended_scent,label_color:e.label_color,slug:e.slug,category:e.category,featured_size:e.featured_size,sizes:[{size_id:s,size:i(a,s)[0],images:[e.image_1,e.image_2,e.image_3,e.image_4,e.image_5],price:o(e,a)[0],slug:e.slug+"?size="+s,generic_images:t(s,e.collection),weight:c}]}]};for(var d=0;d<Object.keys(a.allAlternativeProductImages.edges).length;d++)if(a.allAlternativeProductImages.edges[d].node.related_product===e.id)for(var g=0;g<n[""+a.allCollections.edges[l].node.name].nodes.length;g++)if(n[""+a.allCollections.edges[l].node.name].nodes[g].id===e.id){for(var m=0;m<a.allCollections.edges[l].node.sizes.length;m++)a.allAlternativeProductImages.edges[d].node.size===a.allCollections.edges[l].node.sizes[m].sizes_id.id&&(c=a.allCollections.edges[l].node.sizes[m].sizes_id.weight);n[""+a.allCollections.edges[l].node.name].nodes[g].sizes.push({size_id:a.allAlternativeProductImages.edges[d].node.size,size:i(a,a.allAlternativeProductImages.edges[d].node.size)[0],images:[a.allAlternativeProductImages.edges[d].node.image_1,a.allAlternativeProductImages.edges[d].node.image_2,a.allAlternativeProductImages.edges[d].node.image_3,a.allAlternativeProductImages.edges[d].node.image_4,a.allAlternativeProductImages.edges[d].node.image_5],price:o(e,a)[1],slug:e.slug+"?size="+a.allAlternativeProductImages.edges[d].node.size,generic_images:t(a.allAlternativeProductImages.edges[d].node.size,e.collection),weight:c})}}}else for(l=0;l<Object.keys(a.allCollections.edges).length;l++)if(e.collection===a.allCollections.edges[l].node.id)for(d=0;d<Object.keys(n).length;d++)if(Object.keys(n)[d]===a.allCollections.edges[l].node.name){s=a.allCollections.edges[l].node.sizes[0].sizes_id.id,c=a.allCollections.edges[l].node.sizes[0].sizes_id.weight;n[""+Object.keys(n)[d]].nodes.push({id:e.id,name:e.name,collection:e.collection,description_heading:e.description_heading,description:e.description,featured:e.featured,tax_exempt:e.tax_exempt,recommended_scent:e.recommended_scent,label_color:e.label_color,slug:e.slug,category:e.category,featured_size:e.featured_size,sizes:[{size_id:s,size:i(a,s)[0],images:[e.image_1,e.image_2,e.image_3,e.image_4,e.image_5],price:o(e,a)[0],slug:e.slug+"?size="+s,generic_images:t(s,e.collection),weight:c}]});for(g=0;g<Object.keys(a.allAlternativeProductImages.edges).length;g++)if(a.allAlternativeProductImages.edges[g].node.related_product===e.id)for(var u=0;u<n[""+a.allCollections.edges[l].node.name].nodes.length;u++)if(n[""+a.allCollections.edges[l].node.name].nodes[u].id===e.id){for(m=0;m<a.allCollections.edges[l].node.sizes.length;m++)a.allAlternativeProductImages.edges[g].node.size===a.allCollections.edges[l].node.sizes[m].sizes_id.id&&(c=a.allCollections.edges[l].node.sizes[m].sizes_id.weight);n[""+a.allCollections.edges[l].node.name].nodes[u].sizes.push({size_id:a.allAlternativeProductImages.edges[g].node.size,size:i(a,a.allAlternativeProductImages.edges[g].node.size)[0],images:[a.allAlternativeProductImages.edges[g].node.image_1,a.allAlternativeProductImages.edges[g].node.image_2,a.allAlternativeProductImages.edges[g].node.image_3,a.allAlternativeProductImages.edges[g].node.image_4,a.allAlternativeProductImages.edges[g].node.image_5],price:o(e,a)[1],slug:e.slug+"?size="+a.allAlternativeProductImages.edges[g].node.size,generic_images:t(a.allAlternativeProductImages.edges[g].node.size,e.collection),weight:c})}d=Object.keys(n).length-1}else if(d===Object.keys(n).length-1){s=a.allCollections.edges[l].node.sizes[0].sizes_id.id,c=a.allCollections.edges[l].node.sizes[0].sizes_id.weight;n[""+a.allCollections.edges[l].node.name]={nodes:[{id:e.id,name:e.name,collection:e.collection,description_heading:e.description_heading,description:e.description,featured:e.featured,tax_exempt:e.tax_exempt,recommended_scent:e.recommended_scent,label_color:e.label_color,slug:e.slug,category:e.category,featured_size:e.featured_size,sizes:[{size_id:s,size:i(a,s)[0],images:[e.image_1,e.image_2,e.image_3,e.image_4,e.image_5],price:o(e,a)[0],slug:e.slug+"?size="+s,generic_images:t(s,e.collection),weight:c}]}]};for(g=0;g<Object.keys(a.allAlternativeProductImages.edges).length;g++)if(a.allAlternativeProductImages.edges[g].node.related_product===e.id)for(u=0;u<n[""+a.allCollections.edges[l].node.name].nodes.length;u++)if(n[""+a.allCollections.edges[l].node.name].nodes[u].id===e.id){for(m=0;m<a.allCollections.edges[l].node.sizes.length;m++)a.allAlternativeProductImages.edges[g].node.size===a.allCollections.edges[l].node.sizes[m].sizes_id.id&&(c=a.allCollections.edges[l].node.sizes[m].sizes_id.weight);n[""+a.allCollections.edges[l].node.name].nodes[u].sizes.push({size_id:a.allAlternativeProductImages.edges[g].node.size,size:i(a,a.allAlternativeProductImages.edges[g].node.size)[0],images:[a.allAlternativeProductImages.edges[g].node.image_1,a.allAlternativeProductImages.edges[g].node.image_2,a.allAlternativeProductImages.edges[g].node.image_3,a.allAlternativeProductImages.edges[g].node.image_4,a.allAlternativeProductImages.edges[g].node.image_5],price:r(a)[1],slug:e.slug+"?size="+a.allAlternativeProductImages.edges[g].node.size,generic_images:t(a.allAlternativeProductImages.edges[g].node.size,e.collection),weight:c})}d=Object.keys(n).length-1}})),n;function i(e,a){var t=[];switch(a){case 1:t.push(e.allSizes.edges[0].node.size);break;case 2:t.push(e.allSizes.edges[1].node.size);break;case 3:t.push(e.allSizes.edges[2].node.size);break;case 4:t.push(e.allSizes.edges[3].node.size);break;case 5:t.push(e.allSizes.edges[4].node.size)}return t}function o(e,a){var t=[];return a.allPriceTable.edges.map((function(l){for(var n=0;n<a.allCollections.edges.length;n++)if(e.collection===a.allCollections.edges[n].node.id)for(var i=0;i<a.allCollections.edges[n].node.sizes.length;i++)l.node.size===a.allCollections.edges[n].node.sizes[i].sizes_id.id&&t.push(l.node.price)})),t.sort(),t}function r(e){var a=[];return e.allPriceTable.edges.map((function(t){for(var l=0;l<e.allCollections.edges[0].node.sizes.length;l++)t.node.size===e.allCollections.edges[0].node.sizes[l].sizes_id.id&&a.push(t.node.price)})),a.sort(),a}}},WFqU:function(e,a,t){(function(a){var t="object"==typeof a&&a&&a.Object===Object&&a;e.exports=t}).call(this,t("yLpj"))},ZCgT:function(e,a,t){var l=t("tLB3");e.exports=function(e){return e?(e=l(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},dtyk:function(e,a,t){e.exports={banner:"banner_image-module--banner--3bIEj",bannerImgOver:"banner_image-module--bannerImgOver--3JPu-",divider:"banner_image-module--divider--2H30q"}},gLgv:function(e,a,t){e.exports={catBan:"catalog-module--catBan--VgkD3",title:"catalog-module--title--Lr4Py",bannerImg:"catalog-module--bannerImg--3qobw",bannerImgOver:"catalog-module--bannerImgOver--2c_eC",divider:"catalog-module--divider--EZE4P",card:"catalog-module--card--3FGVF",cardCol:"catalog-module--cardCol--28muB",cardTitle:"catalog-module--cardTitle--2kV3K",cardPrice:"catalog-module--cardPrice--1UAVT",cardBtn:"catalog-module--cardBtn--yoBfv",cardImg:"catalog-module--cardImg--kOdmE",cardImg2:"catalog-module--cardImg2--1UZH-",cont:"catalog-module--cont--dhwC2",cont2:"catalog-module--cont2--s2Zh5"}},kcif:function(e,a,t){var l=t("KxBF"),n=t("mv/X"),i=t("Sxd8"),o=Math.ceil,r=Math.max;e.exports=function(e,a,t){a=(t?n(e,a,t):void 0===a)?1:r(i(a),0);var s=null==e?0:e.length;if(!s||a<1)return[];for(var c=0,d=0,g=Array(o(s/a));c<s;)g[d++]=l(e,c,c+=a);return g}},lSCD:function(e,a,t){var l=t("NykK"),n=t("GoyQ");e.exports=function(e){if(!n(e))return!1;var a=l(e);return"[object Function]"==a||"[object GeneratorFunction]"==a||"[object AsyncFunction]"==a||"[object Proxy]"==a}},ljhN:function(e,a){e.exports=function(e,a){return e===a||e!=e&&a!=a}},"mv/X":function(e,a,t){var l=t("ljhN"),n=t("MMmD"),i=t("wJg7"),o=t("GoyQ");e.exports=function(e,a,t){if(!o(t))return!1;var r=typeof a;return!!("number"==r?n(t)&&i(a,t.length):"string"==r&&a in t)&&l(t[a],e)}},"n/d1":function(e,a,t){"use strict";var l=t("AcpX"),n=t("q1tI"),i=t.n(n),o=(t("q4sD"),t("dtyk")),r=t.n(o),s=t("vOnD"),c=t("1eu9"),d=t.n(c);function g(){var e=Object(l.a)(["\n  width: 100%;\n  background-position: center center;\n  background-repeat: repeat-y;\n  background-size: cover;\n"]);return g=function(){return e},e}var m=Object(s.a)((function(e){return void 0!==e.back&&e.back,void 0!==e.pct&&e.pct,i.a.createElement("div",{className:r.a.bannerImgOver,style:{backgroundColor:void 0!==e.back?""+e.back:"black",filter:void 0!==e.pct?"opacity("+e.pct+"%)":"opacity(35%)",height:void 0!==e.height?e.height+"vw":"35vw"}},i.a.createElement("h1",null,i.a.createElement("b",{className:r.a.divider},"|"),e.title),i.a.createElement(d.a,{className:r.a.banner,fluid:e.imageData,backgroundColor:"#040e18"}))}))(g());a.a=m},nmnc:function(e,a,t){var l=t("Kz5y").Symbol;e.exports=l},shjB:function(e,a){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},tLB3:function(e,a,t){var l=t("GoyQ"),n=t("/9aa"),i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(l(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=l(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var t=r.test(e);return t||s.test(e)?c(e.slice(2),t?2:8):o.test(e)?NaN:+e}},wJg7:function(e,a){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,a){var l=typeof e;return!!(a=null==a?9007199254740991:a)&&("number"==l||"symbol"!=l&&t.test(e))&&e>-1&&e%1==0&&e<a}}}]);
//# sourceMappingURL=component---src-pages-catalog-js-7af6fa3f68647b4fa540.js.map