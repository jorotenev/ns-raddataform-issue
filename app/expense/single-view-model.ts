import {Observable} from "tns-core-modules/data/observable";
import {ExpenseAmount, IExpense} from "../models/expense";
import {PropertyConverter} from "nativescript-pro-ui/dataform";

export class SingleExpenseModel extends Observable {
    private _expense;

    constructor(exp: IExpense) {
        super();
        this.expense = exp;
        this.amountConverter = new AmountConverter(exp);
        this.tagsConverter = new TagsConverter();
    }

    set expense(value: IExpense) {
        this.set("_expense", value);
    }

    get expense(): IExpense {
        return this.get("_expense");
    }

    set amountConverter(converter: AmountConverter) {
        this.set("_amountConverter", converter)
    }

    get amountConverter() {
        return this.get("_amountConverter")
    }

    set tagsConverter(converter: TagsConverter) {
        this.set("_tagsConverter", converter)
    }

    get tagsConverter(): TagsConverter {
        return this.get("_tagsConverter")
    }

    get currency() {
        return this.get("_expense").amount.currency
    }
}

export class AmountConverter implements PropertyConverter {
    constructor(private expense) {
    }

    convertFrom(value: any) {
        try {
            console.log("convertFrom" + value)
            return value.get('raw_amount')
        } catch (_) {
            return -1
        }
    }

    convertTo(value: string): ExpenseAmount {
        let res = {
            raw_amount: parseInt(value),
            currency: this.expense.amount.currency
        }

        console.log(res);
        console.log("convertTO " + value)
        return res
    }
}

export class TagsConverter implements PropertyConverter {
    convertFrom(source: string[]): any {
        return source.join(", ")
    }

    convertTo(source: string): any {
        return source.split(",").map(value => value.trim());
    }
}

