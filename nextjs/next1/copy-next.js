var ncp = require('ncp').ncp;
const path = require('path')
ncp.limit = 16;

ncp(path.join(__dirname,'../../../next.js/packages/next/dist'), path.join(__dirname,'./node_modules/next/dist'), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});
