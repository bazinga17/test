var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

t.render(function () {
    return t.get('card', 'shared', 'user_list', 'not set')
        .then(function (time_list) {
            for (var i = 0; i < time_list.length; i++) {

                var x = document.getElementById('list_date');
                var opt = document.createElement('li');
                var node = document.createTextNode(time_list[i].name + ' - ' + time_list[i].date_in + ' ' + time_list[i].time_in + ' ' + time_list[i].spend);
                opt.appendChild(node);
                x.appendChild(opt);
            }
        }).then(function () {
            t.sizeTo('#content');
        });
});




