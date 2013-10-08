var data = [{
	'V' : 10
}, {
	'P' : 20
}, {
	'K' : 30
}, {
	'A' : 40
}, {
	'Kr' : 50
}, {
	'S' : 60
}];


var file = null;
var Myfullfolder = null;
if (Titanium.Platform.osname != 'android') {
	Titanium.API.info('This is iPhone');
	file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'Vijay.txt');
	Myfullfolder = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'Vi');

} else {
	Titanium.API.info('This is android');
	if (Ti.Filesystem.externalStorageDirectory == true) {
		Titanium.API.info('This is externalStorageDirectory');
		file = Titanium.Filesystem.getFile(Titanium.Filesystem.getExternalStorageDirectory(), 'Vijay.txt');
		Myfullfolder = Ti.Filesystem.getFile(Titanium.Filesystem.getExternalStorageDirectory(), 'Vi');

	} else {
		Titanium.API.info('This is applicationDataDirectory');
		file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'Vijay.txt');
		Myfullfolder = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'Vi');
	}
}

if (!file.exists) {
	Titanium.API.info('This is file not exist');
	file.createFile();
}
file.write(JSON.stringify(data));

if (!Myfullfolder.exists()) {
	Myfullfolder.createDirectory();
}

var newFile = Titanium.Filesystem.getFile(Myfullfolder.resolve(), 'ABC.txt');
if (!newFile.exists) {
	newFile.createFile();
}

try {
	
	Titanium.API.info("readFile Path: " + Titanium.Filesystem.getFile(file.nativePath).nativePath);
	var readFile = Titanium.Filesystem.getFile(file.nativePath).read().text;
	
	var result = newFile.write(readFile);
	
} catch(erp) {
	
	alert(erp)
}

$.index.open();
