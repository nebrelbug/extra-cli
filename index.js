#! /usr/bin/env node

const fse = require('fs-extra')
var colors = require('colors')

var basicHTML =
  `
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
  </body>
</html>
`

console.log(colors.green('This is extra-cli speaking...'))
console.log(colors.green('Press ^C at any time to quit'))
console.log(colors.green("For help, type 'e help'"))
console.log(colors.green("For info, type 'e info'"))
function lowerCaseArg (arg) {
  if (arg !== undefined) {
    return arg.toLowerCase()
  }
}
var argOne = lowerCaseArg(process.argv[2])
var argTwo = lowerCaseArg(process.argv[3])
var argThree = lowerCaseArg(process.argv[4])
var argFour = lowerCaseArg(process.argv[5])
var argFive = lowerCaseArg(process.argv[6])
var argSix = lowerCaseArg(process.argv[7])
console.log(argOne + ',' + argTwo + ',' + argThree + ',' + argFour + ',' + argFive + ',' + argSix)

if (argOne === 'create' || argOne === 'c' || argOne === '-c' || argOne === 'make') {
  /* argTwo = file or directory, argThree = path, argFour = overwrite, argFive = default */
  console.log('Intent: create file')
  if (argTwo !== undefined) {
    var path = process.cwd() + '/' + argThree
    /* ARGTWO FOLDER */
    if (argTwo === 'directory' || argTwo === 'folder' || argTwo === 'd' || argTwo === '-d' || argTwo === 'dir') {
      if (argThree !== undefined) {
        if (argFour === undefined) { /* if no overwrite, create dir if it doesn't exist */
          fse.ensureDir(path)
            .then(() => {
              console.log(colors.green('success!'))
            })
            .catch(err => {
              console.error(colors.red(err))
            })
        } /* end of if argFour = undefined */
        if (argFour === 'overwrite' || argFour === 'o' || argFour === '-o' || argFour === 'override' || argFour === 'force') {
          fse.emptyDir(path)
            .then(() => {
              console.log(colors.green('success!'))
            })
            .catch(err => {
              console.error(colors.red(err))
            })
        } /* end of if argFour === overwrite */
      } /* end of if argThree !== undefined */
    } else if (argTwo === 'f' || argTwo === 'file' || argTwo === '-f') { /* END ARGTWO FOLDER BEGIN ARGTWO FILE */
      if (argThree !== undefined) {
        if (argFour === undefined) { /* if no overwrite, create file if it doesn't exist */
          fse.ensureFile(path)
            .then(() => {
              console.log(colors.green('success!'))
            })
            .catch(err => {
              console.error(colors.red(err))
            })
        } /* end of if argFour = undefined */
        if (argFour === 'overwrite' || argFour === 'o' || argFour === '-o' || argFour === 'override' || argFour === 'force') {
          if (argFive === undefined) {
            fse.outputFile(path, '')
              .then(() => fse.readFile(path, 'utf8'))
              .then(data => {
                console.log('File created with content: ' + data) // => hello!
              })
              .catch(err => {
                console.error(colors.red(err))
              })
          } /* end of if argFive = undefined */
          if (argFive === 'html' || argFive === 'h' || argFive === '-h') {
            fse.outputFile(path, basicHTML)
              .then(() => fse.readFile(path, 'utf8'))
              .then(data => {
                console.log('File created with content: ' + data) // => hello!
              })
              .catch(err => {
                console.error(colors.red(err))
              })
          } /* end of if argFive = html */
        } /* end of if argFour === overwrite */
      } /* end of if argThree !== undefined */
    } else { /* END ARGTWO FILE */
      console.log(colors.red('Please enter a valid second argument'))
      process.exit()
    }
  } else {
    console.log(colors.red('Please pass a valid second argument'))
    process.exit()
  }
} /* End of if argOne === create */
