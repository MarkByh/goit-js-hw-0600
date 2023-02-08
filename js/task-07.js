const inputFontSize = document.getElementById('font-size-control');
const targetText = document.getElementById('text');

inputFontSize.addEventListener('input',chengeFontSize )

function chengeFontSize(event) {
    targetText.style.fontSize = `${inputFontSize.value}px`
}