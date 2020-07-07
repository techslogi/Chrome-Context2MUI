function getword(info,tab) {
  chrome.tabs.create({  
    url: "https://secure.volvo.com/mgmui/User/UserManage.aspx?userid=" + info.selectionText
  });
}
chrome.contextMenus.create({
  title: "Pesquisar no MUI %s", 
  contexts:["selection"], 
  onclick: getword
});