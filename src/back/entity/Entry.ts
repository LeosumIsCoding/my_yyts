import { fork } from "child_process";
import { INestModule } from "@t/application.config";


export function CreateServer(module: INestModule) {
    const worker = fork(`./output/back/${module.name}.js`);
    worker.send(module);
    return worker;
}