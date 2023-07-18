// 函数：提供更多配置选择
const path = require('path');
const fs = require('fs')

const diffDirAndFile = (dirFileArr = []) => {
  const result = {
    dirs: [],
    files: []
  }
  dirFileArr.forEach(name => {
    const currentFileStat = fs.statSync()
    
  })
  return result
}

const getTotalSrcDir = ()=>{
  const result = fs.readdirSync(path.resolve(__dirname,'../src'))

}

export default () => {
  return {
    // config返回一个对象，是部分的viteConfigJS配置
    config(config, env) {
      // console.log("config\n", config);
      // console.log("env\n", env);
      const res = fs.readdirSync(path.resolve(__dirname, '../src'))
      console.log(res);
      return {
        resolve: {
           
        }
      }
    }
  }
}
