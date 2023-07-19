// 函数：提供更多配置选择
const path = require('path');
const fs = require('fs')

const diffDirAndFile = (dirFileArr = [], basePath = '') => {
  const result = {
    dirs: [],
    files: []
  }
  dirFileArr.forEach(name => {
    const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name));
    // console.log("current file stat: ", name, currentFileStat.isDirectory());
    currentFileStat.isDirectory() ? result.dirs.push(name) : result.files.push(name)
  })
  return result
}

const getTotalSrcDir = (prefix) => {
  const result = fs.readdirSync(path.resolve(__dirname,'../src'))
  const diffResult = diffDirAndFile(result, '../src')
  const resolveAliasesConfig = {}
  diffResult.dirs.forEach(name => {
    resolveAliasesConfig[`${prefix}/${name}`] = path.resolve(__dirname,'../src' + '/' + name)
  })
  return resolveAliasesConfig
}

const ViteAliases = ({
  prefix = '@'
} = {}) => {
  return {
    config(config, env) {
      const resolveAliasesConfig = getTotalSrcDir(prefix)
      return {
        resolve: {
          alias: resolveAliasesConfig 
        }
      }
    }
  }
}

module.exports = {
  ViteAliases
}
