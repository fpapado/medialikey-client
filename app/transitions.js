export default function() {
  this.transition(
    this.fromRoute('index'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.show'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.toRoute('about'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.hasClass('animPanel'),
    this.use('crossFade', {duration: 400})
  );
}
