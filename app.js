//app.js
var wilddog = require('wilddog-weapp-all')
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var config = {
      syncURL: 'https://yswtodo.wilddogio.com'
    }
    wilddog.initializeApp(config)
    this.ref = wilddog.sync().ref('todo')
  },
  addItem: function(text) {
    this.ref.push(text)
  },
  getTodoRef: function() {
    return this.ref
  }
})
