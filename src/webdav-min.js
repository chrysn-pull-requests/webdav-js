!function(e){"sendAsBinary"in XMLHttpRequest.prototype||(XMLHttpRequest.prototype.sendAsBinary=function(e){function t(e){return 255&e.charCodeAt(0)}var n=Array.prototype.map.call(e,t),r=new Uint8Array(n)
this.send(r.buffer)}),"from"in Array||(Array.from=function(e){return[].slice.call(e)}),"keys"in Object||(Object.keys=function(e){var t=[]
for(var n in e)e.hasOwnProperty(n)&&t.push(n)
return t})
var t=function(){var t,n=function(e,t,n,r){var a=new XMLHttpRequest
return r||(t+=(t.indexOf("?")>-1?"&":"?")+"_="+Date.now()),a.open(e,t,!0),n&&Object.keys(n).forEach(function(e){a.setRequestHeader(e,n[e])}),a},r=function(e){var t=""
return["bytes","KB","MB","GB","TB","PB"].forEach(function(n,r){!t&&e<Math.pow(1024,r+1)&&(t+=(e/Math.pow(1024,r)).toFixed(r>0?1:0)+" "+(1==e?"byte":n))}),t},a=function(){return w.length&&w.sort(function(e,t){return e.directory==t.directory?e.name.replace(/\/$/,"")<t.name.replace(/\/$/,"")?-1:1:e.directory?-1:1}),e.each(w,function(e){this.index=e}),w},o=function(t){return t.item=e("<li/>").data("file",t),t.directory?t.item.addClass("directory"):(t.item.addClass("file"),t.type?t.item.addClass(t.type):t.item.addClass("unknown")),t.directory||t.item.addClass(t.name.replace(/^.+\.([^\.]+)$/,"$1")),t.item.append('<a href="'+t.path+t.name+'" class="title">'+t.title+"</a>"),t.directory||t.item.append('<span class="size">'+r(t.size)+"</span>"),t.name&&(t["delete"]&&(t.item.append('<a href="#delete" title="Delete" class="delete">&times;</a>'),t.item.append('<a href="#move" title="Move" class="move">move</a>')),t.item.append('<a href="#rename" title="Rename" class="rename">rename</a>'),t.item.append('<a href="#copy" title="Copy" class="copy">copy</a>')),i(t),t},i=function(t){return t.directory?t.item.find(".title").on("click",function(){return history.pushState(history.state,t.path+t.name,t.path+t.name),b.list(t.path+t.name),!1}):t.item.find(".title").on("click",function(n){n.stopPropagation()
var r={href:t.path+t.name}
if("video"==t.type)r.wrapCSS="fancybox-video",r.content='<style type="text/css">.fancybox-video{width:auto !important;height:auto !important}.fancybox-inner{width:auto !important;height:auto !important}video{max-width:90%;max-height:90%}</style><video autoplay controls><source src="'+t.path+t.name+'"/></video>',r.afterShow=function(){e.fancybox.update()}
else if("font"==t.type){var a={eot:"embedded-opentype",otf:"opentype",ttf:"truetype"},o=t.name.replace(/^.+\.([^\.]+)$/,"$1")
r.content='<style>@font-face{font-family:"f";src:url("'+t.path+t.name+'") format("'+(a[o]||o)+'")}.fancybox-inner *{font-family:"f"}.a:before{content:"The quick brown fox jumps over the lazy dog. 0123456789";display:block;padding:0 0 .5em}.a:after{content:"Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz"}.l{font-size:2em}</style><h1>'+t.name+'</h1><p class="l"><span class="a"></span></p><p><span class="a"></span></p><p><strong class="a"></strong></p><p><em class="a"></em></p>'}else"text"==t.type&&(r.type="iframe",r.beforeShow=function(){var n=e(".fancybox-iframe").prop("contentWindow"),r=n.document
e("pre",r).addClass("prettyprint").addClass("lang-"+t.name.replace(/^.+\.([^\.]+)$/,"$1")),q?n.eval(q):e.get("https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js",function(e){q=e,n.eval(e)})})
return"unknown"!=t.type?(e.fancybox(r),!1):void 0}),t["delete"]&&(t.item.find(".delete").on("click",function(){return confirm('Are you sure you want to delete "'+t.name+'"?')&&b.del(t),!1}),t.item.find(".rename").on("click",function(){var e=prompt('Please enter the new name for "'+t.name+'":',t.name)
return e.match(/^[a-z0-9_\-\.]+$/i)||(alert("Bad file name."),e=!1),e&&b.rename(t,t.path+e),!1}),t.item.find(".copy").on("click",function(){return alert("Currently not implemented."),!1}),t.item.find(".move").on("click",function(){return alert("Currently not implemented."),!1})),t.item.on("click",function(){return t.item.find("a.title").click(),!1}),t.item},s=function(){return a(),h.empty(),e.each(w,function(e,t){t&&h.append(t.item)}),h},l=function(t){var n=!1
return e.each(w,function(){return this.name==t.name?(n=this,!1):void 0}),n},d=function(t){var n={text:/\.(?:te?xt|i?nfo|php|pl|cgi|faq|ini|htaccess|log|sql|sfv|conf|sh|pm|py|rb|(?:s?c|sa)ss|js|java|coffee|[sx]?html?|xml|svg)$/i,image:/\.(?:jpe?g|gif|a?png)/i,video:/\.(?:mp(?:e?g)?4|mov|avi|webm|ogv)/i,font:/\.(?:woff2?|eot|[ot]tf)/i},r="unknown"
return e.each(n,function(e,n){return t.match(n)?(r=e,!1):void 0}),r},c=function(){var t="/"
return e('script[src$="src/webdav-min.js"], script[src$="src/webdav.js"]').each(function(){t=e(this).attr("src").replace(/src\/webdav(-min)?.js$/,"")}),t},u=function(e,t){return e.querySelector?e.querySelector(t):e.getElementsByTagName(t)[0]},p=function(e,t){var n=u(e,t)
return n?n.textContent:""},f=function(e,t){return e.querySelectorAll?Array.from(e.querySelectorAll(t)):Array.from(e.getElementsByTagName(t))},m=function(){a(),s()},y=function(){return b.list(g)},v=function(e){return e=e.replace(/\/$/,""),e.split("/").pop()},h=e('<ul class="list"/>'),g=window.location.pathname,w=[],q="",b={init:function(){e.getScript(c()+"external/prettify/prettify.js",function(e){q=e}),e('<div class="content"></div><div class="upload">Drop files here to upload or <a href="#createDirectory" class="create-directory">create a new directory</a></div>').appendTo(e("body").empty()),e("div.content").append(h),t=e("div.upload"),this.list(g),s(),t.on("dragover",function(){return t.addClass("active"),!1}),t.on("dragend dragleave",function(e){return t.removeClass("active"),!1}),t.on("drop",function(n){t.removeClass("active")
var r=n.originalEvent.target.files||n.originalEvent.dataTransfer.files
return e.each(r,function(e,t){if(existingFile=l(t)){if(!confirm('A file called "'+existingFile.name+'" already exists, would you like to overwrite it?'))return!1
delete w[existingFile.index]}if("undefined"!=typeof FileReader){var n=new FileReader
n.addEventListener("load",function(e){t.data=e.target.result,b.upload(t)},!1),n.context=b,n.filename=t.name,n.readAsBinaryString(t)}else alert("Sorry, your browser isn't currently suppored.")}),!1}),e("a.create-directory").on("click",function(){var e,t=prompt("New folder name:")
if(!t.match(/^[\w\d_\-\.]+$/))return alert("Name contains non-standard characters, aborting."),!1
if(t.match(/^\.\.?$/))return alert("Cannot use a reserved name for your directory."),!1
if(e=l(t))return e.directory?alert('Directory "'+e.name+'" already exists.'):alert('A file called "'+e.name+'" exists, unable to create folder.'),!1
var e={directory:!0,name:t,title:t+"/",path:g,modified:Date.now(),size:!1,type:d(t),mimeType:"",request:null,item:null,data:null,"delete":!0}
return e.request=n("MKCOL",e.path+e.name),e.request.addEventListener("loadstart",function(t){e.item.addClass("loading")},!1),e.request.addEventListener("load",function(t){e.item.removeClass("loading")},!1),e.request.addEventListener("error",function(t){delete w[e.index],m(),console.log("Error")},!1),e.request.addEventListener("abort",function(t){delete w[e.index],m(),console.log("Aborted")},!1),w.push(o(e)),m(),e.request.send(null),!1}),e(window).on("popstate",function(e){b.list(window.location.pathname)})},list:function(t){var r=n("PROPFIND",t,{Depth:1})
w=[],r.addEventListener("loadstart",function(t){e("div.content").addClass("loading")},!1),r.addEventListener("load",function(n){var a=new DOMParser,i=a.parseFromString(r.responseText,"application/xml")
g=t.match(/\/$/)?t:t+"/",f(i,"response").forEach(function(e,n){var r=p(e,"href"),a=v(r)
return n?void w.push(o({directory:!!u(e,"collection"),name:a,title:a,path:g,modified:new Date(p(e,"getlastmodified")),size:p(e,"getcontentlength"),type:d(a),mimeType:p(e,"getcontenttype"),request:null,item:null,data:null,"delete":!0})):void("/"!=t&&w.push(o({directory:!0,name:"",title:"&larr;",path:t.replace(/[^\/]+\/?$/,""),modified:"",size:"",type:"",mimeType:"",request:null,item:null,data:null,"delete":!1})))}),m(),e("div.content").removeClass("loading")},!1),r.addEventListener("error",function(e){},!1),r.addEventListener("abort",function(e){},!1),r.send(null)},upload:function(t){return t.name?(t=e.extend({directory:!1,title:t.name,path:this.path(),modified:new Date,size:t.data.length,request:null,item:null,"delete":!0},t),t.request=n("PUT",t.path+t.name,{"Content-Type":t.type}),t.request.addEventListener("loadstart",function(e){t.item.addClass("loading"),t.item.find("span.size").after('<span class="uploading"><span class="progress"><span class="meter"></span></span><span class="cancel-upload">&times;</span></span>'),t.item.find("span.cancel-upload").on("click",function(){return t.request.abort(),!1})},!1),t.request.addEventListener("progress",function(e){t.item.find("span.meter").width(""+e.position/e.total*100+"%")},!1),t.request.addEventListener("load",function(e){y()},!1),t.request.addEventListener("error",function(e){delete w[t.index],m(),console.log("Error",e)},!1),t.request.addEventListener("abort",function(e){delete w[t.index],m(),console.log("Aborted",e)},!1),w.push(o(t)),m(),t.request.sendAsBinary(t.data),!0):!1},del:function(e){return e.name?("path"in e||(e.path=this.path()),e.request=n("DELETE",e.path+e.name),e.request.addEventListener("load",function(t){delete w[e.index],y()},!1),e.request.addEventListener("error",function(e){console.log("Error",e)},!1),e.request.addEventListener("abort",function(e){console.log("Aborted",e)},!1),e.request.send(null),!0):!1},copy:function(e,t){return e.request=n("COPY",e.path+e.name,{Destination:t}),e.request.addEventListener("load",function(e){y()},!1),e.request.addEventListener("error",function(e){console.log("Error",e)},!1),e.request.addEventListener("abort",function(e){console.log("Aborted",e)},!1),e.request.send(null),!0},move:function(e,t){return e.request=n("MOVE",e.path+e.name,{Destination:window.location.protocol+"//"+window.location.host+t}),e.request.addEventListener("load",function(e){y()},!1),e.request.addEventListener("error",function(e){console.log("Error",e)},!1),e.request.addEventListener("abort",function(e){console.log("Aborted",e)},!1),e.request.send(null),!0},rename:function(e,t){return this.move(e,t)}}
return b}()
e(function(){t.init()})}(jQuery)