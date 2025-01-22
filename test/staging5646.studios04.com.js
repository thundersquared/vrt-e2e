describe("staging5646.studios04.com", () => {
  this.tags = ["sqrd"];
  this.siteKey = "staging5646.studios04.com";

  before((browser) => browser.navigateTo("https://staging5646.studios04.com/"));

  it("test staging5646.studios04.com", (browser) => {
    browser
      .waitForElementVisible("body")
      .assert.titleContains(
        "studios04 / La task-force dedicata al tuo successo."
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
  });

  after((browser) => browser.end());
});
