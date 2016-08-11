export default function(/* server */) {
  server.createList('post', 10);

  server.loadFixtures('comments');
  server.create('comment', { postId: 5});
}
