"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// set NODE_PATH programatically and force update.
process.env.NODE_PATH = "./bin;";
require("module").Module._initPaths();
const util = require("util/date");
console.log(util.dateToStr(Date.now()));
require("sub/test");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovV29yay9hYnNvbHV0ZV9pbXBvcnQvc3JjLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBa0Q7QUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLE9BQU8sQ0FBRSxRQUFRLENBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFeEMsa0NBQWtDO0FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUUsQ0FBRSxDQUFDO0FBRTVDLG9CQUFrQiJ9