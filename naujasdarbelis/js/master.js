
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems, options);
  });
	let instance = M.Materialbox.getInstance(elem);
	instance.open();
	instance.close();
	instance.destroy();
