const DivbloxBase = require("divbloxjs/divblox");
const MeterModelBase = require("divbloxjs/dx-orm/generated/models/meter.model-base");

/**
 * An object model class used to describe the entity Meter in an OOP manner
 */
class MeterModel extends MeterModelBase {
    /**
     * Basic initialization for the meter object model class.
     * @param {DivbloxBase} dxInstance An instance of divbloxjs to allow for access to the data layer
     * @param {string} entityName Optional. The name of the entity to deal with. This will only be used if this base class is
     * used to instantiate an object. Otherwise, child classes will set their own entity name in their constructors
     * @param {string} globalIdentifier Optional. The uniqueIdentifier token for a globalIdentifier object.
     * Used to determine current user information if it is required for audit purposes
     */
    constructor(dxInstance, entityName = "meter", globalIdentifier = "") {
        super(dxInstance, entityName, globalIdentifier);
    }
}

module.exports = MeterModel;
