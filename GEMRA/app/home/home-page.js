const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onTap(args) {
    const button = args.object;
    alert(`Search tapped`);
}
exports.onTap = onTap;

exports.onNavigatingTo = onNavigatingTo;
