import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 10; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

const project = [];

for(let i = 0; i < 5; i++){
  project.push( Mock.mock({
    id: Mock.Random.guid(),
    projectName: Mock.Random.ctitle(),
  }) )
}

const TalNumber = Mock.mock({
    "totalNumber|1-10": 10,
    "notSolved|0-10": 10,
    "toAudit|0-10":10,
    "hasRefused|0-10":10,
    "resolved|0-10":10,
    "beenPostponed|0-10":10,
    "closed|0-10":10,
    "defects|0-10":10,
    "task|0-10":10,
    "demand|0-10":10,
    "urgent|0-10":10,
    "high|0-10":10,
    "middle|0-10":10,
    "low|0-10":10,
    "projectRunning|0-10":10,
    "members|0-10":10,
    "product|0-10":10,
    "health|0-10":10,
    "today|0-10":10,
    "overdue|0-10":10,
    "todayEnd|0-10":10,
    "start|0-10":10,
    "tomorrow|0-10":10, 
    "week|0-10":10,
    "weekEnd|0-10":10,
})

const projectList = [];


for(let i = 0; i <10; i++){
  projectList.push( Mock.mock({

    id: Mock.Random.guid(),
    projectName: Mock.Random.ctitle(),
    time:Mock.Random.date('yy-MM-dd'),
    pross:Mock.Random.pick(['缺陷', '任务', '需求']),
    programme:Mock.Random.pick(['已解决', '未解决', '待审核','已拒绝', '已关闭']),
    priority:Mock.Random.pick(['1', '2', '3', '4']),


  }) )
}


export { 
    LoginUsers,
     Users ,
     project,
     TalNumber,
     projectList
 };
