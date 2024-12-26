class Site {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.currentSite = new Site(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newSite = new Site(url);

  newSite.prev = this.currentSite;
  this.currentSite.next = newSite;

  this.currentSite = newSite;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps > 0 && this.currentSite.prev) {
    this.currentSite = this.currentSite.prev;
    steps--;
  }

  return this.currentSite.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps > 0 && this.currentSite.next) {
    this.currentSite = this.currentSite.next;
    steps--;
  }

  return this.currentSite.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
