import GetHelloZenika from "./application-core/application/get-hello-zenika";
import {RequestHandler} from "express";
import {helloController} from "./presentation/factory";


export default class BcDemoFactory{

    private static useCaseGetHelloZenika(): GetHelloZenika {
        return new GetHelloZenika(); //ou passer par une factory application-factory.ts
    }

    static getHelloZenika(): RequestHandler {
        return helloController.getHelloWorld(this.useCaseGetHelloZenika())
    }
}
