const appSettings = {
    siteTitle: "gglas.ninja",
    newsUrlPath: "/blog",
    formatTitle: function(pageTitle) {
        return pageTitle + " - " + this.siteTitle;
    }
};

export default appSettings
