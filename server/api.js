require('./db');
const User = require('./model/user');
// const public = require('./public/public');
const express = require('express');
const Formidable = require('formidable');
const Path = require('path');
const FS = require('fs');
const router = express.Router();

router.post('/api/user/register', (req, res) => {
    User.find({
        account: req.body.account
    }, (err, data) => {
        if (err) {
            res.send({
                'message': '注册失败！'
            });
        } else {
            if (data.length > 0) {
                res.send({ 'message': '账户已经存在！' });
            } else {
                let newAccount = new User({
                    account: req.body.account,
                    password: req.body.password
                });
                newAccount.save((err, data) => {
                    if (err) {
                        res.send({
                            'message': '注册失败!'
                        });
                    } else {
                        res.send({
                            'message': '注册成功!'
                        });
                    }
                });
            }
        }
    });
});

router.post('/api/login', (req, res) => {
    console.log(req.body);

    User.find({
        account: req.body.account,
        password: req.body.password
    }, (err, data) => {
        if (err) {
            res.send({
                'message': '用户名或密码错误！',
            });
        } else {
            if (data.length > 0) {
                res.send({
                    'message': '登录成功！',
                    'success': true
                });
            } else {
                res.send({
                    'message': '不存在此用户！',
                    'success': false
                });
            }
        }
    });
});

router.post('/api/user/all', function(req, res, next) {
    User.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

// 获取所有账号接口
router.get('/api/user/all', (req, res) => {
    // 通过模型去查找数据库
    User.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


router.get('/api/getData', (req, res) => {
    res.send({
        status: true,
        data: { msg: '请求成功', info: '', code: '' }
    });
});

router.post('/api/postData1', (req, res) => {
    console.log(req.body);

    res.send({
        status: true,
        data: { msg: '请求成功', info: '', code: '' }
    });
});
router.delete('/api/deleteData', (req, res) => {
    console.log(req.query);
    res.send({
        status: true,
        data: { msg: '请求成功', info: '', code: '' }
    });
});
router.put('/api/putData', (req, res) => {
    console.log(req.body);
    res.send({
        status: true,
        data: { msg: '请求成功', info: '', code: '' }
    });
});

router.post('/api/upLoadImg', function(req, res) {
    var From = new Formidable.IncomingForm();
    //设置保存 文件路径
    var TargetFile = Path.join(__dirname, './public/');
    // console.log(TargetFile);

    From.uploadDir = TargetFile;
    From.parse(req, function(err, fields, files) {
        if (err) throw err;
        var FilePath = files.file.path; //此content由前端uploadFileName设置
        var FileName = files.file.name;
        var NewPath = Path.join(Path.dirname(FilePath), FileName);
        FS.rename(FilePath, NewPath, function(err) {
            if (err) throw err;
            console.log('upload success!');

            res.send({
                status: true,
                data: { msg: '上传成功', data: 'http://localhost:8088/' + FileName }
            });
        });
    });
});



router.post('/api/upLoadVideo', function(req, res) {
    var From = new Formidable.IncomingForm();
    //设置保存 文件路径
    var TargetFile = Path.join(__dirname, './public/');
    // console.log(TargetFile);

    From.uploadDir = TargetFile;
    From.parse(req, function(err, fields, files) {
        if (err) throw err;
        var FilePath = files.file.path;
        var FileName = files.file.name;
        var NewPath = Path.join(Path.dirname(FilePath), FileName);
        FS.rename(FilePath, NewPath, function(err) {
            if (err) throw err;
            console.log('upload success!');
            res.send({
                status: true,
                data: { msg: '上传成功', data: 'http://localhost:8088/' + FileName }
            });
        });
    });
});

module.exports = router;