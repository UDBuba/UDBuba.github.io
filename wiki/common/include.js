function loadScript(url)
{
    var head = document.getElementsByTagName('head');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript("http://code.jquery.com/jquery-2.1.1.min.js");