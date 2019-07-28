// Code modified from https://github.com/labrose/webextensions-examples/blob/master/emoji-substitution/
// This Source Code Form is subject to the terms of the 
// Mozilla Public License, v. 2.0. If a copy of the MPL 
// was not distributed with this file, You can obtain 
// one at http://mozilla.org/MPL/2.0/.

function replaceText (node) {

  if (node.nodeType === Node.TEXT_NODE) {
    
    if (node.parentNode &&
        node.parentNode.nodeName === 'TEXTAREA') {
      return;
    }

    let content = node.textContent;

    content = content.replace('pewdiepie', 'poodeepoo');
    content = content.replace('PewDiePie', 'PooDeePoo');
    content = content.replace('Pewdiepie', 'Poodeepoo');
    
    node.textContent = content;
    
  }
  else {

    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }    
  }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        replaceText(newNode);
      }
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});