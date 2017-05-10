<template>
 <div class="" style="background:#f0f0f0;" v-loading.body="$store.state.loading"  >
  <div class="header-bg">
    <div class="bg-color bg-left bg2"></div>
    <div class="bg-color bg-right bg1"></div>
    <div class="header-box">
      <div class="warper bg1 clearfix">
         <div class="logo bg2 fl" @click="todolist()" ><img src="../assets/logozxi.png"></div>
         <div class="project fl pos-r">
           <span @click="todo()">我的项目{{$store.state.count}}</span>
           <i class="fa  fa-angle-right"></i>
           <span @click="isShow=!isShow">{{myProjectList.titleName}}</span>
           <i class="fa fa-caret-down"></i>
           <div class="dk_options pos-a" v-show="isShow" >
              <ul class="dk_options_inner" >
                <li v-for = "(item,index) in myProjectList.list"  @click="selectToProject(item.projectName)" ><a href="javascript:;"><img src="../assets/app-default.jpg?v1">{{item.projectName}}</a></li>
              </ul>
            </div>
         </div>
         <div class="username-warp fr pos-r">
            <i class="fa fa-user"></i>
            <span class="username-txt textOverHiden" @click="isShowdown=!isShowdown" >{{userName}}</span>
            <i class="fa fa-caret-down"></i>
            <div class="dk_options pos-a" v-show="isShowdown">
              <ul class="dk_options_inner" >
                <li ><a href="javascript:;"><img src="../assets/app-default.jpg?v1">45464</a></li>
                <li ><a href="javascript:;"><img src="../assets/app-default.jpg?v1">888hhh</a></li>
                <li ><a href="javascript:;"><img src="../assets/app-default.jpg?v1">测试</a></li>
                <li ><a href="javascript:;"><img src="../assets/app-default.jpg?v1">ggdfg</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="warper">
  	<el-row class="container" >
      <el-col :span="24" class="main">
        <aside class="menu-expanded"  >
            <div class="loadbox">
              <img src="../assets/app-default.jpg?v1">
            </div>
            <el-menu router class="el-menu-vertical-demo" v-bind:router="true" >
              <el-menu-item :index="item.path" :key="item.path"  v-for="(item,index) in $router.options.routes[0].children" ><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
            </el-menu>
        </aside>
       <div class="sider-box"></div>
       <section class="content-container" >
          <div class="grid-content ">
            <el-col :span="24">
              <el-col :span="12" class="breadcrumb-container">
                <strong class="title">{{$route.name}}</strong>
              </el-col>
              <el-col :span="12" class="btn-box">
                  <el-button type="primary"  @click="handleAdd" ><i class="el-icon-plus"></i>提交问题</el-button>
              </el-col>
            </el-col>  
            <el-col :span="24" class="content-wrapper" style="min-height:800px;">
            <!-- 主视图区 -->
            <transition name="slide-fade">

               <router-view 
               ref="activePublic" 
               v-on:listone="changeone"
               v-on:listtwo="changetwo"
               ></router-view>
               
            </transition>

            </el-col>
          </div>
        </section>

        <!--提交界面-->
        <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false" >
          <el-form :model="addForm" label-width="100px"  :rules="addFormRules" ref="addForm">
            <el-form :inline="true" label-width="100px"  >
                <el-form-item label="产品" >
                  <el-select v-model="addForm.projectName"  placeholder="请选择产品">
                    <el-option label="产品1" value="1"></el-option>
                    <el-option label="产品2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="问题类型" >
                  <el-select v-model="addForm.qssion"  placeholder="请选择活动区域">
                    <el-option label="问题类型1" value="1"></el-option>
                    <el-option label="问题类型2" value="2"></el-option>
                    <el-option label="问题类型3" value="3"></el-option>
                  </el-select>
                </el-form-item>
            </el-form>   

            <el-form-item label="标题" prop="title">
              <el-input v-model="addForm.title" auto-complete="off"></el-input>
            </el-form-item> 

            <el-form-item label="模块" >
              <el-input v-model="addForm.model" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="影响版本" >
              <el-input v-model="addForm.vison" auto-complete="off"></el-input>
            </el-form-item>
              
            <el-form :inline="true" label-width="100px"  >

              <el-form-item label="指派" >
                  <el-select v-model="addForm.who"  placeholder="请选择产品">
                    <el-option label="指派1" value="1"></el-option>
                    <el-option label="指派2" value="2"></el-option>
                  </el-select>
                </el-form-item>

              <el-form-item label="优先级">
                <el-radio-group v-model="addForm.opacity">
                  <el-radio class="radio" :label="1">低</el-radio>
                  <el-radio class="radio" :label="2">中</el-radio>
                  <el-radio class="radio" :label="3">高</el-radio>
                  <el-radio class="radio" :label="4">急</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>  

            <el-form :inline="true" label-width="100px">
              <el-form-item label="计划日期">
                <el-date-picker v-model="addForm.value6" type="daterange" placeholder="选择日期范围"></el-date-picker>
              </el-form-item>
              <el-form-item label="计划版本" prop="posvison">
                <el-input v-model="addForm.posvison" auto-complete="off"></el-input>
              </el-form-item>
              </el-form> 

            <el-form-item  label="环境" prop="eco">
              <el-input v-model="addForm.eco" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="描述">
              <el-input type="textarea" v-model="addForm.addrs"></el-input>
            </el-form-item>

          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click.native="addFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
          </div>
        </el-dialog>
        <!--提交界面-->

      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
  import { requestProject,requestgetTalNumber } from '../api/api';

  export default {
    name: 'app',
    data(){
      return{
        
        isShow:false,
        isShowdown:false,

        userId:'123456',
        userName:'',
        myProjectList:{
          titleName:'',
          list:[1,2,3]
        },
        
        addFormVisible: false,//新增界面是否显示
        addLoading: false,

        addFormRules: {
          name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
          title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
          eco: [{ required: true, message: '请输入姓名2', trigger: 'blur' }],
          posvison: [{ required: true, message: '请输入标题2', trigger: 'blur' }]
        },
        //新增界面数据
        addForm: {
          projectName:'',
          qssion:'',
          title: '',
          model: '',
          vison: '',
          who: '',
          opacity: '',
          value6: '',
          posvison: '',
          eco: '',
          addrs: ''
        },
      }

    },

    computed: {
       
        
    },
    
    mounted() {
      var sessionId = JSON.parse(sessionStorage.getItem('sessionId'));
        if(sessionId==null || sessionId=='undefined'|| sessionId == undefined ){
            //this.$router.push({ path: '/add' });
        } 

        this.userId = sessionId.id;
        this.userName = sessionId.name;

        this.$nextTick(function () {

          this.selectProject();

        })
    },
    methods:{
      todo() {
        console.log(this.$store)
        this.$store.commit('increment');
      },
       todolist() {
         this.$store.dispatch('todolist')
      },
      changeone(e){
        console.log(e);
      },
      changetwo(e){
        console.log(e);
      },
      //拉取我的项目
      selectProject(){

        var parmas = {userId:this.userId}

        var projectName = JSON.parse(localStorage.getItem('projectName')); 

        //发送ajax请求
        requestProject(parmas).then(data =>{

          this.myProjectList.list = data.data.project
          if(projectName==null || projectName=='undefined'|| projectName == undefined ){

              var dataProjectName = data.data.project[0].projectName;
              this.myProjectList.titleName = dataProjectName;
              localStorage.setItem("projectName",JSON.stringify(dataProjectName)); 
              return
          } 
         
          this.myProjectList.titleName = projectName;

        })
      },
      selectToProject(item){

          this.myProjectList.titleName = item; 
          localStorage.setItem("projectName",JSON.stringify(item));  
          this.isShow = !this.isShow;

      },
      //显示新增界面
      handleAdd() {
        this.addFormVisible = true;
        this.addForm = {
          projectName:'',
          qssion:'',
          title: '',
          model: '',
          vison: '',
          who: '',
          opacity: '',
          value6: '',
          posvison: '',
          eco: '',
          addrs: ''
        };
      },

      addSubmit(){
        let para = Object.assign({}, this.addForm);
        console.log(this.addForm);
      }
    }
}



