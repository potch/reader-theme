
const readerTheme = {
  "images": {
    "headerURL": "/img/bg.svg",
    "additional_backgrounds": [ "/img/book.jpg" ]
  },
  "properties": {
    "additional_backgrounds_alignment": [ "top" ],
    "additional_backgrounds_tiling": [ "no-repeat"  ]
  },
  "colors": {
    "accentcolor": "#432",
    "tab_text": "#fff",
    "textcolor": "#000",
    "toolbar": "rgba(0,0,0,.2)"
  }
};

browser.tabs.onActivated.addListener(event => update(event.tabId));
browser.tabs.onUpdated.addListener(tabId => update(tabId));

async function update(tabId) {

  let tab = await browser.tabs.get(tabId);

  if (!tab.active) {
    return;
  }

  let windowId = tab.windowId;

  if (tab.isInReaderMode) {
    browser.theme.update(windowId, readerTheme);
  } else {
    browser.theme.reset();
  }
}
