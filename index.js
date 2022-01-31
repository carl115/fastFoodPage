const windowInit = document.getElementById('window-init');
const btnWindow = document.getElementById('btn-to-accept');
const btnSearch = document.getElementById('btn-search');
const barSearch = document.getElementById('bar-search');
const btnCancelSrc = document.getElementById('cancel');

function windowHidden() {
    windowInit.style.display = 'none';
}

function searchBar() {
    barSearch.style.display = 'flex';
}

function cancelSearch() {
    barSearch.style.display = 'none';
}

btnWindow.addEventListener('click', windowHidden);
btnSearch.addEventListener('click', searchBar);
btnCancelSrc.addEventListener('click', cancelSearch);