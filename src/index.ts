import {hello} from '#root/hello';

process.env.NODE_ENV === 'development' &&
	(() => {
		console.log(hello('lazuee'));
	})();
