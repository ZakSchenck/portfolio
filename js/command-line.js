const openCmdLineBtn = document.getElementById('home__cmd-line-btn');
const cmdLineContainer = document.querySelector('#home__command-line');
const blurOverlay = document.getElementById('blur-overlay');

document.getElementById('terminal-input').addEventListener('keypress', handleKeyPress);

openCmdLineBtn.addEventListener('click', () => {
    cmdLineContainer.style.display = 'block';
    blurOverlay.style.display = 'block';
})

/**
 * On enter key press for command line
 * @param {Event} event 
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submit action
        processCommand(this.value);
        this.value = ''; // Clear the input field for the next command
    }
}

/**
 * Final process of input command
 * @param {String} input 
 */
function processCommand(input) {
    const output = document.getElementById('output');
    appendMessage(output, '>>>', input);

    const response = processInput(input);
    appendMessage(output, '', response);
}

/**
 * Appends message to DOM command line
 * @param {HTMLElement} output 
 * @param {String} prefix 
 * @param {String} text 
 */
function appendMessage(output, prefix, text) {
    const line = document.createElement('h3');
    if (prefix) {
        const commandPrefix = document.createElement('span');
        commandPrefix.innerText = prefix;
        commandPrefix.style.marginRight = '6px';
        commandPrefix.style.color = 'red';
        line.appendChild(commandPrefix);
    }

    const textNode = document.createTextNode(text);
    line.appendChild(textNode);
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

/**
 * Returns text based from command line input
 * @param {*} input 
 * @returns 
 */
function processInput(input) {
    input = input.toLowerCase();
    if (input === 'help') {
        return 'Available commands: \nhome\nabout\nprojects\ncontact';
    } else {
        return `Unknown command: ${input}`;
    }
}


