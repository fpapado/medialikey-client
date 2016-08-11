export default function() {
  this.namespace = 'api';
  
  this.get('/posts');
  this.get('/posts/:id');

  this.get('/posts/:id/comments', function(schema, request) {
    const postId = request.params.id;
    return schema.comment.where({ postId: postId });
  });

  this.post('/comments');

  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