</script>

<style scoped lang="scss">
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-enter{
    transform: translateX(10px);
    opacity: 0;
  }

  .clearfix:after{content:"";clear: both;display:block;}
  .fr{float: right;}
  .fl{float: left;}
  .bg1{background: #00aeef;}
  .bg2{background: #0394cb;}
  .pos-r{position: relative;}
  .pos-a{position: absolute;}
  body{color: #fff;background-color: #f0f0f0;}

  .el-dialog__wrapper{background: rgba(0,0,0,.5);}

  .header-bg{
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 2;
    .bg-color{width: 50%;float: left;height: 100%;}
    .header-box{
      position: absolute;top:0;left: 0;width: 100%;height:50px;
    }
  }
  .warper{margin:0 auto;min-width: 1000px; max-width: 1400px; height: 100%;}
  .logo{
    width: 210px;
    text-align:center;
    img{height: 50px;}
  }
  .project{
    height: 50px;line-height: 50px;padding:0 10px;font-size: 16px;color: #fff;cursor: pointer;
    span{padding: 0 10px;display: inline-block;}
    .dk_options{left: 120px;}
  }
  .dk_options{
    z-index: 2;
    background: #fff;
    width: 260px;
    border:1px solid #f0f0f0;
    box-shadow: 1px 2px 2px #f0f0f0;
    ul{padding: 0;margin: 0;}
    li{list-style: none;padding: 0 0 0 10px;margin: 0;}
    li:hover{background: #f2f2f2;}
    img{width: 30px;height: 30px;vertical-align: middle;padding-right: 10px;}
    a{color: #333;text-decoration:none;}
  }
  .username-warp{
    color: #fff;line-height: 50px;
    .dk_options{right:0;width: 200px;}
    span{display: inline-block;padding:0 8px;}
  }

  .main {
      display: flex;
      aside {
        flex:0 0 210px;
        width: 210px;
      }
      .menu-expanded{
        width: 210px;
        height: 100%;
        background:#fff;
        position: fixed;
        top:50px;
        z-index: 2;
      }
      .sider-box{
         width: 210px;
         flex:0 0 210px;
      }
      .content-container {
        margin: 70px 0 20px 20px;
        flex:1;
        overflow-x: auto;
        
      }
    }
    .loadbox{
      padding: 10px 0;text-align: center;
      border-bottom: 1px solid #f0f0f0;
      img{width: 90px;height: 90px;}
    }
    .el-menu{background: none;}
    .el-menu-item, .el-submenu__title{height: 48px;line-height:48px;}
    .el-menu-item:hover{background: #f0f0f0;}
    .is-active{background: #f0f0f0;position: relative;}
    .is-active:after{content: '';position: absolute;left: 0;width: 3px;height: 100%;background:#00aeef;}
    .is-active:before{
      content: '';position: absolute;right: 0; top:16px; width: 10px;height: 10px;border:1px solid #00aeef; border-top:1px transparent dashed;border-right:1px transparent dashed;
      -ms-transform:rotate(45deg);  
      -moz-transform:rotate(45deg); 
      -webkit-transform:rotate(45deg); 
      -o-transform:rotate(45deg);  
    }
    .breadcrumb-container{font-size: 16px;}
    .btn-box{text-align: right;}
</style>