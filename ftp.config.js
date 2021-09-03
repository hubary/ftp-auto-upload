/**
 * @Author   hubary
 * @Email    hubary@qq.com
 * @配置多台机器
 **/
module.exports = [
  // {
  //   name: 'project-1-xxx', // 项目1
  //   ssh: {
  //     host: '10.114.14.65',
  //     port: 22,
  //     username: 'test',
  //     password: '123456',
  //   },
  //   romotePath: '/home/front/dist', // 远程地址
  //   localPath: './dist', // 本地地址
  //   rootDir: 'dist',
  //   isTest: true, // 是否开启测试模式
  // },
  // {
  //   name: 'project-2-xxx', // 项目2
  //   ssh: {
  //     host: '10.114.14.110',
  //     port: 22,
  //     username: 'test',
  //     password: '123456',
  //   },
  //   romotePath: '/home/front/dist', // 远程地址
  //   localPath: './dist', // 本地地址
  //   rootDir: 'dist',
  //   isTest: true, // 是否开启测试模式
  // },
  {
    name: '租户管理-10.114.14.65-nginx', // 项目/服务器名称
    ssh: {
      host: '10.114.14.65',
      port: 22,
      username: 'esb',
      password: 'Esb#2021',
    },
    romotePath: '/home/esb/front/dist-tenant2', // 远程地址
    localPath: './dist-tenant2', // 本地地址
    rootDir: 'dist-tenant2',
    isTest: false,
  },
];
