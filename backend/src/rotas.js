import loginController from './controller/loginController.js'

export default function adicRotas(servidor){
    servidor.use(loginController);
}