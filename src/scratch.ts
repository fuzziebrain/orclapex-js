apex.page.submit("PROCESS");

let selector: JQuery = $('a');
let valid: boolean = apex.page.validate();

let options: apex.page.SubmitOptions = { request: "SUBMIT", showWait: true, set: { "P1": "1", "P2": 2 }, reloadOnSubmit: "a" };

apex.page.confirm("Are you sure?", options);