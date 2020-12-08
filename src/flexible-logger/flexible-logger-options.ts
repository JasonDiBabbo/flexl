import { LogChannel } from './channels';

/**
 * The typed interface of the options to configure a flexible logger.
 */
export interface FlexibleLoggerOptions {
    /**
     * The channels to log events to.
     */
    channels?: LogChannel[];
}
