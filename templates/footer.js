function injectFooter() {
    var xhr = new XMLHttpRequest();

    var footerTemplatePath = '/templates/footer.html';

    xhr.open('GET', footerTemplatePath, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var footer = document.createElement('footer');
            footer.innerHTML = xhr.responseText;
            document.body.append(footer);
        }
    };

    xhr.send();
}

injectFooter();
document.body.removeChild(document.querySelector('script[src="/templates/footer.js"]'));
