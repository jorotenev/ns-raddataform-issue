"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var SingleExpenseModel = /** @class */ (function (_super) {
    __extends(SingleExpenseModel, _super);
    function SingleExpenseModel(exp) {
        var _this = _super.call(this) || this;
        _this.expense = exp;
        _this.amountConverter = new AmountConverter(exp);
        _this.tagsConverter = new TagsConverter();
        return _this;
    }
    Object.defineProperty(SingleExpenseModel.prototype, "expense", {
        get: function () {
            return this.get("_expense");
        },
        set: function (value) {
            this.set("_expense", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleExpenseModel.prototype, "amountConverter", {
        get: function () {
            return this.get("_amountConverter");
        },
        set: function (converter) {
            this.set("_amountConverter", converter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleExpenseModel.prototype, "tagsConverter", {
        get: function () {
            return this.get("_tagsConverter");
        },
        set: function (converter) {
            this.set("_tagsConverter", converter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleExpenseModel.prototype, "currency", {
        get: function () {
            return this.get("_expense").amount.currency;
        },
        enumerable: true,
        configurable: true
    });
    return SingleExpenseModel;
}(observable_1.Observable));
exports.SingleExpenseModel = SingleExpenseModel;
var AmountConverter = /** @class */ (function () {
    function AmountConverter(expense) {
        this.expense = expense;
    }
    AmountConverter.prototype.convertFrom = function (value) {
        try {
            console.log("convertFrom" + value);
            return value.get('raw_amount');
        }
        catch (_) {
            return -1;
        }
    };
    AmountConverter.prototype.convertTo = function (value) {
        var res = {
            raw_amount: parseInt(value),
            currency: this.expense.amount.currency
        };
        console.log(res);
        console.log("convertTO " + value);
        return res;
    };
    return AmountConverter;
}());
exports.AmountConverter = AmountConverter;
var TagsConverter = /** @class */ (function () {
    function TagsConverter() {
    }
    TagsConverter.prototype.convertFrom = function (source) {
        console.log("convertFrom");
        console.log(source);
        return source.join(", ");
    };
    TagsConverter.prototype.convertTo = function (source) {
        console.log("convertTo");
        console.log(source);
        var result = source.split(",").map(function (value) { return value.trim(); });
        console.log(result);
        console.log(typeof result);
        return result;
    };
    return TagsConverter;
}());
exports.TagsConverter = TagsConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGUtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE0RDtBQUk1RDtJQUF3QyxzQ0FBVTtJQUc5Qyw0QkFBWSxHQUFhO1FBQXpCLFlBQ0ksaUJBQU8sU0FJVjtRQUhHLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBRUQsc0JBQUksdUNBQU87YUFJWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7YUFORCxVQUFZLEtBQWU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSwrQ0FBZTthQUluQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDdkMsQ0FBQzthQU5ELFVBQW9CLFNBQTBCO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDM0MsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSw2Q0FBYTthQUlqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDckMsQ0FBQzthQU5ELFVBQWtCLFNBQXdCO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDekMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx3Q0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMvQyxDQUFDOzs7T0FBQTtJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUF3Qyx1QkFBVSxHQXFDakQ7QUFyQ1ksZ0RBQWtCO0FBdUMvQjtJQUNJLHlCQUFvQixPQUFPO1FBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUMzQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEtBQVU7UUFDbEIsSUFBSSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUE7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEMsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksR0FBRyxHQUFHO1lBQ04sVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7U0FDekMsQ0FBQTtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtJQUNkLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksMENBQWU7QUF5QjVCO0lBQUE7SUFpQkEsQ0FBQztJQWhCRyxtQ0FBVyxHQUFYLFVBQVksTUFBVztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQztRQUUzQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtFeHBlbnNlQW1vdW50LCBJRXhwZW5zZX0gZnJvbSBcIi4uL21vZGVscy9leHBlbnNlXCI7XG5pbXBvcnQge1Byb3BlcnR5Q29udmVydGVyfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybVwiO1xuXG5leHBvcnQgY2xhc3MgU2luZ2xlRXhwZW5zZU1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfZXhwZW5zZTtcblxuICAgIGNvbnN0cnVjdG9yKGV4cDogSUV4cGVuc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHBlbnNlID0gZXhwO1xuICAgICAgICB0aGlzLmFtb3VudENvbnZlcnRlciA9IG5ldyBBbW91bnRDb252ZXJ0ZXIoZXhwKTtcbiAgICAgICAgdGhpcy50YWdzQ29udmVydGVyID0gbmV3IFRhZ3NDb252ZXJ0ZXIoKTtcbiAgICB9XG5cbiAgICBzZXQgZXhwZW5zZSh2YWx1ZTogSUV4cGVuc2UpIHtcbiAgICAgICAgdGhpcy5zZXQoXCJfZXhwZW5zZVwiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGV4cGVuc2UoKTogSUV4cGVuc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJfZXhwZW5zZVwiKTtcbiAgICB9XG5cbiAgICBzZXQgYW1vdW50Q29udmVydGVyKGNvbnZlcnRlcjogQW1vdW50Q29udmVydGVyKSB7XG4gICAgICAgIHRoaXMuc2V0KFwiX2Ftb3VudENvbnZlcnRlclwiLCBjb252ZXJ0ZXIpXG4gICAgfVxuXG4gICAgZ2V0IGFtb3VudENvbnZlcnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiX2Ftb3VudENvbnZlcnRlclwiKVxuICAgIH1cblxuICAgIHNldCB0YWdzQ29udmVydGVyKGNvbnZlcnRlcjogVGFnc0NvbnZlcnRlcikge1xuICAgICAgICB0aGlzLnNldChcIl90YWdzQ29udmVydGVyXCIsIGNvbnZlcnRlcilcbiAgICB9XG5cbiAgICBnZXQgdGFnc0NvbnZlcnRlcigpOiBUYWdzQ29udmVydGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiX3RhZ3NDb252ZXJ0ZXJcIilcbiAgICB9XG5cbiAgICBnZXQgY3VycmVuY3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChcIl9leHBlbnNlXCIpLmFtb3VudC5jdXJyZW5jeVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFtb3VudENvbnZlcnRlciBpbXBsZW1lbnRzIFByb3BlcnR5Q29udmVydGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4cGVuc2UpIHtcbiAgICB9XG5cbiAgICBjb252ZXJ0RnJvbSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRGcm9tXCIgKyB2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5nZXQoJ3Jhd19hbW91bnQnKVxuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnZlcnRUbyh2YWx1ZTogc3RyaW5nKTogRXhwZW5zZUFtb3VudCB7XG4gICAgICAgIGxldCByZXMgPSB7XG4gICAgICAgICAgICByYXdfYW1vdW50OiBwYXJzZUludCh2YWx1ZSksXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5leHBlbnNlLmFtb3VudC5jdXJyZW5jeVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb252ZXJ0VE8gXCIgKyB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhZ3NDb252ZXJ0ZXIgaW1wbGVtZW50cyBQcm9wZXJ0eUNvbnZlcnRlciB7XG4gICAgY29udmVydEZyb20oc291cmNlOiBhbnkpOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRGcm9tXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuam9pbihcIiwgXCIpXG4gICAgfVxuXG4gICAgY29udmVydFRvKHNvdXJjZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb252ZXJ0VG9cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBzb3VyY2Uuc3BsaXQoXCIsXCIpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=