import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Post ${i+1}`;
  },
  source: "http://www.fillmurray.com/300/200",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temport incididunt ut labore et dolore magna aliqua.",
  credits: "Blabla Media Team",
  upvotes: 4,
  downvotes: 1
});
