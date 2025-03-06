describe("studios04.it", () => {
  this.tags = ["sqrd"];
  this.siteKey = "studios04.it";

  before((browser) => browser.navigateTo("https://studios04.it/"));

  it("test studios04.it", (browser) => {
    browser
      .waitForElementVisible("body")
      .assert.titleEquals(
        "studios04 / Un team che trasforma le tue idee in successo"
      );

    browser.assert.screenshotIdenticalToBaseline(
      "body",
      `${this.siteKey}-header`
    );

    expect(browser.element.find("#hero-title").getText()).to.contain(
      `oltre i limiti`
    );

    browser.element("#booking").moveTo(0, 0);

    browser
      .waitForElementVisible("#booking")
      .assert.screenshotIdenticalToBaseline(
        "#booking",
        `${this.siteKey}-booking`
      );

    browser
      .waitForElementVisible(".cmplz-cookiebanner")
      .assert.screenshotIdenticalToBaseline(
        ".cmplz-cookiebanner",
        `${this.siteKey}-cookiebanner`
      );
  });

  after((browser) => browser.end());
});
