<template>
	 <header class="header" @click="getdata()" >
        <el-row>
            <el-col :span="24"  >
              <el-menu default-active="5" class="el-menu-demo" mode="horizontal" >
                <el-menu-item index="4" style="color:red"  >{{nmvb}}</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>

    </header>

</template>
<script >
	
export default {
	data(){
		return {
			nmvb:'ccccc'	
		}
	},
	methods:{

		getdata(){
			console.log(33333);
			this.$emit('listtwo',"222") 
		}	

	}
}

</script>