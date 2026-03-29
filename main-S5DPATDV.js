var av=Object.defineProperty,lv=Object.defineProperties;var cv=Object.getOwnPropertyDescriptors;var _d=Object.getOwnPropertySymbols;var uv=Object.prototype.hasOwnProperty,dv=Object.prototype.propertyIsEnumerable;var Sd=(e,t,n)=>t in e?av(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||={})uv.call(t,n)&&Sd(e,n,t[n]);if(_d)for(var n of _d(t))dv.call(t,n)&&Sd(e,n,t[n]);return e},x=(e,t)=>lv(e,cv(t));var Va;function di(){return Va}function Qe(e){let t=Va;return Va=e,t}var Td=Symbol("NotFound");function Vn(e){return e===Td||e?.name==="\u0275NotFound"}var ce=null,pi=!1,ja=1,pv=null,pe=Symbol("SIGNAL");function D(e){let t=ce;return ce=e,t}function mi(){return ce}var Jt={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function jn(e){if(pi)throw new Error("");if(ce===null)return;ce.consumerOnSignalRead(e);let t=ce.producersTail;if(t!==void 0&&t.producer===e)return;let n,r=ce.recomputing;if(r&&(n=t!==void 0?t.nextProducer:ce.producers,n!==void 0&&n.producer===e)){ce.producersTail=n,n.lastReadVersion=e.version;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===ce&&(!r||hv(o,ce)))return;let i=Hn(ce),s={producer:e,consumer:ce,nextProducer:n,prevConsumer:o,lastReadVersion:e.version,nextConsumer:void 0};ce.producersTail=s,t!==void 0?t.nextProducer=s:ce.producers=s,i&&Nd(e,s)}function Md(){ja++}function vi(e){if(!(Hn(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===ja)){if(!e.producerMustRecompute(e)&&!Wn(e)){gi(e);return}e.producerRecomputeValue(e),gi(e)}}function Ba(e){if(e.consumers===void 0)return;let t=pi;pi=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||fv(r)}}finally{pi=t}}function Wa(){return ce?.consumerAllowSignalWrites!==!1}function fv(e){e.dirty=!0,Ba(e),e.consumerMarkedDirty?.(e)}function gi(e){e.dirty=!1,e.lastCleanEpoch=ja}function Xt(e){return e&&xd(e),D(e)}function xd(e){e.producersTail=void 0,e.recomputing=!0}function Bn(e,t){D(t),e&&Ad(e)}function Ad(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(Hn(e))do n=Ha(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Wn(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,r=t.lastReadVersion;if(r!==n.version||(vi(n),r!==n.version))return!0}return!1}function en(e){if(Hn(e)){let t=e.producers;for(;t!==void 0;)t=Ha(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function Nd(e,t){let n=e.consumersTail,r=Hn(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!r)for(let o=e.producers;o!==void 0;o=o.nextProducer)Nd(o.producer,o)}function Ha(e){let t=e.producer,n=e.nextProducer,r=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:t.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(t.consumers=r,!Hn(t)){let i=t.producers;for(;i!==void 0;)i=Ha(i)}return n}function Hn(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function yi(e){pv?.(e)}function hv(e,t){let n=t.producersTail;if(n!==void 0){let r=t.producers;do{if(r===e)return!0;if(r===n)break;r=r.nextProducer}while(r!==void 0)}return!1}function bi(e,t){return Object.is(e,t)}function wi(e,t){let n=Object.create(gv);n.computation=e,t!==void 0&&(n.equal=t);let r=()=>{if(vi(n),jn(n),n.value===$r)throw n.error;return n.value};return r[pe]=n,yi(n),r}var fi=Symbol("UNSET"),hi=Symbol("COMPUTING"),$r=Symbol("ERRORED"),gv=x(g({},Jt),{value:fi,dirty:!0,error:null,equal:bi,kind:"computed",producerMustRecompute(e){return e.value===fi||e.value===hi},producerRecomputeValue(e){if(e.value===hi)throw new Error("");let t=e.value;e.value=hi;let n=Xt(e),r,o=!1;try{r=e.computation(),D(null),o=t!==fi&&t!==$r&&r!==$r&&e.equal(t,r)}catch(i){r=$r,e.error=i}finally{Bn(e,n)}if(o){e.value=t;return}e.value=r,e.version++}});function mv(){throw new Error}var Rd=mv;function kd(e){Rd(e)}function Ua(e){Rd=e}var vv=null;function $a(e,t){let n=Object.create(Di);n.value=e,t!==void 0&&(n.equal=t);let r=()=>Od(n);return r[pe]=n,yi(n),[r,s=>Un(n,s),s=>qa(n,s)]}function Od(e){return jn(e),e.value}function Un(e,t){Wa()||kd(e),e.equal(e.value,t)||(e.value=t,yv(e))}function qa(e,t){Wa()||kd(e),Un(e,t(e.value))}var Di=x(g({},Jt),{equal:bi,value:void 0,kind:"signal"});function yv(e){e.version++,Md(),Ba(e),vv?.(e)}function T(e){return typeof e=="function"}function $n(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ci=$n(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function qr(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Z=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(T(r))try{r()}catch(i){t=i instanceof Ci?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Ld(i)}catch(s){t=t??[],s instanceof Ci?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Ci(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Ld(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&qr(n,t)}remove(t){let{_finalizers:n}=this;n&&qr(n,t),t instanceof e&&t._removeParent(this)}};Z.EMPTY=(()=>{let e=new Z;return e.closed=!0,e})();var za=Z.EMPTY;function Ii(e){return e instanceof Z||e&&"closed"in e&&T(e.remove)&&T(e.add)&&T(e.unsubscribe)}function Ld(e){T(e)?e():e.unsubscribe()}var He={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var qn={setTimeout(e,t,...n){let{delegate:r}=qn;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=qn;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Ei(e){qn.setTimeout(()=>{let{onUnhandledError:t}=He;if(t)t(e);else throw e})}function zr(){}var Pd=Ga("C",void 0,void 0);function Fd(e){return Ga("E",void 0,e)}function Vd(e){return Ga("N",e,void 0)}function Ga(e,t,n){return{kind:e,value:t,error:n}}var tn=null;function zn(e){if(He.useDeprecatedSynchronousErrorHandling){let t=!tn;if(t&&(tn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=tn;if(tn=null,n)throw r}}else e()}function jd(e){He.useDeprecatedSynchronousErrorHandling&&tn&&(tn.errorThrown=!0,tn.error=e)}var nn=class extends Z{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Ii(t)&&t.add(this)):this.destination=Dv}static create(t,n,r){return new Gn(t,n,r)}next(t){this.isStopped?Za(Vd(t),this):this._next(t)}error(t){this.isStopped?Za(Fd(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Za(Pd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},bv=Function.prototype.bind;function Ya(e,t){return bv.call(e,t)}var Ka=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){_i(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){_i(r)}else _i(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){_i(n)}}},Gn=class extends nn{constructor(t,n,r){super();let o;if(T(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&He.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Ya(t.next,i),error:t.error&&Ya(t.error,i),complete:t.complete&&Ya(t.complete,i)}):o=t}this.destination=new Ka(o)}};function _i(e){He.useDeprecatedSynchronousErrorHandling?jd(e):Ei(e)}function wv(e){throw e}function Za(e,t){let{onStoppedNotification:n}=He;n&&qn.setTimeout(()=>n(e,t))}var Dv={closed:!0,next:zr,error:wv,complete:zr};var Yn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function we(e){return e}function Qa(...e){return Ja(e)}function Ja(e){return e.length===0?we:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var O=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=Iv(n)?n:new Gn(n,r,o);return zn(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Bd(r),new r((o,i)=>{let s=new Gn({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Yn](){return this}pipe(...n){return Ja(n)(this)}toPromise(n){return n=Bd(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Bd(e){var t;return(t=e??He.Promise)!==null&&t!==void 0?t:Promise}function Cv(e){return e&&T(e.next)&&T(e.error)&&T(e.complete)}function Iv(e){return e&&e instanceof nn||Cv(e)&&Ii(e)}function Xa(e){return T(e?.lift)}function P(e){return t=>{if(Xa(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function R(e,t,n,r,o){return new el(e,t,n,r,o)}var el=class extends nn{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function Zn(){return P((e,t)=>{let n=null;e._refCount++;let r=R(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var Kn=class extends O{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Xa(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new Z;let n=this.getSubject();t.add(this.source.subscribe(R(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=Z.EMPTY)}return t}refCount(){return Zn()(this)}};var Wd=$n(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var K=(()=>{class e extends O{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new Si(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Wd}next(n){zn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){zn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){zn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?za:(this.currentObservers=null,i.push(n),new Z(()=>{this.currentObservers=null,qr(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new O;return n.source=this,n}}return e.create=(t,n)=>new Si(t,n),e})(),Si=class extends K{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:za}};var se=class extends K{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var me=new O(e=>e.complete());function Hd(e){return e&&T(e.schedule)}function Ud(e){return e[e.length-1]}function Ti(e){return T(Ud(e))?e.pop():void 0}function Mt(e){return Hd(Ud(e))?e.pop():void 0}function qd(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function $d(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function rn(e){return this instanceof rn?(this.v=e,this):new rn(e)}function zd(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(m){return Promise.resolve(m).then(p,d)}}function a(p,m){r[p]&&(o[p]=function(w){return new Promise(function(N,M){i.push([p,w,N,M])>1||l(p,w)})},m&&(o[p]=m(o[p])))}function l(p,m){try{c(r[p](m))}catch(w){f(i[0][3],w)}}function c(p){p.value instanceof rn?Promise.resolve(p.value.v).then(u,d):f(i[0][2],p)}function u(p){l("next",p)}function d(p){l("throw",p)}function f(p,m){p(m),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Gd(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof $d=="function"?$d(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){s=e[i](s),o(a,l,s.done,s.value)})}}function o(i,s,a,l){Promise.resolve(l).then(function(c){i({value:c,done:a})},s)}}var Mi=e=>e&&typeof e.length=="number"&&typeof e!="function";function xi(e){return T(e?.then)}function Ai(e){return T(e[Yn])}function Ni(e){return Symbol.asyncIterator&&T(e?.[Symbol.asyncIterator])}function Ri(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ev(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ki=Ev();function Oi(e){return T(e?.[ki])}function Li(e){return zd(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield rn(n.read());if(o)return yield rn(void 0);yield yield rn(r)}}finally{n.releaseLock()}})}function Pi(e){return T(e?.getReader)}function Q(e){if(e instanceof O)return e;if(e!=null){if(Ai(e))return _v(e);if(Mi(e))return Sv(e);if(xi(e))return Tv(e);if(Ni(e))return Yd(e);if(Oi(e))return Mv(e);if(Pi(e))return xv(e)}throw Ri(e)}function _v(e){return new O(t=>{let n=e[Yn]();if(T(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Sv(e){return new O(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Tv(e){return new O(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Ei)})}function Mv(e){return new O(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Yd(e){return new O(t=>{Av(e,t).catch(n=>t.error(n))})}function xv(e){return Yd(Li(e))}function Av(e,t){var n,r,o,i;return qd(this,void 0,void 0,function*(){try{for(n=Gd(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function ve(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Fi(e,t=0){return P((n,r)=>{n.subscribe(R(r,o=>ve(r,e,()=>r.next(o),t),()=>ve(r,e,()=>r.complete(),t),o=>ve(r,e,()=>r.error(o),t)))})}function Vi(e,t=0){return P((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function Zd(e,t){return Q(e).pipe(Vi(t),Fi(t))}function Kd(e,t){return Q(e).pipe(Vi(t),Fi(t))}function Qd(e,t){return new O(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Jd(e,t){return new O(n=>{let r;return ve(n,t,()=>{r=e[ki](),ve(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>T(r?.return)&&r.return()})}function ji(e,t){if(!e)throw new Error("Iterable cannot be null");return new O(n=>{ve(n,t,()=>{let r=e[Symbol.asyncIterator]();ve(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Xd(e,t){return ji(Li(e),t)}function ep(e,t){if(e!=null){if(Ai(e))return Zd(e,t);if(Mi(e))return Qd(e,t);if(xi(e))return Kd(e,t);if(Ni(e))return ji(e,t);if(Oi(e))return Jd(e,t);if(Pi(e))return Xd(e,t)}throw Ri(e)}function q(e,t){return t?ep(e,t):Q(e)}function C(...e){let t=Mt(e);return q(e,t)}function Qn(e,t){let n=T(e)?e:()=>e,r=o=>o.error(n());return new O(t?o=>t.schedule(r,0,o):r)}function tl(e){return!!e&&(e instanceof O||T(e.lift)&&T(e.subscribe))}var ut=$n(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function A(e,t){return P((n,r)=>{let o=0;n.subscribe(R(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:Nv}=Array;function Rv(e,t){return Nv(t)?e(...t):e(t)}function Bi(e){return A(t=>Rv(e,t))}var{isArray:kv}=Array,{getPrototypeOf:Ov,prototype:Lv,keys:Pv}=Object;function Wi(e){if(e.length===1){let t=e[0];if(kv(t))return{args:t,keys:null};if(Fv(t)){let n=Pv(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function Fv(e){return e&&typeof e=="object"&&Ov(e)===Lv}function Hi(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function Ui(...e){let t=Mt(e),n=Ti(e),{args:r,keys:o}=Wi(e);if(r.length===0)return q([],t);let i=new O(Vv(r,t,o?s=>Hi(o,s):we));return n?i.pipe(Bi(n)):i}function Vv(e,t,n=we){return r=>{tp(t,()=>{let{length:o}=e,i=new Array(o),s=o,a=o;for(let l=0;l<o;l++)tp(t,()=>{let c=q(e[l],t),u=!1;c.subscribe(R(r,d=>{i[l]=d,u||(u=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function tp(e,t,n){e?ve(n,e,t):t()}function np(e,t,n,r,o,i,s,a){let l=[],c=0,u=0,d=!1,f=()=>{d&&!l.length&&!c&&t.complete()},p=w=>c<r?m(w):l.push(w),m=w=>{i&&t.next(w),c++;let N=!1;Q(n(w,u++)).subscribe(R(t,M=>{o?.(M),i?p(M):t.next(M)},()=>{N=!0},void 0,()=>{if(N)try{for(c--;l.length&&c<r;){let M=l.shift();s?ve(t,s,()=>m(M)):m(M)}f()}catch(M){t.error(M)}}))};return e.subscribe(R(t,p,()=>{d=!0,f()})),()=>{a?.()}}function ee(e,t,n=1/0){return T(t)?ee((r,o)=>A((i,s)=>t(r,i,o,s))(Q(e(r,o))),n):(typeof t=="number"&&(n=t),P((r,o)=>np(r,o,e,n)))}function rp(e=1/0){return ee(we,e)}function op(){return rp(1)}function Jn(...e){return op()(q(e,Mt(e)))}function Gr(e){return new O(t=>{Q(e()).subscribe(t)})}function nl(...e){let t=Ti(e),{args:n,keys:r}=Wi(e),o=new O(i=>{let{length:s}=n;if(!s){i.complete();return}let a=new Array(s),l=s,c=s;for(let u=0;u<s;u++){let d=!1;Q(n[u]).subscribe(R(i,f=>{d||(d=!0,c--),a[u]=f},()=>l--,void 0,()=>{(!l||!d)&&(c||i.next(r?Hi(r,a):a),i.complete())}))}});return t?o.pipe(Bi(t)):o}function ke(e,t){return P((n,r)=>{let o=0;n.subscribe(R(r,i=>e.call(t,i,o++)&&r.next(i)))})}function xt(e){return P((t,n)=>{let r=null,o=!1,i;r=t.subscribe(R(n,void 0,void 0,s=>{i=Q(e(s,xt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function ip(e,t,n,r,o){return(i,s)=>{let a=n,l=t,c=0;i.subscribe(R(s,u=>{let d=c++;l=a?e(l,u,d):(a=!0,u),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function Xn(e,t){return T(t)?ee(e,t,1):ee(e,1)}function At(e){return P((t,n)=>{let r=!1;t.subscribe(R(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function dt(e){return e<=0?()=>me:P((t,n)=>{let r=0;t.subscribe(R(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function $i(e=jv){return P((t,n)=>{let r=!1;t.subscribe(R(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function jv(){return new ut}function Yr(e){return P((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function pt(e,t){let n=arguments.length>=2;return r=>r.pipe(e?ke((o,i)=>e(o,i,r)):we,dt(1),n?At(t):$i(()=>new ut))}function er(e){return e<=0?()=>me:P((t,n)=>{let r=[];t.subscribe(R(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function rl(e,t){let n=arguments.length>=2;return r=>r.pipe(e?ke((o,i)=>e(o,i,r)):we,er(1),n?At(t):$i(()=>new ut))}function ol(e,t){return P(ip(e,t,arguments.length>=2,!0))}function il(...e){let t=Mt(e);return P((n,r)=>{(t?Jn(e,n,t):Jn(e,n)).subscribe(r)})}function ye(e,t){return P((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(R(r,l=>{o?.unsubscribe();let c=0,u=i++;Q(e(l,u)).subscribe(o=R(r,d=>r.next(t?t(l,d,u,c++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function qi(e){return P((t,n)=>{Q(e).subscribe(R(n,()=>n.complete(),zr)),!n.closed&&t.subscribe(n)})}function ne(e,t,n){let r=T(e)||t||n?{next:e,error:t,complete:n}:e;return r?P((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(R(i,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),i.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),i.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):we}function sp(e){let t=D(null);try{return e()}finally{D(t)}}var ap=x(g({},Jt),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function lp(e){if(e.dirty=!1,e.version>0&&!Wn(e))return;e.version++;let t=Xt(e);try{e.cleanup(),e.fn()}finally{Bn(e,t)}}var Zi="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",v=class extends Error{code;constructor(t,n){super(un(t,n)),this.code=t}};function Bv(e){return`NG0${Math.abs(e)}`}function un(e,t){return`${Bv(e)}${t?": "+t:""}`}var Rt=globalThis;function j(e){for(let t in e)if(e[t]===j)return t;throw Error("")}function dp(e,t){for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function ht(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(ht).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function ml(e,t){return e?t?`${e} ${t}`:e:t||""}var Wv=j({__forward_ref__:j});function dn(e){return e.__forward_ref__=dn,e.toString=function(){return ht(this())},e}function ae(e){return vl(e)?e():e}function vl(e){return typeof e=="function"&&e.hasOwnProperty(Wv)&&e.__forward_ref__===dn}function b(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Je(e){return{providers:e.providers||[],imports:e.imports||[]}}function Xr(e){return Hv(e,Ki)}function yl(e){return Xr(e)!==null}function Hv(e,t){return e.hasOwnProperty(t)&&e[t]||null}function Uv(e){let t=e?.[Ki]??null;return t||null}function al(e){return e&&e.hasOwnProperty(Gi)?e[Gi]:null}var Ki=j({\u0275prov:j}),Gi=j({\u0275inj:j}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=b({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function bl(e){return e&&!!e.\u0275providers}var wl=j({\u0275cmp:j}),Dl=j({\u0275dir:j}),Cl=j({\u0275pipe:j}),Il=j({\u0275mod:j}),Kr=j({\u0275fac:j}),pn=j({__NG_ELEMENT_ID__:j}),cp=j({__NG_ENV_ID__:j});function nr(e){return typeof e=="string"?e:e==null?"":String(e)}function pp(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():nr(e)}var fp=j({ngErrorCode:j}),$v=j({ngErrorMessage:j}),qv=j({ngTokenPath:j});function El(e,t){return hp("",-200,t)}function Qi(e,t){throw new v(-201,!1)}function hp(e,t,n){let r=new v(t,e);return r[fp]=t,r[$v]=e,n&&(r[qv]=n),r}function zv(e){return e[fp]}var ll;function gp(){return ll}function De(e){let t=ll;return ll=e,t}function _l(e,t,n){let r=Xr(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(t!==void 0)return t;Qi(e,"Injector")}var Gv={},on=Gv,Yv="__NG_DI_FLAG__",cl=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=sn(n)||0;try{return this.injector.get(t,r&8?null:on,r)}catch(o){if(Vn(o))return o;throw o}}};function Zv(e,t=0){let n=di();if(n===void 0)throw new v(-203,!1);if(n===null)return _l(e,void 0,t);{let r=Kv(t),o=n.retrieve(e,r);if(Vn(o)){if(r.optional)return null;throw o}return o}}function _(e,t=0){return(gp()||Zv)(ae(e),t)}function h(e,t){return _(e,sn(t))}function sn(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Kv(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function ul(e){let t=[];for(let n=0;n<e.length;n++){let r=ae(e[n]);if(Array.isArray(r)){if(r.length===0)throw new v(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let a=r[s],l=Qv(a);typeof l=="number"?l===-1?o=a.token:i|=l:o=a}t.push(_(o,i))}else t.push(_(r))}return t}function Qv(e){return e[Yv]}function an(e,t){let n=e.hasOwnProperty(Kr);return n?e[Kr]:null}function Ji(e,t){e.forEach(n=>Array.isArray(n)?Ji(n,t):t(n))}function Sl(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function eo(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function mp(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(o===1)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let i=o-2;e[o]=e[i],o--}e[t]=n,e[t+1]=r}}function vp(e,t,n){let r=rr(e,t);return r>=0?e[r|1]=n:(r=~r,mp(e,r,t,n)),r}function Xi(e,t){let n=rr(e,t);if(n>=0)return e[n|1]}function rr(e,t){return Jv(e,t,1)}function Jv(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}var kt={},Ce=[],Xe=new y(""),Tl=new y("",-1),Ml=new y(""),Qr=class{get(t,n=on){if(n===on){let o=hp("",-201);throw o.name="\u0275NotFound",o}return n}};function xl(e){return e[Il]||null}function Ot(e){return e[wl]||null}function Al(e){return e[Dl]||null}function yp(e){return e[Cl]||null}function Lt(e){return{\u0275providers:e}}function bp(e){return Lt([{provide:Xe,multi:!0,useValue:e}])}function wp(...e){return{\u0275providers:Nl(!0,e),\u0275fromNgModule:!0}}function Nl(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return Ji(t,s=>{let a=s;Yi(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&Dp(o,i),n}function Dp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];Rl(o,i=>{t(i,r)})}}function Yi(e,t,n,r){if(e=ae(e),!e)return!1;let o=null,i=al(e),s=!i&&Ot(e);if(!i&&!s){let l=e.ngModule;if(i=al(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Yi(c,t,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let c;try{Ji(i.imports,u=>{Yi(u,t,n,r)&&(c||=[],c.push(u))})}finally{}c!==void 0&&Dp(c,t)}if(!a){let c=an(o)||(()=>new o);t({provide:o,useFactory:c,deps:Ce},o),t({provide:Ml,useValue:o,multi:!0},o),t({provide:Xe,useValue:()=>_(o),multi:!0},o)}let l=i.providers;if(l!=null&&!a){let c=e;Rl(l,u=>{t(u,c)})}}else return!1;return o!==e&&e.providers!==void 0}function Rl(e,t){for(let n of e)bl(n)&&(n=n.\u0275providers),Array.isArray(n)?Rl(n,t):t(n)}var Xv=j({provide:String,useValue:j});function Cp(e){return e!==null&&typeof e=="object"&&Xv in e}function ey(e){return!!(e&&e.useExisting)}function ty(e){return!!(e&&e.useFactory)}function ln(e){return typeof e=="function"}function Ip(e){return!!e.useClass}var to=new y(""),zi={},up={},sl;function no(){return sl===void 0&&(sl=new Qr),sl}var re=class{},cn=class extends re{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,pl(t,s=>this.processProvider(s)),this.records.set(Tl,tr(void 0,this)),o.has("environment")&&this.records.set(re,tr(void 0,this));let i=this.records.get(to);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Ml,Ce,{self:!0}))}retrieve(t,n){let r=sn(n)||0;try{return this.get(t,on,r)}catch(o){if(Vn(o))return o;throw o}}destroy(){Zr(this),this._destroyed=!0;let t=D(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),D(t)}}onDestroy(t){return Zr(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){Zr(this);let n=Qe(this),r=De(void 0),o;try{return t()}finally{Qe(n),De(r)}}get(t,n=on,r){if(Zr(this),t.hasOwnProperty(cp))return t[cp](this);let o=sn(r),i,s=Qe(this),a=De(void 0);try{if(!(o&4)){let c=this.records.get(t);if(c===void 0){let u=sy(t)&&Xr(t);u&&this.injectableDefInScope(u)?c=tr(dl(t),zi):c=null,this.records.set(t,c)}if(c!=null)return this.hydrate(t,c,o)}let l=o&2?no():this.parent;return n=o&8&&n===on?null:n,l.get(t,n)}catch(l){let c=zv(l);throw c===-200||c===-201?new v(c,null):l}finally{De(a),Qe(s)}}resolveInjectorInitializers(){let t=D(null),n=Qe(this),r=De(void 0),o;try{let i=this.get(Xe,Ce,{self:!0});for(let s of i)s()}finally{Qe(n),De(r),D(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(ht(r));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=ae(t);let n=ln(t)?t:ae(t&&t.provide),r=ry(t);if(!ln(t)&&t.multi===!0){let o=this.records.get(n);o||(o=tr(void 0,zi,!0),o.factory=()=>ul(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n,r){let o=D(null);try{if(n.value===up)throw El(ht(t));return n.value===zi&&(n.value=up,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&iy(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{D(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=ae(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function dl(e){let t=Xr(e),n=t!==null?t.factory:an(e);if(n!==null)return n;if(e instanceof y)throw new v(204,!1);if(e instanceof Function)return ny(e);throw new v(204,!1)}function ny(e){if(e.length>0)throw new v(204,!1);let n=Uv(e);return n!==null?()=>n.factory(e):()=>new e}function ry(e){if(Cp(e))return tr(void 0,e.useValue);{let t=kl(e);return tr(t,zi)}}function kl(e,t,n){let r;if(ln(e)){let o=ae(e);return an(o)||dl(o)}else if(Cp(e))r=()=>ae(e.useValue);else if(ty(e))r=()=>e.useFactory(...ul(e.deps||[]));else if(ey(e))r=(o,i)=>_(ae(e.useExisting),i!==void 0&&i&8?8:void 0);else{let o=ae(e&&(e.useClass||e.provide));if(oy(e))r=()=>new o(...ul(e.deps));else return an(o)||dl(o)}return r}function Zr(e){if(e.destroyed)throw new v(205,!1)}function tr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function oy(e){return!!e.deps}function iy(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function sy(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function pl(e,t){for(let n of e)Array.isArray(n)?pl(n,t):n&&bl(n)?pl(n.\u0275providers,t):t(n)}function he(e,t){let n;e instanceof cn?(Zr(e),n=e):n=new cl(e);let r,o=Qe(n),i=De(void 0);try{return t()}finally{Qe(o),De(i)}}function Ep(){return gp()!==void 0||di()!=null}var $e=0,E=1,I=2,oe=3,Oe=4,Le=5,or=6,ir=7,J=8,mt=9,et=10,G=11,sr=12,Ol=13,fn=14,Ie=15,hn=16,gn=17,mn=18,ro=19,Ll=20,ft=21,es=22,vt=23,Ee=24,ts=25,vn=26,ue=27,_p=1,Pl=6,Pt=7,oo=8,io=9,Y=10;function tt(e){return Array.isArray(e)&&typeof e[_p]=="object"}function qe(e){return Array.isArray(e)&&e[_p]===!0}function Fl(e){return(e.flags&4)!==0}function Ft(e){return e.componentOffset>-1}function ns(e){return(e.flags&1)===1}function nt(e){return!!e.template}function ar(e){return(e[I]&512)!==0}function yn(e){return(e[I]&256)===256}var Sp="svg",Tp="math";function Pe(e){for(;Array.isArray(e);)e=e[$e];return e}function Vl(e,t){return Pe(t[e])}function ze(e,t){return Pe(t[e.index])}function so(e,t){return e.data[t]}function Fe(e,t){let n=t[e];return tt(n)?n:n[$e]}function rs(e){return(e[I]&128)===128}function Mp(e){return qe(e[oe])}function Vt(e,t){return t==null?null:e[t]}function jl(e){e[gn]=0}function Bl(e){e[I]&1024||(e[I]|=1024,rs(e)&&bn(e))}function xp(e,t){for(;e>0;)t=t[fn],e--;return t}function ao(e){return!!(e[I]&9216||e[Ee]?.dirty)}function os(e){e[et].changeDetectionScheduler?.notify(8),e[I]&64&&(e[I]|=1024),ao(e)&&bn(e)}function bn(e){e[et].changeDetectionScheduler?.notify(0);let t=Nt(e);for(;t!==null&&!(t[I]&8192||(t[I]|=8192,!rs(t)));)t=Nt(t)}function Wl(e,t){if(yn(e))throw new v(911,!1);e[ft]===null&&(e[ft]=[]),e[ft].push(t)}function Ap(e,t){if(e[ft]===null)return;let n=e[ft].indexOf(t);n!==-1&&e[ft].splice(n,1)}function Nt(e){let t=e[oe];return qe(t)?t[oe]:t}function Np(e){return e[ir]??=[]}function Rp(e){return e.cleanup??=[]}var L={lFrame:Kp(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var fl=!1;function kp(){return L.lFrame.elementDepthCount}function Op(){L.lFrame.elementDepthCount++}function Lp(){L.lFrame.elementDepthCount--}function Pp(){return L.bindingsEnabled}function Fp(){return L.skipHydrationRootTNode!==null}function Vp(e){return L.skipHydrationRootTNode===e}function jp(){L.skipHydrationRootTNode=null}function B(){return L.lFrame.lView}function _e(){return L.lFrame.tView}function be(){let e=Hl();for(;e!==null&&e.type===64;)e=e.parent;return e}function Hl(){return L.lFrame.currentTNode}function Bp(){let e=L.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function lr(e,t){let n=L.lFrame;n.currentTNode=e,n.isParent=t}function Ul(){return L.lFrame.isParent}function Wp(){L.lFrame.isParent=!1}function $l(){return fl}function cr(e){let t=fl;return fl=e,t}function Hp(){let e=L.lFrame,t=e.bindingRootIndex;return t===-1&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Up(e){return L.lFrame.bindingIndex=e}function ur(){return L.lFrame.bindingIndex++}function $p(e){let t=L.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function qp(){return L.lFrame.inI18n}function zp(e,t){let n=L.lFrame;n.bindingIndex=n.bindingRootIndex=e,is(t)}function Gp(){return L.lFrame.currentDirectiveIndex}function is(e){L.lFrame.currentDirectiveIndex=e}function Yp(e){let t=L.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function ql(e){L.lFrame.currentQueryIndex=e}function ay(e){let t=e[E];return t.type===2?t.declTNode:t.type===1?e[Le]:null}function zl(e,t,n){if(n&4){let o=t,i=e;for(;o=o.parent,o===null&&!(n&1);)if(o=ay(i),o===null||(i=i[fn],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=L.lFrame=Zp();return r.currentTNode=t,r.lView=e,!0}function ss(e){let t=Zp(),n=e[E];L.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Zp(){let e=L.lFrame,t=e===null?null:e.child;return t===null?Kp(e):t}function Kp(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Qp(){let e=L.lFrame;return L.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Gl=Qp;function as(){let e=Qp();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Jp(e){return(L.lFrame.contextLView=xp(e,L.lFrame.contextLView))[J]}function jt(){return L.lFrame.selectedIndex}function Bt(e){L.lFrame.selectedIndex=e}function Yl(){let e=L.lFrame;return so(e.tView,e.selectedIndex)}function Xp(){return L.lFrame.currentNamespace}var ef=!0;function ls(){return ef}function cs(e){ef=e}function hl(e,t=null,n=null,r){let o=Zl(e,t,n,r);return o.resolveInjectorInitializers(),o}function Zl(e,t=null,n=null,r,o=new Set){let i=[n||Ce,wp(e)];return r=r||(typeof e=="object"?void 0:ht(e)),new cn(i,t||no(),r||null,o)}var fe=class e{static THROW_IF_NOT_FOUND=on;static NULL=new Qr;static create(t,n){if(Array.isArray(t))return hl({name:""},n,t,"");{let r=t.name??"";return hl({name:r},t.parent,t.providers,r)}}static \u0275prov=b({token:e,providedIn:"any",factory:()=>_(Tl)});static __NG_ELEMENT_ID__=-1},z=new y(""),Se=(()=>{class e{static __NG_ELEMENT_ID__=ly;static __NG_ENV_ID__=n=>n}return e})(),Jr=class extends Se{_lView;constructor(t){super(),this._lView=t}get destroyed(){return yn(this._lView)}onDestroy(t){let n=this._lView;return Wl(n,t),()=>Ap(n,t)}};function ly(){return new Jr(B())}var Ue=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Te=new y("",{providedIn:"root",factory:()=>{let e=h(re),t;return n=>{e.destroyed&&!t?setTimeout(()=>{throw n}):(t??=e.get(Ue),t.handleError(n))}}}),tf={provide:Xe,useValue:()=>void h(Ue),multi:!0},cy=new y("",{providedIn:"root",factory:()=>{let e=h(z).defaultView;if(!e)return;let t=h(Te),n=i=>{t(i.reason),i.preventDefault()},r=i=>{i.error?t(i.error):t(new Error(i.message,{cause:i})),i.preventDefault()},o=()=>{e.addEventListener("unhandledrejection",n),e.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(o):o(),h(Se).onDestroy(()=>{e.removeEventListener("error",r),e.removeEventListener("unhandledrejection",n)})}});function Kl(){return Lt([bp(()=>void h(cy))])}function de(e,t){let[n,r,o]=$a(e,t?.equal),i=n,s=i[pe];return i.set=r,i.update=o,i.asReadonly=Ql.bind(i),i}function Ql(){let e=this[pe];if(e.readonlyFn===void 0){let t=()=>this();t[pe]=e,e.readonlyFn=t}return e.readonlyFn}var lo=(()=>{class e{view;node;constructor(n,r){this.view=n,this.node=r}static __NG_ELEMENT_ID__=uy}return e})();function uy(){return new lo(B(),be())}var gt=class{},dr=new y("",{providedIn:"root",factory:()=>!1});var Jl=new y(""),Xl=new y(""),yt=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new se(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new O(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:e,providedIn:"root",factory:()=>new e})}return e})();function wn(...e){}var co=(()=>{class e{static \u0275prov=b({token:e,providedIn:"root",factory:()=>new gl})}return e})(),gl=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||r.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,r]of this.queues)n===null?t||=this.flushQueue(r):t||=n.run(()=>this.flushQueue(r));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let r of t)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}};function bo(e){return{toString:e}.toString()}function Cy(e){return typeof e=="function"}var vs=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function Bf(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var Wt=(()=>{let e=()=>Wf;return e.ngInherit=!0,e})();function Wf(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ey),Iy}function Iy(){let e=Uf(this),t=e?.current;if(t){let n=e.previous;if(n===kt)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ey(e,t,n,r,o){let i=this.declaredInputs[r],s=Uf(e)||_y(e,{previous:kt,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[i];a[i]=new vs(c&&c.currentValue,n,l===kt),Bf(e,t,o,n)}var Hf="__ngSimpleChanges__";function Uf(e){return e[Hf]||null}function _y(e,t){return e[Hf]=t}var nf=[];var W=function(e,t=null,n){for(let r=0;r<nf.length;r++){let o=nf[r];o(e,t,n)}};function Sy(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=Wf(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function Ty(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),l&&(e.viewHooks??=[]).push(-n,l),c&&((e.viewHooks??=[]).push(n,c),(e.viewCheckHooks??=[]).push(n,c)),u!=null&&(e.destroyHooks??=[]).push(n,u)}}function hs(e,t,n){$f(e,t,3,n)}function gs(e,t,n,r){(e[I]&3)===n&&$f(e,t,n,r)}function ec(e,t){let n=e[I];(n&3)===t&&(n&=16383,n+=1,e[I]=n)}function $f(e,t,n,r){let o=r!==void 0?e[gn]&65535:0,i=r??-1,s=t.length-1,a=0;for(let l=o;l<s;l++)if(typeof t[l+1]=="number"){if(a=t[l],r!=null&&a>=r)break}else t[l]<0&&(e[gn]+=65536),(a<i||i==-1)&&(My(e,n,t,l),e[gn]=(e[gn]&4294901760)+l+2),l++}function rf(e,t){W(4,e,t);let n=D(null);try{t.call(e)}finally{D(n),W(5,e,t)}}function My(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=e[s];o?e[I]>>14<e[gn]>>16&&(e[I]&3)===t&&(e[I]+=16384,rf(a,i)):rf(a,i)}var fr=-1,Cn=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r,o){this.factory=t,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function xy(e){return(e.flags&8)!==0}function Ay(e){return(e.flags&16)!==0}function Ny(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{let i=o,s=n[++r];Ry(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function qf(e){return e===3||e===4||e===6}function Ry(e){return e.charCodeAt(0)===64}function fo(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?of(e,n,o,null,t[++r]):of(e,n,o,null,null))}}return e}function of(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}function zf(e){return e!==fr}function ys(e){return e&32767}function ky(e){return e>>16}function bs(e,t){let n=ky(e),r=t;for(;n>0;)r=r[fn],n--;return r}var dc=!0;function sf(e){let t=dc;return dc=e,t}var Oy=256,Gf=Oy-1,Yf=5,Ly=0,rt={};function Py(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(pn)&&(r=n[pn]),r==null&&(r=n[pn]=Ly++);let o=r&Gf,i=1<<o;t.data[e+(o>>Yf)]|=i}function ws(e,t){let n=Zf(e,t);if(n!==-1)return n;let r=t[E];r.firstCreatePass&&(e.injectorIndex=t.length,tc(r.data,e),tc(t,null),tc(r.blueprint,null));let o=zc(e,t),i=e.injectorIndex;if(zf(o)){let s=ys(o),a=bs(o,t),l=a[E].data;for(let c=0;c<8;c++)t[i+c]=a[s+c]|l[s+c]}return t[i+8]=o,i}function tc(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Zf(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function zc(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=eh(o),r===null)return fr;if(n++,o=o[fn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return fr}function pc(e,t,n){Py(e,t,n)}function Fy(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(qf(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof n[o]=="string";)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function Kf(e,t,n){if(n&8||e!==void 0)return e;Qi(t,"NodeInjector")}function Qf(e,t,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=e[mt],i=De(void 0);try{return o?o.get(t,r,n&8):_l(t,r,n&8)}finally{De(i)}}return Kf(r,t,n)}function Jf(e,t,n,r=0,o){if(e!==null){if(t[I]&2048&&!(r&2)){let s=Hy(e,t,n,r,rt);if(s!==rt)return s}let i=Xf(e,t,n,r,rt);if(i!==rt)return i}return Qf(t,n,r,o)}function Xf(e,t,n,r,o){let i=By(n);if(typeof i=="function"){if(!zl(t,e,r))return r&1?Kf(o,n,r):Qf(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))Qi(n);else return s}finally{Gl()}}else if(typeof i=="number"){let s=null,a=Zf(e,t),l=fr,c=r&1?t[Ie][Le]:null;for((a===-1||r&4)&&(l=a===-1?zc(e,t):t[a+8],l===fr||!lf(r,!1)?a=-1:(s=t[E],a=ys(l),t=bs(l,t)));a!==-1;){let u=t[E];if(af(i,a,u.data)){let d=Vy(a,t,n,s,r,c);if(d!==rt)return d}l=t[a+8],l!==fr&&lf(r,t[E].data[a+8]===c)&&af(i,a,t)?(s=u,a=ys(l),t=bs(l,t)):a=-1}}return o}function Vy(e,t,n,r,o,i){let s=t[E],a=s.data[e+8],l=r==null?Ft(a)&&dc:r!=s&&(a.type&3)!==0,c=o&1&&i===a,u=jy(a,s,n,l,c);return u!==null?Ds(t,s,u,a,o):rt}function jy(e,t,n,r,o){let i=e.providerIndexes,s=t.data,a=i&1048575,l=e.directiveStart,c=e.directiveEnd,u=i>>20,d=r?a:a+u,f=o?a+u:c;for(let p=d;p<f;p++){let m=s[p];if(p<l&&n===m||p>=l&&m.type===n)return p}if(o){let p=s[l];if(p&&nt(p)&&p.type===n)return l}return null}function Ds(e,t,n,r,o){let i=e[n],s=t.data;if(i instanceof Cn){let a=i;if(a.resolving){let p=pp(s[n]);throw El(p)}let l=sf(a.canSeeViewProviders);a.resolving=!0;let c=s[n].type||s[n],u,d=a.injectImpl?De(a.injectImpl):null,f=zl(e,r,0);try{i=e[n]=a.factory(void 0,o,s,e,r),t.firstCreatePass&&n>=r.directiveStart&&Sy(n,s[n],t)}finally{d!==null&&De(d),sf(l),a.resolving=!1,Gl()}}return i}function By(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(pn)?e[pn]:void 0;return typeof t=="number"?t>=0?t&Gf:Wy:t}function af(e,t,n){let r=1<<e;return!!(n[t+(e>>Yf)]&r)}function lf(e,t){return!(e&2)&&!(e&1&&t)}var Dn=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Jf(this._tNode,this._lView,t,sn(r),n)}};function Wy(){return new Dn(be(),B())}function yr(e){return bo(()=>{let t=e.prototype.constructor,n=t[Kr]||fc(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[Kr]||fc(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function fc(e){return vl(e)?()=>{let t=fc(ae(e));return t&&t()}:an(e)}function Hy(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[I]&2048&&!ar(s);){let a=Xf(i,s,n,r|2,rt);if(a!==rt)return a;let l=i.parent;if(!l){let c=s[Ll];if(c){let u=c.get(n,rt,r);if(u!==rt)return u}l=eh(s),s=s[fn]}i=l}return o}function eh(e){let t=e[E],n=t.type;return n===2?t.declTNode:n===1?e[Le]:null}function wo(e){return Fy(be(),e)}function Uy(){return Gc(be(),B())}function Gc(e,t){return new Ht(ze(e,t))}var Ht=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=Uy}return e})();function th(e){return(e.flags&128)===128}var Yc=(function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e})(Yc||{}),nh=new Map,$y=0;function qy(){return $y++}function zy(e){nh.set(e[ro],e)}function hc(e){nh.delete(e[ro])}var cf="__ngContext__";function hr(e,t){tt(t)?(e[cf]=t[ro],zy(t)):e[cf]=t}function rh(e){return ih(e[sr])}function oh(e){return ih(e[Oe])}function ih(e){for(;e!==null&&!qe(e);)e=e[Oe];return e}var gc;function Zc(e){gc=e}function Kc(){if(gc!==void 0)return gc;if(typeof document<"u")return document;throw new v(210,!1)}var Os=new y("",{providedIn:"root",factory:()=>Gy}),Gy="ng",Ls=new y(""),Do=new y("",{providedIn:"platform",factory:()=>"unknown"});var Ps=new y("",{providedIn:"root",factory:()=>Kc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Yy="h",Zy="b";var sh="r";var ah="di";var lh=!1,ch=new y("",{providedIn:"root",factory:()=>lh});var Ky=(e,t,n,r)=>{};function Qy(e,t,n,r){Ky(e,t,n,r)}function Qc(e){return(e.flags&32)===32}var Jy=()=>null;function uh(e,t,n=!1){return Jy(e,t,n)}function dh(e,t){let n=e.contentQueries;if(n!==null){let r=D(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=e.data[s];ql(i),a.contentQueries(2,t[s],s)}}}finally{D(r)}}}function mc(e,t,n){ql(0);let r=D(null);try{t(e,n)}finally{D(r)}}function ph(e,t,n){if(Fl(t)){let r=D(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let l=n[s];a.contentQueries(1,l,s)}}}finally{D(r)}}}var bt=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e})(bt||{});var us;function Xy(){if(us===void 0&&(us=null,Rt.trustedTypes))try{us=Rt.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return us}function Fs(e){return Xy()?.createHTML(e)||e}var ds;function fh(){if(ds===void 0&&(ds=null,Rt.trustedTypes))try{ds=Rt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return ds}function uf(e){return fh()?.createHTML(e)||e}function df(e){return fh()?.createScriptURL(e)||e}var wt=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Zi})`}},vc=class extends wt{getTypeName(){return"HTML"}},yc=class extends wt{getTypeName(){return"Style"}},bc=class extends wt{getTypeName(){return"Script"}},wc=class extends wt{getTypeName(){return"URL"}},Dc=class extends wt{getTypeName(){return"ResourceURL"}};function Ye(e){return e instanceof wt?e.changingThisBreaksApplicationSecurity:e}function ot(e,t){let n=hh(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${Zi})`)}return n===t}function hh(e){return e instanceof wt&&e.getTypeName()||null}function Jc(e){return new vc(e)}function Xc(e){return new yc(e)}function eu(e){return new bc(e)}function tu(e){return new wc(e)}function nu(e){return new Dc(e)}function eb(e){let t=new Ic(e);return tb()?new Cc(t):t}var Cc=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let n=new window.DOMParser().parseFromString(Fs(t),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(t):(n.firstChild?.remove(),n)}catch{return null}}},Ic=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let n=this.inertDocument.createElement("template");return n.innerHTML=Fs(t),n}};function tb(){try{return!!new window.DOMParser().parseFromString(Fs(""),"text/html")}catch{return!1}}var nb=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Co(e){return e=String(e),e.match(nb)?e:"unsafe:"+e}function Ct(e){let t={};for(let n of e.split(","))t[n]=!0;return t}function Io(...e){let t={};for(let n of e)for(let r in n)n.hasOwnProperty(r)&&(t[r]=!0);return t}var gh=Ct("area,br,col,hr,img,wbr"),mh=Ct("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),vh=Ct("rp,rt"),rb=Io(vh,mh),ob=Io(mh,Ct("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),ib=Io(vh,Ct("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),pf=Io(gh,ob,ib,rb),yh=Ct("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),sb=Ct("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),ab=Ct("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),lb=Io(yh,sb,ab),cb=Ct("script,style,template");var Ec=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let n=t.firstChild,r=!0,o=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild){o.push(n),n=pb(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let i=db(n);if(i){n=i;break}n=o.pop()}}return this.buf.join("")}startElement(t){let n=ff(t).toLowerCase();if(!pf.hasOwnProperty(n))return this.sanitizedSomething=!0,!cb.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);let r=t.attributes;for(let o=0;o<r.length;o++){let i=r.item(o),s=i.name,a=s.toLowerCase();if(!lb.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=i.value;yh[a]&&(l=Co(l)),this.buf.push(" ",s,'="',hf(l),'"')}return this.buf.push(">"),!0}endElement(t){let n=ff(t).toLowerCase();pf.hasOwnProperty(n)&&!gh.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(hf(t))}};function ub(e,t){return(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function db(e){let t=e.nextSibling;if(t&&e!==t.previousSibling)throw bh(t);return t}function pb(e){let t=e.firstChild;if(t&&ub(e,t))throw bh(t);return t}function ff(e){let t=e.nodeName;return typeof t=="string"?t:"FORM"}function bh(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var fb=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,hb=/([^\#-~ |!])/g;function hf(e){return e.replace(/&/g,"&amp;").replace(fb,function(t){let n=t.charCodeAt(0),r=t.charCodeAt(1);return"&#"+((n-55296)*1024+(r-56320)+65536)+";"}).replace(hb,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ps;function Vs(e,t){let n=null;try{ps=ps||eb(e);let r=t?String(t):"";n=ps.getInertBodyElement(r);let o=5,i=r;do{if(o===0)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=ps.getInertBodyElement(r)}while(r!==i);let a=new Ec().sanitizeChildren(gf(n)||n);return Fs(a)}finally{if(n){let r=gf(n)||n;for(;r.firstChild;)r.firstChild.remove()}}}function gf(e){return"content"in e&&gb(e)?e.content:null}function gb(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function mb(e,t){return e.createText(t)}function vb(e,t,n){e.setValue(t,n)}function wh(e,t,n){return e.createElement(t,n)}function Cs(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Dh(e,t,n){e.appendChild(t,n)}function mf(e,t,n,r,o){r!==null?Cs(e,t,n,r,o):Dh(e,t,n)}function Ch(e,t,n,r){e.removeChild(null,t,n,r)}function yb(e,t,n){e.setAttribute(t,"style",n)}function bb(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Ih(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&Ny(e,t,r),o!==null&&bb(e,t,o),i!==null&&yb(e,t,i)}var Ve=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e})(Ve||{});function ru(e){let t=iu();return t?uf(t.sanitize(Ve.HTML,e)||""):ot(e,"HTML")?uf(Ye(e)):Vs(Kc(),nr(e))}function js(e){let t=iu();return t?t.sanitize(Ve.URL,e)||"":ot(e,"URL")?Ye(e):Co(nr(e))}function Eh(e){let t=iu();if(t)return df(t.sanitize(Ve.RESOURCE_URL,e)||"");if(ot(e,"ResourceURL"))return df(Ye(e));throw new v(904,!1)}var wb=new Set(["embed","frame","iframe","media","script"]),Db=new Set(["base","link","script"]);function Cb(e,t){return t==="src"&&wb.has(e)||t==="href"&&Db.has(e)||t==="xlink:href"&&e==="script"?Eh:js}function ou(e,t,n){return Cb(t,n)(e)}function iu(){let e=B();return e&&e[et].sanitizer}function _h(e){return e instanceof Function?e():e}function Ib(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var Sh="ng-template";function Eb(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&Ib(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(su(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function su(e){return e.type===4&&e.value!==Sh}function _b(e,t,n){let r=e.type===4&&!n?Sh:e.value;return t===r}function Sb(e,t,n){let r=4,o=e.attrs,i=o!==null?xb(o):0,s=!1;for(let a=0;a<t.length;a++){let l=t[a];if(typeof l=="number"){if(!s&&!Ge(r)&&!Ge(l))return!1;if(s&&Ge(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!_b(e,l,n)||l===""&&t.length===1){if(Ge(r))return!1;s=!0}}else if(r&8){if(o===null||!Eb(e,o,l,n)){if(Ge(r))return!1;s=!0}}else{let c=t[++a],u=Tb(l,o,su(e),n);if(u===-1){if(Ge(r))return!1;s=!0;continue}if(c!==""){let d;if(u>i?d="":d=o[u+1].toLowerCase(),r&2&&c!==d){if(Ge(r))return!1;s=!0}}}}return Ge(r)||s}function Ge(e){return(e&1)===0}function Tb(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++o];for(;typeof a=="string";)a=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return Ab(t,e)}function Mb(e,t,n=!1){for(let r=0;r<t.length;r++)if(Sb(e,t[r],n))return!0;return!1}function xb(e){for(let t=0;t<e.length;t++){let n=e[t];if(qf(n))return t}return e.length}function Ab(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function vf(e,t){return e?":not("+t.trim()+")":t}function Nb(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Ge(s)&&(t+=vf(i,o),o=""),r=s,i=i||!Ge(r);n++}return o!==""&&(t+=vf(i,o)),t}function Rb(e){return e.map(Nb).join(",")}function kb(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!Ge(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var it={};function au(e,t,n,r,o,i,s,a,l,c,u){let d=ue+r,f=d+o,p=Ob(d,f),m=typeof c=="function"?c():c;return p[E]={type:e,blueprint:p,template:n,queries:null,viewQuery:a,declTNode:t,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:u}}function Ob(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:it);return n}function Lb(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=au(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function lu(e,t,n,r,o,i,s,a,l,c,u){let d=t.blueprint.slice();return d[$e]=o,d[I]=r|4|128|8|64|1024,(c!==null||e&&e[I]&2048)&&(d[I]|=2048),jl(d),d[oe]=d[fn]=e,d[J]=n,d[et]=s||e&&e[et],d[G]=a||e&&e[G],d[mt]=l||e&&e[mt]||null,d[Le]=i,d[ro]=qy(),d[or]=u,d[Ll]=c,d[Ie]=t.type==2?e[Ie]:d,d}function Pb(e,t,n){let r=ze(t,e),o=Lb(n),i=e[et].rendererFactory,s=cu(e,lu(e,o,null,Th(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=s}function Th(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Mh(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function cu(e,t){return e[sr]?e[Ol][Oe]=t:e[sr]=t,e[Ol]=t,t}function H(e=1){xh(_e(),B(),jt()+e,!1)}function xh(e,t,n,r){if(!r)if((t[I]&3)===3){let i=e.preOrderCheckHooks;i!==null&&hs(t,i,n)}else{let i=e.preOrderHooks;i!==null&&gs(t,i,0,n)}Bt(n)}var Bs=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(Bs||{});function _c(e,t,n,r){let o=D(null);try{let[i,s,a]=e.inputs[n],l=null;(s&Bs.SignalBased)!==0&&(l=t[i][pe]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(t,r)),e.setInput!==null?e.setInput(t,l,r,n,i):Bf(t,l,i,r)}finally{D(o)}}var Dt=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(Dt||{}),Fb;function uu(e,t){return Fb(e,t)}var In=new Set,du=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(du||{}),Eo=new y(""),yf=new Set;function Ut(e){yf.has(e)||(yf.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Ah=!1,Sc=class extends K{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Ep()&&(this.destroyRef=h(Se,{optional:!0})??void 0,this.pendingTasks=h(yt,{optional:!0})??void 0)}emit(t){let n=D(null);try{super.next(t)}finally{D(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return t instanceof Z&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},te=Sc;function Nh(e){let t,n;function r(){e=wn;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function bf(e){return queueMicrotask(()=>e()),()=>{e=wn}}var pu="isAngularZone",Is=pu+"_ID",Vb=0,X=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new te(!1);onMicrotaskEmpty=new te(!1);onStable=new te(!1);onError=new te(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Ah}=t;if(typeof Zone>"u")throw new v(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,Wb(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(pu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new v(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new v(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,jb,wn,wn);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},jb={};function fu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Bb(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Nh(()=>{e.callbackScheduled=!1,Tc(e),e.isCheckStableRunning=!0,fu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Tc(e)}function Wb(e){let t=()=>{Bb(e)},n=Vb++;e._inner=e._inner.fork({name:"angular",properties:{[pu]:!0,[Is]:n,[Is+n]:!0},onInvokeTask:(r,o,i,s,a,l)=>{if(Hb(l))return r.invokeTask(i,s,a,l);try{return wf(e),r.invokeTask(i,s,a,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),Df(e)}},onInvoke:(r,o,i,s,a,l,c)=>{try{return wf(e),r.invoke(i,s,a,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Ub(l)&&t(),Df(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,Tc(e),fu(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function Tc(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function wf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Df(e){e._nesting--,fu(e)}var Es=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new te;onMicrotaskEmpty=new te;onStable=new te;onError=new te;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function Hb(e){return Rh(e,"__ignore_ng_zone__")}function Ub(e){return Rh(e,"__scheduler_tick__")}function Rh(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var kh=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:e,providedIn:"root",factory:()=>new e})}return e})();var Oh=new y("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function Lh(e,t,n){let r=e.get(Oh);if(Array.isArray(t))for(let o of t)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);r.scheduler&&r.scheduler(e)}function $b(e,t){let n=e.get(Oh);if(t.detachedLeaveAnimationFns){for(let r of t.detachedLeaveAnimationFns)n.queue.delete(r);t.detachedLeaveAnimationFns=void 0}}function qb(e,t){for(let[n,r]of t)Lh(e,r.animateFns)}function Cf(e,t,n,r){let o=e?.[vn]?.enter;t!==null&&o&&o.has(n.index)&&qb(r,o)}function pr(e,t,n,r,o,i,s,a){if(o!=null){let l,c=!1;qe(o)?l=o:tt(o)&&(c=!0,o=o[$e]);let u=Pe(o);e===0&&r!==null?(Cf(a,r,i,n),s==null?Dh(t,r,u):Cs(t,r,u,s||null,!0)):e===1&&r!==null?(Cf(a,r,i,n),Cs(t,r,u,s||null,!0)):e===2?If(a,i,n,d=>{Ch(t,u,c,d)}):e===3&&If(a,i,n,()=>{t.destroyNode(u)}),l!=null&&ow(t,e,n,l,i,r,s)}}function zb(e,t){Ph(e,t),t[$e]=null,t[Le]=null}function Gb(e,t,n,r,o,i){r[$e]=o,r[Le]=t,Hs(e,r,n,1,o,i)}function Ph(e,t){t[et].changeDetectionScheduler?.notify(9),Hs(e,t,t[G],2,null,null)}function Yb(e){let t=e[sr];if(!t)return nc(e[E],e);for(;t;){let n=null;if(tt(t))n=t[sr];else{let r=t[Y];r&&(n=r)}if(!n){for(;t&&!t[Oe]&&t!==e;)tt(t)&&nc(t[E],t),t=t[oe];t===null&&(t=e),tt(t)&&nc(t[E],t),n=t&&t[Oe]}t=n}}function hu(e,t){let n=e[io],r=n.indexOf(t);n.splice(r,1)}function Ws(e,t){if(yn(t))return;let n=t[G];n.destroyNode&&Hs(e,t,n,3,null,null),Yb(t)}function nc(e,t){if(yn(t))return;let n=D(null);try{t[I]&=-129,t[I]|=256,t[Ee]&&en(t[Ee]),Qb(e,t),Kb(e,t),t[E].type===1&&t[G].destroy();let r=t[hn];if(r!==null&&qe(t[oe])){r!==t[oe]&&hu(r,t);let o=t[mn];o!==null&&o.detachView(e)}hc(t)}finally{D(n)}}function If(e,t,n,r){let o=e?.[vn];if(o==null||o.leave==null||!o.leave.has(t.index))return r(!1);e&&In.add(e),Lh(n,()=>{if(o.leave&&o.leave.has(t.index)){let s=o.leave.get(t.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:u}=c();a.push(u)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(a),Zb(e,r)}else e&&In.delete(e),r(!1)},o)}function Zb(e,t){let n=e[vn]?.running;if(n){n.then(()=>{e[vn].running=void 0,In.delete(e),t(!0)});return}t(!1)}function Kb(e,t){let n=e.cleanup,r=t[ir];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[n[s+1]];n[s].call(a)}r!==null&&(t[ir]=null);let o=t[ft];if(o!==null){t[ft]=null;for(let s=0;s<o.length;s++){let a=o[s];a()}}let i=t[vt];if(i!==null){t[vt]=null;for(let s of i)s.destroy()}}function Qb(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Cn)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],l=i[s+1];W(4,a,l);try{l.call(a)}finally{W(5,a,l)}}else{W(4,o,i);try{i.call(o)}finally{W(5,o,i)}}}}}function Jb(e,t,n){return Xb(e,t.parent,n)}function Xb(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[$e];if(Ft(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===bt.None||o===bt.Emulated)return null}return ze(r,n)}function ew(e,t,n){return nw(e,t,n)}function tw(e,t,n){return e.type&40?ze(e,n):null}var nw=tw,Ef;function gu(e,t,n,r){let o=Jb(e,r,t),i=t[G],s=r.parent||t[Le],a=ew(s,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)mf(i,o,n[l],a,!1);else mf(i,o,n,a,!1);Ef!==void 0&&Ef(i,r,t,n,o)}function uo(e,t){if(t!==null){let n=t.type;if(n&3)return ze(t,e);if(n&4)return Mc(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return uo(e,r);{let o=e[t.index];return qe(o)?Mc(-1,o):Pe(o)}}else{if(n&128)return uo(e,t.next);if(n&32)return uu(t,e)()||Pe(e[t.index]);{let r=Fh(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=Nt(e[Ie]);return uo(o,r)}else return uo(e,t.next)}}}return null}function Fh(e,t){if(t!==null){let r=e[Ie][Le],o=t.projection;return r.projection[o]}return null}function Mc(e,t){let n=Y+e+1;if(n<t.length){let r=t[n],o=r[E].firstChild;if(o!==null)return uo(r,o)}return t[Pt]}function mu(e,t,n,r,o,i,s){for(;n!=null;){let a=r[mt];if(n.type===128){n=n.next;continue}let l=r[n.index],c=n.type;if(s&&t===0&&(l&&hr(Pe(l),r),n.flags|=2),!Qc(n))if(c&8)mu(e,t,n.child,r,o,i,!1),pr(t,e,a,o,l,n,i,r);else if(c&32){let u=uu(n,r),d;for(;d=u();)pr(t,e,a,o,d,n,i,r);pr(t,e,a,o,l,n,i,r)}else c&16?rw(e,t,r,n,o,i):pr(t,e,a,o,l,n,i,r);n=s?n.projectionNext:n.next}}function Hs(e,t,n,r,o,i){mu(n,r,e.firstChild,t,o,i,!1)}function rw(e,t,n,r,o,i){let s=n[Ie],l=s[Le].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];pr(t,e,n[mt],o,u,r,i,n)}else{let c=l,u=s[oe];th(r)&&(c.flags|=128),mu(e,t,c,u,o,i,!0)}}function ow(e,t,n,r,o,i,s){let a=r[Pt],l=Pe(r);a!==l&&pr(t,e,n,i,a,o,s);for(let c=Y;c<r.length;c++){let u=r[c];Hs(u[E],u,e,t,i,a)}}function iw(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:Dt.DashCase;o==null?e.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=Dt.Important),e.setStyle(n,r,o,i))}}function Vh(e,t,n,r,o){let i=jt(),s=r&2;try{Bt(-1),s&&t.length>ue&&xh(e,t,ue,!1),W(s?2:0,o,n),n(r,o)}finally{Bt(i),W(s?3:1,o,n)}}function jh(e,t,n){fw(e,t,n),(n.flags&64)===64&&hw(e,t,n)}function Bh(e,t,n=ze){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(t,e):e[s];e[o++]=a}}}function sw(e,t,n,r){let i=r.get(ch,lh)||n===bt.ShadowDom,s=e.selectRootElement(t,i);return aw(s),s}function aw(e){lw(e)}var lw=()=>null;function cw(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function uw(e,t,n,r,o,i){let s=t[E];if(vu(e,s,t,n,r)){Ft(e)&&pw(t,e.index);return}e.type&3&&(n=cw(n)),dw(e,t,n,r,o,i)}function dw(e,t,n,r,o,i){if(e.type&3){let s=ze(e,t);r=i!=null?i(r,e.value||"",n):r,o.setProperty(s,n,r)}else e.type&12}function pw(e,t){let n=Fe(t,e);n[I]&16||(n[I]|=64)}function fw(e,t,n){let r=n.directiveStart,o=n.directiveEnd;Ft(n)&&Pb(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||ws(n,t);let i=n.initialInputs;for(let s=r;s<o;s++){let a=e.data[s],l=Ds(t,e,s,n);if(hr(l,t),i!==null&&bw(t,s-r,l,a,n,i),nt(a)){let c=Fe(n.index,t);c[J]=Ds(t,e,s,n)}}}function hw(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Gp();try{Bt(i);for(let a=r;a<o;a++){let l=e.data[a],c=t[a];is(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&gw(l,c)}}finally{Bt(-1),is(s)}}function gw(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function mw(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];Mb(t,i.selectors,!1)&&(r??=[],nt(i)?r.unshift(i):r.push(i))}return r}function vw(e,t,n,r,o,i){let s=ze(e,t);yw(t[G],s,i,e.value,n,r,o)}function yw(e,t,n,r,o,i,s){if(i==null)e.removeAttribute(t,o,n);else{let a=s==null?nr(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}function bw(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];_c(r,n,l,c)}}function ww(e,t,n,r,o){let i=ue+n,s=t[E],a=o(s,t,e,r,n);t[i]=a,lr(e,!0);let l=e.type===2;return l?(Ih(t[G],a,e),(kp()===0||ns(e))&&hr(a,t),Op()):hr(a,t),ls()&&(!l||!Qc(e))&&gu(s,t,a,e),e}function Dw(e){let t=e;return Ul()?Wp():(t=t.parent,lr(t,!1)),t}function Cw(e,t){let n=e[mt];if(!n)return;let r;try{r=n.get(Te,null)}catch{r=null}r?.(t)}function vu(e,t,n,r,o){let i=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],u=s[l+1],d=t.data[c];_c(d,n[c],u,o),a=!0}if(i)for(let l of i){let c=n[l],u=t.data[l];_c(u,c,r,o),a=!0}return a}function Iw(e,t){let n=Fe(t,e),r=n[E];Ew(r,n);let o=n[$e];o!==null&&n[or]===null&&(n[or]=uh(o,n[mt])),W(18),yu(r,n,n[J]),W(19,n[J])}function Ew(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function yu(e,t,n){ss(t);try{let r=e.viewQuery;r!==null&&mc(1,r,n);let o=e.template;o!==null&&Vh(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[mn]?.finishViewCreation(e),e.staticContentQueries&&dh(e,t),e.staticViewQueries&&mc(2,e.viewQuery,n);let i=e.components;i!==null&&_w(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[I]&=-5,as()}}function _w(e,t){for(let n=0;n<t.length;n++)Iw(e,t[n])}function bu(e,t,n,r){let o=D(null);try{let i=t.tView,a=e[I]&4096?4096:16,l=lu(e,i,n,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=e[t.index];l[hn]=c;let u=e[mn];return u!==null&&(l[mn]=u.createEmbeddedView(i)),yu(i,l,n),l}finally{D(o)}}function ho(e,t){return!t||t.firstChild===null||th(e)}function go(e,t,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&r.push(Pe(i)),qe(i)&&Wh(i,r);let s=n.type;if(s&8)go(e,t,n.child,r);else if(s&32){let a=uu(n,t),l;for(;l=a();)r.push(l)}else if(s&16){let a=Fh(t,n);if(Array.isArray(a))r.push(...a);else{let l=Nt(t[Ie]);go(l[E],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function Wh(e,t){for(let n=Y;n<e.length;n++){let r=e[n],o=r[E].firstChild;o!==null&&go(r[E],r,o,t)}e[Pt]!==e[$e]&&t.push(e[Pt])}function Hh(e){if(e[ts]!==null){for(let t of e[ts])t.impl.addSequence(t);e[ts].length=0}}var Uh=[];function Sw(e){return e[Ee]??Tw(e)}function Tw(e){let t=Uh.pop()??Object.create(xw);return t.lView=e,t}function Mw(e){e.lView[Ee]!==e&&(e.lView=null,Uh.push(e))}var xw=x(g({},Jt),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{bn(e.lView)},consumerOnSignalRead(){this.lView[Ee]=this}});function Aw(e){let t=e[Ee]??Object.create(Nw);return t.lView=e,t}var Nw=x(g({},Jt),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=Nt(e.lView);for(;t&&!$h(t[E]);)t=Nt(t);t&&Bl(t)},consumerOnSignalRead(){this.lView[Ee]=this}});function $h(e){return e.type!==2}function qh(e){if(e[vt]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[vt])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=n&&!!(e[I]&8192)}}var Rw=100;function zh(e,t=0){let r=e[et].rendererFactory,o=!1;o||r.begin?.();try{kw(e,t)}finally{o||r.end?.()}}function kw(e,t){let n=$l();try{cr(!0),xc(e,t);let r=0;for(;ao(e);){if(r===Rw)throw new v(103,!1);r++,xc(e,1)}}finally{cr(n)}}function Ow(e,t,n,r){if(yn(t))return;let o=t[I],i=!1,s=!1;ss(t);let a=!0,l=null,c=null;i||($h(e)?(c=Sw(t),l=Xt(c)):mi()===null?(a=!1,c=Aw(t),l=Xt(c)):t[Ee]&&(en(t[Ee]),t[Ee]=null));try{jl(t),Up(e.bindingStartIndex),n!==null&&Vh(e,t,n,2,r);let u=(o&3)===3;if(!i)if(u){let p=e.preOrderCheckHooks;p!==null&&hs(t,p,null)}else{let p=e.preOrderHooks;p!==null&&gs(t,p,0,null),ec(t,0)}if(s||Lw(t),qh(t),Gh(t,0),e.contentQueries!==null&&dh(e,t),!i)if(u){let p=e.contentCheckHooks;p!==null&&hs(t,p)}else{let p=e.contentHooks;p!==null&&gs(t,p,1),ec(t,1)}Fw(e,t);let d=e.components;d!==null&&Zh(t,d,0);let f=e.viewQuery;if(f!==null&&mc(2,f,r),!i)if(u){let p=e.viewCheckHooks;p!==null&&hs(t,p)}else{let p=e.viewHooks;p!==null&&gs(t,p,2),ec(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[es]){for(let p of t[es])p();t[es]=null}i||(Hh(t),t[I]&=-73)}catch(u){throw i||bn(t),u}finally{c!==null&&(Bn(c,l),a&&Mw(c)),as()}}function Gh(e,t){for(let n=rh(e);n!==null;n=oh(n))for(let r=Y;r<n.length;r++){let o=n[r];Yh(o,t)}}function Lw(e){for(let t=rh(e);t!==null;t=oh(t)){if(!(t[I]&2))continue;let n=t[io];for(let r=0;r<n.length;r++){let o=n[r];Bl(o)}}}function Pw(e,t,n){W(18);let r=Fe(t,e);Yh(r,n),W(19,r[J])}function Yh(e,t){rs(e)&&xc(e,t)}function xc(e,t){let r=e[E],o=e[I],i=e[Ee],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&Wn(i)),s||=!1,i&&(i.dirty=!1),e[I]&=-9217,s)Ow(r,e,r.template,e[J]);else if(o&8192){let a=D(null);try{qh(e),Gh(e,1);let l=r.components;l!==null&&Zh(e,l,1),Hh(e)}finally{D(a)}}}function Zh(e,t,n){for(let r=0;r<t.length;r++)Pw(e,t[r],n)}function Fw(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Bt(~o);else{let i=o,s=n[++r],a=n[++r];zp(s,i);let l=t[i];W(24,l),a(2,l),W(25,l)}}}finally{Bt(-1)}}function wu(e,t){let n=$l()?64:1088;for(e[et].changeDetectionScheduler?.notify(t);e;){e[I]|=n;let r=Nt(e);if(ar(e)&&!r)return e;e=r}return null}function Kh(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function Qh(e,t){let n=Y+t;if(n<e.length)return e[n]}function Us(e,t,n,r=!0){let o=t[E];if(Vw(o,t,e,n),r){let s=Mc(n,e),a=t[G],l=a.parentNode(e[Pt]);l!==null&&Gb(o,e[Le],a,t,l,s)}let i=t[or];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Jh(e,t){let n=mo(e,t);return n!==void 0&&Ws(n[E],n),n}function mo(e,t){if(e.length<=Y)return;let n=Y+t,r=e[n];if(r){let o=r[hn];o!==null&&o!==e&&hu(o,r),t>0&&(e[n-1][Oe]=r[Oe]);let i=eo(e,Y+t);zb(r[E],r);let s=i[mn];s!==null&&s.detachView(i[E]),r[oe]=null,r[Oe]=null,r[I]&=-129}return r}function Vw(e,t,n,r){let o=Y+r,i=n.length;r>0&&(n[o-1][Oe]=t),r<i-Y?(t[Oe]=n[o],Sl(n,Y+r,t)):(n.push(t),t[Oe]=null),t[oe]=n;let s=t[hn];s!==null&&n!==s&&Xh(s,t);let a=t[mn];a!==null&&a.insertView(e),os(t),t[I]|=128}function Xh(e,t){let n=e[io],r=t[oe];if(tt(r))e[I]|=2;else{let o=r[oe][Ie];t[Ie]!==o&&(e[I]|=2)}n===null?e[io]=[t]:n.push(t)}var En=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[E];return go(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[J]}set context(t){this._lView[J]=t}get destroyed(){return yn(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[oe];if(qe(t)){let n=t[oo],r=n?n.indexOf(this):-1;r>-1&&(mo(t,r),eo(n,r))}this._attachedToViewContainer=!1}Ws(this._lView[E],this._lView)}onDestroy(t){Wl(this._lView,t)}markForCheck(){wu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[I]&=-129}reattach(){os(this._lView),this._lView[I]|=128}detectChanges(){this._lView[I]|=1024,zh(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new v(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=ar(this._lView),n=this._lView[hn];n!==null&&!t&&hu(n,this._lView),Ph(this._lView[E],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new v(902,!1);this._appRef=t;let n=ar(this._lView),r=this._lView[hn];r!==null&&!n&&Xh(r,this._lView),os(this._lView)}};function Du(e,t,n,r,o){let i=e.data[t];if(i===null)i=jw(e,t,n,r,o),qp()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=Bp();i.injectorIndex=s===null?-1:s.injectorIndex}return lr(i,!0),i}function jw(e,t,n,r,o){let i=Hl(),s=Ul(),a=s?i:i&&i.parent,l=e.data[t]=Ww(e,a,n,t,r,o);return Bw(e,l,i,s),l}function Bw(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function Ww(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,a=0;return Fp()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var mR=new RegExp(`^(\\d+)*(${Zy}|${Yy})*(.*)`);function Hw(e){let t=e[Pl]??[],r=e[oe][G],o=[];for(let i of t)i.data[ah]!==void 0?o.push(i):Uw(i,r);e[Pl]=o}function Uw(e,t){let n=0,r=e.firstChild;if(r){let o=e.data[sh];for(;n<o;){let i=r.nextSibling;Ch(t,r,!1),r=i,n++}}}var $w=()=>null,qw=()=>null;function Ac(e,t){return $w(e,t)}function eg(e,t,n){return qw(e,t,n)}var tg=class{},$s=class{},Nc=class{resolveComponentFactory(t){throw new v(917,!1)}},_o=class{static NULL=new Nc},_n=class{},Tn=(()=>{class e{destroyNode=null;static __NG_ELEMENT_ID__=()=>zw()}return e})();function zw(){let e=B(),t=be(),n=Fe(t.index,e);return(tt(n)?n:e)[G]}var ng=(()=>{class e{static \u0275prov=b({token:e,providedIn:"root",factory:()=>null})}return e})();var ms={},Rc=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){let o=this.injector.get(t,ms,r);return o!==ms||n===ms?o:this.parentInjector.get(t,n,r)}};function _f(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)o=ml(o,a);else if(i==2){let l=a,c=t[++s];r=ml(r,l+": "+c+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function $(e,t=0){let n=B();if(n===null)return _(e,t);let r=be();return Jf(r,n,ae(e),t)}function Gw(e,t,n,r,o){let i=r===null?null:{"":-1},s=o(e,n);if(s!==null){let a=s,l=null,c=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,l,c]=u.resolveHostDirectives(s);break}Kw(e,t,n,a,i,l,c)}i!==null&&r!==null&&Yw(n,r,i)}function Yw(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new v(-301,!1);r.push(t[o],i)}}function Zw(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function Kw(e,t,n,r,o,i,s){let a=r.length,l=!1;for(let f=0;f<a;f++){let p=r[f];!l&&nt(p)&&(l=!0,Zw(e,n,f)),pc(ws(n,t),e,p.type)}nD(n,e.data.length,a);for(let f=0;f<a;f++){let p=r[f];p.providersResolver&&p.providersResolver(p)}let c=!1,u=!1,d=Mh(e,t,a,null);a>0&&(n.directiveToIndex=new Map);for(let f=0;f<a;f++){let p=r[f];if(n.mergedAttrs=fo(n.mergedAttrs,p.hostAttrs),Jw(e,n,t,d,p),tD(d,p,o),s!==null&&s.has(p)){let[w,N]=s.get(p);n.directiveToIndex.set(p.type,[d,w+n.directiveStart,N+n.directiveStart])}else(i===null||!i.has(p))&&n.directiveToIndex.set(p.type,d);p.contentQueries!==null&&(n.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(n.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),c=!0),!u&&(m.ngOnChanges||m.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),u=!0),d++}Qw(e,n,i)}function Qw(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))Sf(0,t,o,r),Sf(1,t,o,r),Mf(t,r,!1);else{let i=n.get(o);Tf(0,t,i,r),Tf(1,t,i,r),Mf(t,r,!0)}}}function Sf(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[i]??=[],s[i].push(r),rg(t,i)}}function Tf(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],a;e===0?a=t.hostDirectiveInputs??={}:a=t.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,i),rg(t,s)}}function rg(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function Mf(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||su(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let c=o[l];for(let u of c)if(u===t){s??=[],s.push(l,r[a+1]);break}}else if(n&&i.hasOwnProperty(l)){let c=i[l];for(let u=0;u<c.length;u+=2)if(c[u]===t){s??=[],s.push(c[u+1],r[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function Jw(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=an(o.type,!0)),s=new Cn(i,nt(o),$,null);e.blueprint[r]=s,n[r]=s,Xw(e,t,r,Mh(e,n,o.hostVars,it),o)}function Xw(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;eD(s)!=a&&s.push(a),s.push(n,r,i)}}function eD(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function tD(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;nt(t)&&(n[""]=e)}}function nD(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function og(e,t,n,r,o,i,s,a){let l=t[E],c=l.consts,u=Vt(c,s),d=Du(l,e,n,r,u);return i&&Gw(l,t,d,Vt(c,a),o),d.mergedAttrs=fo(d.mergedAttrs,d.attrs),d.attrs!==null&&_f(d,d.attrs,!1),d.mergedAttrs!==null&&_f(d,d.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,d),d}function ig(e,t){Ty(e,t),Fl(t)&&e.queries.elementEnd(t)}function rD(e,t,n){return e[t]=n}function Mn(e,t,n){if(n===it)return!1;let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function rc(e,t,n){return function r(o){let i=Ft(e)?Fe(e.index,t):t;wu(i,5);let s=t[J],a=xf(t,s,n,o),l=r.__ngNextListenerFn__;for(;l;)a=xf(t,s,l,o)&&a,l=l.__ngNextListenerFn__;return a}}function xf(e,t,n,r){let o=D(null);try{return W(6,t,n),n(r)!==!1}catch(i){return Cw(e,i),!1}finally{W(7,t,n),D(o)}}function oD(e,t,n,r,o,i,s,a){let l=ns(e),c=!1,u=null;if(!r&&l&&(u=sD(t,n,i,e.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,c=!0}else{let d=ze(e,n),f=r?r(d):d;Qy(n,f,i,a);let p=o.listen(f,i,a);if(!iD(i)){let m=r?w=>r(Pe(w[e.index])):e.index;sg(m,t,n,i,a,p,!1)}}return c}function iD(e){return e.startsWith("animation")||e.startsWith("transition")}function sD(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=t[ir],l=o[i+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(i+=2)}return null}function sg(e,t,n,r,o,i,s){let a=t.firstCreatePass?Rp(t):null,l=Np(n),c=l.length;l.push(o,i),a&&a.push(r,e,c,(c+1)*(s?-1:1))}function Af(e,t,n,r,o,i){let s=t[n],a=t[E],c=a.data[n].outputs[r],d=s[c].subscribe(i);sg(e.index,a,t,o,i,d,!0)}var kc=Symbol("BINDING");var _s=class extends _o{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Ot(t);return new gr(n,this.ngModule)}};function aD(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&Bs.SignalBased)!==0};return o&&(i.transform=o),i})}function lD(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function cD(e,t,n){let r=t instanceof re?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new Rc(n,r):n}function uD(e){let t=e.get(_n,null);if(t===null)throw new v(407,!1);let n=e.get(ng,null),r=e.get(gt,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1}}function dD(e,t){let n=ag(e);return wh(t,n,n==="svg"?Sp:n==="math"?Tp:null)}function ag(e){return(e.selectors[0][0]||"div").toLowerCase()}var gr=class extends $s{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=aD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=lD(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=Rb(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o,i,s){W(22);let a=D(null);try{let l=this.componentDef,c=pD(r,l,s,i),u=cD(l,o||this.ngModule,t),d=uD(u),f=d.rendererFactory.createRenderer(null,l),p=r?sw(f,r,l.encapsulation,u):dD(l,f),m=s?.some(Nf)||i?.some(M=>typeof M!="function"&&M.bindings.some(Nf)),w=lu(null,c,null,512|Th(l),null,null,d,f,u,null,uh(p,u,!0));w[ue]=p,ss(w);let N=null;try{let M=og(ue,w,2,"#host",()=>c.directiveRegistry,!0,0);Ih(f,p,M),hr(p,w),jh(c,w,M),ph(c,M,w),ig(c,M),n!==void 0&&hD(M,this.ngContentSelectors,n),N=Fe(M.index,w),w[J]=N[J],yu(c,w,null)}catch(M){throw N!==null&&hc(N),hc(w),M}finally{W(23),as()}return new Ss(this.componentType,w,!!m)}finally{D(a)}}};function pD(e,t,n,r){let o=e?["ng-version","20.3.18"]:kb(t.selectors[0]),i=null,s=null,a=0;if(n)for(let u of n)a+=u[kc].requiredVars,u.create&&(u.targetIdx=0,(i??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(r)for(let u=0;u<r.length;u++){let d=r[u];if(typeof d!="function")for(let f of d.bindings){a+=f[kc].requiredVars;let p=u+1;f.create&&(f.targetIdx=p,(i??=[]).push(f)),f.update&&(f.targetIdx=p,(s??=[]).push(f))}}let l=[t];if(r)for(let u of r){let d=typeof u=="function"?u:u.type,f=Al(d);l.push(f)}return au(0,null,fD(i,s),1,a,l,null,null,null,[o],null)}function fD(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let r of e)r.create();if(n&2&&t)for(let r of t)r.update()}}function Nf(e){let t=e[kc].kind;return t==="input"||t==="twoWay"}var Ss=class extends tg{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=so(n[E],ue),this.location=Gc(this._tNode,n),this.instance=Fe(this._tNode.index,n)[J],this.hostView=this.changeDetectorRef=new En(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,i=vu(r,o[E],o,t,n);this.previousInputValues.set(t,n);let s=Fe(r.index,o);wu(s,1)}get injector(){return new Dn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function hD(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var So=(()=>{class e{static __NG_ELEMENT_ID__=gD}return e})();function gD(){let e=be();return vD(e,B())}var mD=So,lg=class extends mD{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Gc(this._hostTNode,this._hostLView)}get injector(){return new Dn(this._hostTNode,this._hostLView)}get parentInjector(){let t=zc(this._hostTNode,this._hostLView);if(zf(t)){let n=bs(t,this._hostLView),r=ys(t),o=n[E].data[r+8];return new Dn(o,n)}else return new Dn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Rf(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-Y}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=Ac(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,o,ho(this._hostTNode,s)),a}createComponent(t,n,r,o,i,s,a){let l=t&&!Cy(t),c;if(l)c=n;else{let N=n||{};c=N.index,r=N.injector,o=N.projectableNodes,i=N.environmentInjector||N.ngModuleRef,s=N.directives,a=N.bindings}let u=l?t:new gr(Ot(t)),d=r||this.parentInjector;if(!i&&u.ngModule==null){let M=(l?d:this.parentInjector).get(re,null);M&&(i=M)}let f=Ot(u.componentType??{}),p=Ac(this._lContainer,f?.id??null),m=p?.firstChild??null,w=u.create(d,o,m,i,s,a);return this.insertImpl(w.hostView,c,ho(this._hostTNode,p)),w}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Mp(o)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let l=o[oe],c=new lg(l,l[Le],l[oe]);c.detach(c.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return Us(s,o,i,r),t.attachToViewContainerRef(),Sl(oc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Rf(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=mo(this._lContainer,n);r&&(eo(oc(this._lContainer),n),Ws(r[E],r))}detach(t){let n=this._adjustIndex(t,-1),r=mo(this._lContainer,n);return r&&eo(oc(this._lContainer),n)!=null?new En(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Rf(e){return e[oo]}function oc(e){return e[oo]||(e[oo]=[])}function vD(e,t){let n,r=t[e.index];return qe(r)?n=r:(n=Kh(r,t,null,e),t[e.index]=n,cu(t,n)),bD(n,t,e,r),new lg(n,e,t)}function yD(e,t){let n=e[G],r=n.createComment(""),o=ze(t,e),i=n.parentNode(o);return Cs(n,i,r,n.nextSibling(o),!1),r}var bD=CD,wD=()=>!1;function DD(e,t,n){return wD(e,t,n)}function CD(e,t,n,r){if(e[Pt])return;let o;n.type&8?o=Pe(r):o=yD(t,n),e[Pt]=o}var mr=class{},qs=class{};var Ts=class extends mr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new _s(this);constructor(t,n,r,o=!0){super(),this.ngModuleType=t,this._parent=n;let i=xl(t);this._bootstrapComponents=_h(i.bootstrap),this._r3Injector=Zl(t,n,[{provide:mr,useValue:this},{provide:_o,useValue:this.componentFactoryResolver},...r],ht(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Ms=class extends qs{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new Ts(this.moduleType,t,[])}};var vo=class extends mr{injector;componentFactoryResolver=new _s(this);instance=null;constructor(t){super();let n=new cn([...t.providers,{provide:mr,useValue:this},{provide:_o,useValue:this.componentFactoryResolver}],t.parent||no(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function To(e,t,n=null){return new vo({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var ID=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Nl(!1,n.type),o=r.length>0?To([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:e,providedIn:"environment",factory:()=>new e(_(re))})}return e})();function It(e){return bo(()=>{let t=cg(e),n=x(g({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===Yc.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(ID).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||bt.Emulated,styles:e.styles||Ce,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Ut("NgStandalone"),ug(n);let r=e.dependencies;return n.directiveDefs=kf(r,ED),n.pipeDefs=kf(r,yp),n.id=TD(n),n})}function ED(e){return Ot(e)||Al(e)}function Et(e){return bo(()=>({type:e.type,bootstrap:e.bootstrap||Ce,declarations:e.declarations||Ce,imports:e.imports||Ce,exports:e.exports||Ce,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function _D(e,t){if(e==null)return kt;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,a,l;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i,l=o[3]||null):(i=o,s=o,a=Bs.None,l=null),n[i]=[r,a,l],t[i]=s}return n}function SD(e){if(e==null)return kt;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function je(e){return bo(()=>{let t=cg(e);return ug(t),t})}function cg(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||kt,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Ce,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:_D(e.inputs,t),outputs:SD(e.outputs),debugInfo:null}}function ug(e){e.features?.forEach(t=>t(e))}function kf(e,t){return e?()=>{let n=typeof e=="function"?e():e,r=[];for(let o of n){let i=t(o);i!==null&&r.push(i)}return r}:null}function TD(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function MD(e){return Object.getPrototypeOf(e.prototype).constructor}function xn(e){let t=MD(e.type),n=!0,r=[e];for(;t;){let o;if(nt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new v(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);let s=e;s.inputs=ic(e.inputs),s.declaredInputs=ic(e.declaredInputs),s.outputs=ic(e.outputs);let a=o.hostBindings;a&&kD(e,a);let l=o.viewQuery,c=o.contentQueries;if(l&&ND(e,l),c&&RD(e,c),xD(e,o),dp(e.outputs,o.outputs),nt(o)&&o.data.animation){let u=e.data;u.animation=(u.animation||[]).concat(o.data.animation)}}let i=o.features;if(i)for(let s=0;s<i.length;s++){let a=i[s];a&&a.ngInherit&&a(e),a===xn&&(n=!1)}}t=Object.getPrototypeOf(t)}AD(r)}function xD(e,t){for(let n in t.inputs){if(!t.inputs.hasOwnProperty(n)||e.inputs.hasOwnProperty(n))continue;let r=t.inputs[n];r!==void 0&&(e.inputs[n]=r,e.declaredInputs[n]=t.declaredInputs[n])}}function AD(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){let o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=fo(o.hostAttrs,n=fo(n,o.hostAttrs))}}function ic(e){return e===kt?{}:e===Ce?[]:e}function ND(e,t){let n=e.viewQuery;n?e.viewQuery=(r,o)=>{t(r,o),n(r,o)}:e.viewQuery=t}function RD(e,t){let n=e.contentQueries;n?e.contentQueries=(r,o,i)=>{t(r,o,i),n(r,o,i)}:e.contentQueries=t}function kD(e,t){let n=e.hostBindings;n?e.hostBindings=(r,o)=>{t(r,o),n(r,o)}:e.hostBindings=t}function OD(e,t,n,r,o,i,s,a){if(n.firstCreatePass){e.mergedAttrs=fo(e.mergedAttrs,e.attrs);let u=e.tView=au(2,e,o,i,s,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,e),u.queries=n.queries.embeddedTView(e))}a&&(e.flags|=a),lr(e,!1);let l=LD(n,t,e,r);ls()&&gu(n,t,l,e),hr(l,t);let c=Kh(l,t,l,e);t[r+ue]=c,cu(t,c),DD(c,e,t)}function xs(e,t,n,r,o,i,s,a,l,c,u){let d=n+ue,f;if(t.firstCreatePass){if(f=Du(t,d,4,s||null,a||null),c!=null){let p=Vt(t.consts,c);f.localNames=[];for(let m=0;m<p.length;m+=2)f.localNames.push(p[m],-1)}}else f=t.data[d];return OD(f,e,t,n,r,o,i,l),c!=null&&Bh(e,f,u),f}var LD=PD;function PD(e,t,n,r){return cs(!0),t[G].createComment("")}var zs=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var Cu=new y("");function An(e){return!!e&&typeof e.then=="function"}function dg(e){return!!e&&typeof e.subscribe=="function"}var pg=new y("");var Iu=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=h(pg,{optional:!0})??[];injector=h(fe);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=he(this.injector,o);if(An(i))n.push(i);else if(dg(i)){let s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Gs=new y("");function fg(){Ua(()=>{let e="";throw new v(600,e)})}function hg(e){return e.isBoundToModule}var FD=10;var _t=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=h(Te);afterRenderManager=h(kh);zonelessEnabled=h(dr);rootEffectScheduler=h(co);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new K;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=h(yt);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(A(n=>!n))}constructor(){h(Eo,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=h(re);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=fe.NULL){return this._injector.get(X).run(()=>{W(10);let s=n instanceof $s;if(!this._injector.get(Iu).done){let m="";throw new v(405,m)}let l;s?l=n:l=this._injector.get(_o).resolveComponentFactory(n),this.componentTypes.push(l.componentType);let c=hg(l)?void 0:this._injector.get(mr),u=r||l.selector,d=l.create(o,[],u,c),f=d.location.nativeElement,p=d.injector.get(Cu,null);return p?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),po(this.components,d),p?.unregisterApplication(f)}),this._loadComponent(d),W(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){W(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(du.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new v(101,!1);let n=D(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,D(n),this.afterTick.next(),W(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(_n,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<FD;)W(14),this.synchronizeOnce(),W(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!ao(o))continue;let i=r&&!this.zonelessEnabled?0:1;zh(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>ao(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;po(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(Gs,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>po(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new v(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function po(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Mo(e,t,n,r){let o=B(),i=ur();if(Mn(o,i,t)){let s=_e(),a=Yl();vw(a,o,e,t,n,r)}return Mo}var IR=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Oc=class{destroy(t){}updateValue(t,n){}swap(t,n){let r=Math.min(t,n),o=Math.max(t,n),i=this.detach(o);if(o-r>1){let s=this.detach(r);this.attach(r,i),this.attach(o,s)}else this.attach(r,i)}move(t,n){this.attach(n,this.detach(t))}};function sc(e,t,n,r,o){return e===n&&Object.is(t,r)?1:Object.is(o(e,t),o(n,r))?-1:0}function VD(e,t,n){let r,o,i=0,s=e.length-1,a=void 0;if(Array.isArray(t)){let l=t.length-1;for(;i<=s&&i<=l;){let c=e.at(i),u=t[i],d=sc(i,c,i,u,n);if(d!==0){d<0&&e.updateValue(i,u),i++;continue}let f=e.at(s),p=t[l],m=sc(s,f,l,p,n);if(m!==0){m<0&&e.updateValue(s,p),s--,l--;continue}let w=n(i,c),N=n(s,f),M=n(i,u);if(Object.is(M,N)){let Qt=n(l,p);Object.is(Qt,w)?(e.swap(i,s),e.updateValue(s,p),l--,s--):e.move(s,i),e.updateValue(i,u),i++;continue}if(r??=new As,o??=Lf(e,i,s,n),Lc(e,r,i,M))e.updateValue(i,u),i++,s++;else if(o.has(M))r.set(w,e.detach(i)),s--;else{let Qt=e.create(i,t[i]);e.attach(i,Qt),i++,s++}}for(;i<=l;)Of(e,r,n,i,t[i]),i++}else if(t!=null){let l=t[Symbol.iterator](),c=l.next();for(;!c.done&&i<=s;){let u=e.at(i),d=c.value,f=sc(i,u,i,d,n);if(f!==0)f<0&&e.updateValue(i,d),i++,c=l.next();else{r??=new As,o??=Lf(e,i,s,n);let p=n(i,d);if(Lc(e,r,i,p))e.updateValue(i,d),i++,s++,c=l.next();else if(!o.has(p))e.attach(i,e.create(i,d)),i++,s++,c=l.next();else{let m=n(i,u);r.set(m,e.detach(i)),s--}}}for(;!c.done;)Of(e,r,n,e.length,c.value),c=l.next()}for(;i<=s;)e.destroy(e.detach(s--));r?.forEach(l=>{e.destroy(l)})}function Lc(e,t,n,r){return t!==void 0&&t.has(r)?(e.attach(n,t.get(r)),t.delete(r),!0):!1}function Of(e,t,n,r,o){if(Lc(e,t,r,n(r,o)))e.updateValue(r,o);else{let i=e.create(r,o);e.attach(r,i)}}function Lf(e,t,n,r){let o=new Set;for(let i=t;i<=n;i++)o.add(r(i,e.at(i)));return o}var As=class{kvMap=new Map;_vMap=void 0;has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(r);)r=o.get(r);o.set(r,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,r]of this.kvMap)if(t(r,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(r);)r=o.get(r),t(r,n)}}};function $t(e,t,n,r,o,i,s,a){Ut("NgControlFlow");let l=B(),c=_e(),u=Vt(c.consts,i);return xs(l,c,e,t,n,r,o,u,256,s,a),Eu}function Eu(e,t,n,r,o,i,s,a){Ut("NgControlFlow");let l=B(),c=_e(),u=Vt(c.consts,i);return xs(l,c,e,t,n,r,o,u,512,s,a),Eu}function qt(e,t){Ut("NgControlFlow");let n=B(),r=ur(),o=n[r]!==it?n[r]:-1,i=o!==-1?Ns(n,ue+o):void 0,s=0;if(Mn(n,r,e)){let a=D(null);try{if(i!==void 0&&Jh(i,s),e!==-1){let l=ue+e,c=Ns(n,l),u=jc(n[E],l),d=eg(c,u,n),f=bu(n,u,t,{dehydratedView:d});Us(c,f,s,ho(u,d))}}finally{D(a)}}else if(i!==void 0){let a=Qh(i,s);a!==void 0&&(a[J]=t)}}var Pc=class{lContainer;$implicit;$index;constructor(t,n,r){this.lContainer=t,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-Y}};function xo(e,t){return t}var Fc=class{hasEmptyBlock;trackByFn;liveCollection;constructor(t,n,r){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=r}};function br(e,t,n,r,o,i,s,a,l,c,u,d,f){Ut("NgControlFlow");let p=B(),m=_e(),w=l!==void 0,N=B(),M=a?s.bind(N[Ie][J]):s,Qt=new Fc(w,M);N[ue+e]=Qt,xs(p,m,e+1,t,n,r,o,Vt(m.consts,i),256),w&&xs(p,m,e+2,l,c,u,d,Vt(m.consts,f),512)}var Vc=class extends Oc{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(t,n,r){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=r}get length(){return this.lContainer.length-Y}at(t){return this.getLView(t)[J].$implicit}attach(t,n){let r=n[or];this.needsIndexUpdate||=t!==this.length,Us(this.lContainer,n,t,ho(this.templateTNode,r)),jD(this.lContainer,t)}detach(t){return this.needsIndexUpdate||=t!==this.length-1,BD(this.lContainer,t),WD(this.lContainer,t)}create(t,n){let r=Ac(this.lContainer,this.templateTNode.tView.ssrId),o=bu(this.hostLView,this.templateTNode,new Pc(this.lContainer,n,t),{dehydratedView:r});return this.operationsCounter?.recordCreate(),o}destroy(t){Ws(t[E],t),this.operationsCounter?.recordDestroy()}updateValue(t,n){this.getLView(t)[J].$implicit=n}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[J].$index=t}getLView(t){return HD(this.lContainer,t)}};function wr(e){let t=D(null),n=jt();try{let r=B(),o=r[E],i=r[n],s=n+1,a=Ns(r,s);if(i.liveCollection===void 0){let c=jc(o,s);i.liveCollection=new Vc(a,r,c)}else i.liveCollection.reset();let l=i.liveCollection;if(VD(l,e,i.trackByFn),l.updateIndexes(),i.hasEmptyBlock){let c=ur(),u=l.length===0;if(Mn(r,c,u)){let d=n+2,f=Ns(r,d);if(u){let p=jc(o,d),m=eg(f,p,r),w=bu(r,p,void 0,{dehydratedView:m});Us(f,w,0,ho(p,m))}else o.firstUpdatePass&&Hw(f),Jh(f,0)}}}finally{D(t)}}function Ns(e,t){return e[t]}function jD(e,t){if(e.length<=Y)return;let n=Y+t,r=e[n],o=r?r[vn]:void 0;if(r&&o&&o.detachedLeaveAnimationFns&&o.detachedLeaveAnimationFns.length>0){let i=r[mt];$b(i,o),In.delete(r),o.detachedLeaveAnimationFns=void 0}}function BD(e,t){if(e.length<=Y)return;let n=Y+t,r=e[n],o=r?r[vn]:void 0;o&&o.leave&&o.leave.size>0&&(o.detachedLeaveAnimationFns=[])}function WD(e,t){return mo(e,t)}function HD(e,t){return Qh(e,t)}function jc(e,t){return so(e,t)}function zt(e,t,n){let r=B(),o=ur();if(Mn(r,o,t)){let i=_e(),s=Yl();uw(s,r,e,t,r[G],n)}return zt}function Pf(e,t,n,r,o){vu(t,e,n,o?"class":"style",r)}function F(e,t,n,r){let o=B(),i=o[E],s=e+ue,a=i.firstCreatePass?og(s,o,2,t,mw,Pp(),n,r):i.data[s];if(ww(a,o,e,t,UD),ns(a)){let l=o[E];jh(l,o,a),ph(l,a,o)}return r!=null&&Bh(o,a),F}function k(){let e=_e(),t=be(),n=Dw(t);return e.firstCreatePass&&ig(e,n),Vp(n)&&jp(),Lp(),n.classesWithoutHost!=null&&xy(n)&&Pf(e,n,B(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&Ay(n)&&Pf(e,n,B(),n.stylesWithoutHost,!1),k}function Me(e,t,n,r){return F(e,t,n,r),k(),Me}var UD=(e,t,n,r,o)=>(cs(!0),wh(t[G],r,Xp()));var Ao="en-US";var $D=Ao;function gg(e){typeof e=="string"&&($D=e.toLowerCase().replace(/_/g,"-"))}function Gt(e,t,n){let r=B(),o=_e(),i=be();return qD(o,r,r[G],i,e,t,n),Gt}function qD(e,t,n,r,o,i,s){let a=!0,l=null;if((r.type&3||s)&&(l??=rc(r,t,i),oD(r,e,t,s,n,o,i,l)&&(a=!1)),a){let c=r.outputs?.[o],u=r.hostDirectiveOutputs?.[o];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],p=u[d+1];l??=rc(r,t,i),Af(r,t,f,p,o,l)}if(c&&c.length)for(let d of c)l??=rc(r,t,i),Af(r,t,d,o,o,l)}}function Dr(e=1){return Jp(e)}function fs(e,t){return e<<17|t<<2}function Sn(e){return e>>17&32767}function zD(e){return(e&2)==2}function GD(e,t){return e&131071|t<<17}function Bc(e){return e|2}function vr(e){return(e&131068)>>2}function ac(e,t){return e&-131069|t<<2}function YD(e){return(e&1)===1}function Wc(e){return e|1}function ZD(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Sn(s),l=vr(s);e[r]=n;let c=!1,u;if(Array.isArray(n)){let d=n;u=d[1],(u===null||rr(d,u)>0)&&(c=!0)}else u=n;if(o)if(l!==0){let f=Sn(e[a+1]);e[r+1]=fs(f,a),f!==0&&(e[f+1]=ac(e[f+1],r)),e[a+1]=GD(e[a+1],r)}else e[r+1]=fs(a,0),a!==0&&(e[a+1]=ac(e[a+1],r)),a=r;else e[r+1]=fs(l,0),a===0?a=r:e[l+1]=ac(e[l+1],r),l=r;c&&(e[r+1]=Bc(e[r+1])),Ff(e,u,r,!0),Ff(e,u,r,!1),KD(t,u,e,r,i),s=fs(a,l),i?t.classBindings=s:t.styleBindings=s}function KD(e,t,n,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof t=="string"&&rr(i,t)>=0&&(n[r+1]=Wc(n[r+1]))}function Ff(e,t,n,r){let o=e[n+1],i=t===null,s=r?Sn(o):vr(o),a=!1;for(;s!==0&&(a===!1||i);){let l=e[s],c=e[s+1];QD(l,t)&&(a=!0,e[s+1]=r?Wc(c):Bc(c)),s=r?Sn(c):vr(c)}a&&(e[n+1]=r?Bc(o):Wc(o))}function QD(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?rr(e,t)>=0:!1}function No(e,t,n){return mg(e,t,n,!1),No}function Nn(e,t){return mg(e,t,null,!0),Nn}function mg(e,t,n,r){let o=B(),i=_e(),s=$p(2);if(i.firstUpdatePass&&XD(i,e,s,r),t!==it&&Mn(o,s,t)){let a=i.data[jt()];oC(i,a,o,o[G],e,o[s+1]=iC(t,n),r,s)}}function JD(e,t){return t>=e.expandoStartIndex}function XD(e,t,n,r){let o=e.data;if(o[n+1]===null){let i=o[jt()],s=JD(e,n);sC(i,r)&&t===null&&!s&&(t=!1),t=eC(o,i,t,r),ZD(o,i,t,n,s,r)}}function eC(e,t,n,r){let o=Yp(e),i=r?t.residualClasses:t.residualStyles;if(o===null)(r?t.classBindings:t.styleBindings)===0&&(n=lc(null,e,t,n,r),n=yo(n,t.attrs,r),i=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==o)if(n=lc(o,e,t,n,r),i===null){let l=tC(e,t,r);l!==void 0&&Array.isArray(l)&&(l=lc(null,e,t,l[1],r),l=yo(l,t.attrs,r),nC(e,t,r,l))}else i=rC(e,t,r)}return i!==void 0&&(r?t.residualClasses=i:t.residualStyles=i),n}function tC(e,t,n){let r=n?t.classBindings:t.styleBindings;if(vr(r)!==0)return e[Sn(r)]}function nC(e,t,n,r){let o=n?t.classBindings:t.styleBindings;e[Sn(o)]=r}function rC(e,t,n){let r,o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++){let s=e[i].hostAttrs;r=yo(r,s,n)}return yo(r,t.attrs,n)}function lc(e,t,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=t[a],r=yo(r,i.hostAttrs,o),i!==e);)a++;return e!==null&&(n.directiveStylingLast=a),r}function yo(e,t,n){let r=n?1:2,o=-1;if(t!==null)for(let i=0;i<t.length;i++){let s=t[i];typeof s=="number"?o=s:o===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),vp(e,s,n?!0:t[++i]))}return e===void 0?null:e}function oC(e,t,n,r,o,i,s,a){if(!(t.type&3))return;let l=e.data,c=l[a+1],u=YD(c)?Vf(l,t,n,o,vr(c),s):void 0;if(!Rs(u)){Rs(i)||zD(c)&&(i=Vf(l,null,n,o,a,s));let d=Vl(jt(),n);iw(r,s,d,o,i)}}function Vf(e,t,n,r,o,i){let s=t===null,a;for(;o>0;){let l=e[o],c=Array.isArray(l),u=c?l[1]:l,d=u===null,f=n[o+1];f===it&&(f=d?Ce:void 0);let p=d?Xi(f,r):u===r?f:void 0;if(c&&!Rs(p)&&(p=Xi(l,r)),Rs(p)&&(a=p,s))return a;let m=e[o+1];o=s?Sn(m):vr(m)}if(t!==null){let l=i?t.residualClasses:t.residualStyles;l!=null&&(a=Xi(l,r))}return a}function Rs(e){return e!==void 0}function iC(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=ht(Ye(e)))),e}function sC(e,t){return(e.flags&(t?8:16))!==0}function U(e,t=""){let n=B(),r=_e(),o=e+ue,i=r.firstCreatePass?Du(r,o,1,t,null):r.data[o],s=aC(r,n,i,t,e);n[o]=s,ls()&&gu(r,n,s,i),lr(i,!1)}var aC=(e,t,n,r,o)=>(cs(!0),mb(t[G],r));function lC(e,t,n,r=""){return Mn(e,ur(),n)?t+nr(n)+r:it}function Be(e){return Cr("",e),Be}function Cr(e,t,n){let r=B(),o=lC(r,e,t,n);return o!==it&&cC(r,jt(),o),Cr}function cC(e,t,n){let r=Vl(t,e);vb(e[G],r,n)}function uC(e,t,n){let r=_e();if(r.firstCreatePass){let o=nt(e);Hc(n,r.data,r.blueprint,o,!0),Hc(t,r.data,r.blueprint,o,!1)}}function Hc(e,t,n,r,o){if(e=ae(e),Array.isArray(e))for(let i=0;i<e.length;i++)Hc(e[i],t,n,r,o);else{let i=_e(),s=B(),a=be(),l=ln(e)?e:ae(e.provide),c=kl(e),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(ln(e)||!e.multi){let p=new Cn(c,o,$,null),m=uc(l,t,o?u:u+f,d);m===-1?(pc(ws(a,s),i,l),cc(i,e,t.length),t.push(l),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(p),s.push(p)):(n[m]=p,s[m]=p)}else{let p=uc(l,t,u+f,d),m=uc(l,t,u,u+f),w=p>=0&&n[p],N=m>=0&&n[m];if(o&&!N||!o&&!w){pc(ws(a,s),i,l);let M=fC(o?pC:dC,n.length,o,r,c,e);!o&&N&&(n[m].providerFactory=M),cc(i,e,t.length,0),t.push(l),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(M),s.push(M)}else{let M=vg(n[o?m:p],c,!o&&r);cc(i,e,p>-1?p:m,M)}!o&&r&&N&&n[m].componentProviders++}}}function cc(e,t,n,r){let o=ln(t),i=Ip(t);if(o||i){let l=(i?ae(t.useClass):t).prototype.ngOnDestroy;if(l){let c=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){let u=c.indexOf(n);u===-1?c.push(n,[r,l]):c[u+1].push(r,l)}else c.push(n,l)}}}function vg(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function uc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function dC(e,t,n,r,o){return Uc(this.multi,[])}function pC(e,t,n,r,o){let i=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Ds(r,r[E],this.providerFactory.index,o);s=l.slice(0,a),Uc(i,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Uc(i,s);return s}function Uc(e,t){for(let n=0;n<e.length;n++){let r=e[n];t.push(r())}return t}function fC(e,t,n,r,o,i){let s=new Cn(e,n,$,null);return s.multi=[],s.index=t,s.componentProviders=0,vg(s,o,r&&!n),s}function Ys(e,t=[]){return n=>{n.providersResolver=(r,o)=>uC(r,o?o(e):e,t)}}function _u(e,t,n,r){return gC(B(),Hp(),e,t,n,r)}function hC(e,t){let n=e[t];return n===it?void 0:n}function gC(e,t,n,r,o,i){let s=t+n;return Mn(e,s,o)?rD(e,s+1,i?r.call(i,o):r(o)):hC(e,s+1)}var ks=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Su=(()=>{class e{compileModuleSync(n){return new Ms(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=xl(n),i=_h(o.declarations).reduce((s,a)=>{let l=Ot(a);return l&&s.push(new gr(l)),s},[]);return new ks(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var mC=(()=>{class e{zone=h(X);changeDetectionScheduler=h(gt);applicationRef=h(_t);applicationErrorHandler=h(Te);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(n){this.applicationErrorHandler(n)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),yg=new y("",{factory:()=>!1});function Tu({ngZoneFactory:e,ignoreChangesOutsideZone:t,scheduleInRootZone:n}){return e??=()=>new X(x(g({},xu()),{scheduleInRootZone:n})),[{provide:X,useFactory:e},{provide:Xe,multi:!0,useFactory:()=>{let r=h(mC,{optional:!0});return()=>r.initialize()}},{provide:Xe,multi:!0,useFactory:()=>{let r=h(vC);return()=>{r.initialize()}}},t===!0?{provide:Jl,useValue:!0}:[],{provide:Xl,useValue:n??Ah},{provide:Te,useFactory:()=>{let r=h(X),o=h(re),i;return s=>{r.runOutsideAngular(()=>{o.destroyed&&!i?setTimeout(()=>{throw s}):(i??=o.get(Ue),i.handleError(s))})}}}]}function Mu(e){let t=e?.ignoreChangesOutsideZone,n=e?.scheduleInRootZone,r=Tu({ngZoneFactory:()=>{let o=xu(e);return o.scheduleInRootZone=n,o.shouldCoalesceEventChangeDetection&&Ut("NgZone_CoalesceEvent"),new X(o)},ignoreChangesOutsideZone:t,scheduleInRootZone:n});return Lt([{provide:yg,useValue:!0},{provide:dr,useValue:!1},r])}function xu(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var vC=(()=>{class e{subscription=new Z;initialized=!1;zone=h(X);pendingTasks=h(yt);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{X.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{X.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var bg=(()=>{class e{applicationErrorHandler=h(Te);appRef=h(_t);taskService=h(yt);ngZone=h(X);zonelessEnabled=h(dr);tracing=h(Eo,{optional:!0});disableScheduling=h(Jl,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Z;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Is):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(h(Xl,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Es||!this.zoneIsDefined)}notify(n){if(!this.zonelessEnabled&&n===5)return;let r=!1;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,r=!0;break}case 12:{this.appRef.dirtyFlags|=16,r=!0;break}case 13:{this.appRef.dirtyFlags|=2,r=!0;break}case 11:{r=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(r))return;let o=this.useMicrotaskScheduler?bf:Nh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>o(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>o(()=>this.tick()))}shouldScheduleTick(n){return!(this.disableScheduling&&!n||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Is+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.taskService.remove(n),this.applicationErrorHandler(r)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,bf(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function yC(){return typeof $localize<"u"&&$localize.locale||Ao}var Au=new y("",{providedIn:"root",factory:()=>h(Au,{optional:!0,skipSelf:!0})||yC()});function le(e){return sp(e)}function xe(e,t){return wi(e,t?.equal)}var Nu=class{[pe];constructor(t){this[pe]=t}destroy(){this[pe].destroy()}};function Ir(e,t){let n=t?.injector??h(fe),r=t?.manualCleanup!==!0?n.get(Se):null,o,i=n.get(lo,null,{optional:!0}),s=n.get(gt);return i!==null?(o=DC(i.view,s,e),r instanceof Jr&&r._lView===i.view&&(r=null)):o=CC(e,n.get(co),s),o.injector=n,r!==null&&(o.onDestroyFn=r.onDestroy(()=>o.destroy())),new Nu(o)}var wg=x(g({},ap),{cleanupFns:void 0,zone:null,onDestroyFn:wn,run(){let e=cr(!1);try{lp(this)}finally{cr(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=D(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],D(e)}}}),bC=x(g({},wg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){en(this),this.onDestroyFn(),this.cleanup(),this.scheduler.remove(this)}}),wC=x(g({},wg),{consumerMarkedDirty(){this.view[I]|=8192,bn(this.view),this.notifier.notify(13)},destroy(){en(this),this.onDestroyFn(),this.cleanup(),this.view[vt]?.delete(this)}});function DC(e,t,n){let r=Object.create(wC);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=t,r.fn=Dg(r,n),e[vt]??=new Set,e[vt].add(r),r.consumerMarkedDirty(r),r}function CC(e,t,n){let r=Object.create(bC);return r.fn=Dg(r,e),r.scheduler=t,r.notifier=n,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Dg(e,t){return()=>{t(n=>(e.cleanupFns??=[]).push(n))}}var Sg=Symbol("InputSignalNode#UNSET"),BC=x(g({},Di),{transformFn:void 0,applyValueToInputSignal(e,t){Un(e,t)}});function Tg(e,t){let n=Object.create(BC);n.value=e,n.transformFn=t?.transform;function r(){if(jn(n),n.value===Sg){let o=null;throw new v(-950,o)}return n.value}return r[pe]=n,r}var Ks=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>wo(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},WC=new y("");WC.__NG_ELEMENT_ID__=e=>{let t=be();if(t===null)throw new v(204,!1);if(t.type&2)return t.value;if(e&8)return null;throw new v(204,!1)};function Cg(e,t){return Tg(e,t)}function HC(e){return Tg(Sg,e)}var Mg=(Cg.required=HC,Cg);var Ru=new y(""),UC=new y("");function Ro(e){return!e.moduleRef}function $C(e){let t=Ro(e)?e.r3Injector:e.moduleRef.injector,n=t.get(X);return n.run(()=>{Ro(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(Te),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),Ro(e)){let i=()=>t.destroy(),s=e.platformInjector.get(Ru);s.add(i),t.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(Ru);s.add(i),e.moduleRef.onDestroy(()=>{po(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return zC(r,n,()=>{let i=t.get(yt),s=i.add(),a=t.get(Iu);return a.runInitializers(),a.donePromise.then(()=>{let l=t.get(Au,Ao);if(gg(l||Ao),!t.get(UC,!0))return Ro(e)?t.get(_t):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Ro(e)){let u=t.get(_t);return e.rootComponent!==void 0&&u.bootstrap(e.rootComponent),u}else return qC?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>void i.remove(s))})})}var qC;function zC(e,t,n){try{let r=n();return An(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e(r)),r}}var Zs=null;function GC(e=[],t){return fe.create({name:t,providers:[{provide:to,useValue:"platform"},{provide:Ru,useValue:new Set([()=>Zs=null])},...e]})}function YC(e=[]){if(Zs)return Zs;let t=GC(e);return Zs=t,fg(),ZC(t),t}function ZC(e){let t=e.get(Ls,null);he(e,()=>{t?.forEach(n=>n())})}var Er=(()=>{class e{static __NG_ELEMENT_ID__=KC}return e})();function KC(e){return QC(be(),B(),(e&16)===16)}function QC(e,t,n){if(Ft(e)&&!n){let r=Fe(e.index,t);return new En(r,r)}else if(e.type&175){let r=t[Ie];return new En(r,t)}return null}function xg(e){let{rootComponent:t,appProviders:n,platformProviders:r,platformRef:o}=e;W(8);try{let i=o?.injector??YC(r),s=[Tu({}),{provide:gt,useExisting:bg},tf,...n||[]],a=new vo({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return $C({r3Injector:a.injector,platformInjector:i,rootComponent:t})}catch(i){return Promise.reject(i)}finally{W(9)}}function _r(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}var Rg=null;function Ae(){return Rg}function Ou(e){Rg??=e}var ko=class{},Lu=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>h(kg),providedIn:"platform"})}return e})();var kg=(()=>{class e extends Lu{_location;_history;_doc=h(z);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ae().getBaseHref(this._doc)}onPopState(n){let r=Ae().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=Ae().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Og(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function Ag(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function Yt(e){return e&&e[0]!=="?"?`?${e}`:e}var Sr=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>h(Pg),providedIn:"root"})}return e})(),Lg=new y(""),Pg=(()=>{class e extends Sr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??h(z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Og(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+Yt(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+Yt(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+Yt(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(_(Lu),_(Lg,8))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Tr=(()=>{class e{_subject=new K;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=eI(Ag(Ng(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+Yt(r))}normalize(n){return e.stripTrailingSlash(XC(this._basePath,Ng(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Yt(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Yt(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=Yt;static joinWithSlash=Og;static stripTrailingSlash=Ag;static \u0275fac=function(r){return new(r||e)(_(Sr))};static \u0275prov=b({token:e,factory:()=>JC(),providedIn:"root"})}return e})();function JC(){return new Tr(_(Sr))}function XC(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Ng(e){return e.replace(/\/index.html$/,"")}function eI(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var Qs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=Et({type:e});static \u0275inj=Je({})}return e})();function Pu(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var Oo=class{};var Fg="browser";var Lo=class{_doc;constructor(t){this._doc=t}manager},Js=(()=>{class e extends Lo{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(_(z))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),ea=new y(""),Wu=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof Js));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof Js);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new v(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(_(ea),_(X))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Fu="ng-app-id";function Vg(e){for(let t of e)t.remove()}function jg(e,t){let n=t.createElement("style");return n.textContent=e,n}function rI(e,t,n,r){let o=e.head?.querySelectorAll(`style[${Fu}="${t}"],link[${Fu}="${t}"]`);if(o)for(let i of o)i.removeAttribute(Fu),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function ju(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var Hu=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,rI(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,jg);r?.forEach(o=>this.addUsage(o,this.external,ju))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(Vg(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Vg(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,jg(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,ju(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(_(z),_(Os),_(Ps,8),_(Do))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Vu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Uu=/%COMP%/g;var Wg="%COMP%",oI=`_nghost-${Wg}`,iI=`_ngcontent-${Wg}`,sI=!0,aI=new y("",{providedIn:"root",factory:()=>sI});function lI(e){return iI.replace(Uu,e)}function cI(e){return oI.replace(Uu,e)}function Hg(e,t){return t.map(n=>n.replace(Uu,e))}var $u=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(n,r,o,i,s,a,l=null,c=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.platformIsServer=!1,this.defaultRenderer=new Po(n,s,a,this.platformIsServer,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof Xs?o.applyToHost(n):o instanceof Fo&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(r.encapsulation){case bt.Emulated:i=new Xs(l,c,r,this.appId,u,s,a,d,f);break;case bt.ShadowDom:return new Bu(l,c,n,r,s,a,this.nonce,d,f);default:i=new Fo(l,c,r,u,s,a,d,f);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(_(Wu),_(Hu),_(Os),_(aI),_(z),_(X),_(Ps),_(Eo,8))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Po=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o,i){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(Vu[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Bg(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Bg(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new v(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Vu[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Vu[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(Dt.DashCase|Dt.Important)?t.style.setProperty(n,r,o&Dt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&Dt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=Ae().getGlobalEventTarget(this.doc,t),!t))throw new v(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function Bg(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Bu=class extends Po{sharedStylesHost;hostEl;shadowRoot;constructor(t,n,r,o,i,s,a,l,c){super(t,i,s,l,c),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=o.styles;u=Hg(o.id,u);for(let f of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let d=o.getExternalStyles?.();if(d)for(let f of d){let p=ju(f,i);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fo=class extends Po{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,s,a,l,c){super(t,i,s,a,l),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let u=r.styles;this.styles=c?Hg(c,u):u,this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&In.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Xs=class extends Fo{contentAttr;hostAttr;constructor(t,n,r,o,i,s,a,l,c){let u=o+"-"+r.id;super(t,n,r,i,s,a,l,c,u),this.contentAttr=lI(u),this.hostAttr=cI(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}};var ta=class e extends ko{supportsDOMEvents=!0;static makeCurrent(){Ou(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=uI();return n==null?null:dI(n)}resetBaseElement(){Vo=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Pu(document.cookie,t)}},Vo=null;function uI(){return Vo=Vo||document.head.querySelector("base"),Vo?Vo.getAttribute("href"):null}function dI(e){return new URL(e,document.baseURI).pathname}var pI=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Ug=["alt","control","meta","shift"],fI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},hI={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},$g=(()=>{class e extends Lo{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=e.parseEventName(r),a=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ae().onAndCancel(n,s.domEventName,a,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Ug.forEach(c=>{let u=r.indexOf(c);u>-1&&(r.splice(u,1),s+=c+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=fI[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ug.forEach(s=>{if(s!==o){let a=hI[s];a(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(_(z))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function qu(e,t,n){let r=g({rootComponent:e,platformRef:n?.platformRef},gI(t));return xg(r)}function gI(e){return{appProviders:[...wI,...e?.providers??[]],platformProviders:bI}}function mI(){ta.makeCurrent()}function vI(){return new Ue}function yI(){return Zc(document),document}var bI=[{provide:Do,useValue:Fg},{provide:Ls,useValue:mI,multi:!0},{provide:z,useFactory:yI}];var wI=[{provide:to,useValue:"root"},{provide:Ue,useFactory:vI},{provide:ea,useClass:Js,multi:!0,deps:[z]},{provide:ea,useClass:$g,multi:!0,deps:[z]},$u,Hu,Wu,{provide:_n,useExisting:$u},{provide:Oo,useClass:pI},[]];var qg=(()=>{class e{_doc;_dom;constructor(n){this._doc=n,this._dom=Ae()}addTag(n,r=!1){return n?this._getOrCreateElement(n,r):null}addTags(n,r=!1){return n?n.reduce((o,i)=>(i&&o.push(this._getOrCreateElement(i,r)),o),[]):[]}getTag(n){return n&&this._doc.querySelector(`meta[${n}]`)||null}getTags(n){if(!n)return[];let r=this._doc.querySelectorAll(`meta[${n}]`);return r?[].slice.call(r):[]}updateTag(n,r){if(!n)return null;r=r||this._parseSelector(n);let o=this.getTag(r);return o?this._setMetaElementAttributes(n,o):this._getOrCreateElement(n,!0)}removeTag(n){this.removeTagElement(this.getTag(n))}removeTagElement(n){n&&this._dom.remove(n)}_getOrCreateElement(n,r=!1){if(!r){let s=this._parseSelector(n),a=this.getTags(s).filter(l=>this._containsAttributes(n,l))[0];if(a!==void 0)return a}let o=this._dom.createElement("meta");return this._setMetaElementAttributes(n,o),this._doc.getElementsByTagName("head")[0].appendChild(o),o}_setMetaElementAttributes(n,r){return Object.keys(n).forEach(o=>r.setAttribute(this._getMetaKeyMap(o),n[o])),r}_parseSelector(n){let r=n.name?"name":"property";return`${r}="${n[r]}"`}_containsAttributes(n,r){return Object.keys(n).every(o=>r.getAttribute(this._getMetaKeyMap(o))===n[o])}_getMetaKeyMap(n){return DI[n]||n}static \u0275fac=function(r){return new(r||e)(_(z))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),DI={httpEquiv:"http-equiv"},na=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||e)(_(z))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var zu=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=_(CI),o},providedIn:"root"})}return e})(),CI=(()=>{class e extends zu{_doc;constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case Ve.NONE:return r;case Ve.HTML:return ot(r,"HTML")?Ye(r):Vs(this._doc,String(r)).toString();case Ve.STYLE:return ot(r,"Style")?Ye(r):r;case Ve.SCRIPT:if(ot(r,"Script"))return Ye(r);throw new v(5200,!1);case Ve.URL:return ot(r,"URL")?Ye(r):Co(String(r));case Ve.RESOURCE_URL:if(ot(r,"ResourceURL"))return Ye(r);throw new v(5201,!1);default:throw new v(5202,!1)}}bypassSecurityTrustHtml(n){return Jc(n)}bypassSecurityTrustStyle(n){return Xc(n)}bypassSecurityTrustScript(n){return eu(n)}bypassSecurityTrustUrl(n){return tu(n)}bypassSecurityTrustResourceUrl(n){return nu(n)}static \u0275fac=function(r){return new(r||e)(_(z))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var S="primary",Xo=Symbol("RouteTitle"),Qu=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function On(e){return new Qu(e)}function Xg(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],a=e[i];if(s[0]===":")o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function EI(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!st(e[n],t[n]))return!1;return!0}function st(e,t){let n=e?Ju(e):void 0,r=t?Ju(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!em(e[o],t[o]))return!1;return!0}function Ju(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function em(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function tm(e){return e.length>0?e[e.length-1]:null}function Tt(e){return tl(e)?e:An(e)?q(Promise.resolve(e)):C(e)}var _I={exact:rm,subset:om},nm={exact:SI,subset:TI,ignored:()=>!0};function zg(e,t,n){return _I[n.paths](e.root,t.root,n.matrixParams)&&nm[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function SI(e,t){return st(e,t)}function rm(e,t,n){if(!Rn(e.segments,t.segments)||!ia(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!rm(e.children[r],t.children[r],n))return!1;return!0}function TI(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>em(e[n],t[n]))}function om(e,t,n){return im(e,t,t.segments,n)}function im(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!Rn(o,n)||t.hasChildren()||!ia(o,n,r))}else if(e.segments.length===n.length){if(!Rn(e.segments,n)||!ia(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!om(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!Rn(e.segments,o)||!ia(e.segments,o,r)||!e.children[S]?!1:im(e.children[S],t,i,r)}}function ia(e,t,n){return t.every((r,o)=>nm[n](e[o].parameters,r.parameters))}var lt=class{root;queryParams;fragment;_queryParamMap;constructor(t=new V([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=On(this.queryParams),this._queryParamMap}toString(){return AI.serialize(this)}},V=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return sa(this)}},Zt=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=On(this.parameters),this._parameterMap}toString(){return am(this)}};function MI(e,t){return Rn(e,t)&&e.every((n,r)=>st(n.parameters,t[r].parameters))}function Rn(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function xI(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===S&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==S&&(n=n.concat(t(o,r)))}),n}var ei=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>new Ln,providedIn:"root"})}return e})(),Ln=class{parse(t){let n=new ed(t);return new lt(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${jo(t.root,!0)}`,r=kI(t.queryParams),o=typeof t.fragment=="string"?`#${NI(t.fragment)}`:"";return`${n}${r}${o}`}},AI=new Ln;function sa(e){return e.segments.map(t=>am(t)).join("/")}function jo(e,t){if(!e.hasChildren())return sa(e);if(t){let n=e.children[S]?jo(e.children[S],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==S&&r.push(`${o}:${jo(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=xI(e,(r,o)=>o===S?[jo(e.children[S],!1)]:[`${o}:${jo(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[S]!=null?`${sa(e)}/${n[0]}`:`${sa(e)}/(${n.join("//")})`}}function sm(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ra(e){return sm(e).replace(/%3B/gi,";")}function NI(e){return encodeURI(e)}function Xu(e){return sm(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function aa(e){return decodeURIComponent(e)}function Gg(e){return aa(e.replace(/\+/g,"%20"))}function am(e){return`${Xu(e.path)}${RI(e.parameters)}`}function RI(e){return Object.entries(e).map(([t,n])=>`;${Xu(t)}=${Xu(n)}`).join("")}function kI(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${ra(n)}=${ra(o)}`).join("&"):`${ra(n)}=${ra(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var OI=/^[^\/()?;#]+/;function Gu(e){let t=e.match(OI);return t?t[0]:""}var LI=/^[^\/()?;=#]+/;function PI(e){let t=e.match(LI);return t?t[0]:""}var FI=/^[^=?&#]+/;function VI(e){let t=e.match(FI);return t?t[0]:""}var jI=/^[^&#]+/;function BI(e){let t=e.match(jI);return t?t[0]:""}var ed=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new V([],{}):new V([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[S]=new V(t,n)),r}parseSegment(){let t=Gu(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new v(4009,!1);return this.capture(t),new Zt(aa(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=PI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=Gu(this.remaining);o&&(r=o,this.capture(r))}t[aa(n)]=aa(r)}parseQueryParam(t){let n=VI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=BI(this.remaining);s&&(r=s,this.capture(r))}let o=Gg(n),i=Gg(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Gu(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new v(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=S);let s=this.parseChildren();n[i??S]=Object.keys(s).length===1&&s[S]?s[S]:new V([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new v(4011,!1)}};function lm(e){return e.segments.length>0?new V([],{[S]:e}):e}function cm(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=cm(o);if(r===S&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))t[s]=a;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new V(e.segments,t);return WI(n)}function WI(e){if(e.numberOfChildren===1&&e.children[S]){let t=e.children[S];return new V(e.segments.concat(t.segments),t.children)}return e}function Kt(e){return e instanceof lt}function um(e,t,n=null,r=null){let o=dm(e);return pm(o,t,n,r)}function dm(e){let t;function n(i){let s={};for(let l of i.children){let c=n(l);s[l.outlet]=c}let a=new V(i.url,s);return i===e&&(t=a),a}let r=n(e.root),o=lm(r);return t??o}function pm(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return Yu(o,o,o,n,r);let i=HI(t);if(i.toRoot())return Yu(o,o,new V([],{}),n,r);let s=UI(i,o,e),a=s.processChildren?Wo(s.segmentGroup,s.index,i.commands):hm(s.segmentGroup,s.index,i.commands);return Yu(o,s.segmentGroup,a,n,r)}function la(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function $o(e){return typeof e=="object"&&e!=null&&e.outlets}function Yu(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([l,c])=>{i[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;e===t?s=n:s=fm(e,t,n);let a=lm(cm(s));return new lt(a,i,o)}function fm(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=fm(i,t,n)}),new V(e.segments,r)}var ca=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&la(r[0]))throw new v(4003,!1);let o=r.find($o);if(o&&o!==tm(r))throw new v(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function HI(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new ca(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?n=!0:a===".."?t++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new ca(n,t,r)}var Ar=class{segmentGroup;processChildren;index;constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function UI(e,t,n){if(e.isAbsolute)return new Ar(t,!0,0);if(!n)return new Ar(t,!1,NaN);if(n.parent===null)return new Ar(n,!0,0);let r=la(e.commands[0])?0:1,o=n.segments.length-1+r;return $I(n,o,e.numberOfDoubleDots)}function $I(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new v(4005,!1);o=r.segments.length}return new Ar(r,!1,o-i)}function qI(e){return $o(e[0])?e[0].outlets:{[S]:e}}function hm(e,t,n){if(e??=new V([],{}),e.segments.length===0&&e.hasChildren())return Wo(e,t,n);let r=zI(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new V(e.segments.slice(0,r.pathIndex),{});return i.children[S]=new V(e.segments.slice(r.pathIndex),e.children),Wo(i,0,o)}else return r.match&&o.length===0?new V(e.segments,{}):r.match&&!e.hasChildren()?td(e,t,n):r.match?Wo(e,0,o):td(e,t,n)}function Wo(e,t,n){if(n.length===0)return new V(e.segments,{});{let r=qI(n),o={};if(Object.keys(r).some(i=>i!==S)&&e.children[S]&&e.numberOfChildren===1&&e.children[S].segments.length===0){let i=Wo(e.children[S],t,n);return new V(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=hm(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new V(e.segments,o)}}function zI(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],a=n[r];if($o(a))break;let l=`${a}`,c=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!Zg(l,c,s))return i;r+=2}else{if(!Zg(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function td(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if($o(i)){let l=GI(i.outlets);return new V(r,l)}if(o===0&&la(n[0])){let l=e.segments[t];r.push(new Zt(l.path,Yg(n[0]))),o++;continue}let s=$o(i)?i.outlets[S]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&la(a)?(r.push(new Zt(s,Yg(a))),o+=2):(r.push(new Zt(s,{})),o++)}return new V(r,{})}function GI(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=td(new V([],{}),0,r))}),t}function Yg(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Zg(e,t,n){return e==n.path&&st(t,n.parameters)}var Ho="imperative",ie=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(ie||{}),Re=class{id;url;constructor(t,n){this.id=t,this.url=n}},Pn=class extends Re{type=ie.NavigationStart;navigationTrigger;restoredState;constructor(t,n,r="imperative",o=null){super(t,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ct=class extends Re{urlAfterRedirects;type=ie.NavigationEnd;constructor(t,n,r){super(t,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ge=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(ge||{}),qo=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(qo||{}),at=class extends Re{reason;code;type=ie.NavigationCancel;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},St=class extends Re{reason;code;type=ie.NavigationSkipped;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}},Rr=class extends Re{error;target;type=ie.NavigationError;constructor(t,n,r,o){super(t,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},zo=class extends Re{urlAfterRedirects;state;type=ie.RoutesRecognized;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ua=class extends Re{urlAfterRedirects;state;type=ie.GuardsCheckStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},da=class extends Re{urlAfterRedirects;state;shouldActivate;type=ie.GuardsCheckEnd;constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},pa=class extends Re{urlAfterRedirects;state;type=ie.ResolveStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fa=class extends Re{urlAfterRedirects;state;type=ie.ResolveEnd;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ha=class{route;type=ie.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ga=class{route;type=ie.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ma=class{snapshot;type=ie.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},va=class{snapshot;type=ie.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ya=class{snapshot;type=ie.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ba=class{snapshot;type=ie.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Go=class{},kr=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function YI(e){return!(e instanceof Go)&&!(e instanceof kr)}function ZI(e,t){return e.providers&&!e._injector&&(e._injector=To(e.providers,t,`Route: ${e.path}`)),e._injector??t}function Ze(e){return e.outlet||S}function KI(e,t){let n=e.filter(r=>Ze(r)===t);return n.push(...e.filter(r=>Ze(r)!==t)),n}function Pr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var wa=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Pr(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Fr(this.rootInjector)}},Fr=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new wa(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||e)(_(re))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Da=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=nd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=nd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=rd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return rd(t,this._root).map(n=>n.value)}};function nd(e,t){if(e===t.value)return t;for(let n of t.children){let r=nd(e,n);if(r)return r}return null}function rd(e,t){if(e===t.value)return[t];for(let n of t.children){let r=rd(e,n);if(r.length)return r.unshift(t),r}return[]}var Ne=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function xr(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Yo=class extends Da{snapshot;constructor(t,n){super(t),this.snapshot=n,dd(this,t)}toString(){return this.snapshot.toString()}};function gm(e){let t=QI(e),n=new se([new Zt("",{})]),r=new se({}),o=new se({}),i=new se({}),s=new se(""),a=new Ke(n,r,i,s,o,S,e,t.root);return a.snapshot=t.root,new Yo(new Ne(a,[]),t)}function QI(e){let t={},n={},r={},i=new kn([],t,r,"",n,S,e,null,{});return new Zo("",new Ne(i,[]))}var Ke=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,r,o,i,s,a,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(A(c=>c[Xo]))??C(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(t=>On(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(t=>On(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ca(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:g(g({},t.params),e.params),data:g(g({},t.data),e.data),resolve:g(g(g(g({},e.data),t.data),o?.data),e._resolvedData)}:r={params:g({},e.params),data:g({},e.data),resolve:g(g({},e.data),e._resolvedData??{})},o&&vm(o)&&(r.resolve[Xo]=o.title),r}var kn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Xo]}constructor(t,n,r,o,i,s,a,l,c){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=On(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=On(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},Zo=class extends Da{url;constructor(t,n){super(n),this.url=t,dd(this,n)}toString(){return mm(this._root)}};function dd(e,t){t.value._routerState=e,t.children.forEach(n=>dd(e,n))}function mm(e){let t=e.children.length>0?` { ${e.children.map(mm).join(", ")} } `:"";return`${e.value}${t}`}function Zu(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,st(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),st(t.params,n.params)||e.paramsSubject.next(n.params),EI(t.url,n.url)||e.urlSubject.next(n.url),st(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function od(e,t){let n=st(e.params,t.params)&&MI(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||od(e.parent,t.parent))}function vm(e){return typeof e.title=="string"||e.title===null}var ym=new y(""),ti=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new te;deactivateEvents=new te;attachEvents=new te;detachEvents=new te;routerOutletData=Mg();parentContexts=h(Fr);location=h(So);changeDetector=h(Er);inputBinder=h(Sa,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new v(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new v(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new v(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new v(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new id(n,a,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=je({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Wt]})}return e})(),id=class{route;childContexts;parent;outletData;constructor(t,n,r,o){this.route=t,this.childContexts=n,this.parent=r,this.outletData=o}get(t,n){return t===Ke?this.route:t===Fr?this.childContexts:t===ym?this.outletData:this.parent.get(t,n)}},Sa=new y("");var pd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=It({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&Me(0,"router-outlet")},dependencies:[ti],encapsulation:2})}return e})();function fd(e){let t=e.children&&e.children.map(fd),n=t?x(g({},e),{children:t}):g({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==S&&(n.component=pd),n}function JI(e,t,n){let r=Ko(e,t._root,n?n._root:void 0);return new Yo(r,t)}function Ko(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=XI(e,t,n);return new Ne(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Ko(e,a)),s}}let r=eE(t.value),o=t.children.map(i=>Ko(e,i));return new Ne(r,o)}}function XI(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Ko(e,r,o);return Ko(e,r)})}function eE(e){return new Ke(new se(e.url),new se(e.params),new se(e.queryParams),new se(e.fragment),new se(e.data),e.outlet,e.component,e)}var Or=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},bm="ngNavigationCancelingError";function Ia(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=Kt(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=wm(!1,ge.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function wm(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[bm]=!0,n.cancellationCode=t,n}function tE(e){return Dm(e)&&Kt(e.url)}function Dm(e){return!!e&&e[bm]}var nE=(e,t,n,r)=>A(o=>(new sd(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),sd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Zu(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=xr(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=xr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=xr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=xr(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new ba(i.value.snapshot))}),t.children.length&&this.forwardEvent(new va(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(Zu(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Zu(a.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,r)}},Ea=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Nr=class{component;route;constructor(t,n){this.component=t,this.route=n}};function rE(e,t,n){let r=e._root,o=t?t._root:null;return Bo(r,o,n,[r.value])}function oE(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Vr(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!yl(e)?e:t.get(e):r}function Bo(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=xr(t);return e.children.forEach(s=>{iE(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Uo(a,n.getContext(s),o)),o}function iE(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=sE(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new Ea(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Bo(e,t,a?a.children:null,r,o):Bo(e,t,n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new Nr(a.outlet.component,s))}else s&&Uo(t,a,o),o.canActivateChecks.push(new Ea(r)),i.component?Bo(e,null,a?a.children:null,r,o):Bo(e,null,n,r,o);return o}function sE(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!Rn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Rn(e.url,t.url)||!st(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!od(e,t)||!st(e.queryParams,t.queryParams);case"paramsChange":default:return!od(e,t)}}function Uo(e,t,n){let r=xr(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?Uo(s,t.children.getContext(i),n):Uo(s,null,n):Uo(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Nr(t.outlet.component,o)):n.canDeactivateChecks.push(new Nr(null,o)):n.canDeactivateChecks.push(new Nr(null,o))}function ni(e){return typeof e=="function"}function aE(e){return typeof e=="boolean"}function lE(e){return e&&ni(e.canLoad)}function cE(e){return e&&ni(e.canActivate)}function uE(e){return e&&ni(e.canActivateChild)}function dE(e){return e&&ni(e.canDeactivate)}function pE(e){return e&&ni(e.canMatch)}function Cm(e){return e instanceof ut||e?.name==="EmptyError"}var oa=Symbol("INITIAL_VALUE");function Lr(){return ye(e=>Ui(e.map(t=>t.pipe(dt(1),il(oa)))).pipe(A(t=>{for(let n of t)if(n!==!0){if(n===oa)return oa;if(n===!1||fE(n))return n}return!0}),ke(t=>t!==oa),dt(1)))}function fE(e){return Kt(e)||e instanceof Or}function hE(e,t){return ee(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?C(x(g({},n),{guardsResult:!0})):gE(s,r,o,e).pipe(ee(a=>a&&aE(a)?mE(r,i,e,t):C(a)),A(a=>x(g({},n),{guardsResult:a})))})}function gE(e,t,n,r){return q(e).pipe(ee(o=>DE(o.component,o.route,n,t,r)),pt(o=>o!==!0,!0))}function mE(e,t,n,r){return q(t).pipe(Xn(o=>Jn(yE(o.route.parent,r),vE(o.route,r),wE(e,o.path,n),bE(e,o.route,n))),pt(o=>o!==!0,!0))}function vE(e,t){return e!==null&&t&&t(new ya(e)),C(!0)}function yE(e,t){return e!==null&&t&&t(new ma(e)),C(!0)}function bE(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return C(!0);let o=r.map(i=>Gr(()=>{let s=Pr(t)??n,a=Vr(i,s),l=cE(a)?a.canActivate(t,e):he(s,()=>a(t,e));return Tt(l).pipe(pt())}));return C(o).pipe(Lr())}function wE(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>oE(s)).filter(s=>s!==null).map(s=>Gr(()=>{let a=s.guards.map(l=>{let c=Pr(s.node)??n,u=Vr(l,c),d=uE(u)?u.canActivateChild(r,e):he(c,()=>u(r,e));return Tt(d).pipe(pt())});return C(a).pipe(Lr())}));return C(i).pipe(Lr())}function DE(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return C(!0);let s=i.map(a=>{let l=Pr(t)??o,c=Vr(a,l),u=dE(c)?c.canDeactivate(e,t,n,r):he(l,()=>c(e,t,n,r));return Tt(u).pipe(pt())});return C(s).pipe(Lr())}function CE(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return C(!0);let i=o.map(s=>{let a=Vr(s,e),l=lE(a)?a.canLoad(t,n):he(e,()=>a(t,n));return Tt(l)});return C(i).pipe(Lr(),Im(r))}function Im(e){return Qa(ne(t=>{if(typeof t!="boolean")throw Ia(e,t)}),A(t=>t===!0))}function IE(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return C(!0);let i=o.map(s=>{let a=Vr(s,e),l=pE(a)?a.canMatch(t,n):he(e,()=>a(t,n));return Tt(l)});return C(i).pipe(Lr(),Im(r))}var Qo=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},Jo=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Mr(e){return Qn(new Qo(e))}function EE(e){return Qn(new v(4e3,!1))}function _E(e){return Qn(wm(!1,ge.GuardRejected))}var ad=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return C(r);if(o.numberOfChildren>1||!o.children[S])return EE(`${t.redirectTo}`);o=o.children[S]}}applyRedirectCommands(t,n,r,o,i){return SE(n,o,i).pipe(A(s=>{if(s instanceof lt)throw new Jo(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),t,r);if(s[0]==="/")throw new Jo(a);return a}))}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new lt(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);r[o]=n[a]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(t,l,r,o)}),new V(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new v(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}};function SE(e,t,n){if(typeof e=="string")return C(e);let r=e,{queryParams:o,fragment:i,routeConfig:s,url:a,outlet:l,params:c,data:u,title:d}=t;return Tt(he(n,()=>r({params:c,data:u,queryParams:o,fragment:i,routeConfig:s,url:a,outlet:l,title:d})))}var ld={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function TE(e,t,n,r,o){let i=Em(e,t,n);return i.matched?(r=ZI(t,r),IE(r,t,n,o).pipe(A(s=>s===!0?i:g({},ld)))):C(i)}function Em(e,t,n){if(t.path==="**")return ME(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?g({},ld):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||Xg)(n,e,t);if(!o)return g({},ld);let i={};Object.entries(o.posParams??{}).forEach(([a,l])=>{i[a]=l.path});let s=o.consumed.length>0?g(g({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function ME(e){return{matched:!0,parameters:e.length>0?tm(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Kg(e,t,n,r){return n.length>0&&NE(e,n,r)?{segmentGroup:new V(t,AE(r,new V(n,e.children))),slicedSegments:[]}:n.length===0&&RE(e,n,r)?{segmentGroup:new V(e.segments,xE(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new V(e.segments,e.children),slicedSegments:n}}function xE(e,t,n,r){let o={};for(let i of n)if(Ta(e,t,i)&&!r[Ze(i)]){let s=new V([],{});o[Ze(i)]=s}return g(g({},r),o)}function AE(e,t){let n={};n[S]=t;for(let r of e)if(r.path===""&&Ze(r)!==S){let o=new V([],{});n[Ze(r)]=o}return n}function NE(e,t,n){return n.some(r=>Ta(e,t,r)&&Ze(r)!==S)}function RE(e,t,n){return n.some(r=>Ta(e,t,r))}function Ta(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function kE(e,t,n){return t.length===0&&!e.children[n]}var cd=class{};function OE(e,t,n,r,o,i,s="emptyOnly"){return new ud(e,t,n,r,o,s,i).recognize()}var LE=31,ud=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,r,o,i,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new ad(this.urlSerializer,this.urlTree)}noMatchError(t){return new v(4002,`'${t.segmentGroup}'`)}recognize(){let t=Kg(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(A(({children:n,rootSnapshot:r})=>{let o=new Ne(r,n),i=new Zo("",o),s=um(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new kn([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,S,n).pipe(A(r=>({children:r,rootSnapshot:n})),xt(r=>{if(r instanceof Jo)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Qo?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(A(s=>s instanceof Ne?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return q(i).pipe(Xn(s=>{let a=r.children[s],l=KI(n,s);return this.processSegmentGroup(t,l,a,s,o)}),ol((s,a)=>(s.push(...a),s)),At(null),rl(),ee(s=>{if(s===null)return Mr(r);let a=_m(s);return PE(a),C(a)}))}processSegment(t,n,r,o,i,s,a){return q(n).pipe(Xn(l=>this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,s,a).pipe(xt(c=>{if(c instanceof Qo)return C(null);throw c}))),pt(l=>!!l),xt(l=>{if(Cm(l))return kE(r,o,i)?C(new cd):Mr(r);throw l}))}processSegmentAgainstRoute(t,n,r,o,i,s,a,l){return Ze(r)!==s&&(s===S||!Ta(o,i,r))?Mr(o):r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,l):Mr(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=Em(n,o,i);if(!l)return Mr(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>LE&&(this.allowRedirects=!1));let p=new kn(i,c,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Qg(o),Ze(o),o.component??o._loadedComponent??null,o,Jg(o)),m=Ca(p,a,this.paramsInheritanceStrategy);return p.params=Object.freeze(m.params),p.data=Object.freeze(m.data),this.applyRedirects.applyRedirectCommands(u,o.redirectTo,d,p,t).pipe(ye(N=>this.applyRedirects.lineralizeSegments(o,N)),ee(N=>this.processSegment(t,r,n,N.concat(f),s,!1,a)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let a=TE(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),a.pipe(ye(l=>l.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(ye(({routes:c})=>{let u=r._loadedInjector??t,{parameters:d,consumedSegments:f,remainingSegments:p}=l,m=new kn(f,d,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Qg(r),Ze(r),r.component??r._loadedComponent??null,r,Jg(r)),w=Ca(m,s,this.paramsInheritanceStrategy);m.params=Object.freeze(w.params),m.data=Object.freeze(w.data);let{segmentGroup:N,slicedSegments:M}=Kg(n,f,p,c);if(M.length===0&&N.hasChildren())return this.processChildren(u,c,N,m).pipe(A(ui=>new Ne(m,ui)));if(c.length===0&&M.length===0)return C(new Ne(m,[]));let Qt=Ze(r)===i;return this.processSegment(u,c,N,M,Qt?S:i,!0,m).pipe(A(ui=>new Ne(m,ui instanceof Ne?[ui]:[])))}))):Mr(n)))}getChildConfig(t,n,r){return n.children?C({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?C({routes:n._loadedRoutes,injector:n._loadedInjector}):CE(t,n,r,this.urlSerializer).pipe(ee(o=>o?this.configLoader.loadChildren(t,n).pipe(ne(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):_E(n))):C({routes:[],injector:t})}};function PE(e){e.sort((t,n)=>t.value.outlet===S?-1:n.value.outlet===S?1:t.value.outlet.localeCompare(n.value.outlet))}function FE(e){let t=e.value.routeConfig;return t&&t.path===""}function _m(e){let t=[],n=new Set;for(let r of e){if(!FE(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=_m(r.children);t.push(new Ne(r.value,o))}return t.filter(r=>!n.has(r))}function Qg(e){return e.data||{}}function Jg(e){return e.resolve||{}}function VE(e,t,n,r,o,i){return ee(s=>OE(e,t,n,r,s.extractedUrl,o,i).pipe(A(({state:a,tree:l})=>x(g({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function jE(e,t){return ee(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return C(n);let i=new Set(o.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let c of Sm(l))s.add(c);let a=0;return q(s).pipe(Xn(l=>i.has(l)?BE(l,r,e,t):(l.data=Ca(l,l.parent,e).resolve,C(void 0))),ne(()=>a++),er(1),ee(l=>a===s.size?C(n):me))})}function Sm(e){let t=e.children.map(n=>Sm(n)).flat();return[e,...t]}function BE(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!vm(o)&&(i[Xo]=o.title),Gr(()=>(e.data=Ca(e,e.parent,n).resolve,WE(i,e,t,r).pipe(A(s=>(e._resolvedData=s,e.data=g(g({},e.data),s),null)))))}function WE(e,t,n,r){let o=Ju(e);if(o.length===0)return C({});let i={};return q(o).pipe(ee(s=>HE(e[s],t,n,r).pipe(pt(),ne(a=>{if(a instanceof Or)throw Ia(new Ln,a);i[s]=a}))),er(1),A(()=>i),xt(s=>Cm(s)?me:Qn(s)))}function HE(e,t,n,r){let o=Pr(t)??r,i=Vr(e,o),s=i.resolve?i.resolve(t,n):he(o,()=>i(t,n));return Tt(s)}function Ku(e){return ye(t=>{let n=e(t);return n?q(n).pipe(A(()=>t)):C(t)})}var hd=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===S);return r}getResolvedTitleForRoute(n){return n.data[Xo]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>h(Tm),providedIn:"root"})}return e})(),Tm=(()=>{class e extends hd{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(_(na))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),jr=new y("",{providedIn:"root",factory:()=>({})}),ri=new y(""),Mm=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(Su);loadComponent(n,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return C(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=Tt(he(n,()=>r.loadComponent())).pipe(A(Am),ye(Nm),ne(s=>{this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s}),Yr(()=>{this.componentLoaders.delete(r)})),i=new Kn(o,()=>new K).pipe(Zn());return this.componentLoaders.set(r,i),i}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return C({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=xm(r,this.compiler,n,this.onLoadEndListener).pipe(Yr(()=>{this.childrenLoaders.delete(r)})),s=new Kn(i,()=>new K).pipe(Zn());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function xm(e,t,n,r){return Tt(he(n,()=>e.loadChildren())).pipe(A(Am),ye(Nm),ee(o=>o instanceof qs||Array.isArray(o)?C(o):q(t.compileModuleAsync(o))),A(o=>{r&&r(e);let i,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(i=o.create(n).injector,s=i.get(ri,[],{optional:!0,self:!0}).flat()),{routes:s.map(fd),injector:i}}))}function UE(e){return e&&typeof e=="object"&&"default"in e}function Am(e){return UE(e)?e.default:e}function Nm(e){return C(e)}var Ma=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>h($E),providedIn:"root"})}return e})(),$E=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Rm=new y("");var km=new y(""),Om=(()=>{class e{currentNavigation=de(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new K;transitionAbortWithErrorSubject=new K;configLoader=h(Mm);environmentInjector=h(re);destroyRef=h(Se);urlSerializer=h(ei);rootContexts=h(Fr);location=h(Tr);inputBindingEnabled=h(Sa,{optional:!0})!==null;titleStrategy=h(hd);options=h(jr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=h(Ma);createViewTransition=h(Rm,{optional:!0});navigationErrorHandler=h(km,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>C(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new ha(o)),r=o=>this.events.next(new ga(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;le(()=>{this.transitions?.next(x(g({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:r}))})}setupNavigations(n){return this.transitions=new se(null),this.transitions.pipe(ke(r=>r!==null),ye(r=>{let o=!1;return C(r).pipe(ye(i=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",ge.SupersededByNewNavigation),me;this.currentTransition=r,this.currentNavigation.set({id:i.id,initialUrl:i.rawUrl,extractedUrl:i.extractedUrl,targetBrowserUrl:typeof i.extras.browserUrl=="string"?this.urlSerializer.parse(i.extras.browserUrl):i.extras.browserUrl,trigger:i.source,extras:i.extras,previousNavigation:this.lastSuccessfulNavigation?x(g({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>i.abortController.abort()});let s=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=i.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!s&&a!=="reload")return this.events.next(new St(i.id,this.urlSerializer.serialize(i.rawUrl),"",qo.IgnoredSameUrlNavigation)),i.resolve(!1),me;if(this.urlHandlingStrategy.shouldProcessUrl(i.rawUrl))return C(i).pipe(ye(l=>(this.events.next(new Pn(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?me:Promise.resolve(l))),VE(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),ne(l=>{r.targetSnapshot=l.targetSnapshot,r.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=l.urlAfterRedirects,u));let c=new zo(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(i.currentRawUrl)){let{id:l,extractedUrl:c,source:u,restoredState:d,extras:f}=i,p=new Pn(l,this.urlSerializer.serialize(c),u,d);this.events.next(p);let m=gm(this.rootComponentType).snapshot;return this.currentTransition=r=x(g({},i),{targetSnapshot:m,urlAfterRedirects:c,extras:x(g({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(w=>(w.finalUrl=c,w)),C(r)}else return this.events.next(new St(i.id,this.urlSerializer.serialize(i.extractedUrl),"",qo.IgnoredByUrlHandlingStrategy)),i.resolve(!1),me}),ne(i=>{let s=new ua(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(s)}),A(i=>(this.currentTransition=r=x(g({},i),{guards:rE(i.targetSnapshot,i.currentSnapshot,this.rootContexts)}),r)),hE(this.environmentInjector,i=>this.events.next(i)),ne(i=>{if(r.guardsResult=i.guardsResult,i.guardsResult&&typeof i.guardsResult!="boolean")throw Ia(this.urlSerializer,i.guardsResult);let s=new da(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot,!!i.guardsResult);this.events.next(s)}),ke(i=>i.guardsResult?!0:(this.cancelNavigationTransition(i,"",ge.GuardRejected),!1)),Ku(i=>{if(i.guards.canActivateChecks.length!==0)return C(i).pipe(ne(s=>{let a=new pa(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),ye(s=>{let a=!1;return C(s).pipe(jE(this.paramsInheritanceStrategy,this.environmentInjector),ne({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",ge.NoDataFromResolver)}}))}),ne(s=>{let a=new fa(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),Ku(i=>{let s=a=>{let l=[];if(a.routeConfig?.loadComponent){let c=Pr(a)??this.environmentInjector;l.push(this.configLoader.loadComponent(c,a.routeConfig).pipe(ne(u=>{a.component=u}),A(()=>{})))}for(let c of a.children)l.push(...s(c));return l};return Ui(s(i.targetSnapshot.root)).pipe(At(null),dt(1))}),Ku(()=>this.afterPreactivation()),ye(()=>{let{currentSnapshot:i,targetSnapshot:s}=r,a=this.createViewTransition?.(this.environmentInjector,i.root,s.root);return a?q(a).pipe(A(()=>r)):C(r)}),A(i=>{let s=JI(n.routeReuseStrategy,i.targetSnapshot,i.currentRouterState);return this.currentTransition=r=x(g({},i),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),r}),ne(()=>{this.events.next(new Go)}),nE(this.rootContexts,n.routeReuseStrategy,i=>this.events.next(i),this.inputBindingEnabled),dt(1),qi(new O(i=>{let s=r.abortController.signal,a=()=>i.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(ke(()=>!o&&!r.targetRouterState),ne(()=>{this.cancelNavigationTransition(r,r.abortController.signal.reason+"",ge.Aborted)}))),ne({next:i=>{o=!0,this.lastSuccessfulNavigation=le(this.currentNavigation),this.events.next(new ct(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects))),this.titleStrategy?.updateTitle(i.targetRouterState.snapshot),i.resolve(!0)},complete:()=>{o=!0}}),qi(this.transitionAbortWithErrorSubject.pipe(ne(i=>{throw i}))),Yr(()=>{o||this.cancelNavigationTransition(r,"",ge.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),xt(i=>{if(this.destroyed)return r.resolve(!1),me;if(o=!0,Dm(i))this.events.next(new at(r.id,this.urlSerializer.serialize(r.extractedUrl),i.message,i.cancellationCode)),tE(i)?this.events.next(new kr(i.url,i.navigationBehaviorOptions)):r.resolve(!1);else{let s=new Rr(r.id,this.urlSerializer.serialize(r.extractedUrl),i,r.targetSnapshot??void 0);try{let a=he(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof Or){let{message:l,cancellationCode:c}=Ia(this.urlSerializer,a);this.events.next(new at(r.id,this.urlSerializer.serialize(r.extractedUrl),l,c)),this.events.next(new kr(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),i}catch(a){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(a)}}return me}))}))}cancelNavigationTransition(n,r,o){let i=new at(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=le(this.currentNavigation),o=r?.targetBrowserUrl??r?.extractedUrl;return n.toString()!==o?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function qE(e){return e!==Ho}var Lm=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>h(zE),providedIn:"root"})}return e})(),_a=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},zE=(()=>{class e extends _a{static \u0275fac=(()=>{let n;return function(o){return(n||(n=yr(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Pm=(()=>{class e{urlSerializer=h(ei);options=h(jr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=h(Tr);urlHandlingStrategy=h(Ma);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new lt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:r,targetBrowserUrl:o}){let i=n!==void 0?this.urlHandlingStrategy.merge(n,r):r,s=o??i;return s instanceof lt?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:n,finalUrl:r,initialUrl:o}){r&&n?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,o),this.routerState=n):this.rawUrlTree=o}routerState=gm(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>h(GE),providedIn:"root"})}return e})(),GE=(()=>{class e extends Pm{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{n(r.url,r.state,"popstate")})})}handleRouterEvent(n,r){n instanceof Pn?this.updateStateMemento():n instanceof St?this.commitTransition(r):n instanceof zo?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof Go?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof at&&n.code!==ge.SupersededByNewNavigation&&n.code!==ge.Redirect?this.restoreHistory(r):n instanceof Rr?this.restoreHistory(r,!0):n instanceof ct&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:r,id:o}){let{replaceUrl:i,state:s}=r;if(this.location.isCurrentPathEqualTo(n)||i){let a=this.browserPageId,l=g(g({},s),this.generateNgRouterState(o,a));this.location.replaceState(n,"",l)}else{let a=g(g({},s),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(n,"",a)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===n.finalUrl&&i===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=yr(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function gd(e,t){e.events.pipe(ke(n=>n instanceof ct||n instanceof at||n instanceof Rr||n instanceof St),A(n=>n instanceof ct||n instanceof St?0:(n instanceof at?n.code===ge.Redirect||n.code===ge.SupersededByNewNavigation:!1)?2:1),ke(n=>n!==2),dt(1)).subscribe(()=>{t()})}var YE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ZE={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},oi=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(zs);stateManager=h(Pm);options=h(jr,{optional:!0})||{};pendingTasks=h(yt);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=h(Om);urlSerializer=h(ei);location=h(Tr);urlHandlingStrategy=h(Ma);injector=h(re);_events=new K;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(Lm);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=h(ri,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(Sa,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Z;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=le(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof at&&r.code!==ge.Redirect&&r.code!==ge.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof ct)this.navigated=!0;else if(r instanceof kr){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=g({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||qE(o.source)},s);this.scheduleNavigation(a,Ho,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}YI(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ho,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r,o)=>{this.navigateToSyncWithBrowser(n,o,r)})}navigateToSyncWithBrowser(n,r,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let l=g({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let a=this.parseUrl(n);this.scheduleNavigation(a,r,s,i).catch(l=>{this.disposed||this.injector.get(Te)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return le(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(fd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=g(g({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=o?o.snapshot:this.routerState.snapshot.root;d=dm(f)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),d=this.currentUrlTree.root}return pm(d,n,u,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){let o=Kt(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,Ho,null,r)}navigate(n,r={skipLocationChange:!1}){return KE(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.console.warn(un(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=g({},YE):r===!1?o=g({},ZE):o=r,Kt(n))return zg(this.currentUrlTree,n,o);let i=this.parseUrl(n);return zg(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((d,f)=>{a=d,l=f});let u=this.pendingTasks.add();return gd(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function KE(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new v(4008,!1)}var Br=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=de(null);get href(){return le(this.reactiveHref)}set href(n){this.reactiveHref.set(n)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new K;applicationErrorHandler=h(Te);options=h(jr,{optional:!0});constructor(n,r,o,i,s,a){this.router=n,this.route=r,this.tabIndexAttribute=o,this.renderer=i,this.el=s,this.locationStrategy=a,this.reactiveHref.set(h(new Ks("href"),{optional:!0}));let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let n=this.preserveFragment,r=o=>o==="merge"||o==="preserve";n||=r(this.queryParamsHandling),n||=!this.queryParamsHandling&&!r(this.options?.defaultQueryParamsHandling),n&&(this.subscription=this.router.events.subscribe(o=>{o instanceof ct&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(n){n==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Kt(n)?this.routerLinkInput=n:this.routerLinkInput=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0"))}onClick(n,r,o,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(n!==0||r||o||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.reactiveHref.set(n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n))??"":null)}applyAttributeValue(n,r){let o=this.renderer,i=this.el.nativeElement;r!==null?o.setAttribute(i,n,r):o.removeAttribute(i,n)}get urlTree(){return this.routerLinkInput===null?null:Kt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(r){return new(r||e)($(oi),$(Ke),wo("tabindex"),$(Tn),$(Ht),$(Sr))};static \u0275dir=je({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(r,o){r&1&&Gt("click",function(s){return o.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&Mo("href",o.reactiveHref(),ou)("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",_r],skipLocationChange:[2,"skipLocationChange","skipLocationChange",_r],replaceUrl:[2,"replaceUrl","replaceUrl",_r],routerLink:"routerLink"},features:[Wt]})}return e})();var JE=new y("");function md(e,...t){return Lt([{provide:ri,multi:!0,useValue:e},[],{provide:Ke,useFactory:XE,deps:[oi]},{provide:Gs,multi:!0,useFactory:e0},t.map(n=>n.\u0275providers)])}function XE(e){return e.routerState.root}function e0(){let e=h(fe);return t=>{let n=e.get(_t);if(t!==n.components[0])return;let r=e.get(oi),o=e.get(t0);e.get(n0)===1&&r.initialNavigation(),e.get(r0,null,{optional:!0})?.setUpPreloading(),e.get(JE,null,{optional:!0})?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var t0=new y("",{factory:()=>new K}),n0=new y("",{providedIn:"root",factory:()=>1});var r0=new y("");var $m=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,r){this._renderer=n,this._elementRef=r}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(r){return new(r||e)($(Tn),$(Ht))};static \u0275dir=je({type:e})}return e})(),o0=(()=>{class e extends $m{static \u0275fac=(()=>{let n;return function(o){return(n||(n=yr(e)))(o||e)}})();static \u0275dir=je({type:e,features:[xn]})}return e})(),qm=new y("");var i0={provide:qm,useExisting:dn(()=>ka),multi:!0};function s0(){let e=Ae()?Ae().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var a0=new y(""),ka=(()=>{class e extends $m{_compositionMode;_composing=!1;constructor(n,r,o){super(n,r),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!s0())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(r){return new(r||e)($(Tn),$(Ht),$(a0,8))};static \u0275dir=je({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&Gt("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[Ys([i0]),xn]})}return e})();var l0=new y(""),c0=new y("");function zm(e){return e!=null}function Gm(e){return An(e)?q(e):e}function Ym(e){let t={};return e.forEach(n=>{t=n!=null?g(g({},t),n):t}),Object.keys(t).length===0?null:t}function Zm(e,t){return t.map(n=>n(e))}function u0(e){return!e.validate}function Km(e){return e.map(t=>u0(t)?t:n=>t.validate(n))}function d0(e){if(!e)return null;let t=e.filter(zm);return t.length==0?null:function(n){return Ym(Zm(n,t))}}function Qm(e){return e!=null?d0(Km(e)):null}function p0(e){if(!e)return null;let t=e.filter(zm);return t.length==0?null:function(n){let r=Zm(n,t).map(Gm);return nl(r).pipe(A(Ym))}}function Jm(e){return e!=null?p0(Km(e)):null}function Fm(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function f0(e){return e._rawValidators}function h0(e){return e._rawAsyncValidators}function vd(e){return e?Array.isArray(e)?e:[e]:[]}function Aa(e,t){return Array.isArray(e)?e.includes(t):e===t}function Vm(e,t){let n=vd(t);return vd(e).forEach(o=>{Aa(n,o)||n.push(o)}),n}function jm(e,t){return vd(t).filter(n=>!Aa(e,n))}var Na=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Qm(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Jm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},yd=class extends Na{name;get formDirective(){return null}get path(){return null}},ci=class extends Na{_parent=null;name=null;valueAccessor=null},bd=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},g0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Tj=x(g({},g0),{"[class.ng-submitted]":"isSubmitted"}),Xm=(()=>{class e extends bd{constructor(n){super(n)}static \u0275fac=function(r){return new(r||e)($(ci,2))};static \u0275dir=je({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Nn("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[xn]})}return e})();var ii="VALID",xa="INVALID",Wr="PENDING",si="DISABLED",Fn=class{},Ra=class extends Fn{value;source;constructor(t,n){super(),this.value=t,this.source=n}},ai=class extends Fn{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},li=class extends Fn{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},Hr=class extends Fn{status;source;constructor(t,n){super(),this.status=t,this.source=n}};var wd=class extends Fn{source;constructor(t){super(),this.source=t}};function m0(e){return(Oa(e)?e.validators:e)||null}function v0(e){return Array.isArray(e)?Qm(e):e||null}function y0(e,t){return(Oa(t)?t.asyncValidators:e)||null}function b0(e){return Array.isArray(e)?Jm(e):e||null}function Oa(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Dd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return le(this.statusReactive)}set status(t){le(()=>this.statusReactive.set(t))}_status=xe(()=>this.statusReactive());statusReactive=de(void 0);get valid(){return this.status===ii}get invalid(){return this.status===xa}get pending(){return this.status==Wr}get disabled(){return this.status===si}get enabled(){return this.status!==si}errors;get pristine(){return le(this.pristineReactive)}set pristine(t){le(()=>this.pristineReactive.set(t))}_pristine=xe(()=>this.pristineReactive());pristineReactive=de(!0);get dirty(){return!this.pristine}get touched(){return le(this.touchedReactive)}set touched(t){le(()=>this.touchedReactive.set(t))}_touched=xe(()=>this.touchedReactive());touchedReactive=de(!1);get untouched(){return!this.touched}_events=new K;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Vm(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Vm(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(jm(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(jm(t,this._rawAsyncValidators))}hasValidator(t){return Aa(this._rawValidators,t)}hasAsyncValidator(t){return Aa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let r=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(x(g({},t),{sourceControl:r})),n&&t.emitEvent!==!1&&this._events.next(new li(!0,r))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:r})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,r),n&&t.emitEvent!==!1&&this._events.next(new li(!1,r))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let r=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(x(g({},t),{sourceControl:r})),n&&t.emitEvent!==!1&&this._events.next(new ai(!1,r))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,r),n&&t.emitEvent!==!1&&this._events.next(new ai(!0,r))}markAsPending(t={}){this.status=Wr;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Hr(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(x(g({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=si,this.errors=null,this._forEachChild(o=>{o.disable(x(g({},t),{onlySelf:!0}))}),this._updateValue();let r=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ra(this.value,r)),this._events.next(new Hr(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(x(g({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=ii,this._forEachChild(r=>{r.enable(x(g({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(x(g({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t,n){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ii||this.status===Wr)&&this._runAsyncValidator(r,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ra(this.value,n)),this._events.next(new Hr(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(x(g({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?si:ii}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=Wr,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:t!==!1};let r=Gm(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){let r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,r){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||r)&&this._events.next(new Hr(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,r)}_initObservables(){this.valueChanges=new te,this.statusChanges=new te}_calculateStatus(){return this._allControlsDisabled()?si:this.errors?xa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Wr)?Wr:this._anyControlsHaveStatus(xa)?xa:ii}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let r=!this._anyControlsDirty(),o=this.pristine!==r;this.pristine=r,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),o&&this._events.next(new ai(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new li(this.touched,n)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Oa(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=v0(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=b0(this._rawAsyncValidators)}};var ev=new y("",{providedIn:"root",factory:()=>Cd}),Cd="always";function w0(e,t){return[...t.path,e]}function D0(e,t,n=Cd){I0(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),E0(e,t),S0(e,t),_0(e,t),C0(e,t)}function Bm(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function C0(e,t){if(t.valueAccessor.setDisabledState){let n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function I0(e,t){let n=f0(e);t.validator!==null?e.setValidators(Fm(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let r=h0(e);t.asyncValidator!==null?e.setAsyncValidators(Fm(r,t.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let o=()=>e.updateValueAndValidity();Bm(t._rawValidators,o),Bm(t._rawAsyncValidators,o)}function E0(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&tv(e,t)})}function _0(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&tv(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function tv(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function S0(e,t){let n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function T0(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function M0(e){return Object.getPrototypeOf(e.constructor)===o0}function x0(e,t){if(!t)return null;Array.isArray(t);let n,r,o;return t.forEach(i=>{i.constructor===ka?n=i:M0(i)?r=i:o=i}),o||r||n||null}function Wm(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Hm(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var A0=class extends Dd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,r){super(m0(n),y0(r,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Oa(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Hm(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new wd(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Wm(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Wm(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Hm(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var N0={provide:ci,useExisting:dn(()=>Id)},Um=Promise.resolve(),Id=(()=>{class e extends ci{_changeDetectorRef;callSetDisabledState;control=new A0;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new te;constructor(n,r,o,i,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=x0(this,i)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),T0(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){D0(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Um.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&_r(r);Um.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?w0(n,this._parent):[n]}static \u0275fac=function(r){return new(r||e)($(yd,9),$(l0,10),$(c0,10),$(qm,10),$(Er,8),$(ev,8))};static \u0275dir=je({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ys([N0]),xn,Wt]})}return e})();var R0=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=Et({type:e});static \u0275inj=Je({})}return e})();var nv=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:ev,useValue:n.callSetDisabledState??Cd}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=Et({type:e});static \u0275inj=Je({imports:[R0]})}return e})();var Ed=[{slug:"2026-03-27-patch-308-protecting-integrity-and-powering-production-ai-training-ban-new-build-pipeline",title:"Patch #308: Protecting Integrity and Powering Production: AI Training Ban & New Build Pipeline",date:"2026-03-27T04:39:11",dateDisplay:"2026-03-27",description:"As the Wave language ecosystem grows, we are committed to two fundamental principles: protecting the creative work of our contributors and providing developers with a professional-grade toolchain. Our",tags:[],pinned:!0,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/dfdbce25-a541-49a2-ad3a-dabce8b88195.png",contentHtml:`<h1>Patch #308: Protecting Integrity and Powering Production: AI Training Ban &amp; New Build Pipeline</h1>
<p>As the Wave language ecosystem grows, we are committed to two fundamental principles: protecting the creative work of our contributors and providing developers with a professional-grade toolchain. Our latest update introduces a strict AI/ML training prohibition and a complete redesign of the <code>wavec</code> CLI to support complex, real-world compilation workflows.</p>
<h3>1. Protecting Our Source: AI/ML Training Prohibition</h3>
<p>In an era of ubiquitous data scraping, we believe it is essential to explicitly define how our source code can be used. We have implemented a project-wide policy to disallow the use of Wave\u2019s repository for AI/ML training without prior authorization.</p>
<ul>
<li>
<p><code>ai.txt</code>: A new manifest in the repository root clearly prohibits crawling, scraping, pre-training, and fine-tuning. This includes notices in multiple languages to ensure global clarity.</p>
</li>
<li>
<p><strong>Universal Headers</strong>: We have applied an <code>AI TRAINING NOTICE</code> header to nearly every file in the project\u2014spanning Rust, Wave, Python, Shell scripts, and even our Dockerfiles.</p>
</li>
</ul>
<p>This step ensures that Wave remains a project built by humans, for humans, protecting the intellectual property and intent of our community.</p>
<h3>2. A Professional Build Pipeline: <code>BuildPlan</code> Architecture</h3>
<p>We have replaced the basic "run and build" logic with a sophisticated <code>BuildRequest</code> <strong>and</strong> <code>BuildPlan</code> <strong>architecture</strong>. This transforms <code>wavec</code> into a highly configurable compiler capable of handling everything from quick syntax checks to complex systems engineering.</p>
<h4><strong>Granular Control with</strong> <code>--emit</code></h4>
<p>You can now stop the compilation process at any stage and inspect the output. The new <code>--emit</code> flag supports:</p>
<ul>
<li>
<p><code>ast</code>: View the Abstract Syntax Tree.</p>
</li>
<li>
<p><code>ir</code> / <code>bc</code>: Inspect LLVM Intermediate Representation or Bitcode.</p>
</li>
<li>
<p><code>asm</code>: Generate assembly code for specific architectures.</p>
</li>
<li>
<p><code>obj</code>: Produce object files.</p>
</li>
<li>
<p><code>bin</code>: Create the final executable.</p>
</li>
<li>
<p><code>check</code>: Perform rapid syntax and semantic validation (aliased as the <code>wavec check</code> command) without the overhead of code generation.</p>
</li>
</ul>
<h4><strong>Advanced Linking &amp; Systems Support</strong></h4>
<p>Wave is now better equipped for low-level tasks like OS development and library creation. New flags include:</p>
<ul>
<li>
<p><code>--freestanding</code>: Compile without standard entry points or libraries.</p>
</li>
<li>
<p><code>--static</code> <strong>/</strong> <code>--shared</code>: Control how your binaries are linked.</p>
</li>
<li>
<p><code>--linker-script</code> <strong>&amp;</strong> <code>--entry</code>: Define custom memory layouts and entry points.</p>
</li>
<li>
<p><code>--no-start-files</code>: Skip standard OS startup code.</p>
</li>
</ul>
<h3>3. Multi-Input &amp; Toolchain Interop</h3>
<p><code>wavec</code> is no longer limited to <code>.wave</code> files. By using the <code>--input-type</code> flag, you can now use the Wave toolchain to link and compile external <strong>LLVM IR, Bitcode, or raw Assembly</strong> files. This allows Wave to serve as a central hub for multi-language projects that utilize the LLVM/Clang ecosystem.</p>
<h3>4. Preview and Inspect</h3>
<p>To help developers debug their build processes, we\u2019ve added powerful introspection tools:</p>
<ul>
<li>
<p><code>--dry-run</code>: Preview the exact commands and steps the compiler would take. You can output this in a human-readable format or as <strong>JSON</strong> (<code>--error-format=json</code>) for integration into other tools.</p>
</li>
<li>
<p><strong>The</strong> <code>print</code> <strong>Command</strong>: Query the toolchain for detailed information, such as <code>target-list</code>, <code>cpu-list</code>, <code>sysroot</code>, and specific <code>target-features</code>.</p>
</li>
</ul>
<h3>5. Backend &amp; CI/CD Enhancements</h3>
<p>The LLVM backend has been refined to support specific hardware requirements:</p>
<ul>
<li>
<p><strong>Code &amp; Relocation Models</strong>: Control these via <code>-C code-model</code> and <code>-C relocation-model</code> (e.g., <code>pic</code>, <code>static</code>).</p>
</li>
<li>
<p><strong>Exit Codes</strong>: <code>wavec</code> now returns specific exit codes based on the error type (e.g., syntax vs. backend failures), making it much easier to integrate into automated CI/CD pipelines.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>With these changes, Wave takes a significant step toward becoming a professional, production-ready systems language. We are establishing a space where developers have total control over their build process and where their source code is respected and protected.</p>
<p>Check out the new <code>wavec --help</code> to explore the full range of new build options!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/308">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-03-17-wave-language-v0-1-8-pre-beta-building-the-foundations-of-systems-programming",title:"Wave Language v0.1.8-pre-beta: Building the Foundations of Systems Programming",date:"2026-03-17T08:58:43",dateDisplay:"2026-03-17",description:"The Wave Language Team is proud to announce the release of v0.1.8-pre-beta. This update marks a definitive turning point, evolving Wave from an experimental project into a robust and modern systems pr",tags:["wave-lang","Programming Blogs","programming languages","release notes"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/d5b37b34-5689-4155-bdda-10bb662d9d78.png",contentHtml:`<h1>Wave Language v0.1.8-pre-beta: Building the Foundations of Systems Programming</h1>
<p>The Wave Language Team is proud to announce the release of <strong>v0.1.8-pre-beta</strong>. This update marks a definitive turning point, evolving Wave from an experimental project into a robust and modern <strong>systems programming language</strong>.</p>
<p>From Generics and Pattern Matching to explicit type casting, this release delivers the expressiveness and safety features our developers have been waiting for. Let\u2019s dive into the major changes.</p>
<hr>
<h3><strong>1. The Dawn of Generics: Revolutionizing Code Reuse</strong></h3>
<p>The foundational infrastructure for <strong>Generics</strong> is now live. You can now write highly reusable code by using type parameters in functions and structs. The compiler handles this via a <strong>Monomorphization</strong> pass, generating optimized machine code for each concrete type used.</p>
<p><strong>New Syntax Example:</strong></p>
<pre><code class="language-kotlin">struct Pair&lt;A, B&gt; {
    first: A;
    second: B;
}

fun make_pair&lt;A, B&gt;(a: A, b: B) -&gt; Pair&lt;A, B&gt; {
    var p: Pair&lt;A, B&gt;;
    p.first = a;
    p.second = b;
    return p;
}

fun main() i32 {
    var p = make_pair&lt;i32, str&gt;(1, &quot;Wave&quot;);
}
</code></pre>
<p>The standard library has already begun utilizing this feature, introducing powerful structures like <code>TypedBuffer&lt;T&gt;</code>.</p>
<h3><strong>2. Pattern Matching (match): Elegant Control Flow</strong></h3>
<p>Wave now supports the <strong>match statement</strong>, providing a significant readability boost over long <code>if-else</code> chains. Behind the scenes, the backend lowers these matches into efficient LLVM <code>switch</code> instructions to ensure high performance.</p>
<p><strong>New Syntax Example:</strong></p>
<pre><code class="language-kotlin">enum Status -&gt; i32 { Ready = 0, Busy = 1, Error = 2 }

fun handle_status(s: Status) {
    match (s) {
        Status::Ready =&gt; { println(&quot;System is ready.&quot;); }
        Status::Busy  =&gt; { println(&quot;System is busy...&quot;); }
        _             =&gt; { println(&quot;An error occurred.&quot;); } // Wildcard support
    }
}
</code></pre>
<h3>3. Explicit Casting (as) and Static Globals (static)</h3>
<p>In systems programming, control over memory and types is non-negotiable. We have introduced the as operator for explicit type conversions, replacing previous implicit narrowing behaviors to prevent accidental data loss. Additionally, the new static keyword allows for global variables that persist throughout the entire program lifetime.</p>
<p><strong>New Syntax Example:</strong></p>
<pre><code class="language-kotlin">static GLOBAL_COUNTER: i64 = 0;

fun main() {
    var large_val: i64 = 5000;
    var small_val: i32 = large_val as i32; // Explicit casting required

    GLOBAL_COUNTER = GLOBAL_COUNTER + 1;
}
</code></pre>
<h3><strong>4. Conditional Compilation (#[target]): True Portability</strong></h3>
<p>To facilitate cross-platform development, we\u2019ve introduced the <strong>#[target(os="...")]</strong> attribute. This allows developers to write OS-specific implementations within a single source file, which is now extensively used in our standard library to dispatch platform-agnostic paths like <code>std::sys::fs</code>.</p>
<p><strong>Usage Example:</strong></p>
<pre><code class="language-kotlin">#[target(os=&quot;linux&quot;)]
import(&quot;std::sys::linux::fs&quot;);

#[target(os=&quot;macos&quot;)]
import(&quot;std::sys::macos::fs&quot;);
</code></pre>
<hr>
<h3><strong>5. Backend Modernization: LLVM 21 &amp; Opaque Pointers</strong></h3>
<p>Internally, the compiler backend has undergone a major upgrade to <strong>LLVM 21</strong>. We have fully transitioned to the <strong>Opaque Pointers</strong> system, which modernizes our IR generation and aligns Wave with the future of the LLVM ecosystem. We\u2019ve also implemented a new <strong>PassBuilder</strong> to support modern optimization pipelines.</p>
<h3><strong>6. Improved Developer Experience: Rust-style Diagnostics</strong></h3>
<p>Error messages are no longer just text; they are a diagnostic tool. The new system provides <strong>colorized source code snippets, caret (^) markers</strong>, and <strong>unique error codes</strong> (e.g., E1001). This allows developers to pinpoint and fix syntax or semantic issues faster than ever before.</p>
<hr>
<h2><strong>Conclusion</strong></h2>
<p>The v0.1.8-pre-beta release is a testament to Wave's goal: staying close to the hardware while providing modern language ergonomics. With the standard library refactored and infrastructure stabilized, Wave is now capable of handling complex projects\u2014even a fully functional <strong>Doom demo</strong>!.</p>
<p>We invite you to download the new toolchain and start building the next generation of systems software with Wave.</p>
<p><strong>The Wave Foundation Team</strong></p>`},{slug:"2026-03-08-patch-306-powering-abstraction-introducing-generics-type-casting-and-static-globals",title:"Patch: #306: Powering Abstraction: Introducing Generics, Type Casting, and Static Globals",date:"2026-03-08T10:35:12",dateDisplay:"2026-03-08",description:"The evolution of a systems language is marked by its ability to balance high-level expressiveness with low-level precision. Today\u2019s update brings three foundational features to Wave that empower devel",tags:["wave-lang","Programming Blogs","programming languages","compiler","patching"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/bb75645a-af23-43d3-9b82-32d7a2a9dc6d.png",contentHtml:`<h1>Patch: #306: Powering Abstraction: Introducing Generics, Type Casting, and Static Globals</h1>
<p>The evolution of a systems language is marked by its ability to balance high-level expressiveness with low-level precision. Today\u2019s update brings three foundational features to Wave that empower developers to write more reusable, readable, and platform-aware code: <strong>Generics</strong>, <strong>Explicit Type Casting</strong>, and <strong>Static Globals</strong>.</p>
<h3>1. Write Once, Run for Any Type: Generics</h3>
<p>The most anticipated feature of this release is the introduction of <strong>Generics</strong>. You no longer need to write duplicate logic for different data types.</p>
<ul>
<li>
<p><strong>Generic Functions &amp; Structs</strong>: You can now define functions and structures with type parameters (e.g., <code>struct Stack&lt;T&gt;</code>).</p>
</li>
<li>
<p><strong>Monomorphization</strong>: Behind the scenes, the Wave compiler utilizes a monomorphization pass. This means it generates optimized, type-specific machine code for every version of a generic component you use, ensuring zero-overhead abstraction.</p>
</li>
<li>
<p><strong>Standard Library Upgrades</strong>: We\u2019ve already begun leveraging generics in the <code>std</code>. Look out for new utilities like <code>TypedBuffer&lt;T&gt;</code>, <code>ptr_swap&lt;T&gt;</code>, and universal math functions such as <code>num_abs</code> and <code>num_min</code>.</p>
</li>
</ul>
<h3>2. Explicit Intent: Type Casting with <code>as</code></h3>
<p>Safety and clarity go hand-in-hand. We\u2019ve introduced the <code>as</code> operator to handle explicit type conversions.</p>
<ul>
<li>
<p><strong>Explicit Control</strong>: Whether you are converting between integer widths or casting pointers to different types, the <code>as</code> keyword makes your intent clear to the compiler and other developers.</p>
</li>
<li>
<p><strong>Compile-time Ready</strong>: Type casting is supported not only at runtime but also within our constant evaluation engine, allowing for more powerful compile-time logic.</p>
</li>
<li>
<p><strong>Native</strong> <code>null</code>: To complement our pointer logic, we\u2019ve added a native <code>null</code> literal, providing a safer and more idiomatic way to represent null pointers than using raw integers.</p>
</li>
</ul>
<h3>3. Persistent State: Static Globals</h3>
<p>For systems programming, managing memory that lasts the lifetime of the program is essential. The new <code>static</code> keyword allows you to declare global variables with persistent storage. These are lowered directly to global LLVM symbols, making them efficient and accessible across your entire application.</p>
<h3>4. Robust Platform Awareness &amp; ARM64 Support</h3>
<p>We continue to improve Wave\u2019s cross-platform story. This update brings significant refinements to our backend and preprocessor:</p>
<ul>
<li>
<p><strong>Enhanced ARM64 ABI</strong>: Our System V ABI implementation now fully supports both x86_64 and ARM64 (Apple Silicon and Linux ARM), including specialized logic for aggregate splitting on ARM hardware.</p>
</li>
<li>
<p><strong>Smart Preprocessing</strong>: The <code>#[target(os="...")]</code> attribute logic is now "syntax-aware." It correctly ignores braces, semicolons, and keywords found inside comments or string literals, preventing the accidental truncation of platform-specific code blocks.</p>
</li>
<li>
<p><strong>Deep Backend Control</strong>: Advanced users can now use new CLI flags to override target triples, CPU features, and ABIs via the <code>--llvm</code> subcommand.</p>
</li>
</ul>
<h3>5. Transparency and Community</h3>
<ul>
<li>
<p><strong>Tiered Platform Policy</strong>: We have officially documented our Tiered Platform Policy in the <code>README.md</code>. This clearly outlines the level of support and testing guaranteed for various architectures and operating systems.</p>
</li>
<li>
<p><strong>Doom in Wave?</strong>: Check out the project repository for a reference to the exciting <code>doom.wave</code> example, demonstrating what's possible with the new language features.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>With generics, statics, and explicit casting, Wave has graduated to a new level of expressiveness. These tools allow you to build complex, high-performance abstractions while maintaining the absolute control required for systems-level development.</p>
<p>Update your toolchain, explore the generic standard library, and start building the next generation of Wave applications!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/306">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-03-07-patch-303-crossing-the-architecture-barrier-advanced-cross-compilation-and-backend-control",title:"Patch #303: Crossing the Architecture Barrier: Advanced Cross-Compilation and Backend Control",date:"2026-03-07T07:16:12",dateDisplay:"2026-03-07",description:"We are excited to announce a major infrastructure update that transforms Wave into a truly portable toolchain. Whether you are building for a modern Apple Silicon Mac, a heavy-duty x86_64 Linux server",tags:["wave-lang","compiler","Programming Blogs","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/9af52f29-dfa7-40df-a937-388cda340e17.png",contentHtml:`<h1>Patch #303: Crossing the Architecture Barrier: Advanced Cross-Compilation and Backend Control</h1>
<p>We are excited to announce a major infrastructure update that transforms Wave into a truly portable toolchain. Whether you are building for a modern Apple Silicon Mac, a heavy-duty x86_64 Linux server, or an ARM64 embedded device, Wave now provides the fine-grained control needed to target multiple architectures and operating systems from a single host.</p>
<h3>1. Universal Cross-Compilation Framework</h3>
<p>We have overhauled the backend to support a wide range of targets. By introducing a structured <code>BackendOptions</code> system, the compiler can now parameterize everything from the target triple to specific CPU features.</p>
<ul>
<li>
<p><strong>Expanded Architecture Support</strong>: Wave now natively supports both <strong>x86_64</strong> and <strong>ARM64</strong> architectures across Linux and Darwin (macOS).</p>
</li>
<li>
<p><strong>ABI Precision</strong>: Our <code>abi_c.rs</code> now implements the System V ABI for both Intel and ARM chips, ensuring that your Wave code interfaces perfectly with C libraries regardless of the underlying hardware.</p>
</li>
</ul>
<h3>2. Fine-Grained Backend Customization</h3>
<p>For power users who need to squeeze every bit of performance or satisfy specific linking requirements, we\u2019ve added an extensive suite of CLI flags.</p>
<ul>
<li>
<p><strong>The</strong> <code>--llvm</code> <strong>Subcommand</strong>: You can now directly control the LLVM backend with flags like <code>--target</code>, <code>--cpu</code>, <code>--features</code>, <code>--abi</code>, and <code>--sysroot</code>.</p>
</li>
<li>
<p><strong>Linker Control with</strong> <code>-C</code>: Similar to professional compilers like <code>rustc</code>, you can now specify a custom linker, pass specific linker arguments, or choose to exclude default libraries:</p>
<ul>
<li>
<p><code>-C linker=/path/to/linker</code></p>
</li>
<li>
<p><code>-C link-arg=-static</code></p>
</li>
<li>
<p><code>-C no-default-libs</code></p>
</li>
</ul>
</li>
</ul>
<h3>3. Hardware-Aware Inline Assembly</h3>
<p>As we expand to ARM64, our inline assembly engine has become much smarter.</p>
<ul>
<li>
<p><strong>Register Mapping</strong>: We\u2019ve implemented full register group mapping for ARM64 (<code>x0</code>\u2013<code>x30</code>, <code>sp</code>, etc.), allowing you to write high-performance ARM-specific logic.</p>
</li>
<li>
<p><strong>Smart Dialects</strong>: Wave now automatically switches between assembly dialects\u2014using Intel syntax for x86 and standard AT&amp;T/ARM syntax for ARM targets.</p>
</li>
<li>
<p><strong>Refined Clobbering</strong>: We\u2019ve optimized the automatic clobber logic to ensure that memory barriers and empty assembly blocks don't unnecessarily trash general-purpose registers.</p>
</li>
</ul>
<h3>4. Robust Conditional Compilation</h3>
<p>The <code>#[target]</code> attribute system has received a significant logic upgrade. Our new preprocessor is now fully aware of:</p>
<ul>
<li>
<p>Nested braces</p>
</li>
<li>
<p>Multi-line block comments</p>
</li>
<li>
<p>String and character literals</p>
</li>
</ul>
<p>This prevents the compiler from prematurely truncating a target-specific code block if it contains complex syntax, making platform-specific code much safer to write.</p>
<h3>5. Transparency: Tiered Platform Policy</h3>
<p>To set clear expectations for our users, we have officially formalized a <strong>Tiered Platform Policy</strong> in our <code>README.md</code>.</p>
<ul>
<li>
<p><strong>Tier 1</strong>: Fully supported and tested (e.g., x86_64 Linux).</p>
</li>
<li>
<p><strong>Tier 2-4</strong>: Guaranteed to build, experimental, or community-maintained architectures.</p>
</li>
</ul>
<p>This roadmap ensures that developers know exactly which platforms are ready for production and which are still in the forge.</p>
<h3>Conclusion</h3>
<p>Wave is no longer just "Wave for your machine." It is now a professional-grade toolchain capable of targeting the modern computing landscape. From Apple Silicon to Linux cloud instances, you can now build, link, and optimize your systems code with total precision.</p>
<p>Check out the updated documentation and try building your first cross-platform binary today!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/303">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-03-04-patch-300-evolving-toward-portability-statics-type-casting-and-target-specific-logic",title:"Patch #300: Evolving Toward Portability: Statics, Type Casting, and Target-Specific Logic",date:"2026-03-04T08:14:37",dateDisplay:"2026-03-04",description:"As Wave moves closer to becoming a production-ready systems language, we are focusing on providing the primitives necessary for low-level memory management and robust platform abstraction. Our latest",tags:["wave-lang","Programming Blogs","programming languages","compiler","patch"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/ce6b2090-5bb3-4686-9238-a5172cb2530e.png",contentHtml:`<h1>Patch #300: Evolving Toward Portability: Statics, Type Casting, and Target-Specific Logic</h1>
<p>As Wave moves closer to becoming a production-ready systems language, we are focusing on providing the primitives necessary for low-level memory management and robust platform abstraction. Our latest update introduces foundational language features and a revamped standard library designed for cross-platform portability.</p>
<h3>1. Persistent State with <code>static</code> Globals</h3>
<p>We have introduced the <code>static</code> keyword, enabling the declaration of global variables with persistent storage. Unlike local variables that live on the stack, <code>static</code> variables reside in a fixed memory location for the entire duration of the program. This is essential for managing global state, shared buffers, and system-level configurations.</p>
<h3>2. Explicit Type Casting with <code>as</code></h3>
<p>To complement our strict type system, we\u2019ve implemented the <code>as</code> operator. This allows developers to perform explicit type conversions (e.g., <code>value as i64</code>).</p>
<ul>
<li>
<p><strong>Versatility</strong>: The <code>as</code> operator is supported both in runtime expressions and during compile-time constant evaluation.</p>
</li>
<li>
<p><strong>Safety</strong>: It ensures that pointer casts and integer width conversions are intentional, reducing bugs caused by accidental type mismatches.</p>
</li>
</ul>
<h3>3. Smart Portability: Conditional Compilation</h3>
<p>Building software that runs on both Linux and macOS requires the ability to write platform-specific code. We have implemented a new <code>#[target]</code> attribute system.</p>
<ul>
<li>
<p><strong>Target-Aware</strong>: Use <code>#[target(os="linux")]</code> or <code>#[target(os="macos")]</code> to include or exclude code blocks based on the compilation target.</p>
</li>
<li>
<p><strong>Platform-Agnostic Stdlib</strong>: We\u2019ve refactored the standard library to use cleaner, platform-neutral paths. You can now use <code>import("std::sys::fs")</code> instead of specifying the OS, as the compiler now handles the underlying mapping automatically.</p>
</li>
</ul>
<h3>4. LLVM Backend Optimizations</h3>
<p>We\u2019ve made significant internal changes to how machine code is generated to help LLVM optimize your programs better:</p>
<ul>
<li>
<p><strong>Entry Block Allocas</strong>: All local variable allocations (<code>alloca</code>) are now moved to the function's entry block. This is a standard compiler optimization technique that makes it much easier for LLVM to promote variables to CPU registers.</p>
</li>
<li>
<p><strong>Enhanced Constant Eval</strong>: The constant evaluator now supports sign-extension and pointer casting, allowing for more complex computations to happen at compile time.</p>
</li>
</ul>
<h3>5. Professional Tooling &amp; CLI</h3>
<p>The <code>wavec</code> toolchain is becoming more familiar to developers coming from <code>gcc</code> or <code>clang</code>:</p>
<ul>
<li>
<p><strong>New Build Flags</strong>: We\u2019ve added the <code>-c</code> flag for compile-only mode (generating object files) and refined the <code>-o</code> flag for specifying precise output paths.</p>
</li>
<li>
<p><strong>Tiered Platform Policy</strong>: We have officially established a Tiered Platform Support policy, documented in our <code>README.md</code>, to provide clarity on which architectures and OSs are fully supported, guaranteed to build, or experimental.</p>
</li>
</ul>
<h3>6. Better Diagnostics</h3>
<p>We continue to polish our error reporting. This update improves the rendering of error spans, making it even easier to see exactly where a syntax or semantic issue occurs in your code.</p>
<h3>Conclusion</h3>
<p>By providing global statics, explicit casting, and a way to handle platform differences, Wave is now better equipped to handle real-world systems tasks. These features bridge the gap between high-level code organization and the gritty reality of cross-platform hardware management.</p>
<p>Explore the new tiered support policy in the <code>README.md</code> and start building your next cross-platform tool with Wave!</p>`},{slug:"2026-03-02-patch-298-low-level-precision-high-level-safety-statics-pointer-arithmetic-and-multi-platform-abi",title:"Patch #298: Low-Level Precision, High-Level Safety: Statics, Pointer Arithmetic, and Multi-Platform ABI",date:"2026-03-02T13:07:14",dateDisplay:"2026-03-02",description:"To build an operating system, a driver, or a high-performance engine, a developer needs absolute control over memory and state. Our latest update delivers this control by introducing foundational syst",tags:["wave-lang","compiler","Programming Blogs","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/66dbac53-56fe-4a30-a312-46c394c5785b.png",contentHtml:`<h1>Patch #298: Low-Level Precision, High-Level Safety: Statics, Pointer Arithmetic, and Multi-Platform ABI</h1>
<p>To build an operating system, a driver, or a high-performance engine, a developer needs absolute control over memory and state. Our latest update delivers this control by introducing foundational systems programming features while upgrading the compiler's resilience with a sophisticated diagnostic system.</p>
<h3>1. Global State with <code>static</code></h3>
<p>We have introduced the <code>static</code> keyword, allowing you to declare global variables that persist throughout the entire execution of your program. Unlike local variables, <code>static</code> globals have a fixed memory address, making them essential for managing shared state, configuration, and low-level buffers.</p>
<h3>2. Explicit Type Casting with <code>as</code></h3>
<p>In our previous update, we enforced strict type checking to prevent accidental data loss. To complement this, we\u2019ve implemented the <code>as</code> operator for <strong>explicit type casting</strong>.</p>
<p>Whether you need to convert an <code>i64</code> to an <code>i32</code> or cast a raw pointer to a specific struct type, the <code>as</code> operator makes your intentions clear to the compiler: <code>my_var as u64;</code></p>
<h3>3. Unleashing Pointer Power: Arithmetic</h3>
<p>Wave now supports native pointer arithmetic, a prerequisite for efficient buffer management and data structure implementation.</p>
<ul>
<li>
<p><strong>Pointer + Offset</strong>: Navigate through memory blocks (<code>ptr + 5</code>).</p>
</li>
<li>
<p><strong>Pointer Difference</strong>: Calculate the distance between two memory addresses (<code>ptr1 - ptr2</code>).</p>
</li>
</ul>
<p>These operations are powered by LLVM\u2019s <code>gep</code> (GetElementPtr) instructions, ensuring they are both safe and highly optimized by the backend.</p>
<h3>4. Cross-Platform ABI: Linux &amp; macOS</h3>
<p>One of the most complex parts of compiler development is matching the "Calling Convention" of the host OS. We have overhauled our ABI lowering logic to support:</p>
<ul>
<li>
<p><strong>Linux x86_64 (System V ABI)</strong></p>
</li>
<li>
<p><strong>macOS arm64 (Apple Silicon / Darwin ABI)</strong></p>
</li>
</ul>
<p>The compiler now correctly handles how complex structs are split into registers or passed via the stack on both Intel and Apple Silicon chips. This makes Wave a truly cross-platform tool for systems-level development.</p>
<h3>5. Resilient Diagnostics: Panic-Guarded System</h3>
<p>Compilers sometimes encounter unexpected states in the backend. To ensure a smooth developer experience, we\u2019ve introduced a <strong>Panic-Guarded Diagnostic System</strong>.</p>
<p>If the LLVM backend encounters an error, the compiler now catches that failure and uses "source-span inference" to map the low-level error back to the exact line and column in your Wave source code. No more cryptic LLVM logs\u2014just clear, actionable feedback.</p>
<h3>6. Standard Library &amp; Safety Improvements</h3>
<p>We\u2019ve applied our new strictness to the standard library:</p>
<ul>
<li>
<p><strong>Syscall Refinement</strong>: All Linux syscall wrappers have been updated with explicit <code>as i64</code> casts for register arguments, ensuring 100% type safety.</p>
</li>
<li>
<p><strong>Memory Safety</strong>: Improved allocation logic with mandatory <code>null</code> checks and better error handling for system-level memory requests.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>With global statics, pointer arithmetic, and cross-platform ABI support, Wave is moving beyond the "experimental" phase into a tool capable of serious systems work. We\u2019ve bridged the gap between the raw power of the machine and the safety of a modern compiler.</p>
<p>Check out our updated <code>README.md</code> for new build instructions and target support status. We can't wait to see what you build across Linux and macOS!</p>`},{slug:"2026-03-01-booting-a-64-bit-kernel-with-wave",title:"Booting a 64-bit Kernel with Wave",date:"2026-03-01T10:22:44",dateDisplay:"2026-03-01",description:"Multiboot2 + Long Mode + LLVM-Based Kernel Execution Recently, code written in the Wave language successfully operated as a kernel that boots in actual 64-bit Long Mode. Overall Structure GRUB \u2192 Mult",tags:["Kernel","operating system","os","wave-lang"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/356fc610-eb2e-4d09-ae97-68668cb9c027.png",contentHtml:`<h1>Booting a 64-bit Kernel with Wave</h1>
<h3>Multiboot2 + Long Mode + LLVM-Based Kernel Execution</h3>
<p>Recently, code written in the Wave language successfully operated as a kernel that boots in actual 64-bit Long Mode.</p>
<hr>
<h2>Overall Structure</h2>
<pre><code class="language-plaintext">GRUB \u2192 Multiboot2 \u2192 32-bit entry
      \u2193
   Page table setup
      \u2193
   Enable Long Mode
      \u2193
   Load 64-bit GDT
      \u2193
   far jump
      \u2193
   Execute k_main() written in Wave
</code></pre>
<hr>
<h2>1. kernel.asm \u2013 Long Mode Entry Code</h2>
<p>The core idea is transitioning directly from 32-bit state into 64-bit Long Mode.</p>
<h3>Multiboot2 Header</h3>
<pre><code class="language-plaintext">multiboot2_header:
    dd 0xe85250d6
    dd 0
    dd header_end - multiboot2_header
    dd -(0xe85250d6 + 0 + (header_end - multiboot2_header))
</code></pre>
<p>This is absolutely required for GRUB to recognize the kernel.</p>
<hr>
<h3>Identity 2MB Paging</h3>
<p>Minimal page table configuration:</p>
<pre><code class="language-plaintext">; PML4 \u2192 PDP \u2192 PD
; 2MB identity mapping
mov dword [pd_table], 0x00000083
</code></pre>
<ul>
<li>
<p>Present</p>
</li>
<li>
<p>Writable</p>
</li>
<li>
<p>Page Size (PS)</p>
</li>
</ul>
<hr>
<h3>Enabling Long Mode</h3>
<pre><code class="language-plaintext">mov ecx, 0xC0000080   ; IA32_EFER
rdmsr
or eax, 1 &lt;&lt; 8        ; LME
wrmsr
</code></pre>
<p>After that:</p>
<pre><code class="language-plaintext">mov eax, cr0
or eax, 1 &lt;&lt; 31
mov cr0, eax
</code></pre>
<p>Enabling Paging = Long Mode entry condition satisfied.</p>
<hr>
<h3>64-bit GDT + Far Jump</h3>
<pre><code class="language-plaintext">lgdt [gdt64_ptr]
jmp 0x08:long_mode_entry
</code></pre>
<p>Without this far jump, a Triple Fault occurs.</p>
<hr>
<h2>2. kernel.wave \u2013 The Actual Kernel Code</h2>
<p>From this point forward, it is Wave code.</p>
<hr>
<h3>Writing to VGA MMIO</h3>
<pre><code class="language-kotlin">fun mmio_write8(addr: ptr&lt;u8&gt;, value: u8) {
    addr[0] = value;

    asm {
        clobber(&quot;memory&quot;)
    }
}
</code></pre>
<h3>Why is <code>clobber("memory")</code> Necessary?</h3>
<p>LLVM performs dead-store optimizations.</p>
<p>From the kernel\u2019s perspective:</p>
<pre><code class="language-c">vidmem[i] = ...
</code></pre>
<p>is I/O to a memory-mapped hardware device.</p>
<p>But the compiler treats it as ordinary memory.</p>
<p>Result:</p>
<ul>
<li>
<p>Nothing appears on screen</p>
</li>
<li>
<p>The actual code is removed by optimization</p>
</li>
</ul>
<p>Solution:</p>
<blockquote>
<p>Inform the compiler of side effects via a memory clobber.</p>
</blockquote>
<hr>
<h3>Screen Initialization</h3>
<pre><code class="language-kotlin">fun k_clear_screen() {
    var vidmem: ptr&lt;u8&gt; = 0xb8000 as ptr&lt;u8&gt;;
    var i: i32 = 0;

    while (i &lt; 80 * 25 * 2) {
        mmio_write8(vidmem + i, ' ' as u8);
        i = i + 1;

        mmio_write8(vidmem + i, WHITE_TXT);
        i = i + 1;
    }
}
</code></pre>
<hr>
<h3>String Output</h3>
<pre><code class="language-kotlin">fun k_printf(message: ptr&lt;u8&gt;, line: i32) -&gt; i32 {
    var current_line: i32 = line;
    var msg: ptr&lt;u8&gt; = message;
    var vidmem: ptr&lt;u8&gt; = 0xb8000 as ptr&lt;u8&gt;;
    var i: i32 = current_line * 80 * 2;

    while (msg[0] != 0) {
        ...
    }

    return 1;
}
</code></pre>
<hr>
<h3>Kernel Entry</h3>
<pre><code class="language-kotlin">fun k_main() {
    k_clear_screen();
    k_printf(&quot;Hello, world! Welcome to my kernel.&quot;, 0);

    while (true) { }
}
</code></pre>
<hr>
<h2>3. Linker Script</h2>
<pre><code class="language-plaintext">OUTPUT_FORMAT(elf64-x86-64)
ENTRY(_start)

SECTIONS
{
    . = 1M;

    .text : {
        *(.multiboot2)
        *(.text*)
    }

    .rodata : { *(.rodata*) }
    .data   : { *(.data*) }
    .bss    : { *(.bss*) }
}
</code></pre>
<p>The 1MB offset is the traditional kernel loading location.</p>
<hr>
<h2>4. Makefile Build Flow</h2>
<pre><code class="language-plaintext">Wave \u2192 kernel_wave.o
ASM  \u2192 kernel_asm.o
LD   \u2192 kernel
GRUB \u2192 ISO generation
QEMU \u2192 execution
</code></pre>
<pre><code class="language-plaintext">make run
</code></pre>
<hr>
<h2>Actual Result</h2>
<p>Successfully printed output in QEMU. The Triple Fault loop has disappeared.</p>
<p><img alt="screen" src="https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/d7e99309-dd15-4d6c-a1a1-35015662115f.png align=" title="middle"></p>
<hr>
<h2>Meaning</h2>
<p>The significance of this experiment is not merely that "Hello, world" was printed successfully.</p>
<p>What this means is that Wave has reached a position where it can develop an operating system without borrowing C.</p>
<p>Most languages depend on one of the following at the OS development stage:</p>
<ul>
<li>
<p>A C compiler</p>
</li>
<li>
<p>C runtime (crt0)</p>
</li>
<li>
<p>libc</p>
</li>
<li>
<p>An existing OS environment</p>
</li>
</ul>
<p>This kernel:</p>
<ul>
<li>
<p>Entered 64-bit Long Mode directly</p>
</li>
<li>
<p>Executed in a freestanding environment</p>
</li>
<li>
<p>Linked without libc</p>
</li>
<li>
<p>Used not a single line of C code</p>
</li>
</ul>
<p>Wave directly generated LLVM IR, produced object files, linked them into a kernel binary, was loaded via GRUB, and executed <code>k_main()</code> in a real 64-bit environment.</p>
<p>This demonstrates that Wave is not a language "built on top of C," but a system programming language capable of operating at the same layer as C.</p>
<p>In particular, Wave does not aim to support 32-bit environments.</p>
<p>It was designed with 64-bit as the assumption, and the code executed directly in that environment.</p>
<p>Therefore, this is not merely a demo \u2014 it means the following:</p>
<blockquote>
<p>Wave has secured the language-level foundation required to implement an operating system on a 64-bit target without C.</p>
</blockquote>
<p>Of course, the kernel does not yet implement a memory manager, interrupt system, or scheduler.</p>
<p>But the most important gateway \u2014 executability at the hardware level \u2014 has already been passed.</p>
<p>This is only the beginning.</p>
<hr>
<h1>Full Source Code</h1>
<h3>- kernel.asm</h3>
<pre><code class="language-asm">; =========================================
; Multiboot2 + Minimal 64bit Long Mode
; =========================================

bits 32

section .text
align 8

; -----------------------------------------
; Multiboot2 Header (must be in first 32KB)
; -----------------------------------------
multiboot2_header:
    dd 0xe85250d6
    dd 0
    dd header_end - multiboot2_header
    dd -(0xe85250d6 + 0 + (header_end - multiboot2_header))
    dw 0
    dw 0
    dd 8
header_end:

global _start
extern k_main

_start:
    cli

    ; -------------------------------------
    ; Temporary 32bit stack
    ; -------------------------------------
    mov esp, stack_top

    ; -------------------------------------
    ; Setup page tables (identity 2MB)
    ; -------------------------------------

    ; PML4[0] = pdp_table | present | writable
    mov eax, pdp_table
    or eax, 0x3
    mov [pml4_table], eax
    mov dword [pml4_table + 4], 0

    ; PDP[0] = pd_table | present | writable
    mov eax, pd_table
    or eax, 0x3
    mov [pdp_table], eax
    mov dword [pdp_table + 4], 0

    ; PD[0] = 2MB page, present | writable | PS
    mov dword [pd_table], 0x00000083
    mov dword [pd_table + 4], 0

    ; -------------------------------------
    ; Enable PAE
    ; -------------------------------------
    mov eax, cr4
    or eax, 1 &lt;&lt; 5        ; PAE
    mov cr4, eax

    ; -------------------------------------
    ; Load CR3 with PML4
    ; -------------------------------------
    mov eax, pml4_table
    mov cr3, eax

    ; -------------------------------------
    ; Enable Long Mode (EFER.LME)
    ; -------------------------------------
    mov ecx, 0xC0000080   ; IA32_EFER
    rdmsr
    or eax, 1 &lt;&lt; 8        ; LME
    wrmsr

    ; -------------------------------------
    ; Enable Paging
    ; -------------------------------------
    mov eax, cr0
    or eax, 1 &lt;&lt; 31       ; PG
    mov cr0, eax

    ; -------------------------------------
    ; Load 64bit GDT
    ; -------------------------------------
    lgdt [gdt64_ptr]

    ; -------------------------------------
    ; Far jump to 64bit
    ; -------------------------------------
    jmp 0x08:long_mode_entry

; =========================================
; 64bit mode begins here
; =========================================

bits 64
long_mode_entry:

    mov rsp, stack_top
    mov rbp, 0

    call k_main

.hang:
    hlt
    jmp .hang


; =========================================
; Page Tables (4KB aligned)
; =========================================

section .bss
align 4096

pml4_table:
    resq 512

pdp_table:
    resq 512

pd_table:
    resq 512

; =========================================
; 64bit GDT
; =========================================

section .data
align 8

gdt64:
    dq 0x0000000000000000       ; null
    dq 0x00af9a000000ffff       ; 64bit code
    dq 0x00af92000000ffff       ; 64bit data
gdt64_end:

gdt64_ptr:
    dw gdt64_end - gdt64 - 1
    dq gdt64


; =========================================
; Stack
; =========================================

section .bss
align 16

stack_bottom:
    resb 16384
stack_top:
</code></pre>
<h3>- kernel.wave</h3>
<pre><code class="language-kotlin">const WHITE_TXT: u8 = 0x07;

fun mmio_write8(addr: ptr&lt;u8&gt;, value: u8) {
    addr[0] = value;

    asm {
        clobber(&quot;memory&quot;)
    }
}

fun k_clear_screen() {
    var vidmem: ptr&lt;u8&gt; = 0xb8000 as ptr&lt;u8&gt;;
    var i: i32 = 0;

    while (i &lt; 80 * 25 * 2) {
        mmio_write8(vidmem + i, ' ' as u8);
        i = i + 1;

        mmio_write8(vidmem + i, WHITE_TXT);
        i = i + 1;
    }
}

fun k_printf(message: ptr&lt;u8&gt;, line: i32) -&gt; i32 {
    var current_line: i32 = line;
    var msg: ptr&lt;u8&gt; = message;
    var vidmem: ptr&lt;u8&gt; = 0xb8000 as ptr&lt;u8&gt;;
    var i: i32 = current_line * 80 * 2;

    while (msg[0] != 0) {

        if (msg[0] == '\\n' as u8) {
            current_line = current_line + 1;
            i = current_line * 80 * 2;
            msg = msg + 1;
        } else {
            mmio_write8(vidmem + i, msg[0]);
            msg = msg + 1;
            i = i + 1;

            mmio_write8(vidmem + i, WHITE_TXT);
            i = i + 1;
        }
    }

    return 1;
}

fun k_main() {
    k_clear_screen();
    k_printf(&quot;Hello, world! Welcome to my kernel.&quot;, 0);

    while (true) { }
}
</code></pre>
<h3>- link.ld</h3>
<pre><code class="language-ld">OUTPUT_FORMAT(elf64-x86-64)
ENTRY(_start)

SECTIONS
{
    . = 1M;

    .text : {
        *(.multiboot2)
        *(.text*)
    }

    .rodata : { *(.rodata*) }
    .data   : { *(.data*) }
    .bss    : { *(.bss*) }
}
</code></pre>
<h3>- Makefile</h3>
<pre><code class="language-Makefile"># ===== Configuration =====

WAVEC      := wavec
NASM       := nasm
LD         := ld.lld
GRUB_MKISO := grub2-mkrescue

ARCH       := x86_64
BUILD_DIR  := build
ISO_DIR    := iso
KERNEL     := kernel
ISO_IMAGE  := waveos.iso

# ===== Files =====

ASM_SRC    := kernel.asm
WAVE_SRC   := kernel.wave
LINKER     := link.ld

ASM_OBJ    := $(BUILD_DIR)/kernel_asm.o
WAVE_OBJ   := $(BUILD_DIR)/kernel_wave.o
KERNEL_BIN := $(BUILD_DIR)/kernel

# ===== Targets =====

all: iso

# --- Wave \u2192 object (.o)
$(WAVE_OBJ): $(WAVE_SRC)
    @mkdir -p $(BUILD_DIR)
    @mkdir -p target
    $(WAVEC) build -o $(WAVE_SRC)
    @mv target/kernel.o $(WAVE_OBJ)

# --- ASM \u2192 object (.o)
$(ASM_OBJ): $(ASM_SRC)
    @mkdir -p $(BUILD_DIR)
    $(NASM) -f elf64 $(ASM_SRC) -o $(ASM_OBJ)

# --- Link kernel
$(KERNEL_BIN): $(ASM_OBJ) $(WAVE_OBJ) $(LINKER)
    $(LD) -m elf_x86_64 -T $(LINKER) -o $(KERNEL_BIN) $(ASM_OBJ) $(WAVE_OBJ)

# --- Build GRUB ISO
iso: $(KERNEL_BIN)
    @rm -rf $(ISO_DIR)
    @mkdir -p $(ISO_DIR)/boot/grub
    cp $(KERNEL_BIN) $(ISO_DIR)/boot/kernel
    printf 'set timeout=0\\nset default=0\\n\\nmenuentry &quot;WaveOS&quot; {\\n  multiboot2 /boot/kernel\\n  boot\\n}\\n' &gt; $(ISO_DIR)/boot/grub/grub.cfg
    $(GRUB_MKISO) -o $(ISO_IMAGE) $(ISO_DIR)

# --- Run in QEMU
run: iso
    qemu-system-x86_64 -cdrom $(ISO_IMAGE)

# --- Clean
clean:
    rm -rf $(BUILD_DIR) $(ISO_DIR) $(ISO_IMAGE) target

.PHONY: all iso run clean
</code></pre>`},{slug:"2026-02-27-patch-296-the-developer-experience-update-pattern-matching-null-and-modern-diagnostics",title:"Patch #296: The Developer Experience Update: Pattern Matching, null, and Modern Diagnostics",date:"2026-02-27T06:46:20",dateDisplay:"2026-02-27",description:"We believe that a language is only as good as the feedback it provides to the developer. Our latest update focuses on transforming Wave into a more mature and user-friendly tool by introducing powerfu",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/uploads/covers/688f564f07f13939f0c67146/97c01a45-7cce-4428-89ed-21ba0747511c.png",contentHtml:`<h1>Patch #296: The Developer Experience Update: Pattern Matching, null, and Modern Diagnostics</h1>
<p>We believe that a language is only as good as the feedback it provides to the developer. Our latest update focuses on transforming Wave into a more mature and user-friendly tool by introducing powerful control flow constructs and a world-class diagnostic system.</p>
<h3>1. Rust-Style Advanced Diagnostics</h3>
<p>The highlight of this release is our completely rewritten error reporting infrastructure. We\u2019ve moved away from simple, one-line error messages to a <strong>rich, context-aware diagnostic system</strong>.</p>
<ul>
<li>
<p><strong>Source Snippets &amp; Carets</strong>: Errors now display the relevant part of your source code, highlighting the exact location of the issue with caret markers (^) and providing multi-line context.</p>
</li>
<li>
<p><strong>Error Codes</strong>: We\u2019ve introduced unique error codes (e.g., E1001, E2001). These codes make it easier to search for documentation and troubleshoot common issues.</p>
</li>
<li>
<p><strong>Panic-Guarded Runner</strong>: Our new runner can catch backend failures and use source-location inference to map low-level LLVM errors back to the specific line in your Wave source code.</p>
</li>
</ul>
<h3>2. Powerful Control Flow: The match Statement</h3>
<p>Pattern matching has arrived! Wave now supports the match statement, allowing for cleaner and more expressive conditional logic compared to long if-else chains.</p>
<ul>
<li>
<p><strong>Efficient Lowering</strong>: The compiler translates match statements into highly efficient LLVM switch instructions, ensuring that your code remains fast even as logic grows complex.</p>
</li>
<li>
<p><strong>Pointer Safety with null</strong>: We\u2019ve officially introduced the null keyword. Unlike simple integers, the null literal is semantically restricted to pointer types (ptr), preventing accidental misuse in arithmetic logic.</p>
</li>
</ul>
<h3>3. Scaling Up: New Dependency Management</h3>
<p>As your projects grow, so does the need for external libraries. We\u2019ve introduced a formal dependency resolution system to help you manage multi-package projects.</p>
<ul>
<li>
<p><strong>External Packages</strong>: Using the new --dep and --dep-root CLI flags, you can define external package paths.</p>
</li>
<li>
<p><strong>Namespaced Imports</strong>: Wave now supports namespaced imports like import("pkg::module"). The compiler will search across your defined dependency roots to find and link the correct files automatically.</p>
</li>
</ul>
<h3>4. Hardening the Frontend: Lexer &amp; Parser Robustness</h3>
<p>We\u2019ve performed a deep refactoring of our frontend to ensure that no error goes unnoticed.</p>
<ul>
<li>
<p><strong>Result-Based Propagation</strong>: The lexer and parser now return Result<T, ParseError> everywhere. This ensures that failures are propagated precisely, allowing the new diagnostic system to give you better feedback.</p>
</li>
<li>
<p><strong>Nested Comments</strong>: By popular demand, Wave now supports nested multi-line comments (/* ... /* ... <em>/ ...</em> /), making it easier to comment out large blocks of code that already contain comments.</p>
</li>
<li>
<p><strong>Better Validation</strong>: We\u2019ve improved escape sequence validation in string and character literals, catching invalid sequences at compile time.</p>
</li>
</ul>
<h3>5. Backend Refinements</h3>
<p>The LLVM backend has been updated to support the new language features while maintaining our commitment to performance:</p>
<ul>
<li>
<p><strong>Type Narrowing</strong>: We\u2019ve reinforced the rules against implicit narrowing in assignments and returns, ensuring that your code is type-safe.</p>
</li>
<li>
<p><strong>Optimization Alignment</strong>: Our optimization pipeline has been normalized, with -Ofast now consistently mapping to -O3 levels for stable, high-performance output.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>This update is all about <strong>Developer Experience (DX)</strong>. Whether it's the clarity of our new error messages or the expressiveness of the match statement, Wave is now a much more powerful and comfortable language to build with.</p>
<p>Update your compiler today and experience a new level of productivity!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/296">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-02-23-patch-294-control-flow-and-confidence-full-for-loops-and-strict-type-safety",title:"Patch #294: Control Flow and Confidence: Full 'for' Loops and Strict Type Safety",date:"2026-02-23T07:04:00",dateDisplay:"2026-02-23",description:"As Wave continues to mature, we are focusing on two main pillars: developer productivity and compile-time reliability. Our latest patch delivers on both by introducing C-style for loops and enforcing",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cloudmate-test.s3.us-east-1.amazonaws.com/uploads/covers/688f564f07f13939f0c67146/a4fbe862-bd96-49a4-9ba3-227e07ced138.png",contentHtml:`<h1>Patch #294: Control Flow and Confidence: Full 'for' Loops and Strict Type Safety</h1>
<p>As Wave continues to mature, we are focusing on two main pillars: developer productivity and compile-time reliability. Our latest patch delivers on both by introducing C-style <code>for</code> loops and enforcing strict rules against implicit type narrowing\u2014ensuring that your code is both expressive and safe.</p>
<h3>1. The Arrival of Full 'for' Loops</h3>
<p>While <code>while</code> loops are powerful, the <code>for</code> loop is often the preferred choice for iteration due to its concise syntax. Wave now supports full C-style <code>for</code> loops, including local variable initialization.</p>
<ul>
<li>
<p><strong>Scoped Initialization</strong>: You can now declare loop-local variables directly in the loop header (e.g., <code>for (var i: i32 = 0; i &lt; 10; i += 1)</code>). These variables are automatically cleaned up once the loop finishes, preventing "namespace pollution."</p>
</li>
<li>
<p><strong>Robust Codegen</strong>: Our LLVM backend now handles complex loop scopes, ensuring that the initialization, condition, and increment blocks are generated with optimal performance.</p>
</li>
</ul>
<h3>2. Strict Type Safety: No More Hidden Narrowing</h3>
<p>One of the most common sources of bugs in systems programming is "narrowing"\u2014accidentally squeezing a large value (like an <code>i64</code>) into a small variable (like an <code>i32</code>).</p>
<ul>
<li>
<p><strong>Forbidding Implicit Narrowing</strong>: Wave now explicitly forbids implicit narrowing in assignments, binary operations, and function arguments. If there's a risk of data loss, the compiler will require an explicit cast, forcing you to acknowledge the conversion.</p>
</li>
<li>
<p><strong>Context-Dependent Literal Inference</strong>: To make this strictness less tedious, we\u2019ve made the compiler smarter. Numeric literals (like <code>42</code>) now use context clues. If you pass a literal to a function expecting an <code>i8</code>, the compiler will infer the literal as an <code>i8</code> automatically, provided the value fits.</p>
</li>
</ul>
<h3>3. Smarter Diagnostics: From <code>Option</code> to <code>Result</code></h3>
<p>We have overhauled the internal logic of the parser. Previously, the parser returned an <code>Option</code>, meaning it either succeeded or failed silently.</p>
<ul>
<li>
<p><strong>Structured Error Reporting</strong>: The parser now returns a <code>Result&lt;Vec&lt;ASTNode&gt;, ParseError&gt;</code>. This allows us to propagate detailed error messages, source labels, and helpful hints directly to your terminal.</p>
</li>
<li>
<p><strong>Improved Imports</strong>: Structured errors now extend to the import system. If an imported file has a syntax error, Wave will point you exactly to the line and column in that file, making it much easier to debug multi-file projects.</p>
</li>
</ul>
<h3>4. Modular Standard Library &amp; Optimized Backend</h3>
<p>We\u2019ve performed a cleanup of the standard library and our optimization pipeline:</p>
<ul>
<li>
<p><strong>Role-Based Modules</strong>: We\u2019ve moved away from "umbrella" files. You can now import specific modules based on their role, such as <code>std::time::clock</code>. This keeps your namespace clean and reduces compile times.</p>
</li>
<li>
<p><strong>Backend Alignment</strong>: We have normalized our optimization flags. <code>-Ofast</code> is now mapped to <code>-O3</code> within our LLVM pass pipeline, ensuring aggressive but stable optimizations across all targets.</p>
</li>
<li>
<p><strong>Strict Dependency Policy</strong>: The <code>std/README.md</code> has been updated with a clear policy on <code>extern(c)</code> usage, guiding contributors on how to build a safe and portable standard library.</p>
</li>
</ul>
<h3>Why This Matters</h3>
<p>With these changes, Wave is moving toward a "safety-first" philosophy. By catching type mismatches early and providing clearer feedback, we enable you to build complex systems with confidence. The addition of the <code>for</code> loop simply makes that process feel more natural and familiar.</p>
<p>Check out the updated tests and standard library to see these new features in action!</p>`},{slug:"2026-02-22-Refining-C-ABI-Interoperability-and-Type-Inference",title:"Patch #293: Stability and Precision: Refining C ABI Interoperability and Type Inference",date:"2026-02-22T14:22:31",dateDisplay:"2026-02-22",description:"Following our major move to LLVM 21, our focus has shifted toward stabilizing the new architecture and perfecting how Wave interacts with the C ecosystem. Our latest patch introduces significant refin",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cloudmate-test.s3.us-east-1.amazonaws.com/uploads/covers/688f564f07f13939f0c67146/e222bd7b-a50c-40e2-b7ab-7a955cf5871d.png",contentHtml:`<h1>Patch #293: Stability and Precision: Refining C ABI Interoperability and Type Inference</h1>
<p>Following our major move to LLVM 21, our focus has shifted toward stabilizing the new architecture and perfecting how Wave interacts with the C ecosystem. Our latest patch introduces significant refinements to the C ABI (Application Binary Interface), smarter type inference for opaque pointers, and enhanced data serialization tools.</p>
<h3>1. High-Precision C ABI Lowering</h3>
<p>Interfacing with C requires more than just matching function names; it requires matching how the CPU handles data.</p>
<ul>
<li>
<p><strong>Aggregates and Registers</strong>: We have updated <code>abi_c.rs</code> to pass small "mixed" aggregates (structs containing both integers and floats) as direct values. This allows the LLVM backend to more effectively assign them to either INTEGER or SSE (floating-point) registers, matching the behavior of standard C compilers and boosting performance.</p>
</li>
<li>
<p><strong>Standard-Compliant</strong> <code>main</code>: In many operating systems, the <code>main</code> function is expected to return an integer. If your Wave <code>main</code> function is defined without a return value, the compiler now implicitly adds a <code>return 0</code> and lowers the return type to <code>i32</code> in LLVM to satisfy standard execution environments.</p>
</li>
<li>
<p><strong>Redirected Symbol Resolution</strong>: We fixed a critical bug where external C functions were being looked up by their high-level Wave name rather than their redirected LLVM symbol name. This ensures that custom-named FFI bindings now work exactly as intended.</p>
</li>
</ul>
<h3>2. Smarter Type Inference in a "Type-less" World</h3>
<p>With our recent transition to Opaque Pointers, the compiler can no longer rely on pointers to carry their own type information. We\u2019ve introduced several tools to manage this complexity:</p>
<ul>
<li>
<p><strong>Context-Aware Addressing</strong>: The new <code>generate_address_and_type_ir</code> helper provides both the memory address and its corresponding Wave type simultaneously. This simplifies the logic for complex array indexing and struct field access.</p>
</li>
<li>
<p><strong>Enhanced Mapping</strong>: We implemented <code>infer_wave_type_of_expr</code> and <code>basic_ty_to_wave_ty</code> to bridge the gap between LLVM\u2019s internal types and Wave\u2019s high-level type system, ensuring type safety even when the backend type is ambiguous.</p>
</li>
<li>
<p><strong>Legacy-Friendly</strong> <code>deref</code>: To keep existing codebases working smoothly, the compiler now handles "redundant" dereferences gracefully. For example, <code>deref array[i]</code> is now explicitly allowed on expressions that are already addressable, maintaining compatibility while we transition to stricter syntax.</p>
</li>
</ul>
<h3>3. Reliable JSON Serialization</h3>
<p>As Wave begins to handle more metadata, reliable data exchange is key. We have significantly upgraded our built-in JSON utilities:</p>
<ul>
<li>
<p><strong>Pretty vs. Compact</strong>: You can now choose between <code>write_pretty_to</code> for human-readable output and <code>write_compact_to</code> for efficient data storage.</p>
</li>
<li>
<p><strong>Robust Escaping</strong>: We implemented full JSON string escaping. The engine now correctly handles newlines, quotes, backslashes, and control characters, ensuring that your data remains valid JSON regardless of its content.</p>
</li>
</ul>
<h3>4. New Optimization Flags</h3>
<p>We\u2019ve expanded the Wave CLI to give developers more control over the final binary:</p>
<ul>
<li>
<p><code>-Os</code>: Optimizes the code specifically for binary size\u2014perfect for embedded or resource-constrained environments.</p>
</li>
<li>
<p><code>-Ofast</code>: Enables aggressive optimizations that may disregard strict standards (like floating-point precision) to achieve maximum execution speed.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>This update is about <strong>predictability</strong>. Whether you are calling a complex C function, calculating memory addresses, or serializing data to JSON, Wave now behaves more consistently and follows industry standards more closely.</p>
<p>These internal refinements provide the stability needed to build large-scale applications and complex system interfaces with confidence.</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/293">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-02-17-introduction-to-whale-ir-v0",title:"Introduction to Whale IR v0",date:"2026-02-17T13:18:46",dateDisplay:"2026-02-17",description:"Whale IR (WIR) is the intermediate representation used by the Whale toolchain, which powers the Wave programming language.It is designed to be: SSA-based Fully defined (no undefined behavior) Faithful to the original AST at -O0 Optimization-frien...",tags:["toolchain","compiler","LLVM","Programming Blogs","programming languages","wave-lang"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1771334277505/94be1859-5e2b-4f86-9aad-4edcdc7b9d48.png",contentHtml:`<h1>Introduction to Whale IR v0</h1>
<p>Whale IR (WIR) is the intermediate representation used by the <strong>Whale toolchain</strong>, which powers the Wave programming language.<br>
It is designed to be:</p>
<ul>
<li>
<p>SSA-based</p>
</li>
<li>
<p>Fully defined (no undefined behavior)</p>
</li>
<li>
<p>Faithful to the original AST at <code>-O0</code></p>
</li>
<li>
<p>Optimization-friendly starting from <code>-O1</code></p>
</li>
<li>
<p>Explicit in control flow, memory, and trap semantics</p>
</li>
</ul>
<p>Unlike LLVM IR, Whale IR is built with <strong>predictability and language-level correctness guarantees</strong> as primary goals.</p>
<hr>
<h2>From Wave Source to Whale IR</h2>
<p>Consider a simple Wave function:</p>
<p><code>add.wave</code></p>
<pre><code class="language-kotlin">fun add(a: i32, b: i32) -&gt; i32 {
    return a + b;
}
</code></pre>
<p>This is lowered into Whale IR:</p>
<p><code>out.wir</code></p>
<pre><code class="language-kotlin">module {
  target &quot;x86_64-whale-linux&quot;
  datalayout { ptr=64, endian=little }

  fn @add(a: i32, b: i32) -&gt; i32 {
  entry:
    %v2: ptr&lt;i32&gt; = alloca i32, align 4
    %v3: ptr&lt;i32&gt; = alloca i32, align 4
    store i32 %v0, ptr&lt;i32&gt; %v2, align 4
    store i32 %v1, ptr&lt;i32&gt; %v3, align 4
    %v4: i32 = load i32, ptr&lt;i32&gt; %v2, align 4
    %v5: i32 = load i32, ptr&lt;i32&gt; %v3, align 4
    %v6: i32 = add i32 %v4, %v5
    ret i32 %v6
  }
}
</code></pre>
<p>For comparison, the equivalent LLVM IR looks like this:</p>
<pre><code class="language-kotlin">define i32 @add(i32 %0, i32 %1) {
entry:
  %a = alloca i32, align 4
  store i32 %0, ptr %a, align 4
  %b = alloca i32, align 4
  store i32 %1, ptr %b, align 4
  %load_a = load i32, ptr %a, align 4
  %load_b = load i32, ptr %b, align 4
  %addtmp = add i32 %load_a, %load_b
  ret i32 %addtmp
}
</code></pre>
<p>Structurally similar \u2014 but philosophically different.</p>
<hr>
<h1>Core Design Principles</h1>
<h2>1. SSA-Based</h2>
<p>All values are in Static Single Assignment form.</p>
<pre><code class="language-kotlin">%t0: i32 = add i32 %a, %b
</code></pre>
<p>Each SSA value is typed and explicitly declared.</p>
<hr>
<h2>2. No Undefined Behavior</h2>
<p>Whale IR eliminates undefined behavior by construction.</p>
<p>Examples:</p>
<ul>
<li>
<p>Division by zero \u2192 defined <code>trap</code></p>
</li>
<li>
<p>Signed overflow \u2192 defined wrap-around</p>
</li>
<li>
<p>Shift overflow \u2192 shift amount is masked</p>
</li>
<li>
<p>Null dereference \u2192 defined <code>trap</code></p>
</li>
<li>
<p>Misaligned access \u2192 defined <code>trap</code></p>
</li>
</ul>
<p>There is <strong>no silent UB</strong>.</p>
<p>This makes IR behavior predictable across targets.</p>
<hr>
<h2>3. Explicit Trap Semantics</h2>
<p>Whale IR does not hide exceptional behavior.</p>
<h3>Unconditional trap</h3>
<pre><code class="language-kotlin">trap reason=&quot;div_by_zero&quot;
</code></pre>
<p>Terminates the block.</p>
<h3>Conditional trap</h3>
<pre><code class="language-kotlin">trap_if i1 %cond, reason=&quot;overflow&quot;
</code></pre>
<p>This allows frontends to insert checks while still enabling optimizers to remove them when provably unnecessary.</p>
<hr>
<h2>4. Checked Arithmetic as First-Class IR</h2>
<p>Instead of encoding overflow through flags or implicit rules, Whale IR provides checked arithmetic explicitly.</p>
<pre><code class="language-kotlin">%t: tuple&lt;i32, i1&gt; = sadd_chk i32 %a, %b
%res: i32 = extract tuple&lt;i32, i1&gt; %t, 0
%ov:  i1  = extract tuple&lt;i32, i1&gt; %t, 1
trap_if i1 %ov, reason=&quot;overflow&quot;
</code></pre>
<p>This design:</p>
<ul>
<li>
<p>Keeps default arithmetic fast (wrap semantics)</p>
</li>
<li>
<p>Allows safe-mode semantics at language level</p>
</li>
<li>
<p>Enables optimizers to remove overflow checks via range analysis</p>
</li>
</ul>
<hr>
<h2>5. AST-Faithful at -O0</h2>
<p>At <code>-O0</code>, Whale IR preserves:</p>
<ul>
<li>
<p>Unreachable blocks</p>
</li>
<li>
<p>Dead code</p>
</li>
<li>
<p>Structural layout</p>
</li>
</ul>
<p>Example:</p>
<pre><code class="language-kotlin">dead:
  %u0: i32 = mul i32 %x, 999
  br label %exit
</code></pre>
<p>Dead blocks may remain in the IR if they originate from the AST.</p>
<p>Cleanup happens at <code>-O1</code> and above.</p>
<hr>
<h2>6. Clean and Explicit Type System</h2>
<p>Whale IR includes:</p>
<h3>Scalars</h3>
<ul>
<li>
<p><code>i1 i8 i16 i32 i64 i128</code></p>
</li>
<li>
<p><code>u8 u16 u32 u64 u128</code></p>
</li>
<li>
<p><code>f16 f32 f64</code></p>
</li>
</ul>
<h3>Aggregates</h3>
<ul>
<li>
<p><code>array&lt;T, N&gt;</code></p>
</li>
<li>
<p><code>struct{T1, T2, ...}</code></p>
</li>
<li>
<p><code>tuple&lt;T1, T2, ...}</code></p>
</li>
</ul>
<h3>Pointers</h3>
<ul>
<li><code>ptr&lt;T&gt;</code></li>
</ul>
<p>All instructions explicitly declare result types:</p>
<pre><code class="language-kotlin">%v: i32 = load i32, ptr&lt;i32&gt; %p, align 4
</code></pre>
<p>No implicit typing.</p>
<hr>
<h2>7. Memory Model</h2>
<p>Memory operations are explicit:</p>
<ul>
<li>
<p><code>alloca</code></p>
</li>
<li>
<p><code>load</code></p>
</li>
<li>
<p><code>store</code></p>
</li>
<li>
<p><code>gep</code></p>
</li>
<li>
<p><code>memcpy</code></p>
</li>
<li>
<p><code>memset</code></p>
</li>
</ul>
<p>Whale IR defines behavior for:</p>
<ul>
<li>
<p>Null dereference \u2192 trap</p>
</li>
<li>
<p>Misaligned access \u2192 trap</p>
</li>
</ul>
<p>This avoids platform-dependent UB behavior.</p>
<hr>
<h1>What Makes Whale IR Different?</h1>
<p>Whale IR is not trying to be a clone of LLVM IR.</p>
<p>Its design emphasizes:</p>
<ul>
<li>
<p>Defined behavior over permissive semantics</p>
</li>
<li>
<p>Predictability over historical compatibility</p>
</li>
<li>
<p>Explicit trap representation</p>
</li>
<li>
<p>Frontend-driven correctness</p>
</li>
<li>
<p>Optimization that removes checks rather than relying on UB</p>
</li>
</ul>
<p>LLVM IR treats many situations as undefined behavior to enable aggressive optimization.<br>
Whale IR instead encodes behavior explicitly and lets analysis remove unnecessary checks safely.</p>
<p>This makes Whale IR particularly suitable for:</p>
<ul>
<li>
<p>System-level languages with strong correctness guarantees</p>
</li>
<li>
<p>Deterministic compilation pipelines</p>
</li>
<li>
<p>Fully controlled toolchains (assembler, object format, linker)</p>
</li>
<li>
<p>Future self-hosted compiler development</p>
</li>
</ul>
<hr>
<h1>Conclusion</h1>
<p>Whale IR (WIR) is the foundation of the Whale toolchain.</p>
<p>It is:</p>
<ul>
<li>
<p>SSA-based</p>
</li>
<li>
<p>Fully defined</p>
</li>
<li>
<p>Trap-explicit</p>
</li>
<li>
<p>Optimization-friendly</p>
</li>
<li>
<p>Designed for long-term toolchain independence</p>
</li>
</ul>
<p>While inspired by modern IR design principles, it intentionally avoids undefined behavior and hidden semantics.</p>
<p>Whale IR is not just a lowering format \u2014<br>
it is the semantic backbone of the Wave ecosystem.</p>`},{slug:"2026-02-15-patch-291-modernizing-the-core-upgrading-to-llvm-21-and-the-era-of-opaque-pointers",title:"Patch #291: Modernizing the Core: Upgrading to LLVM 21 and the Era of Opaque Pointers",date:"2026-02-15T12:44:14",dateDisplay:"2026-02-15",description:"As the compiler landscape evolves, staying current with foundational technologies is essential for performance and reliability. Our latest patch performs a major infrastructure upgrade, transitioning the Wave backend to LLVM 21 and adopting the moder...",tags:["LLVM","wave-lang","Programming Blogs","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1771159084275/7a77b27a-a7ce-4ec4-a0c9-82b8ea7b671d.png",contentHtml:`<h1>Patch #291: Modernizing the Core: Upgrading to LLVM 21 and the Era of Opaque Pointers</h1>
<p>As the compiler landscape evolves, staying current with foundational technologies is essential for performance and reliability. Our latest patch performs a major infrastructure upgrade, transitioning the Wave backend to <strong>LLVM 21</strong> and adopting the modern <strong>Opaque Pointer</strong> standard. We\u2019ve also introduced a new graphical tool to make managing the compiler build process easier than ever.</p>
<h3>1. The Opaque Pointer Revolution</h3>
<p>The most significant technical shift in this update is the transition to <strong>Opaque Pointers</strong>. In older versions of LLVM, pointers carried type information (e.g., <code>i32*</code> or <code>struct.User*</code>). Modern LLVM has moved to a single, unified <code>ptr</code> type.</p>
<ul>
<li><strong>Explicit Type Tracking</strong>: Since pointers no longer "know" what they point to, our codegen now explicitly tracks types during every memory operation. We\u2019ve updated all <code>build_load</code>, <code>build_store</code>, and <code>build_gep</code> calls to provide explicit LLVM types.</li>
<li><strong>Refactored Address Logic</strong>: Modules like <code>address.rs</code> and <code>lvalue.rs</code> have been overhauled to infer Wave-level types during IR generation, ensuring that the correct instructions are emitted even without typed pointers.</li>
</ul>
<p>This change not only aligns Wave with the latest LLVM standards but also results in a cleaner, more robust internal architecture.</p>
<h3>2. Next-Gen Optimization with PassBuilder</h3>
<p>We have officially retired the legacy <code>PassManagerBuilder</code> in favor of the modern LLVM <strong>PassBuilder</strong>. </p>
<p>This allows Wave to leverage the newest optimization pipelines provided by LLVM (such as <code>default&lt;O3&gt;</code>). The result is a more sophisticated optimization process that better understands the nuances of modern hardware, leading to more efficient machine code generation.</p>
<h3>3. Visualizing the Toolchain: GUI Build Manager</h3>
<p>To lower the barrier for building and installing the Wave toolchain, we\u2019ve added a <strong>GUI Build Manager</strong> to our <code>x.py</code> script.</p>
<ul>
<li><strong>Tkinter-based Interface</strong>: You can now manage targets, optimization levels, and installations through a simple visual window.</li>
<li><strong>Cross-Compilation Made Easy</strong>: We\u2019ve significantly improved support for cross-compiling for Windows (<code>x86_64-pc-windows-gnu</code>) from Linux hosts using MinGW LLVM prefixes, all configurable via the new GUI or CLI.</li>
</ul>
<h3>4. Smarter Frontend and Bug Fixes</h3>
<p>The compiler frontend hasn't been forgotten. We\u2019ve performed a deep refactoring and fixed critical C-interoperability bugs:</p>
<ul>
<li><strong>Modular Lexer</strong>: Following our "separation of concerns" philosophy, the Lexer has been split into dedicated modules (<code>core</code>, <code>cursor</code>, <code>trivia</code>, <code>literals</code>, <code>ident</code>, and <code>scan</code>), making the code much easier to navigate and maintain.</li>
<li><strong>C Varargs Type Promotion</strong>: We fixed a bug in <code>printf</code> handling where small types weren't being correctly promoted according to C standards. Small integers are now promoted to <code>i32</code> and floats to <code>double</code>, ensuring perfect compatibility with the standard C library.</li>
<li><strong>C-String Tracking</strong>: Since LLVM <code>ptr</code> is now ambiguous, we\u2019ve implemented manual tracking for C-string status to ensure our I/O logic remains accurate.</li>
</ul>
<h3>Why This Matters</h3>
<p>By moving to LLVM 21 and Opaque Pointers, we have "future-proofed" Wave. These changes ensure that we can continue to adopt new LLVM features as they are released without massive rewrites. Combined with the new GUI manager and cross-compilation improvements, Wave is becoming a more powerful and accessible tool for developers on all platforms.</p>
<p>The foundation is now ready for the next wave of language features!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/291">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-02-09-announcing-wave-v017-pre-beta-release-the-foundation-for-system-level-excellence",title:"Announcing Wave v0.1.7-pre-beta Release: The Foundation for System-Level Excellence",date:"2026-02-09T08:54:58",dateDisplay:"2026-02-09",description:"We are proud to announce a major milestone in the evolution of the Wave programming language. This release is not just a collection of patches; it represents a fundamental shift in Wave\u2019s capabilities. From a completely overhauled CLI to sophisticate...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770627265960/01a96a8c-fe7d-4837-b7ad-36eaeea1524f.png",contentHtml:`<h1>Announcing Wave v0.1.7-pre-beta Release: The Foundation for System-Level Excellence</h1>
<p>We are proud to announce a major milestone in the evolution of the Wave programming language. This release is not just a collection of patches; it represents a fundamental shift in Wave\u2019s capabilities. From a completely overhauled CLI to sophisticated C ABI interoperability and a comprehensive Linux system interface, Wave is now equipped for serious systems engineering.</p>
<hr>
<h3>1. Mastering Interoperability: System V ABI &amp; C FFI</h3>
<p>The implementation of a robust <strong>C Calling Convention (ABI) lowering</strong> mechanism allows Wave to handle complex data structures with the same precision as a native C compiler.</p>
<ul>
<li><strong>ABI Compliance</strong>: Our LLVM backend now strictly follows standard ABI rules, including <strong>SRet</strong> (Structured Return) for large aggregates, <strong>ByVal</strong> for passing structures by value, and <strong>Split/HFA</strong> (Homogeneous Floating-point Aggregates) for high-performance vector passing.</li>
<li><strong>The <code>extern</code> Keyword</strong>: Declare external C functions with ease, including support for block syntax and symbol redirection.</li>
<li><strong>Safety in Packing</strong>: We\u2019ve refactored aggregate packing to use <code>build_memcpy</code> instead of simple bit-casts, ensuring memory alignment requirements are strictly respected during FFI calls.</li>
</ul>
<h3>2. Direct Kernel Access: Linux x86_64 Syscall Suite</h3>
<p>Wave now speaks the language of the Linux kernel natively via high-precision inline assembly. This foundation has allowed us to build the initial <strong>Wave Standard Library (<code>std</code>)</strong>:</p>
<ul>
<li><strong><code>std::sys::linux</code></strong>: Native, zero-overhead interfaces for FS, Memory Management (<code>mmap</code>), Process Control, and Time.</li>
<li><strong><code>std::net</code></strong>: Synchronous networking with <code>TcpListener</code>, <code>TcpStream</code>, and <code>UdpSocket</code>.</li>
<li><strong><code>std::libc</code></strong>: Ready-to-use bindings for essential C functions like <code>malloc</code>, <code>free</code>, <code>stdio</code>, and <code>unistd</code>.</li>
</ul>
<blockquote>
<p><em>Note: The standard library is in early development. While we are stabilizing the internal coupling, we recommend using <code>std/libc</code> for critical external bindings.</em></p>
</blockquote>
<h3>3. Hardened Inline Assembly: Clobbers and Normalization</h3>
<p>Low-level programming requires total control. We\u2019ve upgraded our <code>asm</code> blocks to support <strong>clobber clauses</strong> (e.g., <code>clobber("rax", "memory")</code>). This prevents subtle optimization bugs by explicitly informing the compiler about register and memory trashing.</p>
<p>The new <strong>AsmPlan</strong> engine automatically handles register normalization and sign-aware operand extension, making inline assembly both safer and more expressive.</p>
<h3>4. Advanced Type System: Enums and Type Aliases</h3>
<p>Wave now provides better tools for data modeling and code readability:</p>
<ul>
<li><strong>Enums</strong>: Define named constants with a specific underlying representation. Enum variants are automatically treated as global constants.
    <code>rust
    enum ShaderUniformType -&gt; i32 { FLOAT = 0, VEC2, VEC3 }</code></li>
<li>
<p><strong>Type Aliases</strong>: Simplify complex type signatures and improve code reuse.
    \`\`\`rust
    enum ShaderUniformType -&gt; i32 {
        FLOAT = 0,
        VEC2,
        VEC3,
        VEC4
    }</p>
<p>type UniformType = ShaderUniformType;
\`\`\`
*   <strong>Type Resolution Pass</strong>: A new compiler pass flattens aliases and resolves enum types across the entire program before code generation begins.</p>
</li>
</ul>
<h3>5. Iterative Constant Evaluation</h3>
<p>Our constant evaluator is now significantly more powerful. It supports <strong>multi-round resolution</strong>, allowing constants to depend on other constants defined later in your code.</p>
<ul>
<li><strong>Aggregate Support</strong>: You can now define constants that are <strong>struct literals</strong> or <strong>array literals</strong>.</li>
<li><strong>Built-in Keywords</strong>: <code>true</code>, <code>false</code>, and <code>null</code> are now fully supported in constant contexts.</li>
<li><strong>Frontend Validation</strong>: The compiler now catches undeclared identifiers and type mismatches much earlier in the verification phase.</li>
</ul>
<h3>6. A Modern, Structured CLI</h3>
<p>We have completely refactored the <code>wavec</code> toolchain with a command-dispatch system:</p>
<ul>
<li><strong>Commands</strong>: <code>run</code>, <code>build</code>, <code>install std</code>, and <code>update std</code>.</li>
<li><strong>Enhanced Linking</strong>: Use <code>--link</code> and <code>-L</code> to link against external system libraries directly.</li>
<li><strong>Improved Diagnostics</strong>: Refined RGB color palette and accurate source-pointing for a better developer experience.</li>
</ul>
<h3>7. Formalizing the Project</h3>
<ul>
<li><strong>Wave Foundation</strong>: Core maintenance and assets are now officially managed by the Wave Foundation.</li>
<li><strong>MPL-2.0 License</strong>: All source files are now licensed under the Mozilla Public License v2.0.</li>
<li><strong>Rich Examples</strong>: Explore <code>examples/</code> for everything from a <strong>mini-game</strong> to a <strong>TCP HTTP server</strong> and <strong>Graph algorithms (DFS/BFS)</strong>.</li>
</ul>
<hr>
<h3>Looking Ahead</h3>
<p>Wave v0.1.7-pre-beta transforms the language into a tool capable of building its own ecosystem. With C FFI, enums, and direct syscall support, Wave is ready for the next level of system programming.</p>
<h2>Get started:</h2>
<pre><code class="language-bash"># Install the compiler
# Set up the standard library
wavec install std

# Run the new Enum/Type Alias example
wavec run examples/type_enum.wave
</code></pre>
<h2>Install</h2>
<pre><code class="language-bash">curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.7-pre-beta
</code></pre>
<p><em>Wave: Build fast, stay lean, and control the machine.</em></p>
<p><em>Build fast, stay lean, and keep waving!</em></p>
<hr>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/releases/tag/v0.1.7-pre-beta">Release Note</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-02-09-patch-285-strengthening-the-type-system-enums-aliases-and-iterative-constants",title:"Patch #285: Strengthening the Type System: Enums, Aliases, and Iterative Constants",date:"2026-02-09T07:46:06",dateDisplay:"2026-02-09",description:"As we move toward v0.1.7-pre-beta, Wave is becoming more than just a tool for low-level systems programming; it\u2019s becoming a language that helps you organize complex logic with ease. Our latest update focuses on expanding the type system and making t...",tags:["wave-lang","Programming Blogs","programming languages","patching","languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770623089274/2500483b-a3dd-4a64-89f0-5c500434c4b6.png",contentHtml:`<h1>Patch #285: Strengthening the Type System: Enums, Aliases, and Iterative Constants</h1>
<p>As we move toward <strong>v0.1.7-pre-beta</strong>, Wave is becoming more than just a tool for low-level systems programming; it\u2019s becoming a language that helps you organize complex logic with ease. Our latest update focuses on expanding the type system and making the compiler significantly smarter about compile-time values.</p>
<h3>1. New Organizational Tools: Enums &amp; Type Aliases</h3>
<p>To write clean, maintainable code, you need tools to describe your data and its meaning. We\u2019ve added two core features:</p>
<ul>
<li>
<p><strong>Enums</strong>: You can now define a set of named constants with an underlying representation.</p>
<p><code>kotlin
enum Status -&gt; i32 {
    Success,
    Error,
    Pending
}</code></p>
<p>Enum variants are automatically registered as global constants, making them easy to use throughout your program.</p>
</li>
<li>
<p><strong>Type Aliases</strong>: Long or complex types can now be given simpler names, improving code reuse and readability.</p>
<p><code>kotlin
type Handle = u64;
type Callback = ptr&lt;i32&gt;;</code></p>
</li>
</ul>
<p>To support this, we\u2019ve implemented a pre-codegen <strong>Type Resolution Pass</strong> that flattens aliases and ensures all types are correctly resolved before the first line of LLVM IR is even written.</p>
<h3>2. A More Powerful Constant Evaluation Engine</h3>
<p>Our constant evaluator has graduated from simple arithmetic to handling complex data.</p>
<ul>
<li>
<p><strong>Aggregate Support</strong>: You can now define constants that are <strong>struct literals</strong> or <strong>array literals</strong>. This allows you to bake complex configuration data directly into your binary.</p>
</li>
<li>
<p><strong>Iterative Resolution</strong>: Constants can now depend on other constants defined later in the file. The compiler performs multiple passes (multi-round resolution) until all dependencies are resolved, giving you more freedom in how you organize your code.</p>
</li>
<li>
<p><strong>Built-in Keywords</strong>: <code>true</code>, <code>false</code>, and <code>null</code> are now fully supported in constant contexts.</p>
</li>
</ul>
<h3>3. Safer ABI Handling &amp; Vector Support</h3>
<p>When interfacing with C libraries, passing structs via registers is a delicate operation. We\u2019ve refined our approach:</p>
<ul>
<li>
<p><strong>From Bit-cast to Memcpy</strong>: In our aggregate packing logic (<code>pack_agg_to_int</code>), we\u2019ve moved from direct bit-casting to using <code>build_memcpy</code>. This is a much safer approach that respects memory alignment requirements more strictly during FFI calls.</p>
</li>
<li>
<p><strong>Vector Type Support</strong>: We\u2019ve improved support for <strong>Homogeneous Floating-point Aggregates (HFAs)</strong> by adding coercion logic between Wave structs and LLVM Vector types. This ensures peak performance when passing mathematical vectors to external libraries.</p>
</li>
</ul>
<h3>4. Robust Frontend Validation</h3>
<p>We\u2019ve strengthened our verification pass to catch errors earlier. The compiler now detects the usage of <strong>undeclared identifiers</strong> in expressions and validates that all enum variants are correctly registered before use. This means fewer surprises at the codegen stage and more helpful error messages for you.</p>
<h3>Summary of Key Changes</h3>
<ul>
<li>
<p><strong>Syntax</strong>: Added <code>enum</code> and <code>type</code> keywords.</p>
</li>
<li>
<p><strong>Compile-time</strong>: Enhanced constant evaluation with iterative dependency resolution and aggregate support.</p>
</li>
<li>
<p><strong>Backend</strong>: Refactored aggregate packing using <code>memcpy</code> for better ABI safety.</p>
</li>
<li>
<p><strong>Milestone</strong>: Bumped package version to <strong>v0.1.7-pre-beta</strong>.</p>
</li>
<li>
<p><strong>Infrastructure</strong>: Automatic <code>target/</code> directory creation during build.</p>
</li>
</ul>
<p>This release bridges the gap between high-level code organization and low-level performance. Whether you\u2019re organizing state with enums or defining complex compile-time arrays, Wave v0.1.7-pre-beta provides the foundation you need.</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/285">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-02-06-patch-283-mastering-the-c-abi-robust-ffi-with-structs-and-arrays",title:"Patch #283: Mastering the C ABI: Robust FFI with Structs and Arrays",date:"2026-02-06T12:51:22",dateDisplay:"2026-02-06",description:"When a programming language talks to a C library, it must follow a strict set of rules known as the Calling Convention or ABI. Passing a single integer is simple, but what happens when you pass a 24-byte struct by value? Should it be split into three...",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770382165650/a9e61eaf-c563-4df7-b11e-2c2f5409cee5.png",contentHtml:`<h1>Patch #283: Mastering the C ABI: Robust FFI with Structs and Arrays</h1>
<p>When a programming language talks to a C library, it must follow a strict set of rules known as the <strong>Calling Convention</strong> or <strong>ABI</strong>. Passing a single integer is simple, but what happens when you pass a 24-byte struct by value? Should it be split into three registers? Or passed on the stack? Or perhaps via a hidden pointer?</p>
<p>If the compiler gets this wrong, the result is memory corruption or a crash. Today, we are excited to announce that Wave now implements <strong>System V ABI-compliant C FFI lowering</strong>, making our integration with external C libraries more robust than ever.</p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1770382131705/0739970a-c546-4927-9ddc-2907751815da.png align=" title="center"></p>
<h3>1. The Core: ABI Lowering Logic (<code>abi_c.rs</code>)</h3>
<p>We have introduced a sophisticated lowering engine that classifies how every Wave type should be presented to a C function. This includes:</p>
<ul>
<li>
<p><strong>SRet (Structured Return)</strong>: When a function returns a large struct that doesn't fit in registers, the ABI requires passing a "hidden" first parameter where the result will be stored. Wave now handles this automatically.</p>
</li>
<li>
<p><strong>ByVal (Pass-by-Value)</strong>: For structs passed by value, we now apply the correct LLVM <code>byval</code> attributes and ensure proper memory alignment as dictated by the ABI.</p>
</li>
<li>
<p><strong>Split &amp; HFA (Homogeneous Floating-point Aggregates)</strong>: Small structs containing multiple floats or vectors are now "split" across multiple floating-point registers, matching the high-performance path used by C compilers.</p>
</li>
<li>
<p><strong>Integer Bit-Packing</strong>: Tiny structs are now packed into single integer registers (<code>pack_agg_to_int</code>) to minimize memory access and maximize speed.</p>
</li>
</ul>
<h3>2. Hardware-Aware Compilation</h3>
<p>To calculate sizes and alignments with 100% accuracy, the backend now utilizes LLVM\u2019s <code>TargetData</code> and <code>TargetMachine</code>. This means the compiler is now fully aware of the specific hardware it is targeting, ensuring that a struct's layout in Wave exactly matches its layout in C on that same machine.</p>
<h3>3. Transparent Integration</h3>
<p>The best part of this update is that it\u2019s nearly invisible to the user. We\u2019ve refactored <code>gen_function_call</code> to automatically apply these transformations. When you call an <code>extern</code> C function, the compiler:</p>
<ol>
<li>
<p>Checks the ABI requirements for each argument.</p>
</li>
<li>
<p>Performs necessary bit-casting or pointer loading.</p>
</li>
<li>
<p>Transforms the function call to match the "lowered" signature.</p>
</li>
</ol>
<p>This metadata is propagated throughout the entire codegen pipeline via the new <code>ExternCInfo</code> structure, ensuring consistency across all expressions and statements.</p>
<h3>4. Why This Matters</h3>
<p>Until now, FFI in Wave was mostly limited to simple types and pointers. With this update, the doors are wide open. You can now:</p>
<ul>
<li>
<p>Interface with graphics libraries that pass <code>Vector</code> or <code>Matrix</code> structs by value.</p>
</li>
<li>
<p>Call complex system APIs that return large configuration structures.</p>
</li>
<li>
<p>Use standard C headers without worrying about subtle memory layout mismatches.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>By implementing System V ABI lowering, Wave has taken a massive step toward becoming a truly professional systems programming language. We\u2019ve handled the "hidden complexity" of register splitting and stack alignment so you can focus on building your application.</p>
<p>Wave is now more compatible, more stable, and ready to leverage the full power of the C ecosystem!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/283">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-02-05-patch-282-mastering-the-abi-introducing-typeflavor-and-high-precision-asm",title:"Patch #282: Mastering the ABI: Introducing TypeFlavor and High-Precision ASM",date:"2026-02-05T14:55:42",dateDisplay:"2026-02-05",description:'In systems programming, how a value is represented "inside" the compiler often differs from how it must look "outside" when calling a C library or interacting with CPU registers. Our latest update introduces an elegant solution to this challenge and ...',tags:["wave-lang","Programming Blogs","programming languages","compiler","patch","Blogging"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770303246051/25f4ee19-b859-479c-af26-f80ab1bf4470.png",contentHtml:`<h1>Patch #282: Mastering the ABI: Introducing TypeFlavor and High-Precision ASM</h1>
<p>In systems programming, how a value is represented "inside" the compiler often differs from how it must look "outside" when calling a C library or interacting with CPU registers. Our latest update introduces an elegant solution to this challenge and significantly bolsters our inline assembly engine.</p>
<h3>1. The Concept of "TypeFlavor"</h3>
<p>To bridge the gap between internal logic and external standards, we've introduced <strong>TypeFlavor</strong>. This allows the compiler to distinguish between:</p>
<ul>
<li>
<p><strong>Value Flavor</strong>: Optimized for internal LLVM IR logic (e.g., using <code>i1</code> for booleans to enable efficient branching).</p>
</li>
<li>
<p><strong>AbiC Flavor</strong>: Tailored for C ABI compatibility. For instance, when passing a boolean to a C function, it is now automatically emitted as an <code>i8</code>, ensuring that the receiving C library interprets the value correctly.</p>
</li>
</ul>
<p>By refactoring our codegen entry points to be "flavor-aware," Wave now handles FFI (Foreign Function Interface) calls with much higher predictability and fewer manual workarounds.</p>
<h3>2. Smarter Inline Assembly: Automatic Normalization</h3>
<p>Inline assembly is powerful, but managing bit-widths and signedness manually is error-prone. We\u2019ve overhauled our assembly operand handling to automate these tedious tasks:</p>
<ul>
<li>
<p><strong>Sign-Aware Extension</strong>: The compiler now uses a new <code>infer_signedness</code> utility to determine if an input operand should be sign-extended (<code>sext</code>) or zero-extended (<code>zext</code>) when being promoted to a register width. This prevents unexpected behavior when passing negative numbers to assembly blocks.</p>
</li>
<li>
<p><strong>Bit-Width Normalization</strong>: If your assembly output targets a 64-bit register (like <code>rax</code>) but your destination variable is a 32-bit integer, the compiler now automatically handles the truncation or extension.</p>
</li>
<li>
<p><strong>Enhanced Coercion</strong>: We\u2019ve refined <code>coerce_basic_value_for_store</code> to seamlessly handle complex conversions, such as moving values between floating-point registers and integer variables within an <code>asm</code> block.</p>
</li>
</ul>
<h3>3. Backend Refinements &amp; Recursive Literals</h3>
<p>Our LLVM backend continues to grow more capable:</p>
<ul>
<li>
<p><strong>Recursive Array Literals</strong>: The compiler now supports nested array literal generation when an <code>ArrayType</code> is expected. This allows for cleaner initialization of complex, multi-dimensional data structures.</p>
</li>
<li>
<p><strong>Internal Hygiene</strong>: We\u2019ve performed a sweep of our codegen and parser modules, removing unused imports and clarifying documentation to ensure the codebase remains maintainable for our contributors.</p>
</li>
</ul>
<h3>Why This Matters</h3>
<p>These changes might seem invisible at first glance, but they solve the "mystery bugs" that often plague systems programming\u2014those cases where a value is passed correctly but interpreted wrongly by the hardware or a linked library.</p>
<p>With <strong>TypeFlavor</strong> and <strong>ASM Normalization</strong>, Wave is now better equipped to handle the strict requirements of low-level system interfaces, making it a more robust tool for building kernels, drivers, and high-performance applications.</p>`},{slug:"2026-02-04-wave-language-performance-benchmark-comparison-with-c-and-rust-part-2",title:"Wave Language Performance Benchmark: Comparison with C and Rust (Part 2)",date:"2026-02-04T14:56:02",dateDisplay:"2026-02-04",description:"6 months ago, I benchmarked Wave against C and Rust in this post. Today, 6 months later, I ran the benchmark once again using a significantly more mature version of Wave. The Wave version used in this",tags:["wave-lang","compiler","Benchmark","Programming Blogs","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770216830294/afd2fff9-b5bc-4aac-968a-9eebbc027645.png",contentHtml:`<h1>Wave Language Performance Benchmark: Comparison with C and Rust (Part 2)</h1>
<p>6 months ago, I benchmarked Wave against C and Rust in <a href="https://blog.wave-lang.dev/wave-language-performance-benchmark-comparison-with-c-and-rust">this post</a>.</p>
<p>Today, 6 months later, I ran the benchmark once again using a significantly more mature version of Wave.</p>
<p>The Wave version used in this benchmark is one of the in-development <code>v0.1.7-pre-beta</code> builds, and is valid for commits at or after <a href="https://github.com/wavefnd/Wave/tree/0a5a208e4fc2c68be40617cf300f24de48a4ed9c">this commit</a>.</p>
<p>All source code used for this benchmark is publicly available <a href="https://github.com/LunaStev/benchmark">here</a>.</p>
<p>During benchmarking, Wave, Rust, and C were all tested under the assumption that they use an LLVM backend.</p>
<p>Checklist:</p>
<ul>
<li>
<p>[x] <code>rdtsc</code> / <code>rdtscp</code> used</p>
</li>
<li>
<p>[x] CPU core pinned (<code>taskset</code>)</p>
</li>
<li>
<p>[x] Unified compiler toolchain (clang + LLVM)</p>
</li>
<li>
<p>[x] Inline asm to prevent loop elimination</p>
</li>
<li>
<p>[x] Result validation (identical results)</p>
</li>
</ul>
<hr>
<h3>Absolute Metric</h3>
<p><img alt="relative" src="https://velog.velcdn.com/images/lunastev/post/edd2909e-46a1-4a16-82c6-c3994b9ee788/image.png align=" title="left"></p>
<p>This graph shows how many CPU cycles were actually consumed.</p>
<ul>
<li>
<p>Y-axis: CPU Cycles (log scale)</p>
</li>
<li>
<p>X-axis: Optimization level (O0 ~ O3)</p>
</li>
</ul>
<h4>Key observations</h4>
<ul>
<li>
<p><strong>O0</strong></p>
<ul>
<li>Rust \u226B Wave &gt; C<br>
    \u2192 As expected: without optimization, Rust is the heaviest, Wave is slower than C but significantly lighter than Rust.</li>
</ul>
</li>
<li>
<p><strong>O1 and above</strong></p>
<ul>
<li>
<p>C drops almost to the floor (\u2248 1e8)</p>
</li>
<li>
<p>Wave is about 6\xD7 slower than C</p>
</li>
<li>
<p>Rust is over 20\xD7 slower than C</p>
</li>
</ul>
</li>
</ul>
<p>This graph demonstrates how effectively compiler optimizations are applied.</p>
<hr>
<h3>Relative Metric</h3>
<p><img alt="absolute" src="https://velog.velcdn.com/images/lunastev/post/0aed8f47-7372-43b8-abb2-d4c49c6a7c72/image.png align=" title="left"></p>
<p>The relative metric normalizes C to 1.0 and shows how many times slower the other languages are compared to C.</p>
<p>That is:</p>
<pre><code class="language-kotlin">Wave / C = Wave_cycles \xF7 C_cycles
Rust / C = Rust_cycles \xF7 C_cycles
</code></pre>
<hr>
<h3>Wave / C</h3>
<ul>
<li>
<p><strong>O0:</strong> ~1.3</p>
<ul>
<li>Wave is about 30% slower than C</li>
</ul>
</li>
<li>
<p><strong>O1\u2013O3:</strong> 5 ~ 7</p>
<ul>
<li>Even after optimization, Wave is 5\u20137\xD7 slower than C</li>
</ul>
</li>
</ul>
<p>From these numbers, we can see that Wave is quite competitive as a language.</p>
<hr>
<h3>Rust / C</h3>
<ul>
<li>
<p><strong>O0:</strong> ~4</p>
</li>
<li>
<p><strong>O1\u2013O3:</strong> 17 ~ 23</p>
</li>
</ul>
<p>This can be interpreted as the cost Rust pays for safety and abstraction.</p>
<hr>
<h3>Conclusion</h3>
<p>Summarizing the benchmark results:</p>
<ul>
<li>
<p>Wave is not faster than C.</p>
</li>
<li>
<p>However, it consistently uses fewer CPU cycles than Rust.</p>
</li>
<li>
<p>This difference becomes especially clear after O1-level optimizations.</p>
</li>
</ul>
<p>This shows that Wave maintains a C-like execution model while introducing almost no unnecessary abstraction overhead during low-level code generation.</p>
<p>Wave is still a pre-beta language under active development.<br>
It does not yet have its own optimization pipeline, nor advanced features such as LTO or PGO.<br>
Despite that, achieving this level of performance is a strong indication that the language design and compiler architecture are heading in the right direction.</p>
<hr>
<h3>What This Result Means</h3>
<p>The core point of this benchmark is not simply<br>
\u201CWhich is faster: C, Rust, or Wave?\u201D</p>
<p>Each language has different goals:</p>
<ul>
<li>
<p>C prioritizes maximum performance and minimal abstraction.</p>
</li>
<li>
<p>Rust prioritizes memory safety and a powerful type system.</p>
</li>
<li>
<p>Wave prioritizes predictable low-level control and a simple execution model.</p>
</li>
</ul>
<p>These results show that Wave generates very straightforward LLVM IR without additional runtime costs, aligning well with its design goals.</p>
<p>In other words, Wave demonstrates\u2014using real numbers\u2014that it occupies a middle ground:<br>
it does not oversimplify the language purely for performance,<br>
nor does it heavily sacrifice performance for safety.</p>
<hr>
<h3>Why Did These Results Occur?</h3>
<p>Wave using fewer cycles than Rust in this test does not mean that Rust is a \u201Cslow language.\u201D<br>
Rather, it reflects Wave\u2019s deliberate choice of a simpler execution model.</p>
<p>Rust provides numerous compile-time guarantees and runtime concepts to ensure safety and abstraction.<br>
These guarantees are highly valuable in real-world applications,<br>
but in extremely simple low-level loops, they can manifest as overhead.</p>
<p>Wave, on the other hand, is designed around explicit types,<br>
a simple memory model,<br>
and minimal implicit behavior.<br>
As a result, LLVM can optimize the generated IR more aggressively.</p>
<p>This difference becomes especially evident after O1-level optimizations.</p>
<hr>
<h3>Looking Forward</h3>
<p>This benchmark does not represent Wave\u2019s \u201Cfinal performance.\u201D<br>
It is closer to a snapshot of where Wave currently stands.</p>
<p>Future improvements planned for Wave include:</p>
<ul>
<li>
<p>Custom optimization passes</p>
</li>
<li>
<p>Introduction of the Whale backend</p>
</li>
<li>
<p>More advanced inlining and loop optimizations</p>
</li>
<li>
<p>Stabilization of the standard library</p>
</li>
</ul>
<p>As these improvements are introduced,<br>
Wave\u2019s performance characteristics are likely to move even closer to C.</p>
<p>Going forward, I plan to repeat this benchmark periodically<br>
and continue documenting how Wave evolves over time.</p>`},{slug:"2026-02-04-patch-279-strengthening-the-toolchain-structured-cli-and-advanced-type-coercion",title:"Patch #279: Strengthening the Toolchain: Structured CLI and Advanced Type Coercion",date:"2026-02-04T09:54:34",dateDisplay:"2026-02-04",description:"As Wave evolves, so must the tools we use to build and run it. Our latest update focuses on two major fronts: transforming the wavec CLI into a professional-grade command system and empowering the LLVM backend with smarter pointer casting and array-l...",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770198792895/7d527f8c-cb15-4aa3-935c-070c28b7b6db.png",contentHtml:`<h1>Patch #279: Strengthening the Toolchain: Structured CLI and Advanced Type Coercion</h1>
<p>As Wave evolves, so must the tools we use to build and run it. Our latest update focuses on two major fronts: transforming the <code>wavec</code> CLI into a professional-grade command system and empowering the LLVM backend with smarter pointer casting and array-literal support.</p>
<h3>1. A New Command-Driven CLI</h3>
<p>Previously, the <code>wavec</code> entry point relied on a simple imperative loop to parse arguments. While this worked for a prototype, it became difficult to maintain as we added more features.</p>
<p>We have completely overhauled the CLI using a <strong>structured dispatch system</strong>:</p>
<ul>
<li>
<p><strong>Subcommands</strong>: We now use a clear command-based structure. Commands like <code>run</code>, <code>build</code>, <code>img</code>, <code>install</code>, and <code>update</code> are now managed through organized enums.</p>
</li>
<li>
<p><strong>Modular Flags</strong>: Flag definitions have been moved to a dedicated <code>src/flags.rs</code>. We\u2019ve also added critical support for <strong>External Linking</strong>:</p>
<ul>
<li>
<p><code>--link</code>: Specify external libraries to link against.</p>
</li>
<li>
<p><code>-L</code>: Add search paths for libraries.</p>
</li>
</ul>
</li>
<li>
<p><strong>Unified Error Reporting</strong>: By introducing <code>CliError::Usage</code>, we\u2019ve simplified how the compiler communicates incorrect usage to the developer, ensuring consistent and helpful help messages.</p>
</li>
</ul>
<h3>2. Smarter LLVM Backend: Address-of &amp; Casting</h3>
<p>The backend is now much more "context-aware," allowing for more flexible coding patterns without sacrificing type safety.</p>
<ul>
<li>
<p><strong>Address-of Array Literals</strong>: You can now take the address of an array literal directly (e.g., <code>&amp;[1, 2, 3]</code>). The backend now automatically handles the <code>alloca</code>, stores the elements, and manages the resulting pointer. This is a huge win for passing temporary data to functions.</p>
</li>
<li>
<p><strong>Implicit Pointer Casting (</strong><code>bit_cast</code>): One of the biggest pain points in systems programming is pointer type mismatches. Our backend now performs <strong>automatic bit-casting</strong> when it detects a mismatch between the actual pointer type and the <code>expected_type</code>.</p>
</li>
<li>
<p><strong>Context-Aware Type Inference</strong>: We are now passing the <code>expected_type</code> down through the variable generation pipeline. This allows the compiler to make smarter decisions about how to emit IR based on the surrounding context (such as an assignment or a function argument).</p>
</li>
</ul>
<h3>3. Enhanced Linker and Runner</h3>
<p>The bridge between compiling and executing is now more robust. Our internal <code>runner.rs</code> now correctly propagates <code>LinkFlags</code> to the object linking phase. This ensures that when you use the new <code>--link</code> and <code>-L</code> flags, the underlying linker (Clang) correctly finds and incorporates those external dependencies.</p>
<h3>4. Code Hygiene and Consistency</h3>
<p>We\u2019ve also performed some internal housekeeping:</p>
<ul>
<li>
<p><strong>Standard Library Management</strong>: Renamed functions in <code>src/std.rs</code> (e.g., <code>std_install</code>) to improve naming consistency across the codebase.</p>
</li>
<li>
<p><strong>Logic Simplification</strong>: Refined the assembly clobber normalization logic and removed unused imports, leading to slightly faster build times for the compiler itself.</p>
</li>
</ul>
<h3>Conclusion</h3>
<p>This update makes <code>wavec</code> feel like a much more mature tool. The new CLI structure provides a solid foundation for future subcommands, while the backend improvements make working with pointers and arrays significantly more ergonomic.</p>
<p>Whether you're linking against a complex C library or passing around array addresses, Wave's toolchain is now more capable than ever.</p>`},{slug:"2026-02-03-patch-278-bridging-ecosystems-introducing-c-ffi-and-extern-support",title:"Patch #278: Bridging Ecosystems: Introducing C FFI and extern Support",date:"2026-02-03T11:36:11",dateDisplay:"2026-02-03",description:"A modern systems programming language cannot exist in isolation. To be truly powerful, it must be able to leverage the decades of battle-tested libraries written in C. Today, we are excited to announce that Wave now officially supports C FFI (Foreign...",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1770118384955/b934ae07-ed98-4d85-878d-358dd1033e38.png",contentHtml:`<h1>Patch #278: Bridging Ecosystems: Introducing C FFI and extern Support</h1>
<p>A modern systems programming language cannot exist in isolation. To be truly powerful, it must be able to leverage the decades of battle-tested libraries written in C. Today, we are excited to announce that Wave now officially supports <strong>C FFI (Foreign Function Interface)</strong> via the new <code>extern</code> keyword.</p>
<h3>1. The Power of <code>extern</code></h3>
<p>The <code>extern</code> keyword allows Wave to declare functions that are defined in external libraries. We have designed the syntax to be both flexible and familiar.</p>
<ul>
<li>
<p><strong>Single-line Declarations</strong>: Quickly map a single C function.</p>
<p><code>kotlin
extern(c) fun puts(s: ptr&lt;i8&gt;) -&gt; i32;</code></p>
</li>
<li>
<p><strong>Block Syntax</strong>: Group multiple external declarations together for better organization.</p>
<p><code>kotlin
extern(c) {
    fun malloc(size: i64) -&gt; ptr&lt;byte&gt;;
    fun free(p: ptr&lt;byte&gt;);
}</code></p>
</li>
<li>
<p><strong>Symbol Redirection</strong>: Sometimes the name you want to use in Wave differs from the actual symbol name in the library. We've got you covered:</p>
<p><code>kotlin
extern(c, "printf") fun print_formatted(fmt: ptr&lt;i8&gt;) -&gt; i32;</code></p>
</li>
<li>
<p><strong>Flexible Parameters</strong>: You can use named parameters for clarity or just specify the types for brevity.</p>
</li>
</ul>
<h3>2. Under the Hood: LLVM &amp; C ABI</h3>
<p>To make this work, our LLVM backend now correctly maps Wave signatures to the <strong>Standard C ABI</strong>. When you declare an <code>extern</code> function, the compiler generates an external declaration in the LLVM module, allowing the linker (Clang) to resolve these symbols at build time against libraries like <code>libc</code>.</p>
<h3>3. A Massive Expansion of <code>std/libc</code></h3>
<p>Along with the feature itself, we are shipping a comprehensive set of pre-written bindings. You don't have to write these yourself; they are ready to use in the standard library:</p>
<ul>
<li>
<p><code>stdio</code>: <code>puts</code>, <code>getchar</code>, <code>putchar</code>.</p>
</li>
<li>
<p><code>stdlib</code>: <code>malloc</code>, <code>free</code>, <code>exit</code>, <code>atoi</code>.</p>
</li>
<li>
<p><code>string</code>: <code>strlen</code>, <code>strcmp</code>, <code>memcpy</code>.</p>
</li>
<li>
<p><code>unistd</code>: <code>read</code>, <code>write</code>, <code>fork</code>, <code>execve</code>.</p>
</li>
<li>
<p><strong>Networking</strong>: A full suite of <code>socket</code>, <code>netinet</code>, <code>arpa</code>, and <code>poll</code> functions.</p>
</li>
<li>
<p><strong>System</strong>: <code>time</code>, <code>errno</code>, and more.</p>
</li>
</ul>
<p>This means you can now write a Wave program that allocates memory via <code>malloc</code>, performs complex string manipulation via <code>string.h</code>, and creates high-performance network services using standard POSIX functions.</p>
<h3>4. Verified and Tested</h3>
<p>We\u2019ve added new verification tests (<code>test/test77.wave</code>) that demonstrate calling <code>puts</code> from the C standard library to print directly to the console. This confirms that the integration between Wave's string pointers and C's <code>char*</code> is seamless and stable.</p>
<h3>Why This Matters</h3>
<p>By supporting C FFI, Wave is no longer limited by its own standard library. If a library exists in C\u2014whether it's OpenSSL, SQLite, or a graphics library\u2014you can now use it in Wave. This opens the door to building production-grade applications, database drivers, and complex system tools.</p>
<p>Wave is growing fast, and with FFI, the entire C world is now your playground.</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/278">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-29-patch-277-hardening-inline-assembly-support-for-clobber-clauses",title:"Patch #277: Hardening Inline Assembly: Support for Clobber Clauses",date:"2026-01-29T11:26:11",dateDisplay:"2026-01-29",description:"When writing low-level systems code, inline assembly is an indispensable tool. It allows developers to talk directly to the hardware. However, this power comes with a risk: if the compiler doesn't know which registers or memory states your assembly c...",tags:["wave-lang","Programming Blogs","Programming Tips","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1769685934530/3132117b-af58-4aae-b240-846cac25755e.png",contentHtml:`<h1>Patch #277: Hardening Inline Assembly: Support for Clobber Clauses</h1>
<p>When writing low-level systems code, inline assembly is an indispensable tool. It allows developers to talk directly to the hardware. However, this power comes with a risk: if the compiler doesn't know which registers or memory states your assembly code is modifying, it might make incorrect assumptions during optimization, leading to catastrophic data corruption.</p>
<p>To address this, our latest update introduces support for <strong>Clobber Clauses</strong> in inline assembly blocks.</p>
<h3>1. What is a Clobber Clause?</h3>
<p>A clobber clause allows you to explicitly list the registers or special states (like memory or flags) that your assembly code "trashes" or modifies. This informs the compiler's register allocator to avoid using those specific registers for other variables during the assembly execution.</p>
<p><strong>Syntax Example:</strong></p>
<pre><code class="language-kotlin">fun clobber_memory() {
    var buf: i64 = 123;

    println(&quot;before = {}&quot;, buf);

    asm {
        &quot;mov QWORD PTR [$0], 777&quot;
        in(&quot;r&quot;) &amp;buf
        clobber(&quot;memory&quot;)
    }

    println(&quot;after  = {}&quot;, buf);
}
</code></pre>
<p>In this example, we tell the compiler that our code modifies the <code>rcx</code> register, impacts the condition code (<code>cc</code> / flags), and has side effects on the system's <code>memory</code>.</p>
<h3>2. Intelligent Backend Normalization</h3>
<p>Users shouldn't have to worry about the internal syntax of the backend. We\u2019ve implemented a <strong>normalization engine</strong> (<code>normalize_clobber_item</code>) that maps human-readable strings to LLVM-compatible constraints:</p>
<ul>
<li>
<p><code>"memory"</code> \u2192 <code>~{memory}</code></p>
</li>
<li>
<p><code>"cc"</code> \u2192 <code>~{flags}</code></p>
</li>
<li>
<p><code>"rax"</code> \u2192 <code>~{rax}</code></p>
</li>
</ul>
<p>This ensures that the Wave language syntax remains clean and intuitive while providing the LLVM backend with the precise instructions it needs.</p>
<h3>3. Safety First: Conflict Detection</h3>
<p>One of the most powerful features of this update is the <strong>AsmPlan Conflict Detector</strong>. Before generating any code, the compiler now checks for overlaps between your input/output operands and your clobber list.</p>
<p>If you attempt to use a register for an output while also marking it as clobbered, the compiler will trigger a panic. This prevents "impossible" scenarios that would otherwise lead to silent, hard-to-debug runtime failures.</p>
<h3>4. Lexer &amp; Consistency Improvements</h3>
<p>As we added the <code>clobber</code> keyword, we also took the opportunity to improve consistency in our literal parsing:</p>
<ul>
<li>
<p><strong>Hex Escapes in Char Literals</strong>: Just like our string literals, <code>char</code> literals now support hex escape sequences (<code>'\\xHH'</code>). This is particularly useful when passing specific byte values to assembly blocks.</p>
</li>
<li>
<p><strong>AST Integration</strong>: The <code>AsmBlock</code> node in our Abstract Syntax Tree has been updated to natively store and manage clobber lists for both statements and expressions.</p>
</li>
</ul>
<h3>5. Verified via <code>test77.wave</code></h3>
<p>This feature is fully integrated and verified. The new <code>test77.wave</code> suite demonstrates various clobber scenarios, including manual register trashing and ensuring memory state preservation. This test serves as both a verification tool and a reference for developers looking to use these new capabilities.</p>
<h3>Conclusion</h3>
<p>By supporting clobber clauses, Wave provides a much safer and more predictable environment for low-level integration. You can now write high-performance assembly blocks with the confidence that the compiler will correctly preserve the surrounding state.</p>
<p>Whether you're writing a kernel, a driver, or a high-performance library, these tools give you the precision you need.</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/277">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-23-patch-276-direct-system-access-linux-x8664-syscalls-and-networking-in-wave",title:"Patch #276: Direct System Access: Linux x86_64 Syscalls and Networking in Wave",date:"2026-01-23T09:55:50",dateDisplay:"2026-01-23",description:"We are pushing the boundaries of what Wave can do at the system level. This latest patch introduces a comprehensive suite of Linux x86_64 syscall wrappers and foundational networking modules, giving developers direct control over the operating system...",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1769162359927/78e9b8ed-e069-4333-bd78-7b8349e31f5d.png",contentHtml:`<h1>Patch #276: Direct System Access: Linux x86_64 Syscalls and Networking in Wave</h1>
<p>We are pushing the boundaries of what Wave can do at the system level. This latest patch introduces a comprehensive suite of Linux x86_64 syscall wrappers and foundational networking modules, giving developers direct control over the operating system.</p>
<h3>1. The Full Linux x86_64 Syscall Suite</h3>
<p>We have established a robust low-level interface for the Linux kernel. By utilizing our advanced inline assembly, we\u2019ve implemented a complete set of syscall wrappers:</p>
<ul>
<li>
<p><code>syscall0</code> through <code>syscall6</code>: Supporting the standard x86_64 calling convention, these functions allow Wave to trigger any Linux kernel service directly.</p>
</li>
<li>
<p><strong>System Infrastructure (</strong><code>std::sys::linux</code>):</p>
<ul>
<li>
<p><code>fs</code>: Native wrappers for file operations like <code>open</code>, <code>read</code>, <code>write</code>, <code>lseek</code>, and even directory management.</p>
</li>
<li>
<p><code>memory</code>: Manual virtual memory management is now possible via <code>mmap</code>, <code>munmap</code>, and <code>brk</code>.</p>
</li>
<li>
<p><code>time</code>: High-precision time handling with <code>nanosleep</code> and <code>clock_gettime</code>, including full <code>TimeSpec</code> support.</p>
</li>
<li>
<p><code>socket</code>: Raw wrappers and constants (like <code>AF_INET</code>, <code>SOCK_STREAM</code>) that serve as the building blocks for all network communication.</p>
</li>
</ul>
</li>
</ul>
<h3>2. High-Level Networking: <code>std::net</code></h3>
<p>While raw syscalls provide power, our new <code>std::net</code> module provides productivity. We have built high-level, synchronous abstractions on top of the raw socket API:</p>
<ul>
<li>
<p><strong>TCP Support</strong>: With <code>TcpListener</code> and <code>TcpStream</code>, you can now build robust servers and clients in Wave.</p>
</li>
<li>
<p><strong>UDP Support</strong>: The <code>UdpSocket</code> module is available for fast, datagram-based communication.</p>
</li>
</ul>
<p>These modules make network programming in Wave feel modern and safe while maintaining the performance of the underlying system calls.</p>
<h3>3. Compiler Intelligence: "Syscall Coercion"</h3>
<p>To make low-level programming less tedious, we\u2019ve introduced a specialized compiler feature. The backend now performs <strong>implicit coercion between Pointers and</strong> <code>Int64</code> specifically for functions prefixed with <code>syscall</code>.</p>
<p>This allows you to pass raw memory addresses directly to syscalls without manually casting them to integers every time\u2014a common pain point in systems programming that Wave now handles elegantly.</p>
<h3>4. Lexer &amp; Parser Enhancements</h3>
<p>The frontend has also received significant updates to support binary data and better code hygiene:</p>
<ul>
<li>
<p><strong>Hex Escape Sequences</strong>: String literals now support <code>\\xHH</code> (e.g., <code>"\\x01\\x02\\x03"</code>), which is essential for defining binary protocols and packet headers.</p>
</li>
<li>
<p><strong>Trivia Cleanup</strong>: We refactored whitespace and comment skipping into a unified <code>skip_trivia</code> method. This ensures that multi-line comments and complex formatting are handled more robustly during tokenization.</p>
</li>
<li>
<p><strong>Input Statement</strong>: The parser now supports the <code>input</code> statement, rounding out our basic I/O capabilities.</p>
</li>
</ul>
<h3>5. Backend Refinements</h3>
<p>We\u2019ve fine-tuned the LLVM codegen to handle character data more precisely. When generating <code>scanf</code> format strings, 8-bit integers (<code>i8</code>) are now correctly mapped to <code>%c</code>, ensuring perfect compatibility between Wave\u2019s char types and the standard I/O library.</p>
<h3>Why This Matters</h3>
<p>With this patch, Wave is no longer just a language for logic; it\u2019s a language for <strong>systems</strong>. You can now write a web server, manage file systems, or even build a custom memory allocator entirely in Wave, without relying on external C libraries for basic system tasks.</p>
<p>We are excited to see the low-level tools and network services the community will build with these new primitives!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/276">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-18-announcing-wave-v016-pre-beta-a-major-leap-in-architecture-and-ecosystem",title:"Announcing Wave v0.1.6-pre-beta: A Major Leap in Architecture and Ecosystem",date:"2026-01-18T05:14:04",dateDisplay:"2026-01-18",description:"We are thrilled to announce the release of Wave v0.1.6-pre-beta. This isn't just another update; it is a definitive milestone in Wave's journey. This release introduces a massive architectural refactoring, a formal standard library system, and signif...",tags:["wave-lang","Programming Blogs","programming languages","release notes","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1768712246520/2bbf7254-c31b-449b-8c5e-a109c63b94e9.png",contentHtml:`<h1>Announcing Wave v0.1.6-pre-beta: A Major Leap in Architecture and Ecosystem</h1>
<p>We are thrilled to announce the release of <strong>Wave v0.1.6-pre-beta</strong>. This isn't just another update; it is a definitive milestone in Wave's journey. This release introduces a massive architectural refactoring, a formal standard library system, and significant enhancements to both the compiler frontend and the LLVM backend.</p>
<p>With v0.1.6-pre-beta, Wave matures from a prototype into a robust tool ready for more complex systems programming.</p>
<hr>
<h3>1. Re-architecting for the Future</h3>
<p>To ensure Wave can scale with its community, we have completely overhauled the compiler's internal structure.</p>
<ul>
<li>
<p><strong>Modular Frontend</strong>: The once-monolithic Lexer and Parser have been decomposed into functional submodules. This modularity makes the codebase easier to navigate and allows us to iterate on language features without side effects.</p>
</li>
<li>
<p><strong>The</strong> <code>utils</code> Crate: We\u2019ve introduced an internal utility crate to handle JSON parsing, terminal colorization, and string formatting. By replacing heavy external dependencies like <code>regex</code> with our own lightweight implementations, we\u2019ve significantly reduced compilation times and binary size.</p>
</li>
<li>
<p><strong>Polished Diagnostics</strong>: Error messages now use a refined RGB color palette and provide more accurate source pointers, making the debugging experience much more intuitive.</p>
</li>
</ul>
<h3>2. A More Expressive Language</h3>
<p>We\u2019ve expanded Wave\u2019s syntax and type system to handle a wider range of programming patterns.</p>
<ul>
<li>
<p><strong>Comprehensive Type System</strong>: Support for integer types from <code>i8</code> to <code>i128</code> (and their unsigned counterparts), floating-point types (<code>f32</code>/<code>f64</code>), <code>bool</code>, <code>char</code>, and <code>byte</code>.</p>
</li>
<li>
<p><strong>Literal Enhancements</strong>: You can now use binary (<code>0b</code>), hexadecimal (<code>0x</code>), and octal (<code>0o</code>) literals, alongside character literals and boolean constants.</p>
</li>
<li>
<p><strong>Advanced Operators</strong>:</p>
<ul>
<li>
<p>Full support for unary operators: <code>-</code>, <code>!</code>, and <code>~</code>.</p>
</li>
<li>
<p>Increment/Decrement (<code>++</code>, <code>--</code>) in both prefix and postfix forms.</p>
</li>
<li>
<p>Bitwise operations including shifts (<code>&lt;&lt;</code>, <code>&gt;&gt;</code>) and XOR (<code>^</code>).</p>
</li>
</ul>
</li>
<li>
<p><strong>Complex Structures</strong>: Arrays now support bounds-checked type declarations and literals. Structs have been upgraded with field access and "method" syntax sugar (<code>obj.method()</code>), bringing a modern feel to low-level code.</p>
</li>
</ul>
<h3>3. Backend Power &amp; Performance (LLVM)</h3>
<p>The LLVM backend has been upgraded to bridge the gap between Wave and the existing system ecosystem.</p>
<ul>
<li>
<p><strong>Clang-based Linking</strong>: Wave now uses Clang as its default linker. This allows seamless interoperability with the C standard library (<code>libc</code>) and math library (<code>libm</code>).</p>
</li>
<li>
<p><strong>Optimization Levels</strong>: Developers can now use <code>-O0</code> through <code>-O3</code>, including <code>-Oz</code> (for size) and <code>-Ofast</code>.</p>
</li>
<li>
<p><strong>Pro-level Inline Assembly</strong>: The <code>asm</code> block now supports sophisticated input/output constraints, enabling high-performance system calls and direct hardware interaction.</p>
</li>
</ul>
<h3>4. The Standard Library (std) &amp; Tooling</h3>
<p>A language is only as strong as its library. We are introducing the first iteration of the <strong>Wave Standard Library</strong>, distributed independently of the compiler.</p>
<ul>
<li>
<p><strong>New CLI Commands</strong>: Use <code>wavec install std</code> and <code>wavec update std</code> to manage your local library installation directly from our official repository.</p>
</li>
<li>
<p><strong>Standard Modules</strong>: Initial support for <code>math</code> (bit manipulation/float utils), <code>string</code> (trimming, finding, comparing), <code>sys</code> (Linux syscalls), and <code>net</code> (UDP socket support).</p>
</li>
<li>
<p><strong>Granular Debugging</strong>: New <code>--debug-wave</code> flags allow you to peek into the compiler\u2019s soul, outputting <code>tokens</code>, <code>ast</code>, <code>ir</code>, or <code>mc</code> at will.</p>
</li>
</ul>
<h3>5. Governance and Contribution</h3>
<p>As the project grows, so does our responsibility to our contributors and the law.</p>
<ul>
<li>
<p><strong>License</strong>: Wave has returned to the <strong>Mozilla Public License 2.0 (MPL 2.0)</strong>, striking a balance between open-source freedom and project integrity.</p>
</li>
<li>
<p><strong>DCO Requirement</strong>: To ensure legal clarity, all contributions now require a <strong>Developer Certificate of Origin (Signed-off-by)</strong>.</p>
</li>
<li>
<p><strong>Streamlined Workflows</strong>: We\u2019ve updated our <a href="http://CONTRIBUTING.md"><code>CONTRIBUTING.md</code></a> to support both modern GitHub PRs and traditional email-based patch workflows.</p>
</li>
</ul>
<hr>
<h3>Moving Forward</h3>
<p>Wave v0.1.6-pre-beta is a foundation. By modularizing the compiler and establishing a standard library, we have cleared the path for self-hosting and more advanced language features.</p>
<p>We want to thank all the contributors who have submitted patches, reported bugs, and helped shape the vision of Wave. This release belongs to you.</p>
<p><strong>Get started today:</strong></p>
<ol>
<li>
<p>Download the latest source.</p>
</li>
<li>
<p>Build the compiler.</p>
</li>
<li>
<p>Run <code>wavec install std</code>.</p>
</li>
<li>
<p>Create something amazing.</p>
</li>
</ol>
<p>or:</p>
<pre><code class="language-bash">curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.6-pre-beta
</code></pre>
<p><em>Build fast, stay lean, and keep waving!</em></p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/releases/tag/v0.1.6-pre-beta">Release Note</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-17-patch-272-elevating-system-programming-methods-recursive-structs-and-advanced-pointers",title:"Patch #272: Elevating System Programming: Methods, Recursive Structs, and Advanced Pointers",date:"2026-01-17T14:21:00",dateDisplay:"2026-01-17",description:'As we strive to make Wave both expressive and powerful, we realize that syntax should not only be low-level but also intuitive. Our latest release introduces several "quality-of-life" features and backend overhauls that allow for more complex data st...',tags:["wave-lang","Programming Blogs","TCP","http","backend","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1768659509633/5e0a23b1-50df-4576-97cf-c1dd229980c6.png",contentHtml:`<h1>Patch #272: Elevating System Programming: Methods, Recursive Structs, and Advanced Pointers</h1>
<p>As we strive to make Wave both expressive and powerful, we realize that syntax should not only be low-level but also intuitive. Our latest release introduces several "quality-of-life" features and backend overhauls that allow for more complex data structures and cleaner code patterns.</p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768659556723/9329926d-3a6f-42ab-88f2-fe836d3ef01e.png align=" title="center"></p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768659548437/8c9e6cda-0419-493f-beb2-b348d073f77d.png align=" title="center"></p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768659536543/0a97d471-0f48-4c44-a49c-f1a174ebcfe0.png align=" title="center"></p>
<h3>1. Method-Style Calls: <code>obj.method()</code></h3>
<p>We\u2019ve introduced a more ergonomic way to call functions related to structs. Instead of manually passing a struct to a function, you can now use the dot notation.</p>
<ul>
<li>
<p><strong>How it works</strong>: When the parser encounters <code>obj.method()</code>, it resolves it to a function named <code>struct_name_method_name</code> and automatically passes a pointer to <code>obj</code> as the first argument (<code>self</code>).</p>
</li>
<li>
<p><strong>Benefits</strong>: This provides a cleaner, object-oriented feel to your code without the overhead of a complex class system, keeping the language lean and performant.</p>
</li>
</ul>
<h3>2. Recursive Structs via Opaque Types</h3>
<p>One of the most requested features was the ability to define recursive data structures, such as linked lists or trees.</p>
<ul>
<li>
<p><strong>Opaque Structs</strong>: We have refactored our LLVM backend to use opaque struct definitions. This allows a struct to contain a pointer to itself (e.g., a <code>Node</code> struct containing a <code>ptr&lt;Node&gt;</code>).</p>
</li>
<li>
<p><strong>Address Generation</strong>: By centralizing our <code>FieldAccess</code> logic, we\u2019ve ensured that nested and recursive memory addresses are resolved safely and efficiently.</p>
</li>
</ul>
<h3>3. Robust Pointer Logic &amp; Type Coercion</h3>
<p>Low-level programming often requires comparing memory addresses. We\u2019ve expanded our binary operator support to handle:</p>
<ul>
<li>
<p><strong>Pointer vs. Pointer</strong>: Direct comparison between two pointer types (<code>ptr == ptr</code>).</p>
</li>
<li>
<p><strong>Null Checks</strong>: Comparing a pointer with an integer literal (e.g., <code>ptr == 0</code>), which is essential for null-pointer validation.</p>
</li>
<li>
<p><strong>Automatic Coercion</strong>: The compiler now performs implicit type coercion for assignments, return statements, and even integer promotion (z-extend) for small types in I/O functions, reducing the need for manual casts.</p>
</li>
</ul>
<h3>4. Advanced Formatting Engine</h3>
<p>Debugging and logging are now much more flexible. Our formatting engine now supports specifiers within placeholders:</p>
<ul>
<li>
<p><code>{x}</code>: Hexadecimal output.</p>
</li>
<li>
<p><code>{c}</code>: Character output.</p>
</li>
<li>
<p><code>{p}</code>: Pointer address output.</p>
</li>
<li>
<p><strong>Smart Strings</strong>: If you pass a pointer to an <code>i8</code>, the engine automatically maps it to a C-style string (<code>%s</code>).</p>
</li>
</ul>
<h3>5. String Literal Safety &amp; Lexer Tweaks</h3>
<p>To prevent subtle bugs, we\u2019ve added a safety check in the Lexer to disallow unescaped newlines within string literals. Additionally, the type parser now skips newlines, allowing for more flexible and readable formatting when dealing with complex or generic types.</p>
<h3>6. Real-World Proof: A Full TCP Socket Server</h3>
<p>To put all these features to the test, we\u2019ve updated our test suite (<code>test56.wave</code>) with a <strong>robust TCP socket server implementation</strong>. This example demonstrates the synergy between:</p>
<ul>
<li>
<p>Our new <strong>struct methods</strong> for socket management.</p>
</li>
<li>
<p><strong>Recursive structs</strong> for state handling.</p>
</li>
<li>
<p><strong>Linux syscalls</strong> for network communication.</p>
</li>
<li>
<p><strong>Pointer comparisons</strong> for error checking.</p>
</li>
</ul>
<p>We've even included a Python-based test helper to verify real-world server responses, ensuring that Wave is ready for network-level tasks.</p>
<h3>Conclusion</h3>
<p>With method calls, recursive types, and refined pointer arithmetic, Wave is evolving into a formidable tool for systems-level development. These features bridge the gap between high-level readability and the precision required for low-level engineering.</p>
<p>Update your standard library and compiler today to experience the next level of Wave programming!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/272">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-15-patch-271-bridging-high-level-syntax-and-system-power-unary-negation-letconst-and-syscalls",title:"Patch #271: Bridging High-Level Syntax and System Power: Unary Negation, let/const, and Syscalls",date:"2026-01-15T07:29:03",dateDisplay:"2026-01-15",description:"The evolution of a programming language is a journey of balancing developer-friendly syntax with raw system capabilities. Our latest update to the Wave language does exactly that\u2014introducing essential unary operators and variable declarations while s...",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1768461955414/9f214323-846c-42d6-99db-f0f6e46e6b0c.png",contentHtml:`<h1>Patch #271: Bridging High-Level Syntax and System Power: Unary Negation, let/const, and Syscalls</h1>
<p>The evolution of a programming language is a journey of balancing developer-friendly syntax with raw system capabilities. Our latest update to the Wave language does exactly that\u2014introducing essential unary operators and variable declarations while simultaneously expanding the standard library into the realm of Linux syscalls and networking.</p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768462000020/82bf9b15-c0ec-4b37-9835-4c774ccaea89.png align=" title="center"></p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768462008025/36f4a7cd-4d12-4291-b554-770f6c344e33.png align=" title="center"></p>
<h3>1. First-Class Unary Negation</h3>
<p>Previously, negative values were often handled as parts of numeric literals. With this update, we have implemented <strong>Unary Negation (</strong><code>-</code>) as a first-class operator in the Abstract Syntax Tree (AST).</p>
<ul>
<li>
<p><strong>Generalized Expressions</strong>: The <code>-</code> operator can now be applied to any general expression, not just literals.</p>
</li>
<li>
<p><strong>Type Awareness</strong>: The compiler's type inference system now ensures that negation is only applied to numeric types, while the logical NOT (<code>!</code>) operator correctly results in a boolean.</p>
</li>
<li>
<p><strong>LLVM Implementation</strong>: Under the hood, we generate IR using <code>build_int_sub</code> and <code>build_float_sub</code> by subtracting the value from zero, ensuring efficient and standard-compliant arithmetic.</p>
</li>
</ul>
<h3>2. Modern Variable Declarations: <code>let</code> and <code>const</code></h3>
<p>To provide developers with better control over scope and mutability, we have officially registered the <code>let</code> and <code>const</code> keywords in our statement parser. This paves the way for structured local variable declarations and constant definitions, making Wave code more readable and consistent with modern programming paradigms.</p>
<h3>3. Standard Library Expansion: Networking and Syscalls</h3>
<p>Perhaps the most exciting part of this update is the expansion of the <code>std</code> library. We are moving beyond basic I/O and diving into system-level operations.</p>
<ul>
<li>
<p><strong>Linux Syscalls via Inline ASM</strong>: We\u2019ve added <code>std/sys/linux/syscall.wave</code>, which implements the <code>socket</code> syscall. By utilizing our recently improved inline assembly support, Wave can now communicate directly with the Linux kernel.</p>
</li>
<li>
<p><strong>UDP Networking</strong>: Building on top of the syscall layer, we introduced <code>std/net/udp.wave</code>. This module provides a high-level interface for creating UDP sockets, marking the beginning of Wave\u2019s networking capabilities.</p>
</li>
<li>
<p><strong>C ABI Compatibility</strong>: A new <code>std/libc/c.wave</code> module has been added as a foundation for FFI (Foreign Function Interface), allowing for future compatibility with C-standard libraries.</p>
</li>
</ul>
<h3>4. Manifest Updates</h3>
<p>All these new modules (<code>sys</code>, <code>net</code>, <code>libc</code>) are now officially tracked in the <code>std/manifest.json</code>. If you have the standard library management system set up, a simple <code>wavec update std</code> will bring these new capabilities to your local environment.</p>
<h3>Bridging the Gap</h3>
<p>These updates represent a significant milestone. By enabling both high-level syntax like <code>let/const</code> and low-level power like <code>socket</code> syscalls, Wave is uniquely positioned as a tool that can handle everything from application logic to systems programming.</p>
<p>We are one step closer to a complete, self-hosting-capable language ecosystem. Stay tuned for more updates as we continue to expand the standard library!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/271">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-14-patch-269-building-an-ecosystem-introducing-the-wave-standard-library-and-module-system",title:"Patch #269: Building an Ecosystem: Introducing the Wave Standard Library and Module System",date:"2026-01-14T08:47:18",dateDisplay:"2026-01-14",description:"A programming language is more than just syntax and a compiler; it is defined by its ecosystem. Today, we are excited to introduce the infrastructure for the Wave Standard Library (std)\u2014a system designed to distribute, manage, and use common utilitie...",tags:["wave-lang","Programming Blogs","programming languages","compiler"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1768378221357/3d67f770-428d-4e08-85ed-80f32ec1864c.png",contentHtml:`<h1>Patch #269: Building an Ecosystem: Introducing the Wave Standard Library and Module System</h1>
<p>A programming language is more than just syntax and a compiler; it is defined by its ecosystem. Today, we are excited to introduce the infrastructure for the <strong>Wave Standard Library (std)</strong>\u2014a system designed to distribute, manage, and use common utilities efficiently and intuitively.</p>
<h3>1. Seamless Library Management via CLI</h3>
<p>We\u2019ve added first-class support for managing the standard library directly through the Wave CLI. You no longer need to manually clone repositories or manage paths.</p>
<ul>
<li>
<p><code>wavec install std</code>: This command sets up the standard library environment on your machine. It uses Git's <strong>sparse-checkout</strong> logic to pull only the necessary library files from our source repository, storing them in <code>~/.wave/lib/wave/std</code>.</p>
</li>
<li>
<p><code>wavec update std</code>: Keeps your library up to date with the latest official releases.</p>
</li>
</ul>
<p>By leveraging sparse-checkout, we ensure that you only download what is needed, keeping the installation lightweight and fast. The system also includes manifest validation to guarantee that the library is correctly installed and intact.</p>
<h3>2. Namespaced Imports with <code>std::</code></h3>
<p>To make library usage intuitive, we have revamped our import resolution mechanism. You can now use the <code>std::</code> prefix to access official modules, clearly separating them from local project files.</p>
<pre><code class="language-kotlin">// Example of the new import syntax
import(&quot;std::io::format&quot;);

fun main() {
    // Usage of standard library functions
    format(&quot;Hello, Wave!&quot;);
}
</code></pre>
<p>While standard library imports are automatically resolved to your local installation directory, relative imports (<code>import("./utils")</code>) continue to work seamlessly. This namespacing prevents naming conflicts and makes your code's dependencies much clearer.</p>
<h3>3. A Lean Philosophy: Custom JSON Parser</h3>
<p>In line with our goal of keeping the compiler lean (as seen in our previous removal of the <code>regex</code> crate), we decided not to add heavy external dependencies for manifest handling.</p>
<p>Instead, we implemented a <strong>custom, lightweight JSON parser</strong> within <code>utils::json</code>. It supports all basic JSON types\u2014Objects, Arrays, Strings, Numbers, and Booleans\u2014providing exactly what we need to parse library manifests without the overhead of a general-purpose library.</p>
<h3>4. Smarter CLI and Better Error Handling</h3>
<p>The CLI is now more aware of its environment. We\u2019ve added specific error handling for:</p>
<ul>
<li>
<p><strong>Environment Issues</strong>: Alerts if the <code>HOME</code> directory is not set.</p>
</li>
<li>
<p><strong>Missing Dependencies</strong>: Notifies you if <code>Git</code> is missing when attempting an install.</p>
</li>
<li>
<p><strong>Manifest Failures</strong>: Detailed reports if a library manifest is corrupt or missing.</p>
</li>
</ul>
<h3>5. Initial Standard Library Content</h3>
<p>This release includes the boilerplate for our standard library, starting with basic I/O and formatting logic in <code>std/io/format.wave</code>. While it's just the beginning, this foundation allows us to build out complex string manipulation, math, and system utilities independently of the compiler's core logic.</p>
<h3>Moving Forward</h3>
<p>With the standard library infrastructure in place, Wave is now ready to grow its library of reusable components. This modular approach ensures that the compiler stays focused on code generation, while the standard library provides the rich feature set developers expect.</p>
<p>Try running <code>wavec install std</code> and start exploring the new module system today!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/269">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-12-patch-268-scaling-expressiveness-support-for-complex-data-structures-and-recursive-codegen",title:"Patch #268: Scaling Expressiveness: Support for Complex Data Structures and Recursive Codegen",date:"2026-01-12T07:04:38",dateDisplay:"2026-01-12",description:'As we move closer to a more mature language specification, the ability to handle complex data structures efficiently becomes paramount. Our latest update introduces significant enhancements to how the compiler interprets "Lvalues" (locations in memor...',tags:["programming languages","wave-lang","Programming Blogs","coding","patch"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1768201364725/0c3295a9-c85e-4832-9e0e-8a292c56e350.png",contentHtml:`<h1>Patch #268: Scaling Expressiveness: Support for Complex Data Structures and Recursive Codegen</h1>
<p>As we move closer to a more mature language specification, the ability to handle complex data structures efficiently becomes paramount. Our latest update introduces significant enhancements to how the compiler interprets "Lvalues" (locations in memory) and generates LLVM IR for nested structures, arrays, and inline assembly.</p>
<p>This patch allows us to implement DFS/BFS.</p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768201394191/9651b1f1-e988-4118-bde0-37a5b3534b68.png align=" title="center"></p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1768201387533/bd78d9ca-6a54-4425-b7aa-54c6ffb68b2e.png align=" title="center"></p>
<h3>1. Advanced Lvalue Parsing: Chained Access</h3>
<p>Until now, our parser had limited support for deeply nested data access. With the introduction of <code>parse_lvalue_tail</code>, the language now correctly handles chained field accesses and indexing.</p>
<p>Whether it is accessing a field in a struct or an element in an array, you can now write complex expressions like: <code>user.profile.settings[0].theme_id = 1;</code></p>
<p>The parser now recursively identifies these chains and validates "assignability" through a refined <code>is_assignable</code> check, ensuring that you only write to valid memory locations.</p>
<h3>2. Recursive Address Generation in LLVM</h3>
<p>The backend received a major overhaul to support these complex Lvalues. The <code>generate_address_ir</code> logic in our LLVM codegen is now fully recursive. This allows the compiler to resolve the memory address of a value regardless of how many levels of field accesses, array indices, or pointer dereferences are involved.</p>
<p>Key improvements include:</p>
<ul>
<li>
<p><strong>Array Literals</strong>: Added <code>gen_array_literal</code> to support direct IR generation for array initializers.</p>
</li>
<li>
<p><strong>Intelligent Indexing</strong>: <code>IndexAccess</code> now distinguishes between pointer-based and value-based indexing, generating the correct GEP (GetElementPtr) instructions accordingly.</p>
</li>
<li>
<p><strong>The</strong> <code>null</code> Keyword: We\u2019ve officially added support for the <code>null</code> keyword, representing a null pointer constant across the system.</p>
</li>
</ul>
<h3>3. Generics and Type Robustness</h3>
<p>We\u2019ve centralized how types are parsed from the stream. This includes better support for generic types like <code>ptr&lt;T&gt;</code>, making the type system more consistent. Struct definitions are also more robust, now supporting flexible whitespace/newline handling and improved field type parsing, which makes the code more readable.</p>
<h3>4. Robust Inline Assembly Coercion</h3>
<p>Inline assembly is now even more powerful. We have overhauled <code>gen_asm_stmt_ir</code> to support a wider range of output types. The compiler now handles automatic bitcasting and coercion between integers, pointers, and floats for ASM operands. This means less manual casting for the developer and more reliable code generation for low-level tasks.</p>
<h3>5. Syntax Evolution: Moving to <code>deref</code></h3>
<p>As part of our effort to make the syntax more explicit and readable, we are transitioning toward the <code>deref</code> keyword for pointer dereferencing. We have updated our internal test suite (including <code>run_tests.py</code>) and existing logic to reflect this cleaner direction.</p>
<h3>Summary of Key Enhancements</h3>
<ul>
<li>
<p><strong>Parser</strong>: Support for chained <code>.field</code> and <code>[index]</code> access; improved struct and generic type parsing.</p>
</li>
<li>
<p><strong>Backend</strong>: Recursive address resolution for complex types; support for array literals and <code>null</code>.</p>
</li>
<li>
<p><strong>ASM</strong>: Automatic type coercion and bitcasting for assembly output operands.</p>
</li>
<li>
<p><strong>Stability</strong>: Refined assignment validation and cleaned-up pointer logic.</p>
</li>
</ul>
<p>These changes provide the stable foundation needed for building high-level abstractions without sacrificing low-level control. We are excited to see how these new capabilities simplify your development workflow!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/268">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-10-patch-267-housekeeping-for-excellence-preparing-for-v016-pre-beta",title:"Patch #267: Housekeeping for Excellence: Preparing for v0.1.6-pre-beta",date:"2026-01-10T11:27:05",dateDisplay:"2026-01-10",description:'As we continue to iterate on our compiler, we occasionally take a step back from feature development to focus on what keeps a project sustainable: Code Hygiene. Our latest update is dedicated to cleaning up the "dust" that accumulates during rapid de...',tags:["wave-lang","Programming Blogs","General Programming","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1768044357198/28f9b882-9c4b-4d8f-8dd8-40f995cede9f.png",contentHtml:`<h1>Patch #267: Housekeeping for Excellence: Preparing for v0.1.6-pre-beta</h1>
<p>As we continue to iterate on our compiler, we occasionally take a step back from feature development to focus on what keeps a project sustainable: <strong>Code Hygiene</strong>. Our latest update is dedicated to cleaning up the "dust" that accumulates during rapid development, ensuring our codebase remains sharp, readable, and efficient.</p>
<p>This update also marks an internal milestone as we bump our version to <strong>0.1.6-pre-beta</strong> in preparation for our upcoming release.</p>
<h3>Setting the Stage: v0.1.6-pre-beta</h3>
<p>While this isn't the final 0.1.6 release just yet, we\u2019ve officially moved the needle in our <code>Cargo.toml</code>. This version bump signals that we are in the final stages of stabilizing our recent modularization and feature updates (like the enhanced ASM support and the new <code>utils</code> crate) before they reach a broader audience.</p>
<h3>The Great Cleanup: Lexer and Parser</h3>
<p>Following our recent refactoring of the Lexer and Parser, we performed a comprehensive audit of their internal imports.</p>
<ul>
<li>
<p><strong>Lexer Polishing</strong>: We removed redundant <code>super::common::*</code> imports across the core modules (<code>core.rs</code>, <code>ident.rs</code>, <code>scan.rs</code>), tightening the visibility and scope of our internal utilities.</p>
</li>
<li>
<p><strong>Parser Optimization</strong>: We identified and removed duplicate parsing logic that had lingered in <code>expr/assign.rs</code> and <code>format.rs</code>. By eliminating these old implementations, we ensure that there is only one "source of truth" for expression parsing, reducing the risk of divergent behavior.</p>
</li>
</ul>
<h3>Sharpening the Backend (LLVM Codegen)</h3>
<p>Code cleanup is just as vital in the backend as it is in the frontend. Our LLVM IR generation logic received several maintenance updates:</p>
<ul>
<li>
<p><strong>Unused Import Removal</strong>: We stripped away unnecessary <code>AddressSpace</code> imports and other redundant references in our LValue and RValue generation logic.</p>
</li>
<li>
<p><strong>Dead Code Elimination</strong>: We removed unreachable panic calls in <code>types.rs</code>, resulting in a more predictable and streamlined control flow.</p>
</li>
<li>
<p><strong>Documentation &amp; Comments</strong>: We cleared out redundant comments that no longer reflected the current state of the architecture, ensuring that our internal documentation stays relevant.</p>
</li>
</ul>
<h3>Why Maintenance Matters</h3>
<p>It might be tempting to focus only on new features, but regular "housekeeping" like this is what prevents technical debt. A cleaner codebase leads to:</p>
<ol>
<li>
<p><strong>Faster Build Times</strong>: Fewer imports and less redundant code mean less work for the Rust compiler.</p>
</li>
<li>
<p><strong>Easier Contribution</strong>: New contributors can navigate the project without being confused by unused variables or duplicate functions.</p>
</li>
<li>
<p><strong>Higher Reliability</strong>: Removing unreachable code and cleaning up logic reduces the surface area for potential bugs.</p>
</li>
</ol>
<h3>What\u2019s Next?</h3>
<p>With the codebase now polished and the version bumped to <code>0.1.6-pre-beta</code>, we are focusing on final stability tests. We are incredibly excited about the progress we've made and can't wait to share the full v0.1.6 release with you soon.</p>
<p>Stay tuned for more updates!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/267">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-07-patch-266-lightening-the-load-introducing-the-utils-crate-and-shedding-dependencies",title:"Patch #266: Lightening the Load: Introducing the Utils Crate and Shedding Dependencies",date:"2026-01-07T07:02:18",dateDisplay:"2026-01-07",description:"As a project grows, so does its complexity and the number of its dependencies. In our latest update, we\u2019ve taken a major step toward a leaner and faster toolchain by introducing a dedicated utils crate and eliminating our dependency on the heavy rege...",tags:["programming languages","patch","wave-lang","Programming Blogs","programming"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1767769132693/e8dfeddb-ea81-4e18-9183-963c6186c0c2.png",contentHtml:`<h1>Patch #266: Lightening the Load: Introducing the Utils Crate and Shedding Dependencies</h1>
<p>As a project grows, so does its complexity and the number of its dependencies. In our latest update, we\u2019ve taken a major step toward a leaner and faster toolchain by introducing a dedicated <code>utils</code> crate and eliminating our dependency on the heavy <code>regex</code> engine.</p>
<h3>Why the Change?</h3>
<p>While external libraries are powerful, they often come with a cost: increased compilation time and larger binary sizes. We realized that our use of the <code>regex</code> library\u2014primarily for counting placeholders like <code>{}</code> in I/O operations\u2014was a classic case of using a "sledgehammer to crack a nut." By replacing it with targeted, lightweight logic, we\u2019ve significantly improved our build performance.</p>
<h3>1. The New <code>utils</code> Crate</h3>
<p>We\u2019ve centralized common logic into a new internal crate: <code>utils</code>. This improves code reusability across the workspace and keeps our core logic clean.</p>
<ul>
<li>
<p><code>formatx.rs</code>: This module now houses <code>count_placeholders</code>, a custom-built, high-performance function that replaces the regex-based placeholder counting. It\u2019s faster, simpler, and tailored exactly to our needs.</p>
</li>
<li>
<p><code>colorex.rs</code>: We\u2019ve moved our color formatting logic here. This centralizes how our compiler styles terminal output, making it easier to maintain a consistent look across the CLI.</p>
</li>
</ul>
<h3>2. Streamlining Dependencies</h3>
<p>The most significant impact of this update is the removal of the <code>regex</code> crate from <code>front/parser</code>.</p>
<ul>
<li>
<p><strong>Faster Compilation</strong>: By removing one of our largest dependencies, developers will notice a meaningful reduction in clean build times.</p>
</li>
<li>
<p><strong>Smaller Binaries</strong>: Eliminating the regex engine\u2014which includes complex state machine logic\u2014helps keep our final executable size minimal.</p>
</li>
<li>
<p><strong>Simplified Parser</strong>: The parser now relies on our lightweight <code>utils</code> crate, making the <code>front/parser/src/parser/</code><a href="http://io.rs"><code>io.rs</code></a> logic more straightforward.</p>
</li>
</ul>
<h3>3. Improved Error Integration</h3>
<p>The <code>utils</code> crate is now a foundational piece of our architecture. We\u2019ve updated <code>front/error</code> and our main application entry points to depend on <code>utils::colorex</code>. This ensures that every error message and log output utilizes a unified coloring system, providing a more cohesive user experience.</p>
<h3>Looking Ahead</h3>
<p>By taking control of our utility functions and reducing reliance on heavy external crates, we are ensuring that the compiler remains agile and performant. This refactoring sets a standard for how we will manage shared logic and external dependencies moving forward.</p>
<p>Build fast, stay lean!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/266">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-06-patch-empowering-inline-assembly-and-type-safety",title:"Patch: Empowering Low-Level Control: Enhanced Inline Assembly and Type Safety",date:"2026-01-06T11:20:38",dateDisplay:"2026-01-06",description:"We are excited to share a significant update to our compiler\u2019s frontend and backend, focusing on two critical areas: Inline Assembly (ASM) and Type System Robustness. This release makes writing low-level code more expressive while ensuring that the t...",tags:["wave-lang","compiler","patch","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1767698382632/89a9ff67-2627-4a51-8ece-5e9f7582bb15.png",contentHtml:`<h1>Patch: Empowering Low-Level Control: Enhanced Inline Assembly and Type Safety</h1>
<p>We are excited to share a significant update to our compiler\u2019s frontend and backend, focusing on two critical areas: <strong>Inline Assembly (ASM)</strong> and <strong>Type System Robustness</strong>. This release makes writing low-level code more expressive while ensuring that the type system catches more potential errors at compile time.</p>
<h3>1. Robust Inline ASM Parsing</h3>
<p>Inline assembly is a bridge between high-level logic and bare-metal performance. We\u2019ve overhauled how our parser handles <code>asm</code> blocks to make them more versatile:</p>
<ul>
<li>
<p><strong>Generic Expression Support</strong>: <code>parse_asm_block</code> now accepts full <code>Expression</code> nodes for inputs and outputs. This means you can directly use variable references, literals (decimal, hex, binary), pointers (<code>&amp;x</code>), and dereferences (<code>deref x</code>) within your ASM blocks.</p>
</li>
<li>
<p><strong>Structured Clauses</strong>: With the new <code>parse_asm_operand</code> and <code>parse_asm_inout_clause</code>, the syntax for <code>in</code> and <code>out</code> operands is cleaner and more maintainable.</p>
</li>
<li>
<p><strong>Assignment Validation</strong>: The compiler now enforces an <code>is_assignable</code> check for <code>out</code> operands, preventing logical errors where a value might be attempted to be written to a non-writable expression.</p>
</li>
</ul>
<h3>2. Smarter LLVM Codegen for ASM</h3>
<p>Translating high-level intent to LLVM IR requires precision. Our backend now handles complex ASM scenarios with ease:</p>
<ul>
<li>
<p><strong>Multiple Outputs</strong>: <code>gen_asm_stmt_ir</code> has been refactored to support multiple output operands by utilizing struct return values in LLVM.</p>
</li>
<li>
<p><strong>Literal Radix Awareness</strong>: The Lexer now preserves the raw string representation of <code>IntLiteral</code> tokens. This allows the backend to correctly interpret different radices (like hex <code>0x</code> or binary <code>0b</code>) during constant folding and code generation.</p>
</li>
<li>
<p><strong>Automatic Casting</strong>: We introduced <code>coerce_basic_value</code> to handle explicit conversions\u2014such as turning an integer into a pointer for a syscall\u2014and implicit widening.</p>
</li>
</ul>
<h3>3. Strengthening Type Safety &amp; Coercion</h3>
<p>To improve the developer experience, we've introduced <strong>Automatic Type Coercion</strong>. This reduces the need for manual casting in common, safe scenarios:</p>
<ul>
<li>
<p><strong>Integer Widening</strong>: The compiler now automatically widens integers (e.g., <code>i32</code> to <code>i64</code>) when passing arguments to functions or initializing variables.</p>
</li>
<li>
<p><strong>Pointer Safety</strong>: Safe pointer casts are now handled via <code>coerce_to_expected</code> during function calls, ensuring that the types match the expected signature without unnecessary boilerplate.</p>
</li>
</ul>
<h3>4. Better Error Reporting with Colors</h3>
<p>Debugging is easier when errors stand out. We have integrated the <code>colorex</code> crate into our error reporting module (<code>front/error</code>). Compiler errors are now syntax-highlighted in the terminal, helping you pinpoint issues in your source code at a glance.</p>
<h3>5. Testing &amp; Reliability</h3>
<p>This update includes significant updates to our test suite:</p>
<ul>
<li>
<p><strong>Syscall Wrappers</strong>: <code>test56.wave</code> has been updated to use new type-safe syscall wrappers (<code>syscall4i</code>, <code>syscall4p</code>), proving the efficiency of the new ASM and coercion logic.</p>
</li>
<li>
<p><strong>Stability</strong>: We\u2019ve fixed edge cases in array sizing (<code>test66.wave</code>) and overflow handling (<code>test69.wave</code>), ensuring the compiler remains stable as it grows.</p>
</li>
</ul>
<h3>Summary of Key Changes</h3>
<ul>
<li>
<p><strong>ASM</strong>: Support for multiple outputs, complex expressions, and pointer operands.</p>
</li>
<li>
<p><strong>Types</strong>: Automatic integer widening and pointer coercion in function calls.</p>
</li>
<li>
<p><strong>DX</strong>: Colored error messages and preserved radix info for integer literals.</p>
</li>
<li>
<p><strong>Backend</strong>: Refactored LLVM IR generation for assembly and variable initialization.</p>
</li>
</ul>
<p>These improvements represent a major step toward making our language a powerful tool for both high-level application logic and low-level systems programming. We can't wait to see what you build with these new capabilities!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/265">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-05-patch-refining-the-foundation-decomposing-the-lexer-for-better-maintainability",title:"Patch: Refining the Foundation: Decomposing the Lexer for Better Maintainability",date:"2026-01-05T08:38:29",dateDisplay:"2026-01-05",description:"Following our recent efforts to modularize the parser, we have now turned our attention to the very first stage of our compilation pipeline: the Lexer. Over time, this component had grown into a single file of nearly 900 lines, making it increasingly...",tags:["#waves","languages","compiler","programming languages","Programming Blogs","patch"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1767602253060/fae83c18-757d-47f4-a298-c95b9b1ebbe7.png",contentHtml:`<h1>Patch: Refining the Foundation: Decomposing the Lexer for Better Maintainability</h1>
<p>Following our recent efforts to modularize the parser, we have now turned our attention to the very first stage of our compilation pipeline: the Lexer.</p>
<p>Over time, this component had grown into a single file of nearly <strong>900 lines</strong>, making it increasingly difficult to reason about and safely extend.</p>
<p>In our latest update, we have successfully decomposed the previously monolithic lexer into functional submodules. This change focuses on "separation of concerns," ensuring that each part of the lexical analysis process has a dedicated and logical home.</p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767602991582/8854dbc7-fbe8-41a8-97aa-f4052720f1d8.png align=" title="center"></p>
<h3>Why Refactor the Lexer?</h3>
<p>The lexer is responsible for turning raw source code into a stream of tokens. As we added support for more complex literals, keywords, and comment styles, the lexer's logic became increasingly intertwined. By breaking it down, we make the codebase more approachable for new contributors and significantly reduce the risk of regression when adding new syntax.</p>
<h3>The New Modular Architecture</h3>
<p>The lexer has been organized into several specialized components within <code>front/lexer/src/</code>:</p>
<ul>
<li>
<p><code>core.rs</code>: Defines the foundational <code>Lexer</code> and <code>Token</code> structures. This serves as the primary source of truth for what a token is in our language.</p>
</li>
<li>
<p><code>cursor.rs</code>: Implements low-level source navigation. Logic for advancing through the text, peeking at upcoming characters (<code>peek</code>), and conditional matching (<code>match_next</code>) is now isolated here.</p>
</li>
<li>
<p><code>scan.rs</code>: The "brain" of the lexer. This module contains the main dispatch logic (<code>next_token</code>) that decides which specialized scanner to call based on the current character.</p>
</li>
<li>
<p><code>ident.rs</code>: Handles identifier scanning and the mapping of strings to reserved keywords.</p>
</li>
<li>
<p><code>literals.rs</code>: Dedicated logic for parsing complex character and string literals.</p>
</li>
<li>
<p><code>trivia.rs</code>: Manages "trivia"\u2014the parts of the code that the compiler ignores, such as whitespace and comments.</p>
</li>
<li>
<p><code>common.rs</code>: A centralized location for internal shared imports used across the lexer modules.</p>
</li>
</ul>
<h3>Integration and API Improvements</h3>
<p>This wasn't just an internal cleanup; we also refined how other parts of the compiler interact with the lexer:</p>
<ul>
<li>
<p><strong>Refined API</strong>: We updated <code>lib.rs</code> and <code>mod.rs</code> to provide a cleaner public interface.</p>
</li>
<li>
<p><strong>Parser Alignment</strong>: The <code>front/parser</code> has been updated to align with the new lexer structure. This included making token type references more explicit (e.g., <code>lexer::token::TokenType</code>), which improves code clarity in the parsing logic.</p>
</li>
</ul>
<h3>Benefits for the Future</h3>
<p>By separating the "how" (navigating source code) from the "what" (identifying specific tokens), we've created a much more robust foundation. Whether we are adding new operators, supporting different string encoding styles, or optimizing scanning performance, these changes allow us to target specific areas without navigating a giant source file.</p>
<p>Stay tuned as we continue to optimize our frontend architecture!</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/264">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2026-01-05-patch-improving-code-scalability-refactoring-our-parser-into-modular-components",title:"Patch: Improving Code Scalability: Refactoring Our Parser into Modular Components",date:"2026-01-05T07:03:47",dateDisplay:"2026-01-05",description:"At the core of any compiler or language toolchain, the parser is often one of the most complex and rapidly evolving components. As our project has grown, so has our parser.rs file. To ensure long-term maintainability and to empower our contributors, ...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1767596772793/38758fd3-07e9-418d-bf66-4ffaf7c05b4f.png",contentHtml:`<h1>Patch: Improving Code Scalability: Refactoring Our Parser into Modular Components</h1>
<p>At the core of any compiler or language toolchain, the parser is often one of the most complex and rapidly evolving components. As our project has grown, so has our <code>parser.rs</code> file. To ensure long-term maintainability and to empower our contributors, we have recently completed a significant refactoring of our parser architecture.</p>
<p><img alt="" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767596593673/5df2806c-b0bf-4a93-a9a6-1373364248f4.png align=" title="center"></p>
<h3>The Challenge: Managing Complexity</h3>
<p>Previously, a single <code>parser.rs</code> file handled almost every aspect of our language's syntax. While this worked in the early stages, the file eventually grew too large to navigate efficiently. Adding new language features or debugging existing logic became increasingly difficult as different parsing rules were tightly coupled within a single scope.</p>
<h3>The Solution: A Modular Architecture</h3>
<p>We have decoupled the monolithic parser into a series of logical submodules. This change moves the parser into a dedicated directory structure under <code>front/parser/src/parser/</code>, making the codebase more intuitive and easier to extend.</p>
<p>Here is a breakdown of the new module structure:</p>
<ul>
<li>
<p><code>asm.rs</code>: Handles assembly block parsing (<code>parse_asm_block</code>).</p>
</li>
<li>
<p><code>control.rs</code>: Manages control flow structures like <code>if</code>, <code>while</code>, and <code>for</code> loops.</p>
</li>
<li>
<p><code>decl.rs</code>: Centralizes declarations for variables, constants, and keywords like <code>let</code> and <code>var</code>.</p>
</li>
<li>
<p><code>expr.rs</code>: Dedicated to expression parsing, including function calls and parentheses handling.</p>
</li>
<li>
<p><code>functions.rs</code>: Focused on function definitions, parameter parsing, and body extraction.</p>
</li>
<li>
<p><code>io.rs</code>: Streamlines built-in I/O operations such as <code>println</code>, <code>print</code>, and <code>input</code>.</p>
</li>
<li>
<p><code>items.rs</code>: Manages high-level items like imports, protocols, and structs.</p>
</li>
<li>
<p><code>stmt.rs</code>: Orchestrates statements, assignments, and block logic.</p>
</li>
<li>
<p><code>types.rs</code>: A new home for type-parsing logic (formerly in <code>type_system.rs</code>), centralizing how the parser interprets types from tokens.</p>
</li>
</ul>
<h3>Key Enhancements &amp; Cleanup</h3>
<p>Beyond just moving files, this refactor allowed us to polish the surrounding codebase:</p>
<ul>
<li>
<p><strong>Unified Entry Point</strong>: <code>parse.rs</code> now serves as the main entry point, housing the core <code>parse()</code> function and managing submodule declarations.</p>
</li>
<li>
<p><strong>Refined Type System Integration</strong>: By merging <code>type_system.rs</code> into <code>types.rs</code>, we\u2019ve created a more cohesive workflow for type resolution during the parsing phase.</p>
</li>
<li>
<p><strong>Cleaner Imports</strong>: We updated all internal crate imports and resolved unused import warnings in <code>main.rs</code> and <code>runner.rs</code>, resulting in a cleaner build output.</p>
</li>
</ul>
<h3>Moving Forward</h3>
<p>This refactoring represents a major step forward in our infrastructure. By decoupling the parser\u2019s components, we\u2019ve made it significantly easier for developers to locate specific logic and implement new language features without side effects.</p>
<p>We believe these changes will accelerate our development velocity and provide a more robust foundation for the future of the project.</p>
<h3>Link</h3>
<ul>
<li>
<p><a href="https://github.com/wavefnd/Wave/pull/263">Pull request</a></p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave">GitHub</a></p>
</li>
<li>
<p><a href="https://discord.gg/3nev5nHqq9">Community</a></p>
</li>
</ul>`},{slug:"2025-11-27-introduction-to-wave-v015-pre-beta-structs-proto-methods-and-system-wide-build-system",title:"Introduction to Wave v0.1.5-pre-beta: Structs, Proto methods, and System-wide Build System",date:"2025-11-27T14:14:18",dateDisplay:"2025-11-27",description:"Link: Wave v0.1.5-pre-beta Hello! I'm LunaStev, the developer of Wave. We are pleased to announce Wave v0.1.5-pre-beta. In this release, we have laid the foundation for Object-Oriented Programming by introducing Structs and Proto methods. Additionall...",tags:["wave","compiler","programming languages"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1764252340035/7dd95086-f969-43aa-8f29-96a2cfdcb488.png",contentHtml:`<h1>Introduction to Wave v0.1.5-pre-beta: Structs, Proto methods, and System-wide Build System</h1>
<p>Link: <a href="https://github.com/wavefnd/Wave/releases/tag/v0.1.5-pre-beta">Wave v0.1.5-pre-beta</a></p>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are pleased to announce <a href="https://github.com/wavefnd/Wave/releases/tag/v0.1.5-pre-beta"><strong>Wave v0.1.5-pre-beta</strong></a>. In this release, we have laid the foundation for Object-Oriented Programming by introducing <strong>Structs</strong> and <strong>Proto methods</strong>. Additionally, we have completely overhauled the build system to improve stability and added a new automation script to streamline the development workflow.</p>
<p>Here are the key changes in v0.1.5-pre-beta:</p>
<h4>1. Structs: Custom Data Structures</h4>
<p>You can now define your own data types using the <code>struct</code> keyword. This allows you to group related data fields together and pass them around as a single unit.</p>
<pre><code class="language-kotlin">struct Box {
    size: i32;
}

fun main() {
    // Initialize a struct
    var b: Box = Box { size: 42 };

    // Access fields using dot notation
    println(&quot;Box size is {}&quot;, b.size);
}
</code></pre>
<h4>2. Proto: Attaching Methods</h4>
<p>The <code>proto</code> keyword has been redefined. It is now used to attach methods to a specific struct. This enables the <code>object.method()</code> syntax, making your code more expressive and organized. You can access the instance data using the <code>self</code> parameter.</p>
<pre><code class="language-kotlin">proto Box {
    fun double_size(self: Box) -&gt; i32 {
        return self.size * 2;
    }
}

fun main() {
    var b: Box = Box { size: 10 };
    // Call the method defined in proto
    println(&quot;Doubled size: {}&quot;, b.double_size());
}
</code></pre>
<h4>3. Build System Overhaul</h4>
<p>We have significantly improved how Wave is built. previously, the compiler relied on downloading custom LLVM binaries, which caused compatibility issues.</p>
<ul>
<li>
<p><strong>System LLVM:</strong> Wave now detects and links against your system's installed LLVM 14 libraries (Linux, macOS via Homebrew, and Windows).</p>
</li>
<li>
<p><a href="https://github.com/wavefnd/Wave/blob/master/x.py"><code>x.py</code></a> Script: We added a Python script (<a href="https://github.com/wavefnd/Wave/blob/master/x.py"><code>x.py</code></a>) to automate tasks like installing targets, building for cross-platform, and packaging releases.</p>
</li>
<li>
<p><strong>macOS Support:</strong> We added a macOS build job to our CI pipeline, ensuring better support for Apple users.</p>
</li>
</ul>
<p>This update makes Wave more robust and easier to develop on different operating systems.</p>
<p>Thank you for your continued interest in Wave!</p>
<h3>Installation Guide</h3>
<ol>
<li>
<p><strong>Download:</strong></p>
<ul>
<li>
<p>Download to Curl.</p>
<p><code>bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.5-pre-beta</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>`},{slug:"2025-10-01-99-bottles-of-beer-in-wave",title:"99 Bottles of Beer in Wave",date:"2025-10-01T06:29:13",dateDisplay:"2025-10-01",description:"One of the most classic programming exercises in the world is the \u201C99 Bottles of Beer\u201C song. It\u2019s a silly repetitive tune, but in programming, it has become something more: a traditional way to demonstrate loops, conditions, and string formatting acr...",tags:["99-bottle-of-beer","wave","Programming Blogs","programming","compiler","languages","wave-lang"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/UErWoQEoMrc/upload/dde8a8b45f6a5c7af97b4ca3ec99e9a3.jpeg",contentHtml:`<h1>99 Bottles of Beer in Wave</h1>
<p>One of the most classic programming exercises in the world is the <em>\u201C99 Bottles of Beer\u201C</em> song.</p>
<p>It\u2019s a silly repetitive tune, but in programming, it has become something more: a traditional way to demonstrate loops, conditions, and string formatting across different languages.</p>
<p>If you\u2019ve ever visited <a href="http://99-bottles-of-beer.net">99-bottles-of-beer.net</a>, you\u2019ll see this exercise implemented in over <strong>1,500 programming languages</strong> \u2014 from C, Java, and Python to more obscure esolangs.</p>
<p>Now, it\u2019s Wave\u2019s turn. \u{1F680}</p>
<hr>
<h2>The Wave Implementation</h2>
<p>Here\u2019s how the \u201C99 Bottles of Beer\u201C program looks in Wave:</p>
<pre><code class="language-kotlin">fun main() {
    var i: i32 = 99;

    while (i &gt; 1) {
        println(&quot;{} bottles of beer on the wall, {} bottles of beer\\nTake one down and pass it around, {} bottles of beer on the wall&quot;, i, i, i - 1);
        i = i - 1;
    }
    println(&quot;1 bottle of beer on the wall, 1 bottle of beer\\nTake one down and pass it around, no more bottles of beer on the wall&quot;);
}
</code></pre>
<hr>
<h2>Why This Matters</h2>
<p>At first glance, this might look like just another small code snippet. But for a new programming language, it\u2019s a symbolic milestone:</p>
<ul>
<li>
<p><strong>Loops</strong> (<code>while</code>) are working correctly</p>
</li>
<li>
<p><strong>Conditionals</strong> and final case handling are functional</p>
</li>
<li>
<p><strong>String formatting</strong> with <code>{}</code> placeholders is supported</p>
</li>
<li>
<p><strong>Type system</strong> enforces explicit declaration (<code>i: i32</code>)</p>
</li>
</ul>
<p>In other words: Wave is no longer just parsing tokens. It\u2019s <em>running real logic</em>.</p>
<hr>
<h2>What\u2019s Next for Wave</h2>
<p>Currently, my main focus is on <strong>struct support</strong> and IR (Intermediate Representation) generation.<br>
The parser and AST are already complete, and now it\u2019s about lowering everything into working IR.</p>
<p>This \u201C99 Bottles of Beer\u201D example is a fun checkpoint \u2014 but the real challenge ahead is making Wave handle complex features like user-defined data structures, memory handling, and eventually moving away from LLVM into our own Whale toolchain.</p>
<hr>
<h2>Final Thoughts</h2>
<p>Every programming language has its \u201CHello, World!\u201D moment.<br>
For Wave, this <em>99 Bottles of Beer</em> program feels like the next milestone \u2014 proof that the language can already express something playful, repetitive, and dynamic.</p>
<p>It may be just a silly song, but for me, it\u2019s also a sign that Wave is steadily growing into a real language. \u{1F30A}</p>
<p>Stay tuned for the next updates \u2014 structs are coming soon.</p>`},{slug:"2025-09-05-implementing-udp-networking-in-wave-direct-recvfrom-syscall",title:"Implementing UDP Networking in Wave: Direct recvfrom Syscall",date:"2025-09-05T15:13:12",dateDisplay:"2025-09-05",description:"On September 5, 2025, Wave successfully achieved its first UDP network communication.This post documents that milestone. Although Wave is still in a pre-beta stage and currently runs only on Linux x86-64,this experiment proves that Wave can directly ...",tags:["wave","Programming Blogs"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1757083427597/69856623-6cb7-48cd-9809-cb5575c55b62.gif",contentHtml:`<h1>Implementing UDP Networking in Wave: Direct recvfrom Syscall</h1>
<p>On September 5, 2025, Wave successfully achieved its <strong>first UDP network communication</strong>.<br>
This post documents that milestone.</p>
<p>Although Wave is still in a pre-beta stage and currently runs only on Linux x86-64,<br>
this experiment proves that <strong>Wave can directly interact with the operating system to perform network I/O</strong>.</p>
<hr>
<iframe src="https://video-bmn.pages.dev/udp.mp4" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<hr>
<h2><code>recvfrom</code> in C</h2>
<p>Normally, in C, receiving UDP packets looks like this:</p>
<pre><code class="language-c">ssize_t recvfrom(int sockfd, void *buf, size_t len, int flags,
                 struct sockaddr *src_addr, socklen_t *addrlen);
</code></pre>
<p>This is a familiar libc function.<br>
But internally, it\u2019s just a thin wrapper that calls the Linux kernel\u2019s <strong>syscall</strong>.</p>
<p>Inside glibc, the implementation is essentially:</p>
<pre><code class="language-c">return syscall(SYS_recvfrom, sockfd, buf, len, flags, src_addr, addrlen);
</code></pre>
<p>So <code>recvfrom()</code> is not magic \u2014 it\u2019s just calling <strong>system call number 45</strong>.</p>
<hr>
<h2>C vs Wave: Call Flow</h2>
<h3>C Call Flow</h3>
<pre><code class="language-mermaid">sequenceDiagram
    participant C as C Code
    participant L as glibc Library
    participant K as Linux Kernel
    participant N as Network Stack

    C-&gt;&gt;L: recvfrom call
    L-&gt;&gt;K: &quot;syscall SYS_recvfrom&quot;
    K-&gt;&gt;N: forward packet
    N--&gt;&gt;K: data
    K--&gt;&gt;L: result (n bytes)
    L--&gt;&gt;C: result (n bytes)
</code></pre>
<h3>Wave Call Flow</h3>
<pre><code class="language-mermaid">sequenceDiagram
    participant W as Wave Code + inline asm
    participant K as Linux Kernel
    participant N as Network Stack

    W-&gt;&gt;K: &quot;mov rax=45&quot;
    K-&gt;&gt;N: forward packet
    N--&gt;&gt;K: data
    K--&gt;&gt;W: result (n bytes)
</code></pre>
<p>\u{1F449} The only difference:</p>
<ul>
<li>
<p><strong>C</strong> goes through glibc wrapper</p>
</li>
<li>
<p><strong>Wave</strong> talks to the kernel <strong>directly</strong></p>
</li>
</ul>
<hr>
<h2>Final Wave Code</h2>
<pre><code class="language-kotlin">const AF_INET: i32 = 2;
const SOCK_DGRAM: i32 = 2;
const SYS_SOCKET: i64 = 41;
const SYS_BIND: i64 = 49;
const SYS_RECVFROM: i64 = 45;
const SYS_WRITE: i64 = 1;

fun main() {
    // 1. Create socket
    var sockfd: i64;
    asm {
        &quot;mov rax, 41&quot;      // SYS_SOCKET
        &quot;syscall&quot;
        out(&quot;rax&quot;) sockfd
        in(&quot;rdi&quot;) AF_INET
        in(&quot;rsi&quot;) SOCK_DGRAM
        in(&quot;rdx&quot;) 0
    }
    println(&quot;socket fd = {}&quot;, sockfd);

    // 2. Bind to port 8080
    var addr: array&lt;i8, 16&gt; = [2, 0, 0x1F, 0x90, 0,0,0,0, 0,0,0,0, 0,0,0,0];

    var ret: i64;
    asm {
        &quot;mov rax, 49&quot;      // SYS_BIND
        &quot;syscall&quot;
        out(&quot;rax&quot;) ret
        in(&quot;rdi&quot;) sockfd
        in(&quot;rsi&quot;) &amp;addr
        in(&quot;rdx&quot;) 16
    }
    println(&quot;bind ret = {}&quot;, ret);

    // 3. Prepare buffer
    var buf: array&lt;i8, 128&gt;;
    var src: array&lt;i8, 16&gt;;
    var srclen: i32 = 16;

    // 4. Receive data
    var n: i64;
    asm {
        &quot;mov rax, 45&quot;      // SYS_RECVFROM
        &quot;syscall&quot;
        out(&quot;rax&quot;) n
        in(&quot;rdi&quot;) sockfd
        in(&quot;rsi&quot;) &amp;buf
        in(&quot;rdx&quot;) 128
        in(&quot;r10&quot;) 0        // flags = 0 (blocking)
        in(&quot;r8&quot;)  &amp;src
        in(&quot;r9&quot;)  &amp;srclen
    }

    println(&quot;recvfrom got {} bytes&quot;, n);

    // 5. Write to stdout
    var ret2: i64;
    asm {
        &quot;mov rax, 1&quot;       // SYS_WRITE
        &quot;syscall&quot;
        out(&quot;rax&quot;) ret2
        in(&quot;rdi&quot;) 1
        in(&quot;rsi&quot;) &amp;buf
        in(&quot;rdx&quot;) n
    }
}
</code></pre>
<hr>
<h2>How It Works</h2>
<ol>
<li>
<p><strong>Socket Creation</strong><br>
    Calls <code>SYS_SOCKET (41)</code> with parameters <code>(AF_INET, SOCK_DGRAM)</code> to create a UDP socket.</p>
</li>
<li>
<p><strong>Binding</strong><br>
    Calls <code>SYS_BIND (49)</code> to bind the socket to port 8080.<br>
    The <code>addr</code> array represents a raw <code>sockaddr_in</code> structure.</p>
</li>
<li>
<p><strong>Receiving Data</strong><br>
    Calls <code>SYS_RECVFROM (45)</code> with correct register mapping:</p>
<ul>
<li>
<p>rdi = sockfd</p>
</li>
<li>
<p>rsi = buffer pointer</p>
</li>
<li>
<p>rdx = buffer length</p>
</li>
<li>
<p>r10 = flags (0, blocking mode)</p>
</li>
<li>
<p>r8 = src_addr pointer</p>
</li>
<li>
<p>r9 = addrlen pointer</p>
</li>
</ul>
</li>
<li>
<p><strong>Writing Output</strong><br>
    Calls <code>SYS_WRITE (1)</code> to print the received data directly to stdout.</p>
</li>
</ol>
<hr>
<h2>Running the Program</h2>
<ol>
<li>
<p>Run Wave program:</p>
<p><code>bash
./wavec run test/test61.wave</code></p>
</li>
<li>
<p>In another terminal, send a UDP packet:</p>
<p><code>bash
echo "hi" | nc -u 127.0.0.1 8080</code></p>
</li>
<li>
<p>Output:</p>
<p><code>plaintext
hi
socket fd = 3
bind ret = 0
recvfrom got 3 bytes</code></p>
</li>
</ol>
<hr>
<h2>Significance</h2>
<p>This experiment shows that Wave can now:</p>
<ul>
<li>
<p>Directly call Linux system calls</p>
</li>
<li>
<p>Implement UDP networking without libc</p>
</li>
<li>
<p>Receive real packets and interact with the OS network stack</p>
</li>
</ul>
<p>Even though Wave is still pre-beta with no standard library,<br>
we have demonstrated that it can already act as a <strong>system programming language</strong>.</p>
<p>Future extensions will include:</p>
<ul>
<li>
<p><code>sendto()</code> for UDP sending</p>
</li>
<li>
<p><code>connect()</code> / <code>accept()</code> for TCP</p>
</li>
<li>
<p>HTTP library built in Wave</p>
</li>
<li>
<p>Asynchronous I/O for high-performance servers</p>
</li>
</ul>`},{slug:"2025-08-13-redefining-low-level-and-high-level-languages",title:"Redefining Low-Level and High-Level Languages",date:"2025-08-13T02:09:04",dateDisplay:"2025-08-13",description:"In the history of programming languages, the terms low-level and high-level have long been treated as fixed categories.Traditionally, low-level languages referred to machine code, assembly, and other extremely hardware-oriented languages.Meanwhile, l...",tags:["Programming Blogs","programming","coding"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/hGV2TfOh0ns/upload/e26362da2b6298e19b5d2e3bb07c0e20.png",contentHtml:`<h1>Redefining Low-Level and High-Level Languages</h1>
<p>In the history of programming languages, the terms <em>low-level</em> and <em>high-level</em> have long been treated as fixed categories.<br>
Traditionally, low-level languages referred to machine code, assembly, and other extremely hardware-oriented languages.<br>
Meanwhile, languages like C, Java, Python, or LISP, with their higher degree of abstraction, were grouped into the high-level category.</p>
<p>But this classification no longer fits today\u2019s development landscape.<br>
Modern developers work across a wide spectrum \u2014 servers, cloud platforms, mobile, web, AI \u2014 yet direct interaction with the operating system kernel or hardware has become increasingly rare.<br>
As a result, many languages labeled \u201Chigh-level\u201D now operate solely on top of runtime environments, with little to no system-level control.</p>
<hr>
<h3>A New Standard: System Access</h3>
<p>Today, the distinction between low-level and high-level languages should not be based solely on syntax complexity or abstraction layers.<br>
Instead, the defining criterion should be <strong>how deeply a language can access the underlying system</strong>.</p>
<ul>
<li>
<p><strong>Low-level languages</strong>: Can directly manipulate memory, control hardware registers, and call kernel APIs.</p>
</li>
<li>
<p><strong>High-level languages</strong>: Cannot directly access the OS internals, operating only on top of runtimes and abstraction layers.</p>
</li>
</ul>
<p>By this measure, C, Rust, Zig, and more recently <strong>Wave</strong> fall into the low-level category.<br>
In contrast, while JavaScript, Python, and Java boast rich ecosystems, they remain in the high-level space when it comes to system access.</p>
<hr>
<h3>Blurring the Boundaries</h3>
<p>Interestingly, some modern system languages retain the performance and control of traditional low-level programming while also supporting high-level environments such as web, networking, and AI development.<br>
Wave is one such language \u2014 designed so that you can develop an operating system and, from the same codebase, build a web API server or a blockchain node without switching tools or languages.</p>
<p>This marks a shift away from the old model of <em>\u201CC for the system, Python for the service\u201D</em>, toward a new era where <strong>one language can cover the entire stack</strong> \u2014 from hardware-level control to high-level application logic.</p>
<hr>
<h3>Conclusion</h3>
<p>The line between low-level and high-level is no longer defined by abstraction depth but by <strong>system control capability</strong>.<br>
Languages that can bridge these worlds are shaping the next generation of development.<br>
Wave stands among them \u2014 at the intersection of both worlds, aiming to make that boundary disappear.</p>`},{slug:"2025-08-04-why-low-level-programming-still-matters-in-2025",title:"Why Low-Level Programming Still Matters in 2025",date:"2025-08-04T05:51:33",dateDisplay:"2025-08-04",description:"As of 2025, the programming language ecosystem is more diverse than ever.While general-purpose and system-level languages once dominated the landscape, most new languages today are purpose-built: DSLs (Domain-Specific Languages), interpreter-based sc...",tags:["programming","programming language","wave-lang"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/CosHjyONRk8/upload/3aa0183c9fb059125c50d639692ebbf7.jpeg",contentHtml:`<h1>Why Low-Level Programming Still Matters in 2025</h1>
<p>As of 2025, the programming language ecosystem is more diverse than ever.<br>
While general-purpose and system-level languages once dominated the landscape, most new languages today are purpose-built: DSLs (Domain-Specific Languages), interpreter-based scripting languages, or secure, sandboxed runtimes for niche domains.</p>
<p>And yet, in this landscape, <strong>new low-level languages continue to emerge</strong> \u2014 Zig, Odin, Jai, and Wave, among others.</p>
<p><strong>Why?</strong><br>
In an era where abstraction reigns, what drives developers to build \u2014 and use \u2014 new low-level languages?</p>
<hr>
<h2>The Era of High-Level Abstractions</h2>
<p>High-level languages have dramatically improved development productivity.<br>
Tasks that once required intricate knowledge of memory, registers, or system calls can now be handled with a single library function.</p>
<p>Modern languages further specialize for their domains:</p>
<ul>
<li>
<p><strong>Solidity</strong> for blockchain contracts</p>
</li>
<li>
<p><strong>GLSL/HLSL</strong> for graphics shaders</p>
</li>
<li>
<p><strong>GraphQL/Astro</strong> for web data and rendering pipelines</p>
</li>
</ul>
<p>These languages are designed to <strong>hide complexity</strong>, letting developers focus solely on the problem domain.<br>
But in doing so, they also take control away from the developer.</p>
<hr>
<h2>What Defines a "Low-Level" Language in 2025?</h2>
<p>Traditionally, low-level languages meant C or even assembly.<br>
But in 2025, we need a more nuanced definition \u2014 one rooted not in syntax, but in <strong>design philosophy</strong>.</p>
<p>A modern low-level language tends to have these characteristics:</p>
<ol>
<li>
<p><strong>Explicit control</strong> \u2014 Memory, pointers, stacks, I/O, and system-level behavior are manually managed</p>
</li>
<li>
<p><strong>Minimal abstraction</strong> \u2014 Manual over automatic, simple over hidden</p>
</li>
<li>
<p><strong>No or ultra-thin runtime</strong> \u2014 No implicit behaviors or frameworks running at execution time</p>
</li>
<li>
<p><strong>Predictable execution</strong> \u2014 Developers can reason about exactly what happens and when</p>
</li>
<li>
<p><strong>Direct access to system resources</strong> \u2014 Enables kernel, OS, UEFI, bare-metal, or driver development</p>
</li>
</ol>
<p>It\u2019s not just about performance \u2014 it\u2019s about <strong>developer intent and system transparency</strong>.</p>
<hr>
<h2>Why Build New Low-Level Languages?</h2>
<p>It may seem that most modern software doesn\u2019t need low-level languages.<br>
Web apps, mobile apps, ML models, and even many games run well on higher abstractions.</p>
<p>Yet, developers continue to create new low-level languages for key reasons:</p>
<h3>\u25B8 Legacy Limitations</h3>
<p>C and C++ have served us for decades, but come with known issues:<br>
<strong>poor memory safety, complex build systems, and unpredictable behavior</strong>.<br>
Modern developers want more control \u2014 without the baggage.</p>
<h3>\u25B8 Platform Expansion</h3>
<p>New environments like WebAssembly, UEFI, RISC-V, and embedded systems require<br>
<strong>precise control over execution and memory layout</strong>, often unsupported by existing languages.</p>
<h3>\u25B8 Reclaiming Control</h3>
<p>High-level languages are powerful, but often too opaque.<br>
For domains where performance, security, and transparency matter,<br>
developers prefer to <strong>own the execution model</strong> directly.</p>
<h3>\u25B8 Language as a Philosophy</h3>
<p>Sometimes, a new language isn\u2019t just about solving a technical need.<br>
It\u2019s about exploring a new philosophy \u2014 <strong>rethinking how we express logic, control, and structure</strong>.<br>
This is the foundation from which Wave was created.</p>
<hr>
<h2>How Wave Approaches the Low-Level Space</h2>
<p>Wave is a low-level systems language designed with this philosophy in mind.</p>
<p>Its core principles include:</p>
<ul>
<li>
<p><strong>No runtime</strong>: Everything is resolved at compile-time \u2014 no hidden machinery during execution</p>
</li>
<li>
<p><strong>Explicit typing and control flow</strong>: No inference, no ambiguity, full developer control</p>
</li>
<li>
<p><strong>Direct access to resources</strong>: Pointers, manual memory management, system interfaces</p>
</li>
<li>
<p><strong>Powerful standard library with minimal core</strong>: High-level capabilities are optional, modular, and never mandatory</p>
</li>
</ul>
<p>Wave is not just a \u201Cfast\u201D language \u2014<br>
it\u2019s a language designed to <strong>put the developer in full control</strong>.</p>
<hr>
<h2>Conclusion: Low-Level Is Not Obsolete \u2014 It\u2019s Essential</h2>
<p>Even in a world dominated by abstraction,<br>
the layers <strong>beneath</strong> those abstractions must still be built, maintained, and trusted.</p>
<p>That\u2019s where low-level languages come in.</p>
<p>They allow developers to:</p>
<ul>
<li>
<p>Build operating systems and kernels</p>
</li>
<li>
<p>Write compilers, runtimes, and hypervisors</p>
</li>
<li>
<p>Target new architectures or platforms with precision</p>
</li>
<li>
<p>Optimize performance and memory behavior exactly as needed</p>
</li>
</ul>
<p>And so, low-level languages \u2014 including modern ones like Wave \u2014<br>
will continue to emerge, evolve, and empower the systems we all rely on.</p>`},{slug:"2025-08-03-5-system-programming-languages-to-watch-in-2025",title:"5 System Programming Languages to Watch in 2025",date:"2025-08-03T14:08:06",dateDisplay:"2025-08-03",description:"The world of systems programming is evolving rapidly.While legacy languages like C still form the bedrock of modern computing, new languages are emerging \u2014 aiming to improve safety, performance, and developer experience. In 2025, a mix of battle-test...",tags:["wave-lang","Programming Blogs","programming languages","programming"],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/uL1TI7xyLHQ/upload/86f5577c0274460b43ecd1e3057cdf0c.jpeg",contentHtml:`<h1>5 System Programming Languages to Watch in 2025</h1>
<p><strong>The world of systems programming is evolving rapidly.</strong><br>
While legacy languages like C still form the bedrock of modern computing, new languages are emerging \u2014 aiming to improve safety, performance, and developer experience.</p>
<p>In 2025, a mix of battle-tested giants and bold newcomers are shaping the landscape.<br>
Whether you're building operating systems, embedded firmware, high-frequency trading platforms, or low-level drivers, the choice of language matters more than ever.</p>
<p>Here are five system programming languages that are making waves \u2014 and worth watching closely.</p>
<hr>
<ol>
<li>
<h2>\u{1F300} <strong>Wave: The Future-Forward Systems Language</strong></h2>
</li>
</ol>
<p>Wave is a bold new system programming language released in 2025, designed to merge the raw control of low-level development with the expressiveness of high-level programming.</p>
<p>What sets Wave apart is its foundational philosophy:<br>
The compiler itself has no built-in functions \u2014 it only supports syntax and minimal structure. All core functionality comes from its <strong>standard library</strong>, making it the true heart of the language.</p>
<h3>Why Wave Matters</h3>
<ul>
<li>
<p><strong>Boot-Level Power</strong>: Even in its early stage, Wave already supports boot sector development, proving its capabilities in ultra-low-level environments.</p>
</li>
<li>
<p><strong>Standard Library-Centric</strong>: Wave treats the standard library not as an optional toolset, but as an essential layer that defines how the language operates.</p>
</li>
<li>
<p><strong>Unified Ecosystem</strong>: With tools like <strong>Whale</strong> (compiler toolchain), <strong>Vex</strong> (package manager), and <strong>WSON</strong> (data format), Wave is building an integrated system from the ground up.</p>
</li>
</ul>
<p>Looking ahead, Wave aims to become a one-language solution for everything from <strong>operating systems and embedded systems to networking, blockchain, and quantum computing</strong>.</p>
<p>For developers who want complete control without giving up modern comfort, Wave represents the next evolution in systems programming.</p>
<hr>
<ol start="2">
<li>
<h2>\u{1F980} <strong>Rust: The Safety and Performance Champion</strong></h2>
</li>
</ol>
<p>Rust has redefined systems programming since its release in 2010. Known for its unmatched memory safety and zero-cost abstractions, it lets developers write safe and performant code without a garbage collector.</p>
<h3>Why Rust Matters</h3>
<ul>
<li>
<p><strong>Memory Safety</strong>: Rust\u2019s ownership model catches bugs at compile time, preventing entire classes of runtime errors.</p>
</li>
<li>
<p><strong>Industry Adoption</strong>: From <strong>Firefox</strong> to <strong>Android</strong> to the <strong>Linux kernel</strong>, Rust is trusted in critical systems.</p>
</li>
<li>
<p><strong>Tooling and Community</strong>: With powerful tools like <code>cargo</code> and a vibrant developer ecosystem, Rust is more than just a language \u2014 it's a movement.</p>
</li>
</ul>
<p>Rust remains the go-to for developers who want safety without compromising performance, and its momentum is only growing.</p>
<hr>
<ol start="3">
<li>
<h2>\u26A1 <strong>Zig: The Simpler C Alternative</strong></h2>
</li>
</ol>
<p>Zig is a minimalist systems language designed to replace C. With manual memory control and no hidden control flow, it appeals to developers who value transparency and predictability.</p>
<h3>Why Zig Matters</h3>
<ul>
<li>
<p><strong>No Hidden Behavior</strong>: Zig avoids surprises \u2014 no implicit allocations or control flow magic.</p>
</li>
<li>
<p><strong>Interop with C</strong>: Seamlessly integrates with existing C codebases.</p>
</li>
<li>
<p><strong>Built-In Build System</strong>: Zig comes with a modern, cross-platform build tool, making it easy to manage even large projects.</p>
</li>
</ul>
<p>As system programming seeks simplicity and precision, Zig stands out as a practical and focused alternative.</p>
<hr>
<ol start="4">
<li>
<h2>\u{1F9F1} <strong>Carbon: Google\u2019s Modern C++ Successor</strong></h2>
</li>
</ol>
<p>Carbon was introduced by Google in 2022 to modernize systems development while maintaining interoperability with existing C++ codebases.</p>
<h3>Why Carbon Matters</h3>
<ul>
<li>
<p><strong>Gradual Migration</strong>: Developers can adopt Carbon incrementally in existing C++ projects.</p>
</li>
<li>
<p><strong>Cleaner Syntax</strong>: Designed with safety, readability, and modern tooling in mind.</p>
</li>
<li>
<p><strong>Backed by Google</strong>: Strong institutional support ensures ongoing development and visibility.</p>
</li>
</ul>
<p>Although still experimental, Carbon represents a compelling path forward for teams rooted in C++ who want to evolve without rewriting from scratch.</p>
<hr>
<ol start="5">
<li>
<h2>\u{1F4DC} <strong>C: The Indispensable Classic</strong></h2>
</li>
</ol>
<p>Created in 1972 by Dennis Ritchie at Bell Labs, C remains the foundation of modern computing.<br>
Its speed, simplicity, and ubiquity have made it the backbone of operating systems, firmware, and embedded platforms.</p>
<h3>Why C Matters</h3>
<ul>
<li>
<p><strong>Performance</strong>: Nothing beats the raw speed and minimal abstraction of C.</p>
</li>
<li>
<p><strong>Legacy</strong>: Linux, UEFI, and countless firmware platforms are all built in C.</p>
</li>
<li>
<p><strong>Portability</strong>: C code runs everywhere \u2014 from microcontrollers to supercomputers.</p>
</li>
</ul>
<p>C isn\u2019t going anywhere. For those who want to get close to the metal, it still sets the gold standard.</p>
<hr>
<p>The landscape of systems programming is more exciting than ever.<br>
As we move into 2025, developers have more choices \u2014 and more power \u2014 than ever before.</p>
<p>Whether you're building the next operating system, a hardware controller, or a blockchain runtime, one of these languages might be your perfect tool.<br>
And who knows? <strong>The next great innovation might come from a language like Wave \u2014 built for the future, but rooted in what systems programming has always been about: control, performance, and precision.</strong></p>`},{slug:"2025-08-01-introduction-to-wave-v014-pre-beta-add-optimization-method-chaining-and-image-file-build",title:"Introduction to Wave v0.1.4-pre-beta: Add optimization, method chaining, and image file build",date:"2025-08-01T03:28:54",dateDisplay:"2025-08-01",description:"Hello! I'm LunaStev, the developer of Wave. We are pleased to announce Wave v0.1.4-pre-beta \u2014 We've added CLI improvements, LLVMO2 optimization, and we've added commands to help build the image file, and we've added the most important feature, Method...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270096252/b768a649-a82e-4b94-ab0e-89de88f680e0.webp",contentHtml:`<h1>Introduction to Wave v0.1.4-pre-beta: Add optimization, method chaining, and image file build</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are pleased to announce Wave v0.1.4-pre-beta \u2014 We've added CLI improvements, LLVMO2 optimization, and we've added commands to help build the image file, and we've added the most important feature, Method Chaining.</p>
<h2>PR and Commits</h2>
<ul>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/212">[#212]CLI improvements</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/213">[#213]Optimized to pass and -O2</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/215">[#215]Image caption Agregar comandos CLI y palabras clave de Proto para construir archivos</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/216">[#216]Add Method Chaining</a></p>
</li>
</ul>
<h2>Showcase</h2>
<p>The showcase is available at <a href="https://github.com/LunaStev/wave-testing">Wave-Test</a>.</p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Features</h2>
<p>CLI:</p>
<pre><code class="language-bash">wavec run --img main.wave
</code></pre>
<p>Method Chaining:</p>
<pre><code class="language-kotlin">fun len(s: str) -&gt; i32 {
    var count: i32 = 0;
    while (s[count] != 0) {
        count += 1;
    }
    return count;
}

fun main() {
    var my_string: str = &quot;Hello World&quot;;
    var length: i32 = my_string.len();
    println(&quot;Result of my_string.len(): {}&quot;, length);
}
</code></pre>
<hr>
<h2>Installation Guide</h2>
<ol>
<li>
<p><strong>Download:</strong></p>
<ul>
<li>
<p>Download to Curl.</p>
<p><code>bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.4-pre-beta</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://discord.com/invite/3nev5nHqq9">Community</a></p>`},{slug:"2025-07-26-printing-characters-via-bios-using-inline-assembly-in-wave",title:"Printing Characters via BIOS Using Inline Assembly in Wave",date:"2025-07-26T13:14:19",dateDisplay:"2025-07-26",description:"Wave provides a feature called inline assembly, and today we\u2019re going to use it to directly call the BIOS. The int 0x10 interrupt is one of the most basic video output functions in real mode. By putting 0x0E into the AH register and the character you...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270099740/13220347-ff61-49a5-abab-447090de6849.webp",contentHtml:`<h1>Printing Characters via BIOS Using Inline Assembly in Wave</h1>
<p>Wave provides a feature called inline assembly, and today we\u2019re going to use it to directly call the BIOS. The <code>int 0x10</code> interrupt is one of the most basic video output functions in real mode. By putting <code>0x0E</code> into the AH register and the character you want to output into the AL register, then calling <code>int 0x10</code>, the BIOS will display the character on the screen.</p>
<p>Using this method, we\u2019ll print "Hi!", then perform a line break with CR (0x0D) and LF (0x0A), and finally print "OK".</p>
<p>Currently, the Wave compiler can only be built on Linux, and by default it only generates executable binaries. It does <strong>not</strong> directly create a <code>.img</code> disk image like a bootloader would. However, when Wave compiles, it generates a <code>/target</code> folder that contains both an LLVM IR file (<code>.ll</code>) and a Linux binary. Since we want to create BIOS code, we don\u2019t need the Linux binary; instead, we\u2019ll use the <code>temp.ll</code> file containing the LLVM IR code.</p>
<p>Wave is currently in its frontend development phase, and for testing purposes it temporarily uses LLVM. LLVM generates LLVM IR, which can then be compiled into an object file or executable for the desired target architecture using the <code>clang</code> command.</p>
<pre><code class="language-kotlin">fun main() {
    // Print 'H' using BIOS teletype mode
    asm {
        &quot;mov ah, 0x0e&quot;   // AH = 0x0E \u2192 BIOS int 0x10 teletype mode
        &quot;mov al, 0x48&quot;   // AL = 0x48 \u2192 ASCII 'H'
        &quot;int 0x10&quot;       // BIOS video service call \u2192 prints 'H' and moves cursor
    }

    // Print 'i'
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x69&quot;   // ASCII 'i'
        &quot;int 0x10&quot;
    }

    // Print '!'
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x21&quot;   // ASCII '!'
        &quot;int 0x10&quot;
    }

    // Carriage Return (CR)
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x0D&quot;   // CR: move cursor to beginning of line
        &quot;int 0x10&quot;
    }

    // Line Feed (LF)
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x0A&quot;   // LF: move cursor down one line
        &quot;int 0x10&quot;
    }

    // Print 'O'
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x4F&quot;   // ASCII 'O'
        &quot;int 0x10&quot;
    }

    // Print 'K'
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x4B&quot;   // ASCII 'K'
        &quot;int 0x10&quot;
    }
}
</code></pre>
<p>Now, to run this code in a BIOS environment, we need to go through a build process. As mentioned earlier, the Wave compiler doesn\u2019t directly create a <code>.img</code>, so we need to manually build a boot image using the <code>temp.ll</code> file.</p>
<p>The build steps are as follows:</p>
<ol>
<li>
<p><strong>Generate LLVM IR (</strong><code>temp.ll</code>) from Wave code:</p>
<p><code>bash
wavec run main.wave</code></p>
</li>
<li>
<p><strong>Convert LLVM IR to a 16-bit object file:</strong></p>
<p><code>bash
llc -march=x86 -mattr+16bit-mode -filetype=obj target/temp.ll -o boot.o</code></p>
</li>
<li>
<p><strong>Link the object file into a bootloader binary:</strong></p>
<p><code>bash
ld -m elf_i386 -Ttext 0x7c00 --oformat binary boot.o -o boot.bin</code></p>
</li>
<li>
<p><strong>Add boot sector signature (0x55AA):</strong></p>
<p><code>bash
echo -ne '\\x55\\xAA' | dd of=boot.bin bs=1 seek=510 count=2 conv=notrunc</code></p>
</li>
<li>
<p><strong>Create the final boot image:</strong></p>
<p><code>bash
dd if=boot.bin of=os.img bs=512 count=1 conv=notrunc</code></p>
</li>
<li>
<p><strong>Run with QEMU:</strong></p>
<p><code>bash
qemu-system-i386 -drive format=raw,file=os.img</code></p>
</li>
</ol>
<hr>
<p>To automate this process, you can create a <code>build.sh</code> script:</p>
<pre><code class="language-bash">#!/bin/bash

set -e

LL_FILE=target/temp.ll
OBJ_FILE=boot.o
BIN_FILE=boot.bin
IMG_FILE=os.img

wavec run main.wave

llc -march=x86 -mattr=+16bit-mode -filetype=obj $LL_FILE -o $OBJ_FILE

ld -m elf_i386 -Ttext 0x7c00 --oformat binary $OBJ_FILE -o $BIN_FILE

echo -ne '\\x55\\xAA' | dd of=$BIN_FILE bs=1 seek=510 count=2 conv=notrunc

dd if=$BIN_FILE of=$IMG_FILE bs=512 count=1 conv=notrunc

echo &quot;[+] Image created: $IMG_FILE&quot;
</code></pre>
<p>Now, just run <code>./build.sh</code>, then execute:</p>
<pre><code class="language-bash">qemu-system-i386 -drive format=raw,file=os.img
</code></pre>
<p>You\u2019ll see <code>Hi!</code> followed by a line break and <code>OK</code> displayed in QEMU.</p>
<p><img alt="qemu" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270098923/ac7146d4-9c64-40a7-9e9d-ab046c875259.png align=" title="left"></p>
<hr>
<p>So far, we\u2019ve seen how to directly call BIOS functions using inline assembly in Wave and print simple strings.</p>
<p>This example only used basic character output functionality, but you can also call other BIOS interrupts like <code>int 0x16</code> (keyboard input) in the same way. It\u2019s also possible to directly access VGA memory or expand this into simple bootloader logic.</p>
<p>Although Wave is still in its early development stage, the ability to call BIOS via inline assembly shows that it can be used for low-level development as well. Next, I plan to experiment further with keyboard input, VGA memory output, and more fun low-level features.</p>
<hr>
<p>Github: https://github.com/LunaStev/Wave</p>
<p>Website: https://wave-lang.dev</p>`},{slug:"2025-07-14-introduction-to-wave-v013-pre-beta-syntax-tweaks-bug-fixes-and-enhanced-type-and-import-handling",title:"Introduction to Wave v0.1.3-pre-beta: Syntax tweaks, bug fixes, and enhanced type and import handling.",date:"2025-07-14T06:22:27",dateDisplay:"2025-07-14",description:"Hello! I'm LunaStev, the developer of Wave. We are pleased to announce Wave v0.1.3-pre-beta \u2014 We changed the function parameter syntax from semicolons to commas, fixed LLVM IR generation for arrays of pointers and index access, and allowed parameters...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270102216/2f752c36-0f2b-48b3-8a7b-2cecad258a00.webp",contentHtml:`<h1>Introduction to Wave v0.1.3-pre-beta: Syntax tweaks, bug fixes, and enhanced type and import handling.</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are pleased to announce Wave v0.1.3-pre-beta \u2014 We changed the function parameter syntax from semicolons to commas, fixed LLVM IR generation for arrays of pointers and index access, and allowed parameters to have multiple types. We also fixed bugs related to parameter parsing and <code>if</code> statements, improved inline assembly support for negative values, and restructured the <code>import</code> system.</p>
<h2>PR and Commits</h2>
<ul>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/197">[#197]Change function parameter syntax from semicolon to comma (issue #196)</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/199">[#198]Fix incorrect LLVM IR generation for array of pointers and IndexAccess dereferencing (issue #198)</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/201">[#201]Parameters can have multiple types</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/204">[#204]Param bug fix</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/206">[#206]Handling Inline Assembly Negative Values (issue #205)</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/208">[#208]Troubleshooting if statement bugs in paser</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/210">[#210]Cambiar la estructura de import</a></p>
</li>
</ul>
<h2>Showcase</h2>
<p>The showcase is available at <a href="https://github.com/LunaStev/wave-testing">Wave-Test</a>.</p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<ol>
<li>
<p><strong>Download:</strong></p>
<ul>
<li>
<p>Download to Curl.</p>
<p><code>bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://discord.com/invite/3nev5nHqq9">Discord</a></p>
<p><a href="https://ko-fi.com/lunasev">Ko-fi</a></p>`},{slug:"2025-07-12-booting-from-scratch-in-wave-printing-h-at-0x7c00",title:"Booting from Scratch in Wave: Printing \u2018H\u2019 at 0x7C00",date:"2025-07-12T04:38:54",dateDisplay:"2025-07-12",description:"Wave is a language that supports inline assembly. In its current pre-beta stage, it compiles through LLVM. So here's a thought \u2014 what if we could write a boot sector in Wave and run it using QEMU? If this works, we might just be writing the very firs...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754271463009/7b0a28e6-831a-459d-85d2-447b7f86e781.webp",contentHtml:`<h1>Booting from Scratch in Wave: Printing \u2018H\u2019 at 0x7C00</h1>
<p>Wave is a language that supports inline assembly. In its current pre-beta stage, it compiles through LLVM.
So here's a thought \u2014 what if we could write a boot sector in Wave and run it using QEMU?</p>
<p>If this works, we might just be writing the very first line in Wave\u2019s low-level programming history.</p>
<p>Today, we\u2019re going to attempt exactly that:
<strong>creating a boot sector using only Wave</strong>.</p>
<hr>
<p>At the moment, Wave uses LLVM as a temporary backend.
LLVM is a general-purpose compiler toolchain used by languages like C/C++, Rust, and Zig.
However, Wave aims to eventually move away from LLVM and build its own dedicated compiler toolchain,
called <strong>Whale</strong> \u2014 optimized specifically for Wave and free from the limitations of LLVM.</p>
<p>Of course, before that can happen, Wave\u2019s frontend needs to be fully developed.</p>
<hr>
<p>In a previous post, I showed how to print \u201CHello World\u201D using only Wave.
This time, we\u2019ll take it one step further and write a boot sector, which runs below the OS level.</p>
<hr>
<p>Typically, boot sectors and bootloaders are written in raw assembly.
But Wave allows inline assembly using the <code>asm {}</code> block, making it possible to implement a boot sector directly in Wave.</p>
<p>The basics of Wave\u2019s inline assembly syntax are explained in my earlier post:
<a href="https://dev.to/lunastev/printing-hello-world-from-scratch-in-wave-4oh">Printing Hello World from Scratch in Wave</a></p>
<hr>
<p>Here\u2019s the Wave code we\u2019ll be using:</p>
<pre><code>fun main() {
    asm {
        &quot;mov ah, 0x0e&quot;
        &quot;mov al, 0x48&quot;
        &quot;int 0x10&quot;
    }
}
</code></pre>
<p>Before we proceed, let\u2019s break it down a bit.</p>
<h2>Code Breakdown</h2>
<h3>1. <code>mov ah, 0x0e</code></h3>
<ul>
<li>Stores <code>0x0E</code> in the AH register.</li>
<li>In x86 real mode, the <code>int 0x10</code> BIOS interrupt is used for video services.</li>
<li>When AH = <code>0x0E</code>, it selects the "TTY character output" function.</li>
</ul>
<h3>2. <code>mov al, 0x48</code></h3>
<ul>
<li>Stores <code>0x48</code> (ASCII for <code>'H'</code>) in the AL register.</li>
<li>This sets the character to be printed.</li>
</ul>
<h3>3. <code>int 0x10</code></h3>
<ul>
<li>Triggers the BIOS video interrupt.</li>
<li>AH = <code>0x0E</code> \u2192 TTY mode</li>
<li>AL = character to print</li>
<li>BL = page number (defaults to 0)</li>
<li>As a result, it prints a single <code>'H'</code> on the screen.</li>
</ul>
<hr>
<p>Now that the code is ready, it\u2019s time to compile.</p>
<p>Currently, Wave only compiles to Linux binaries \u2014 formats like <code>.img</code> or <code>.exe</code> aren\u2019t directly supported.
However, Wave generates a <code>temp.ll</code> file (LLVM IR) when running <code>wavec run main.wave</code>, and we can use that to produce a bootable <code>.img</code> file.</p>
<p>To simplify the process, I\u2019ve written a shell script called <code>build.sh</code>:</p>
<pre><code class="language-bash">#!/bin/bash

set -e

LL_FILE=target/temp.ll
OBJ_FILE=boot.o
BIN_FILE=boot.bin
IMG_FILE=os.img

wavec run main.wave

llc -march=x86 -mattr=+16bit-mode -filetype=obj $LL_FILE -o $OBJ_FILE

ld -m elf_i386 -Ttext 0x7c00 --oformat binary $OBJ_FILE -o $BIN_FILE

echo -ne '\\x55\\xAA' | dd of=$BIN_FILE bs=1 seek=510 count=2 conv=notrunc

dd if=$BIN_FILE of=$IMG_FILE bs=512 count=1 conv=notrunc

echo &quot;[+] Image created: $IMG_FILE&quot;
</code></pre>
<blockquote>
<p>Note: You\u2019ll need the LLVM toolchain installed. I recommend using <code>clang 14</code> for compatibility with Wave.</p>
</blockquote>
<p>When you run <code>./build.sh</code>, you\u2019ll get output like this:</p>
<p><img alt="command" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754271461390/619a3331-39af-40bb-be75-28381828b9a6.png"></p>
<p>The <code>os.img</code> file is now ready.</p>
<p>Let\u2019s boot it using QEMU:</p>
<pre><code class="language-bash">qemu-system-i386 -drive format=raw,file=os.img
</code></pre>
<p>You should see the character <code>'H'</code> printed to the screen like this:</p>
<p><img alt="qemu" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754271462332/5847bd36-c88a-4f5a-b455-e7710c929d52.png"></p>
<hr>
<p>Wave is still a work in progress, but this experiment shows that it's already capable of writing boot sectors through inline assembly.
As the language evolves with more features and syntax improvements, we might one day build entire OS kernels in Wave.</p>`},{slug:"2025-07-11-printing-hello-world-from-scratch-in-wave",title:"Printing Hello World from Scratch in Wave",date:"2025-07-11T09:57:43",dateDisplay:"2025-07-11",description:"Wave fundamentally provides no standard functions out of the box. While println() and print() do currently exist, they are temporary functions intended for testing during development and are not official. The only officially supported built-in functi...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754271453970/3a4f35fd-8652-4f46-a6ae-d416b2e64c38.webp",contentHtml:`<h1>Printing Hello World from Scratch in Wave</h1>
<p>Wave fundamentally provides <strong>no standard functions</strong> out of the box. While <code>println()</code> and <code>print()</code> do currently exist, they are temporary functions intended for testing during development and are <strong>not official</strong>. The only officially supported built-in function in Wave is <code>import()</code>.</p>
<p>But let\u2019s be honest\u2014if you had to build everything from scratch with no foundation, you probably wouldn't want to use the language. Fortunately, Wave supports a <strong>standard library</strong>, which allows you to use pre-written library functions. However, in <strong>bare-metal environments</strong> where standard libraries can't be used, you must implement everything yourself, step by step.</p>
<hr>
<h2>Overview</h2>
<p>Today, we'll try printing "Hello World" in <strong>Wave with nothing but the bare essentials</strong>.</p>
<p>The Wave compiler only provides <strong>syntactic support</strong>\u2014meaning it doesn't include any functional utilities like <code>syscall()</code>. Aside from <code>import()</code>, no functions are provided by default.</p>
<p>Wave supports <strong>inline assembly</strong>, written using the <code>asm {}</code> block.</p>
<p>Let's quickly go over the basic syntax of inline assembly in Wave.</p>
<hr>
<h2>Inline Assembly Syntax</h2>
<pre><code class="language-plaintext">asm {
    &quot;assembly instruction&quot;     // actual assembly code line by line
    ...
    in(&quot;register&quot;) value       // input register mapping
    out(&quot;register&quot;) variable   // output register mapping
}
</code></pre>
<h3>1. <code>"..."</code>: Assembly Instructions</h3>
<ul>
<li>
<p>These are raw CPU assembly instructions.</p>
</li>
<li>
<p>One instruction per line, multiple lines allowed.</p>
</li>
<li>
<p>Example: <code>"mov rax, 1"</code>, <code>"syscall"</code></p>
</li>
</ul>
<h3>2. <code>in("rdi") s</code>: Passing Input</h3>
<ul>
<li>
<p>This means the Wave variable <code>s</code> will be loaded into the <code>rdi</code> register.</p>
</li>
<li>
<p>On x86-64, <code>rdi</code> is the standard register for the first syscall argument.</p>
</li>
</ul>
<blockquote>
<p><code>in("register") expression</code> -&gt; Loads the given expression into the specified register.</p>
</blockquote>
<h3>3. <code>out("rax") ret</code>: Receiving Output</h3>
<ul>
<li>
<p>Syscall return values are typically stored in the <code>rax</code> register.</p>
</li>
<li>
<p><code>out("rax") ret</code> means: assign the value in <code>rax</code> to the Wave variable <code>ret</code>.</p>
</li>
</ul>
<blockquote>
<p><code>out("register") variable</code> -&gt; Reads the register's value into the specified Wave variable.</p>
</blockquote>
<hr>
<p>Now let\u2019s implement <strong>Hello World</strong> from scratch.</p>
<p>This is only supported in Wave version <code>v0.1.3-pre-beta-nightly-2025-07-11</code> and later. The stable release is <code>v0.1.3-pre-beta</code>. Although major syntax changes are unlikely beyond this version, there may still be some minor differences. For best compatibility, it's recommended to use the <code>v0.1.3-pre-beta</code> family.</p>
<p>The first thing we need is a way to measure the <strong>length of a string</strong>.</p>
<p>Most programming languages use a <code>len()</code> function to calculate string length. As mentioned earlier, Wave provides <strong>no built-in functions</strong> other than <code>import()</code>, so we\u2019ll implement our own <code>len()</code> function manually.</p>
<pre><code class="language-plaintext">fun len(s: str) -&gt; i32 {
    var count: i32 = 0;
    while (s[count] != 0) {
        count = count + 1;
    }
    return count;
}
</code></pre>
<p>This function would typically belong in the standard library and is used to measure the length of a null-terminated string.</p>
<hr>
<pre><code class="language-plaintext">fun println_s(s: ptr&lt;i8&gt;) {
    var l: i32 = len(s);
    var ret: ptr&lt;i8&gt;;
    asm {
        &quot;mov rax, 1&quot;
        &quot;syscall&quot;
        in(&quot;rdi&quot;) 1
        in(&quot;rsi&quot;) s
        in(&quot;rdx&quot;) l
        out(&quot;rax&quot;) ret
    }

    var nl: ptr&lt;i8&gt; = &quot;\\n&quot;;
    var one: i32 = 1;
    asm {
        &quot;mov rax, 1&quot;
        &quot;syscall&quot;
        in(&quot;rdi&quot;) 1
        in(&quot;rsi&quot;) nl
        in(&quot;rdx&quot;) one
        out(&quot;rax&quot;) ret
    }
}
</code></pre>
<p>Wave currently includes a temporary testing function called <code>println()</code>, but to avoid confusion, we\u2019ll define our own version called <code>println_s()</code> here.</p>
<hr>
<pre><code class="language-plaintext">import(&quot;println&quot;);

fun main() {
    println_s(&quot;Hello World&quot;);
}
</code></pre>
<p>We use the <code>import()</code> function to load the <code>println.wave</code> file. If your <code>main.wave</code> file already contains the <code>len()</code> and <code>println_s()</code> functions, you won\u2019t need to use <code>import()</code>.</p>
<hr>
<p>Running this will result in:</p>
<p><img alt="hello" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754271453141/155998f3-fa81-4f1d-bdf7-8cccc4d6fbe5.png align=" title="left"></p>
<p>You\u2019ll see the <code>Hello World</code> output printed like this.</p>
<hr>
<p>Wave doesn\u2019t have a complete standard library yet, but the potential is definitely there. By taking full advantage of the compiler\u2019s low-level capabilities, you can already build impressive programs\u2014even today.</p>
<hr>
<p>Site: https://wave-lang.dev/</p>
<p>GitHub: https://github.com/LunaStev/Wave</p>
<p>Discord: https://discord.com/invite/<a href="https://discord.gg/3nev5nHqq9">3nev5nHqq9</a></p>`},{slug:"2025-07-10-wave-language-performance-benchmark-comparison-with-c-and-rust",title:"Wave Language Performance Benchmark: Comparison with C and Rust",date:"2025-07-10T07:23:49",dateDisplay:"2025-07-10",description:'Wave is not aiming to be a "C replacement" like Zig, but it is an independent low-level language distinct from C. It has been under active development for about six months now. Currently in its pre-beta phase, Wave still has several bugs and limitati...',tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754271443053/c5b61455-f485-4500-95ab-902e888f6c5a.webp",contentHtml:`<h1>Wave Language Performance Benchmark: Comparison with C and Rust</h1>
<p>Wave is not aiming to be a "C replacement" like Zig, but it is an independent low-level language distinct from C. It has been under active development for about six months now.</p>
<p>Currently in its pre-beta phase, Wave still has several bugs and limitations\u2014but that also means there's significant room for improvement. The potential is definitely there.</p>
<p>According to the roadmap, the frontend of Wave will be completed during the pre-beta stage. In the next phase, alpha, development will begin on Wave\u2019s custom compiler toolchain called Whale, with the goal of moving away from LLVM. The current plan is for Whale to fully replace LLVM and become a highly optimized and independent compiler toolchain tailored specifically for Wave.</p>
<p>However, Wave also faces some clear challenges:</p>
<ul>
<li>
<p><strong>Lack of ecosystem</strong>: While the concept of Wave has been around for over a year, actual development only began six months ago. As a result, there is no standard library, and there are practically no real-world programs built with it. While algorithmic code is possible, practical application-level development is not. As of version <code>v0.1.2-pre-beta</code>, even basic input functions like <code>input()</code> are not yet implemented.</p>
</li>
<li>
<p><strong>Lack of contributors</strong>: This is a common issue with all new programming languages. In the very early stages, it's normal to have zero contributors. Often, a single developer drives the entire project based on their own philosophy. That\u2019s just how it is. Compared to existing utility tools, new programming languages attract attention much more slowly.</p>
</li>
</ul>
<p>Wave is a compiled, low-level language and shouldn\u2019t be compared to Python or JavaScript. It\u2019s not in the same category, and Wave isn\u2019t trying to compete with them either. If we had to choose competitors, <strong>C and Rust</strong> would be the most appropriate comparisons.</p>
<p>As mentioned earlier, Wave is still in its early stages, so it\u2019s only natural that it\u2019s significantly slower than both C and Rust. However, running benchmarks and comparing results is a meaningful exercise\u2014it provides motivation and insight into potential optimizations.</p>
<hr>
<p><img alt="benchmark" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754271441312/030dd3ae-2e77-4c3d-8659-e87026711759.png align=" title="left"></p>
<p>The graph above shows a performance comparison between Wave, C, and Rust. The benchmark measures how long it takes to run a simple string length function <strong>100 million times</strong>.</p>
<p>All three languages were tested using <strong>AOT (ahead-of-time) compilation</strong>. Note that <strong>Wave does not and will not support JIT</strong>; it will be AOT-only by design.</p>
<p>Here are the source codes used for each language:</p>
<pre><code class="language-plaintext">fun len(s: str) -&gt; i32 {
    var count: i32 = 0;
    while (s[count] != 0) {
        count = count + 1;
    }
    return count;
}

fun main() {
    var message: str = &quot;hello, world!&quot;;
    var result: i32 = 0;
    var i: i32 = 0;
    while (i &lt; 100000000) {
        result = result + len(message);
        i = i + 1;
    }
    println(&quot;Wave Result: {}&quot;, result);
}
</code></pre>
<p>Wave does not yet have a time-related library, so execution time was measured using the Linux <code>time</code> command. Please keep that in mind when interpreting the results.</p>
<hr>
<pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;time.h&gt;

int len(const char* s) {
    int count = 0;
    while (s[count] != 0) {
        count++;
    }
    return count;
}

int main() {
    const char* message = &quot;hello, world!&quot;;
    int result = 0;

    clock_t start = clock();
    for (int i = 0; i &lt; 100000000; ++i) {
        result += len(message);
    }
    clock_t end = clock();

    double elapsed = (double)(end - start) / CLOCKS_PER_SEC;
    printf(&quot;C Result: %d\\n&quot;, result);
    printf(&quot;C Time: %.3f seconds\\n&quot;, elapsed);
    return 0;
}
</code></pre>
<p>C is a time-tested language that has been the foundation of many systems and is deeply optimized. It is, without question, one of the most respected and traditional languages in software development.</p>
<hr>
<pre><code class="language-rust">use std::time::Instant;
use std::hint::black_box;

fn len(s: &amp;str) -&gt; i32 {
    let bytes = s.as_bytes();
    let mut count: i32 = 0;
    while count &lt; bytes.len() as i32 &amp;&amp; bytes[count as usize] != 0 {
        count += 1;
    }
    count
}

fn main() {
    let message = black_box(&quot;hello, world!&quot;);
    let mut result = 0;

    let start = Instant::now();
    for _ in 0..100_000_000 {
        result += len(message);
    }
    let duration = start.elapsed();

    println!(&quot;Rust Result: {}&quot;, result);
    println!(&quot;Rust Time: {:.3?}&quot;, duration);
}
</code></pre>
<p>Rust is the language used to implement Wave itself, so of course it's included in the benchmark. Although Rust has only been around for about a decade, it has grown rapidly and now has a thriving ecosystem. While it hasn\u2019t reached the level of C yet, it is without a doubt one of the most promising modern systems languages.</p>
<hr>
<p>Some might look at this benchmark and say, "Wow, Wave is incredibly slow!"\u2014and yes, it is slow right now. But don\u2019t forget: Wave is only <strong>six months into development</strong>. Rust reached its first stable release <strong>after 10 years</strong> of development.</p>
<p><strong>Wave is about 5\xD7 slower than C, and about 4.2\xD7 slower than Rust.</strong> However, considering that Wave is still a very young AOT-compiled language, this level of performance is already quite impressive. Reaching Rust-level performance won't happen overnight, but the <strong>potential is clearly there</strong>.</p>
<hr>
<p>Site: https://wave-lang.dev/</p>
<p>GitHub: https://github.com/LunaStev/Wave</p>
<p>Discord: https://discord.com/invite/<a href="https://discord.gg/3nev5nHqq9">3nev5nHqq9</a></p>`},{slug:"2025-06-21-introduction-to-wave-v012-pre-beta-assignment-operators-added-remainder-and-generalized-indexing-support",title:"Introduction to Wave v0.1.2-pre-beta: Assignment Operators, Added Remainder and Generalized Indexing Support",date:"2025-06-21T14:55:18",dateDisplay:"2025-06-21",description:"Hello! I'm LunaStev, the developer of Wave. We are pleased to announce Wave v0.1.2-pre-beta \u2014 This update supports indexing, supports the rest of the operators. And I added an assignment operator. And I fixed a number of bugs. \u2705 Added Features \u{1F50D} Ge...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270104684/ddb9ba40-d06b-488b-85b9-1803e65b80bd.webp",contentHtml:`<h1>Introduction to Wave v0.1.2-pre-beta: Assignment Operators, Added Remainder and Generalized Indexing Support</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are pleased to announce Wave <code>v0.1.2-pre-beta</code> \u2014 This update supports indexing, supports the rest of the operators. And I added an assignment operator. And I fixed a number of bugs.</p>
<hr>
<h2>\u2705 Added Features</h2>
<h3>\u{1F50D} Generalized Indexing Support</h3>
<ul>
<li>
<p>Extended <code>arr[index]</code> syntax to support <strong>variable indexing</strong> in any context.</p>
</li>
<li>
<p>Now supports dynamic indexing like <code>arr[i]</code>, <code>ptr[j]</code>, <code>get_array()[k]</code> inside <code>if</code>, <code>while</code>, <code>return</code>, and assignments.</p>
</li>
<li>
<p>Internally handles pointer types (e.g., <code>i8*</code>) using <code>GEP</code> and performs automatic type casting (e.g., <code>i8</code> vs <code>i64</code>) for comparisons and assignments.</p>
</li>
</ul>
<h3>\u2795 Added <code>%</code> (Remainder) Operator Support</h3>
<ul>
<li>
<p>Wave now supports the modulo operator <code>%</code> for integer types.</p>
</li>
<li>
<p>Expressions like <code>a % b</code>, <code>10 % 3</code>, and <code>var x: i32 = a % b</code> are now fully parsed and compiled to LLVM IR using srem (signed remainder).</p>
</li>
<li>
<p>Parser was updated to recognize <code>%</code> as <code>TokenType::Remainder</code>, and IR generation uses <code>build_int_signed_rem</code> for correct runtime behavior.</p>
</li>
<li>
<p><code>%</code> is fully supported inside expressions, assignments, conditionals, and return statements.</p>
</li>
</ul>
<h3>\u2699\uFE0F Assignment Operators (<code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>)</h3>
<ul>
<li>
<p>Supports compound assignment operators for both integers (<code>i32</code>) and floating-point numbers (<code>f32</code>).</p>
</li>
<li>
<p>Operators implemented: <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>.</p>
</li>
<li>
<p>Type-safe operation with proper distinction between integer and float IR instructions:</p>
<ul>
<li>
<p>add, sub, mul, sdiv, srem for integers.</p>
</li>
<li>
<p><code>fadd</code>, <code>fsub</code>, <code>fmul</code>, <code>fdiv</code>, <code>frem</code> (uses <code>fmodf</code>) for floats.</p>
</li>
</ul>
</li>
<li>
<p>Implicit type casting during assignment (e.g., assigning an int to a float variable triggers <code>int</code> \u2192 <code>float</code> conversion).</p>
</li>
<li>
<p>Proper LLVM IR generation for all supported operations, including float remainder via external <code>fmodf</code> call (linked with <code>-lm</code>).</p>
</li>
</ul>
<h2>\u{1F41B} Bug Fixes</h2>
<h3>\u{1F522} Accurate Token Differentiation Between Integers and Floats</h3>
<ul>
<li>
<p>Number parsing logic has been overhauled to properly distinguish between integer literals (e.g., <code>42</code>) and floating-point literals (e.g., <code>3.14</code>, <code>42.0</code>).</p>
</li>
<li>
<p>Previously, all numeric literals were parsed as <code>Float(f64)</code> tokens, even when no decimal point was present. \u2192 Now, tokens like <code>123</code> are correctly parsed as <code>Number(i64)</code>, and <code>123.45</code> as <code>Float(f64)</code>.</p>
</li>
<li>
<p>Introduced internal flag <code>is_float</code> to detect presence of <code>.</code> during scanning. If found, the number is parsed as a float; otherwise, as an integer.</p>
</li>
<li>
<p>Implemented type-safe error handling:</p>
<ul>
<li>Fallbacks to <code>TokenType::Number(0)</code> or <code>TokenType::Float(0.0)</code> on parse failure, ensuring the lexer remains stable on malformed input.</li>
</ul>
</li>
<li>
<p>This fix improves downstream type checking, IR generation, and expression evaluation, especially for typed languages like Wave where <code>i64</code> and <code>f64</code> must be handled distinctly.</p>
</li>
</ul>
<h2>\u2728 Other Changes</h2>
<h3>\u{1F9E0} Library and Binary 2 Coexist</h3>
<ul>
<li>Add lib.rs for easy package manager creation, development, and easy access.</li>
</ul>
<hr>
<h2>Showcase</h2>
<p>The showcase is available at <a href="https://github.com/LunaStev/wave-testing">Wave-Test</a>.</p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<ol>
<li>
<p><strong>Download:</strong></p>
<ul>
<li>
<p>Download to Curl.</p>
<p><code>bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.2-pre-beta</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>PR and Commits</h2>
<ul>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/172">Switch to Github Flow It's still before the 0.1.2-pre-beta release.</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/182">Add simple algorithm examples for bug hunting (issue #178)</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/184">Add simple algorithm examples for bug hunting (issue #178)</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/185">primary expression assignment function fix</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/187">Fix IR generation for if-return and function call assignments</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/194">Fix inline assembly code generation for statement-level asm blocks (issue #173)</a></p>
</li>
<li>
<p><a href="https://github.com/LunaStev/Wave/pull/195">Fix expression parser false positives for statement tokens</a></p>
</li>
</ul>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://discord.com/invite/3nev5nHqq9">Discord</a></p>
<p><a href="https://ko-fi.com/lunasev">Ko-fi</a></p>`},{slug:"2025-05-05-introduction-to-wave-v011-pre-beta-inline-assembly-pointer-chain-and-array-support",title:"Introduction to Wave v0.1.1-pre-beta: Inline Assembly, Pointer Chain, and Array Support",date:"2025-05-05T11:46:33",dateDisplay:"2025-05-05",description:"Hello! I'm LunaStev, the developer of Wave. We are excited to announce Wave v0.1.1-pre-beta \u2014 This update introduces inline assembly (asm {}) support, enabling you to write low-level system code directly in Wave, such as making syscalls with direct r...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270115332/6b7b8340-d3eb-4c3c-a714-e319515eace2.webp",contentHtml:`<h1>Introduction to Wave v0.1.1-pre-beta: Inline Assembly, Pointer Chain, and Array Support</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are excited to announce Wave <code>v0.1.1-pre-beta</code> \u2014 This update introduces inline assembly (<code>asm {}</code>) support, enabling you to write low-level system code directly in Wave, such as making syscalls with direct register manipulation.</p>
<p>Additionally, Wave now fully supports pointer chaining (<code>ptr&lt;ptr&lt;i32&gt;&gt;</code>) and array types (<code>array&lt;T, N&gt;</code>), including index access, address-of operations, and validation of literal lengths \u2014 expanding Wave's capability for systems-level and memory-safe programming.</p>
<p>These improvements bring Wave closer to its vision as a low-level but expressive programming language.</p>
<hr>
<h2>\u2705 Added Features</h2>
<h3>\u2699\uFE0F Inline Assembly (<code>asm { ... }</code>) Support</h3>
<ul>
<li>
<p>Introduced <code>asm { ... }</code> block syntax to embed raw assembly instructions directly within Wave code.</p>
</li>
<li>
<p>Supports instruction strings (e.g., <code>"syscall"</code>) and explicit register constraints via <code>in("reg") var</code> and <code>out("reg") var</code>.</p>
</li>
<li>
<p>Variables used in <code>in(...)</code> are passed into specified registers; variables in <code>out(...)</code> receive output from registers.</p>
</li>
<li>
<p>Supports passing literal constants directly to registers (e.g., <code>in("rax") 60</code>).</p>
</li>
<li>
<p>Pointer values (e.g., <code>ptr&lt;i8&gt;</code>) are correctly passed to registers such as <code>rsi</code>, enabling low-level syscalls like <code>write</code>.</p>
</li>
<li>
<p>Internally leverages LLVM's inline assembly mechanism using Intel syntax.</p>
</li>
<li>
<p>Currently supports single-output only; multiple <code>out(...)</code> constraints will overwrite each other.</p>
</li>
<li>
<p>Does not yet support clobber lists or advanced constraint combinations.</p>
</li>
<li>
<p>Provides essential capability for system-level programming (e.g., making direct syscalls, writing device-level code).</p>
</li>
</ul>
<blockquote>
<p>\u26A0\uFE0F This is not a fully general-purpose inline ASM facility yet, but it enables practical low-level operations within Wave. Full support is planned for later phases.</p>
</blockquote>
<h3>\u2699\uFE0F Make pointer chain explicit</h3>
<ul>
<li>
<p>Nested parsing like <code>ptr&lt;i32&gt;</code>, <code>ptr&lt;ptr&lt;i32&gt;&gt;</code></p>
</li>
<li>
<p>Can create <code>ptr&lt;T&gt;</code> for any type (no restrictions on <code>T</code>)</p>
</li>
<li>
<p>Support for consecutive <code>deref</code> operations (e.g., <code>deref deref deref</code>)</p>
</li>
</ul>
<h3>\u2699\uFE0F Array type complete</h3>
<ul>
<li>
<p>IndexAccess (<code>numbers[0]</code>) handling</p>
</li>
<li>
<p>ArrayLiteral \u2192 Parse into AST and validate length</p>
</li>
<li>
<p>AddressOf \u2192 Support array literals with address-of values (e.g., <code>[&amp;a, &amp;b]</code>)</p>
</li>
<li>
<p>Confirmed that <code>array&lt;T, N&gt;</code> supports any type as T</p>
</li>
</ul>
<h2>\u2728 Other Changes</h2>
<h3>\u{1F9E0} Library and Binary 2 Coexist</h3>
<ul>
<li>Add lib.rs for easy package manager creation, development, and easy access.</li>
</ul>
<hr>
<h2>Showcase</h2>
<p><img alt="Image1description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270106823/d333ea14-16f8-4ffd-aec7-e7179ffc424b.png align=" title="left"></p>
<p><img alt="Image2description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270107747/ff489e36-2f67-4b53-a9e9-4db817140e38.png align=" title="left"></p>
<hr>
<p><img alt="Image3description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270108480/60ae0d18-4054-445e-b021-434f6571b56e.png align=" title="left"></p>
<p><img alt="Image4description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270109260/49c75e00-4bf2-4aa3-a305-6337cf1e4951.png align=" title="left"></p>
<hr>
<p><img alt="Image5description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270110178/7c4d4428-edb4-45fd-84ac-f07d523ca9ff.png align=" title="left"></p>
<p><img alt="Image6description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270111118/e47370b2-c636-4b19-9193-488e69b406a3.png align=" title="left"></p>
<hr>
<p><img alt="Image7description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270111992/2f0a41b0-b47f-447f-8085-53684c5f57ac.png align=" title="left"></p>
<p><img alt="Image8description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270112958/b09a702a-90aa-40f9-89a3-b4bb1e2a7e53.png align=" title="left"></p>
<hr>
<p><img alt="Image9description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270113726/f10143b2-a9a7-40ae-a16e-d27457bd94dc.png align=" title="left"></p>
<p><img alt="Image10description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270114590/dc6bd0b4-32a9-4630-a767-a5b97a56d9ea.png align=" title="left"></p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<h3>For Linux:</h3>
<ol>
<li>
<p><strong>Download and Extract:</strong></p>
<ul>
<li>
<p>Download the <code>wave-v0.1.1-pre-beta-x86_64-linux-gnu.tar.gz</code> file from the official source.</p>
</li>
<li>
<p>Use the wget command:</p>
<p><code>bash
wget https://github.com/LunaStev/Wave/releases/download/v0.1.1-pre-beta/wave-v0.1.1-pre-beta-x86_64-linux-gnu.tar.gz</code></p>
</li>
<li>
<p>Extract the archive:</p>
<p><code>bash
sudo tar -xvzf wave-v0.1.1-pre-beta-x86_64-linux-gnu.tar.gz -C /usr/local/bin</code></p>
</li>
</ul>
</li>
<li>
<p>Setting up LLVMs</p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://discord.com/invite/3nev5nHqq9">Discord</a></p>
<p><a href="https://ko-fi.com/lunasev">Ko-fi</a></p>`},{slug:"2025-05-02-introduction-to-wave-v010-pre-beta-add-import-and-utf-8-support",title:"Introduction to Wave v0.1.0-pre-beta: Add Import and UTF-8 Support",date:"2025-05-02T08:58:02",dateDisplay:"2025-05-02",description:"Hello! I'm LunaStev, the developer of Wave. We are very pleased to introduce Wave 'v0.1.0-pre-beta' \u2014 This update supports the import function and UTF-8, allowing you to output other characters, unlike previous versions that only supported ASCII. \u2705 ...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270362649/042f67e0-22ba-4e52-809d-23b9260acdd3.webp",contentHtml:`<h1>Introduction to Wave v0.1.0-pre-beta: Add Import and UTF-8 Support</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are very pleased to introduce Wave 'v0.1.0-pre-beta' \u2014 This update supports the import function and UTF-8, allowing you to output other characters, unlike previous versions that only supported ASCII.</p>
<hr>
<h2>\u2705 Added Features</h2>
<h3>\u{1F4E6} Local File Import Support</h3>
<ul>
<li>
<p>Introduced <code>import("...");</code> statement in Wave syntax.</p>
</li>
<li>
<p>Supports importing <code>.wave</code> source files relative to the current file's directory.</p>
</li>
<li>
<p>Prevents duplicate imports automatically using an internal <code>HashSet</code>.</p>
</li>
<li>
<p>Imported files are parsed, converted to AST, and merged into the main program at compile time.</p>
</li>
<li>
<p>Enables modular project structure by allowing multi-file composition.</p>
</li>
</ul>
<h2>\u{1F527} Bug Fixes</h2>
<h3>\u{1F41E} UTF-8 Handling in Lexer</h3>
<ul>
<li>
<p>Fixed tokenizer crash on non-ASCII characters.</p>
</li>
<li>
<p>Lexer now correctly processes UTF-8 multi-byte characters, enabling support for Korean and other languages in source code.</p>
</li>
</ul>
<h3>\u{1F41E} Underscore (<code>_</code>) Support in Identifiers</h3>
<ul>
<li>
<p>Variable and function names can now contain underscores.</p>
</li>
<li>
<p>Lexer now treats identifiers like <code>my_var</code> or <code>some_function</code> as valid.</p>
</li>
</ul>
<hr>
<h2>Showcase</h2>
<p><img alt="Image1description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270358343/f88308b1-c4ec-4a1b-8de1-cff4eb6f3893.png align=" title="left"></p>
<p><img alt="Image2description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270359325/8a0d91cf-6d81-4295-be91-387179da5ebb.png align=" title="left"></p>
<p><img alt="Image3description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270360299/f81102b1-fbb4-46e5-9c11-a8e3e36bf45c.png align=" title="left"></p>
<hr>
<p><img alt="Image4description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270361200/6dc81239-086b-45b3-b172-5fc6966f263a.png align=" title="left"></p>
<p><img alt="Image5description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270361905/f06da6b6-7de0-4345-b43f-c2bdefb02ea9.png align=" title="left"></p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<h3>For Linux:</h3>
<ol>
<li>
<p><strong>Download and Extract:</strong></p>
<ul>
<li>
<p>Download the <code>wave-v0.1.0-pre-beta-x86_64-linux-gnu.tar.gz</code> file from the official source.</p>
</li>
<li>
<p>Use the wget command:</p>
<p><code>bash
wget https://github.com/LunaStev/Wave/releases/download/v0.1.0-pre-beta/wave-v0.1.0-pre-beta-x86_64-linux-gnu.tar.gz</code></p>
</li>
<li>
<p>Extract the archive:</p>
<p><code>bash
sudo tar -xvzf wave-v0.1.0-pre-beta-x86_64-linux-gnu.tar.gz -C /usr/local/bin</code></p>
</li>
</ul>
</li>
<li>
<p>Setting up LLVMs</p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://ko-fi.com/lunasev">Ko-fi</a></p>`},{slug:"2025-04-25-introduction-to-wave-v009-pre-beta-explicit-mutability-smarter-functions-and-safer-pointers",title:"Introduction to Wave v0.0.9-pre-beta: Explicit Mutability, Smarter Functions, and Safer Pointers",date:"2025-04-25T15:26:07",dateDisplay:"2025-04-25",description:"Hello! I'm Lunastev, the developer of Wave. We are very excited to introduce Wave 'v0.0.9-Free Beta' \u2014 A version that offers Explicit Mutability, Smarter Functions, and Safer Pointers. Wave is designed with low-level features in mind, and in this ver...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270368495/7403b4d4-fbd4-40f9-a850-994adac0383d.webp",contentHtml:`<h1>Introduction to Wave v0.0.9-pre-beta: Explicit Mutability, Smarter Functions, and Safer Pointers</h1>
<p>Hello! I'm Lunastev, the developer of Wave.</p>
<p>We are very excited to introduce Wave 'v0.0.9-Free Beta' \u2014 A version that offers Explicit Mutability, Smarter Functions, and Safer Pointers.</p>
<p>Wave is designed with low-level features in mind, and in this version, We are making a big leap in that direction.</p>
<hr>
<h2>\u{1F4D0} Language Specification Updates</h2>
<h3>\u{1F9E0} Introduction of <code>let</code>, <code>let mut</code>, and var for Explicit Mutability</h3>
<ul>
<li>
<p>Wave now supports three types of variable declarations to express mutability explicitly:</p>
<ul>
<li>
<p><code>var</code>: fully mutable, intended for general-purpose variables</p>
</li>
<li>
<p><code>let</code>: immutable, reassignment is forbidden</p>
</li>
<li>
<p><code>let mut</code>: mutable under immutable declaration context (safe controlled mutability)</p>
</li>
</ul>
</li>
<li>
<p>This design introduces clearer ownership intent and improves safety in low-level and system-oriented programming.</p>
</li>
</ul>
<h3>\u{1F9E0} Default Parameter Values in Function Declarations</h3>
<ul>
<li>
<p>Wave functions can now define parameters with default values:</p>
<p><code>plaintext
fun main(name: str = "World") {
    println("Hello {}", name);
}</code></p>
</li>
<li>
<p>If an argument is not provided at runtime, the default value will be inserted automatically by the compiler.</p>
</li>
<li>
<p>This enables more expressive and flexible function declarations.</p>
</li>
</ul>
<h2>\u2705 Added Features</h2>
<h3>\u{1F9E0} Parser and IR support for explicit mutability</h3>
<ul>
<li>
<p>Introduced internal Mutability enum: <code>Var</code>, <code>Let</code>, <code>LetMut</code></p>
</li>
<li>
<p>Implemented <code>parse_let()</code> with optional mut keyword for parsing</p>
</li>
<li>
<p>Wave's IR generation now restricts <code>let</code> variables from being reassigned</p>
</li>
</ul>
<h3>\u{1F9E0} IR handling of function parameter defaults</h3>
<ul>
<li>
<p>When default values are present in function parameters, they are now correctly recognized and handled during LLVM IR generation</p>
</li>
<li>
<p>If an argument is not passed at runtime, the default value is inserted directly into the stack-allocated variable</p>
</li>
</ul>
<h2>\u{1F527} Bug Fixes</h2>
<h3>\u{1F41B} Incorrect string output in <code>println()</code> format</h3>
<ul>
<li>
<p>Fixed an issue where <code>str</code> values (<code>i8*</code>) were printed as raw addresses</p>
</li>
<li>
<p>The format translation now maps <code>i8*</code> to <code>%s</code> correctly</p>
</li>
<li>
<p>Values are passed directly to <code>printf</code> as string pointers, avoiding <code>ptr_to_int</code> conversion</p>
</li>
</ul>
<h3>\u{1F41B} Incorrect handling of <code>deref</code> assignment</h3>
<ul>
<li>
<p>Fixed an issue where dereferencing a pointer and assigning its value caused type mismatches in the generated IR.</p>
</li>
<li>
<p>The IR now properly handles dereferencing a pointer (<code>deref p1 = deref p2;</code>) and assigning the values correctly without causing <code>i32**</code> mismatches.</p>
</li>
</ul>
<h2>\u2728 Other Changes</h2>
<h3>\u{1F9E0} IR-level enforcement of immutability</h3>
<ul>
<li>
<p>Reassignment attempts to <code>let</code> variables now cause a compile-time panic</p>
</li>
<li>
<p>All memory operations (store/load) respect mutability constraints</p>
</li>
</ul>
<h3>\u{1F9E0} IR-level enforcement of pointer dereferencing</h3>
<ul>
<li>
<p>Introduced a fix to ensure that pointer dereferencing (<code>deref p1 = deref p2;</code>) is handled correctly in the IR.</p>
</li>
<li>
<p>Adjusted the <code>generate_address_ir()</code> function to properly dereference pointers and load/store values without causing pointer type mismatches.</p>
</li>
</ul>
<hr>
<h2>Showcase</h2>
<p><img alt="Image1description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270365525/ec473068-392d-4bc1-a6f1-3f1cf05231e8.png align=" title="left"></p>
<p><img alt="Image3description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270366298/20648347-0dd6-4820-9522-8d2108dfd417.png align=" title="left"></p>
<hr>
<p><img alt="Image2description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270367126/74f553fd-89ea-4159-9f7b-1fa5427abddf.png align=" title="left"></p>
<p><img alt="Image4description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270367816/68c70de2-96fe-4830-94b2-c0b821adf543.png align=" title="left"></p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<h3>For Linux:</h3>
<ol>
<li>
<p><strong>Download and Extract:</strong></p>
<ul>
<li>
<p>Download the <code>wave-v0.0.9-pre-beta-x86_64-linux-gnu.tar.gz</code> file from the official source.</p>
</li>
<li>
<p>Use the wget command:</p>
<p><code>bash
wget https://github.com/LunaStev/Wave/releases/download/v0.0.9-pre-beta/wave-v0.0.9-pre-beta-x86_64-linux-gnu.tar.gz</code></p>
</li>
<li>
<p>Extract the archive:</p>
<p><code>bash
sudo tar -xvzf wave-v0.0.9-pre-beta-x86_64-linux-gnu.tar.gz -C /usr/local/bin</code></p>
</li>
</ul>
</li>
<li>
<p>Setting up LLVMs</p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://ko-fi.com/lunasev">Ko-fi</a></p>`},{slug:"2025-04-20-introduction-to-wave-v008-pre-beta-pointer-support-arrives",title:"Introduction to Wave v0.0.8-pre-beta: Pointer Support Arrives",date:"2025-04-20T05:10:42",dateDisplay:"2025-04-20",description:"Hello! I'm LunaStev, the developer of Wave. We are very happy to introduce Wave v0.0.8-pre-beta \u2014 a version that officially brings first-class pointer support to the language. Wave was designed with low-level capabilities in mind, and in this version...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270367874/ee3376fd-ec48-4fae-afab-7160c74e27ea.webp",contentHtml:`<h1>Introduction to Wave v0.0.8-pre-beta: Pointer Support Arrives</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are very happy to introduce Wave <code>v0.0.8-pre-beta</code> \u2014 a version that officially brings first-class pointer support to the language.</p>
<p>Wave was designed with low-level capabilities in mind, and in this version, we\u2019re making a major leap in that direction.</p>
<hr>
<h2>\u2705 Added Features</h2>
<h3>\u{1F9E0} Pointer System: First-Class Pointer Support in Wave</h3>
<ul>
<li>
<p>Introduced <code>ptr&lt;T&gt;</code> type syntax for defining typed pointers<br>
    \u2192 Example: <code>var p: ptr&lt;i32&gt;;</code></p>
</li>
<li>
<p>Implemented <code>&amp;x</code> address-of operator<br>
    \u2192 Compiles to LLVM IR as <code>store i32* %x</code></p>
</li>
<li>
<p>Implemented <code>deref p</code> dereference operator<br>
    \u2192 Generates IR as <code>load i32, i32* %p</code></p>
</li>
<li>
<p>Supported pointer-based initialization<br>
    \u2192 <code>var p: ptr&lt;i32&gt; = &amp;x;</code> is now fully parsed and compiled</p>
</li>
<li>
<p>Enabled dereferencing for both expression and assignment<br>
    \u2192 Example: <code>deref p = 42;</code> is valid and stored directly via IR</p>
</li>
<li>
<p>Address values can be printed as integers<br>
    \u2192 <code>%ld</code> used for pointer-to-int cast in formatted output<br>
    \u2192 <code>println("address = {}", p);</code> prints memory address</p>
</li>
</ul>
<h2>\u{1F527} Bug Fixes</h2>
<h3>\u{1F41B} Fixed Pointer Initialization Parsing Issue</h3>
<ul>
<li>
<p>Changed <code>VariableNode.initial_value</code> from <code>Option&lt;Literal&gt;</code> to <code>Option&lt;Expression&gt;</code></p>
</li>
<li>
<p>Allowed <code>&amp;x</code> to be accepted as a valid initializer expression</p>
</li>
</ul>
<h3>\u{1F41B} Fixed LLVM IR Crash on AddressOf Expression</h3>
<ul>
<li>
<p>Added support for <code>Expression::AddressOf</code> in IR generation</p>
</li>
<li>
<p>Prevented crash by checking for variable reference inside address-of</p>
</li>
</ul>
<h3>\u{1F41B} Fixed printf format mismatch for pointers</h3>
<ul>
<li>
<p><code>%s</code> \u2192 <code>%ld</code> for pointer values</p>
</li>
<li>
<p>Ensured correct casting of <code>i32*</code> to <code>i64</code> before printing</p>
</li>
</ul>
<h2>\u2728 Other Changes</h2>
<h3>\u{1F9E0} Improved Format String Handling in IR</h3>
<ul>
<li>
<p>Added dynamic format string generation based on argument types</p>
</li>
<li>
<p>Format strings now automatically adapt for int, float, and pointer types</p>
</li>
</ul>
<hr>
<h2>Showcase</h2>
<p><img alt="Imag3e description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270366188/032659ca-dbc7-40dc-9d0c-2403ad2b6cd0.png align=" title="left"></p>
<p><img alt="Ima3ge description" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270367057/0735b5ae-2de5-48fd-be40-46923c3c8c85.png align=" title="left"></p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<h3>For Linux:</h3>
<ol>
<li>
<p><strong>Download and Extract:</strong></p>
<ul>
<li>
<p>Download the <code>wave-v0.0.8-pre-beta-x86_64-linux-gnu.tar.gz</code> file from the official source.</p>
</li>
<li>
<p>Use the wget command:</p>
<p><code>bash
wget https://github.com/LunaStev/Wave/releases/download/v0.0.8-pre-beta/wave-v0.0.8-pre-beta-x86_64-linux-gnu.tar.gz</code></p>
</li>
<li>
<p>Extract the archive:</p>
<p><code>bash
sudo tar -xvzf wave-v0.0.8-pre-beta-x86_64-linux-gnu.tar.gz -C /usr/local/bin</code></p>
</li>
</ul>
</li>
<li>
<p>Setting up LLVMs</p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>
<p><a href="https://ko-fi.com/lunasev">Ko-fi</a></p>`},{slug:"2025-04-14-introduction-to-wave-v007-pre-beta-fixed-infinite-recursive-and-stack-overflow-bugs-due-to-previously-incorrect-astnode-reuse",title:"Introduction to Wave v0.0.7-pre-beta: Fixed infinite recursive and stack overflow bugs due to previously incorrect ASTNode reuse",date:"2025-04-14T15:01:22",dateDisplay:"2025-04-14",description:"Hello! I'm LunaStev, the developer of Wave. We are very happy to introduce Wave v0.0.7-pre-beta. This release has previously addressed the issue of infinite recursive and stack overflow due to incorrect ASTNode reuse. We also changed the name of the ...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270120138/4b00b4af-ba59-4ba2-a0d4-e74585b481a3.webp",contentHtml:`<h1>Introduction to Wave v0.0.7-pre-beta: Fixed infinite recursive and stack overflow bugs due to previously incorrect ASTNode reuse</h1>
<p>Hello! I'm LunaStev, the developer of Wave.</p>
<p>We are very happy to introduce Wave <code>v0.0.7-pre-beta</code>.</p>
<p>This release has previously addressed the issue of infinite recursive and stack overflow due to incorrect ASTNode reuse.</p>
<p>We also changed the name of the Wave compiler binary from <code>wave</code> to <code>wavec</code>.</p>
<p>Wave is growing fast, and we are very excited to share our future plans.</p>
<hr>
<h2>\u{1F527} Bug Fixes</h2>
<h3>\u{1F41B} Fixed else if IR Infinite Loop Bug</h3>
<ul>
<li>
<p>Resolved a critical bug where <code>stmt</code> was reused inside the <code>else if</code> block IR generation loop</p>
</li>
<li>
<p>Previously caused infinite recursion and stack overflow due to incorrect ASTNode reuse</p>
</li>
<li>
<p>Fixed by replacing <code>stmt</code> with <code>else_if</code> when iterating over <code>else_if_blocks</code></p>
</li>
</ul>
<h2>\u2728 Other Changes</h2>
<h3>\u{1F6E0} Renamed <code>wave</code> to <code>wavec</code></h3>
<ul>
<li>
<p>Renamed the Wave compiler binary from <code>wave</code> to <code>wavec</code></p>
</li>
<li>
<p>This change was made to prepare for the integration of Vex, the official package manager for Wave</p>
</li>
<li>
<p>Separating the compiler tool (<code>wavec</code>) from the language name (<code>Wave</code>) aligns with future plans for Vex integration</p>
</li>
</ul>
<hr>
<h2>Showcase</h2>
<p><img alt="12" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270118332/3b6bf633-82c3-44ff-9e06-71798c2b104e.png align=" title="left"></p>
<p><img alt="34" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270119275/1b27235d-bcb8-442e-ae65-cda61989e8b0.png align=" title="left"></p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<h3>For Linux:</h3>
<ol>
<li>
<p><strong>Download and Extract:</strong></p>
<ul>
<li>
<p>Download the <code>wave-v0.0.7-pre-beta-linux.tar.gz</code> file from the official source.</p>
</li>
<li>
<p>Use the wget command:</p>
<p><code>bash
wget https://github.com/LunaStev/Wave/releases/download/v0.0.7-pre-beta/wave-v0.0.7-pre-beta-linux.tar.gz</code></p>
</li>
<li>
<p>Extract the archive:</p>
<p><code>bash
sudo tar -xvzf wave-v0.0.7-pre-beta-linux.tar.gz -C /usr/local/bin</code></p>
</li>
</ul>
</li>
<li>
<p>Setting up LLVMs</p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc</code></p>
</li>
</ul>
</li>
<li>
<p><strong>Verify Installation:</strong></p>
<ul>
<li>
<p>Open a terminal and type:</p>
<p><code>bash
wavec --version</code></p>
</li>
<li>
<p>If the version number displays, the installation was successful.</p>
</li>
</ul>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a></p>
<p><a href="https://github.com/LunaStev/Wave">GitHub</a></p>`},{slug:"2025-04-06-introduction-to-wave-v006-pre-beta-strong-typing-function-returns-and-continue-support",title:"Introduction to Wave v0.0.6-pre-beta: Strong Typing, Function Returns, and continue Support",date:"2025-04-06T13:47:21",dateDisplay:"2025-04-06",description:"Hello! I'm Lunastev, the developer of Wave. I'm very happy to introduce Wave v0.0.6-pre-beta, which is an important step forward in the evolution of language. The release focuses on expanding the type system, enhancing feature support, and introducin...",tags:[],pinned:!1,cover:"https://cdn.hashnode.com/res/hashnode/image/upload/v1754270125855/a1a07851-a9d3-4bd5-b1b5-167630c535b9.webp",contentHtml:`<h1>Introduction to Wave v0.0.6-pre-beta: Strong Typing, Function Returns, and continue Support</h1>
<p>Hello! I'm Lunastev, the developer of Wave.</p>
<p>I'm very happy to introduce Wave <code>v0.0.6-pre-beta</code>, which is an important step forward in the evolution of language.</p>
<p>The release focuses on expanding the type system, enhancing feature support, and introducing powerful new features such as 'continue' doors and floating arithmetic. With the structured 'WaveType' Enum now replacing all string-based types, Wave has taken a strong step towards becoming a statically typed system language.</p>
<p>The function return type is now fully supported, enabling expressive and reusable logic. You can define the function as <code>-&gt; i32</code> and return the value using the <code>return</code> keyword. LLVM IR generation logic has also been upgraded to be fully type-aware, ensuring safer and more accurate lower-level output.</p>
<p>The waves are growing fast, and we are very excited to share our future plans.
Thank you for supporting me on this journey \u{1F499}</p>
<hr>
<h2>\u2705 Added Features</h2>
<h3>\u{1F4AC} Comment Support</h3>
<ul>
<li>Supports single-line comments using <code>//</code></li>
<li>Supports multi-line comment blocks using <code>/* */</code></li>
</ul>
<h3>\u2705 continue statement Support</h3>
<ul>
<li>Possible to skip to the next iteration depending on the condition within the 'while' loop</li>
<li>Syntax supported for 'if (condition) {continue; }'</li>
<li>In LLVM IR, 'continue' is treated as a condition check block for the corresponding loop</li>
</ul>
<h3>\u{1F9E0} Strong Typing for Variables and Parameters</h3>
<ul>
<li>Replaced string-based types with structured <code>WaveType</code> enums in the AST</li>
<li>Fully supports types like <code>i32</code>, <code>u64</code>, <code>f32</code> for both variables and parameters</li>
<li>Enables static type checking and safer LLVM IR generation</li>
</ul>
<h3>\u{1F522} Float Type Support (<code>f32</code>)</h3>
<ul>
<li>Supports <code>f32</code> literals (e.g., <code>12.34</code>)</li>
<li>Allows declaration, initialization, and reassignment of <code>f32</code> variables</li>
<li>Enables use of <code>f32</code> values in arithmetic and comparison operations (e.g., <code>if</code>, <code>while</code>)</li>
<li>Promotes <code>float</code> to <code>double</code> using <code>fpext</code> when passing to <code>printf</code> to conform to the C ABI</li>
</ul>
<h3>\u{1F5A8}\uFE0F Formatted Print (<code>println("...", value)</code>)</h3>
<ul>
<li>Automatically maps Wave types to proper C format specifiers (<code>%d</code>, <code>%f</code>, <code>%s</code>)</li>
<li>Correctly handles printing of <code>f32</code>, <code>i32</code>, and string types with type inference</li>
</ul>
<h3>\u{1F300} Type-Aware LLVM IR Generation</h3>
<ul>
<li>LLVM <code>alloca</code>, <code>store</code>, and <code>load</code> instructions are generated based on <code>WaveType</code></li>
<li>Supports both integer and float value initialization</li>
<li>Uses <code>BasicTypeEnum</code> and <code>BasicValueEnum</code> to unify value handling</li>
<li>Ensures correctness in mixed-type binary expressions and conditionals</li>
</ul>
<h3>\u{1F9E9} Function Definition and Calls</h3>
<ul>
<li>Supports user-defined functions with multiple parameters</li>
<li>Parameters support explicit typing (e.g., <code>i32</code>, <code>str</code>)</li>
<li>Functions can be called with literals or variables as arguments</li>
<li>LLVM IR correctly handles parameter passing using <code>%0</code>, <code>%1</code>, ... style</li>
<li>Parameter values are properly <code>store</code>d and <code>load</code>ed from the stack</li>
<li>Enables composable and reusable logic with full IR-level integration</li>
</ul>
<h3>\u{1F9E0} Function Return Type Support</h3>
<ul>
<li>Functions can now specify return types using <code>-&gt;</code> syntax (e.g., <code>-&gt; i32</code>)</li>
<li>Supported return types: <code>i32</code>, <code>f32</code>, <code>str</code> (more planned)</li>
<li>Return statements (<code>return expr;</code>) emit the appropriate LLVM <code>ret</code> instruction</li>
<li>If no return is specified in a void function, <code>ret void</code> is automatically inserted</li>
<li>Ensures matching return types between Wave AST and LLVM IR generation</li>
</ul>
<hr>
<h2>Showcase</h2>
<p><img alt="Image des2cription" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270122795/d94ab670-6e73-42e4-8452-9a37370a1fb5.png"></p>
<p><img alt="Image descri3ption" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270123598/3c9e4856-0808-46c1-98b1-bd8a1a608556.png"></p>
<hr>
<p><img alt="Image descr2iption" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270124368/be0640ca-aea8-46fb-92a2-f648f261b898.png"></p>
<p><img alt="Image descr3iption" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1754270125208/fa32e70b-aa32-4901-9630-9be5e82a260d.png"></p>
<hr>
<p>Thank you for using Wave! Stay tuned for future updates and enhancements.</p>
<hr>
<h2>Installation Guide</h2>
<h3>For Linux:</h3>
<ol>
<li>
<p><strong>Download and Extract:</strong>
   - Download the <code>wave-v0.0.6-pre-beta-linux.tar.gz</code> file from the official source.
   - Use the wget command:
     <code>bash
     wget https://github.com/LunaStev/Wave/releases/download/v0.0.6-pre-beta/wave-v0.0.6-pre-beta-linux.tar.gz</code>
   - Extract the archive:
     <code>bash
     sudo tar -xvzf wave-v0.0.6-pre-beta-linux.tar.gz -C /usr/local/bin</code></p>
</li>
<li>
<p>Setting up LLVMs
   - Open a terminal and type:
     <code>bash
     sudo apt-get update
     sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
     sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
     export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
     source ~/.bashrc</code></p>
</li>
<li>
<p><strong>Verify Installation:</strong>
   - Open a terminal and type:
     <code>bash
     wave --version</code>
   - If the version number displays, the installation was successful.</p>
</li>
</ol>
<hr>
<h2>Contributor</h2>
<p>@LunaStev | \u{1F1F0}\u{1F1F7}</p>
<hr>
<h2>Website</h2>
<p><a href="https://wave-lang.dev">Website</a>
<a href="https://github.com/LunaStev/Wave">GitHub</a></p>`}],rv=new Map(Ed.map(e=>[e.slug,e]));var Ur=class e{title=h(na);meta=h(qg);document=h(z);siteName="Wave Programming Language Blog";baseDescription="Official Wave programming language blog: release notes, compiler updates, and low-level engineering posts.";setHome(t,n){let r=this.siteName,o=`${this.baseDescription} ${t} posts published. Latest: ${n}.`,i=this.currentUrl();this.title.setTitle(r),this.setCanonical(i),this.applyCommonMeta({title:r,description:o,canonical:i,type:"website",keywords:["wave language","programming language","compiler","systems programming","wave blog"]}),this.setJsonLd({"@context":"https://schema.org","@type":"Blog",name:this.siteName,description:o,url:i,inLanguage:"en"})}setPost(t){let n=`${t.title} | ${this.siteName}`,r=this.absoluteUrlForPath(`post/${t.slug}`),o=["wave language","programming language","compiler",...t.tags];this.title.setTitle(n),this.setCanonical(r),this.applyCommonMeta({title:n,description:t.description,canonical:r,type:"article",image:t.cover||void 0,keywords:o}),this.meta.updateTag({property:"article:published_time",content:this.toIso(t.date)}),this.setJsonLd({"@context":"https://schema.org","@type":"BlogPosting",headline:t.title,description:t.description,datePublished:this.toIso(t.date),dateModified:this.toIso(t.date),mainEntityOfPage:r,url:r,image:t.cover||void 0,keywords:t.tags,author:{"@type":"Organization",name:"Wave Foundation"},publisher:{"@type":"Organization",name:"Wave Foundation"},inLanguage:"en"})}setNotFound(){let t=`Not Found | ${this.siteName}`,n="The requested page could not be found.",r=this.currentUrl();this.title.setTitle(t),this.setCanonical(r),this.applyCommonMeta({title:t,description:n,canonical:r,type:"website",robots:"noindex, nofollow",keywords:[]}),this.clearJsonLd()}applyCommonMeta(t){let n=t.robots??"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";this.meta.updateTag({name:"description",content:t.description}),this.meta.updateTag({name:"robots",content:n}),this.meta.updateTag({name:"keywords",content:Array.from(new Set(t.keywords)).join(", ")}),this.meta.updateTag({property:"og:site_name",content:this.siteName}),this.meta.updateTag({property:"og:title",content:t.title}),this.meta.updateTag({property:"og:description",content:t.description}),this.meta.updateTag({property:"og:type",content:t.type}),this.meta.updateTag({property:"og:url",content:t.canonical}),t.image?(this.meta.updateTag({property:"og:image",content:t.image}),this.meta.updateTag({name:"twitter:image",content:t.image})):(this.meta.removeTag("property='og:image'"),this.meta.removeTag("name='twitter:image'")),this.meta.updateTag({name:"twitter:card",content:t.image?"summary_large_image":"summary"}),this.meta.updateTag({name:"twitter:title",content:t.title}),this.meta.updateTag({name:"twitter:description",content:t.description})}setCanonical(t){let n=this.document.querySelector("link[rel='canonical']");n||(n=this.document.createElement("link"),n.setAttribute("rel","canonical"),this.document.head.appendChild(n)),n.setAttribute("href",t)}setJsonLd(t){let n=this.document.getElementById("seo-json-ld");n||(n=this.document.createElement("script"),n.id="seo-json-ld",n.type="application/ld+json",this.document.head.appendChild(n)),n.textContent=JSON.stringify(t)}clearJsonLd(){let t=this.document.getElementById("seo-json-ld");t&&t.remove()}currentUrl(){let t=this.document.location;return t?`${t.origin}${t.pathname}`:this.absoluteUrlForPath("")}absoluteUrlForPath(t){let n=t.replace(/^\/+/,"");return new URL(n||"./",this.document.baseURI).toString()}toIso(t){let n=new Date(t);return Number.isNaN(n.getTime())?t:n.toISOString()}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};var O0=e=>["/post",e],L0=(e,t)=>t.slug;function P0(e,t){e&1&&(F(0,"span",17),U(1,"PINNED"),k())}function F0(e,t){if(e&1&&(F(0,"li"),U(1),k()),e&2){let n=t.$implicit;H(),Be(n)}}function V0(e,t){if(e&1&&(F(0,"article",11)(1,"a",12),Me(2,"div",13),F(3,"div",14)(4,"div",15)(5,"p",16),U(6),k(),$t(7,P0,2,0,"span",17),k(),F(8,"h2"),U(9),k(),F(10,"p"),U(11),k(),F(12,"ul",18),br(13,F0,2,1,"li",null,xo),k()()()()),e&2){let n=t.$implicit,r=t.$index,o=Dr();No("--delay",r*.04+"s"),Nn("pinned",n.pinned),H(),zt("routerLink",_u(13,O0,n.slug)),H(),No("background-image",o.cardCoverStyle(n)),Nn("no-cover",!n.cover),H(4),Be(n.dateDisplay),H(),qt(n.pinned?7:-1),H(2),Be(n.title),H(2),Be(n.description),H(2),wr(n.tags.slice(0,4))}}function j0(e,t){e&1&&(F(0,"p",10),U(1,"No posts matched your search."),k())}var La=class e{seo=h(Ur);posts=Ed;query=de("");latestDate=this.posts[0]?.dateDisplay??"-";constructor(){Ir(()=>{this.seo.setHome(this.posts.length,this.latestDate)})}filteredPosts=xe(()=>{let t=this.query().trim().toLowerCase();return t?this.posts.filter(n=>`${n.title} ${n.description} ${n.tags.join(" ")}`.toLowerCase().includes(t)):this.posts});orderedFilteredPosts=xe(()=>[...this.filteredPosts()].sort((t,n)=>t.pinned!==n.pinned?t.pinned?-1:1:n.date.localeCompare(t.date)));cardCoverStyle(t){return t.cover?`url('${t.cover}')`:null}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=It({type:e,selectors:[["app-blog-list-page"]],decls:21,vars:4,consts:[["aria-hidden","true",1,"grain"],[1,"site-hero"],[1,"mono","badge"],[1,"lead"],[1,"hero-meta","mono"],[1,"search-wrap"],[1,"mono"],["type","search","placeholder","Find by title, tag, or description","aria-label","Search posts",3,"ngModelChange","ngModel"],[1,"feed-grid"],[1,"post-card",3,"--delay","pinned"],[1,"empty-state"],[1,"post-card"],[3,"routerLink"],[1,"card-cover"],[1,"card-body"],[1,"card-head"],[1,"mono","card-date"],[1,"pin-chip","mono"],[1,"tag-row"]],template:function(n,r){n&1&&(Me(0,"div",0),F(1,"header",1)(2,"p",2),U(3,"Official"),k(),F(4,"h1"),U(5,"Wave Programming Language Blog"),k(),F(6,"p",3),U(7,"Compiler progress, low-level experiments, and release notes from the Wave language journey."),k(),F(8,"div",4)(9,"span"),U(10),k(),F(11,"span"),U(12),k()(),F(13,"label",5)(14,"span",6),U(15,"Search"),k(),F(16,"input",7),Gt("ngModelChange",function(i){return r.query.set(i)}),k()()(),F(17,"main",8),br(18,V0,15,15,"article",9,L0),$t(20,j0,2,0,"p",10),k()),n&2&&(H(10),Cr("",r.posts.length," posts"),H(2),Cr("Latest update: ",r.latestDate),H(4),zt("ngModel",r.query()),H(2),wr(r.orderedFilteredPosts()),H(2),qt(r.orderedFilteredPosts().length?-1:20))},dependencies:[Qs,nv,ka,Xm,Id,Br],encapsulation:2})};function ov(e,t){let r=!t?.manualCleanup?t?.injector?.get(Se)??h(Se):null,o=B0(t?.equal),i;t?.requireSync?i=de({kind:0},{equal:o}):i=de({kind:1,value:t?.initialValue},{equal:o});let s,a=e.subscribe({next:l=>i.set({kind:1,value:l}),error:l=>{i.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(t?.requireSync&&i().kind===0)throw new v(601,!1);return s=r?.onDestroy(a.unsubscribe.bind(a)),xe(()=>{let l=i();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new v(601,!1)}},{equal:t?.equal})}function B0(e=Object.is){return(t,n)=>t.kind===1&&n.kind===1&&e(t.value,n.value)}function W0(e,t){e&1&&(F(0,"span",8),U(1,"PINNED"),k())}function H0(e,t){if(e&1&&(F(0,"figure",10),Me(1,"img",13),k()),e&2){let n=Dr();H(),zt("src",n.cover,js)("alt",n.title)}}function U0(e,t){if(e&1&&(F(0,"li"),U(1),k()),e&2){let n=t.$implicit;H(),Be(n)}}function $0(e,t){if(e&1&&(F(0,"article",5)(1,"div",6)(2,"p",7),U(3),k(),$t(4,W0,2,0,"span",8),k(),F(5,"h1"),U(6),k(),F(7,"p",9),U(8),k(),$t(9,H0,2,2,"figure",10),F(10,"ul",11),br(11,U0,2,1,"li",null,xo),k(),Me(13,"section",12),k()),e&2){let n=t,r=Dr();H(3),Be(n.dateDisplay),H(),qt(n.pinned?4:-1),H(2),Be(n.title),H(2),Be(n.description),H(),qt(n.cover?9:-1),H(2),wr(n.tags),H(2),zt("innerHTML",r.contentHtml(),ru)}}function q0(e,t){e&1&&(F(0,"article",5)(1,"h1"),U(2,"Post not found"),k(),F(3,"p"),U(4,"The requested post does not exist."),k(),F(5,"a",2),U(6,"Go back to list"),k()())}var Pa=class e{route=h(Ke);sanitizer=h(zu);seo=h(Ur);slug=ov(this.route.paramMap.pipe(A(t=>t.get("slug")??"")),{initialValue:""});post=xe(()=>rv.get(this.slug())??null);contentHtml=xe(()=>{let t=this.post();return t?this.sanitizer.bypassSecurityTrustHtml(t.contentHtml):""});constructor(){Ir(()=>{let t=this.post();if(t){this.seo.setPost(t);return}this.seo.setNotFound()})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=It({type:e,selectors:[["app-blog-post-page"]],decls:9,vars:1,consts:[["aria-hidden","true",1,"grain"],[1,"top-nav"],["routerLink","/",1,"back-link"],[1,"mono"],[1,"post-main"],[1,"post-article"],[1,"post-head-row"],[1,"post-date","mono"],[1,"pin-chip","mono"],[1,"post-description"],[1,"post-cover"],[1,"tag-row"],[1,"post-content",3,"innerHTML"],["loading","lazy",3,"src","alt"]],template:function(n,r){if(n&1&&(Me(0,"div",0),F(1,"header",1)(2,"a",2),U(3,"\u2190 Back to all posts"),k(),F(4,"span",3),U(5,"waveblog"),k()(),F(6,"main",4),$t(7,$0,14,6,"article",5)(8,q0,7,0,"article",5),k()),n&2){let o;H(7),qt((o=r.post())?7:8,o)}},dependencies:[Br],encapsulation:2})};var iv=[{path:"",component:La,title:"Wave Programming Language Blog"},{path:"post/:slug",component:Pa,title:"Wave Post"},{path:"**",redirectTo:""}];var sv={providers:[Kl(),Mu({eventCoalescing:!0}),md(iv)]};var Fa=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=It({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){n&1&&Me(0,"router-outlet")},dependencies:[ti],styles:["[_nghost-%COMP%]{display:block}"]})};qu(Fa,sv).catch(e=>console.error(e));
