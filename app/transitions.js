export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('posts'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.show'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}
