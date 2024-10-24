const path=require('path');
console.log(path.normalize('/foo/abc/xyz'));
console.log(path.join('/foo/bar','abc'));
console.log(path.relative('/foo/bar','/foo/abc'));
console.log(path.resolve('abc','xyz'));
console.log(path.dirname('/foo/abc.txt'));
console.log(path.basename('/foo/abc.txt'));
console.log(path.extname('/foo/abc.txt'));
