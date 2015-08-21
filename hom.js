/**
 * home.io
 *
 * the bookmark manager
 */

Items = new Mongo.Collection("items");
Folders = new Mongo.Collection("folders");

if (Meteor.isClient) {
    Template.body.helpers({
        items: function() {
            return Items.find({});
        }
    });

    Template.body.events({
        "submit .new-item": function (event) {
            var item = event.target.item.value;
            var url = event.target.url.value;

            Items.insert({
                name: item,
                url: url
            });

            event.target.item.value = "";
            event.target.url.value = "";

            return false;
        }
    });
}

if (Meteor.isServer) {
}
