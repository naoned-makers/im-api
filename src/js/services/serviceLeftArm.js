import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

@Service.path("/left_arm")
export default class ServiceHelloWorld {

  @Methods.get("/")
  @Hal.halServiceMethod()
  getAll(value, req) {
    let steps = req.query.steps;
    if (!steps) {
      return "vous devez préciser un pas à l'aide du query-param steps. Par exemple http://localhost:8080/left_arm?steps=50"
    }


    let text = "";
    let PythonShell = require('python-shell');

    let options = {
      pythonPath: '/usr/bin/python',
      args: ['{ "steps": ' + steps + '}'],
      mode: 'text'
    };

    let pyshell = new PythonShell('scripts/helloworld.py', options);

    pyshell.on('message', function(message) {
      console.log("Je suis de retour du python");
      console.log(message);
      text += message;
    });

    pyshell.end(function(err) {
        if (err) throw err;
        console.log('finished');
        text += 'finished';
        return text;
    });

    if (steps > 0) {
      return "Iron man lève son bras gauche de " + steps + " pas.";
    } else {
      return "Iron man baisse son bras gauche de " + Math.abs(steps) + " pas.";
    }
  }
}
