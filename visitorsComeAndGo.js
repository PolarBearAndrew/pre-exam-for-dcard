// Given: Office visitors come and go, each visitor will register his/her
// arrival and departure time. Please implement a function, when given a
// certain time period, it will return the maximum number of visitors during
// the time period.

var moment = require('moment');
var binTree = require('./binTree');

module.exports = (visitors, startAt, endAt) => {
    let max = 0, curr = 0;
    let tree = new binTree();
    startAt = moment(startAt).unix();
    endAt = moment(endAt).unix();
    visitors.forEach( visitor => {
        tree.push('arrive', moment(visitor.arrivalAt).unix());
        tree.push('leave', moment(visitor.departureAt).unix());
    });
    tree.traversal( node => {
        curr += node.action == 'arrive' ? 1 : -1;
        if(curr > max &&  isInPeriod(node.time, startAt, endAt))
            max = curr;
    });
    return max;
}

function isInPeriod(t, start, end) {
    if(start <= t && t <= end)
        return true;
    else 
        return false;
}