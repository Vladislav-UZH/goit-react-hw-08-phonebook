"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{8236:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var a=n(5218),s=n(9434),t=n(9273),i=n(5705),o=n(1889),m=n(5527),l=n(4554),d=n(890),c=n(5616),u=n(4281),h=n(5282),p=n(184),x=h.object({name:h.string().max(12).required("You forgot to enter your name!"),email:h.string().email().required("You forgot to enter your email!"),password:h.string().min(8).required("You forgot to enter your password!")}),j=function(){var e=(0,s.I0)();return(0,p.jsx)(o.ZP,{container:!0,sx:{justifyContent:"center"},children:(0,p.jsx)(m.Z,{children:(0,p.jsxs)(l.Z,{sx:{width:450},p:5,children:[(0,p.jsx)(d.Z,{variant:"h4",children:"Registration"}),(0,p.jsx)(i.J9,{validationSchema:x,initialValues:{name:"",email:"",password:""},onSubmit:function(r,n){var s=r.name,i=r.email,o=r.password;n.resetForm;if(!s||!i||!o)return a.Am.error("The fields must be filled in");e((0,t.z2)({name:s,email:i,password:o}))},children:function(e){return(0,p.jsxs)(i.l0,{children:[(0,p.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,p.jsx)(i.gN,{as:c.Z,label:"Username",helperText:(0,p.jsx)(i.Bc,{name:"name"}),margin:"dense",name:"name",type:"text",error:e.errors.name&&e.touched.name}),(0,p.jsx)(i.gN,{as:c.Z,label:"Email",helperText:(0,p.jsx)(i.Bc,{name:"email"}),margin:"dense",name:"email",type:"email",error:e.errors.email&&e.touched.email}),(0,p.jsx)(i.gN,{as:c.Z,label:"Password",helperText:(0,p.jsx)(i.Bc,{name:"password"}),margin:"dense",name:"password",type:"password",error:e.errors.password&&e.touched.password})]}),(0,p.jsx)(o.ZP,{container:!0,marginTop:1,justifyContent:"center",children:(0,p.jsx)(u.Z,{size:"large",variant:"contained",type:"submit",children:"Create"})})]})}})]})})})},f=function(){return(0,p.jsx)(j,{})}}}]);
//# sourceMappingURL=236.b6b65887.chunk.js.map