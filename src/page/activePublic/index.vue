<template>
	<div>
		<div class="projectInfoCount"  >
	        <div class="pd12">
	            <ul class="bugNum clearfix">
		            <li >
			            <div class="cell " :class="{all:infoNmb.totalNumber > 0}" >
				            <em class="info">总数 {{ffff}} </em>
				            <span>{{infoNmb.totalNumber}}</span>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{open:infoNmb.notSolved > 0}" >
			            	<em class="danger">未解决</em><span>{{infoNmb.notSolved}}</span>
			            </div>
		            </li>
		            <li>
			            <div class="cell " :class="{fixed:infoNmb.toAudit > 0}">
			            	<em class="warning">待审核</em><span>{{infoNmb.toAudit}}</span>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{rejected:infoNmb.hasRefused > 0}" >
			            	<em class="success">已拒绝</em><span>{{infoNmb.hasRefused}}</span>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{resolved:infoNmb.totalNumber > 0}">
			            	<em class="success">已解决</em><span>{{infoNmb.totalNumber}}</span>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{postponed:infoNmb.totalNumber > 0}">
			            	<em class="success">已延期</em><span>{{infoNmb.totalNumber}}</span>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{closed:infoNmb.totalNumber > 0}">
			           		<em class="success">已关闭</em><span>{{infoNmb.totalNumber}}</span>
			            </div>
		            </li>
	            </ul>
	        </div>
	        <div class=" clearfix">
	            <ul class="priorityCount clearfix" >
	                <li id="projectHealth" class="projectHealth">
		                <div class="cell projectHealth4">
			                <em class="info">健康指数</em><span>{{infoNmb.health}}</span>
			                <p><i class="fa fa-tachometer"></i></p>
		                </div>
	                </li>
	                <li style="width: 42.857142857142%;vertical-align: top;">
	                    <ul  class="bugTypeCount clearfix">
		                    <li>
			                    <div class="cell " :class="{open:infoNmb.totalNumber > 0}">
			                    	<span class="label " ><em>缺陷</em><span>{{infoNmb.totalNumber}}</span></span>
			                    </div>
		                    </li>
		                    <li >
			                    <div class="cell " :class="{fixed:infoNmb.totalNumber > 0}">
			                    	<span class="label" >
			                    		<em>任务</em><span>{{infoNmb.totalNumber}}</span>
			                    	</span>
			                    </div>
		                    </li>
		                    <li >
			                    <div class="cell " :class="{labelprimary:infoNmb.totalNumber > 0}">
				                    <span class="label " >
				                    	<em>需求</em> <span>{{infoNmb.totalNumber}}</span>
				                    </span>
			                    </div>
		                    </li>
	                    </ul>
	                    <ul  class="bugPriorityCount">
		                    <li >
			                    <div class="cell " :class="{open:infoNmb.totalNumber > 0}">
			                    	<span class="label " >急 {{infoNmb.totalNumber}}</span>
			                    </div>
		                    </li>
		                    <li >
			                    <div class="cell " :class="{fixed:infoNmb.totalNumber > 0}">
			                    	<span class="label " >高 {{infoNmb.totalNumber}}</span>
			                    </div>
		                    </li>
		                    <li>
			                    <div class="cell " :class="{labelprimary:infoNmb.totalNumber > 0}">
			                    	<span class="label ">中 {{infoNmb.totalNumber}}</span>
			                    </div>
		                    </li>
		                    <li >
			                    <div class="cell " :class="{labelinfo:infoNmb.totalNumber > 0}">
			                    	<span class="label " >低 {{infoNmb.totalNumber}}</span>
			                    </div>
		                    </li>
	                    </ul>
	                </li>
	                <li >
		                <div class="projectDayNum " :class="{gry:infoNmb.totalNumber < 1}">
			                <em class="info">项目运行</em><span>{{infoNmb.totalNumber}} 天</span>
			                <p><i class="fa fa-rocket"></i></p>
		                </div>
	                </li>
	                <li >
		                <div class="projectUserNum" :class="{gry:infoNmb.totalNumber <1}">
			                <em class="info">项目成员</em><span>{{infoNmb.totalNumber}}</span>
			                <p><i class="fa fa-users"></i></p>
		                </div>
	                </li>
	                <li >
		                <div class="projectProductNum" :class="{gry:infoNmb.totalNumber <1}">
			                <em class="info">项目产品</em><span>{{infoNmb.totalNumber}}</span>
			                <p><i class="fa fa-coffee"></i></p>
		                </div>
	                </li>
	            </ul>
	        </div>
	        <div class="pd34 clearfix" style="padding-top: 1px">
	            <ul class="bugNum bugPlanNum">
		            <li >
			            <div class="cell " :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="Today">今天</span><em class="em-Today">{{infoNmb.today}}</em>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="Expired">已过期</span><em class="em-Expired">{{infoNmb.overdue}}</em>
			            </div>
		            </li>
		            <li >
			            <div class="cell" :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="TodayExit">今天结束</span><em class="em-TodayExit">{{infoNmb.todayEnd}}</em>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="TodayStart">今天开始</span><em class="em-TodayStart">{{infoNmb.start}}</em>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="Tomorrow">明天</span><em class="em-Tomorrow">{{infoNmb.tomorrow}}</em>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="Week">本周</span><em class="em-Week">{{infoNmb.week}}</em>
			            </div>
		            </li>
		            <li >
			            <div class="cell " :class="{PlanNumClass:infoNmb.totalNumber <1}">
			            	<span class="WeekExit">本周结束</span><em class="em-WeekExit">{{infoNmb.weekEnd}}</em>
			            </div>
		            </li>
	            </ul>
	        </div>
	    </div>
		<el-row>
		  <el-col :span="12">
		 	 <div class="grid-content bg-purple-dark">
		 	 	<div class="pTable">
	                <div class="pTable-title pInfo">
	                    <h5><i class="fa fa-flash yellow"></i> <span>最新问题</span><span class="more">更多</span></h5>
	                </div>
	                <div class="pTable-content project-latest-bug" >
	                    <div class="table table-hover bugTable">
		                    <div class="last-bugs" v-for="(item,index) in projectList">
			                    #{{index+1}}
			                    <span class="defaultColor" alt="产品" title="产品"></span>
			                    {{item.projectName}} 
			                    <p class="pd12">
				                    <span class="label label-warning" v-if="item.pross=='缺陷'" >缺陷</span>
				                    <span class="label label-primary" v-if="item.pross=='任务'" >任务</span>
				                    <span class="label label-danger" v-if="item.pross=='需求'" >需求</span>

				                    <span class="label label-danger" v-if="item.programme=='未解决'" >未解决</span>
				                    <span class="label label-sucse" v-if="item.programme=='已解决'" >已解决</span>
				                    <span class="label label-danger" v-if="item.programme=='待审核'" >待审核</span>
				                    <span class="label label-danger" v-if="item.programme=='已拒绝'" >已拒绝</span>
				                    <span class="label label-sucse" v-if="item.programme=='已关闭'" >已关闭</span>

				                    <span class="label label-sucse" v-if="item.priority=='1'" >低</span>
				                    <span class="label label-primary" v-if="item.priority=='2'" >中</span>
				                    <span class="label label-danger" v-if="item.priority=='3'" >高</span>
				                    <span class="label label-warning" v-if="item.priority=='4'" >急</span>

				                    <span class="fr">{{item.time}}</span>
			                    </p>
		                    </div>
	                    </div>
	                </div>
            	</div>
		 	 </div>
		  </el-col>
		  <el-col :span="12">
		 	 <div class="grid-content bg-purple-dark">
		 	 	<div class="pTable">
	                <div class="pTable-title pInfo">
	                    <h5><i class="fa fa-flash yellow"></i> <span>最新问题</span><span class="more">更多</span></h5>
	                </div>
	                <div class="pTable-content project-latest-bug" >
	                    <div class="table table-hover bugTable">
		                    <div class="last-bugs">
			                    #5 
			                    <span class="defaultColor" alt="产品" title="产品"></span>
			                    5555555555555 
			                    <p class="pd12">
				                    <span class="label label-warning">缺陷</span>
				                    <span class="label label-warning">未解决</span>
				                    <span class="label label-primary">中</span>
				                    <span class="fr">3小时前</span>
			                    </p>
		                    </div>
		                    <div class="last-bugs">
			                    #4 
			                    <span class="defaultColor" alt="产品" title="产品"></span>
			                    4444444444444 
			                    <p class="pd12">
				                    <span class="label label-warning" >缺陷</span>
				                    <span class="label label-warning">未解决</span>
				                    <span class="label label-primary">中</span>
				                    <span class="fr">3小时前</span>
			                    </p>
		                    </div>
		                    <div class="last-bugs">
			                    #3 
			                    <span class="defaultColor" alt="产品" title="产品"></span>
			                    33333333333333333
			                    <p class="pd12">
				                    <span class="label label-warning" >缺陷</span>
				                    <span class="label label-warning">待审核</span>
				                    <span class="label label-primary">中</span>
				                    <span class="fr">3小时前</span>
			                    </p>
		                    </div>
		                    <div class="last-bugs" >
			                    #2 
			                    <span class="defaultColor" alt="产品" title="产品"></span>
			                    2222222222
			                    <p class="pd12">
				                    <span class="label label-warning">缺陷</span>
				                    <span class="label label-warning">未解决</span>
				                    <span class="label label-primary">中</span>
				                    <span class="fr">3小时前</span>
			                    </p>
		                    </div>
		                    <div class="last-bugs" >
			                    #1 
			                    <span class="defaultColor" alt="产品" title="产品"></span>
			                    aaaaaaaaaaaaaaaaaaa 
			                    <p class="pd12">
				                    <span class="label label-warning" >缺陷</span> 
				                    <span class="label label-warning">未解决</span> 
				                    <span class="label label-primary">中</span> 
				                    <span class="fr">3小时前</span>
			                    </p>
		                    </div>
	                    </div>
	                  
	                </div>
            	</div>
		 	 </div>
		  </el-col>
		</el-row>

    </div>
