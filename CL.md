```
e
|
|
|create/c/-c/make:
|        |html/h/-h:
|        |  |(filename):
|        |       |If no file exists at filename, create a file with the basic structure of a HTML Document
|        |       |override/overwrite/o/-o/force: Even if a file exists at filename, create a file with the basic structure of a HTML Document
|        |
|        |file/f/-f:
|        |  |(filename):
|        |        |Will create a file at the given filename
|        |        |
|        |        |html/h/-h: Same as calling 'create html (filename)'
|        |        |
|        |        |override/overwrite/o/-o/force:
|        |                        |Even if a file exists at filename, the file will be overwritten to be empty
|        |                        |html/h/-h: Exactly the same as calling 'create html (filename) override
|        |
|        |dir/directory/d/-d/folder:
|        |  |(directory name):
|        |        |Will create a directory at the given path
|        |        |
|        |        |override/overwrite/o/-o/force:
|        |                        |Even if a directory exists at filename, the directory will be overwritten to be empty
|        |
|
|empty:
|  |(path):
|     |


```