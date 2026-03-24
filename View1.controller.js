sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sampleapp.controller.View1", {

        onInit: function () {
            this._setChartData();
            this._applyChartProperties();
        },

        _setChartData: function () {
            var oBarData = [
                { module: "EGB",      approved: 31, pending: 25, uploaded: 5 },
                { module: "FINCOST",  approved: 6,  pending: 2,  uploaded: 2 },
                { module: "ICON",     approved: 8,  pending: 5,  uploaded: 7 },
                { module: "NFRP",     approved: 24, pending: 22, uploaded: 2 },
                { module: "TREASURY", approved: 6,  pending: 5,  uploaded: 1 }
            ];

            var oModel = new JSONModel({
                totalMFUUploaded: 71,
                totalMFUApproved: 60,
                totalMFUTemplateOnboarded: 114,
                totalMFURejected: "--",
                createdAt: "Dec 28, 2025 9:00...",
                barChartData: oBarData
            });

            this.getView().setModel(oModel);
        },

        _applyChartProperties: function () {
            var oVizFrame = this.byId("mfuBarChart");
            if (oVizFrame) {
                oVizFrame.setVizProperties({
                    legend: {
                        visible: true,
                        title: { visible: false }
                    },
                    plotArea: {
                        colorPalette: ["#0a2540", "#85B7EB", "#00c9a7"],
                        dataLabel: {
                            visible: true,
                            style: { fontSize: "10px", color: "#fff" }
                        },
                        background: { color: "transparent" }
                    },
                    categoryAxis: {
                        title: { visible: false },
                        label: { style: { fontSize: "11px" } }
                    },
                    valueAxis: {
                        title: { visible: false }
                    },
                    title: { visible: false },
                    general: { background: { color: "transparent" } }
                });
            }
        }
    });
});
