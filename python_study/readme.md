# tips
- 块需要缩进
- 没有大括号 ，用冒号代替(:)
- 使用关键字时不需要括号，如`(if a > 10 : )`
- 还能混搭= = 如（`[x * x for x in range(1,11)]=>[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`
- 也有生成器`generator`，这个特点和`js`的很像，调用的时候也时使用next(),不过有替代循环方法，使用`for in`来调用
- 高阶函数

## 标识符
- 在 Python 里，标识符由字母、数字、下划线组成。
- 在 Python 中，所有标识符可以包括英文、数字以及下划线(`_`)，但不能以数字开头。
- Python 中的标识符是区分大小写的。
- 以下划线开头的标识符是有特殊意义的。以单下划线开头 `_foo` 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 `from xxx import *` 而导入；

- 以双下划线开头的 `__foo` 代表类的私有成员；以双下划线开头和结尾的 `__foo__` 代表 Python 里特殊方法专用的标识，如 `__init__()` 代表类的构造函数。

------------------

# tutorial record

### install
- `brew install python3`
- mac 默认安装了Python2，而且使用brew安装之后还会自动帮忙`link`到`/usr/local/bin`里，所以命令行使用的时候可以直接`python3`,退出时`exit()`

### excute
- 命令行执行，输入`python3`进入，敲代码
- 写`xxx.py`文件，`python3 xxx.py`
- 或者`xxx.py`里写入用于解析该文件的解析器`#!/usr/local/bin/python3`,然后`chmod +x xxx.py`,之后`./xxx.py`就可以执行啦~
- [chmod](http://man.linuxde.net/chmod)
