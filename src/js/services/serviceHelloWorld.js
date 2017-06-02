import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

@Service.path("/helloworld")
export default class ServiceHelloWorld {

  @Methods.get("/")
  @Hal.halServiceMethod()
  getAll() {
    return "Ccoucou l'API est fonctionnelle";
  }
}
