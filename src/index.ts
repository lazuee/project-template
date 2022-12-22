import {hello} from '#root/hello';

process.env.NODE_ENV !== 'production' &&
	(() => {
		console.log(hello('lazuee'));
	})();
