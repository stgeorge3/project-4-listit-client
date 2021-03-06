import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('apartments/new');
  this.route('apartments');
  this.route('apartment', { path: '/apartments/:apartment_id' }, function() {
    this.route('listing-photos');
  });
  this.route('apartment/edit', { path: '/apartments/:apartment_id/edit' })
});

export default Router;
