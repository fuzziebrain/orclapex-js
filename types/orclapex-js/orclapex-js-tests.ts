/// <reference path="index.d.ts" />
namespace server {
    export interface Iperson {
        firstname: string,
            lastname: string,
            getSumme: (a: number, b: number) => number

    }

    export interface care {
        firstname: string,
            lastname: string,
            getSumme: (a: number, b: number) => number

    }

    export interface callbackevent {
            success: string,
            lastname: string,
            getSumme: (a: number, b: number) => number

    }
}

class Car implements server.Iperson {
    private firstName: string;
    private lastName: string;
    constructor(public firstname: string, public lastname: string) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    public getSumme(a: number, b: number): number {
        return a + b;
    }

    public getSumme_x(a: number, b: number, c: number): number {
        return a + b + c;
    }
    public getFirstName(): string {
        return this.firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastname: string) {
        if (this.lastName == lastName) {
            console.log("Latname is already exist");
        } else {
            this.lastName = lastname;
        }

    }

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public callServer() {
        apex.page.confirm("Are you Sure?", "SUCCESS");
        apex.confirm();
        apex.event.trigger('pSelector', 'pEvent', $x('pNd'))

    }

    public callServerx(processname: string) {
        var $body = $(".t-Body");
        apex.server.process(processname, {
            pageItems: "#P2300_LOV",
            x01: 1
        }, {
          contents: document.body,
          async:true,
            beforeSend: ()=> {
                $body.addClass("loading");
                $('<span class="vfr u-Processinga" role="alert" style="top: 252px; left: 720px;"><span class="vfr u-Processing-spinner"></span><span class="u-VisuallyHidden">Processing</span></span>').appendTo("body");


            },
            success: (pData:any)=> {
                /* If the AJAX is successful set the value or the returned items */
                if (pData.success === true) {
                    /* Loop through the array and set the value of each item */
                    for (var i = 0; i < pData.items.length; i++) {
                        apex.item(pData.items[i].id).setValue(pData.items[i].value);
                    }
                }

                /* Remove the processing image */

            },
            error: (request:any, status:any, error:any)=> {
                alert(request.responseText);

                /* Remove the processing image */

            }
        });
    }

    public apexMessageAlert(){
      apex.message.alert("Load complete");
    }

    public apexMessageConfirm(){
      apex.message.confirm( "Are you sure?", ( okPressed: string )=> {
      if( okPressed ) {
          console.log('delete');
      }
  });
  apex.message.confirm( "Are you sure?");
    }

    public apexMessageSetThemeHooks(){
      apex.message.setThemeHooks({
    beforeShow: ( pMsgType: string, pElement$: HTMLSelectElement )=>{
        if ( pMsgType === apex.message.TYPE.SUCCESS ) {
            pElement$.addClass( "animate-msg" );
        }
    },
    beforeHide: ( pMsgType:any, pElement$:any )=>{
        if ( pMsgType === apex.message.TYPE.SUCCESS ) {
            pElement$.removeClass( "animate-msg" );
        }
    }
});

    }


}


var firstName: string = 'Pierre';
var lastName: string = 'Yotti';
var type = new Car(firstName, lastName);
console.log("The Summe is " + type.getSumme(2, 3));
console.log("The LastName is " + type.getLastName());
type.setLastName('Yotti');
console.log("The LastName is " + type.getLastName());
