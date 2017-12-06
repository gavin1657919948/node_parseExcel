const fs = require("fs");
const xlsx = require("node-xlsx");
var filePath = "C:\\Users\\Gavin\\Desktop\\dataBase.xlsx";
var obj = xlsx.parse(filePath);
var arr_data = obj[0].data;
var str = "";
for (let i = 0; i < arr_data.length; i++) {
  arr_ef = arr_data[i];
  str +=
    '{"group":"roadMobile","key":"' +
    arr_ef[0] +
    "-" +
    arr_ef[1] +
    "-" +
    arr_ef[2] +
    '",' +
    '"value":{"co":' +
    arr_ef[3] +
    ',"hc":' +
    arr_ef[4] +
    ',"nox":' +
    arr_ef[5] +
    ',"pm2_5":' +
    arr_ef[6] +
    ',"pm10":' +
    arr_ef[7] +
    ',"sulphurContent":' +
    arr_ef[8] +
    "}},";
}
console.log(str);
var filename = "C:\\Users\\Gavin\\Desktop\\dataBase.txt";
fs.writeFile(filename, str, function(err) {
  if (err) throw err;
});
