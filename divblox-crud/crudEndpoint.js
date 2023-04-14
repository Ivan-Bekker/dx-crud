const divbloxEndpointBase = require("divbloxjs/dx-core-modules/endpoint-base");

class divbloxCrudEndpoint extends divbloxEndpointBase {
    constructor(dxInstance = null) {
        super(dxInstance);

        this.endpointName = "electricityMeter"; // Change this to set the actual url endpoint
        this.endpointDescription = "electricityMeter endpoint"; // Change this to be more descriptive of the endpoint
        this.controller = this.getControllerInstance();

        // You need to do this in order for the operation to be available on the endpoint.
        // Also, this declaration provides the necessary input for swagger ui present the docs for this
        const operations = this.handleOperationDeclarations();
        this.declareOperations(operations);

        // TODO: Declare any entity schemas here if needed
        // An example of how to declare entity schemas for swagger ui
        //this.declareEntitySchemas(["anEntityInYourDataModel"]);
    }
}