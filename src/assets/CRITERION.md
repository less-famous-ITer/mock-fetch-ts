# 项目命名规范

```
帕斯卡命名法: 所有单词首字母大写，其他字母小写
驼峰命名法: 除首字母外，其他单词首字母大写，其余字母小写
下划线命名法: 单词之间用下划线连接
横线命名法: 单词之间用横线连接
```

## 常量

全部大写，使用大写字母+下划线组合命名。下划线用以分割单词、语义化，布尔值前缀为is

## 变量

除特殊变量外，采用驼峰命名法

## 数组

单词复数或者以有列表含义单词单数结尾

## 布尔值

### 可见性

is+动词/形容词

### 属性状态

形容词

### 配置项

驼峰命名法

### 自定义事件

动词过去式+Event

## 函数

驼峰命名法，前缀为动词

### CRUD

| 函数名       | 函数作用 | 函数名         | 函数作用 |
|-----------|------|-------------|------|
| get       | 获取   | set         | 设置   |
| add       | 增加   | remove      | 删除   |
| create    | 创建   | destroy     | 移除   |
| start     | 启动   | stop        | 停止   |
 | open      | 打开   | close       | 关闭   |
 | read      | 读取   | write       | 写入   |
| load      | 载入   | save        | 保存   |
| create    | 创建   | destroy     | 销毁   |
| begin     | 开始   | end         | 结束   |
| backup    | 备份   | restore     | 恢复   |
| import    | 导入   | export      | 导出   |
| split     | 分割   | merge       | 合并   |
| inject    | 注入   | extract     | 提取   |
| attach    | 附着   | detach      | 脱离   |
| bind      | 绑定   | separate    | 分离   |
| view      | 查看   | browse      | 浏览   |
 | edit      | 编辑   | modify      | 修改   |
| select    | 选取   | mark        | 标记   |
| copy      | 复制   | paste       | 粘贴   |
| undo      | 撤销   | redo        | 重做   |
| insert    | 插入   | delete      | 移除   |
| add       | 加入   | append      | 添加   |
 | clean     | 清理   | clear       | 清除   |
 | index     | 索引   | sort        | 排序   |
 | find      | 查找   | search      | 搜索   |
| increase  | 增加   | decrease    | 减少   |
 | play      | 播放   | pause       | 暂停   |
 | launch    | 启动   | run         | 运行   |
| compile   | 编译   | execute     | 执行   |
| debug     | 调试   | trace       | 跟踪   |
| observe   | 观察   | listen      | 监听   |
 | build     | 构建   | publish     | 发布   |
| input     | 输入   | output      | 输出   |
| encode    | 编码   | decode      | 解码   |
| encrypt   | 加密   | decrypt     | 解密   |
| compress  | 压缩   | decompress  | 解压缩  |
 | pack      | 打包   | unpack      | 解包   |
| parse     | 解析   | emit        | 生成   |
| connect   | 连接   | disconnect  | 断开   |
| send      | 发送   | receive     | 接收   |
| download  | 下载   | upload      | 上传   |
 | refresh   | 刷新   | synchronize | 同步   |
| update    | 更新   | revert      | 复原   |
| lock      | 锁定   | unlock      | 解锁   |
| check/out | 签出   | check/in    | 签入   |
| submit    | 提交   | commit      | 交付   |
| push      | 推    | pull        | 拉    |
| expand    | 展开   | collapse    | 折叠   |
| begin     | 起始   | end         | 结束   |
| start     | 开始   | finish      | 完成   |
| enter     | 进入   | exit        | 退出   |
| abort     | 放弃   | quit        | 离开   |
| obsolete  | 废弃   | depreciate  | 废旧   |
 | collect   | 收集   | aggregate   | 聚集   |

### 数据处理
- 获取用get/query
- 格式化用format/convert/toggle/inverse/phase/flat

### 命名方式

| 变量名    | 变量含义   |
|--------|--------|
| ch     | 单个字符   |
| str    | 字符串    |
| n      | 次数     |
| reg    | 正则表达式  |
| expr   | 表达式    |
| lens   | 数组长度   |
| count  | 数量     |
| p      | 数据精度   |
| q      | 查询     |
| src    | 数据源    |
| num    | 数字     |
| rate   | 比率     |
| status | 状态     |
| bool   | 布尔值    |
| arr    | 数组     |
| obj    | 对象     |
| x/y    | x/y轴坐标 |
| func   | 函数     |
| size   | 大小     |
| unit   | 单位     |
| hoz    | 水平方向   |
| vert   | 垂直方向   |
