const DxBaseDataSeries = require("divbloxjs/dx-orm/data-series-base");
const UserAccount = require("../models/user-account.model");

/**
 * Base UserAccount entity Data series class.
 * To be used as a default when building any type of data series based on this entity.
 * Refer to DxDataSeriesBase for what functions you can override here
 */
class UserAccountBaseDataSeries extends DxBaseDataSeries {
    constructor(dataSeriesConfig = {}, queryBuilderConfig = {}) {
        super(dataSeriesConfig, queryBuilderConfig);
    }

    async setFields() {
        this.fields = [UserAccount.id, UserAccount.firstName, UserAccount.middleNames, UserAccount.lastName, UserAccount.maidenName, UserAccount.nickName, UserAccount.identificationNumber, UserAccount.emailAddress, UserAccount.loginName, UserAccount.password, UserAccount.profilePictureUrl, UserAccount.mainContactNumber, UserAccount.secondaryContactNumber, UserAccount.title, UserAccount.dateOfBirth, UserAccount.gender, UserAccount.physicalAddressLineOne, UserAccount.physicalAddressLineTwo, UserAccount.physicalAddressLineThree, UserAccount.physicalAddressLineFour, UserAccount.postalAddressLineOne, UserAccount.postalAddressLineTwo, UserAccount.postalAddressLineThree, UserAccount.postalAddressLineFour, UserAccount.status, UserAccount.isAccessBlocked, UserAccount.blockedReason, UserAccount.isEmailVerified];
    }
}

module.exports = UserAccountBaseDataSeries;