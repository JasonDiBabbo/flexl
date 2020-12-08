import { LogChannel } from './channels';
import { FlexibleLoggerOptions } from './flexible-logger-options';
import { LogEventData, LogLevel } from './models';

/**
 * The class definition of the flexible logger.
 */
export class FlexibleLogger {
    /**
     * The channels the logger is configured to log events to.
     */
    public channels: LogChannel[] = [];

    /**
     * Initializes a new instance of the FlexibleLogger class.
     *
     * @param options The options to configure the flexible logger.
     */
    constructor(options?: FlexibleLoggerOptions) {
        if (options) {
            this.channels = options?.channels || this.channels;
        }
    }

    /**
     * Registers a channel to log to.
     *
     * @param channel The log channel to register.
     */
    public registerChannel(channel: LogChannel): FlexibleLogger {
        if (channel) {
            this.channels.push(channel);
        }

        return this;
    }

    /**
     * Removes a channel from the logger.
     *
     * @param channel The log to remove.
     */
    public removeChannel(channel: LogChannel): FlexibleLogger {
        const index = this.channels.indexOf(channel);

        if (index !== -1) {
            this.channels.splice(index, 1);
        }

        return this;
    }

    /**
     * Removes all log channels from the logger.
     */
    public clearChannels(): FlexibleLogger {
        this.channels = [];

        return this;
    }

    /**
     * Logs a debug event to all registered log channels.
     *
     * @param message The message describing the event.
     * @param data Any data related to the event.
     */
    public logDebug(message: string, data?: LogEventData): void {
        this.log(LogLevel.Debug, message, data || {});
    }

    /**
     * Logs an info event to all registered log channels.
     *
     * @param message The message describing the event.
     * @param data Any data related to the event.
     */
    public logInfo(message: string, data?: LogEventData): void {
        this.log(LogLevel.Info, message, data || {});
    }

    /**
     * Logs a warning event to all registered log channels.
     *
     * @param message The message describing the event.
     * @param data Any data related to the event.
     */
    public logWarning(message: string, data?: LogEventData): void {
        this.log(LogLevel.Warning, message, data || {});
    }

    /**
     * Logs an error event to all registered log channels.
     *
     * @param message The message describing the event.
     * @param data Any data related to the event.
     */
    public logError(message: string, data?: LogEventData): void {
        this.log(LogLevel.Error, message, data || {});
    }

    /**
     * Logs an event to all registered log channels.
     *
     * @param level The severity level of the event.
     * @param message The message describing the event.
     * @param data Any data related to the event.
     */
    private log(level: LogLevel, message: string, data: LogEventData): void {
        this.channels.forEach((channel) => {
            channel.log({
                data,
                level,
                message,
            });
        });
    }
}
