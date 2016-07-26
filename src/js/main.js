import angular from 'angular';
import 'angular-ui-router';
import config from './utilities/config';
import SERVER from './utilities/server.constant';
import AddController from './controllers/add.controller';

// Import some controllers
import { RegisterController } from './controllers/register.controller';

// Import some services
import { UserService } from './services/user.service';

angular
    .module('app', ['ui.router'])
    .config(config)
    .constant('SERVER', SERVER)
    .controller('AddController', AddController)
    .controller('RegisterController', RegisterController);
