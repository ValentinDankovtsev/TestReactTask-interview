(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,t,a){e.exports={sitePageHeader:"tasks_sitePageHeader__3DP3i",buttonSingOut:"tasks_buttonSingOut__2Vl_-"}},138:function(e,t,a){e.exports={pageAddTaskHeader:"addTask_pageAddTaskHeader__3TjxY"}},237:function(e,t,a){"use strict";a.r(t);a(0);var n=a(66),s=a(145),r=a(28),c=a(245),i="ADD_TASK_TYPE",u="UPDATE_TASK_TYPE",o="UPDATE_DESCRIPTION_TYPE",d="UPDATE_DATA_TYPE",j={tasks:[],newTaskText:"\u0417\u0430\u0434\u0430\u0447\u0430",newDescriptionText:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",newDate:"\u0414\u0430\u0442\u0430"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(r.a)(Object(r.a)({},e),{},{tasks:[].concat(Object(s.a)(e.tasks),[{id:Object(c.a)(),task:e.newTaskText,description:e.newDescriptionText,date:e.newDate}]),newTaskText:"",newDescriptionText:"",newDate:""});case u:return Object(r.a)(Object(r.a)({},e),{},{newTaskText:t.value});case o:return Object(r.a)(Object(r.a)({},e),{},{newDescriptionText:t.value});case d:return Object(r.a)(Object(r.a)({},e),{},{newDate:t.value});default:return e}},b=a(123),p=a(133),O=a.n(p),x=function(e,t){if("Admin"===e&&"qwerty"===t)return"successfully"},w="ADD_USER_TYPE",m="UPDATE_USERNAME_TYPE",h="UPDATE_USERPASSWORD_TYPE",f="SIGN_OUT",g={},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(r.a)(Object(r.a)({},e),{},{newUserName:t.value});case h:return Object(r.a)(Object(r.a)({},e),{},{newPassword:t.value});case f:return Object(r.a)(Object(r.a)({},e),{},{isAuth:!1,userName:"",password:"",newPassword:"",newUserName:""});case w:var a=x(e.newUserName,e.newPassword);return"successfully"===a?Object(r.a)(Object(r.a)({},e),{},{userName:e.newUserName,isAuth:!0,newPassword:"",newUserName:""}):Object(r.a)(Object(r.a)({},e),{},{isAuth:!1,userName:"",newPassword:"",newUserName:""});default:return e}},k=Object(n.a)({tasksPage:l,loginPage:T}),v={key:"root",storage:O.a},P=Object(b.a)(v,k),D=Object(n.b)(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(D.getState());var _=Object(b.b)(D),y=a(34),A=a.n(y),N=a(44),E=a(25),U=a(61),S=a(242),C=a(244),I=a(45),Y=a(10),q=function(e){return e.isAuth?Object(Y.jsx)(E.a,{to:"/tasks"}):(console.log(e.isAuth),Object(Y.jsx)("div",{children:Object(Y.jsxs)(S.a,{name:"basic",labelCol:{span:10},wrapperCol:{span:6},initialValues:{remember:!0},autoComplete:"off",onSubmit:function(e){e.preventDefault()},children:[Object(Y.jsx)(S.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(Y.jsx)(C.a,{value:e.userName,onChange:function(t){var a=t.target.value;e.updateUserName(a)}})}),Object(Y.jsx)(S.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(Y.jsx)(C.a,{value:e.password,onChange:function(t){var a=t.target.value;e.updatePassword(a)}})}),Object(Y.jsx)(S.a.Item,{wrapperCol:{offset:8,span:16},children:Object(Y.jsx)(N.b,{to:"/tasks",children:Object(Y.jsx)(I.a,{type:"primary",onClick:function(){e.addLogin()},children:"Sign In"})})})]})}))},R=Object(U.b)((function(e){return{userName:e.newUserName,isAuth:e.loginPage.isAuth,password:e.newPassword,currentUser:e.newUser}}),(function(e){return{updateUserName:function(t){e(function(e){return{type:m,value:e}}(t))},addLogin:function(){e({type:w})},updatePassword:function(t){e(function(e){return{type:h,value:e}}(t))}}}))(q),H=a(243),V=a(241),L=a(138),X=a.n(L),B=function(e){return e.isAuth?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{className:X.a.pageAddTaskHeader,children:Object(Y.jsx)(H.a,{title:"Add Task",onBack:function(){return window.history.back()}})}),Object(Y.jsxs)(S.a,{name:"basic",labelCol:{span:10},wrapperCol:{span:6},initialValues:{remember:!0},autoComplete:"off",children:[Object(Y.jsx)(S.a.Item,{label:"Task",name:"task",rules:[{required:!0,message:"Please input your nameTask!"}],children:Object(Y.jsx)(C.a,{value:e.newTaskText,required:!0,onChange:function(t){var a=t.target.value;e.updateNewTask(a)}})}),Object(Y.jsx)(S.a.Item,{label:"Description",name:"description",rules:[{required:!0,message:"Please input your description!"}],children:Object(Y.jsx)(C.a,{value:e.newDescriptionText,onChange:function(t){var a=t.target.value;e.updateDescription(a)}})}),Object(Y.jsx)(S.a.Item,{label:"Date",name:"date",rules:[{required:!0,message:"Please input your date!"}],children:Object(Y.jsx)(V.a,{value:e.newDate,onChange:function(t,a){e.updateData(a)}})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(N.b,{to:"/tasks",children:Object(Y.jsx)(S.a.Item,{wrapperCol:{offset:10,span:10},children:Object(Y.jsx)(I.a,{type:"primary",htmlType:"submit",onClick:function(){e.addTask()},children:"Add"})})})})]})]}):Object(Y.jsx)(E.a,{to:"/"})},J=Object(U.b)((function(e){return{tasks:e.tasksPage.tasks,newTaskText:e.tasksPage.newTaskText,newDescriptionText:e.tasksPage.newDescriptionText,newDate:e.tasksPage.newDate,isAuth:e.loginPage.isAuth,newUser:e.loginPage.userName}}),(function(e){return{updateNewTask:function(t){e(function(e){return{type:u,value:e}}(t))},updateDescription:function(t){e(function(e){return{type:o,value:e}}(t))},updateData:function(t){e(function(e){return{type:d,value:e}}(t))},addTask:function(){e({type:i})}}}))(B),K=a(240),G=function(e){var t=[{name:e.task,description:e.description,date:e.date}];return Object(Y.jsx)("div",{children:Object(Y.jsx)(K.a,{columns:[{title:"Name",dataIndex:"name",key:"name",render:function(e){return e}},{title:"Description",dataIndex:"description",key:"description"},{title:"Date",dataIndex:"date",key:"date"}],dataSource:t})})},M=a(122),W=a.n(M),z=function(e){var t=e.state.tasksPage.tasks.map((function(e,t){return Object(Y.jsx)(G,{task:e.task,description:e.description,date:e.date},t)}));if(!e.isAuth)return Object(Y.jsx)(E.a,{to:"/"});return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(H.a,{className:W.a.sitePageHeader,title:"Tasks"}),Object(Y.jsx)("div",{children:t}),Object(Y.jsx)("div",{children:Object(Y.jsx)(N.b,{to:"/addtask",children:Object(Y.jsx)(I.a,{type:"primary",children:" Add Task "})})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(N.b,{to:"/",children:Object(Y.jsx)(I.a,{className:W.a.buttonSingOut,type:"primary",onClick:function(){e.signOut()},children:"Sign Out"})})})]})},F=Object(U.b)((function(e){return{isAuth:e.loginPage.isAuth,currentUser:e.loginPage.userName}}),(function(e){return{signOut:function(){e({type:f})}}}))(z);var Q=function(){return Object(Y.jsxs)(N.a,{children:[Object(Y.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(Y.jsx)(R,{})}}),Object(Y.jsx)(E.b,{path:"/tasks",render:function(){return Object(Y.jsx)(F,{state:D.getState()})}}),Object(Y.jsx)(E.b,{path:"/addtask",render:function(){return Object(Y.jsx)(J,{})}})]})},Z=a(142);a(236);A.a.render(Object(Y.jsx)(N.a,{children:Object(Y.jsx)(U.a,{store:D,children:Object(Y.jsx)(Z.a,{loading:null,persistor:_,children:Object(Y.jsx)(Q,{})})})}),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.4a6428fd.chunk.js.map