// ES5 for older phones
var controller, i;
var datGuiFolderElement = { folder: ' 00' }; // dat.GUI needs an object
var folders = [];
var gui = new dat.GUI();
var numFolders = 50;
var scene = document.querySelector('a-scene');

function run() {
  controller.onFinishChange(function (selected) {
    var folder = selected.substring(1); // workaround for dat.GUI bug sorting strings

    localStorage.setItem('folder', folder);
    document.getElementById('cube1').setAttribute('src', `assets/${folder}/cube1.png`);
    document.getElementById('cube2').setAttribute('src', `assets/${folder}/cube2.png`);
    document.getElementById('cube3').setAttribute('src', `assets/${folder}/cube3.png`);
    document.getElementById('cube4').setAttribute('src', `assets/${folder}/cube4.png`);
    document.getElementById('cube5').setAttribute('src', `assets/${folder}/cube5.png`);
    document.getElementById('cube6').setAttribute('src', `assets/${folder}/cube6.png`);
  });
}

for (i = 1; i < numFolders; i++) {
  folders.push(i < 10 ? ' 0' + i : ' ' + i); // the leading space is a workaround for a dat.GUI bug sorting strings
}

controller = gui.add(datGuiFolderElement, 'folder', folders);
folder = localStorage.getItem('folder');
if (folder == null) {
  folder = '01'; // default
}
controller.setValue(folder);

if (scene.hasLoaded === true) { run(); } else { scene.addEventListener('loaded', run); }
