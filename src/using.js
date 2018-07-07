/**
 * This file outlines the ModuleRequireInterface class that's
 * called everytime the using function is called
 * anywhere from a project
 */

const constants = require('./utils/constants')
const { getNodeCompliantPath } = require('./utils/paths')

function ModuleRequireInterface(moduleName) {
  this._requiredModule = null
  this.show = showSubModules
  this.hide = hideSubModules

  if (!moduleName) throw Error("No module name provided.")

  let modulePath = getNodeCompliantPath(process.cwd() + '/' + moduleName)
  
  this._requiredModule = require(modulePath)
  // try {
  // } catch (e) {
  //   console.log("module '" + moduleName + "' not found.")
  // }
}

ModuleRequireInterface.prototype = Object.create(null)

function showSubModules(...submodules) {
  let self = this
  let revealedModules = []

  submodules.map((value) => {
    revealedModules.push(self._requiredModule[value])
  })

  return revealedModules
}

function hideSubModules(...submodules) {
  let self = this

  submodules.map((value) => {
    delete self._requiredModule[value]
  })

  return self._requiredModule
}

module.exports = (...moduleNames) => {
  if (moduleNames.length > 1) {
    let arrayModulesTemp = []

    moduleNames.map((name) => arrayModulesTemp.push(new ModuleRequireInterface(name)))

    return {
      show(...submodules) {
        let revealedModules = []

        arrayModulesTemp.map((self) => {
          submodules.map((value) => {
            if (typeof self._requiredModule[value] !== 'undefined')
              revealedModules.push(self._requiredModule[value])
          })
        })

        return revealedModules
      },
      
      hide(...submodules) {
        arrayModulesTemp.map((self) => {
          submodules.map((self) => {
            delete self._requiredModule[value]
          })
        })

        return arrayModulesTemp
      }
    }
  }

  return new ModuleRequireInterface(moduleNames[0])
}