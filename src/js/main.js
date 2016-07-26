import angular from 'angular';
import 'angular-ui-router';
import config from './utilities/config';
import SERVER from './utilities/server.constant';

angular
    .module('app', ['ui.router'])
    .config(config)
    .constant('SERVER', SERVER);
