
export default class PythonHelper {

  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * auteur de la base de donnée en suite d'objet Author
   */
  static launchPython(steps, direction, member) {
    let text = "";
    let PythonShell = require('python-shell');

    let options = {
      pythonPath: '/usr/bin/python',
      args: ['{ "steps": ' + steps + ', "member": "' + member + '", "direction": "' + direction + '"}'],
      mode: 'text'
    };

    let pyshell = new PythonShell('scripts/helloworld.py', options);

    pyshell.on('message', function(message) {
      //console.log("Je suis de retour du python");
      console.log(message);
      //text += message;
    });

    pyshell.end(function(err) {
        if (err) throw err;
        //console.log('fin de js pour Iron Man');
    });

  }


}