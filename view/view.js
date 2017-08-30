// view
$(function() {
    var MyView = Backbone.View.extend({
        render: function() {
            // elはBackbone.Viewのプロパティ。dom要素を格納する。
            // tagnameを指定しないとdivタグになる
            this.$el.text('Hello View!!!');
            return this;
        }
    });

    var myView = new MyView();

    $('body').append(myView.render().el);
});