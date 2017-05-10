import activePublic from './page/activePublic/index.vue'
import nav1 from './page/nav1/nav1.vue'
import nav2 from './page/nav2/nav2.vue'
import Home from './page/Home'
import login from './page/login'

var routes = [
  {
	path:'/',component:Home,
  redirect: '/add',
	children: [
        { path: '/add', component: activePublic,iconCls:"el-icon-message",name:"项目概况"},
        { path: '/nav1', component: nav1,iconCls:"el-icon-setting",name:"活动项目"},
        { path: '/nav2', component: nav2,iconCls:"el-icon-menu",name:"所有活动"}
    ]
  },
  {
	path:'/login',
	component:login
  }
]

export default  routes;