</template>

<script >
	import { requestgetTalNumber,requestgetprojectList } from '../../api/api';
	export default {
		data() {
			return {

				infoNmb:{
		            totalNumber:0,
		            notSolved:0,
		            toAudit:0,
		            hasRefused:0,
		            resolved:0,
		            beenPostponed:0,
		            closed:0,
		            defects:0,
		            task:0,
		            demand:0,
		            urgent:0,
		            high:0,
		            middle:0,
		            low:0,
		            projectRunning:0,
		            members:0,
		            product:0,
		            health:100,
		            today:0,
		            overdue:0,
		            todayEnd:0,
		            start:0,
		            tomorrow:0,
		            week:0,
		            weekEnd:0
		        },

		        projectList:[]

			}
		},

		computed: {

	        ffff () {
	            return this.$store.state.count  
	        }
	    },
		
		mounted() {
			this.$nextTick(function () {
	         this.getTalNumber();
	         this.getprojectList();
	        })
		},
		methods: {

			add(e){
		      this.$emit('listone','11')
		          // this.$refs.child1.$emit('click-child', "high");
		          //this.$refs.activePublic.getTalNumber("ssss");
		     },
			
			// 获取某个项目总数信息{根据项目名拉取}
	      	getTalNumber(){
	      		var projectName = JSON.parse(localStorage.getItem('projectName')); 
	          	var parmas = projectName;

	          	this.$store.commit('changeLoading');
	          	requestgetTalNumber(parmas).then(data=>{

	            	this.infoNmb = data.data.TalNumber;
	            	
	             	this.$store.commit('changeLoading');
	              	//this.infoNmb = data
	          	});
	          
	      	},

	      	getprojectList(){
	      		var projectName = JSON.parse(localStorage.getItem('projectName')); 
	          	var parmas = projectName;

	          	
	          	requestgetprojectList(parmas).then(data=>{
	          		console.log(data.data.projectList);
	            	this.projectList = data.data.projectList;
	            	
	             	//this.$store.commit('changeLoading');
	              	
	          	});
	          
	      	},

		},
		
	}

