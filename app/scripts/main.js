console.log('This shit is working');

$(function(){
var parent = document.getElementById('text-container-1');
var child = document.getElementById('text-container-2');
child.style.paddingRight = child.offsetWidth - child.clientWidth + 'px';
});
