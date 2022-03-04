"use strict";
exports.__esModule = true;
exports.KhmerDate = void 0;
var KhmerDate = /** @class */ (function () {
    function KhmerDate() {
        this.now = new Date();
    }
    KhmerDate.prototype.khmerNum = function (num) {
        var khmerNumber = '';
        var numbersKhmer = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
        var numInteger = num;
        var numString = numInteger.toString();
        for (var i = 0; i < numString.length; i++) {
            khmerNumber += numbersKhmer[parseInt(numString[i])];
        }
        return khmerNumber;
    };
    KhmerDate.prototype.check = function (date) {
        if (date === void 0) { date = new Date(); }
        var time = this.now.getTime() - date.getTime();
        var seconds = Math.floor(time / 1000), minutes = Math.floor(seconds / 60), hours = Math.floor(minutes / 60), days = Math.floor(hours / 24), months = Math.floor(days / 30), years = Math.floor(days / 365);
        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        days %= 30;
        months %= 12;
        if (years >= 1) {
            console.log(this.khmerNum(years), "ឆ្នាំមុន");
        }
        else if (years == 0) {
            if (months >= 1) {
                console.log(this.khmerNum(months), "ខែមុន");
            }
            else if (months == 0) {
                if (days >= 1) {
                    console.log(this.khmerNum(days), "ថ្ងៃមុន");
                }
                else if (days == 0) {
                    if (hours >= 1) {
                        console.log(this.khmerNum(hours), "ម៉ោងមុន");
                    }
                    else if (hours == 0) {
                        if (minutes >= 1) {
                            console.log(this.khmerNum(minutes), "នាទីមុន");
                        }
                        else if (minutes == 0)
                            console.log("មុន​នេះបន្តិច");
                    }
                }
            }
        }
    };
    return KhmerDate;
}());
exports.KhmerDate = KhmerDate;
