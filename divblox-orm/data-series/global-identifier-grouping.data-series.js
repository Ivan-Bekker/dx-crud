const DxBaseDataSeries = require("divbloxjs/dx-orm/data-series-base");
const GlobalIdentifierGrouping = require("../models/global-identifier-grouping.model");

/**
 * Base GlobalIdentifierGrouping entity Data series class.
 * To be used as a default when building any type of data series based on this entity.
 * Refer to DxDataSeriesBase for what functions you can override here
 */
class GlobalIdentifierGroupingBaseDataSeries extends DxBaseDataSeries {
    constructor(dataSeriesConfig = {}, queryBuilderConfig = {}) {
        super(dataSeriesConfig, queryBuilderConfig);
    }

    async setFields() {
        this.fields = [GlobalIdentifierGrouping.id, GlobalIdentifierGrouping.name, GlobalIdentifierGrouping.description, GlobalIdentifierGrouping.parentGroupingId];
    }
}

module.exports = GlobalIdentifierGroupingBaseDataSeries;