define([
	"dojo/_base/declare",
	"./ContainerInput",
	"dojo/i18n!../nls/dijit"
], function(
	declare,
	ContainerInput,
	dijitNls
) {

return declare("davinci.libraries.dojo.dijit.layout.StackContainerInput", ContainerInput, {

	propertyName: "title",
	supportsHTML: "true",
	helpText: "",
	
	constructor : function() {
		this.helpText = dijitNls.stackContainerInputHelp;
	}
});

});