import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('apartment');
  },
  actions: {
    goToApartment(apartment){
        this.transitionTo('apartment', apartment)
    }

  }
});
