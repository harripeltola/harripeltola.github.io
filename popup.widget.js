var qwidget=function(e){var t={};function n(_){if(t[_])return t[_].exports;var o=t[_]={i:_,l:!1,exports:{}};return e[_].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,_){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(n.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(_,o,function(t){return e[t]}.bind(null,o));return _},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"popup",(function(){return Q}));var _,o,r,l,u,i,c={},s=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var _,o=arguments,r={};for(_ in t)"key"!==_&&"ref"!==_&&(r[_]=t[_]);if(arguments.length>3)for(n=[n],_=3;_<arguments.length;_++)n.push(o[_]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===r[_]&&(r[_]=e.defaultProps[_]);return h(e,r,t&&t.key,t&&t.ref,null)}function h(e,t,n,o,r){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(l.__v=l),_.vnode&&_.vnode(l),l}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!r++||u!==_.debounceRendering)&&((u=_.debounceRendering)||l)(k)}function k(){for(var e;r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,_,o,r,l,u;e.__d&&(l=(r=(t=e).__v).__e,(u=t.__P)&&(n=[],(_=a({},r)).__v=_,o=P(u,r,_,t.__n,void 0!==u.ownerSVGElement,null,n,null==l?m(r):l),T(n,r),o!=l&&g(r)))}))}function w(e,t,n,_,o,r,l,u,i,f){var a,d,y,g,b,k,w,S,x,N=_&&_.__k||s,T=N.length;for(i==c&&(i=null!=l?l[0]:T?m(_,0):null),n.__k=[],a=0;a<t.length;a++)if(null!=(g=n.__k[a]=null==(g=t[a])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?h(null,g,null,null,g):Array.isArray(g)?h(v,{children:g},null,null,null):null!=g.__e||null!=g.__c?h(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(y=N[a])||y&&g.key==y.key&&g.type===y.type)N[a]=void 0;else for(d=0;d<T;d++){if((y=N[d])&&g.key==y.key&&g.type===y.type){N[d]=void 0;break}y=null}if(b=P(e,g,y=y||c,o,r,l,u,i,f),(d=g.ref)&&y.ref!=d&&(S||(S=[]),y.ref&&S.push(y.ref,null,g),S.push(d,g.__c||b,g)),null!=b){if(null==w&&(w=b),x=void 0,void 0!==g.__d)x=g.__d,g.__d=void 0;else if(l==y||b!=i||null==b.parentNode){e:if(null==i||i.parentNode!==e)e.appendChild(b),x=null;else{for(k=i,d=0;(k=k.nextSibling)&&d<T;d+=2)if(k==b)break e;e.insertBefore(b,i),x=i}"option"==n.type&&(e.value="")}i=void 0!==x?x:b.nextSibling,"function"==typeof n.type&&(n.__d=i)}else i&&y.__e==i&&i.parentNode!=e&&(i=m(y))}if(n.__e=w,null!=l&&"function"!=typeof n.type)for(a=l.length;a--;)null!=l[a]&&p(l[a]);for(a=T;a--;)null!=N[a]&&C(N[a],N[a]);if(S)for(a=0;a<S.length;a++)E(S[a],S[++a],S[++a])}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===f.test(t)?n+"px":null==n?"":n}function x(e,t,n,_,o){var r,l,u,i,c;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof _&&(r.cssText="",_=null),_)for(i in _)n&&i in n||S(r,i,"");if(n)for(c in n)_&&n[c]===_[c]||S(r,c,n[c])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),u=t.toLowerCase(),t=(u in e?u:t).slice(2),n?(_||e.addEventListener(t,N,l),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,N,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function N(e){this.l[e.type](_.event?_.event(e):e)}function P(e,t,n,o,r,l,u,i,c){var s,f,p,d,h,m,g,b,k,S,x,N=t.type;if(void 0!==t.constructor)return null;(s=_.__b)&&s(t);try{e:if("function"==typeof N){if(b=t.props,k=(s=N.contextType)&&o[s.__c],S=s?k?k.props.value:s.__:o,n.__c?g=(f=t.__c=n.__c).__=f.__E:("prototype"in N&&N.prototype.render?t.__c=f=new N(b,S):(t.__c=f=new y(b,S),f.constructor=N,f.render=A),k&&k.sub(f),f.props=b,f.state||(f.state={}),f.context=S,f.__n=o,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=N.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=a({},f.__s)),a(f.__s,N.getDerivedStateFromProps(b,f.__s))),d=f.props,h=f.state,p)null==N.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==N.getDerivedStateFromProps&&b!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,S),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,S)||t.__v===n.__v){for(f.props=b,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&u.push(f),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,m)}))}f.context=S,f.props=b,f.state=f.__s,(s=_.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=e,s=f.render(f.props,f.state,f.context),null!=f.getChildContext&&(o=a(a({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),x=null!=s&&s.type==v&&null==s.key?s.props.children:s,w(e,Array.isArray(x)?x:[x],t,n,o,r,l,u,i,c),f.base=t.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=H(n.__e,t,n,o,r,l,u,c);(s=_.diffed)&&s(t)}catch(e){t.__v=null,_.__e(e,t,n)}return t.__e}function T(e,t){_.__c&&_.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){_.__e(e,t.__v)}}))}function H(e,t,n,_,o,r,l,u){var i,f,a,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=r)for(i=0;i<r.length;i++)if(null!=(f=r[i])&&((null===t.type?3===f.nodeType:f.localName===t.type)||e==f)){e=f,r[i]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),r=null,u=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=r&&(r=s.slice.call(e.childNodes)),a=(h=n.props||c).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=r)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||a)&&(p&&a&&p.__html==a.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||x(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||x(e,r,t[r],n[r],_)})(e,v,h,o,u),p?t.__k=[]:(i=t.props.children,w(e,Array.isArray(i)?i:[i],t,n,_,"foreignObject"!==t.type&&o,r,l,c,u)),u||("value"in v&&void 0!==(i=v.value)&&i!==e.value&&x(e,"value",i,h.value,!1),"checked"in v&&void 0!==(i=v.checked)&&i!==e.checked&&x(e,"checked",i,h.checked,!1))}return e}function E(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){_.__e(e,n)}}function C(e,t,n){var o,r,l;if(_.unmount&&_.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,t)),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){_.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&C(o[l],t,n);null!=r&&p(r)}function A(e,t,n){return this.constructor(e,n)}function D(e,t,n){var o,r,l;_.__&&_.__(e,t),r=(o=n===i)?null:n&&n.__k||t.__k,e=d(v,null,[e]),l=[],P(t,(o?t:n||t).__k=e,r||c,c,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?s.slice.call(t.childNodes):null,l,n||c,o),T(l,e)}_={__e:function(e,t){for(var n,_;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(_=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(_=!0,n.componentDidCatch(e)),_)return b(n.__E=n)}catch(t){e=t}throw e}},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},y.prototype.render=v,o=[],r=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=c;var M,O,U,j=0,F=[],L=_.__r,W=_.diffed,q=_.__c,R=_.unmount;function B(e,t){_.__h&&_.__h(O,e,j||t),j=0;var n=O.__H||(O.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function I(e){return j=1,function(e,t,n){var _=B(M++,2);return _.t=e,_.__c||(_.__c=O,_.__=[n?n(t):$(void 0,t),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__[0]=t,_.__c.setState({}))}]),_.__}($,e)}function z(){F.some((function(e){if(e.__P)try{e.__H.__h.forEach(G),e.__H.__h.forEach(V),e.__H.__h=[]}catch(t){return e.__H.__h=[],_.__e(t,e.__v),!0}})),F=[]}function G(e){"function"==typeof e.u&&e.u()}function V(e){e.u=e.__()}function Y(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function $(e,t){return"function"==typeof t?t(e):t}_.__r=function(e){L&&L(e),M=0;var t=(O=e.__c).__H;t&&(t.__h.forEach(G),t.__h.forEach(V),t.__h=[])},_.diffed=function(e){W&&W(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==F.push(t)&&U===_.requestAnimationFrame||((U=_.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(z))},_.__c=function(e,t){t.some((function(e){try{e.__h.forEach(G),e.__h=e.__h.filter((function(e){return!e.__||V(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],_.__e(n,e.__v)}})),q&&q(e,t)},_.unmount=function(e){R&&R(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(G)}catch(e){_.__e(e,t.__v)}};n(0);var J=function(e){var t,n,o,r=e.message,l=e.btnYesTitle,u=e.btnNoTitle,i=e.redirectUrl,c=I(!1),s=c[0],f=c[1];t=function(){var t=setTimeout((function(){f(!0)}),e.timeout);return function(){clearTimeout(t)}},n=[],o=B(M++,3),!_.__s&&Y(o.__H,n)&&(o.__=t,o.__H=n,O.__H.__h.push(o));var a=function(){f(!1)},p="qwidget-popup";return s?d("div",{className:p},d("button",{onClick:a,className:p+"__close_button"},"×"),d("div",{className:p+"__wrapper"},d("div",{className:p+"__message"},d("p",{className:p+"__message__text"},r||"")),d("a",{href:i,target:"_blank",rel:"noreferrer",className:p+"__button "+p+"__button--yes"},l||"Yes"),d("a",{onClick:a,className:p+"__button "+p+"__button--no"},u||"No thanks"))):null},K=function(){return(K=Object.assign||function(e){for(var t,n=1,_=arguments.length;n<_;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Q={init:function(e){D(d(J,K({},e)),document.body)}}}]);
//# sourceMappingURL=popup.widget.js.map