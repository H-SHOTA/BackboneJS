// model
console.log('-- model')
var MyModel = Backbone.Model.extend({
    method: function() {
        console.log('Hello Model!!');
    }
});

var myModel = new MyModel();

myModel.method();

//collection
console.log('\n-- collection')
var MyCollection = Backbone.Collection.extend({});

var myCollection = new MyCollection([
    {name: 'hoge'},
    {name: 'fuga'}
]);

myCollection.each(function(e, i) {
    console.log('[' + i + '] ' + e.get('name'));
});
