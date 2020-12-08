import { LogEventData } from './log-event-data';
import { LogLevel } from './log-level';

/**
 * The typed interface of a log event.
 */
export interface LogEvent {
    /**
     * Data related to the event being logged.
     */
    data: LogEventData;

    /**
     * The severity level of the event being logged.
     */
    level: LogLevel;

    /**
     * The message describing the event being logged.
     */
    message: string;
}
