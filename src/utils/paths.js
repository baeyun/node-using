const { configFilePath, specialChars } = require('./constants')

const getPathVariables = () => {
  const { paths } = require(process.cwd() + '/' + configFilePath)

  return paths
}

const replacePathVariables = (path, vars) => {
  for (let v in vars)
    if (vars.hasOwnProperty(v))
      if (path.indexOf(v) > -1)
        // Replace once
        path = path.replace(v, vars[v])
  
  return path
}

const cleanse = (uncleansed) => {
  let cleansed = uncleansed.trim().toLowerCase()
  let paths = getPathVariables()

  cleansed = replacePathVariables(uncleansed, paths)

  // console.log(cleansed)

  return cleansed
}

module.exports = {
  getNodeCompliantPath(dirtyPath) {
    return cleanse(dirtyPath)
  }
}