import{a as I,o as C,c as re,w,B as T,a0 as je,av as st,u as v,T as De,v as ot,k as h,l as L,y as N,D as Ae,s as fe,r as $,E as Ie,P as ue,V as Ee,W as $e,aa as Ve,J as k,p as it,x as lt,F as Be,q as He,a2 as ut,L as ne,M as ct,K as dt,a5 as ft,a1 as ht,b as ae,e as Ne,t as qe,i as pt,f as R,a3 as vt}from"./entry.eacab362.mjs";import{E as O,t as he,c as Ge,m as mt,a as gt,f as bt}from"./index.766ec657.mjs";import{_ as W,k as S,m as Ue,x as K,q as oe,r as be,M as yt,j as Pe,L as Mt,J as xt,E as Ke,V as Oe,d as Te,W as _t}from"./index.2d746604.mjs";const ce=function(e,n,...t){let a;n.includes("mouse")||n.includes("click")?a="MouseEvents":n.includes("key")?a="KeyboardEvent":a="HTMLEvents";const r=document.createEvent(a);return r.initEvent(n,...t),e.dispatchEvent(r),e};function x(e,n){kt(e)&&(e="100%");var t=wt(e);return e=n===360?e:Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:(n===360?e=(e<0?e%n+n:e%n)/parseFloat(String(n)):e=e%n/parseFloat(String(n)),e)}function ie(e){return Math.min(1,Math.max(0,e))}function kt(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function wt(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Je(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function le(e){return e<=1?"".concat(Number(e)*100,"%"):e}function U(e){return e.length===1?"0"+e:String(e)}function St(e,n,t){return{r:x(e,255)*255,g:x(n,255)*255,b:x(t,255)*255}}function Fe(e,n,t){e=x(e,255),n=x(n,255),t=x(t,255);var a=Math.max(e,n,t),r=Math.min(e,n,t),s=0,o=0,u=(a+r)/2;if(a===r)o=0,s=0;else{var l=a-r;switch(o=u>.5?l/(2-a-r):l/(a+r),a){case e:s=(n-t)/l+(n<t?6:0);break;case n:s=(t-e)/l+2;break;case t:s=(e-n)/l+4;break}s/=6}return{h:s,s:o,l:u}}function ye(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*(6*t):t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function Et(e,n,t){var a,r,s;if(e=x(e,360),n=x(n,100),t=x(t,100),n===0)r=t,s=t,a=t;else{var o=t<.5?t*(1+n):t+n-t*n,u=2*t-o;a=ye(u,o,e+1/3),r=ye(u,o,e),s=ye(u,o,e-1/3)}return{r:a*255,g:r*255,b:s*255}}function ze(e,n,t){e=x(e,255),n=x(n,255),t=x(t,255);var a=Math.max(e,n,t),r=Math.min(e,n,t),s=0,o=a,u=a-r,l=a===0?0:u/a;if(a===r)s=0;else{switch(a){case e:s=(n-t)/u+(n<t?6:0);break;case n:s=(t-e)/u+2;break;case t:s=(e-n)/u+4;break}s/=6}return{h:s,s:l,v:o}}function Tt(e,n,t){e=x(e,360)*6,n=x(n,100),t=x(t,100);var a=Math.floor(e),r=e-a,s=t*(1-n),o=t*(1-r*n),u=t*(1-(1-r)*n),l=a%6,p=[t,o,s,s,u,t][l],m=[u,t,t,o,s,s][l],b=[s,s,u,t,t,o][l];return{r:p*255,g:m*255,b:b*255}}function Le(e,n,t,a){var r=[U(Math.round(e).toString(16)),U(Math.round(n).toString(16)),U(Math.round(t).toString(16))];return a&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Ct(e,n,t,a,r){var s=[U(Math.round(e).toString(16)),U(Math.round(n).toString(16)),U(Math.round(t).toString(16)),U(At(a))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function At(e){return Math.round(parseFloat(e)*255).toString(16)}function We(e){return A(e)/255}function A(e){return parseInt(e,16)}function It(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Ce={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $t(e){var n={r:0,g:0,b:0},t=1,a=null,r=null,s=null,o=!1,u=!1;return typeof e=="string"&&(e=Nt(e)),typeof e=="object"&&(z(e.r)&&z(e.g)&&z(e.b)?(n=St(e.r,e.g,e.b),o=!0,u=String(e.r).substr(-1)==="%"?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(a=le(e.s),r=le(e.v),n=Tt(e.h,a,r),o=!0,u="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(a=le(e.s),s=le(e.l),n=Et(e.h,a,s),o=!0,u="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=Je(t),{ok:o,format:e.format||u,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:t}}var Bt="[-\\+]?\\d+%?",Ht="[-\\+]?\\d*\\.\\d+%?",V="(?:".concat(Ht,")|(?:").concat(Bt,")"),Me="[\\s|\\(]+(".concat(V,")[,|\\s]+(").concat(V,")[,|\\s]+(").concat(V,")\\s*\\)?"),xe="[\\s|\\(]+(".concat(V,")[,|\\s]+(").concat(V,")[,|\\s]+(").concat(V,")[,|\\s]+(").concat(V,")\\s*\\)?"),H={CSS_UNIT:new RegExp(V),rgb:new RegExp("rgb"+Me),rgba:new RegExp("rgba"+xe),hsl:new RegExp("hsl"+Me),hsla:new RegExp("hsla"+xe),hsv:new RegExp("hsv"+Me),hsva:new RegExp("hsva"+xe),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Nt(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var n=!1;if(Ce[e])e=Ce[e],n=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=H.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=H.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=H.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=H.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=H.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=H.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=H.hex8.exec(e),t?{r:A(t[1]),g:A(t[2]),b:A(t[3]),a:We(t[4]),format:n?"name":"hex8"}:(t=H.hex6.exec(e),t?{r:A(t[1]),g:A(t[2]),b:A(t[3]),format:n?"name":"hex"}:(t=H.hex4.exec(e),t?{r:A(t[1]+t[1]),g:A(t[2]+t[2]),b:A(t[3]+t[3]),a:We(t[4]+t[4]),format:n?"name":"hex8"}:(t=H.hex3.exec(e),t?{r:A(t[1]+t[1]),g:A(t[2]+t[2]),b:A(t[3]+t[3]),format:n?"name":"hex"}:!1)))))))))}function z(e){return Boolean(H.CSS_UNIT.exec(String(e)))}var Pt=function(){function e(n,t){n===void 0&&(n=""),t===void 0&&(t={});var a;if(n instanceof e)return n;typeof n=="number"&&(n=It(n)),this.originalInput=n;var r=$t(n);this.originalInput=n,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=t.format)!==null&&a!==void 0?a:r.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},e.prototype.getLuminance=function(){var n=this.toRgb(),t,a,r,s=n.r/255,o=n.g/255,u=n.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),u<=.03928?r=u/12.92:r=Math.pow((u+.055)/1.055,2.4),.2126*t+.7152*a+.0722*r},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(n){return this.a=Je(n),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var n=ze(this.r,this.g,this.b);return{h:n.h*360,s:n.s,v:n.v,a:this.a}},e.prototype.toHsvString=function(){var n=ze(this.r,this.g,this.b),t=Math.round(n.h*360),a=Math.round(n.s*100),r=Math.round(n.v*100);return this.a===1?"hsv(".concat(t,", ").concat(a,"%, ").concat(r,"%)"):"hsva(".concat(t,", ").concat(a,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var n=Fe(this.r,this.g,this.b);return{h:n.h*360,s:n.s,l:n.l,a:this.a}},e.prototype.toHslString=function(){var n=Fe(this.r,this.g,this.b),t=Math.round(n.h*360),a=Math.round(n.s*100),r=Math.round(n.l*100);return this.a===1?"hsl(".concat(t,", ").concat(a,"%, ").concat(r,"%)"):"hsla(".concat(t,", ").concat(a,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(n){return n===void 0&&(n=!1),Le(this.r,this.g,this.b,n)},e.prototype.toHexString=function(n){return n===void 0&&(n=!1),"#"+this.toHex(n)},e.prototype.toHex8=function(n){return n===void 0&&(n=!1),Ct(this.r,this.g,this.b,this.a,n)},e.prototype.toHex8String=function(n){return n===void 0&&(n=!1),"#"+this.toHex8(n)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var n=Math.round(this.r),t=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(n,", ").concat(t,", ").concat(a,")"):"rgba(".concat(n,", ").concat(t,", ").concat(a,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var n=function(t){return"".concat(Math.round(x(t,255)*100),"%")};return{r:n(this.r),g:n(this.g),b:n(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var n=function(t){return Math.round(x(t,255)*100)};return this.a===1?"rgb(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%)"):"rgba(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var n="#"+Le(this.r,this.g,this.b,!1),t=0,a=Object.entries(Ce);t<a.length;t++){var r=a[t],s=r[0],o=r[1];if(n===o)return s}return!1},e.prototype.toString=function(n){var t=Boolean(n);n=n!=null?n:this.format;var a=!1,r=this.a<1&&this.a>=0,s=!t&&r&&(n.startsWith("hex")||n==="name");return s?n==="name"&&this.a===0?this.toName():this.toRgbString():(n==="rgb"&&(a=this.toRgbString()),n==="prgb"&&(a=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(a=this.toHexString()),n==="hex3"&&(a=this.toHexString(!0)),n==="hex4"&&(a=this.toHex8String(!0)),n==="hex8"&&(a=this.toHex8String()),n==="name"&&(a=this.toName()),n==="hsl"&&(a=this.toHslString()),n==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l+=n/100,t.l=ie(t.l),new e(t)},e.prototype.brighten=function(n){n===void 0&&(n=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(n/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(n/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(n/100)))),new e(t)},e.prototype.darken=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l-=n/100,t.l=ie(t.l),new e(t)},e.prototype.tint=function(n){return n===void 0&&(n=10),this.mix("white",n)},e.prototype.shade=function(n){return n===void 0&&(n=10),this.mix("black",n)},e.prototype.desaturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s-=n/100,t.s=ie(t.s),new e(t)},e.prototype.saturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s+=n/100,t.s=ie(t.s),new e(t)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(n){var t=this.toHsl(),a=(t.h+n)%360;return t.h=a<0?360+a:a,new e(t)},e.prototype.mix=function(n,t){t===void 0&&(t=50);var a=this.toRgb(),r=new e(n).toRgb(),s=t/100,o={r:(r.r-a.r)*s+a.r,g:(r.g-a.g)*s+a.g,b:(r.b-a.b)*s+a.b,a:(r.a-a.a)*s+a.a};return new e(o)},e.prototype.analogous=function(n,t){n===void 0&&(n=6),t===void 0&&(t=30);var a=this.toHsl(),r=360/t,s=[this];for(a.h=(a.h-(r*n>>1)+720)%360;--n;)a.h=(a.h+r)%360,s.push(new e(a));return s},e.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new e(n)},e.prototype.monochromatic=function(n){n===void 0&&(n=6);for(var t=this.toHsv(),a=t.h,r=t.s,s=t.v,o=[],u=1/n;n--;)o.push(new e({h:a,s:r,v:s})),s=(s+u)%1;return o},e.prototype.splitcomplement=function(){var n=this.toHsl(),t=n.h;return[this,new e({h:(t+72)%360,s:n.s,l:n.l}),new e({h:(t+216)%360,s:n.s,l:n.l})]},e.prototype.onBackground=function(n){var t=this.toRgb(),a=new e(n).toRgb();return new e({r:a.r+(t.r-a.r)*t.a,g:a.g+(t.g-a.g)*t.a,b:a.b+(t.b-a.b)*t.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(n){for(var t=this.toHsl(),a=t.h,r=[this],s=360/n,o=1;o<n;o++)r.push(new e({h:(a+o*s)%360,s:t.s,l:t.l}));return r},e.prototype.equals=function(n){return this.toRgbString()===new e(n).toRgbString()},e}();const Rt={name:"ElCollapseTransition"},Ot=I({...Rt,setup(e){const n=S("collapse-transition"),t={beforeEnter(a){a.dataset||(a.dataset={}),a.dataset.oldPaddingTop=a.style.paddingTop,a.dataset.oldPaddingBottom=a.style.paddingBottom,a.style.maxHeight=0,a.style.paddingTop=0,a.style.paddingBottom=0},enter(a){a.dataset.oldOverflow=a.style.overflow,a.scrollHeight!==0?(a.style.maxHeight=`${a.scrollHeight}px`,a.style.paddingTop=a.dataset.oldPaddingTop,a.style.paddingBottom=a.dataset.oldPaddingBottom):(a.style.maxHeight=0,a.style.paddingTop=a.dataset.oldPaddingTop,a.style.paddingBottom=a.dataset.oldPaddingBottom),a.style.overflow="hidden"},afterEnter(a){a.style.maxHeight="",a.style.overflow=a.dataset.oldOverflow},beforeLeave(a){a.dataset||(a.dataset={}),a.dataset.oldPaddingTop=a.style.paddingTop,a.dataset.oldPaddingBottom=a.style.paddingBottom,a.dataset.oldOverflow=a.style.overflow,a.style.maxHeight=`${a.scrollHeight}px`,a.style.overflow="hidden"},leave(a){a.scrollHeight!==0&&(a.style.maxHeight=0,a.style.paddingTop=0,a.style.paddingBottom=0)},afterLeave(a){a.style.maxHeight="",a.style.overflow=a.dataset.oldOverflow,a.style.paddingTop=a.dataset.oldPaddingTop,a.style.paddingBottom=a.dataset.oldPaddingBottom}};return(a,r)=>(C(),re(De,je({name:v(n).b()},st(t)),{default:w(()=>[T(a.$slots,"default")]),_:3},16,["name"]))}});var de=W(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);de.install=e=>{e.component(de.name,de)};const Ft=de,zt={name:"ElContainer"},Lt=I({...zt,props:{direction:{type:String}},setup(e){const n=e,t=ot(),a=S("container"),r=h(()=>n.direction==="vertical"?!0:n.direction==="horizontal"?!1:t&&t.default?t.default().some(o=>{const u=o.type.name;return u==="ElHeader"||u==="ElFooter"}):!1);return(s,o)=>(C(),L("section",{class:N([v(a).b(),v(a).is("vertical",v(r))])},[T(s.$slots,"default")],2))}});var Wt=W(Lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const jt={name:"ElAside"},Dt=I({...jt,props:{width:{type:String,default:null}},setup(e){const n=e,t=S("aside"),a=h(()=>n.width?t.cssVarBlock({width:n.width}):{});return(r,s)=>(C(),L("aside",{class:N(v(t).b()),style:Ae(v(a))},[T(r.$slots,"default")],6))}});var Ye=W(Dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Vt={name:"ElFooter"},qt=I({...Vt,props:{height:{type:String,default:null}},setup(e){const n=e,t=S("footer"),a=h(()=>n.height?t.cssVarBlock({height:n.height}):{});return(r,s)=>(C(),L("footer",{class:N(v(t).b()),style:Ae(v(a))},[T(r.$slots,"default")],6))}});var Ze=W(qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Gt={name:"ElHeader"},Ut=I({...Gt,props:{height:{type:String,default:null}},setup(e){const n=e,t=S("header"),a=h(()=>n.height?t.cssVarBlock({height:n.height}):{});return(r,s)=>(C(),L("header",{class:N(v(t).b()),style:Ae(v(a))},[T(r.$slots,"default")],6))}});var Qe=W(Ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Kt={name:"ElMain"},Jt=I({...Kt,setup(e){const n=S("main");return(t,a)=>(C(),L("main",{class:N(v(n).b())},[T(t.$slots,"default")],2))}});var Xe=W(Jt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Yt=Ue(Wt,{Aside:Ye,Footer:Ze,Header:Qe,Main:Xe});K(Ye);const Zt=K(Ze),Qt=K(Qe),Xt=K(Xe);class en{constructor(n,t){this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",a=>{let r=!1;switch(a.code){case O.down:{this.gotoSubIndex(this.subIndex+1),r=!0;break}case O.up:{this.gotoSubIndex(this.subIndex-1),r=!0;break}case O.tab:{ce(n,"mouseleave");break}case O.enter:case O.space:{r=!0,a.currentTarget.click();break}}return r&&(a.preventDefault(),a.stopPropagation()),!1})})}}class tn{constructor(n,t){this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${n}-menu`);t&&(this.submenu=new en(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let t=!1;switch(n.code){case O.down:{ce(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case O.up:{ce(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case O.tab:{ce(n.currentTarget,"mouseleave");break}case O.enter:case O.space:{t=!0,n.currentTarget.click();break}}t&&n.preventDefault()})}}class nn{constructor(n,t){this.domNode=n,this.init(t)}init(n){const t=this.domNode.childNodes;Array.from(t).forEach(a=>{a.nodeType===1&&new tn(a,n)})}}const an=I({name:"ElMenuCollapseTransition",setup(){const e=S("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,a){oe(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",a()},onAfterEnter(t){be(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),yt(t,e.m("collapse"))?(be(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),oe(t,e.m("collapse"))):(oe(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),be(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){oe(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function rn(e,n,t,a,r,s){return C(),re(De,je({mode:"out-in"},e.listeners),{default:w(()=>[T(e.$slots,"default")]),_:3},16)}var sn=W(an,[["render",rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function et(e,n){const t=h(()=>{let r=e.parent;const s=[n.value];for(;r.type.name!=="ElMenu";)r.props.index&&s.unshift(r.props.index),r=r.parent;return s});return{parentMenu:h(()=>{let r=e.parent;for(;r&&!["ElMenu","ElSubMenu"].includes(r.type.name);)r=r.parent;return r}),indexPath:t}}function on(e){return h(()=>{const t=e.backgroundColor;return t?new Pt(t).shade(20).toString():""})}const tt=(e,n)=>{const t=S("menu");return h(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":on(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},ln=Pe({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6}}),_e="ElSubMenu";var Re=I({name:_e,props:ln,setup(e,{slots:n,expose:t}){const a=He(),{indexPath:r,parentMenu:s}=et(a,h(()=>e.index)),o=S("menu"),u=S("sub-menu"),l=fe("rootMenu");l||he(_e,"can not inject root menu");const p=fe(`subMenu:${s.value.uid}`);p||he(_e,"can not inject sub menu");const m=$({}),b=$({});let E;const j=$(!1),pe=$(),se=$(null),q=h(()=>i.value==="horizontal"&&J.value?"bottom-start":"right-start"),Z=h(()=>i.value==="horizontal"&&J.value||i.value==="vertical"&&!l.props.collapse?Mt:xt),J=h(()=>p.level===0),Q=h(()=>e.popperAppendToBody===void 0?J.value:Boolean(e.popperAppendToBody)),ve=h(()=>l.props.collapse?`${o.namespace.value}-zoom-in-left`:`${o.namespace.value}-zoom-in-top`),me=h(()=>i.value==="horizontal"&&J.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),G=h(()=>l.openedMenus.includes(e.index)),D=h(()=>{let f=!1;return Object.values(m.value).forEach(y=>{y.active&&(f=!0)}),Object.values(b.value).forEach(y=>{y.active&&(f=!0)}),f}),X=h(()=>l.props.backgroundColor||""),Y=h(()=>l.props.activeTextColor||""),ee=h(()=>l.props.textColor||""),i=h(()=>l.props.mode),c=Ie({index:e.index,indexPath:r,active:D}),d=h(()=>i.value!=="horizontal"?{color:ee.value}:{borderBottomColor:D.value?l.props.activeTextColor?Y.value:"":"transparent",color:D.value?Y.value:ee.value}),g=()=>{var f,y,_;return(_=(y=(f=se.value)==null?void 0:f.popperRef)==null?void 0:y.popperInstanceRef)==null?void 0:_.destroy()},M=f=>{f||g()},P=()=>{l.props.menuTrigger==="hover"&&l.props.mode==="horizontal"||l.props.collapse&&l.props.mode==="vertical"||e.disabled||l.handleSubMenuClick({index:e.index,indexPath:r.value,active:D.value})},B=(f,y=e.showTimeout)=>{var _;f.type!=="focus"&&(l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||e.disabled||(p.mouseInChild.value=!0,E==null||E(),{stop:E}=Oe(()=>{l.openMenu(e.index,r.value)},y),Q.value&&((_=s.value.vnode.el)==null||_.dispatchEvent(new MouseEvent("mouseenter")))))},F=(f=!1)=>{var y,_;l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||(E==null||E(),p.mouseInChild.value=!1,{stop:E}=Oe(()=>!j.value&&l.closeMenu(e.index,r.value),e.hideTimeout),Q.value&&f&&((y=a.parent)==null?void 0:y.type.name)==="ElSubMenu"&&((_=p.handleMouseleave)==null||_.call(p,!0)))};ue(()=>l.props.collapse,f=>M(Boolean(f)));{const f=_=>{b.value[_.index]=_},y=_=>{delete b.value[_.index]};Ee(`subMenu:${a.uid}`,{addSubMenu:f,removeSubMenu:y,handleMouseleave:F,mouseInChild:j,level:p.level+1})}return t({opened:G}),$e(()=>{l.addSubMenu(c),p.addSubMenu(c)}),Ve(()=>{p.removeSubMenu(c),l.removeSubMenu(c)}),()=>{var f;const y=[(f=n.title)==null?void 0:f.call(n),k(Ke,{class:u.e("icon-arrow")},{default:()=>k(Z.value)})],_=tt(l.props,p.level+1),rt=l.isMenuPopup?k(Ge,{ref:se,visible:G.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:q.value,teleported:Q.value,fallbackPlacements:me.value,transition:ve.value,gpuAcceleration:!1},{content:()=>{var te;return k("div",{class:[o.m(i.value),o.m("popup-container"),e.popperClass],onMouseenter:ge=>B(ge,100),onMouseleave:()=>F(!0),onFocus:ge=>B(ge,100)},[k("ul",{class:[o.b(),o.m("popup"),o.m(`popup-${q.value}`)],style:_.value},[(te=n.default)==null?void 0:te.call(n)])])},default:()=>k("div",{class:u.e("title"),style:[d.value,{backgroundColor:X.value}],onClick:P},y)}):k(Be,{},[k("div",{class:u.e("title"),style:[d.value,{backgroundColor:X.value}],ref:pe,onClick:P},y),k(Ft,{},{default:()=>{var te;return it(k("ul",{role:"menu",class:[o.b(),o.m("inline")],style:_.value},[(te=n.default)==null?void 0:te.call(n)]),[[lt,G.value]])}})]);return k("li",{class:[u.b(),u.is("active",D.value),u.is("opened",G.value),u.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:G.value,onMouseenter:B,onMouseleave:()=>F(!0),onFocus:B},[rt])}}});const un=Pe({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Te(Array),default:()=>mt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),ke=e=>Array.isArray(e)&&e.every(n=>ne(n)),cn={close:(e,n)=>ne(e)&&ke(n),open:(e,n)=>ne(e)&&ke(n),select:(e,n,t,a)=>ne(e)&&ke(n)&&ct(t)&&(a===void 0||a instanceof Promise)};var dn=I({name:"ElMenu",props:un,emits:cn,setup(e,{emit:n,slots:t,expose:a}){const r=He(),s=r.appContext.config.globalProperties.$router,o=$(),u=S("menu"),l=S("sub-menu"),p=$(-1),m=$(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),b=$(e.defaultActive),E=$({}),j=$({}),pe=h(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),se=()=>{const i=b.value&&E.value[b.value];if(!i||e.mode==="horizontal"||e.collapse)return;i.indexPath.forEach(d=>{const g=j.value[d];g&&q(d,g.indexPath)})},q=(i,c)=>{m.value.includes(i)||(e.uniqueOpened&&(m.value=m.value.filter(d=>c.includes(d))),m.value.push(i),n("open",i,c))},Z=(i,c)=>{const d=m.value.indexOf(i);d!==-1&&m.value.splice(d,1),n("close",i,c)},J=({index:i,indexPath:c})=>{m.value.includes(i)?Z(i,c):q(i,c)},Q=i=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:c,indexPath:d}=i;if(!(c===void 0||d===void 0))if(e.router&&s){const g=i.route||c,M=s.push(g).then(P=>(P||(b.value=c),P));n("select",c,d,{index:c,indexPath:d,route:g},M)}else b.value=c,n("select",c,d,{index:c,indexPath:d})},ve=i=>{const c=E.value,d=c[i]||b.value&&c[b.value]||c[e.defaultActive];d?b.value=d.index:b.value=i},me=()=>{var i;const c=Array.from((i=o.value.childNodes)!=null?i:[]).filter(f=>f.nodeName!=="#text"||f.nodeValue),d=64,g=Number.parseInt(getComputedStyle(o.value).paddingLeft,10),M=Number.parseInt(getComputedStyle(o.value).paddingRight,10),P=o.value.clientWidth-g-M;let B=0,F=0;return c.forEach((f,y)=>{B+=f.offsetWidth||0,B<=P-d&&(F=y+1)}),F===c.length?-1:F},G=(i,c=33.34)=>{let d;return()=>{d&&clearTimeout(d),d=setTimeout(()=>{i()},c)}};let D=!0;const X=()=>{const i=()=>{p.value=-1,dt(()=>{p.value=me()})};D?i():G(i)(),D=!1};ue(()=>e.defaultActive,i=>{E.value[i]||(b.value=""),ve(i)}),ue(()=>e.collapse,i=>{i&&(m.value=[])}),ue(E.value,se);let Y;ut(()=>{e.mode==="horizontal"&&e.ellipsis?Y=gt(o,X).stop:Y==null||Y()});{const i=M=>{j.value[M.index]=M},c=M=>{delete j.value[M.index]};Ee("rootMenu",Ie({props:e,openedMenus:m,items:E,subMenus:j,activeIndex:b,isMenuPopup:pe,addMenuItem:M=>{E.value[M.index]=M},removeMenuItem:M=>{delete E.value[M.index]},addSubMenu:i,removeSubMenu:c,openMenu:q,closeMenu:Z,handleMenuItemClick:Q,handleSubMenuClick:J})),Ee(`subMenu:${r.uid}`,{addSubMenu:i,removeSubMenu:c,mouseInChild:$(!1),level:0})}$e(()=>{e.mode==="horizontal"&&new nn(r.vnode.el,u.namespace.value)}),a({open:c=>{const{indexPath:d}=j.value[c];d.forEach(g=>q(g,d))},close:Z,handleResize:X});const ee=i=>{const c=Array.isArray(i)?i:[i],d=[];return c.forEach(g=>{Array.isArray(g.children)?d.push(...ee(g.children)):d.push(g)}),d};return()=>{var i,c;let d=(c=(i=t.default)==null?void 0:i.call(t))!=null?c:[];const g=[];if(e.mode==="horizontal"&&o.value){const B=ee(d),F=p.value===-1?B:B.slice(0,p.value),f=p.value===-1?[]:B.slice(p.value);(f==null?void 0:f.length)&&e.ellipsis&&(d=F,g.push(k(Re,{index:"sub-menu-more",class:l.e("hide-arrow")},{title:()=>k(Ke,{class:l.e("icon-more")},{default:()=>k(_t)}),default:()=>f})))}const M=tt(e,0),P=k("ul",{key:String(e.collapse),role:"menubar",ref:o,style:M.value,class:{[u.b()]:!0,[u.m(e.mode)]:!0,[u.m("collapse")]:e.collapse}},[...d,...g]);return e.collapseTransition&&e.mode==="vertical"?k(sn,()=>P):P}}});const fn=Pe({index:{type:Te([String,null]),default:null},route:{type:Te([String,Object])},disabled:Boolean}),hn={click:e=>ne(e.index)&&Array.isArray(e.indexPath)},we="ElMenuItem",pn=I({name:we,components:{ElTooltip:Ge},props:fn,emits:hn,setup(e,{emit:n}){const t=He(),a=fe("rootMenu"),r=S("menu"),s=S("menu-item");a||he(we,"can not inject root menu");const{parentMenu:o,indexPath:u}=et(t,ft(e,"index")),l=fe(`subMenu:${o.value.uid}`);l||he(we,"can not inject sub menu");const p=h(()=>e.index===a.activeIndex),m=Ie({index:e.index,indexPath:u,active:p}),b=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:u.value,route:e.route}),n("click",m))};return $e(()=>{l.addSubMenu(m),a.addMenuItem(m)}),Ve(()=>{l.removeSubMenu(m),a.removeMenuItem(m)}),{Effect:bt,parentMenu:o,rootMenu:a,active:p,nsMenu:r,nsMenuItem:s,handleClick:b}}});function vn(e,n,t,a,r,s){const o=ht("el-tooltip");return C(),L("li",{class:N([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:n[0]||(n[0]=(...u)=>e.handleClick&&e.handleClick(...u))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(C(),re(o,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:w(()=>[T(e.$slots,"title")]),default:w(()=>[ae("div",{class:N(e.nsMenu.be("tooltip","trigger"))},[T(e.$slots,"default")],2)]),_:3},8,["effect"])):(C(),L(Be,{key:1},[T(e.$slots,"default"),T(e.$slots,"title")],64))],2)}var nt=W(pn,[["render",vn],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const mn={title:String},gn="ElMenuItemGroup",bn=I({name:gn,props:mn,setup(){return{ns:S("menu-item-group")}}});function yn(e,n,t,a,r,s){return C(),L("li",{class:N(e.ns.b())},[ae("div",{class:N(e.ns.e("title"))},[e.$slots.title?T(e.$slots,"title",{key:1}):(C(),L(Be,{key:0},[Ne(qe(e.title),1)],64))],2),ae("ul",null,[T(e.$slots,"default")])],2)}var at=W(bn,[["render",yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Mn=Ue(dn,{MenuItem:nt,MenuItemGroup:at,SubMenu:Re}),Se=K(nt);K(at);K(Re);const xn=""+new URL("logo.cfde0c8a.svg",import.meta.url).href,_n=ae("img",{src:xn,width:"120",height:"56",style:{display:"block"}},null,-1),kn=Ne("Characters"),wn=Ne("Episodes"),Sn=I({__name:"NavigationBar",setup(e){const n=pt(),t=h(()=>{var a;return(a=n==null?void 0:n.path)!=null?a:"/characters"});return(a,r)=>{const s=vt;return C(),re(v(Mn),{"default-active":v(t),router:"",class:"el-menu-demo",mode:"horizontal"},{default:w(()=>[R(v(Se),{index:"/",route:"/",style:{"margin-right":"auto"}},{default:w(()=>[R(s,{to:"/",style:{"text-decoration":"none",padding:"0"}},{default:w(()=>[_n]),_:1})]),_:1}),R(v(Se),{class:N({"is-active":v(t).includes("characters")}),index:"/characters",route:"/characters"},{default:w(()=>[R(s,{to:"/characters",style:{"text-decoration":"none"}},{default:w(()=>[kn]),_:1})]),_:1},8,["class"]),R(v(Se),{class:N({"is-active":v(t).includes("episodes")}),index:"/episodes",route:"/episodes"},{default:w(()=>[R(s,{to:"/episodes",style:{"text-decoration":"none"}},{default:w(()=>[wn]),_:1})]),_:1},8,["class"])]),_:1},8,["default-active"])}}}),An=I({__name:"default",setup(e){return(n,t)=>{const a=Sn;return C(),re(v(Yt),{style:{"max-width":"1360px",padding:"0 20px",margin:"0 auto",height:"100vh"}},{default:w(()=>[R(v(Qt),null,{default:w(()=>[R(a)]),_:1}),R(v(Xt),null,{default:w(()=>[T(n.$slots,"default")]),_:3}),R(v(Zt),{style:{"text-align":"center"}},{default:w(()=>[ae("small",null,"\xA9 Copyright "+qe(new Date().getFullYear())+", Example Corporation",1)]),_:1})]),_:3})}}});export{An as default};
