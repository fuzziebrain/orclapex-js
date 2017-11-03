apex.page.submit("PROCESS");

let s: JQuery = $('a');
let valid: boolean = apex.page.validate();

let options: apex.page.SubmitOptions = { request: "SUBMIT", showWait: true, set: { "P1": "1", "P2": 2 }, reloadOnSubmit: "a" };

apex.page.confirm("Are you sure?", options);
let x: JQuery = apex.util.showSpinner($("#container_id"));
x.remove();

apex.util.delayLinger.start("test", function() { console.log('hello'); });
apex.util.delayLinger.finish("test", function() {});
apex.region("test").focus();
apex.region("myGridRegion").widget().interactiveGrid("getActions").invoke("add-row");
let logLevel: number = apex.debug.LOG_LEVEL.OFF;
apex.debug.error("hello", "world");
let messageType: string = apex.message.TYPE.SUCCESS;
apex.lang.addMessages({});
apex.lang.format("hello %0", "john");
let i = apex.item("P1_NUM").getValue();