const DivbloxBase = require("divbloxjs/divblox");
const OneTimeTokenModelBase = require("divbloxjs/dx-orm/generated/models/one-time-token.model-base");

/**
 * An object model class used to describe the entity OneTimeToken in an OOP manner
 */
class OneTimeTokenModel extends OneTimeTokenModelBase {
    /**
     * Basic initialization for the oneTimeToken object model class.
     * @param {DivbloxBase} dxInstance An instance of divbloxjs to allow for access to the data layer
     * @param {string} entityName Optional. The name of the entity to deal with. This will only be used if this base class is
     * used to instantiate an object. Otherwise, child classes will set their own entity name in their constructors
     * @param {string} globalIdentifier Optional. The uniqueIdentifier token for a globalIdentifier object.
     * Used to determine current user information if it is required for audit purposes
     */
    constructor(dxInstance, entityName = "oneTimeToken", globalIdentifier = "") {
        super(dxInstance, entityName, globalIdentifier);
    }
}

module.exports = OneTimeTokenModel;
