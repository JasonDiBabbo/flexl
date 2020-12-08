import { LogLevel } from './log-level';

export interface LogEvent {
    data: { [key: string]: string | number };

    level: LogLevel;

    message: string;
}
