// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class own anything static, not the objects)

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumfarenece(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumfarenece(10));
console.log(MathUtil.getArea(10));

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
}

const user1 = new User("Ashutosh");

console.log(user1.username);
console.log(User.userCount);
