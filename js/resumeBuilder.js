var name = "John M. Keynes";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Dead Economist";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);