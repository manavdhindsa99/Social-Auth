(this["webpackJsonpauth-task"]=this["webpackJsonpauth-task"]||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),i=n(14),r=n.n(i),c=(n(26),n(15)),u=n(16),s=n(20),l=n(19),h=(n(27),n(6)),m=n.n(h),d=n(17),p=n.n(d);m.a.initializeApp({apiKey:"AIzaSyCtHb9DdIsA4RnBdDZ5TNZtPx0wdMNNUlI",authDomain:"fir-auth-3d539.firebaseapp.com"});var f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[m.a.auth.GoogleAuthProvider.PROVIDER_ID,m.a.auth.FacebookAuthProvider.PROVIDER_ID,m.a.auth.GithubAuthProvider.PROVIDER_ID,m.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},e.componentDidMount=function(){m.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t}),console.log("user",t)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},this.state.isSignedIn?o.a.createElement("span",null,o.a.createElement("div",null,"Successfully Signed In!"),o.a.createElement("h1",null,"Welcome ",m.a.auth().currentUser.displayName),o.a.createElement("div",null,o.a.createElement("img",{alt:"profile picture",src:m.a.auth().currentUser.photoURL})),o.a.createElement("button",{className:"button",onClick:function(){return m.a.auth().signOut()}},"Sign out !")):o.a.createElement(p.a,{uiConfig:this.uiConfig,firebaseAuth:m.a.auth()})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2d31789a.chunk.js.map