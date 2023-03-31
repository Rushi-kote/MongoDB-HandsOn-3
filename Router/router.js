const ROUTER = require("express").Router();
const controller = require("./../Controller/controller");

ROUTER.route("/").get(controller.home);
ROUTER.route("/allEmp").get(controller.allEmp);
ROUTER.route("/empSalMore").get(controller.empSalMore);
ROUTER.route("/empExpMore").get(controller.empExpMore);
ROUTER.route("/empLastCompY").get(controller.empLastCompY);
ROUTER.route("/empGraduateExpMore").get(controller.empGraduateExpMore);
ROUTER.route("/empUpdateSal").get(controller.empUpdateSal);
ROUTER.route("/empDeletComp").get(controller.empDeletComp);




module.exports = ROUTER ; 