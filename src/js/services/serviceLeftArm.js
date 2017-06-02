import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

import PythonHelper from "../helpers/pythonHelpers";

@Service.path("/left_arm")
export default class ServiceLeftArm {

  @Methods.get("/")
  @Hal.halServiceMethod()
  getAll(value, req) {
    let steps = req.query.steps;
    let direction = req.query.direction;
    /*console.log("la valeur du steps est de ");
    console.log(steps);
    console.log("la valeur de la direction est ");
    console.log(direction);*/
    if (!steps || !direction) {
      return "vous devez préciser un pas et une direction à l'aide des query-params suivants. Par exemple http://localhost:8080/left_arm?steps=50&direction=up\nLes valeurs possibles pour un bras est up, down, updown et pour une main ou une tête left, right, leftright"
    }
    
    if (direction !== 'up' && direction !== 'down' && direction !== 'updown') {
      return "les seules valeurs possible pour le query-param direction sont up, down et updown";
    }

    PythonHelper.launchPython(steps, direction, "leftArm");

    if (steps > 0) {
      return "Iron man lève son bras gauche de " + steps + " pas.";
    } else {
      return "Iron man baisse son bras gauche de " + Math.abs(steps) + " pas.";
    }
  }
}
