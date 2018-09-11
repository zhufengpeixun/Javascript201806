//   vue-book 既写服务端，又写前端；
let http = require('http');
let fs = require('fs');
let url = require('url');

let slide = require('./sliders');
http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end();
  let {pathname,query} = url.parse(req.url,true);
  if (pathname === '/sliders') {
    res.setHeader('content-type', 'application/json;charset=utf-8');
    return res.end(JSON.stringify(slide));
  }
  // 获取热门图书；首页
  if(pathname==='/hot'){
    fs.readFile('./book.json','utf8',function (err,data) {
      res.setHeader('content-type','application/json;charset=utf-8');
      data =  JSON.parse(data).reverse().slice(0,4)
      return  res.end(JSON.stringify(data));
    });
  }

  // 获取所有的图书数据
  if(pathname==='/books'){
    let  addressUrl = './book.json'
    if(query.page==='collect'){
      addressUrl = './collect.json'
    }
    fs.readFile(addressUrl,'utf8',function (err,data) {
      res.setHeader('content-type','application/json;charset=utf-8');
      data=JSON.parse(data).reverse()
      return  res.end(JSON.stringify(data));
    })
  }

  // if(pathname==='/delete'){
  //   let  id = query.id;
  //   fs.readFile('./book.json','utf8',function (err,data) {
  //     res.setHeader('content-type','application/json;charset=utf-8');
  //     let  newData = JSON.parse(data);
  //     newData = newData.filter(item=>item.bookId !=id);
  //
  //     fs.writeFile('./book.json',JSON.stringify(newData),function () {
  //       return  res.end();
  //     })
  //   })
  // }

  if(pathname==='/delete'){
    let  id = query.id;
    fs.readFile('./book.json','utf8',function (err,data) {
      res.setHeader('content-type','application/json;charset=utf-8');
      let  newData = JSON.parse(data);
      newData = newData.filter(item=>item.bookId !=id);

      fs.writeFile('./book.json',JSON.stringify(newData),function () {
        return  res.end();
      })
    })
  }


  if(pathname==='/getOne'){
    let  id = query.id;
    fs.readFile('./book.json','utf8',function (err,data) {
      data= JSON.parse(data).filter(item=>item.bookId==id);
      return res.end(JSON.stringify(data[0]));
    })
  };

  if(pathname==='/update'){
    let str =''
    req.on('data',function (chunk) {
      str+= chunk;
    });

    req.on('end',function () {
      let  newBook = JSON.parse(str);
      let  newId = newBook.bookId;
      fs.readFile('./book.json','utf8',function (err,data) {
        data = JSON.parse(data);
        // map : 遍历映射;  原有数组不发生变化；
        data = data.map(item=>{
          if(item.bookId===newId){
            return  newBook;// 返回值替换原有数组的某一项；
          }
          return item;
        });
        fs.writeFile('./book.json',JSON.stringify(data),function () {
          return  res.end();
        })
      })
    })
  }

  if(pathname==='/add'){
    //  req.on  data  end
    let str = '';
    req.on('data',function (chunk) {
      //chunk  buffer  16进制的   汉字  3  ef 2f  3e
      str += chunk;
    })
    req.on('end',function () {
      let newBook = JSON.parse(str);
      fs.readFile('./book.json','utf8',function (err,data) {
        let  originData = JSON.parse(data);
        newBook.bookId =originData.length===0 ? 1 : originData[originData.length-1].bookId +1;
        originData.push(newBook);
        fs.writeFile('./book.json',JSON.stringify(originData),function (err,data) {
          return res.end();
        })
      })
    })
  }
  if(pathname==="/collect"){
    let str = '';
    req.on('data',function (chunk) {
      //chunk  buffer  16进制的   汉字  3  ef 2f  3e
      str += chunk;
    })
    req.on('end',function () {
      let newBook = JSON.parse(str);
      fs.readFile('./collect.json','utf8',function (err,data) {
        let  originData = JSON.parse(data);
        originData.push(newBook);
        fs.writeFile('./collect.json',JSON.stringify(originData),function (err,data) {
          return res.end();
        })
      })
    })
  }
}).listen(3000);
