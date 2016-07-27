import angular from 'angular';
import 'angular-ui-router';
import config from './utilities/config';
import SERVER from './utilities/server.constant';
import AddController from './controllers/add.controller';
import 'angular-cookies';

// Import some utilities
import { run } from './utilities/run';

// Import some controllers
import { RegisterController } from './controllers/register.controller';
import { LoginController } from './controllers/login.controller';
import { AddController } from './controllers/add.controller';
import { LayoutController } from './controllers/layout.controller';

// Import some services
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(config)
    .run(run)
    .constant('SERVER', SERVER)
    .controller('RegisterController', RegisterController)
    .controller('LoginController', LoginController)
    .controller('AddController', AddController)
    .controller('LayoutController', LayoutController)
    .service('UserService', UserService)
    .service('ProductService', ProductService);
