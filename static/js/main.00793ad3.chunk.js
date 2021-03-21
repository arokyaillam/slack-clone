(this["webpackJsonpslack-clone-challenge"]=this["webpackJsonpslack-clone-challenge"]||[]).push([[0],{60:function(n,e,t){},61:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o=t(2),s=t.n(o),d=t(31),l=t.n(d),j=(t(60),t(6)),p=t(22),x=(t(61),t(30)),b=t(12),h=t(7),g=t(44),u=t.n(g),O=t(42),m=t.n(O),f=t(3);var v,y,w,k,S,I=function(n){var e=n.sentMessage,t=Object(o.useState)(""),i=Object(p.a)(t,2),c=i[0],a=i[1];return Object(f.jsx)(D,{children:Object(f.jsx)(C,{children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{onChange:function(n){return a(n.target.value)},type:"text",placeholder:"Message type here ....."}),Object(f.jsx)(M,{type:"submit",onClick:function(n){n.preventDefault(),c&&e(c)},children:Object(f.jsx)(z,{})})]})})})},D=h.a.div(i||(i=Object(j.a)(["\n    padding : 0 20px 24px 20px;\n"]))),C=h.a.div(c||(c=Object(j.a)(["\n    border : 1px solid #8D8D8E;\n    border-radius : 4px;\n\n    form{\n        display : flex;\n        height : 42px;\n        align-items : center;\n        padding-left : 10px;\n\n        input{\n            flex : 1;\n            border : none;\n            font-size : 13px;\n        }\n\n        input:focus{\n            outline : none;\n        }\n    }\n"]))),M=h.a.button(a||(a=Object(j.a)(["\n    background : #007a5a;\n    border-radius : 2px;\n    width : 32px;\n    height : 32px;\n    display : flex;\n    justify-content : center;\n    align-items : center;\n    margin-right : 5px;\n    cursor : pointer;\n    border : none;\n\n    .MuiSvgIcon-root{\n        width : 18px;\n    }\n\n    :hover{\n        background : #148567;\n    }\n"]))),z=Object(h.a)(m.a)(r||(r=Object(j.a)(["\n    color : #D9D9D9;\n"])));var E,F,A,P,B,N,T,G,U=function(n){var e=n.text,t=n.name,i=n.image,c=n.timestamp;return Object(f.jsxs)(J,{children:[Object(f.jsx)(L,{children:Object(f.jsx)("img",{src:i})}),Object(f.jsxs)(_,{children:[Object(f.jsxs)(R,{children:[t,Object(f.jsx)("span",{children:new Date(c.toDate()).toUTCString()})]}),Object(f.jsx)(W,{children:e})]})]})},J=h.a.div(v||(v=Object(j.a)(["\n    padding : 8px 20px;\n    display : flex;\n    align-items : center;\n"]))),L=h.a.div(y||(y=Object(j.a)(["\n    width : 36px;\n    height : 36px;\n    border-radius : 2px;\n    overflow : hidden;\n    margin-right : 8px;\n\n    img{\n        width : 100%\n    }\n"]))),_=h.a.div(w||(w=Object(j.a)(["\n    display : flex;\n    flex-direction : column;\n"]))),R=h.a.div(k||(k=Object(j.a)(["\n    font-weight :900;\n    font-size : 15px;\n    line-height : 1.4;\n    \n    span{\n        font-weight : 400;\n        color : rgb(97,96,97);\n        margin-left : 8px;\n        font-size : 13px;\n    }\n\n"]))),W=h.a.div(S||(S=Object(j.a)(["\n\n"]))),q=t(27),K=q.a.initializeApp({apiKey:"AIzaSyDiewGy8joDCNMSwY9NZti0zsPqcjb6gsc",authDomain:"arokyaillam-slack.firebaseapp.com",projectId:"arokyaillam-slack",storageBucket:"arokyaillam-slack.appspot.com",messagingSenderId:"903738759222",appId:"1:903738759222:web:56239e13fdf0c8e1962097"}).firestore(),V=q.a.auth(),Y=new q.a.auth.GoogleAuthProvider,Z=K;var H,Q,X,$,nn=function(n){var e=n.user,t=Object(b.g)().channelId,i=Object(o.useState)(),c=Object(p.a)(i,2),a=c[0],r=c[1],s=Object(o.useState)([]),d=Object(p.a)(s,2),l=d[0],j=d[1];return Object(o.useEffect)((function(){Z.collection("rooms").doc(t).onSnapshot((function(n){r(n.data()),console.log(l),j(l)})),Z.collection("rooms").doc(t).collection("messages").orderBy("timestamp","asc").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()}));console.log(e),j(e)}))}),[t]),Object(f.jsxs)(en,{children:[Object(f.jsxs)(tn,{children:[Object(f.jsxs)(an,{children:[Object(f.jsxs)(rn,{children:["# ",a&&a.name]}),Object(f.jsx)(on,{children:"Company-wide announcement"})]}),Object(f.jsxs)(sn,{children:[Object(f.jsx)("div",{children:"Details"}),Object(f.jsx)(dn,{})]})]}),Object(f.jsx)(cn,{children:l.length>0&&l.map((function(n,e){return Object(f.jsx)(U,{text:n.text,name:n.user,image:n.userImage,timestamp:n.timestamp})}))}),Object(f.jsx)(I,{sentMessage:function(n){if(t){var i={text:n,timestamp:q.a.firestore.Timestamp.now(),user:e.name,userImage:e.photo};Z.collection("rooms").doc(t).collection("messages").add(i),console.log(i)}}})]})},en=h.a.div(E||(E=Object(j.a)(["\n     display : grid;\n     grid-template-rows : 64px auto min-content;\n"]))),tn=h.a.div(F||(F=Object(j.a)(["\n    padding : 0 20px 0 20px;\n    display : flex;\n    align-items : center;\n    border-bottom : 1px solid rgba(83, 39, 83, .13);\n    justify-content : space-between;\n"]))),cn=h.a.div(A||(A=Object(j.a)(["\n\n"]))),an=h.a.div(P||(P=Object(j.a)(["\n\n"]))),rn=h.a.div(B||(B=Object(j.a)(["\n    font-weight : 700;\n"]))),on=h.a.div(N||(N=Object(j.a)(["\n    font-weight : 400;\n    color : #606060;\n    font-size : 13px;\n    margin-top : 8px;\n"]))),sn=h.a.div(T||(T=Object(j.a)(["\n    display : flex;\n    align-items : center;\n    color : #606060;\n"]))),dn=Object(h.a)(u.a)(G||(G=Object(j.a)(["\n    margin-left : 10px;\n    color : #606060\n"])));var ln,jn,pn,xn,bn,hn,gn,un=function(n){return Object(f.jsx)(On,{children:Object(f.jsxs)(mn,{children:[Object(f.jsx)(fn,{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"}),Object(f.jsx)("h1",{children:"Sign in Slack"}),Object(f.jsx)(vn,{onClick:function(){V.signInWithPopup(Y).then((function(e){var t={name:e.user.displayName,photo:e.user.photoURL};localStorage.setItem("user",JSON.stringify(t)),n.setUser(t)})).catch((function(n){alert(n.message)}))},children:"Sign In With Google"})]})})},On=h.a.div(H||(H=Object(j.a)(["\n    width : 100%;\n    height : 100vh;\n    background-color : #f8f8f8;\n    display : flex;\n    justify-content : center;\n    align-items : center;\n"]))),mn=h.a.div(Q||(Q=Object(j.a)(["\n    background-color : white;\n    padding :100px;\n    border-radius : 5px;\n    box-shadow : 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);\n    display : flex;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n"]))),fn=h.a.img(X||(X=Object(j.a)(["\n    height : 100px;\n\n"]))),vn=h.a.button($||($=Object(j.a)(["\n    margin-top : 50px;\n    background-color : #8a8d48;\n    color : white;\n    border : none;\n    height : 40px;\n    border-radius : 4px;\n    cursor : pointer;\n    font-size : 15px;\n"]))),yn=t(45),wn=t.n(yn),kn=t(46),Sn=t.n(kn);var In,Dn,Cn,Mn,zn,En,Fn,An,Pn,Bn,Nn=function(n){var e=n.user,t=n.signOut;return Object(f.jsx)("div",{children:Object(f.jsxs)(Tn,{children:[Object(f.jsxs)(Gn,{children:[Object(f.jsx)(wn.a,{}),Object(f.jsx)(Un,{children:Object(f.jsx)(Jn,{children:Object(f.jsx)("input",{type:"text",placeholder:"Search"})})}),Object(f.jsx)(Sn.a,{})]}),Object(f.jsxs)(Ln,{children:[Object(f.jsx)(_n,{children:e.name}),Object(f.jsx)(Rn,{onClick:t,children:Object(f.jsx)("img",{src:e.photo?e.photo:"https://i.imgur.com/6VBx3io.png"})})]})]})})},Tn=h.a.div(ln||(ln=Object(j.a)(["\n    background : #350d36;\n    color : white;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    height : 38px;\n    position : relative;\n    box-shadow : 0 1px 0 0 rgb(255 255 255 / 10%);\n"]))),Gn=h.a.div(jn||(jn=Object(j.a)(["\n    display : flex;\n    margin : 0 16px 0 16px;\n"]))),Un=h.a.div(pn||(pn=Object(j.a)(["\n    min-width : 400px;\n    margin : 0 16px 0 16px;\n\n"]))),Jn=h.a.div(xn||(xn=Object(j.a)(["\n    box-shadow : inset 0 0 0 1px rgb(104 74 104);\n    width : 100%;\n    border-radius : 6px;\n\ninput{\n    background-color : transparent;\n    border : none;\n    padding : 4px 8px 4px 8px;\n    color : white;\n}\n\ninput:focus{\n    outline : none;\n}\n\n"]))),Ln=h.a.div(bn||(bn=Object(j.a)(["\n    display : flex;\n    align-items : center;\n    padding-right : 16px;\n    position : absolute;\n    right : 0;\n"]))),_n=h.a.div(hn||(hn=Object(j.a)(["\n    padding-right : 16px;\n"]))),Rn=h.a.div(gn||(gn=Object(j.a)(["\n    width : 28px;\n    height : 28px;\n    border : 2px solid white;\n    border-radius : 3px;\n    cursor : pointer;\n\nimg{\n    width : 100%\n}\n"]))),Wn=t(53),qn=t.n(Wn),Kn=t(47),Vn=t.n(Kn),Yn=t(48),Zn=t.n(Yn),Hn=t(49),Qn=t.n(Hn),Xn=t(50),$n=t.n(Xn),ne=t(51),ee=t.n(ne),te=t(52),ie=t.n(te),ce=[{icon:Object(f.jsx)(Vn.a,{}),text:"Thread"},{icon:Object(f.jsx)(Zn.a,{}),text:"All DMs"},{icon:Object(f.jsx)(Qn.a,{}),text:"Mentions & Reactions"},{icon:Object(f.jsx)($n.a,{}),text:"Save Items"},{icon:Object(f.jsx)(ee.a,{}),text:"People & Groups"},{icon:Object(f.jsx)(ie.a,{}),text:"More"}],ae=t(54),re=t.n(ae);var oe,se,de=function(n){var e=Object(b.f)();return Object(f.jsxs)(le,{children:[Object(f.jsxs)(je,{children:[Object(f.jsx)(pe,{children:"Arokyaillam"}),Object(f.jsx)(xe,{children:Object(f.jsx)(qn.a,{})})]}),Object(f.jsx)(be,{children:ce.map((function(n){return Object(f.jsxs)(he,{children:[n.icon,n.text]})}))}),Object(f.jsxs)(ge,{children:[Object(f.jsxs)(ue,{children:[Object(f.jsx)("div",{children:"Channels"}),Object(f.jsx)(re.a,{onClick:function(){var n=prompt("Enter channel name");n&&Z.collection("rooms").add({name:n})}})]}),Object(f.jsx)(Oe,{children:n.rooms.map((function(n){return Object(f.jsxs)(me,{onClick:function(){var t;(t=n.id)&&(console.log(t),e.push("/room/".concat(t)))},children:["# ",n.name]})}))})]})]})},le=h.a.div(In||(In=Object(j.a)(["\n    background : #3F0E40;\n"]))),je=h.a.div(Dn||(Dn=Object(j.a)(["\n    color : white;\n    height : 64px;\n    display : flex;\n    align-items : center;\n    padding-left : 19px;\n    justify-content : space-between;\n    border-bottom : 1px solid #532753;\n"]))),pe=h.a.div(Cn||(Cn=Object(j.a)(["\n\n"]))),xe=h.a.div(Mn||(Mn=Object(j.a)(["\n    width : 36px;\n    height : 36px;\n    background : white;\n    color : #3F0E40;\n    fill : #3F0E40;\n    display :flex;\n    justify-content : center;\n    align-items : center;\n    border-radius : 50%;\n    margin-right : 20px;\n    cursor : pointer;\n"]))),be=h.a.div(zn||(zn=Object(j.a)(["\n\n"]))),he=h.a.div(En||(En=Object(j.a)(["\n    color : rgb(188,172,188);\n    display : grid;\n    grid-template-columns : 15% auto;\n    height : 28px;\n    align-items : center;\n    padding-left : 19px;\n    cursor : pointer;\n    :hover {\n        background : #350D36;\n    }\n    "]))),ge=h.a.div(Fn||(Fn=Object(j.a)(["\n    color : rgb(188,172,188);\n    margin-top : 10px;\n"]))),ue=h.a.div(An||(An=Object(j.a)(["\n    display : flex;\n    justify-content : space-between;\n    align-items : center;\n    height : 28px;\n    padding : 0 12px 0 19px;\n    cursor : pointer;\n"]))),Oe=h.a.div(Pn||(Pn=Object(j.a)(["\n    \n"]))),me=h.a.div(Bn||(Bn=Object(j.a)(["\n    height : 28px;\n    display : flex;\n    align-items : center;\n    padding-left: 19px;\n    cursor : pointer;\n    :hover {\n        background : #350D36;\n    }\n"])));var fe=function(){var n=Object(o.useState)([]),e=Object(p.a)(n,2),t=e[0],i=e[1],c=Object(o.useState)(localStorage.getItem("user")),a=Object(p.a)(c,2),r=a[0],s=a[1];return Object(o.useEffect)((function(){Z.collection("rooms").onSnapshot((function(n){i(n.docs.map((function(n){return{id:n.id,name:n.data().name}})))}))}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(x.a,{children:r?Object(f.jsxs)(ve,{children:[Object(f.jsx)(Nn,{signOut:function(){V.signOut().then((function(){localStorage.removeItem("user"),s(null)}))},user:r}),Object(f.jsxs)(ye,{children:[Object(f.jsx)(de,{rooms:t}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/room/:channelId",children:Object(f.jsx)(nn,{user:r})}),Object(f.jsx)(b.a,{path:"/",children:"Seclct r create"})]})]})]}):Object(f.jsx)(un,{setUser:s})})})},ve=h.a.div(oe||(oe=Object(j.a)(["\n    width : 100%;\n    height : 100vh;\n    display : grid;\n    grid-template-rows : 38px auto; \n"]))),ye=h.a.div(se||(se=Object(j.a)(["\n    display : grid;\n    grid-template-columns : 260px auto;\n"]))),we=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,88)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};l.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(fe,{})}),document.getElementById("root")),we()}},[[76,1,2]]]);
//# sourceMappingURL=main.00793ad3.chunk.js.map