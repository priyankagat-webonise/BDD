describe("Email validation",function()
{	
	it("check email should not be empty ",function()
	{
		expect(false).toBe(isValidEmail(" "));
	});

	it("check email should contain both @ and . ",function()
	{
		expect(true).toBe(isValidEmail("adc@example.com"));
	});
	
	it("check email should contain both @ and . ",function()
	{
		expect(true).toBe(isValidEmail("adc@example.com.in"));
	});
	

	it("check email should not contain only @ ",function()
	{
		expect(false).toBe(isValidEmail("adc@examplecom"));
	});
	
	it("check email should not contain only . ",function()
	{
		expect(false).toBe(isValidEmail("adcexample.com"));
	});

});




