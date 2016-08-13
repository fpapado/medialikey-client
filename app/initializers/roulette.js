export function initialize(application) {
  application.inject('route', 'roulette', 'service:roulette');
}

export default {
  name: 'roulette',
  initialize: initialize
};
