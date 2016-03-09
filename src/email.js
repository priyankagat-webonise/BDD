function isValidEmail(email)
{
	var regexpemail=/[A-Za-z0-9]+[@][A-Za-z0-9]+[.][A-Za-z0-9]+/;
	return regexpemail.test(email);
}
