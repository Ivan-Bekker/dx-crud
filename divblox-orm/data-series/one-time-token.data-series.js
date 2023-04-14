const DxBaseDataSeries = require("divbloxjs/dx-orm/data-series-base");
const OneTimeToken = require("../models/one-time-token.model");

/**
 * Base OneTimeToken entity Data series class.
 * To be used as a default when building any type of data series based on this entity.
 * Refer to DxDataSeriesBase for what functions you can override here
 */
class OneTimeTokenBaseDataSeries extends DxBaseDataSeries {
    constructor(dataSeriesConfig = {}, queryBuilderConfig = {}) {
        super(dataSeriesConfig, queryBuilderConfig);
    }

    async setFields() {
        this.fields = [OneTimeToken.id, OneTimeToken.token, OneTimeToken.expiryTime];
    }
}

module.exports = OneTimeTokenBaseDataSeries;