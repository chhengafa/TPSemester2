const { KhmerDate } = require("./lib");
const KhmerDatet = new KhmerDate();

console.log(KhmerDatet.check(new Date("Feb 07 2022")));
