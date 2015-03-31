Meteor.startup(function() {
        if (Books.find().count() === 0) {
            Books.insert({
                "title" : "asd",
                "author" : "asd 2",
                "copies" : 13,
                "summary" : "asdf 23"
            });
        }
});
