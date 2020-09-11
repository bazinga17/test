var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

//var listDll = require("collections/list");


var time_spend = document.getElementById('get_time');
var _date = document.getElementById('date_in_time');

var list = [];//list time's date user-time star-spend

window.insert_time.addEventListener('submit', function (event) {
    event.preventDefault();
    t.get('card', 'shared', 'all_time213', 'no')
        .then(function (all_time) {
            if (all_time != 'no')
            {
                let date_time = all_time[0];//for all time

                console.log(date_time);

                if (time_spend.value != "")
                {
                    var res = time_spend.value.split(" ", 3);

                    if (res.length == 3) // all time
                    {
                        let _sec = parseFloat(res[2]) + date_time.sec;
                        let _min = parseFloat(res[1]) + date_time.min;

                        var s_del = _sec % 60;
                        var m_del = _min % 60;

                        date_time.sec = _sec - 60 * s_del;
                        date_time.min = _min - 60 * m_del + s_del;
                        date_time.hour = date_time.hour + parseFloat(res[0]) + m_del;

                    }
                    else if (res.length == 2)// h and min
                    {
                        let _min = parseFloat(res[1]) + date_time.min;

                        var m_del = _min % 60;

                        date_time.min = _min - 60 * m_del;
                        date_time.hour = date_time.hour + parseFloat(res[0]) + m_del;
                    }
                    else if (res.length== 1) //h
                    {
                        date_time.hour = data_time.hour + parseFloat(res[0]);
                    }
                }
                console.log(date_time);
                return t.set('card', 'shared', 'all_time', date_time).then(function () { t.closePopup(); });
            }
            else                //new card
            {
                let date_time = [{ hour: 0, min: 0, sec: 0 }];//for all time

                if (time_spend.value != "")
                {                    
                    var res = time_spend.value.split(" ", 3);

                    if (res.length == 3) // all time
                    {
                        var s_del = parseFloat(res[2]) % 60;
                        console.log(s_del);
                        var m_del = parseFloat(res[1]) % 60;
                        console.log(m_del);

                        date_time.sec = parseFloat(res[2]) - 60 * s_del;
                        date_time.min = parseFloat(res[1]) - 60 * m_del + s_del;
                        date_time.hour = parseFloat(res[0]) + m_del;

                    }
                    else if (res.length == 2)// h and min
                    {
                        var m_del = parseFloat(res[1]) % 60;

                        date_time.min = parseFloat(res[1]) - 60 * m_del;
                        date_time.hour = parseFloat(res[0]) + m_del;
                    }
                    else if (res.length == 1) //h
                    {
                        date_time.hour = parseFloat(res[0]);
                        console.log(date_time.hour);
                    }

                    console.log(date_time);

                    return t.set('card', 'shared', 'all_time', date_time).then(function () { t.closePopup(); });
                }
            }
        });
}); 

t.render(function () {
    return t.sizeTo('#insert_time');

});
