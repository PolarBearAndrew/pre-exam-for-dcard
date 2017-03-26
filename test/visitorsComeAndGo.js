
let should = require('chai').should();
let visitors = require('../data/visitors.js');
let getMaxVisitorsCount = require('../VisitorsComeAndGo.js');

let tasks = [
  { startAt: '00:01', endAt: '23:59', expect: 18 },
  { startAt: '08:00', endAt: '11:00', expect: 15 },
  { startAt: '08:00', endAt: '09:00', expect: 14 },
  { startAt: '10:00', endAt: '11:00', expect: 15 },
  { startAt: '14:00', endAt: '23:00', expect: 8 },
  { startAt: '16:00', endAt: '18:00', expect: 4 },
  { startAt: '20:00', endAt: '23:00', expect: 0 },
];

describe('Visitors come and go...', function () {
  tasks.forEach( t => {
    let title = '@s - @e (@expect)';
    title = title.replace(/@s/, t.startAt)
      .replace(/@e/, t.endAt)
      .replace(/@expect/, t.expect);
    it(title, function (done) {
      let max = getMaxVisitorsCount(visitors, '2017-03-24T' + t.startAt, '2017-03-24T' + t.endAt);
      max.should.equal(t.expect);
      done();
    });
  });
});
