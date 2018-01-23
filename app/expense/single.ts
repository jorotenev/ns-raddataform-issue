import {EventData} from "tns-core-modules/data/observable";
import {Page} from "tns-core-modules/ui/page";
import {SingleExpenseModel} from "./single-view-model";
import {DataFormEventData} from "nativescript-pro-ui/dataform";

let page: Page;
let dataform;
let expense = {
    id:1,
    amount:{
        raw_amount:11,
        currency:"EUR"
    },
    name:"opa",
    timestamp_utc:"time",
    tags:[]
};
export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    dataform = page.getViewById('expenseEditForm');
    page.bindingContext = new SingleExpenseModel(expense)
}

export function onValidate(d: DataFormEventData) {
    console.log(`onValidate ${d.propertyName}=${d.entityProperty.valueCandidate} `);
    d.returnValue = true;
}

export function onValidated(d: DataFormEventData) {
    console.log(`onValidated ${d.propertyName}=${d.entityProperty.valueCandidate} `);

    d.returnValue = true;
}

export function onCommit(d: DataFormEventData) {
    console.log(`onCommit ${d.propertyName}=${d.entityProperty.valueCandidate} `);
    d.returnValue=true
}

export function onCommitted(d: DataFormEventData) {
    console.log(`onCommitted ${d.propertyName}=${d.entityProperty} `);
    console.dir(JSON.parse(dataform.editedObject));
    console.dir(expense);
}