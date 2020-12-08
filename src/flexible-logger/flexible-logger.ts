import { LogChannel } from './channels';
import { FlexibleLoggerOptions } from './flexible-logger-options';
import { LogEventData, LogLevel } from './models';

export class FlexibleLogger {
    public channels: LogChannel[] = [];

    constructor(options?: FlexibleLoggerOptions) {
        if (options) {
            this.channels = options?.channels || this.channels;
        }
    }

    public registerChannel(channel: LogChannel): FlexibleLogger {
        if (channel) {
            this.channels.push(channel);
        }

        return this;
    }

    public removeChannels(channel: LogChannel): FlexibleLogger {
        if (channel) {
            const index = this.channels.indexOf(channel);

            if (index !== -1) {
                this.channels.splice(index, 1);
            }
        } else {
            this.channels = [];
        }

        return this;
    }

    public logDebug(message: string, data?: LogEventData): void {
        this.log(LogLevel.Debug, message, data || {});
    }

    public logInfo(message: string, data?: LogEventData): void {
        this.log(LogLevel.Info, message, data || {});
    }

    public logWarning(message: string, data?: LogEventData): void {
        this.log(LogLevel.Warning, message, data || {});
    }

    public logError(message: string, data?: LogEventData): void {
        this.log(LogLevel.Error, message, data || {});
    }

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
