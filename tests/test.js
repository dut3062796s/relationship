'use strict';
var test = require('tape');
var relationship = require('..');

test('relationship.js show be tested', function (t) {
  t.deepEqual(relationship({text: '爸爸的哥哥', sex: 1}), ['伯父']);
  // TODO 添加自己的测试用例
  
  t.end();
});