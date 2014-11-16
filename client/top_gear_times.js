Template.fullList.helpers({
    allTimes: function () {
        return Standings.find({});
    }
});

Template.fullList.getCondition = function(trackCondition){
    return this.trackCondition == trackCondition;
}