import { connection } from 'mongoose';

require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const template = require('./template');
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

const port = process.env.PORT || 4000;

// app.use('./template');

// app.use((ctx, next) => {
//   console.log('hihi');
//   next();
// });

// app.use((ctx, next) => {
//   console.log('hellohello');
//   next();
// });

const router = new Router();

app.use(router.routes());

router.get('/', (ctx, next) => {
  ctx.body = template.main;
  console.log('hello');
  //   console.log(template.main);
});

router.get('/store', (ctx, next) => {
  const { name } = ctx.request.query;
  console.log('name :', name);
  MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if (!err) {
      console.log('mongo connected');
    }
    const test = connection.collection('test');
    db.test.insert({ name: `${name}` });
  });

  //   ctx.body = 'DB 저장 완료.\n잠시 후, 메인 화면으로 이동합니다';
  //   setTimeout(() => {
  // ctx.redirect('http://localhost:4000/');
  //   }, 100);
  //   ctx.body = template.second;
  //   console.log('hello');
  //   setTimeout(ctx => {
  //     ctx.redirect('/second');
  //   }, 1000);
});

router.get('/second', (ctx, next) => {
  ctx.body = 'second page';
});

app.listen(port, () => {
  console.log('server running on port ' + port);
});
