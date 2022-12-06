export default {
  config: {
    auth: {
      logo: "https://a2im-strapi-cms-images.s3.amazonaws.com/A2_IM_logo_87b82556e4.png"
    },
    translations: {
      en: {
        "app.components.HomePage.welcome.again": "Heyooooo!",
        "Auth.form.button.login.strapi": "Log in via A2IM-CMS",
        "Auth.form.register.subtitle": "Credentials are only used to authenticate in A2IM-CMS. All saved data will be stored in your database.",
        "Auth.form.welcome.subtitle": "Log in to your A2IM-CMS account",
        "Auth.form.welcome.title": "Welcome to A2IM-CMS!",
        "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by A2IM-CMS,",
        "Settings.application.strapi-version": "A2IM-CMS version",
        "Settings.application.strapiVersion": "A2IM-CMS version",
        "Settings.permissions.users.strapi-super-admin": "Super Admin",
        "Settings.permissions.users.strapi-editor": "Editor",
        "Settings.permissions.users.strapi-author": "Author",
        "admin.pages.MarketPlacePage.offline.subtitle": "You need to be connected to the Internet to access A2IM-CMS Market.",
        "admin.pages.MarketPlacePage.plugin.tooltip.madeBystrapi": "Made by A2IM-CMS",
        "admin.pages.MarketPlacePage.plugin.tooltip.verified": "Plugin verified by A2IM-CMS",
        "admin.pages.MarketPlacePage.plugin.version": "Update your A2IM-CMS version: \"{strapiAppVersion}\" to: \"{versionRange}\"",
        "admin.pages.MarketPlacePage.plugin.version.null": "Unable to verify compatibility with your A2IM-CMS version: \"{strapiAppVersion}\"",
        "admin.pages.MarketPlacePage.subtitle": "Get more out of A2IM-CMS",
        "admin.pages.MarketPlacePage.tab-group.label": "Plugins and Providers for A2IM-CMS",
        "app.components.BlockLink.blog.content": "Read the latest news about A2IM-CMS and the ecosystem.",
        "app.components.BlockLink.tutorial.content": "Follow step-by-step instructions to use and customize A2IM-CMS.",
        "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by A2IM-CMS, we recommend you to create your first Content type!",
        "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about A2IM-CMS. We are giving our best to improve the product based on your feedback.",
        "app.components.LeftMenu.navbrand.title": "A2IM-CMS Dashboard",
        "app.components.MarketplaceBanner": "Discover plugins built by the community, and many more awesome things to kickstart your project, on A2IM-CMS Awesome.",
        "app.components.UpgradePlanModal.text-power": "Unlock the full power of A2IM-CMS by upgrading your plan to the Enterprise Edition",
        "app.components.UpgradePlanModal.text-strapi": "of A2IM-CMS by upgrading your plan to the",
        "components.AutoReloadBlocker.description": "Run A2IM-CMS with one of the following commands:",
        "global.plugins.sentry.description": "Send A2IM-CMS error events to Sentry.",
        "notification.version.update.message": "A new version of A2IM-CMS is available!",
      }
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
