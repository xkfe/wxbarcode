//index.js
// var wxbarcode = require('../../utils/index.js');

import wxbarcode from '../../utils/qrcode';

Page({

    data: {
        code: '1234567890123456789',
        qrcodeImg: ''
    },

    onLoad: function() {
        // wxbarcode.barcode('barcode', '1234567890123456789', 680, 200);
        wxbarcode.qrcode('qrcode', '1234567890123456789',100,100).then(res => {
            console.log(res);
            this.setData({
                qrcodeImg: res
            })
        })
    }
})
