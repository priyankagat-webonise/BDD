describe("Password validation",function()
{	
	it("check password should not be empty ",function()
	{
		expect(isValidPassword("")).toBe(false);
	});

	it("check password should alphanumeric",function()
	{
		expect(isValidPassword("daf@hg12")).toBe(true);
	});

	it("check password should contains special character ",function()
	{
		expect(isValidPassword("gdgfhk45")).toBe(false);
	});

	it("check password should contains character ",function()
	{
		expect(isValidPassword("@#45635845")).toBe(false);
	});

	it("check password should contains number ",function()
	{
		expect(isValidPassword("@#shgdtsdf")).toBe(false);
	});
});
