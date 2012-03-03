describe("Presto",function() {
  beforeEach(function() {
    this.App = Presto;
  });
  beforeEach(function() {
    this.screenHeight = 30;
    this.fontHeight = 10;
  });
  beforeEach(function() {
    this.App.mainController.get("screen").set("height",this.screenHeight);
    this.App.mainController.get("font").set("height",this.fontHeight);
  });
  describe("when text is provided that has more lines than will fit on a single screen column", function() {
    beforeEach(function() {
      this.textList = [
        "line one",
        "line two",
        "line three",
        "line four",
        "line five"
      ];
      this.App.mainController.get("text").set("value",this.textList.join("\n"));
    });
    it("should split the text into two columns",function() {
      expect(this.App.mainController.get("content").length).toEqual(2);
    });
    it("should have the first column containing three lines",function() {
      expect(this.App.mainController.get("content")[0]).toEqual(this.textList.slice(0,3).join("\n"));
    });
    it("should have the second column containing the remaining two lines",function() {
      expect(this.App.mainController.get("content")[1]).toEqual(this.textList.slice(3,6).join("\n"));
    });
  });
  describe("when text is provided that has less lines than will fit on a single screen column", function() {
    beforeEach(function() {
      this.textList = [
        "line one",
        "line two",
      ];
      this.App.mainController.get("text").set("value",this.textList.join("\n"));
    });
    it("should contain one column",function() {
      expect(this.App.mainController.get("content").length).toEqual(1);
    });
    it("should have the first column containing all the lines",function() {
      expect(this.App.mainController.get("content")[0]).toEqual(this.textList.join("\n"));
    });
  });
  describe("when text is provided that has the same number of lines than will fit on a single screen column", function() {
    beforeEach(function() {
      this.textList = [
        "line one",
        "line two",
        "line three",
      ];
      this.App.mainController.get("text").set("value",this.textList.join("\n"));
    });
    it("should contain one column",function() {
      expect(this.App.mainController.get("content").length).toEqual(1);
    });
    it("should have the first column containing all the lines",function() {
      expect(this.App.mainController.get("content")[0]).toEqual(this.textList.join("\n"));
    });
  });
  describe("when empty text is provided", function() {
    beforeEach(function() {
      this.text = "";
      this.App.mainController.get("text").set("value",this.text);
    });
    it("should contain no columns",function() {
      expect(this.App.mainController.get("content").length).toEqual(0);
    });
  });
});
