describe(" validation",function()
{
 	beforeEach(function () {  
	jasmine.addMatchers({
		isValidPasswordCustom: function()
		{
			return{
			compare:function(actual)
			{
				return {
				pass:isValidPassword(actual)
				};	
			}
	   };	
	}
	});
	});
    
	
	beforeEach(function () {  
	jasmine.addMatchers({
		isValidEmailCustom: function()
		{
			return{
			compare:function(actual)
			{
				return {
				pass:isValidEmail(actual)
				};	
			}
	   };	
	}
	});
	});

	it("check email should not be empty ",function()
	{
		expect("").not.isValidEmailCustom();
	});

	it("check email should contain both @ and . ",function()
	{
		expect("adc@example.com").isValidEmailCustom();
	});
	
	it("check email should contain both @ and . ",function()
	{
		expect("adc@example.com.in").isValidEmailCustom();
	});
	

	it("check email should not contain only @ ",function()
	{
		expect("adc@examplecom").not.isValidEmailCustom();
	});
	
	it("check email should not contain only . ",function()
	{
		expect("adcexample.com").not.isValidEmailCustom();
	});




	it("check password should alphanumeric",function()
	{
		expect("hgs@436gh").isValidPasswordCustom();
	});

	it("check password should not empty",function()
	{
		expect("").not.isValidPasswordCustom();
	});
	
	it("check password should contains special character ",function()
	{
		expect("gdgfhk45").not.isValidPasswordCustom();
	});

	it("check password should contains character ",function()
	{
		expect("@#45635845").not.isValidPasswordCustom();
	});

	it("check password should contains number ",function()
	{
		expect("@#shgdtsdf").not.isValidPasswordCustom();
	});
});
