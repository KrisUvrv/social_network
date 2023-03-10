"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[752],{752:function(t,r,e){e.r(r),e.d(r,{default:function(){return V}});var n=e(5671),s=e(3144),i=e(136),o=e(5716),u=e(1413),a=e(2791),l=e(885),c="ProfileInfo_descriptionBlock__Rj-hY",d="ProfileInfo_contact__EBPLx",h=e(5739),f=e(184),p=function(t){var r=(0,a.useState)(!1),e=(0,l.Z)(r,2),n=e[0],s=e[1],i=(0,a.useState)(t.status),o=(0,l.Z)(i,2),u=o[0],c=o[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,f.jsxs)("div",{children:[!n&&(0,f.jsx)("div",{children:(0,f.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"----"})}),n&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},onBlur:function(){s(!1),t.updateStatus(u)},autoFocus:!0,value:u})})]})},x=e(4366),j=e(4814),m=e(9086),v=e(704),g=e(9234),b=(0,v.Z)({form:"edit_profile"})((function(t){var r=t.handleSubmit,e=t.profile,n=t.error;return(0,f.jsxs)("form",{onSubmit:r,children:[(0,f.jsx)("div",{children:(0,f.jsx)("button",{children:"save"})}),n&&(0,f.jsx)("div",{className:g.Z.formSummaryError,children:n}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full name:"})," ",(0,m.Gr)("Full name","fullName",[],m.II)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me"}),":",(0,m.Gr)("About me","aboutMe",[],m.gx)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"looking for a job:"})," ",(0,m.Gr)("","lookingForAJob",[],m.II,{type:"checkbox"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My skills"}),": ",(0,m.Gr)("My skills","lookingForAJobDescription",[],m.gx)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts: "})," ",Object.keys(e.contacts).map((function(t){return(0,f.jsx)("div",{className:d,children:(0,f.jsxs)("b",{children:[t,": ",(0,m.Gr)(t,"contacts."+t,[],m.II)]})},t)}))]})]})})),Z=function(t){var r=t.profile,e=t.isOwner,n=t.goToEditMode;return(0,f.jsxs)("div",{children:[e&&(0,f.jsx)("div",{children:(0,f.jsx)("button",{onClick:n,children:"edit"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full name:"})," ",r.fullName]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me: "}),r.aboutMe]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"looking for a job:"})," ",r.lookingForAJob?"yes":"no"]}),r.lookingForAJob&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My skills"}),": ",r.lookingForAJobDescription]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts: "})," ",Object.keys(r.contacts).map((function(t){return(0,f.jsx)(P,{contactTitle:t,contactValue:r.contacts[t]},t)}))]})]})},P=function(t){var r=t.contactTitle,e=t.contactValue;return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("b",{children:r}),": ",e]})},k=function(t){var r=t.profile,e=t.status,n=t.updateStatus,s=t.isOwner,i=t.savePhoto,o=t.saveProfile,u=(0,a.useState)(!1),d=(0,l.Z)(u,2),m=d[0],v=d[1];if(!r)return(0,f.jsx)(h.Z,{});return(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("img",{src:r.photos.large||x,className:j.Z.userPhoto}),s&&(0,f.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&i(t.target.files[0])}}),m?(0,f.jsx)(b,{initialValues:r,profile:r,onSubmit:function(t){o(t).then((function(){v(!1)}))}}):(0,f.jsx)(Z,{profile:r,isOwner:s,goToEditMode:function(){v(!0)}}),(0,f.jsx)(p,{status:e,updateStatus:n})]})})},_=e(8161),y=e(2982),C="MyPosts_postsBlock__rhrdO",S="MyPosts_item__82YyO",I="Post_item__WoijP",w=function(t){return(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("img",{src:"https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg",alt:""}),t.message,(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"like"})," ",t.likesCount]})]})},A=e(6139),F=e(5304),N=(0,F.D)(10),M=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,f.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)(A.Z,{name:"newPostText",component:m.gx,placeholder:"Post message",validate:[F.C,N]})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{children:"Add post"})})]})})),O=a.memo((function(t){var r=(0,y.Z)(t.posts).reverse().map((function(t){return(0,f.jsx)(w,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("h3",{children:"My posts"}),(0,f.jsx)(M,{onSubmit:function(r){t.addPost(r.newPostText)}}),(0,f.jsx)("div",{className:S,children:r})]})})),D=e(8687),T=(0,D.$j)((function(t){return{posts:t.profile.posts,newPostText:t.profile.newPostText}}),(function(t){return{addPost:function(r){t((0,_.Wl)(r))}}}))(O),E=function(t){return(0,f.jsxs)("div",{children:[(0,f.jsx)(k,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),(0,f.jsx)(T,{})]})},G=e(6871),J=e(1548),U=e(7781);var B=function(t){(0,i.Z)(e,t);var r=(0,o.Z)(e);function e(){return(0,n.Z)(this,e),r.apply(this,arguments)}return(0,s.Z)(e,[{key:"refreshProfile",value:function(){console.log("ProfileContainer",this.props);var t=this.props.router.params.userId;t||(t=this.props.authorisedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,r){this.props.router.params.userId!=t.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,f.jsx)(E,(0,u.Z)((0,u.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),e}(a.Component),V=(0,U.qC)((0,D.$j)((function(t){return{profile:t.profile.profile,status:t.profile.status,authorisedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:_.et,getStatus:_.lR,updateStatus:_.Nf,savePhoto:_.Ju,saveProfile:_.Ii}),(function(t){return function(r){var e=(0,G.TH)(),n=(0,G.s0)(),s=(0,G.UO)();return(0,f.jsx)(t,(0,u.Z)((0,u.Z)({},r),{},{router:{location:e,navigate:n,params:s}}))}}),J.D)(B)},9086:function(t,r,e){e.d(r,{gx:function(){return d},II:function(){return h},Gr:function(){return f}});var n=e(1413),s=e(5987),i=(e(2791),e(9234)),o=e(6139),u=e(184),a=["input","meta","child"],l=["input","meta","child"],c=function(t){t.input;var r=t.meta,e=r.touched,n=r.error,s=t.children,o=e&&n;return(0,u.jsxs)("div",{className:i.Z.formControl+" "+(o?i.Z.error:""),children:[(0,u.jsx)("div",{children:s}),o&&(0,u.jsx)("span",{children:n})]})},d=function(t){var r=t.input,e=(t.meta,t.child,(0,s.Z)(t,a));return(0,u.jsx)(c,(0,n.Z)((0,n.Z)({},t),{},{children:(0,u.jsx)("textarea",(0,n.Z)((0,n.Z)({},r),e))}))},h=function(t){var r=t.input,e=(t.meta,t.child,(0,s.Z)(t,l));return(0,u.jsx)(c,(0,n.Z)((0,n.Z)({},t),{},{children:(0,u.jsx)("input",(0,n.Z)((0,n.Z)({},r),e))}))},f=function(t,r,e,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,(0,n.Z)({placeholder:t,validate:e,name:r,component:s},i))," ",a]})}},1548:function(t,r,e){e.d(r,{D:function(){return f}});var n=e(1413),s=e(5671),i=e(3144),o=e(136),u=e(5716),a=e(6871),l=e(2791),c=e(8687),d=e(184),h=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var r=function(r){(0,o.Z)(l,r);var e=(0,u.Z)(l);function l(){return(0,s.Z)(this,l),e.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,n.Z)({},this.props)):(0,d.jsx)(a.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(h)(r)}},5304:function(t,r,e){e.d(r,{C:function(){return n},D:function(){return s}});var n=function(t){if(!t)return"Field is required"},s=function(t){return function(r){if(r.length>t)return"max length is ".concat(t," symbols")}}},9234:function(t,r){r.Z={formControl:"FormsControls_formControl__2DrIS",error:"FormsControls_error__+IV3j",formSummaryError:"FormsControls_formSummaryError__04LsR"}}}]);
//# sourceMappingURL=752.96f05b69.chunk.js.map