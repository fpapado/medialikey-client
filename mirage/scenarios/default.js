export default function(server) {
  server.createList('post', 10);

  server.create('vote', { postId: 5, accepted: true});
}
