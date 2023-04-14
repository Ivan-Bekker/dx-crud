const DxBaseDataSeries = require("divbloxjs/dx-orm/data-series-base");
const AuditLogEntry = require("../models/audit-log-entry.model");

/**
 * Base AuditLogEntry entity Data series class.
 * To be used as a default when building any type of data series based on this entity.
 * Refer to DxDataSeriesBase for what functions you can override here
 */
class AuditLogEntryBaseDataSeries extends DxBaseDataSeries {
    constructor(dataSeriesConfig = {}, queryBuilderConfig = {}) {
        super(dataSeriesConfig, queryBuilderConfig);
    }

    async setFields() {
        this.fields = [AuditLogEntry.id, AuditLogEntry.entryTimeStamp, AuditLogEntry.objectName, AuditLogEntry.modificationType, AuditLogEntry.objectId, AuditLogEntry.entryDetail, AuditLogEntry.globalIdentifier];
    }
}

module.exports = AuditLogEntryBaseDataSeries;