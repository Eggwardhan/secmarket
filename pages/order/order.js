var app = getApp();
var util = require('../../utils/util.js');
var wrapper=require('../../utils/wrapper.js')
var order_detail = {
  "data": [
    {
      "buyNums": 1,
      "orderList": [
        {
          "amount": 3,
          "goodsImg": "../../resources/active.png",
          "title": "Idontnow",
          "goodsStandardDes": "颜色：红色  尺码：s",
          "sellPrice": 9.9,
          "cNo": 1,
        }
      ],
      "No": "abc2511483687801946",
      "orderStatusStr": "已完成",
      "orderTime": 1483687801000,
      "totalPrice": 29.7
    },
    {
      "buyNums": 1,
      "orderList": [
        {
          "amount": 2,
          "goodsImg": "../../resources/active.png",
          "title": "egg",
          "goodsStandardDes": "颜色：红色  尺码：s",
          "sellPrice": 299,
          "cNo": 1,
        }
      ],
      "No": "abc2511483616883663",
      "orderStatusStr": "已完成",
      "orderTime": 1483616883000,
      "totalPrice": 598
    }
  ],
}

Page({
  data: {
    curNav: "0",
    list: ["全部", "待付款", "已完成"]
  },
  switchTab: function (e) {
  },
  onLoad: function () {
    this.setData({
      curNav: 0,
    }); 
    wx.request({
      url: wrapper.WCONST.apiBase +"getOrder.php",
      data: {
        openid: wx.getStorageSync('openid'),
      },
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(res)
       /* if (res.data) {
          this.setData({
         order:res.data
          })
        }*/
      }
    })

  },
  onShow: function () {
    var that = this;
     var  info = order_detail.data;
    info.forEach(function (value) {
      value.timer = util.formatTime(new Date(value.orderTime), "yyyy-MM-dd hh:mm");
    });
    that.setData({
      order: info
    });
  },
  getDetail: function (e) {

  },
  goPay: function () {

  },
})