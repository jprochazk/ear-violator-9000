const tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};tt();var Y,d,Ce,W,Ne,ie,J={},Pe=[],ot=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(t,e){for(var o in e)t[o]=e[o];return t}function Ee(t){var e=t.parentNode;e&&e.removeChild(t)}function a(t,e,o){var n,r,s,c={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:c[s]=e[s];if(arguments.length>2&&(c.children=arguments.length>3?Y.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)c[s]===void 0&&(c[s]=t.defaultProps[s]);return K(t,c,n,r,null)}function K(t,e,o,n,r){var s={type:t,props:e,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Ce};return r==null&&d.vnode!=null&&d.vnode(s),s}function T(t){return t.children}function z(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__.__k.indexOf(t)+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?U(t):null}function Te(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return Te(t)}}function ce(t){(!t.__d&&(t.__d=!0)&&W.push(t)&&!V.__r++||ie!==d.debounceRendering)&&((ie=d.debounceRendering)||Ne)(V)}function V(){for(var t;V.__r=W.length;)t=W.sort(function(e,o){return e.__v.__b-o.__v.__b}),W=[],t.some(function(e){var o,n,r,s,c,i;e.__d&&(c=(s=(o=e).__v).__e,(i=o.__P)&&(n=[],(r=E({},s)).__v=s.__v+1,se(i,s,r,o.__n,i.ownerSVGElement!==void 0,s.__h!=null?[c]:null,n,c??U(s),s.__h),Oe(n,s),s.__e!=c&&Te(s)))})}function Ae(t,e,o,n,r,s,c,i,u,_){var l,h,g,p,f,N,m,b=n&&n.__k||Pe,S=b.length;for(o.__k=[],l=0;l<e.length;l++)if((p=o.__k[l]=(p=e[l])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?K(null,p,null,null,p):Array.isArray(p)?K(T,{children:p},null,null,null):p.__b>0?K(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=o,p.__b=o.__b+1,(g=b[l])===null||g&&p.key==g.key&&p.type===g.type)b[l]=void 0;else for(h=0;h<S;h++){if((g=b[h])&&p.key==g.key&&p.type===g.type){b[h]=void 0;break}g=null}se(t,p,g=g||J,r,s,c,i,u,_),f=p.__e,(h=p.ref)&&g.ref!=h&&(m||(m=[]),g.ref&&m.push(g.ref,null,p),m.push(h,p.__c||f,p)),f!=null?(N==null&&(N=f),typeof p.type=="function"&&p.__k===g.__k?p.__d=u=Le(p,u,t):u=Ue(t,p,g,b,f,u),typeof o.type=="function"&&(o.__d=u)):u&&g.__e==u&&u.parentNode!=t&&(u=U(g))}for(o.__e=N,l=S;l--;)b[l]!=null&&(typeof o.type=="function"&&b[l].__e!=null&&b[l].__e==o.__d&&(o.__d=U(n,l+1)),Re(b[l],b[l]));if(m)for(l=0;l<m.length;l++)Ie(m[l],m[++l],m[++l])}function Le(t,e,o){for(var n,r=t.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=t,e=typeof n.type=="function"?Le(n,e,o):Ue(o,n,n,r,n.__e,e));return e}function Ue(t,e,o,n,r,s){var c,i,u;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(o==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(r),c=null;else{for(i=s,u=0;(i=i.nextSibling)&&u<n.length;u+=2)if(i==r)break e;t.insertBefore(r,s),c=s}return c!==void 0?c:r.nextSibling}function nt(t,e,o,n,r){var s;for(s in o)s==="children"||s==="key"||s in e||Q(t,s,null,o[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||o[s]===e[s]||Q(t,s,e[s],o[s],n)}function ue(t,e,o){e[0]==="-"?t.setProperty(e,o):t[e]=o==null?"":typeof o!="number"||ot.test(e)?o:o+"px"}function Q(t,e,o,n,r){var s;e:if(e==="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||ue(t.style,e,"");if(o)for(e in o)n&&o[e]===n[e]||ue(t.style,e,o[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=o,o?n||t.addEventListener(e,s?pe:_e,s):t.removeEventListener(e,s?pe:_e,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=o??"";break e}catch{}typeof o=="function"||(o!=null&&(o!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,o):t.removeAttribute(e))}}function _e(t){this.l[t.type+!1](d.event?d.event(t):t)}function pe(t){this.l[t.type+!0](d.event?d.event(t):t)}function se(t,e,o,n,r,s,c,i,u){var _,l,h,g,p,f,N,m,b,S,q,$=e.type;if(e.constructor!==void 0)return null;o.__h!=null&&(u=o.__h,i=e.__e=o.__e,e.__h=null,s=[i]),(_=d.__b)&&_(e);try{e:if(typeof $=="function"){if(m=e.props,b=(_=$.contextType)&&n[_.__c],S=_?b?b.props.value:_.__:n,o.__c?N=(l=e.__c=o.__c).__=l.__E:("prototype"in $&&$.prototype.render?e.__c=l=new $(m,S):(e.__c=l=new z(m,S),l.constructor=$,l.render=rt),b&&b.sub(l),l.props=m,l.state||(l.state={}),l.context=S,l.__n=n,h=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),$.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=E({},l.__s)),E(l.__s,$.getDerivedStateFromProps(m,l.__s))),g=l.props,p=l.state,h)$.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if($.getDerivedStateFromProps==null&&m!==g&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(m,S),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(m,l.__s,S)===!1||e.__v===o.__v){l.props=m,l.state=l.__s,e.__v!==o.__v&&(l.__d=!1),l.__v=e,e.__e=o.__e,e.__k=o.__k,e.__k.forEach(function(M){M&&(M.__=e)}),l.__h.length&&c.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(m,l.__s,S),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(g,p,f)})}l.context=S,l.props=m,l.state=l.__s,(_=d.__r)&&_(e),l.__d=!1,l.__v=e,l.__P=t,_=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(n=E(E({},n),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||(f=l.getSnapshotBeforeUpdate(g,p)),q=_!=null&&_.type===T&&_.key==null?_.props.children:_,Ae(t,Array.isArray(q)?q:[q],e,o,n,r,s,c,i,u),l.base=e.__e,e.__h=null,l.__h.length&&c.push(l),N&&(l.__E=l.__=null),l.__e=!1}else s==null&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=st(o.__e,e,o,n,r,s,c,u);(_=d.diffed)&&_(e)}catch(M){e.__v=null,(u||s!=null)&&(e.__e=i,e.__h=!!u,s[s.indexOf(i)]=null),d.__e(M,e,o)}}function Oe(t,e){d.__c&&d.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(n){n.call(o)})}catch(n){d.__e(n,o.__v)}})}function st(t,e,o,n,r,s,c,i){var u,_,l,h=o.props,g=e.props,p=e.type,f=0;if(p==="svg"&&(r=!0),s!=null){for(;f<s.length;f++)if((u=s[f])&&"setAttribute"in u==!!p&&(p?u.localName===p:u.nodeType===3)){t=u,s[f]=null;break}}if(t==null){if(p===null)return document.createTextNode(g);t=r?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,g.is&&g),s=null,i=!1}if(p===null)h===g||i&&t.data===g||(t.data=g);else{if(s=s&&Y.call(t.childNodes),_=(h=o.props||J).dangerouslySetInnerHTML,l=g.dangerouslySetInnerHTML,!i){if(s!=null)for(h={},f=0;f<t.attributes.length;f++)h[t.attributes[f].name]=t.attributes[f].value;(l||_)&&(l&&(_&&l.__html==_.__html||l.__html===t.innerHTML)||(t.innerHTML=l&&l.__html||""))}if(nt(t,g,h,r,i),l)e.__k=[];else if(f=e.props.children,Ae(t,Array.isArray(f)?f:[f],e,o,n,r&&p!=="foreignObject",s,c,s?s[0]:o.__k&&U(o,0),i),s!=null)for(f=s.length;f--;)s[f]!=null&&Ee(s[f]);i||("value"in g&&(f=g.value)!==void 0&&(f!==t.value||p==="progress"&&!f||p==="option"&&f!==h.value)&&Q(t,"value",f,h.value,!1),"checked"in g&&(f=g.checked)!==void 0&&f!==t.checked&&Q(t,"checked",f,h.checked,!1))}return t}function Ie(t,e,o){try{typeof t=="function"?t(e):t.current=e}catch(n){d.__e(n,o)}}function Re(t,e,o){var n,r;if(d.unmount&&d.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||Ie(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){d.__e(s,e)}n.base=n.__P=null}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&Re(n[r],e,typeof t.type!="function");o||t.__e==null||Ee(t.__e),t.__e=t.__d=void 0}function rt(t,e,o){return this.constructor(t,o)}function lt(t,e,o){var n,r,s;d.__&&d.__(t,e),r=(n=typeof o=="function")?null:o&&o.__k||e.__k,s=[],se(e,t=(!n&&o||e).__k=a(T,null,[t]),r||J,J,e.ownerSVGElement!==void 0,!n&&o?[o]:r?null:e.firstChild?Y.call(e.childNodes):null,s,!n&&o?o:r?r.__e:e.firstChild,n),Oe(s,t)}Y=Pe.slice,d={__e:function(t,e,o,n){for(var r,s,c;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(t)),c=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,n||{}),c=r.__d),c)return r.__E=r}catch(i){t=i}throw t}},Ce=0,z.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},o),this.props)),t&&E(o,t),t!=null&&this.__v&&(e&&this.__h.push(e),ce(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ce(this))},z.prototype.render=T,W=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,V.__r=0;const He=Symbol("default"),je=(t,e,o=[])=>{for(const n of Object.keys(t)){const r=[...o,n],s=t[n];e(r,s),s._&&je(s._,e,r)}};function at(t,e){if(e.length===0)return[null,[]];let o=t[e[0]];if(!o)return[null,[...e]];let n=1,r=e.length;for(;n<r;){const s=e[n];if(!o._)break;if(s in o._)n+=1,o=o._[s];else break}return[o,[...e.slice(n)]]}function it(t,e,o,n,r){const[s,c]=[r.prefix?.nick,r.params.at(-1)];if(!s||!c)return;const i=c.startsWith(o.get());if(!e.get().autoplay&&!i)return;const u=i?c.slice(o.get().length).split(" "):c.split(" ");let[_,l]=at(n,u);if(_||(_=n[He]),!("handle"in _))return;const{allows:h,handle:g}=_;s in t.get()||t.update(m=>({...m,[s]:{name:s,role:x.None}}));const p=t.get()[s];if(typeof h=="function"){if(!h(p))return}else if(p.role<h)return;const f=g.length-1;if(f>l.length)return;const N=[...l.splice(0,f-1),l.join(" ")];g(p,...N)}const re=1,Fe=re*1e3,We=Fe*60,De=We*60,ct=De*24,j=(t,e)=>Object.fromEntries(e.map(o=>[o,t])),ge={...j(re,["ms","msec","msecs","milli","millis","millisecond","milliseconds"]),...j(Fe,["s","sec","secs","seconds"]),...j(We,["m","min","min","minutes"]),...j(De,["h","hr","hrs","hour","hours"]),...j(ct,["d","day","days"])},fe=/(\d+)\s*(\w+)/;function qe(t){if(!Number.isNaN(Number(t)))return Number(t)*re;let e=0,o=t,n=o.match(fe);for(;o.length>0&&n;){const[r,s,c]=n;o=o.slice(r.length),c in ge&&(e+=Number(s)*ge[c],n=o.match(fe))}return e}class ut{constructor(e,o={}){this.channel=e,this.sounds=o}playing=null;cache=new Map;callbacks={play:new Set,stop:new Set};on(e,o){this.callbacks[e].add(o)}off(e,o){this.callbacks[e].delete(o)}emit(e,o){for(const n of this.callbacks[e])n(o)}get(e){if(!(e in this.sounds))return null;const o="sounds/"+this.sounds[e];return this.cache.has(o)||this.cache.set(o,new Audio(o)),this.cache.get(o)||null}async play(e,o){this.playing&&this.stop();const n=this.get(e);if(!!n)return this.emit("play",e),this.playing=e,new Promise(r=>{n.play().then(()=>{const s=()=>{this.playing===e&&(this.emit("stop",this.playing),this.playing=null),r()};n.addEventListener("ended",s,{once:!0}),n.addEventListener("pause",s,{once:!0})})})}stop(){if(!this.playing)return;const e=this.get(this.playing);!e||(e.pause(),e.currentTime=0,this.emit("stop",this.playing),this.playing=null)}}var Z,v,de,D=0,Me=[],he=d.__b,me=d.__r,ye=d.diffed,be=d.__c,we=d.unmount;function le(t,e){d.__h&&d.__h(v,t,D||e),D=0;var o=v.__H||(v.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function ee(t){return D=1,_t(Be,t)}function _t(t,e,o){var n=le(Z++,2);return n.t=t,n.__c||(n.__=[o?o(e):Be(void 0,e),function(r){var s=n.t(n.__[0],r);n.__[0]!==s&&(n.__=[s,n.__[1]],n.__c.setState({}))}],n.__c=v),n.__}function Ge(t,e){var o=le(Z++,3);!d.__s&&ze(o.__H,e)&&(o.__=t,o.__H=e,v.__H.__h.push(o))}function O(t){return D=5,Ke(function(){return{current:t}},[])}function Ke(t,e){var o=le(Z++,7);return ze(o.__H,e)&&(o.__=t(),o.__H=e,o.__h=t),o.__}function X(t,e){return D=8,Ke(function(){return t},e)}function pt(){for(var t;t=Me.shift();)if(t.__P)try{t.__H.__h.forEach(B),t.__H.__h.forEach(oe),t.__H.__h=[]}catch(e){t.__H.__h=[],d.__e(e,t.__v)}}d.__b=function(t){v=null,he&&he(t)},d.__r=function(t){me&&me(t),Z=0;var e=(v=t.__c).__H;e&&(e.__h.forEach(B),e.__h.forEach(oe),e.__h=[])},d.diffed=function(t){ye&&ye(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Me.push(e)!==1&&de===d.requestAnimationFrame||((de=d.requestAnimationFrame)||function(o){var n,r=function(){clearTimeout(s),ke&&cancelAnimationFrame(n),setTimeout(o)},s=setTimeout(r,100);ke&&(n=requestAnimationFrame(r))})(pt)),v=null},d.__c=function(t,e){e.some(function(o){try{o.__h.forEach(B),o.__h=o.__h.filter(function(n){return!n.__||oe(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],d.__e(n,o.__v)}}),be&&be(t,e)},d.unmount=function(t){we&&we(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{B(n)}catch(r){e=r}}),e&&d.__e(e,o.__v))};var ke=typeof requestAnimationFrame=="function";function B(t){var e=v,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),v=e}function oe(t){var e=v;t.__c=t.__(),v=e}function ze(t,e){return!t||t.length!==e.length||e.some(function(o,n){return o!==t[n]})}function Be(t,e){return typeof e=="function"?e(t):e}class I{#t;#e;#n;#s;#o;constructor(e,o,n=JSON.stringify,r=JSON.parse){this.#t=e,this.#n=n,this.#s=r,this.#o=new Set,localStorage[e]?this.#e=this.#s(localStorage[e]):(this.#e=o(),localStorage[this.#t]=this.#n(this.#e))}set(e){this.#e=e,localStorage[this.#t]=this.#n(e),this.#o.forEach(o=>o(e))}get(){return this.#e}update(e){const o=this.get();this.set(e(o))}subscribe(e){this.#o.add(e),e(this.#e)}unsubscribe(e){this.#o.delete(e)}unsave(){localStorage.removeItem(this.#t)}}function R(t){const[e,o]=ee(()=>t.get());return Ge(()=>{const n=r=>o(r);return t.subscribe(n),()=>t.unsubscribe(n)},[t]),e}const gt=t=>speechSynthesis.speak(new SpeechSynthesisUtterance(t)),ft={say:gt},dt=t=>t.substring(0,1).toUpperCase()+t.substring(1),w=window.location.hash?window.location.hash.substring(1):void 0,H=(t,e)=>e?`${t}.${e}`:"[[empty]]",Je=new I(H("prefix",w),()=>"!xd");var x=(t=>(t[t.None=0]="None",t[t.User=1]="User",t[t.Editor=2]="Editor",t[t.Streamer=3]="Streamer",t))(x||{});const ht=Object.keys(x).filter(t=>Number.isNaN(Number(t))),Ve=new I(H("users",w),()=>w?{[w]:{name:w,role:3}}:{}),Qe={autoplay:!1},mt={autoplay:"Allows playing sounds without the command prefix"},A=new I(H("preferences",w),()=>({...Qe})),C=new I(H("aliases",w),()=>({})),L=new I(H("cooldowns",w),()=>({})),ae=new I(H("ttsCooldown",w),()=>({global:1e3,user:1e3})),y={prefix:Je,users:Ve,prefs:A,aliases:C,cooldowns:L,ttsCooldown:ae},k=new ut(w,JSON.parse('{"1984": "1984.ogg","1987": "1987.mp3","ahmspigginit": "AHMSPIGGINIT.ogg","kuso": "Kuso.mp3","poyo": "Poyo.mp3","a": "a.ogg","abayo": "abayo.ogg","ahoy": "ahoy.ogg","ame_hates_minecraft": "ame_hates_minecraft.mp3","ame_minecraft": "ame_minecraft.mp3","ame_mining": "ame_mining.mp3","amogus": "amogus.ogg","anbribaboo": "anbribaboo.ogg","aquaa": "aquaa.ogg","aquaap": "aquaap.ogg","aquaquaquaaa": "aquaquaquaaa.ogg","art": "art.ogg","awake": "awake.mp3","away": "away.ogg","awkward": "awkward.mp3","bananak": "bananak.ogg","baqua": "baqua.ogg","based": "based.ogg","baseddepartment": "baseddepartment.ogg","bonappetit": "bonappetit.mp3","booba": "booba.ogg","boobest": "boobest.ogg","botankek": "botankek.ogg","brb": "brb.mp3","bruh": "bruh.mp4","bubba": "bubba.ogg","bwahaha": "bwahaha.ogg","cake_is_sus": "cake_is_sus.mp3","calliopipi": "calliopipi.mp3","circus": "circus.ogg","cocomitai": "cocomitai.ogg","coom": "coom.mp3","cringe": "cringe.ogg","dindin": "dindin.ogg","dmca": "dmca.ogg","dododo": "dododo.ogg","eekumbokum": "eekumbokum.mp3","f": "f.ogg","flower": "flower.ogg","foxlol": "foxlol.ogg","frustrate": "frustrate.ogg","ganbare": "ganbare.mp3","ganbarushia": "ganbarushia.ogg","gn": "gn.ogg","gohan": "gohan.mp3","goodmorning": "goodmorning.ogg","guh": "guh.ogg","gwak": "gwak.ogg","haachama": "haachama.ogg","heheyeb": "heheyeb.ogg","help": "help.ogg","heyguys": "heyguys.ogg","heymoona": "heymoona.ogg","hi_honey_nene": "hi_honey_nene.mp3","hic": "hic.ogg","hirys": "hirys.ogg","horeesheeit": "horeesheeit.ogg","horny": "horny.ogg","icantbreathe": "icantbreathe.ogg","im_pomu": "im_Pomu.ogg","imdie": "imdie.ogg","impomu": "impomu.ogg","inainaina": "inainaina.ogg","inascared": "inascared.ogg","innit": "innit.ogg","isee": "isee.ogg","itsmepekora": "itsmepekora.ogg","kek": "kek.ogg","kikiriki": "kikiriki.ogg","killme": "killme.ogg","killyou": "killyou.ogg","kkona": "kkona.ogg","kneel": "kneel.ogg","konnui": "konnui.ogg","koroneunravel": "koroneunravel.ogg","kroni": "kroni.ogg","kuso": "kuso.ogg","leavemealone": "leavemealone.ogg","loser": "loser.ogg","makudonarudo": "makudonarudo.mp3","marinelaugh": "marinelaugh.ogg","matanene": "matanene.ogg","mcdonalds": "mcdonalds.mp3","meds": "meds.ogg","meds2": "meds2.mp3","meow": "meow.ogg","mofumofu": "mofumofu.ogg","morinayeah": "morinayeah.ogg","mumeiflower": "mumeiflower.ogg","naaa": "naaa.ogg","nanora": "nanora.ogg","naruhodone": "naruhodone.ogg","ne": "ne.ogg","neehidoi": "neehidoi.ogg","nene": "nene.ogg","notgay": "notgay.ogg","notsus": "notsus.ogg","notwords": "notwords.mp3","nowaifu": "nowaifu.ogg","nyahello": "nyahello.ogg","ogey": "ogey.ogg","oh": "oh.mp4","oh_my_gah_okayu": "oh_my_gah_okayu.ogg","oh_nyoo": "oh_nyoo.ogg","ohnojesas": "ohnojesas.ogg","ok": "ok.mp3","omegalol": "omegalol.ogg","ooga_booga": "ooga_booga.ogg","pampampam": "pampampam.mp3","pardun": "pardun.ogg","peace": "peace.ogg","peko": "peko.ogg","pekola_v3": "pekola_v3.mp3","pekolaughshort": "pekolaughshort.ogg","pekolol": "pekolol.ogg","pepeloni": "pepeloni.ogg","phpdetected": "phpdetected.ogg","pillsma": "pillsma.mp3","pipi": "pipi.mp3","pippenis": "pippenis.mp3","please": "please.ogg","pogtasty": "pogtasty.ogg","pogudansushort": "pogudansushort.ogg","poi": "poi.ogg","porukaoruka": "porukaoruka.ogg","presentforyou": "presentforyou.ogg","reps": "reps.ogg","ripntear": "ripntear.ogg","rrats": "rrats.ogg","rratsim": "rratsim.ogg","rrreha": "rrreha.ogg","secretmoney": "secretmoney.ogg","shutup": "shutup.ogg","siren": "siren.ogg","slurp": "slurp.ogg","slurpp": "slurpp.ogg","sneed": "sneed.ogg","sofunny": "sofunny.mp3","speggingit": "speggingit.ogg","stayhome": "stayhome.ogg","suipiss": "suipiss.mp3","sus": "sus.ogg","tasukete": "tasukete.mp3","teme": "teme.ogg","theyglow": "theyglow.mp3","tomorrow": "tomorrow.mp3","tone": "tone.ogg","towababy": "towababy.ogg","true": "true.ogg","trueing": "trueing.mp3","uoh": "uoh.ogg","uoooh": "uoooh.mp3","uuuu": "uuuu.ogg","vtubers": "vtubers.ogg","wah": "wah.ogg","wasnt_searching": "wasnt_searching.mp3","watamefactory": "watamefactory.ogg","watamewarukunai": "watamewarukunai.ogg","wdym": "wdym.ogg","wearefaq": "wearefaq.ogg","why": "why.ogg","wtf": "wtf.ogg","yabe": "yabe.ogg","yay": "yay.ogg","yo": "yo.mp3","youman": "youman.ogg","yousmell": "yousmell.ogg","yubi": "yubi.ogg","zomlol": "zomlol.ogg","\u{1F354}": "\u{1F354}.ogg","\u{1F62D}": "\u{1F62D}.mp3"}')),yt={current:{perUser:{},perSound:{}},check(t,e){if(!(t in L.get()))return!0;const o=L.get()[t],n=Date.now();return n<=(this.current.perSound[t]??0)+(o.perSound??0)||n<=(this.current.perUser[e]??0)+(o.perUser??0)?!1:(this.current.perSound[t]=n,this.current.perUser[e]=n,!0)}},ve={allows:1,handle(t,e){k.playing||(t.role>=2||yt.check(e,t.name))&&(e=e.toLowerCase().split(" ")[0],e=e in C.get()?C.get()[e]:e,e in k.sounds&&(console.log(`${t.name} played ${e}`),k.play(e,t.name)))},description:"Play the sound {0}.",example:t=>`${t}play ame_hates_minecraft`},bt={allows:2,handle(t){!k.playing||(console.log(`${t.name} stopped ${k.playing}`),k.stop())},description:"Stop playing the current sound.",example:t=>`${t}stop`},wt={allows:3,handle(t,e,o){!Number.isNaN(Number(o))||(o=dt(o.toLowerCase()),o in x&&Ve.update(n=>({...n,[e]:{name:e,role:x[o]}})),console.log(`${t.name} set role of ${e} to ${o}`))},description:`Update role for user {0} to {1}. Roles: ${ht.join(", ")}`,example:t=>`${t}role justinfan91234 editor`},kt={allows:3,handle(t,e,o){if(e in A.get()){const n=e;switch(o){case"toggle":A.update(r=>({...r,[n]:!r[n]}));break;case"on":case"true":case"yes":A.update(r=>({...r,[n]:!0}));break;case"off":case"false":case"no":A.update(r=>({...r,[n]:!1}));break}console.log(`Updated preference ${e} to ${A.get()[n]}`)}},description:`Update preference {0}. Keys: ${Object.keys(Qe).join(", ")}, values: on/true/yes, off/false/no`,example:t=>`${t}prefs autoplay on`},vt={_:{set:{allows:2,handle(t,e,o){if(e=e.toLowerCase(),o=o.toLowerCase(),!(o in k.sounds))return;const n=e in C.get();C.update(r=>({...r,[e]:o})),console.log(`${t.name} ${n?"updated":"added"} an alias: ${e} -> ${o}`)},description:"Add {0} as an alias for {1}. Note that you can't create an alias which is named the same as an existing sound.",example:t=>`${t}alias set SSSsss ame_hates_minecraft`},rm:{allows:2,handle(t,e){e=e.toLowerCase(),C.update(o=>{const n={...o};return delete n[e],n}),console.log(`${t.name} removed an alias: ${e}`)},description:"Remove {0} from aliases.",example:t=>`${t}alias rm SSSsss`}}},St={allows:3,handle(t,e){(e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'"))&&(e=e.slice(1,e.length-1)),Je.update(()=>e),console.log(`${t.name} updated prefix to ${e}`)},description:"Set command prefix to {0}. {0} may be enclosed in quotes.",example:t=>`${t}prefix !`},Se={current:{global:0,user:{}},check(t){const e=ae.get(),o=Date.now(),n=o-this.current.global,r=o-(this.current.user[t]??0);return e.global>=n||e.user>=r?!1:(this.current.global=o,this.current.user[t]=o,!0)}},$t={allows:1,handle(t,e){console.log(t,Se.current),(t.role>=2||Se.check(t.name))&&(ft.say(e),console.log(`${t.name} said ${e} through TTS`))},description:"Say {0} through TTS",example:t=>`${t}say L_? L_? L_? L_? L_? L_? L_? L_? L_?`},Xe=t=>({set:{allows:2,handle(o,n){const r=qe(n);ae.update(s=>({...s,[t]:r})),console.log(`${o.name} set ${t} TTS cooldown to ${n}`)},description:`Set ${t} TTS cooldown to {0}.`,example:o=>`${o}cooldown set tts ${t} 50s`}}),xt=Xe("user"),Ct=Xe("global"),Ye=t=>{const e=t==="user"?"perUser":"perSound",o=e,n=t==="user"?"perSound":"perUser",r={allows:2,handle(c,i,u){const _=qe(u);if(!(i in k.sounds))if(i in C.get())i=C.get()[i];else return;L.update(l=>({...l,[i]:{[o]:_,[n]:l[i]?.perSound??0}})),console.log(`${c.name} set cooldown of ${i} to ${u}`)},description:`Set ${t} cooldown for {0} to {1}. {1} is either a number in seconds, or a free-form value such as "1min 30s".`,example:c=>`${c}cooldown set ${t} ame_hates_minecraft 1m 30s`},s={allows:2,handle(c,i){i in C.get()&&(i=C.get()[i]),i in k.sounds&&i in L.get()&&(L.update(u=>{const _={...u};return _[i][e]=0,_[i].perSound===0&&_[i].perUser===0&&delete _[i],_}),console.log(`${c.name} removed cooldown of ${i}`))},description:`Remove ${t} cooldown for {0}.`,example:c=>`${c}cooldown rm ${t} ame_hates_minecraft`};return{set:r,rm:s}},$e=Ye("user"),xe=Ye("sound"),Nt={_:{set:{_:{user:$e.set,sound:xe.set,tts:{_:{user:xt.set,global:Ct.set}}}},rm:{_:{user:$e.rm,sound:xe.rm}}}},ne={[He]:ve,play:ve,stop:bt,role:wt,prefs:kt,alias:vt,prefix:St,say:$t,cooldown:Nt},Pt=({commands:t})=>{const e=R(y.prefix),o=[];return je(t,(n,r)=>{if(!("handle"in r))return;const s=r.handle.length,c=Array(s>1?s-1:0).fill(0).map((u,_)=>`{${_}}`).join(" "),i=`${e}${n.join(" ")} ${c}`;o.push(a("tr",{key:i},a("td",null,i),a("td",null,r.description??"\u{1F937}"),a("td",null,r.example?.(e))))}),a("table",null,a("thead",null,a("tr",null,a("th",null,"Command"),a("th",null,"Description"),a("th",null,"Example"))),a("tbody",null,o))},Et=({text:t,delay:e=1e3})=>{const[o,n]=ee(!1),r=async()=>{o||(n(!0),await navigator.clipboard.writeText(t),setTimeout(()=>n(!1),e))};return a("button",{onClick:()=>r(),onKeyUp:({code:s})=>s==="Enter"&&r()},o?"\u2714\uFE0F":t)},Tt=({sound:t,player:e})=>{const[o,n]=ee(!1),r=X(()=>e.play(t),[t,e]),s=X(()=>e.playing===t&&e.stop(),[t,e]);return Ge(()=>{const c=u=>t===u&&n(!0),i=u=>t===u&&n(!1);return e.on("play",c),e.on("stop",i),()=>{e.off("play",c),e.off("stop",i)}},[t,e]),a("button",{onClick:o?s:r},o?"\u23F9":"\u25B6\uFE0F"," ",t)},At=({player:t})=>{const e=R(y.prefix);return a("table",{class:"center-rows"},a("thead",null,a("tr",null,a("th",null,"Sound"),a("th",null,"Copy"),a("th",null,"Play"))),a("tbody",null,Object.keys(t.sounds).map(o=>a("tr",{key:o},a("td",null,o),a("td",null,a(Et,{text:`${e}${o}`})),a("td",null,a(Tt,{sound:o,player:t}))))))};const Ze=({value:t,onSubmit:e,placeholder:o})=>{const n=O(null),r=X(()=>n.current&&e(n.current.value),[n]);return a("span",{class:"inline-input"},a("input",{ref:n,type:"text",value:t,placeholder:o,onKeyUp:({code:s})=>s==="Enter"&&r()}),a("button",{type:"button",id:"submit",onClick:()=>r()},"\u27A1\uFE0F"))};const et=({label:t,children:e})=>a("div",{class:"tooltip-trigger"},e,a("div",{class:"tooltip-body"},t)),Lt=({channel:t})=>a(et,{label:"Target channel"},a(Ze,{value:t,placeholder:"channel",onSubmit:e=>{window.location.hash=e,window.location.reload()}})),Ut=()=>{const t=R(y.prefix);return a(et,{label:"Command prefix"},a(Ze,{value:t,onSubmit:e=>y.prefix.set(e),placeholder:"command prefix"}))},Ot=({value:t,onSubmit:e})=>{const o=O(null),n=X(()=>o.current&&e(o.current.checked),[o]);return a("input",{ref:o,type:"checkbox",checked:t,onChange:()=>n()})},It=()=>{const t=R(y.prefs);return a("table",null,a("thead",null,a("tr",null,a("th",null,"Toggle"),a("th",null,"Name"),a("th",null,"Description"))),a("tbody",null,Object.entries(t).map(([e,o])=>{const n=mt[e];return a("tr",null,a("td",null,a(Ot,{key:e,value:o,onSubmit:r=>y.prefs.update(s=>({...s,[e]:r}))})),a("td",null,e),a("td",null,n))})))};function Rt(t){return Array.isArray(t)?t:[t]}const F=({children:t})=>a(T,null,t),Ht=({children:t})=>{const e=Rt(t),[o,n]=ee(()=>e[0]?.props.label);return a("div",{class:"nav"},a("nav",{class:"nav-header"},a("ul",null,e.map(r=>{const s=()=>n(r.props.label);return a("li",{key:r.props.label,class:r.props.label===o?"active":"",onClick:s,onKeyUp:({code:c})=>c==="Enter"&&s(),tabIndex:0},a("a",null,r.props.label))}))),a("div",{class:"nav-body"},e.find(r=>r.props.label===o)))},jt=({player:t})=>{const e=R(y.aliases),o=c=>y.aliases.update(i=>{const u={...i};return delete u[c],u}),n=(c,i)=>y.aliases.update(u=>{const _={[c]:i,...u};return _[c]=i,_}),r=O(null),s=O(null);return a("table",{class:"center-rows"},a("thead",null,a("tr",null,a("th",null,"Alias"),a("th",null,"Command"),a("th",null))),a("tbody",null,a("tr",null,a("td",null,a("input",{ref:r,type:"text"})),a("td",null,a("select",{ref:s},Object.keys(t.sounds).map(c=>a("option",{value:c},c)))),a("td",null,a("button",{onClick:()=>{const[c,i]=[r.current,s.current];c&&i&&(n(c.value,i.value),c.value="",i.value=i.options[0].value)}},"\u2714\uFE0F"))),Object.entries(e).map(([c,i])=>a("tr",{key:c},a("td",null,c),a("td",null,i),a("td",null,a("button",{onClick:()=>o(c)},"\u274C"))))))},Ft=()=>{const t=R(y.users),e=s=>y.users.update(c=>{const i={...c};return delete i[s],i}),o=(s,c)=>y.users.update(i=>{const u={...i};return u[s]={name:s,role:c},u}),n=O(null),r=O(null);return a("table",{class:"center-rows"},a("thead",null,a("tr",null,a("th",null,"User"),a("th",null,"Role"),a("th",null))),a("tbody",null,a("tr",null,a("td",null,a("input",{ref:n,type:"text"})),a("td",null,a("select",{ref:r},Object.keys(x).filter(s=>isNaN(+s)).map(s=>a("option",{value:s},s)))),a("td",null,a("button",{onClick:()=>{const[s,c]=[n.current,r.current];s&&c&&(o(s.value.toLowerCase(),x[c.value]),s.value="",c.value=c.options[0].value)}},"\u2714\uFE0F"))),Object.entries(t).map(([s,c])=>a("tr",{key:s},a("td",null,s),a("td",null,a("select",{ref:r,value:x[c.role],onChange:({target:i})=>o(s,x[i.value])},Object.keys(x).filter(i=>isNaN(+i)).map(i=>a("option",{value:i},i)))),a("td",null,a("button",{onClick:()=>e(s)},"\u274C"))))))},Wt=({commands:t,player:e,channel:o})=>a(T,null,a(Lt,{channel:o}),o&&a(T,null,a(Ht,null,a(F,{label:"Commands",active:!0},a(Pt,{commands:t})),a(F,{label:"Sounds"},a(At,{player:e})),a(F,{label:"Aliases"},a(jt,{player:e})),a(F,{label:"Settings"},a(Ut,null),a(It,null)),a(F,{label:"Roles"},a(Ft,null)))));class te{constructor(e,o,n,r,s,c){this.message=e,this.command=o,this.params=n,this.tags=r,this.prefix=s,this.channel=c}tag(e,o){const n=this.tags?.[e];return n?o==="csv"?n.split(","):o==="number"?Number(n):Dt(n):null}static parse(e){let o,n,r,s,c,i=e.trimEnd();e:if(i.startsWith("@")){i=i.slice(1);const[u,_]=P(i," :");if(!_)break e;i=_,o={};const l=u.split(";");for(let h=0;h<l.length;++h){const g=l[h],[p,f]=P(g,"=");!f||(o[qt(p)]=f)}}e:if(i.startsWith(":")){i=i.slice(1);const[u,_]=P(i," ");if(!_)break e;i=_;const[l,h]=P(u,"@");if(!h){n={host:l};break e}const[g,p]=P(l,"!");if(!p){n={nick:g,host:h};break e}n={nick:g,user:p,host:h}}{const[u,_]=P(i," ");if(!_)return null;i=_,Gt.has(u)?r={kind:u}:r={kind:"UNKNOWN",raw:u}}if(i.startsWith("#")){i=i.slice(1);const[u,_]=P(i," ");s=u,i=_??""}e:{if(i=i.trimStart(),i.length===0){c=[];break e}if(i.startsWith(":")){c=[i.slice(1)];break e}const[u,_]=P(i," :");if(!_){c=u.split(" ");break e}c=u.split(" "),c.push(_.slice(1))}return new te(e,r,c,o,n,s)}}window.Message=te;function Dt(t){let e="",o=!1;e:for(const n of t){if(o)switch(n){case":":e=e.concat(";"),o=!1;continue e;case"s":e=e.concat(" "),o=!1;continue e;case"\\":e=e.concat("\\"),o=!1;continue e;case"r":e=e.concat("\r"),o=!1;continue e;case"n":e=e.concat(`
`),o=!1;continue e}n==="\u2E1D"?e=e.concat(","):n==="\\"?o=!0:e=e.concat(n)}return e}function P(t,e){const o=t.indexOf(e);return o===-1?[t,null]:[t.slice(0,o),t.slice(o+1)]}function qt(t){const e=t.split("-");if(e.length>1){e[0]=e[0].toLowerCase();for(let o=1;o<e.length;++o)e[o]=e[o].slice(0,1).toUpperCase()+e[o].slice(1).toLowerCase()}return e.join("")}const Mt=["PING","PONG","JOIN","PART","PRIVMSG","WHISPER","CLEARCHAT","CLEARMSG","GLOBALUSERSTATE","HOSTTARGET","NOTICE","RECONNECT","ROOMSTATE","USERNOTICE","USERSTATE","CAP"],Gt=new Set(Mt),Kt=async t=>new Promise(e=>setTimeout(e,t));let G=1e3;function zt(t,e){const o=`${window.location.protocol.startsWith("https")?"wss":"ws"}://irc-ws.chat.twitch.tv`;function n(_){_&&console.log(_)}async function r(){clearInterval(i),i=-1,console.warn(`WebSocket closed, reconnecting in ${G/1e3}s`),await Kt(G),G<1e4&&(G+=1e3),console.log("Reconnecting..."),u=new WebSocket(o),u.onerror=n,u.onclose=r,u.onopen=s,u.onmessage=c}async function s(){this.send(`CAP REQ :twitch.tv/tags\r
`),this.send(`PASS hi_twitch\r
`),this.send(`NICK justinfan37982\r
`),this.send(`JOIN #${t}\r
`),i=setInterval(()=>this.send("PING :hi"),3e4)}function c(_){const l=_.data.split(`\r
`).filter(Boolean),h=l.map(te.parse);console.log("DEBUG",_.data,l,h);for(const g of h){if(!g)return;if(g.command.kind==="PING")return console.log("PONG"),this.send(`PONG :tmi.twitch.tv\r
`);e(g)}}let i=-1,u=new WebSocket(o);u.onerror=n,u.onclose=r,u.onopen=s,u.onmessage=c}window.Stores=y;window.Player=k;k.on("play",t=>console.log(`Started playing ${t}`));k.on("stop",t=>console.log(`Stopped playing ${t}`));lt(a(Wt,{channel:w,commands:ne,player:k}),document.querySelector("#app"));w&&(zt(w,t=>it(y.users,y.prefs,y.prefix,ne,t)),console.log("channel",w),console.log("prefix",y.prefix.get()),console.log("preferences",y.prefs.get()),console.log("users",y.users.get()),console.log("aliases",y.aliases.get()),console.log("cooldowns",y.cooldowns.get()),console.log("commands",ne),console.log("player",k));
