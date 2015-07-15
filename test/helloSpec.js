describe("Hello", function() {
	it("says hello to the receiver", function() {
		expect(sayHello('Jane')).toBe("Hello, Jane!");
	});
});