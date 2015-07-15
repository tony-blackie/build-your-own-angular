function sayHello() {
	return _.template("Hello, <%= name %>!")({name: 'Jane'});
}