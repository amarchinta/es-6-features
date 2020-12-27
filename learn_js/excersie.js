function PersonalWatch(argument) {
	
	let startTime, endTime, running, duration = 0;

	this.start = function (argument) {
		if (running) {
			console.log('stopwatch already running');
		}
		running = true;
		startTime = new Date();
	};

	this.stop = function (argument) {
		if (!running) {
			console.log('stopwatch is not running');
		}

		running = false;

		endTime = new Date();

		const seconds = (startTime.getTime() - endTime.getTime())/1000;
		duration += seconds;
	};

	this.reset = function (argument) {
		startTime = 0;
		endTime = 0;
		running = null;
		duration = null;
	};

}