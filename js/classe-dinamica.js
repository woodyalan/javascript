var button = document.querySelector('.btn');

var classList = button.classList;

classList.add('btn-danger');
classList.remove('btn-danger');

console.log(classList.contains('btn-danger'));
