
## 客户端功能
1. 注册账号
```js
    账号、密码、名字、格言
```

2. 登录
```js
    输入账号、输入密码
```

3. 个人信息展示页
```js
    头像、账号、密码、名字、格言
```
4. 个人信息修改
```js
    头像、名字、格言
```
5. 修改密码
```js
    旧帐号、新密码、确认密码
```



## 服务端接口

1.  登录

```js
    请求方式： POST
    请求地址：: '/api/user/login'
    参数：{
        loginId: '',
        loginPwd: ''
    }
```

2.  注册

````js
    请求方式： POST
    请求地址：: '/api/user/register'
    参数：{
        loginId: '',
        loginPwd: '',
        [name]: '',
        [motto]: ''
    }
    ```
````

3.  通过 ID 获取用户信息

````js
    请求方式： GET
    请求地址：: '/api/user/whoami/:id'
    参数： 请求路径带上id
    ```
````

4.  修改用户信息

````js
    请求方式： PUT
    请求地址：: '/api/user/:id'
    修改密码：{
        loginId: '',
        oldLoginPwd: '',
        newLoginPwd: ''
    }
    修改其他信息：{
        name: '',
        motto: '',
    }
    ```
````

4.  修改图片

````js
    请求方式： POST
    请求地址：: '/api/user/sengImg/:id'
    参数：formData.append('avator', 文件信息);
    ```
````

4.  删除用户

````js
    请求方式： DELETE
    请求地址：: '/api/user/:id'
    参数：请求路径带上id

    ```
````
