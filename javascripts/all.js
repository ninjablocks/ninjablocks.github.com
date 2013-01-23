;N = {};

N.start = function() {
  console.log(this)
  N.setupNav()
};

N.setupNav = function() {
  var dirtyParts = window.location.pathname.split('/');
  // Normalise
  var cleanParts = []
  for (var i=0,ii=dirtyParts.length;i<ii;i++) {
    if (dirtyParts[i]) cleanParts.push(dirtyParts[i]);
  }

  // If we have nothing, highlight home
  if (cleanParts.length===0) cleanParts.push('index.html');

  $('a[href="/'+cleanParts[0]+'"]').parent().addClass('active-nav');

  if (cleanParts.length>1) {
    $('a[href="/'+cleanParts[0]+'/'+cleanParts[1]+'"]').parent().addClass('active-sub-nav');
  }

};

$(document).ready(N.start);