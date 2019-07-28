function saveOptions(e) {
  blacklist = document.querySelector("#blacklist").value.split('\n')
  browser.storage.sync.set({
    replacements: [],
    blacklist: blacklist
  });
  e.preventDefault();
}

function restoreOptions() {
  let gettingItem = browser.storage.sync.get({
    replacements: [], 
    blacklist: []
  });
  
  gettingItem.then((items) => {
    console.log(items)
  }, (err) => {
    alert('Error: ' + err)
  })
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);