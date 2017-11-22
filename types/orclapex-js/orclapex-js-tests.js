/// <reference path="index.d.ts" />
class Car {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstName = firstname;
        this.lastName = lastname;
    }
    getSumme(a, b) {
        return a + b;
    }
    getSumme_x(a, b, c) {
        return a + b + c;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastname) {
        if (this.lastName == lastName) {
            console.log("Latname is already exist");
        }
        else {
            this.lastName = lastname;
        }
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    callServer() {
        apex.page.confirm("Are you Sure?", "SUCCESS");
        apex.confirm();
        apex.event.trigger('pSelector', 'pEvent', $x('pNd'));
    }
    callServerx(processname) {
        var $body = $(".t-Body");
        apex.server.process(processname, {
            pageItems: "#P2300_LOV",
            x01: 1
        }, {
            contents: document.body,
            async: true,
            beforeSend: () => {
                $body.addClass("loading");
                $('<span class="vfr u-Processinga" role="alert" style="top: 252px; left: 720px;"><span class="vfr u-Processing-spinner"></span><span class="u-VisuallyHidden">Processing</span></span>').appendTo("body");
            },
            success: (pData) => {
                /* If the AJAX is successful set the value or the returned items */
                if (pData.success === true) {
                    /* Loop through the array and set the value of each item */
                    for (var i = 0; i < pData.items.length; i++) {
                        apex.item(pData.items[i].id).setValue(pData.items[i].value);
                    }
                }
                /* Remove the processing image */
            },
            error: (request, status, error) => {
                alert(request.responseText);
                /* Remove the processing image */
            }
        });
    }
    apexMessageAlert() {
        apex.message.alert("Load complete");
    }
    apexMessageConfirm() {
        apex.message.confirm("Are you sure?", (okPressed) => {
            if (okPressed) {
                console.log('delete');
            }
        });
        apex.message.confirm("Are you sure?");
    }
    apexMessageSetThemeHooks() {
        apex.message.setThemeHooks({
            beforeShow: (pMsgType, pElement$) => {
                if (pMsgType === apex.message.TYPE.SUCCESS) {
                    pElement$.addClass("animate-msg");
                }
            },
            beforeHide: (pMsgType, pElement$) => {
                if (pMsgType === apex.message.TYPE.SUCCESS) {
                    pElement$.removeClass("animate-msg");
                }
            }
        });
    }
}
var firstName = 'Pierre';
var lastName = 'Yotti';
var type = new Car(firstName, lastName);
console.log("The Summe is " + type.getSumme(2, 3));
console.log("The LastName is " + type.getLastName());
type.setLastName('Yotti');
console.log("The LastName is " + type.getLastName());
