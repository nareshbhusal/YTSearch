(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={App:"App_App__34PpO",footer:"App_footer__uT5Na"}},2:function(e,t,a){e.exports={VideoItem:"VideoItem_VideoItem__6H_08",thumbnail:"VideoItem_thumbnail__22Cwl",data:"VideoItem_data__32dvr",title:"VideoItem_title__2FZwZ",metadata:"VideoItem_metadata___BmPC",channel:"VideoItem_channel__1dRPi",description:"VideoItem_description__2D8EJ"}},22:function(e,t,a){e.exports={container:"VideoList_container__1gMCU",footerText:"VideoList_footerText__cpFWu"}},23:function(e,t,a){e.exports=a(48)},3:function(e,t,a){e.exports={container:"VideoDetail_container__21iYX",iframe:"VideoDetail_iframe__3o91M",videoData:"VideoDetail_videoData__IQe48",title:"VideoDetail_title__35JSD",channelName:"VideoDetail_channelName__3wc-g",description:"VideoDetail_description__1oGIQ"}},48:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a.n(n),i=a(0),o=a.n(i),c=a(12),s=a.n(c),l=a(20),d=a(4),m=a(5),u=a(7),p=a(6),h=a(8),_=a(9),f=a.n(_),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:""},a.searchHandler=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.searchValue)},a.clearSearch=function(){a.setState({searchValue:""})},a.onChangeHandler=function(e){a.setState({searchValue:e.target.value})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:f.a.container},o.a.createElement("div",{className:f.a.logo,onClick:function(e){return window.location.href="/"}},"VideoSearch"),o.a.createElement("form",{onSubmit:this.searchHandler,className:f.a.form},o.a.createElement("input",{placeholder:"Search",className:f.a.input,type:"text",onChange:this.onChangeHandler,value:this.state.searchValue})))}}]),t}(o.a.Component),b=a(10),E=a.n(b),w=a(21),N=a.n(w).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:50,key:"AIzaSyBUhGfPtScKdil_1hFf8xfjYiDWdUcNtns"}}),S=a(2),V=a.n(S),g=function(e){var t=e.video,a=e.onSelected,n=t.snippet,r=n.title,i=n.description,c=n.channelTitle,s=n.thumbnails,l="https://i.stack.imgur.com/WFy1e.jpg";return s&&(l=s.medium.url),o.a.createElement("div",{onClick:function(){a(t)},className:V.a.VideoItem},o.a.createElement("img",{alt:r,className:V.a.thumbnail,src:l}),o.a.createElement("div",{className:V.a.data},o.a.createElement("p",{className:V.a.title},r),o.a.createElement("div",{className:V.a.metadata},o.a.createElement("p",{className:V.a.channel},c),o.a.createElement("p",{className:V.a.description},function(e){var t=e.length>50?"...":"";return e.slice(20)+t}(i)))))},y=a(22),j=a.n(y),O=function(e){var t=e.videos,a=e.onSelected,n=e.searchTerm;if(!n)return o.a.createElement("p",null,"Nothing searched for");var r=t.map(function(e){return o.a.createElement(g,{key:e.etag,onSelected:a,video:e})});return r.length?o.a.createElement("div",{id:"videolist",className:j.a.container},o.a.createElement("p",null,"Video results for: ",n),r):o.a.createElement("p",null,"No videos for the search criteria")},I=a(3),T=a.n(I),x=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(!this.props.video)return null;var e="https://www.youtube.com/embed/".concat(this.props.video.id.videoId);return o.a.createElement("div",{className:T.a.container},o.a.createElement("iframe",{ref:this.iframeRef,className:T.a.iframe,src:e}),o.a.createElement("div",{className:T.a.videoData},o.a.createElement("a",{className:T.a.title,target:"_blank",href:"https://youtube.com/watch?v=".concat(this.props.video.id.videoId)},this.props.video.snippet.title),o.a.createElement("a",{className:T.a.channelName,target:"_blank",href:"https://youtube.com/channel/".concat(this.props.video.snippet.channelId)},this.props.video.snippet.channelTitle),o.a.createElement("p",{className:T.a.description},this.props.video.snippet.description)))}}]),t}(o.a.Component),D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null,searchTerm:""},a.handleSubmit=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/search",{params:{q:t}});case 2:n=e.sent;try{a.setState({videos:n.data.items,searchTerm:t,error:""}),window.scrollTo(0,0),window.location.href="#",window.location.href="#videolist"}catch(r){a.setState({error:"Server error. Maybe the quota for today ended."})}case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onSelected=function(e){a.setState({selectedVideo:e}),window.scrollTo(0,0)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.selectedVideo,n=e.searchTerm,r=e.videos;return o.a.createElement("div",{className:E.a.App},o.a.createElement(v,{className:E.a.searchBar,onFormSubmit:this.handleSubmit}),o.a.createElement(x,{video:a}),t?o.a.createElement("p",{style:{color:"red"}},t):o.a.createElement(O,{searchTerm:n,onSelected:this.onSelected,videos:r}),o.a.createElement("footer",{className:E.a.footer},o.a.createElement("p",{className:E.a.footerText},"Built with YouTube api. \xa9 All rights reserved - ",o.a.createElement("a",{href:"https://github.com/nareshbhusal"},"Naresh Bhusal"))))}}]),t}(o.a.Component);r.a.render(o.a.createElement(D,null),document.querySelector("#root"))},9:function(e,t,a){e.exports={container:"SearchBar_container__1NLnq",logo:"SearchBar_logo__12sdD",form:"SearchBar_form__qBdjT",input:"SearchBar_input__35An9"}}},[[23,1,2]]]);
//# sourceMappingURL=main.bf896924.chunk.js.map