export default function() {
  this.namespace = 'api/';

  this.get('/posts');
  this.get('/posts/:id');

  this.get('/posts/:id/votes', function(schema, request) {
    const postId = request.params.id;
    return schema.votes.where({ postId: postId });
  });

  this.post('/votes');

  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
}
