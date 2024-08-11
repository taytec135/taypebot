function criarBarra(var_nome, var_avatar) {
  var varStatus = document.createElement("span");
  varStatus.className = "status";
  var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
  
  var userBar = document.createElement("div");
  userBar.className = "user-bar";

  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="'+var_avatar+'">';

  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
  
  name.appendChild(varStatus);

  userBar.appendChild(avatar);
  userBar.appendChild(name);

  if (elementoPai) {
    elementoPai.prepend(userBar);
  }
  
  const botBody = elementoPai;
  const status = varStatus;
  let mensagesLength = 0;

  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;

    if (isTyping && sibling?.src) {
      status.innerText = 'gravando audio...';
    } else if (isTyping) {
      status.innerText = 'digitando...';
    } else {
      status.innerText = 'Online';
    }

    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');
    
    if (allMessages.length > mensagesLength) {        
      if (!isTyping) {
        for (let i = mensagesLength; i < allMessages.length; i++) {
          const iconContainer = document.createElement('div');
          const checkIcon = `<svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute; bottom: 0; right: 5px; z-index: 99" height="20" width="18">
            <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
              <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
              <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
            </g>
          </svg>`;
          iconContainer.innerHTML = checkIcon;
          
          const currentMsg = allMessages[i];
          currentMsg.append(iconContainer);
        }
        
        mensagesLength = allMessages.length;
      }
    }
  }, 400);

  var cssId = 'myCss';  // você pode codificar o caminho do css para gerar o id..
  if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fireprojectx.github.io/mlstudy/stylebot.css';
    link.media = 'all';
    head.appendChild(link);
  }
}
