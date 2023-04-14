const DxBaseDataSeries = require("divbloxjs/dx-orm/data-series-base");
const Meter = require("../models/meter.model");

/**
 * Base Meter entity Data series class.
 * To be used as a default when building any type of data series based on this entity.
 * Refer to DxDataSeriesBase for what functions you can override here
 */
class MeterBaseDataSeries extends DxBaseDataSeries {
    constructor(dataSeriesConfig = {}, queryBuilderConfig = {}) {
        super(dataSeriesConfig, queryBuilderConfig);
    }

    async setFields() {
        this.fields = [Meter.id, Meter.MeterNumber];
    }
}

module.exports = MeterBaseDataSeries;