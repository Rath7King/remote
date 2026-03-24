sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sampleapp.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            // Set MFU Dashboard data model
            var oModel = new JSONModel({
                totalMFUUploaded: 71,
                totalMFUApproved: 60,
                totalMFUTemplateOnboarded: 114,
                totalMFURejected: "--",
                createdAt: "Dec 28, 2025 9:00...",
                chartData: {
                    labels: ["EGB", "FINCOST", "ICON", "NFRP", "TREASURY"],
                    approved: [31, 6, 8, 24, 6],
                    pending: [25, 2, 5, 22, 5],
                    uploaded: [5, 2, 7, 2, 1]
                }
            });
            this.setModel(oModel);
        }
    });
});
