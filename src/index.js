import "./style.scss";

function isIE() {
	let userAgent = window.navigator.userAgent.toLowerCase();
	if ( userAgent.indexOf( 'msie' ) !== -1 || userAgent.indexOf( 'trident' ) !== -1 ) {
		return true;
	}
	return false;
}

/* DOM構造読み込み完了後にアラート表示のHTMLを挿入 */
document.addEventListener("DOMContentLoaded", function () {
	if ( isIE() ) {
		window.alert("他のブラウザで見ような");
		while(document.body.firstChild){
			document.body.removeChild(document.body.firstChild)
		}
	}
});
