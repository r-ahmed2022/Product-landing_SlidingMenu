
document.querySelector("#nav-bar").addEventListener("click", function(event)
{
    let id=event.target
    if(id.id=="feature")
       {
         window.location="#features"
        } else {
          if(id.id=="h-work")
                 {
                   window.location="#h-works"
                  }
                   else
                    {
                       window.location="#pricing"
                    }
    }
})
