const HomeViewModel = require("./home-view-model");
const httpModule = require("tns-core-modules/http");
const view = require("tns-core-modules/ui/core/view");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onTap(args) {
    const button = args.object;
    //alert(`call web service(tbd1)`);
    let form = args.object.parent;
    let str_search= '';
    if (form) {
        let lbl_search = view.getViewById(form , "search");
        if (lbl_search) {
            str_search = lbl_search.text ;
        }
    }
    
    httpModule.request({
        url: "https://mighty-island-86761.herokuapp.com/search/?bName=" + str_search,
        method: "GET"
    }).then((response) => {
        // Content property of the response is HttpContent
        // The toString method allows you to get the response body as string.
        str = response.content.toString();
        alert(str);
        if (form) {
            let lbl_result = view.getViewById(form , "result");
            if (lbl_result) {
                lbl_result.text = str;
            }
        }
        // The toJSON method allows you to parse the received content to JSON object
        // var obj = response.content.toJSON();
        // The toImage method allows you to get the response body as ImageSource.
        // var img = response.content.toImage();
    }, (e) => {
    });
    
}
exports.onTap = onTap;

exports.onNavigatingTo = onNavigatingTo;
