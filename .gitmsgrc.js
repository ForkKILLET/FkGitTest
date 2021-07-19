module.exports = {
	debug: false,
	itemTy: o => o.concat("*"),
	checker: {
		itemTy: N => {
		if (N.l === 3 && N.c === "-")
			throw `is root item, so shouldn't be "-" type`
		}
	}
}

