describe("thundersquared.com", () => {
  this.tags = ["sqrd"];
  this.siteKey = "thundersquared.com";

  before((browser) => browser.navigateTo("https://thundersquared.com/"));

  it("test thundersquared.com", (browser) => {
    browser
      .waitForElementVisible("body")
      .assert.titleContains("thundersquared — Let's make, better.")
      .assert.screenshotIdenticalToBaseline("body", `${this.siteKey}-header`);

    expect(browser.element.find("#intro h2").getText()).to.contain(
      `Il nostro obbiettivo è crescere`
    );

    browser.element("#intro").moveTo(0, 0);

    browser
      .waitForElementVisible("#intro")
      .assert.screenshotIdenticalToBaseline(
        "#intro",
        `${this.siteKey}-content`
      );
  });

  after((browser) => browser.end());
});
