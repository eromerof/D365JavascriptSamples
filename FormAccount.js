/**********************************************************************************************************
* Javascript para agregar lógica al formulario de cuenta
* @author enriqueromero.es
* @current version : 1.0
***********************************************************************************************************/
if (typeof (FormAccount) === "undefined")
    FormAccount = { __namespace: true };
var formContext = null;
/*{
    RoleName: "System Administrator",
    RoleId: "6e76afca-e4ee-ee11-904c-00224882b884",
    tab: "tab_details",
    VisibleSections: ["section_technicalinfo","section_services", "section_invoicing", "section_heos"]
},*/
var VisibilityByRolesConfiguration = [
    {
        RoleName: "Administrador del sistema",
        tab: "tab_details",
        VisibleSections: ["section_technicalinfo", "section_services", "section_heos", "section_invoicing"]
    },
    {
        RoleName: "System Customizer",
        tab: "tab_details",
        VisibleSections: ["section_technicalinfo", "section_services", "section_heos"]
    },
    {
        RoleName: "System Customizer",
        tab: "tab_details",
        VisibleSections: ["section_technicalinfo", "section_services", "section_heos"]
    },
    {
        RoleName: "Descalzón - Servicio técnico",
        tab: "tab_details",
        VisibleSections: ["section_technicalinfo", "section_services", "section_heos"]
    }

];


FormAccount.Events =
{
    OnLoad: function (executionContext) {
        "use strict";
        formContext = executionContext.getFormContext();
        var userRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
        userRoles.forEach(function (role) {
            if (role.name === "MiApp - Marketing") {


                var tabObj = formContext.ui.tabs.get("DETAILS_TAB");
                tabObj.sections.get("CONTACT_PREFERENCES").setVisible(true);
            
            
            
            } else if (role.name === "MiApp - Ventas") {


                var tabObj = formContext.ui.tabs.get("DETAILS_TAB");
                tabObj.sections.get("BILLING").setVisible(true);


            }
        });



    },

    OnSave: function (executionContext) {
        "use strict";
    }
};
FormAccount.Functions =
{

};

//formContext.ui.tabs.get(currentRoleConfiguration[0].tab).get(sectionName).setVisible(true);
//SectionVisibilityByRoles.Functions.VisibilityByRolesConfiguration(VisibilityByRolesConfiguration);