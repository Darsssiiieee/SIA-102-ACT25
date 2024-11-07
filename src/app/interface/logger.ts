export interface Logger {
	log(message: string): void;
}

export interface ConsoleLogger extends Logger {
	logConsole(message: string): void;
}

export interface AlertLogger extends Logger {
	logAlert(message: string): void;
}