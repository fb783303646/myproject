import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { 
  LoginUsers, 
  Users, 
  project ,
  TalNumber,
  projectList
} from './data/user';
let _Users = Users;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {username, password} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let result = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              result = JSON.parse(JSON.stringify(u));
              result.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', result }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/selectProject').reply(config => {
      let {name} = config.params;//接收请求过来的参数

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{project}]);
        }, 1000);
      });
    });

     //获取总数
    mock.onGet('/numerical').reply(config => {
      //let {name} = config.params;//接收请求过来的参数

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{TalNumber}]);
        }, 1000);
      });
    });


     //获取bug列表
    mock.onGet('/projectList').reply(config => {
      //let {name} = config.params;//接收请求过来的参数

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{projectList}]);
        }, 1000);
      });
    });

  }
};