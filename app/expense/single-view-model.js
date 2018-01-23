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
        return source.join(", ");
    };
    TagsConverter.prototype.convertTo = function (source) {
        return source.split(",").map(function (value) { return value.trim(); });
    };
    return TagsConverter;
}());
exports.TagsConverter = TagsConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGUtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE0RDtBQUk1RDtJQUF3QyxzQ0FBVTtJQUc5Qyw0QkFBWSxHQUFhO1FBQXpCLFlBQ0ksaUJBQU8sU0FJVjtRQUhHLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBRUQsc0JBQUksdUNBQU87YUFJWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7YUFORCxVQUFZLEtBQWU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSwrQ0FBZTthQUluQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDdkMsQ0FBQzthQU5ELFVBQW9CLFNBQTBCO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDM0MsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSw2Q0FBYTthQUlqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDckMsQ0FBQzthQU5ELFVBQWtCLFNBQXdCO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDekMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx3Q0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMvQyxDQUFDOzs7T0FBQTtJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUF3Qyx1QkFBVSxHQXFDakQ7QUFyQ1ksZ0RBQWtCO0FBdUMvQjtJQUNJLHlCQUFvQixPQUFPO1FBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUMzQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEtBQVU7UUFDbEIsSUFBSSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUE7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEMsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksR0FBRyxHQUFHO1lBQ04sVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7U0FDekMsQ0FBQTtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtJQUNkLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksMENBQWU7QUF5QjVCO0lBQUE7SUFRQSxDQUFDO0lBUEcsbUNBQVcsR0FBWCxVQUFZLE1BQWdCO1FBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQge0V4cGVuc2VBbW91bnQsIElFeHBlbnNlfSBmcm9tIFwiLi4vbW9kZWxzL2V4cGVuc2VcIjtcbmltcG9ydCB7UHJvcGVydHlDb252ZXJ0ZXJ9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2RhdGFmb3JtXCI7XG5cbmV4cG9ydCBjbGFzcyBTaW5nbGVFeHBlbnNlTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9leHBlbnNlO1xuXG4gICAgY29uc3RydWN0b3IoZXhwOiBJRXhwZW5zZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cGVuc2UgPSBleHA7XG4gICAgICAgIHRoaXMuYW1vdW50Q29udmVydGVyID0gbmV3IEFtb3VudENvbnZlcnRlcihleHApO1xuICAgICAgICB0aGlzLnRhZ3NDb252ZXJ0ZXIgPSBuZXcgVGFnc0NvbnZlcnRlcigpO1xuICAgIH1cblxuICAgIHNldCBleHBlbnNlKHZhbHVlOiBJRXhwZW5zZSkge1xuICAgICAgICB0aGlzLnNldChcIl9leHBlbnNlXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgZXhwZW5zZSgpOiBJRXhwZW5zZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChcIl9leHBlbnNlXCIpO1xuICAgIH1cblxuICAgIHNldCBhbW91bnRDb252ZXJ0ZXIoY29udmVydGVyOiBBbW91bnRDb252ZXJ0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXQoXCJfYW1vdW50Q29udmVydGVyXCIsIGNvbnZlcnRlcilcbiAgICB9XG5cbiAgICBnZXQgYW1vdW50Q29udmVydGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJfYW1vdW50Q29udmVydGVyXCIpXG4gICAgfVxuXG4gICAgc2V0IHRhZ3NDb252ZXJ0ZXIoY29udmVydGVyOiBUYWdzQ29udmVydGVyKSB7XG4gICAgICAgIHRoaXMuc2V0KFwiX3RhZ3NDb252ZXJ0ZXJcIiwgY29udmVydGVyKVxuICAgIH1cblxuICAgIGdldCB0YWdzQ29udmVydGVyKCk6IFRhZ3NDb252ZXJ0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJfdGFnc0NvbnZlcnRlclwiKVxuICAgIH1cblxuICAgIGdldCBjdXJyZW5jeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiX2V4cGVuc2VcIikuYW1vdW50LmN1cnJlbmN5XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW1vdW50Q29udmVydGVyIGltcGxlbWVudHMgUHJvcGVydHlDb252ZXJ0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhwZW5zZSkge1xuICAgIH1cblxuICAgIGNvbnZlcnRGcm9tKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udmVydEZyb21cIiArIHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmdldCgncmF3X2Ftb3VudCcpXG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFRvKHZhbHVlOiBzdHJpbmcpOiBFeHBlbnNlQW1vdW50IHtcbiAgICAgICAgbGV0IHJlcyA9IHtcbiAgICAgICAgICAgIHJhd19hbW91bnQ6IHBhcnNlSW50KHZhbHVlKSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLmV4cGVuc2UuYW1vdW50LmN1cnJlbmN5XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRUTyBcIiArIHZhbHVlKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFnc0NvbnZlcnRlciBpbXBsZW1lbnRzIFByb3BlcnR5Q29udmVydGVyIHtcbiAgICBjb252ZXJ0RnJvbShzb3VyY2U6IHN0cmluZ1tdKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKFwiLCBcIilcbiAgICB9XG5cbiAgICBjb252ZXJ0VG8oc291cmNlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gc291cmNlLnNwbGl0KFwiLFwiKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKTtcbiAgICB9XG59XG5cbiJdfQ==