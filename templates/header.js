function injectHeader() {
    var xhr = new XMLHttpRequest();

    var headerTemplatePath = '/templates/header.html';

    xhr.open('GET', headerTemplatePath, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var header = document.createElement('header');
            header.innerHTML = xhr.responseText;
            document.body.prepend(header);
        }
    };

    xhr.send();
}

injectHeader();
document.body.removeChild(document.querySelector('script[src="/templates/header.js"]'));
