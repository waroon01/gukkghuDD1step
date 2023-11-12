class gukkghuDD {
    constructor(dropdownId, initialData = []) {
        this.dropdown = document.getElementById(dropdownId);
        this.setOptions(initialData);
    }

    setOptions(options) {
        this.clearDropdown();
        options.forEach((option) => {
            this.addOption(option, option);
        });
    }

    addOption(text, value) {
        const option = document.createElement("OPTION");
        option.text = text;
        option.value = value;
        this.dropdown.options.add(option);
    }

    clearDropdown() {
        while (this.dropdown.options.length > 0) {
            this.dropdown.remove(0);
        }
    }
}
