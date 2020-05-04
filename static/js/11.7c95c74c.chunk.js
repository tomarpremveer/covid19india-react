(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11],{629:function(e,t,a){"use strict";a.r(t);var n=a(38),c=a.n(n),r=a(40),i=a(61),l=a(3),s=a(28),o=a.n(s),d=a(2),m=a(0),u=a.n(m),f=a(99),p=a.n(f),h=a(564);var v=u.a.memo((function(e){var t=e.stateCode,a=Object(m.useState)(!1),n=Object(l.a)(a,2),r=n[0],s=n[1],f=Object(m.useState)([]),v=Object(l.a)(f,2),E=v[0],b=v[1],g=Object(m.useState)([]),y=Object(l.a)(g,2),j=y[0],O=y[1];Object(m.useEffect)((function(){function e(){return(e=Object(i.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://api.covid19india.org/raw_data.json");case 3:a=e.sent,b(a.data.raw_data.filter((function(e){return e.statecode===t}))),s(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r||function(){e.apply(this,arguments)}()}),[r,t]),Object(m.useEffect)((function(){O(function(e){var t=e.reduce((function(e,t){return e+t.contractedfromwhichpatientsuspected+", "}),"");t=t.replace(/\s+/g,"");var a=new Set(t.match(/[^,]+/g)),n=[],c=new Set,r=[];return e.forEach((function(e){var t=e.contractedfromwhichpatientsuspected.replace(/\s+/g,"").match(/[^,]+/g);if(t){var i="P"+e.patientnumber;c.add(i),n.push({id:i,group:a.has(i)?"source":"target",raw:e}),t.forEach((function(e){r.push({source:e,target:i})}))}})),r.forEach((function(e){c.has(e.source)||(n.push({id:e.source,group:"source",raw:e.source}),c.add(e.source))})),{nodes:n,links:r}}(E))}),[E]);var N=function(){var e=Object(m.useRef)();Object(m.useEffect)((function(){var t=e.current,a=document.getElementById("clusters").offsetWidth,n=a;t.d3Force("charge").strength(-60),t.d3Force("collision",d.i()),t.d3Force("x",d.j().strength(.3)),t.d3Force("y",d.k().strength(.3)),t.d3Force("box",(function(){for(var e=0,t=j.nodes.length;e<t;++e){var c=j.nodes[e];c.x=Math.max(-a,Math.min(a,c.x)),c.y=Math.max(-n,Math.min(n,c.y))}}))}),[]);var t=document.getElementById("clusters").offsetWidth,a=t;return u.a.createElement(h.a,{ref:e,width:t,height:a,graphData:j,nodeLabel:"id",nodeColor:function(e){return"source"===e.group?"#dc3545":"gray"},linkDirectionalParticleColor:function(){return"red"},linkDirectionalParticles:1,linkDirectionalParticleWidth:function(e){return"P"===e.source.id[0]?2:0},enableZoomPanInteraction:!1})};return Object(m.useEffect)((function(){p.a.render(u.a.createElement(N,null),document.getElementById("clusters"))}),[j]),u.a.createElement("div",{id:"clusters"})}),(function(){return!0}));var E=u.a.memo((function(e){var t=e.timeseries,a=e.arrayKey,n=Object(m.useState)([]),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(m.useRef)();return Object(m.useEffect)((function(){i(t)}),[t]),Object(m.useEffect)((function(){if(r.length){var e=d.H(s.current),t=50,n=0,c=+e.attr("width")-0,i=+e.attr("height")-50,l=d.J("%e %b"),o=d.C().domain(r.map((function(e){return l(e.date)}))).range([n,c]).paddingInner(.33),m=d.D().domain([0,Math.max(1,d.w(r,(function(e){return e[a]})))]).range([i,t]),u=d.a(o).tickSize(0);e.select(".x-axis").style("transform","translateY(".concat(i,"px)")).call(u).call((function(e){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy","1.5em").style("text-anchor","middle"),e.selectAll(".bar").data(r).join("path").attr("class","bar").attr("d",(function(e){return function(e,t,a,n,c,r){if(!n)return;void 0===r&&(r=1);var i=t-n+c;return["M",e,t,"L",e,i,"A",c,c,0,0,r,e+c,t-n,"L",e+a-c,t-n,"A",c,c,0,0,r,e+a,i,"L",e+a,t,"Z"].join(" ")}(o(l(e.date)),i,o.bandwidth(),i-m(e[a]),5)})).attr("fill",(function(e,t){return t<r.length-1?"#dc354590":"#dc3545"})),e.selectAll(".delta").data(r).join("text").attr("class","delta").attr("text-anchor","middle").attr("font-size","11px").attr("x",(function(e){return o(l(e.date))+o.bandwidth()/2})).attr("y",(function(e){return m(e[a])-6})).text((function(e){return e[a]})).append("tspan").attr("class","percent").attr("x",(function(e){return o(l(e.date))+o.bandwidth()/2})).attr("dy","-1.2em").text((function(e,t){return t&&r[t-1][a]?d.l("+.1%")((r[t][a]-r[t-1][a])/r[t-1][a]):""}))}}),[r,a]),u.a.createElement("div",{className:"DeltaBarGraph fadeInUp",style:{animationDelay:"0.8s"}},u.a.createElement("svg",{ref:s,width:"250",height:"250",viewBox:"0 0 250 250",preserveAspectRatio:"xMidYMid meet"},u.a.createElement("g",{className:"x-axis"}),u.a.createElement("g",{className:"y-axis"})))}),(function(){return!0}));var b=a(103),g=a(159),y=a(165),j=a(160),O=a(276);var N=function(e){var t=e.title,a=e.statistic,n=e.total,c=e.formula,r=e.date,i=e.description,l=e.className;return u.a.createElement("div",{className:"meta-item ".concat(l)},u.a.createElement("div",{className:"meta-item-top"},u.a.createElement("h3",null,t),u.a.createElement("span",{"data-tip":c,"data-event":"touchstart mouseover","data-event-off":"mouseleave","data-for":"stateMeta"},u.a.createElement(O.a,null))),u.a.createElement("h1",null,a),u.a.createElement("h5",null,r),n&&u.a.createElement("h5",null,"India has ".concat(n," CPM")),u.a.createElement("p",null,i))},w=a(7),x=a(312),M=a(57),D=a(620),k=a(47);var C=function(e){var t=e.stateData,a=e.lastTestObject,n=e.population,c=e.lastSevenDaysData,r=e.totalData,i=t.confirmed,l=t.active,s=t.deaths,o=i-l-s,d=c[0].totalconfirmed,m=Object(x.a)(c[0].date,"dd MMM"),f=c[6].totalconfirmed,p=Object(x.a)(c[6].date,"dd MMM"),h=i/n*1e6,v=o/i*100,E=l/i*100,b=s/i*100,g=(null===a||void 0===a?void 0:a.totaltested)/n*1e6,y=(f-d)/d*100,j=r[0].confirmed/13329e5*1e6,O=isNaN(Object(M.a)(null===a||void 0===a?void 0:a.updatedon,"dd/MM/yyyy",new Date))?"":"As of ".concat(Object(x.a)(Object(M.a)(null===a||void 0===a?void 0:a.updatedon,"dd/MM/yyyy",new Date),"dd MMM"));return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"StateMeta population"},u.a.createElement(k.a,{place:"top",type:"dark",effect:"solid",multiline:!0,scrollHide:!0,globalEventOff:"click",id:"stateMeta"}),u.a.createElement("div",{className:"meta-item population fadeInUp"},u.a.createElement("h3",null,"Population"),u.a.createElement("h1",null,Object(w.e)(n))),u.a.createElement("div",{className:"alert"},u.a.createElement(D.a,null),u.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",u.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),u.a.createElement("div",{className:"StateMeta"},u.a.createElement(N,{className:"confirmed",title:"Confirmed Per Million",statistic:h.toFixed(2),total:j.toFixed(2),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Math.round(h)," out of every 1 million people in ").concat(t.state," have tested positive for the virus.\n            ")}),u.a.createElement(N,{className:"active",title:"Active",statistic:"".concat(E.toFixed(2),"%"),formula:"(active / confirmed) * 100",description:"For every 100 confirmed cases, ".concat(E.toFixed(0)," are currently infected.")}),u.a.createElement(N,{className:"recovery",title:"Recovery Rate",statistic:"".concat(v.toFixed(2),"%"),formula:"(recovered / confirmed) * 100",description:"For every 100 confirmed cases, \n            ".concat(Math.round(v.toFixed(0))," have recovered from the virus.")}),u.a.createElement(N,{className:"mortality",title:"Mortality Rate",statistic:"".concat(b.toFixed(2),"%"),formula:"(deceased / confirmed) * 100",description:"For every 100 confirmed cases, \n            ".concat(Math.round(b.toFixed(0))," have unfortunately passed away from the virus.")}),u.a.createElement(N,{className:"gr",title:"Avg. Growth Rate",statistic:y>0?"".concat(Math.round(y/7),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(m," - ").concat(p),description:"In the last one week, the number of new infections has grown by an average of ".concat(Math.round(y/7),"% every day.")}),u.a.createElement(N,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Math.round(g)),formula:"(total tests in state / total population of state) * 1 Million",date:O,description:"For every 1 million people in ".concat(t.state,",\n            ").concat(Math.round(g)," people were tested.")})))},S=a(166),F=a(6),_=a(563),I=a(82),P=a(296),U=a(294),A=a(621),R=a(59),T=a(35),B=a(10),L=a(619),X=a(95);t.default=u.a.memo((function(e){var t=Object(m.useRef)(),a=Object(T.i)().stateCode.toUpperCase(),n=Object(m.useState)({}),s=Object(l.a)(n,2),d=s[0],f=s[1],p=Object(m.useState)(!1),h=Object(l.a)(p,2),O=h[0],N=h[1],k=Object(m.useState)({}),W=Object(l.a)(k,2),H=W[0],J=W[1],z=Object(m.useState)(null),G=Object(l.a)(z,2),K=G[0],V=G[1],Y=Object(m.useState)({}),Z=Object(l.a)(Y,2),q=Z[0],Q=Z[1],$=Object(m.useState)({}),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],ne=Object(m.useState)({}),ce=Object(l.a)(ne,2),re=ce[0],ie=ce[1],le=Object(m.useState)(F.f[a]),se=Object(l.a)(le,1)[0],oe=Object(m.useState)("confirmed"),de=Object(l.a)(oe,2),me=de[0],ue=de[1],fe=Object(L.a)(),pe=Object(l.a)(fe,2),he=pe[0],ve=pe[1].width,Ee=Object(m.useState)(!1),be=Object(l.a)(Ee,2),ge=be[0],ye=be[1];Object(X.a)((function(){Ne(a)}));var je,Oe,Ne=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,i,s,d,m,u,p,h,v,E,b,g,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([o.a.get("https://api.covid19india.org/data.json"),o.a.get("https://api.covid19india.org/state_district_wise.json"),o.a.get("https://api.covid19india.org/states_daily.json"),o.a.get("https://api.covid19india.org/state_test_data.json"),o.a.get("https://api.covid19india.org/sources_list.json")]);case 3:a=e.sent,n=Object(l.a)(a,5),i=n[0].data,s=n[1].data,d=n[2].data,m=n[3].data,u=n[4].data,p=F.f[t],h=i.statewise,f(h.filter((function(e){return e.statecode!==t}))),V([h.find((function(e){return e.statecode===t}))]),v=Object(w.j)(d)[t],E=Object(w.i)(m.states_tested_data)[t],b=Object(w.g)(Object(r.a)({},t,v),Object(r.a)({},t,E)),J(b[t]),ie(Object(r.a)({},p,s[p])),g=u.sources_list,ae(g.filter((function(e){return e.statecode===t}))),y=m.states_tested_data,Q(y.filter((function(e){return e.state===p&&""!==e.totaltested}))),N(!0),Object(I.a)({targets:".highlight",duration:200,delay:3e3,translateX:"confirmed"===me?"".concat(0*ve,"px"):"active"===me?"".concat(.25*ve,"px"):"recovered"===me?"".concat(.5*ve,"px"):"deceased"===me?"".concat(.75*ve,"px"):"0px",easing:"spring(1, 80, 90, 10)",opacity:1}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(t){return e.apply(this,arguments)}}(),we=q[q.length-1],xe=F.i[se],Me=function(){var e=window.innerWidth>=540?3:2,t=re[se]&&Object.keys(re[se].districtData).length||0;return Math.ceil(t/e)}();return se?u.a.createElement(u.a.Fragment,null,u.a.createElement(R.a,null,u.a.createElement("title",null,"Coronavirus Outbreak in ",F.f[a]," - covid19india.org"),u.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(F.f[a],": Latest Map and Case Count")})),u.a.createElement("div",{className:"State"},u.a.createElement("div",{className:"state-left"},u.a.createElement("div",{className:"breadcrumb"},u.a.createElement(_.a,null,u.a.createElement(_.a.Item,{href:"/"},"Home"),u.a.createElement(_.b,{direction:"w"},u.a.createElement("summary",null,u.a.createElement(_.a.Item,{href:"".concat(a),selected:!0},se),u.a.createElement(_.b.Caret,{className:"caret"})),O&&u.a.createElement(_.b.Menu,{direction:"se"},d.map((function(e){return u.a.createElement(_.b.Item,{key:e.statecode,className:"item"},u.a.createElement(B.b,{to:"".concat(e.statecode)},F.f[e.statecode]))})))))),u.a.createElement("div",{className:"header"},u.a.createElement("div",{className:"header-left fadeInUp",style:{animationDelay:"0.3s"}},u.a.createElement("h1",null,se),u.a.createElement("h5",null,"Last Updated on"," ",K&&Object.keys(K[0]).length?Object(w.d)(K[0].lastupdatedtime):"")),u.a.createElement("div",{className:"header-right fadeInUp",style:{animationDelay:"0.5s"}},u.a.createElement("h5",null,"Tested"),u.a.createElement("h2",null,Object(w.e)(null===we||void 0===we?void 0:we.totaltested)),u.a.createElement("h5",{className:"timestamp"},isNaN(Object(M.a)(null===we||void 0===we?void 0:we.updatedon,"dd/MM/yyyy",new Date))?"":"As of ".concat(Object(x.a)(Object(M.a)(null===we||void 0===we?void 0:we.updatedon,"dd/MM/yyyy",new Date),"dd MMM"))),u.a.createElement("h5",null,"per ",(null===we||void 0===we?void 0:we.totaltested)&&u.a.createElement("a",{href:we.source,target:"_noblank"},"source")))),O&&u.a.createElement("div",{className:"map-switcher",ref:he},u.a.createElement("div",{className:"highlight ".concat(me),style:{transform:"translateX(".concat(0*ve,"px)"),opacity:0}}),u.a.createElement("div",{className:"clickable",onClick:function(){ue("confirmed"),Object(I.a)({targets:".highlight",translateX:"".concat(0*ve,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){ue("active"),Object(I.a)({targets:".highlight",translateX:"".concat(.25*ve,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){ue("recovered"),Object(I.a)({targets:".highlight",translateX:"".concat(.5*ve,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){ue("deceased"),Object(I.a)({targets:".highlight",translateX:"".concat(.75*ve,"px"),easing:"spring(1, 80, 90, 10)"})}})),O&&u.a.createElement(g.a,{data:K[0]}),O&&u.a.createElement(j.a,{timeseries:H}),O&&u.a.createElement(y.a,{forwardRef:t,mapMeta:F.c[se],states:K,districts:re,stateTestData:q,isCountryLoaded:!1,mapOption:me}),O&&u.a.createElement("div",{className:"meta-secondary"},u.a.createElement("div",{className:"alert"},u.a.createElement(P.a,null),u.a.createElement("div",{className:"alert-right"},"Awaiting district details for"," ",(null===(je=re[se])||void 0===je||null===(Oe=je.districtData.Unknown)||void 0===Oe?void 0:Oe.confirmed)||"0"," ","cases")),u.a.createElement("div",{className:"alert"},u.a.createElement(D.a,null),u.a.createElement("div",{className:"alert-right"},"Data collected from sources"," ",te.length>0?Object.keys(te[0]).map((function(e,t){if(e.match("source")&&""!==te[0][e]){var a=e.match(/\d+/);return u.a.createElement(u.a.Fragment,{key:t},a>1?",":"",u.a.createElement("a",{href:te[0][e]},a))}return null})):""))),O&&u.a.createElement(C,{stateData:K[0],lastTestObject:we,population:xe,lastSevenDaysData:H.slice(-7),totalData:d.filter((function(e){return"TT"===e.statecode}))})),u.a.createElement("div",{className:"state-right"},O&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"district-bar",style:ge?{}:{display:"flex"}},u.a.createElement("div",{className:"district-bar-left fadeInUp",style:{animationDelay:"0.6s"}},u.a.createElement("h2",null,"Top districts"),u.a.createElement("div",{className:"districts ".concat(ge?"is-grid":""),style:ge?{gridTemplateRows:"repeat(".concat(Me,", 2rem)")}:{}},re[se]?Object.keys(re[se].districtData).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return re[se].districtData[t].confirmed-re[se].districtData[e].confirmed})).slice(0,ge?void 0:5).map((function(e,t){return u.a.createElement("div",{key:t,className:"district"},u.a.createElement("h2",null,re[se].districtData[e].confirmed),u.a.createElement("h5",null,e),u.a.createElement("div",{className:"delta"},u.a.createElement(U.a,null),u.a.createElement("h6",null,re[se].districtData[e].delta.confirmed)))})):""),re[se]&&Object.keys(re[se].districtData).length>5&&u.a.createElement("button",{className:"button",onClick:function(){ye(!ge)}},ge?"View less":"View all")),u.a.createElement("div",{className:"district-bar-right"},u.a.createElement("div",{className:"happy-sign fadeInUp",style:{animationDelay:"0.6s"}},H.slice(-5).every((function(e){return 0===e.dailyconfirmed}))&&u.a.createElement("div",{className:"alert is-green"},u.a.createElement(A.a,null),u.a.createElement("div",{className:"alert-right"},"No new confirmed cases in the past five days"))),u.a.createElement(E,{timeseries:H.slice(-5),arrayKey:"dailyconfirmed"}))),!1,u.a.createElement(S.a,{timeseries:H}))),u.a.createElement("div",{className:"state-left"},u.a.createElement("div",{className:"Clusters fadeInUp",style:{animationDelay:"0.8s"}},u.a.createElement("h1",null,"Network of Transmission"),u.a.createElement(v,{stateCode:a}))),u.a.createElement("div",{className:"state-right"})),u.a.createElement(b.a,null)):u.a.createElement(T.a,{to:"/"})}))}}]);
//# sourceMappingURL=11.7c95c74c.chunk.js.map