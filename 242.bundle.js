(self.webpackChunkfrontend_performance_basecamp=self.webpackChunkfrontend_performance_basecamp||[]).push([[242],{284:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>L});var i=t(5893),n=t(7294),a=t(8304),r=function(e,s,t,i){return new(t||(t=Promise))((function(n,a){function r(e){try{o(i.next(e))}catch(e){a(e)}}function c(e){try{o(i.throw(e))}catch(e){a(e)}}function o(e){var s;e.done?n(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(r,c)}o((i=i.apply(e,s||[])).next())}))};const c=new a.GiphyFetch("9KZmW7wLgrh1CM4ylWcLuJ4uCtsnXhEd");function o(e){return e.map((e=>{const{id:s,title:t,images:i}=e;return{id:s,title:t,imageUrl:i.original.url}}))}const l={getTrending:function(){return r(this,void 0,void 0,(function*(){try{return o((yield fetch("https://api.giphy.com/v1/gifs/trending?api_key=9KZmW7wLgrh1CM4ylWcLuJ4uCtsnXhEd&limit=16&rating=g").then((e=>e.json()))).data)}catch(e){return[]}}))},searchByKeyword:function(e,s){return r(this,void 0,void 0,(function*(){const t={limit:16,lang:"en",offset:16*s};try{return o((yield c.search(e,t)).data)}catch(e){return[]}}))}};var h=function(e,s,t,i){return new(t||(t=Promise))((function(n,a){function r(e){try{o(i.next(e))}catch(e){a(e)}}function c(e){try{o(i.throw(e))}catch(e){a(e)}}function o(e){var s;e.done?n(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(r,c)}o((i=i.apply(e,s||[])).next())}))};const d="BEFORE_SEARCH",g="LOADING",m="FOUND",u="NO_RESULT";var p=t(6868);const y=({searchKeyword:e,onEnter:s,onChange:t,onSearch:n})=>(0,i.jsxs)("section",Object.assign({className:"_yRyLCVW_8BrXNu2Ae1I"},{children:[(0,i.jsx)("h3",Object.assign({className:"tmllUNaCFiCyJ_2LTNUL"},{children:"- find the best gif now - "})),(0,i.jsxs)("div",Object.assign({className:"p1yl5o1LGzbcgKpLvnzP"},{children:[(0,i.jsx)("input",{className:"XZuzNzJP7hkmuiygaxt6",type:"text",value:e,onKeyPress:s,onChange:t}),(0,i.jsx)("button",Object.assign({className:"_HPJ5AEs_c3uawxix3Uk",type:"button",onClick:n},{children:(0,i.jsx)(p.RB5,{color:"white",size:"2rem"})}))]}))]})),f="bMX5kwo8awW0wG6uP_MM",j=({status:e})=>{switch(e){case u:return(0,i.jsxs)("h3",Object.assign({className:f},{children:[(0,i.jsx)("span",{children:"Nothing"}),"🥲"]}));case d:return(0,i.jsxs)("h3",Object.assign({className:f},{children:["🔥 ",(0,i.jsx)("span",{children:"Trending Now"})," 🔥"]}));default:return(0,i.jsx)("h3",Object.assign({className:f},{children:(0,i.jsx)("span",{children:"We Found..."})}))}},x=({imageUrl:e="",title:s=""})=>(0,i.jsxs)("div",Object.assign({className:"d9Kx4D_C6coYB4Bq3Y_D"},{children:[(0,i.jsx)("img",{className:"_qDfMSZFh0Sj5QB2_372",src:e}),(0,i.jsxs)("div",Object.assign({className:"jmVam4uDiwDe9X0kov9s"},{children:[(0,i.jsx)("div",{className:"bESWa5xgNgk178EbWGcc"}),(0,i.jsx)("h4",Object.assign({className:"x8ChTAzHTz86NM8umGRm"},{children:s}))]}))]})),b=({status:e,gifList:s,loadMore:t})=>(0,i.jsxs)("section",Object.assign({className:"de2qwsei5MNiz7eV4rNm"},{children:[(0,i.jsx)(j,{status:e}),(e===m||e===d)&&(0,i.jsx)("div",Object.assign({className:"Sk1D0Qs59YRDsSi_PLe_"},{children:s.map((e=>(0,i.jsx)(x,{imageUrl:e.imageUrl,title:e.title},e.id)))})),e===m&&(0,i.jsx)("button",Object.assign({className:"qrKiKyOk1oFYBTmViAam",onClick:t},{children:"load more"}))]}));var v=t(7166),w=t.n(v);const N=[{name:"Pola Lucas",profileUrl:"https://giphy.com/polalucas",profileImageUrl:"https://media4.giphy.com/media/gwWAA4PYJLTtyOHkUD/giphy.gif"},{name:"Yizr",profileUrl:"https://giphy.com/yizr",profileImageUrl:"https://media.giphy.com/avatars/yizr/llqaOJQnpDWZ/200h.gif"},{name:"YUNGSUNG",profileUrl:"https://giphy.com/yungsung",profileImageUrl:"https://media0.giphy.com/media/lgnOH6bhb1QpUm2k6w/giphy.gif"},{name:"Kev Lavery",profileUrl:"https://giphy.com/kevlavery",profileImageUrl:"https://media1.giphy.com/media/ZPLluhRJiGwSttn7i2/giphy.gif"},{name:"Lorna Mills",profileUrl:"https://giphy.com/lornamills",profileImageUrl:"https://media1.giphy.com/media/l0Iyn1gGtCPa3x41a/200.gif"}],U=Array.from({length:500},((e,s)=>(({name:e="",profileUrl:s="",profileImageUrl:t=""})=>({name:e,profileUrl:s,profileImageUrl:t}))(N[s%N.length]))),O=({artist:e})=>{const{name:s,profileUrl:t,profileImageUrl:n}=e;return(0,i.jsxs)("li",Object.assign({className:"WS5RuQ_x18SikZHTRyke"},{children:[(0,i.jsx)("img",{className:"XNLKxvyVOVu8lOJJSdAt",src:n}),(0,i.jsx)("p",{children:(0,i.jsx)("a",Object.assign({className:"mdtZcvbaOpN76XOUKbzG",href:t},{children:s}))})]}))},_=({artists:e})=>(0,i.jsx)("ul",{children:e.map(((e,s)=>(0,i.jsx)(O,{artist:e},s)))}),k=()=>{const[e,s]=(0,n.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",Object.assign({type:"button",className:"jQBPp9XzUlR0s47cyMvy",onClick:()=>s(!0)},{children:(0,i.jsx)(p.US6,{color:"white",size:"24px"})})),(0,i.jsxs)("section",Object.assign({className:w()("bI_mJt1zrVbU9rgQ8O9a",{_xMBJVElyMLYg2be4I3S:e})},{children:[(0,i.jsxs)("div",Object.assign({className:"p259JqbBpFGYE_NkFPXj"},{children:[(0,i.jsx)("h4",{children:"What's all this? "}),(0,i.jsx)("button",Object.assign({type:"button",onClick:()=>s(!1)},{children:(0,i.jsx)(p.oHP,{size:"24px"})}))]})),(0,i.jsxs)("div",Object.assign({className:"_4uL_W0scH3KiWMUSa8z"},{children:[(0,i.jsx)("img",{src:"https://media0.giphy.com/media/3oKIPdiPGxPI7Dze7u/giphy.gif?cid=ecf05e475f5bct6ci09g3pgn43nf6bausx33fj7f96f6ig92&rid=giphy.gif&ct=g"}),(0,i.jsx)("p",{children:"'memegle' is powered by GIPHY, the top source for the best & newest GIFs & Animated Stickers online. You can find any gif uploaded on GIPHY here."}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:"https://giphy.com/static/img/artistdirectory_1040.gif"}),(0,i.jsxs)("p",{children:["If you want more, you are always welcome to contribute as an artist. Please refer to the guideline ",(0,i.jsx)("a",Object.assign({href:"https://support.giphy.com/hc/en-us/articles/360019977552-How-to-Upload"},{children:"here"}))," and upload your work!"]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here are some artists you can refer to."}),(0,i.jsx)("br",{}),(0,i.jsx)("section",{children:(0,i.jsx)(_,{artists:U})})]}))]}))]})},L=()=>{const{status:e,searchKeyword:s,gifList:t,searchByKeyword:a,updateSearchKeyword:r,loadMore:c}=(()=>{const[e,s]=(0,n.useState)(d),[t,i]=(0,n.useState)(0),[a,r]=(0,n.useState)([]),[c,o]=(0,n.useState)("");return(0,n.useEffect)((()=>(h(void 0,void 0,void 0,(function*(){if(e===d){const e=yield l.getTrending();r(e)}})),()=>s(g))),[]),{status:e,searchKeyword:c,gifList:a,searchByKeyword:()=>h(void 0,void 0,void 0,(function*(){s(g),i(0);const e=yield l.searchByKeyword(c,0);0!==e.length?(r(e),s(m)):s(u)})),updateSearchKeyword:e=>{o(e.target.value)},loadMore:()=>h(void 0,void 0,void 0,(function*(){const e=t+1,s=yield l.searchByKeyword(c,e);r([...a,...s]),i(e)}))}})();return(0,i.jsxs)("div",Object.assign({className:"OXPtcxG6dhJUUZLVn9IN"},{children:[(0,i.jsx)(y,{searchKeyword:s,onEnter:e=>{"Enter"===e.key&&a()},onChange:r,onSearch:a}),(0,i.jsx)(b,{status:e,gifList:t,loadMore:c}),(0,i.jsx)(k,{})]}))}},4654:()=>{}}]);
//# sourceMappingURL=242.bundle.js.map