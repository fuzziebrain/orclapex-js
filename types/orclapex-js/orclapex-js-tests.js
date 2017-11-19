/// <reference path="index.d.ts" />
/// <reference path="jquery_confirm.d.ts" />
var Car = /** @class */ (function () {
    function Car(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Car.prototype.getSumme = function (a, b) {
        return a + b;
    };
    Car.prototype.getSumme_x = function (a, b, c) {
        return a + b + c;
    };
    Car.prototype.getFirstName = function () {
        return this.firstName;
    };
    Car.prototype.getLastName = function () {
        return this.lastName;
    };
    Car.prototype.setLastName = function (lastname) {
        if (this.lastName == lastName) {
            console.log("Latname is already exist");
        }
        else {
            this.lastName = lastname;
        }
    };
    Car.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Car.prototype.callServer = function () {
        apex.page.confirm("Are you Sure?", "SUCCESS");
        apex.event.trigger('pSelector', 'pEvent', $x('pNd'));
    };
    Car.prototype.callServerx = function (processname) {
        var $body = $(".t-Body");
        apex.server.process(processname, {
            pageItems: "#P2300_LOV",
            x01: 1
        }, {
            contents: document.body,
            async: true,
            beforeSend: function () {
                $body.addClass("loading");
                $('<span class="vfr u-Processinga" role="alert" style="top: 252px; left: 720px;"><span class="vfr u-Processing-spinner"></span><span class="u-VisuallyHidden">Processing</span></span>').appendTo("body");
            },
            success: function (pData) {
                /* If the AJAX is successful set the value or the returned items */
                if (pData.success === true) {
                    /* Loop through the array and set the value of each item */
                    for (var i = 0; i < pData.items.length; i++) {
                        apex.item(pData.items[i].id).setValue(pData.items[i].value);
                    }
                }
                /* Remove the processing image */
            },
            error: function (request, status, error) {
                alert(request.responseText);
                /* Remove the processing image */
            }
        });
    };
    Car.prototype.confirm = function () {
        var $ = $s;
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function () {
                    alert('Confirmed!');
                },
                cancel: function () {
                    alert('Canceled!');
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        alert('Something else?');
                    }
                }
            }
        });
    };
    return Car;
}());
var firstName = 'Pierre';
var lastName = 'Yotti';
var type = new Car(firstName, lastName);
console.log("The Summe is " + type.getSumme(2, 3));
console.log("The LastName is " + type.getLastName());
type.setLastName('Yotti');
console.log("The LastName is " + type.getLastName());
