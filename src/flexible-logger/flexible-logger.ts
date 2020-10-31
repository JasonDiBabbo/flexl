import { FlexibleLoggerChannel } from './flexible-logger-channel';
import { FlexibleLoggerOptions } from './flexible-logger-options';

export class FlexibleLogger {
    public channels: FlexibleLoggerChannel[];

    constructor(options?: FlexibleLoggerOptions) {
        this.channels = options?.channels || [];
    }
}
