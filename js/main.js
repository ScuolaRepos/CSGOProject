var ter = document.querySelector('.terrorist');
var body = document.querySelector("body");

function terroristtoggle()
{
    terroristmove.play();
    ter.classList.toggle('drift');
    body.classList.add('screenshake');
    setTimeout(() =>
    {
      body.classList.remove('screenshake');
    }, 1500);
}

function cratedivtoggle()  
{
  var x = document.getElementById("cratediv");
  
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}

function cratedivtoggle2()  
{
  var x = document.getElementById("cratediv2");
  
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}

function cratedivtoggle3()  
{
  var x = document.getElementById("cratediv3");
  
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}

function ShowContent(content) 
{
  document.getElementById("karambit").style.display = 'none';
  document.getElementById("bayonet").style.display = 'none'
  document.getElementById("m9").style.display = 'none';
  document.getElementById("butterfly").style.display = 'none';
  document.getElementById("awp").style.display = 'none';
  document.getElementById("ak").style.display = 'none';
  document.getElementById(content).style.display = 'block';
}

function alertReload() 
{
  if(!alert('Your review has been sent!'))
  {
    window.location.reload();
  }
}

function removeDiv(content) 
{
  document.getElementById(content).style.display = 'none';
}



