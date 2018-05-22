var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // add private, public, or protected in front of the variable name
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created: " + this.name);
    }
    // methods can also be made private
    User.prototype.register = function () {
        console.log(this.name + ' is now registered.');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice.');
    };
    return User;
}());
// this class inherits the User class
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, 'Mike Smith', 'mikesmith@gmail.com', 33);
mike.payInvoice();
var john = new User('John Doe', 'johndoe@gmail.com', 22);
// this age throws an error if the variable age is a private variable. It's for the developer not the user. Check terminal for the error. 
console.log(john.age);
john.register();
