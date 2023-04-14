const DxBaseDataSeries = require("divbloxjs/dx-orm/data-series-base");
const GlobalIdentifier = require("../models/global-identifier.model");

/**
 * Base GlobalIdentifier entity Data series class.
 * To be used as a default when building any type of data series based on this entity.
 * Refer to DxDataSeriesBase for what functions you can override here
 */
class GlobalIdentifierBaseDataSeries extends DxBaseDataSeries {
    constructor(dataSeriesConfig = {}, queryBuilderConfig = {}) {
        super(dataSeriesConfig, queryBuilderConfig);
    }

    async setFields() {
        this.fields = [GlobalIdentifier.id, GlobalIdentifier.uniqueIdentifier, GlobalIdentifier.linkedEntity, GlobalIdentifier.linkedEntityId, GlobalIdentifier.globalIdentifierGroupings, GlobalIdentifier.isSuperUser, GlobalIdentifier.configurationData, GlobalIdentifier.sessionData];
    }
}

module.exports = GlobalIdentifierBaseDataSeries;