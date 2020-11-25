function copyToClipboard(value){
	const textarea = document.createElement("textarea");
    const text     = value;

    if (!text) {
        return;
    }

    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

	toastr.options.timeOut = 2000;
	toastr.success('Skopiowano do schowka');
}