</script>


<style scoped lang="scss">

.el-menu{background: none;}
.fr{float: right;}
.fl{float: left;}
.pd12{padding-top: 10px;}
.label-primary{background-color: #337ab7;font-size: 12px;color:#fff;padding: 0 6px;}
.label-danger{background-color: #f0ad4e;font-size: 12px;color:#fff;padding: 0 6px;}
.label-warning{background-color: #d9534f;font-size: 12px;color:#fff;padding: 0 6px;}
.label-sucse{background-color: #5cb85c;font-size: 12px;color:#fff;padding: 0 6px;}

.clearfix:after{clear: both;content: '';display: block;}
.priorityCount,.bugTypeCount,.bugPriorityCount {
    padding-left: 0;
}
.priorityCount p,.bugTypeCount p,.bugPriorityCount p{margin: 0;}
.urgentMoreBtn,.latestMoreBtn {
    cursor: pointer;
    padding: 2px 8px 3px 8px;
    font-style: normal;
    background: #00aeef;
    color: #fff;
}
ul.bugNum{padding-left: 0;margin:0;}
ul.bugNum li {
    float: left;
    width: 14.285714285714%;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    position: relative;
    z-index: 1;
    list-style: none;
}
ul.bugNum li .cell {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
}
ul.bugNum li .cell{background:#a2a2a2}
ul.bugPlanNum li .Today ,
ul.bugNum li .all {
    background: #00aeef;
}
ul.bugPlanNum li .Expired ,
ul.bugNum li .open {
    background: #d9534f;
}
ul.bugPlanNum li .TodayExit ,
ul.bugNum li .fixed {
    background: #f0ad4e;
}
ul.bugNum li .resolved {
    background: #5cb85c;
}
ul.bugNum li .rejected {
    background: #f0ad4e;
}
ul.bugNum li .postponed {
    background: #5cb85c;
}
ul.bugNum li .closed {
    background: #5cb85c;
}
ul.bugNum li span {
    font-size: 22px;
    vertical-align: middle;
}
ul.bugPlanNum li span {
    font-size: 100%;
}
ul.bugNum li .cell:hover {
    box-shadow: 0 4px 23px 5px rgba(0,0,0,.2),0 2px 6px rgba(0,0,0,.15);
    z-index: 2;
}
ul.bugNum li em {
    font-style: normal;
    font-size: 18px;
    vertical-align: middle;
    padding-top: 3px;
    display: block;
}
ul.priorityCount {font-size: 0px;padding-top: 1px;width: 100%;}
ul.priorityCount li {
    display: inline-block;
    float: left;
    font-size: 16px;
    cursor: pointer;
    width: 14.285714285714%;
    text-align: center;
    color: #FFFFFF;
    position: relative;
}
ul.priorityCount #projectHealthZhishu {
    width: 100%;
}
ul.priorityCount li#projectHealth {
    vertical-align: top;
}
ul.priorityCount li#projectHealth .cell {
    height: 106px;
    margin: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    cursor: pointer;
}
ul.priorityCount li .projectHealth1,
ul.priorityCount li .projectHealth2,
ul.priorityCount li .projectHealth3,
ul.priorityCount li .projectHealth4,
ul.priorityCount li .projectHealth5 {
    background: #5bc0de;
    height: 73px;
    cursor: auto;
}
ul.bugPlanNum li .TodayStart ,
ul.priorityCount li .projectHealth3 {
    background: #337ab7;
}
ul.bugPlanNum li .Tomorrow,
ul.bugPlanNum li .Week,
ul.bugPlanNum li .WeekExit,
ul.priorityCount li .projectHealth5 {
    background: #5cb85c;
}
ul.priorityCount li .projectHealth2 {
    background: #f0ad4e;
}
ul.priorityCount li .projectHealth1 {
    background: #bb3936;
}
ul.bugPlanNum li .Tomorrow,
ul.bugPlanNum li .Week,
ul.bugPlanNum li .WeekExit {
    background-color: #5bc0de;
}
ul.priorityCount li .projectDayNum,
ul.priorityCount li .projectProductNum,
ul.priorityCount li .projectUserNum {
    background: #00aeef;
    height: 106px;
    margin: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius:5px;
}
ul.priorityCount li .gry{ background: #a2a2a2;}
ul.priorityCount li .projectDayNum span,
ul.priorityCount li .projectProductNum span,
ul.priorityCount li .projectUserNum span {
    font-size: 24px;
    padding: 10px 0px 5px 0px;
}
ul.priorityCount li em {
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
}
ul.priorityCount li span {
    font-size: 100%;
    display: block;
    padding: 8px 0px;
    font-weight: normal;
    border-radius: 5px;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
}
ul.priorityCount li ul li {
    width: 25%;
    position: relative;
    z-index: 1;
}
ul.priorityCount li ul li .cell {
    margin: 5px 5px 0 5px;
}
ul.priorityCount li#projectHealth .cell:hover,
ul.priorityCount li .projectDayNum:hover,
ul.priorityCount li .projectProductNum:hover,
ul.priorityCount li .projectUserNum:hover,
ul.priorityCount li ul li span.label:hover {
    box-shadow: 0 4px 23px 5px rgba(0,0,0,.2),0 2px 6px rgba(0,0,0,.15);
    z-index: 2;
}
ul.priorityCount li ul#priorityCount {
    padding-top: 1px;
}
ul.priorityCount li#projectHealth span {
    font-size: 24px;
    padding: 10px 0px 5px 0px;
}
ul.priorityCount li ul.bugTypeCount li {
    width: 33.33333333333333333333%;
}
ul.priorityCount ul.bugTypeCount .cell span.label {
    padding: 0;

}
ul.bugTypeCount .cell span.label{background: #a2a2a2}
ul.bugPriorityCount .cell span.label{background: #a2a2a2}

ul.bugTypeCount li .open span.label,
ul.bugPriorityCount li .open span.label{
    background: #d9534f;
}
ul.bugTypeCount li .fixed span.label,
ul.bugPriorityCount li .fixed span.label{
    background: #f0ad4e;
}
ul.bugTypeCount li .labelprimary span.label,
ul.bugPriorityCount li .labelprimary span.label{
    background: #337ab7;
}
ul.bugPriorityCount li .labelinfo span.label{
    background: #5bc0de;
}

ul.priorityCount li#projectHealth .cell em,
ul.priorityCount li .projectDayNum em,
ul.priorityCount li .projectProductNum em,
ul.priorityCount li .projectUserNum em,
ul.priorityCount ul.bugTypeCount li span.label em {
    display: block;
    padding: 5px 0;
    background: rgba(255,255,255,.2);
    border-radius: 5px 5px 0px 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    -o-border-radius: 5px 5px 0px 0px;
}
ul.priorityCount ul.bugTypeCount li span.label span {
    font-size: 18px;
}
ul.priorityCount ul.bugPriorityCount {
    margin: 5px;
}
ul.priorityCount ul.bugPriorityCount .cell {
    margin: 0px;
}
ul.priorityCount ul.bugPriorityCount .cell span {
    border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
}
ul.priorityCount ul.bugPriorityCount li:first-child span {
     border-radius: 5px 0 0 5px;
    -moz-border-radius: 5px 0 0 5px;
    -webkit-border-radius: 5px 0 0 5px;
}
ul.priorityCount ul.bugPriorityCount li:last-child span {
     border-radius: 0 5px 5px 0;
    -moz-border-radius: 0 5px 5px 0;
    -webkit-border-radius: 0 5px 5px 0;
}
ul.bugPlanNum li em {
    float: none;
}
ul.bugPlanNum li .cell {
    padding: 0px;
    text-align: center;
}
ul.bugPlanNum li .cell span {
    display: block;
    padding: 5px 0;
    border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
}
ul.bugPlanNum li .cell em {
    display: block;
    background: #f9f9f9;
    padding: 10px 0;
}
ul.bugPlanNum li .cell .em-Today {
    color: #3190d0;
    border:solid 1px #3190d0;
    border-top: none;
}
ul.bugPlanNum li .cell .em-Expired {
    color: #d9534f;
    border: solid 1px #d9534f;
    border-top: none;
}
ul.bugPlanNum li .cell .em-TodayExit {
    color: #f0ad4e;
    border:solid 1px #f0ad4e;
    border-top: none;
}
ul.bugPlanNum li .cell .em-TodayStart {
    color: #337ab7;
    border:solid 1px #337ab7;
    border-top: none;
}
ul.bugPlanNum li .cell .em-Tomorrow, 
ul.bugPlanNum li .cell .em-Week,
ul.bugPlanNum li .cell .em-WeekExit {
    color: #5bc0de;
    border:solid 1px #5bc0de;
    border-top: none;
}
ul.bugPlanNum li .PlanNumClass span {
    background: #a2a2a2 !important;
}
ul.bugPlanNum li .PlanNumClass em {
    border-color: #a2a2a2 !important;
    color: #a2a2a2 !important;
}

.project-latest-bug,
.project-urgent-bug {
    padding: 0px 0px 20px 0px;
    margin-top: 0px;
}
.project-latest-bug .table>tbody>tr>td,
.project-urgent-bug .table>tbody>tr>td {
    padding: 15px 20px;
}

.projectProductList .pVersion,
.projectProductList .pModule {
    color: #00aeef;
    font-size: 12px;
}
.projectProductList .pModule {
    display: inline-block;
    margin-right: 10px;
}



/***/ 
.pTable {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
}
.pTable:after,
.pTable:before {
    display: table;
}
.pTable-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #f0f0f0;
    height: 48px;
    padding: 14px 0px 7px 0px;
}
.pInfo {
    padding: 5px 0px 0px;
}
.pTable-title h5 {
    display: inline-block;
    font-size: 14px;
    margin: 0 0 7px;
    padding: 0;
    text-overflow: ellipsis;
    float: left;
    padding-top: 8px;
}
.pTable-title h5 i {
    font-size: 18px;
}
.pTable-title h5 .more {
    cursor: pointer;
    color: #00aeef;
    font-weight: normal;
}
.pTable-title h5 .more:hover {
    font-weight: 600;
}
.pTable-content {
    padding: 0 20px 20px 0;
    margin-top: 5px;
}
.dataTables_wrapper > div:first-child{
    background: none;
    display: none;
}
.project-urgent-bug .last-notices,
.project-latest-bug .last-bugs {
    padding: 15px 20px;
    background: #fff;
    margin-bottom: 10px;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}
.project-latest-bug .last-bugs p{margin: 0;}
.project-urgent-bug .last-notices:hover,
.project-urgent-bug .last-notices.hover,
.project-latest-bug .last-bugs:hover,
.project-latest-bug .last-bugs.hover {
    background: #f5f5f5;
    box-shadow: 0 4px 23px 5px rgba(0,0,0,.2),0 2px 6px rgba(0,0,0,.15);
}
.project-urgent-bug .last-notices span.label,
.project-latest-bug .last-bugs span.label {
    font-weight: normal;
    display: inline-block;
}


</style>