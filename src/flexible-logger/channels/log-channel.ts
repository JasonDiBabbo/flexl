import { LogEvent } from '../models';

/**
 * The class definition of a log channel.
 */
export abstract class LogChannel {
    /**
     * Logs an event to the configured output source.
     *
     * @param event The event to log.
     */
    public abstract log(event: LogEvent): void;
}
