Template.insertBookForm.helpers({
    doc: function() {
        return Books.findOne();
    }
});
